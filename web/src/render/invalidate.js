// Source v keeps a scrolling tile cache. Changing textures must invalidate it.
export function invalidateGraphics(runtime,game){
 const seen=new Set();
 const visit=value=>{
  if(!value||typeof value!=='object'||seen.has(value)||ArrayBuffer.isView(value))return;
  seen.add(value);
  if(value.$class==='v')value['v.b:Z']=1;
  if(Array.isArray(value)||runtime.classes.has(value.$class))for(const child of Object.values(value))visit(child);
 };
 for(const cls of runtime.classes.values())for(const value of Object.values(cls.statics))visit(value);
 visit(game);game['s.p:Z']=1;
}
