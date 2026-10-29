import {FrameStore} from './frame-store.js?v=stream-1';
import {paletteTransfer,transferredTexture} from './drawn-palette.js';
// Smooth generated art. Never changes animator or simulation state.
export async function loadDrawnFrames(platform,manifest,{lazy=false}={}){
 const frames=new FrameStore(platform,manifest,{lazy});
 if(!lazy){frames.preloadAll();await platform.assets.wait();}
 return frames;
}
export function installDrawnRenderer(runtime,frames,baseImages,knownPaletteGroup=()=>false,enabled=()=>true){
 const key='a(Ljavax/microedition/lcdui/Graphics;IIII)V';
 const original=runtime.classes.get('g').methods.get(key);
 const stats={newDraws:0,oldDraws:0,composedFromRemasteredRegions:0,emptyDraws:0,paletteFallbacks:0,paletteTransfers:0,missing:{},fallbackReasons:{},directRegions:{},lastDraw:null};
 const transfers=new Map(),textures=new Map();
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
  const [graphics,frame,x,y,flip]=args,id=`${self['g.a:I']}:${frame}`,entry=frames.get(id);
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
  if(!image){frames.requestFrame?.(self['g.a:I'],frame);return;}
  if(canTransfer&&!entry.paletteRGB.every((v,i)=>v===targetPalette[i])){
   const paletteKey=entry.paletteRGB.join(',')+'>'+targetPalette.join(','),textureKey=id+'>'+paletteKey;
   if(!transfers.has(paletteKey))transfers.set(paletteKey,paletteTransfer(entry.paletteRGB,targetPalette));
   if(!textures.has(textureKey))textures.set(textureKey,transferredTexture(image,transfers.get(paletteKey)));
   image=textures.get(textureKey);stats.paletteTransfers++;
  }
  const [x0,y0,x1,y1]=entry.logicalBounds;
  const ox=flip&2?-x1:x0,oy=flip&1?-y1:y0;
  graphics.region(image,0,0,x1-x0,y1-y0,flip,x+ox,y+oy,20);
  stats.lastDraw={id,bounds:entry.logicalBounds,texture:[entry.image.width,entry.image.height,entry.image.scale],position:[x,y],flip};
  stats.newDraws++;
 });
 return stats;
}
