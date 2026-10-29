// Palette animation is source game logic, not AI generation. Transfer color
// changes in RGB space so new silhouettes never inherit the old pixel grid.
export function paletteTransfer(source,target){
 if(source.length!==target.length)throw Error('Palette length mismatch');
 const same=source.every((v,i)=>v===target[i]);
 const cache=new Map();
 return rgba=>{
  const out=new Uint8ClampedArray(rgba);
  if(same)return out;
  for(let p=0;p<out.length;p+=4){
   if(!out[p+3])continue;
   const r=out[p],g=out[p+1],b=out[p+2],key=(r<<16)|(g<<8)|b;
   let color=cache.get(key);
   if(!color){
    const nearest=[];
    // Index zero is the transparent color key; never attract opaque artwork.
    for(let i=3;i<source.length;i+=3){
     const distance=(r-source[i])**2+(g-source[i+1])**2+(b-source[i+2])**2;
     nearest.push([distance,i]);
    }
    nearest.sort((a,b)=>a[0]-b[0]);
    const samples=nearest[0][0]===0?[nearest[0]]:nearest.slice(0,4);
    const weights=samples.map(([d])=>1/Math.max(1,d)**2),sum=weights.reduce((a,b)=>a+b,0);
    color=[r,g,b].map((v,ch)=>Math.max(0,Math.min(255,Math.round(v+samples.reduce((a,[,i],n)=>a+weights[n]*(target[i+ch]-source[i+ch]),0)/sum))));
    cache.set(key,color);
   }
   out.set(color,p);
  }
  return out;
 };
}

export function transferredTexture(texture,transfer){
 const canvas=document.createElement('canvas');canvas.width=texture.canvas.width;canvas.height=texture.canvas.height;
 const source=texture.canvas.getContext('2d').getImageData(0,0,canvas.width,canvas.height);
 source.data.set(transfer(source.data));canvas.getContext('2d').putImageData(source,0,0);
 return {...texture,canvas};
}
