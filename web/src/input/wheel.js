import {canvasPoint} from './canvas-ui.js?v=1';

export function sourceScrollState(R){
 const get=key=>R.staticGet('n','n.'+key),screen=get('k:I');
 // n.a(Graphics) draws the scrollbar only for screens 9/10 when ag > ai.
 if(screen!==9&&screen!==10)return null;
 const viewport=get('ai:I'),max=get('ag:I')-viewport,content=get('a:Lt;');
 if(max<=0||!content)return null;
 return{screen,content,width:get('p:I'),height:get('r:I'),offset:get('ah:I'),max,viewport,lineHeight:R.call('t','b()I',content,[])};
}

export function scrollSourceText(R,delta){
 const state=sourceScrollState(R);if(!state||!Number.isFinite(delta))return 0;
 const next=Math.max(0,Math.min(state.max,state.offset+Math.trunc(delta))),moved=next-state.offset;
 if(moved){
  // Same offset, text displacement and repaint as n.b()'s keyboard scroll branch.
  R.staticSet('n','n.ah:I',next);
  R.call('t','a(I)V',state.content,[-moved]);
  R.call('s','o()V',R.platform.current,[],183);
 }
 return moved;
}

export function bindCanvasWheel(canvas,{getState,scrollBy,enabled=()=>true,signal}){
 let content=null,pending=0;
 const reset=()=>{content=null;pending=0;};
 canvas.addEventListener('wheel',event=>{
  if(!enabled()||event.ctrlKey||event.metaKey||event.shiftKey||!Number.isFinite(event.deltaY)||!event.deltaY){reset();return;}
  const state=getState(),rect=canvas.getBoundingClientRect();
  if(!state||!canvasPoint(event.clientX,event.clientY,rect,state.width,state.height)){reset();return;}
  const scale=Math.min(rect.width/state.width,rect.height/state.height);
  const unit=[1/scale,state.lineHeight,state.viewport][event.deltaMode??0];
  if(!(unit>0))return;
  // Consume even at a bound, so continued scrolling does not move the host page.
  event.preventDefault();
  if(content!==state.content){pending=0;content=state.content;}
  pending+=event.deltaY*unit;
  const amount=Math.trunc(pending);pending-=amount;
  const moved=amount?scrollBy(amount):0,offset=state.offset+moved;
  if(moved!==amount)pending=0;
  if(offset<=0&&pending<0||offset>=state.max&&pending>0)pending=0;
 },{signal,passive:false});
 canvas.addEventListener('mouseleave',reset,{signal});
 canvas.ownerDocument.defaultView.addEventListener('blur',reset,{signal});
 signal?.addEventListener('abort',reset,{once:true});
}
