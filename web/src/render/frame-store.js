// Source frame identity/geometry stays resident; physical pages have independent lifetimes.
export class FrameStore extends Map {
 constructor(platform,manifest,{lazy=true}={}){
  super();this.platform=platform;this.lazy=lazy;this.groups=new Map();this.pages=new Map();this.textures=this.pages;this.decodedBytes=0;this.onRelease=null;
  const atlas=manifest.schemaVersion===3;
  if(manifest.schemaVersion!==undefined&&![2,3].includes(manifest.schemaVersion))throw Error('Unsupported graphics manifest; reload the page');
  if(atlas)for(const p of manifest.pages??[]){
   if(this.pages.has(p.id)||!p.url||p.sizePx?.length!==2||p.sizePx.some(n=>!Number.isInteger(n)||n<=0||n%4)||!['pinned','scene'].includes(p.lifetime))throw Error('Invalid atlas page '+p.id);
   this.pages.set(p.id,{...p,width:p.sizePx[0]/4,height:p.sizePx[1]/4,pinned:p.lifetime==='pinned',image:null,promise:null,wanted:false});
  }
  for(const group of manifest.groups){
   this.groups.set(group.resourceId,group);
   const common=group.resourceId===25600?new Set(group.animations.slice(0,47).flat()):null;
   for(const frame of group.frames){
    const [x0,y0,x1,y1]=frame.logicalBounds,pinned=group.resourceId<11264||!!common?.has(frame.frame);
    let texture=null,rectPx=frame.rectPx??[0,0,(x1-x0)*4,(y1-y0)*4],offsetPx=frame.offsetPx??[0,0];
    if(frame.composed&&(![9218,30720].includes(group.resourceId)||frame.empty||frame.pageId))throw Error('Invalid composed frame');
    if(atlas&&!frame.empty&&!frame.composed&&frame.renderAlias===undefined){
     texture=this.pages.get(frame.pageId);if(!texture)throw Error('Unknown atlas page '+frame.pageId);
     if(texture.resourceId!==group.resourceId||texture.pinned!==pinned)throw Error('Invalid page resource/lifetime '+frame.pageId);
     const [x,y,w,h]=rectPx;
     if(rectPx.length!==4||offsetPx.length!==2||[...rectPx,...offsetPx].some(n=>!Number.isInteger(n)||n<0||n%4)||w<=0||h<=0||x+w>texture.width*4||y+h>texture.height*4||offsetPx[0]+w>(x1-x0)*4||offsetPx[1]+h>(y1-y0)*4)throw Error('Invalid atlas crop '+group.resourceId+':'+frame.frame);
    }else if(!atlas&&!frame.empty){
     texture=this.pages.get(frame.url);
     if(!texture){texture={url:frame.url,width:x1-x0,height:y1-y0,image:null,promise:null,pinned:false,wanted:false};this.pages.set(frame.url,texture);}
     if(texture.width!==x1-x0||texture.height!==y1-y0)throw Error('Inconsistent frame alias '+frame.url);
     texture.pinned||=pinned;
    }
    const entry={...frame,url:texture?.url,paletteRGB:group.paletteRGB,texture,rectPx,offsetPx};
    Object.defineProperty(entry,'image',{get:()=>entry.texture?.image??null});this.set(`${group.resourceId}:${frame.frame}`,entry);
   }
  }
  for(const [id,entry]of this)if(entry.renderAlias!==undefined){
   const resourceId=Number(id.split(':')[0]),target=this.get(`${resourceId}:${entry.renderAlias}`);
   if(!Number.isInteger(entry.renderAlias)||!target||target===entry||target.empty||target.composed||target.renderAlias!==undefined||entry.pageId)throw Error('Invalid frame alias '+id);
   entry.texture=target.texture;entry.url=target.url;entry.rectPx=target.rectPx;entry.offsetPx=target.offsetPx;entry.renderBounds=target.logicalBounds;
  }
 }
 ensure(entry){
  if(!entry||entry.empty||entry.composed)return null;const t=entry.texture;t.wanted=true;
  if(t.image||t.promise)return t.promise;
  t.promise=this.platform.assets.request('frame:'+t.url,async()=>{
   const load=t.id&&!t.standalone&&this.platform.loadAtlasPage?this.platform.loadAtlasPage:this.platform.loadImage;
   const image=await load.call(this.platform,t.url,t.width,t.height,4,t.sha256);
   if(image.canvas.width!==t.width*4||image.canvas.height!==t.height*4)throw Error('Invalid 4× frame/page '+t.url);
   if(t.wanted||t.pinned){t.image=image;this.decodedBytes+=image.canvas.width*image.canvas.height*4;}return image;
  });
  t.promise.then(()=>{t.promise=null;},()=>{t.promise=null;});return t.promise;
 }
 requestFrame(resourceId,frame){return this.ensure(this.get(`${resourceId}:${frame}`));}
 preloadSequence(resourceId,sequence){const group=this.groups.get(resourceId);for(const frame of group?.animations[sequence]??[])this.requestFrame(resourceId,frame);}
 preloadGroup(resourceId){
  const group=this.groups.get(resourceId);if(!group)return;
  if(resourceId===25600){for(let i=0;i<47;i++)this.preloadSequence(resourceId,i);}
  else for(const frame of group.frames)this.requestFrame(resourceId,frame.frame);
 }
 preloadAll(){for(const entry of this.values())this.ensure(entry);}
 releaseScene(){
  for(const t of this.pages.values())if(!t.pinned){t.wanted=false;if(t.image){this.decodedBytes-=t.image.canvas.width*t.image.canvas.height*4;t.image=null;}}
  this.onRelease?.();
 }
}

export function installStreamingHooks(runtime,frames){
 const wrap=(name,key,fn)=>{const method=runtime.classes.get(name)?.methods.get(key);if(method)runtime.method(name,key,(self,args)=>fn(method,self,args));};
 wrap('g','a(I)Lg;',(original,self,args)=>{const value=original(self,args);if(args[0]===25600)frames.preloadGroup(args[0]);return value;});
 wrap('o','a(I)V',(original,self,args)=>{const value=original(self,args);const id=self['o.a:Lg;']?.['g.a:I'];if(id!==undefined)frames.preloadSequence(id,args[0]);return value;});
 wrap('n','l(I)V',(original,self,args)=>{frames.releaseScene();return original(self,args);});
}
