// Metadata is cheap and stays resident. Decoded textures are fetched only for
// source animation groups/sequences that the running game actually opens.
export class FrameStore extends Map {
 constructor(platform,manifest,{lazy=true}={}){
  super();this.platform=platform;this.lazy=lazy;this.groups=new Map();this.textures=new Map();this.decodedBytes=0;this.onRelease=null;
  for(const group of manifest.groups){
   this.groups.set(group.resourceId,group);
   const common=group.resourceId===25600?new Set(group.animations.slice(0,47).flat()):null;
   for(const frame of group.frames){
    const [x0,y0,x1,y1]=frame.logicalBounds;
    let texture=this.textures.get(frame.url);
    if(!texture){texture={url:frame.url,width:x1-x0,height:y1-y0,image:null,promise:null,pinned:false};this.textures.set(frame.url,texture);}
    if(texture.width!==x1-x0||texture.height!==y1-y0)throw Error('Inconsistent frame alias '+frame.url);
    texture.pinned||=group.resourceId<11264||!!common?.has(frame.frame);
    const entry={...frame,paletteRGB:group.paletteRGB,texture};
    Object.defineProperty(entry,'image',{get:()=>texture.image});
    this.set(`${group.resourceId}:${frame.frame}`,entry);
   }
  }
 }
 ensure(entry){
  if(!entry||entry.empty)return null;const t=entry.texture;
  if(t.image||t.promise)return t.promise;
  t.promise=this.platform.assets.request('frame:'+t.url,async()=>{
   const image=await this.platform.loadImage(t.url,t.width,t.height,4);
   if(image.canvas.width!==t.width*4||image.canvas.height!==t.height*4)throw Error('Invalid 4× frame '+t.url);
   t.image=image;this.decodedBytes+=image.canvas.width*image.canvas.height*4;return image;
  });
  t.promise.then(()=>{t.promise=null;},()=>{t.promise=null;});return t.promise;
 }
 requestFrame(resourceId,frame){return this.ensure(this.get(`${resourceId}:${frame}`));}
 preloadSequence(resourceId,sequence){const group=this.groups.get(resourceId);for(const frame of group?.animations[sequence]??[])this.requestFrame(resourceId,frame);}
 preloadGroup(resourceId){
  const group=this.groups.get(resourceId);if(!group)return;
  // Player 0–46 are normal locomotion/combat. Longer scripted/QTE sequences
  // are requested by the real source animator when they begin.
  if(resourceId===25600){for(let i=0;i<47;i++)this.preloadSequence(resourceId,i);}
  else for(const frame of group.frames)this.requestFrame(resourceId,frame.frame);
 }
 preloadAll(){for(const entry of this.values())this.ensure(entry);}
 releaseScene(){
  for(const t of this.textures.values())if(t.image&&!t.pinned){this.decodedBytes-=t.image.canvas.width*t.image.canvas.height*4;t.image=null;}
  this.onRelease?.();
 }
}

export function installStreamingHooks(runtime,frames){
 const wrap=(name,key,fn)=>{const method=runtime.classes.get(name)?.methods.get(key);if(method)runtime.method(name,key,(self,args)=>fn(method,self,args));};
 wrap('g','a(I)Lg;',(original,self,args)=>{const value=original(self,args);frames.preloadGroup(args[0]);return value;});
 wrap('o','a(I)V',(original,self,args)=>{const value=original(self,args);const id=self['o.a:Lg;']?.['g.a:I'];if(id!==undefined)frames.preloadSequence(id,args[0]);return value;});
 wrap('n','l(I)V',(original,self,args)=>{frames.releaseScene();return original(self,args);});
}
