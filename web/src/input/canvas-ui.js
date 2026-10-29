// Source n.d(Graphics) draws this 18-unit softkey strip. n.a(Graphics,III)
// draws the carousel on screens 5/7/8, using the animated o actors d/e.
const softkeyScreens=new Set([5,7,8,9,10,12,13,14,16,17,18,20]);
const carouselScreens=new Set([5,7,8]);
const text=value=>value?.value??value;

export function canvasPoint(clientX,clientY,rect,width,height){
 const scale=Math.min(rect.width/width,rect.height/height);
 if(!(scale>0))return null;
 const x=(clientX-rect.left-(rect.width-width*scale)/2)/scale;
 const y=(clientY-rect.top-(rect.height-height*scale)/2)/scale;
 return x>=0&&y>=0&&x<width&&y<height?{x,y}:null;
}

export function sourceControls(R){
 const get=key=>R.staticGet('n','n.'+key),screen=get('k:I');
 const width=get('p:I')||320,height=get('r:I')||240,controls=[];
 const layout={screen,width,height,controls};
 if(!softkeyScreens.has(screen))return layout;
 const game=R.platform.current,label=id=>text(R.call('s','a(I)Ljava/lang/String;',game,[id],183));
 const reverse=!!R.staticGet('s','s.g:Z');
 for(const [side,id]of [['left',get(reverse?'bF:I':'bE:I')],['right',get(reverse?'bE:I':'bF:I')]]){
  if(id>=0)controls.push({id:'soft-'+side,key:side==='left'?'MouseSoftLeft':'MouseSoftRight',label:label(id),rect:{x:side==='left'?0:width/2,y:height-18,width:width/2,height:18}});
 }
 if(!carouselScreens.has(screen))return layout;
 const arrows=['d','e'].map((name,index)=>{
  const actor=get(name+':Lo;'),call=(method,args=[])=>R.call('o',method,actor,args);
  const x=call('e()I')+call('a(I)I',[0])-4;
  const h=Math.max(24,call('d(I)I',[0])+8),y=call('f()I')-h/2;
  const right=Math.min(width,x+call('c(I)I',[0])+8);
  return {id:index?'next':'previous',key:index?'MouseNext':'MousePrevious',label:index?'Następna opcja':'Poprzednia opcja',enabled:call('a()I')===(index?1:0),rect:{x:Math.max(0,x),y,width:right-Math.max(0,x),height:h}};
 });
 controls.push(...arrows.filter(a=>a.enabled));
 const line=get('E:I'),font=R.staticGet('f','f.a:[Lj;'),fontHeight=font[0]['j.h:S'];
 const x=arrows[0].rect.x+arrows[0].rect.width+4,right=arrows[1].rect.x-4;
 controls.push({id:'confirm',key:'MouseConfirm',label:label(get('p:[I')[get('bG:I')]&255),rect:{x,y:line-fontHeight,width:Math.max(0,right-x),height:fontHeight*2}});
 return layout;
}

export function hitControl(layout,x,y){
 return layout.controls.find(({rect:r})=>x>=r.x&&y>=r.y&&x<r.x+r.width&&y<r.y+r.height)??null;
}

export function bindCanvasUI(canvas,{actions,getLayout,enabled=()=>true,onInteract=()=>{},signal}){
 const target=canvas.ownerDocument.defaultView,options={signal};let active=null;
 const hit=event=>{
  if(!enabled())return null;
  const layout=getLayout(),point=canvasPoint(event.clientX,event.clientY,canvas.getBoundingClientRect(),layout.width,layout.height);
  return point&&hitControl(layout,point.x,point.y);
 };
 const release=()=>{if(active){actions.up(active);active=null;}};
 canvas.addEventListener('mousedown',event=>{
  if(event.button!==0||active)return;
  const control=hit(event);if(!control)return;
  event.preventDefault();canvas.focus();onInteract();active=control.key;actions.down(active);
 },options);
 target.addEventListener('mouseup',event=>{if(event.button===0)release();},options);
 canvas.addEventListener('mousemove',event=>{canvas.style.cursor=hit(event)?'pointer':'';},options);
 canvas.addEventListener('mouseleave',()=>{release();canvas.style.cursor='';},options);
 target.addEventListener('blur',release,options);
 signal?.addEventListener('abort',()=>{release();canvas.style.cursor='';},{once:true});
}
