// The three AI sword paintings have different silhouettes. The source game
// joins them with a vertical clip, which exposes a step in the blade. Render
// every state from the empty sword instead, changing only its interior color.
// This is a conventional HUD color effect, not another AI-generated asset.
export function swordChargePixels(rgba,width,height,active=false,scale=4){
 const out=new Uint8ClampedArray(rgba),guard=50*scale,edge=scale;
 for(let x=guard;x<width;x++){
  let top=height,bottom=-1;
  for(let y=0;y<height;y++)if(rgba[(y*width+x)*4+3]>128){top=Math.min(top,y);bottom=y;}
  // Preserve the exact outline and anti-aliased edge; charge stays inside it.
  for(let y=top+edge;y<bottom-edge;y++){
   const p=(y*width+x)*4,r=rgba[p],g=rgba[p+1],b=rgba[p+2];
   if(!rgba[p+3]||Math.max(r,g,b)-Math.min(r,g,b)>40)continue;
   const light=(r+g+b)/3;if(light<60)continue;
   out[p]=Math.round(100+light*(active?0.6:0.45));
   out[p+1]=Math.round(light*(active?0.18:0.08));
   out[p+2]=Math.round(light*(active?0.22:0.12));
  }
 }
 return out;
}
