import {FrameStore} from './frame-store.js?v=texture-1';
import {paletteTransfer,transferredRegionTexture} from './drawn-palette.js?v=atlas-1';
import {swordChargePixels} from './sword-meter.js?v=1';
// Smooth generated art. Never changes animator or simulation state.
export async function loadDrawnFrames(platform,manifest,{lazy=false}={}){
 const frames=new FrameStore(platform,manifest,{lazy});
 if(!lazy){frames.preloadAll();await platform.assets.wait();}
 return frames;
}
export function installDrawnRenderer(runtime,frames,baseImages,knownPaletteGroup=()=>false,enabled=()=>true){
 const key='a(Ljavax/microedition/lcdui/Graphics;IIII)V';
 const original=runtime.classes.get('g').methods.get(key);
 const stats={newDraws:0,oldDraws:0,composedFromRemasteredRegions:0,emptyDraws:0,paletteFallbacks:0,paletteTransfers:0,palettePairs:{},missing:{},fallbackReasons:{},directRegions:{},lastDraw:null};
 const transfers=new Map(),textures=new Map();
 Object.defineProperty(stats,'paletteBytes',{enumerable:true,get:()=>[...textures.values()].reduce((n,t)=>n+t.canvas.width*t.canvas.height*4,0)});
 if(frames.lazy)frames.onRelease=()=>{transfers.clear();textures.clear();};
 let composedDepth=0;
 const regionKey='a(Ljavax/microedition/lcdui/Graphics;III)V',originalRegion=runtime.classes.get('j')?.methods.get(regionKey);
 if(originalRegion)runtime.method('j',regionKey,(self,args)=>{
  if(!composedDepth){
   const image=self['j.a:Ljavax/microedition/lcdui/Image;'],base=image.sourceEntry??image;
   const rect=['i','j','c','d'].map(k=>self[`j.${k}:S`]).join(','),id=`${base.info?.filename??'unknown'}:${rect}`;
   const record=stats.directRegions[id]??={draws:0,remastered:!!(base.drawnFullImage||base.drawnRects?.has(rect)),paletteChanged:image!==base};record.draws++;
  }
  return originalRegion(self,args);
 });
 runtime.method('g',key,(self,args)=>{
  if(!enabled())return original(self,args);
  const [graphics,frame,x,y,flip]=args,id=`${self['g.a:I']}:${frame}`;
  const sword=self['g.a:I']===2048&&frame>=1&&frame<=3;
  const entry=frames.get(sword?'2048:1':id);
  if(entry?.empty){stats.emptyDraws++;return;}
  // These groups are assembled from independently remastered regions. Keep
  // original offsets, mirroring and composition for every particle/prop frame.
  if([9218,30720].includes(self['g.a:I'])&&self['g.a:[Lj;'].length&&self['g.a:[Lj;'].every(j=>{
   const image=j['j.a:Ljavax/microedition/lcdui/Image;'],base=image.sourceEntry??image;
   const rect=['i','j','c','d'].map(k=>j[`j.${k}:S`]).join(',');
   return base.drawnFullImage||base.drawnRects?.has(rect);
  })){
   stats.newDraws++;stats.composedFromRemasteredRegions++;
   composedDepth++;try{return original(self,args);}finally{composedDepth--;}
  }
  // Transfer original palette substitutions onto smooth generated colors.
  const imageEntries=[...new Set(self['g.a:[Lj;'].map(j=>j['j.a:Ljavax/microedition/lcdui/Image;']))];
  const targetPalette=imageEntries[0]?.sourcePalette??imageEntries[0]?.info?.paletteRGB;
  const canTransfer=entry?.paletteRGB&&targetPalette&&targetPalette.length===entry.paletteRGB.length&&imageEntries.every(im=>im===imageEntries[0]||JSON.stringify(im.sourcePalette??im.info?.paletteRGB)===JSON.stringify(targetPalette));
  const paletteChanged=entry&&!canTransfer&&baseImages&&!knownPaletteGroup(self)&&imageEntries.some(im=>!baseImages.has(im));
  if(!entry||flip<0||flip>3||paletteChanged){
   stats.oldDraws++;if(paletteChanged)stats.paletteFallbacks++;
   stats.missing[id]=(stats.missing[id]??0)+1;
   const reason=!entry?'missing-frame':flip<0||flip>3?'transform':'palette';
   const bucket=stats.fallbackReasons[reason]??={};bucket[id]=(bucket[id]??0)+1;
   composedDepth++;try{return original(self,args);}finally{composedDepth--;}
  }
  let image=entry.image;
  const [x0,y0,x1,y1]=entry.renderBounds??entry.logicalBounds,[cx,cy]=entry.offsetPx??[0,0];
  const [rx,ry,rw,rh]=entry.rectPx??[0,0,(x1-x0)*4,(y1-y0)*4];
  let sx=rx/4,sy=ry/4;const w=rw/4,h=rh/4;
  const left=x0+cx/4,top=y0+cy/4,ox=flip&2?-(left+w):left,oy=flip&1?-(top+h):top;
  if(graphics.visible&&!graphics.visible(x+ox,y+oy,w,h))return;
  if(!image){frames.requestFrame?.(self['g.a:I'],sword?1:frame);return;}
  if(canTransfer&&!entry.paletteRGB.every((v,i)=>v===targetPalette[i])){
   const paletteKey=entry.paletteRGB.join(',')+'>'+targetPalette.join(','),textureKey=(entry.texture?.url??id)+':'+[rx,ry,rw,rh].join(',')+'>'+paletteKey;
   if(!transfers.has(paletteKey))transfers.set(paletteKey,paletteTransfer(entry.paletteRGB,targetPalette));
   stats.palettePairs[paletteKey]={source:entry.paletteRGB,target:targetPalette};
   if(!textures.has(textureKey))textures.set(textureKey,transferredRegionTexture(image,[rx,ry,rw,rh],transfers.get(paletteKey)));
   image=textures.get(textureKey);sx=sy=0;stats.paletteTransfers++;
  }
  if(sword&&frame!==1){
   const textureKey='sword:'+frame+':'+(entry.texture?.url??'2048:1')+':'+(targetPalette?.join(',')??'canonical');
   if(!textures.has(textureKey))textures.set(textureKey,transferredRegionTexture(image,[sx*4,sy*4,rw,rh],pixels=>swordChargePixels(pixels,rw,rh,frame===3)));
   image=textures.get(textureKey);sx=sy=0;
  }
  graphics.region(image,sx,sy,w,h,flip,x+ox,y+oy,20);
  stats.lastDraw={id,bounds:entry.logicalBounds,texture:[entry.image.width,entry.image.height,entry.image.scale],position:[x,y],flip};
  stats.newDraws++;
 });
 return stats;
}
