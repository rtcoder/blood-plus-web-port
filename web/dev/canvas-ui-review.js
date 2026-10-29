import {sourceControls,canvasPoint} from '../src/input/canvas-ui.js?v=1';
const iframe=document.querySelector('iframe'),status=document.querySelector('#status'),out=document.querySelector('#report');
const buttons=['run','menu','retry'].map(id=>document.getElementById(id));
const frame=()=>new Promise(resolve=>requestAnimationFrame(resolve));
const report={status:'ready',method:'Main index.html in iframe; original source UI fields/arrow bounds; DOM mouse events and 20ms updates; native clicks separately recorded. User RMS detached. Explicit source fixture loads/menu/retry, no claim of ordinary campaign progression.',checks:[],native:[]};
let b,w,d,canvas,armed=false,active=null;
const show=()=>out.textContent=JSON.stringify(report,null,2);
const value=k=>b.runtime.staticGet('n','n.'+k);
const state=()=>({screen:value('k:I'),selection:value('bG:I')});
const tick=n=>{for(let i=0;i<n;i++)b.update(20);b.render();};
const check=(name,pass,details={})=>{report.checks.push({name,pass:!!pass,...details});if(!pass)throw Error(name);};
const key=(code,down)=>w.dispatchEvent(new w.KeyboardEvent(down?'keydown':'keyup',{code,bubbles:true,cancelable:true}));
const layout=()=>sourceControls(b.runtime);
function location(control){const l=layout(),rect=canvas.getBoundingClientRect(),scale=Math.min(rect.width/l.width,rect.height/l.height);return{x:rect.left+(rect.width-l.width*scale)/2+(control.rect.x+control.rect.width/2)*scale,y:rect.top+(rect.height-l.height*scale)/2+(control.rect.y+control.rect.height/2)*scale};}
function mouse(type,p,target=canvas){const e=new w.MouseEvent(type,{button:0,clientX:p.x,clientY:p.y,bubbles:true,cancelable:true});target.dispatchEvent(e);return e;}
function click(id){const control=layout().controls.find(c=>c.id===id);if(!control)throw Error('Missing control '+id);const p=location(control);mouse('mousedown',p);mouse('mouseup',p,w);tick(1);tick(100);return control;}
function shot(label){const f=document.createElement('figure'),img=document.createElement('img'),caption=document.createElement('figcaption');img.src=canvas.toDataURL();img.alt=caption.textContent=label;f.append(img,caption);document.querySelector('#shots').append(f);}
function menu(){b.actions.clear();b.runtime.call('n','g(II)V',b.game,[5,0],183);tick(20);}
function retry(){
 b.actions.clear();b.runtime.call('n','l(I)V',b.game,[4],183);tick(100);if(value('k:I')===13){key('KeyE',true);tick(1);key('KeyE',false);tick(2);}
 b.runtime.call('n','a(Z)V',b.game,[0]);tick(20);b.game['s.p:Z']=1;b.render();
}
async function run(){buttons.forEach(b=>b.disabled=true);try{
 report.checks=[];document.querySelector('#shots').replaceChildren();
 check('starts at language picker',value('k:I')===8);click('confirm');check('center selects Polish',value('a:B')===30&&value('k:I')===12);
 click('soft-right');check('audio No opens main menu',value('k:I')===5);
 menu();shot('Menu: klikalne strzałki, Graj i dolne opcje');
 click('next');check('right arrow selects Arena',value('bG:I')===3);click('previous');check('left arrow returns to Graj',value('bG:I')===1);
 click('confirm');check('click Graj opens chapter picker',value('bG:I')===11);click('soft-right');check('click back returns to menu',value('bG:I')===1);
 click('soft-right');check('click Wyjdź opens confirmation',value('k:I')===12);click('soft-right');check('click Nie cancels quit',value('k:I')===5);
 retry();shot('Ponowna próba: klikalne Tak i Nie');click('soft-left');check('click Tak resumes gameplay',value('k:I')===6);
 retry();click('soft-right');check('click Nie returns to menu',value('k:I')===5);
 for(const [width,height]of [[360,640],[960,500]]){
  iframe.style.width=width+'px';iframe.style.height=height+'px';await frame();menu();
  click('next');check(`scaled right arrow ${width}x${height}`,value('bG:I')===3);click('previous');check(`scaled left arrow ${width}x${height}`,value('bG:I')===1);
  const rect=canvas.getBoundingClientRect(),p={x:rect.left+1,y:rect.top+rect.height/2};
  if(!canvasPoint(p.x,p.y,rect,320,240)){
   const before=state();mouse('mousedown',p);mouse('mouseup',p,w);tick(2);
   check('letterbox click does not activate menu',JSON.stringify(state())===JSON.stringify(before));
  }
 }
 iframe.style.width='740px';iframe.style.height='720px';await frame();menu();
 const control=layout().controls.find(c=>c.id==='next'),p=location(control);mouse('mousemove',p);
 check('hover exposes pointer cursor',canvas.style.cursor==='pointer');
 mouse('mousedown',p);w.dispatchEvent(new w.Event('blur'));
 check('blur clears pending UI click and pauses',b.loop.paused&&!b.actions.held.size&&!b.actions.pendingRelease.size);
 d.querySelector('#resume').click();b.loop.stop();b.loop.resume();menu();
 check('no unexpected runtime errors',b.runtime.caught.every(e=>e.type.endsWith('RecordStoreNotFoundException')));
 report.status='PASS';status.textContent=`PASS · ${report.checks.length} kontroli menu`;
}catch(e){report.status='FAIL';report.error=e.stack;status.textContent='FAIL: '+e.message;console.error(e);}finally{buttons.forEach(b=>b.disabled=false);show();}}
function prepare(fn){d.querySelector('#resume').click();b.loop.stop();b.loop.resume();fn();armed=true;b.loop.start();updateTargets();}
function updateTargets(){const l=layout();document.querySelector('#targets').textContent=JSON.stringify({screen:l.screen,width:l.width,height:l.height,controls:l.controls.map(c=>({id:c.id,label:c.label,rect:c.rect}))});}
try{
 while(!iframe.contentWindow.blood)await frame();w=iframe.contentWindow;d=w.document;b=w.blood;canvas=d.querySelector('canvas');
 b.loop.stop();b.loop.resume();b.platform.records.records={};b.platform.records.storage={getItem:()=>null,setItem:()=>{}};tick(600);
 canvas.addEventListener('mousedown',e=>{if(armed&&e.isTrusted){const l=layout(),p=canvasPoint(e.clientX,e.clientY,canvas.getBoundingClientRect(),l.width,l.height),control=p&&l.controls.find(c=>p.x>=c.rect.x&&p.y>=c.rect.y&&p.x<c.rect.x+c.rect.width&&p.y<c.rect.y+c.rect.height);active={label:control?.label,id:control?.id,before:state(),released:false};}});
 w.addEventListener('mouseup',e=>{if(active&&e.isTrusted)active.released=true;});
 const observe=()=>{if(active?.released){active.after=state();active.trusted=true;report.native.push(active);document.querySelector('#native-status').textContent=report.native.map(c=>`${c.label}: ${c.before.screen}/${c.before.selection} → ${c.after.screen}/${c.after.selection}`).join(' · ');active=null;show();updateTargets();}requestAnimationFrame(observe);};requestAnimationFrame(observe);
 buttons[0].onclick=run;buttons[1].onclick=()=>prepare(menu);buttons[2].onclick=()=>prepare(retry);buttons.forEach(b=>b.disabled=false);status.textContent='Gotowe';
}catch(e){status.textContent='FAIL: '+e.message;}
