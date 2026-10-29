import {JavaError} from './java-compat.js';
import {CanvasGraphics,makeSurface,defaultFont,pngChunks,idatHash} from '../render/canvas.js';
import {paletteTransfer,transferredTexture} from '../render/drawn-palette.js';
import {RecordStorage} from '../storage/records.js?v=shell-en-1';
import {createMidiPlayer} from '../audio/midi.js';
export class BrowserPlatform {
 constructor(canvas){this.surface={canvas,width:320,height:240,scale:4};this.graphics=new CanvasGraphics(this.surface);this.resources=new Map();this.images=new Map();this.graphics.smoothPrimitives=true;this.current=null;this.properties={};this.records=new RecordStorage();this.paletteCache=new Map();this.width=320;this.height=240;this.stopped=false;}
 async load(){const manifest=await (await fetch('assets/manifest.json',{cache:'no-store'})).json();this.properties=await(await fetch('assets/data/properties.json')).json();this.properties['Glu-Wap-Type']??='0';const names=Array.from({length:30},(_,i)=>'RP'+(i+1)).concat(Array.from({length:12},(_,i)=>'RP'+(i+41)),['RP54','RP55','brand0.png','i.png']);await Promise.all(names.map(async n=>this.resources.set(n,new Uint8Array(await(await fetch('assets/data/'+n)).arrayBuffer()))));await Promise.all(manifest.images.map(async info=>{const texture=await this.loadImage(info.finalTexture+'?v='+info.finalSha256,info.width,info.height,4);const indices=new Uint8Array(await(await fetch(info.paletteIndices)).arrayBuffer());const entry={...texture,info,texture,indices,drawnFullImage:info.drawnFullImage,drawnRects:new Set(info.drawnRects)};entry.variant=()=>entry.texture;this.images.set(info.idatByteHash,entry);}));}
 async loadImage(url,width,height,scale){let image=new Image();image.src=url;await image.decode();const canvas=document.createElement('canvas');canvas.width=image.width;canvas.height=image.height;canvas.getContext('2d').drawImage(image,0,0);return {canvas,width,height,scale,$class:'javax/microedition/lcdui/Image'};}
 resourceStream(name){let bytes=this.resources.get(name.replace(/^\//,''));if(!bytes)throw new JavaError('java/io/IOException','Missing resource '+name);return {$class:'java/io/ByteArrayInputStream',bytes,pos:0,end:bytes.length};}
 imageFromBytes(bytes){const hash=idatHash(bytes),entry=this.images.get(hash);if(!entry)throw Error('Unmapped image IDAT '+hash);const chunks=pngChunks(bytes),palette=chunks.PLTE?.[0];if(!palette)return entry;const key=hash+':'+Array.from(palette).join(',');if(this.paletteCache.has(key))return this.paletteCache.get(key);const basePalette=entry.info.paletteRGB;
 if(!basePalette||palette.every((v,i)=>v===basePalette[i])){this.paletteCache.set(key,entry);return entry;}
 // Apply the same source palette-index delta to learned texture residuals.
 const recolor=texture=>{const out=makeSurface(texture.width,texture.height,texture.scale),ctx=out.canvas.getContext('2d');const pix=texture.canvas.getContext('2d').getImageData(0,0,texture.canvas.width,texture.canvas.height),s=texture.scale;
 for(let y=0;y<out.canvas.height;y++)for(let x=0;x<out.canvas.width;x++){const idx=entry.indices[Math.floor(y/s)*entry.width+Math.floor(x/s)]*3;const offset=(y*out.canvas.width+x)*4;for(let ch=0;ch<3;ch++)pix.data[offset+ch]+=palette[idx+ch]-basePalette[idx+ch];}
 ctx.putImageData(pix,0,0);return out;};
 const texture=entry.drawnFullImage||entry.drawnRects.size?transferredTexture(entry.texture,paletteTransfer(basePalette,Array.from(palette))):recolor(entry.texture);const swapped={...texture,sourceEntry:entry,sourcePalette:Array.from(palette),variant:()=>texture};this.paletteCache.set(key,swapped);return swapped;}

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
