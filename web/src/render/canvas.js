// MIDP Graphics geometry expressed in logical pixels; backing pixels are independent.
export function makeSurface(width,height,scale=4){const canvas=document.createElement('canvas');canvas.width=width*scale;canvas.height=height*scale;return {canvas,width,height,scale,$class:'javax/microedition/lcdui/Image'};}
export const defaultFont={height:16,baseline:12,css:'16px sans-serif',$class:'javax/microedition/lcdui/Font'};
export class CanvasGraphics {
 constructor(surface){this.surface=surface;this.ctx=surface.canvas.getContext('2d',{willReadFrequently:true});this.$class='javax/microedition/lcdui/Graphics';this.font=defaultFont;this.reset();}
 reset(){this.tx=0;this.ty=0;this.clip=[0,0,this.surface.width,this.surface.height];this.color=0;}
 visible(x,y,w,h){const [cx,cy,cw,ch]=this.clip;return w>0&&h>0&&cw>0&&ch>0&&x+this.tx<Math.min(this.surface.width,cx+cw)&&y+this.ty<Math.min(this.surface.height,cy+ch)&&x+this.tx+w>Math.max(0,cx)&&y+this.ty+h>Math.max(0,cy);}
 draw(fn){const c=this.ctx,s=this.surface.scale;c.save();c.setTransform(s,0,0,s,0,0);c.imageSmoothingEnabled=false;c.beginPath();c.rect(...this.clip);c.clip();c.translate(this.tx,this.ty);c.fillStyle=c.strokeStyle='#'+(this.color&0xffffff).toString(16).padStart(6,'0');fn(c);c.restore();}
 call(name,a){if(name==='getColor')return this.color;if(name==='setColor'){this.color=a[0];return;}if(name==='getFont')return this.font;if(name==='setFont'){this.font=a[0];return;}if(name==='translate'){this.tx+=a[0];this.ty+=a[1];return;}if(name==='setClip'){this.clip=[a[0]+this.tx,a[1]+this.ty,Math.max(0,a[2]),Math.max(0,a[3])];return;}if(name==='getClipX')return this.clip[0]-this.tx;if(name==='getClipY')return this.clip[1]-this.ty;if(name==='getClipWidth')return this.clip[2];if(name==='getClipHeight')return this.clip[3];
 if(name==='fillRect')return this.draw(c=>c.fillRect(...a));
 if(name==='drawRect')return this.draw(c=>{c.lineWidth=1;c.strokeRect(a[0]+.5,a[1]+.5,a[2],a[3]);});
 if(name==='drawLine')return this.draw(c=>{c.beginPath();c.moveTo(a[0]+.5,a[1]+.5);c.lineTo(a[2]+.5,a[3]+.5);c.stroke();});
 if(name==='fillTriangle')return this.draw(c=>{
  // The drawn remaster rasterizes the original polygon at backing resolution.
  // Reference mode retains the phone's integer scanlines for parity captures.
  if(this.smoothPrimitives){c.beginPath();c.moveTo(a[0],a[1]);c.lineTo(a[2],a[3]);c.lineTo(a[4],a[5]);c.closePath();c.fill();}
  else for(const [x,y,w]of triangleSpans(a))c.fillRect(x,y,w,1);
 });
 if(name==='drawImage'){const [im,x,y,anchor]=a;return this.region(im,0,0,im.width,im.height,0,x,y,anchor);}
 if(name==='drawRegion')return this.region(...a);
 if(name==='drawChars'){const [ch,off,len,x,y,anchor]=a;const txt=String.fromCharCode(...ch.slice(off,off+len));return this.draw(c=>{c.font=this.font.css;c.textBaseline=anchor&64?'alphabetic':'top';c.textAlign=anchor&8?'right':anchor&1?'center':'left';c.fillText(txt,x,y);});}
 throw Error('Unsupported Graphics.'+name);}
 region(im,sx,sy,w,h,t,x,y,anchor){if(w<=0||h<=0)return;const swap=!!(t&4),dw=swap?h:w,dh=swap?w:h;if(anchor&8)x-=dw;else if(anchor&1)x-=dw>>1;if(anchor&32)y-=dh;else if(anchor&2)y-=dh>>1;
 if(!this.visible(x,y,dw,dh))return;
 const mats=[[1,0,0,1], [1,0,0,-1],[-1,0,0,1],[-1,0,0,-1],[0,1,1,0],[0,1,-1,0],[0,-1,1,0],[0,-1,-1,0]];
 const [a,b,c,d]=mats[t];const ox=(a<0?w:0)+(c<0?h:0),oy=(b<0?w:0)+(d<0?h:0);
 const texture=im.variant?im.variant():im;
 if(!texture)return; // Streaming barrier will repaint after the texture arrives.
 this.draw(ctx=>{ctx.translate(x+ox,y+oy);ctx.transform(a,b,c,d,0,0);ctx.drawImage(texture.canvas,sx*texture.scale,sy*texture.scale,w*texture.scale,h*texture.scale,0,0,w,h);});}
}
export function pngChunks(bytes){const out={};const v=new DataView(bytes.buffer,bytes.byteOffset,bytes.byteLength);for(let p=8;p+12<=bytes.length;){const n=v.getUint32(p);const type=String.fromCharCode(...bytes.slice(p+4,p+8));(out[type]??=[]).push(bytes.slice(p+8,p+8+n));p+=n+12;}return out;}
export function idatHash(bytes){let h=2166136261;for(const chunk of pngChunks(bytes).IDAT??[])for(const b of chunk)h=Math.imul(h^b,16777619)>>>0;return h;}
// Integer scan conversion: MIDP reference has no Canvas polygon antialiasing.
// Top/left inclusive, bottom/right exclusive; intersections truncate toward zero.
export function* triangleSpans(points){
 const vertices=[[points[0],points[1]],[points[2],points[3]],[points[4],points[5]]];
 const ys=vertices.map(p=>p[1]);
 for(let y=Math.min(...ys);y<Math.max(...ys);y++){
  const crossings=[];
  for(let i=0;i<3;i++){
   const [x0,y0]=vertices[i],[x1,y1]=vertices[(i+1)%3];
   if(y<Math.min(y0,y1)||y>=Math.max(y0,y1))continue;
   crossings.push(Math.trunc((x0*(y1-y0)+(y-y0)*(x1-x0))/(y1-y0))|0);
  }
  crossings.sort((a,b)=>a-b);
  if(crossings.length===2&&crossings[1]>crossings[0])yield [crossings[0],y,crossings[1]-crossings[0]];
 }
}
