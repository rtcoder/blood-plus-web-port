import {AssetQueue} from './assets.js?v=atlas-1';
import {JavaError} from './java-compat.js';
import {CanvasGraphics,makeSurface,defaultFont,pngChunks,idatHash} from '../render/canvas.js?v=texture-1';
import {paletteTransfer,transferredTexture} from '../render/drawn-palette.js?v=atlas-1';
import {RecordStorage} from '../storage/records.js?v=shell-en-1';
import {createMidiPlayer} from '../audio/midi.js';
export class BrowserPlatform {
 constructor(canvas){this.surface={canvas,width:320,height:240,scale:4};this.graphics=new CanvasGraphics(this.surface);this.assets=new AssetQueue();this.atlasDecodes=new AssetQueue({concurrency:2});this.resources=new Map();this.images=new Map();this.graphics.smoothPrimitives=true;this.current=null;this.properties={};this.records=new RecordStorage();this.paletteCache=new Map();this.width=320;this.height=240;this.stopped=false;}
 async load({lazyTextures=false}={}){
  const manifest=await(await this.fetchResource('assets/manifest.json?v=texture-1')).json();
  this.properties=await(await this.fetchResource('assets/data/properties.json')).json();this.properties['Glu-Wap-Type']??='0';
  const names=Array.from({length:30},(_,i)=>'RP'+(i+1)).concat(Array.from({length:12},(_,i)=>'RP'+(i+41)),['RP54','RP55','brand0.png']);
  await Promise.all(names.map(async n=>this.resources.set(n,new Uint8Array(await(await this.fetchResource('assets/data/'+n)).arrayBuffer()))));
  for(const info of manifest.images){
   const entry={width:info.width,height:info.height,scale:4,$class:'javax/microedition/lcdui/Image',info,texture:null,promise:null,indices:null,drawnFullImage:info.drawnFullImage,drawnRects:new Set(info.drawnRects)};
   entry.ensure=()=>{
    if(entry.texture||entry.promise)return entry.promise;
    if(!info.finalTexture)throw Error('Unexpected draw of retired texture '+info.filename);
    entry.promise=this.assets.request('atlas:'+info.finalTexture,async()=>{
     const texture=await this.loadImage(info.finalTexture+'?v='+info.finalSha256,info.width,info.height,4);
     if(texture.canvas.width!==info.width*4||texture.canvas.height!==info.height*4)throw Error('Invalid 4× atlas '+info.filename);
     entry.texture=texture;return texture;
    });return entry.promise;
   };
   entry.ensureIndices=()=>{
    if(entry.indices||entry.indicesPromise)return entry.indicesPromise;
    if(!info.paletteIndices)throw Error('Unexpected indexed palette draw '+info.filename);
    return entry.indicesPromise=this.assets.request('indices:'+info.paletteIndices,async()=>{
     const bytes=new Uint8Array(await(await this.fetchResource(info.paletteIndices)).arrayBuffer());
     if(bytes.length!==info.width*info.height)throw Error('Invalid palette indices '+info.filename);
     entry.indices=bytes;return bytes;
    });
   };
   entry.variant=()=>{entry.ensure();return entry.texture;};this.images.set(info.idatByteHash,entry);
   if(!lazyTextures&&info.finalTexture)entry.ensure();
  }
  if(!lazyTextures)await this.assets.wait();
 }
 async fetchResource(url){const response=await fetch(url);if(!response.ok)throw Error('Could not load '+url+' (HTTP '+response.status+')');return response;}

 async loadImage(url,width,height,scale){let image=new Image();image.src=url;await image.decode();const canvas=document.createElement('canvas');canvas.width=image.width;canvas.height=image.height;canvas.getContext('2d').drawImage(image,0,0);return {canvas,width,height,scale,$class:'javax/microedition/lcdui/Image'};}
 async loadAtlasPage(url,width,height,scale,sha256){
  const blob=await(await this.fetchResource(url)).blob();
  if(sha256&&globalThis.crypto?.subtle){const hash=Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256',await blob.arrayBuffer())),n=>n.toString(16).padStart(2,'0')).join('');if(hash!==sha256)throw Error('Graphics page checksum mismatch; reload the page');}
  return this.atlasDecodes.request(url,async()=>{
   if(typeof createImageBitmap!=='function'){const local=URL.createObjectURL(blob);try{return await this.loadImage(local,width,height,scale);}finally{URL.revokeObjectURL(local);}}
   const image=await createImageBitmap(blob);try{
    const canvas=document.createElement('canvas');canvas.width=image.width;canvas.height=image.height;canvas.getContext('2d').drawImage(image,0,0);
    return {canvas,width,height,scale,$class:'javax/microedition/lcdui/Image'};
   }finally{image.close();}
  });
 }
 resourceStream(name){let bytes=this.resources.get(name.replace(/^\//,''));if(!bytes)throw new JavaError('java/io/IOException','Missing resource '+name);return {$class:'java/io/ByteArrayInputStream',bytes,pos:0,end:bytes.length};}
 imageFromBytes(bytes){const hash=idatHash(bytes),entry=this.images.get(hash);if(!entry)throw Error('Unmapped image IDAT '+hash);const chunks=pngChunks(bytes),palette=chunks.PLTE?.[0];if(!palette)return entry;const key=hash+':'+Array.from(palette).join(',');if(this.paletteCache.has(key))return this.paletteCache.get(key);const basePalette=entry.info.paletteRGB;
 if(!basePalette||palette.every((v,i)=>v===basePalette[i])){this.paletteCache.set(key,entry);return entry;}
 // Apply the same source palette-index delta to learned texture residuals.
 const recolor=texture=>{const out=makeSurface(texture.width,texture.height,texture.scale),ctx=out.canvas.getContext('2d');const pix=texture.canvas.getContext('2d').getImageData(0,0,texture.canvas.width,texture.canvas.height),s=texture.scale;
 for(let y=0;y<out.canvas.height;y++)for(let x=0;x<out.canvas.width;x++){const idx=entry.indices[Math.floor(y/s)*entry.width+Math.floor(x/s)]*3;const offset=(y*out.canvas.width+x)*4;for(let ch=0;ch<3;ch++)pix.data[offset+ch]+=palette[idx+ch]-basePalette[idx+ch];}
 ctx.putImageData(pix,0,0);return out;};
 const swapped={width:entry.width,height:entry.height,scale:4,$class:'javax/microedition/lcdui/Image',sourceEntry:entry,sourcePalette:Array.from(palette)};
 let texture=null;Object.defineProperty(swapped,'derivedTexture',{get:()=>texture});swapped.variant=()=>{entry.ensure();const smooth=entry.drawnFullImage||entry.drawnRects.size;if(!smooth)entry.ensureIndices();if(!entry.texture||(!smooth&&!entry.indices))return null;return texture??=smooth?transferredTexture(entry.texture,paletteTransfer(basePalette,Array.from(palette))):recolor(entry.texture);};this.paletteCache.set(key,swapped);return swapped;}

 call(c,k,o,a){const name=k.slice(0,k.indexOf('('));
 if(c==='javax/microedition/midlet/MIDlet'){if(name==='<init>')return;if(name==='getAppProperty')return this.properties[a[0]]??null;if(name==='notifyDestroyed'){this.stopped=true;return;}if(name==='platformRequest'){throw new JavaError('javax/microedition/io/ConnectionNotFoundException','External promotional link disabled in local port');}}
 if(c==='javax/microedition/lcdui/Canvas'){if(['<init>','keyPressed','keyReleased','keyRepeated','setFullScreenMode','repaint','serviceRepaints'].includes(name))return;}
 if(c==='javax/microedition/lcdui/Displayable'||c==='javax/microedition/lcdui/Canvas'){if(name==='getWidth')return this.width;if(name==='getHeight')return this.height;if(name==='isShown')return 1;}
 if(c==='javax/microedition/lcdui/Display'){if(name==='getDisplay')return {$class:c};if(name==='setCurrent'){this.current=a[0];return;}}
 if(c==='javax/microedition/lcdui/Font'){if(name==='getFont')return defaultFont;if(name==='getHeight')return o.height;if(name==='getBaselinePosition')return o.baseline;if(name==='charsWidth'){const ctx=this.graphics.ctx;ctx.font=o.css;return Math.round(ctx.measureText(String.fromCharCode(...a[0].slice(a[1],a[1]+a[2]))).width);}}
 if(c==='javax/microedition/lcdui/Graphics')return o.call(name,a);
 if(c==='javax/microedition/lcdui/Image'){
  if(name==='createImage'){if(k.startsWith('createImage(II)')){return makeSurface(a[0],a[1]);}const bytes=typeof a[0]==='string'?this.resources.get(a[0].replace(/^\//,'')):new Uint8Array(a[0].slice(a[1],a[1]+a[2]));return this.imageFromBytes(bytes);}
  if(name==='getWidth')return o.width;if(name==='getHeight')return o.height;if(name==='getGraphics')return o.graphics??(o.graphics=new CanvasGraphics(o));
 }
 if(c==='javax/microedition/rms/RecordStore')return this.records.call(name,o,a);
 if(c==='javax/microedition/media/Manager'&&name==='createPlayer'){const stream=a[0];const player=createMidiPlayer(new Uint8Array(stream.bytes.slice(stream.pos,stream.end)));return Object.assign(player,{$class:'javax/microedition/media/Player'});}
 if(c.startsWith('javax/microedition/media/')){const result=o[name](...a);if(name==='getControl'&&result)result.$class='javax/microedition/media/control/VolumeControl';return result;}
 throw Error('Unsupported browser API '+c+'.'+k);
 }
}
