import {sourceScrollState} from '../src/input/wheel.js?v=1';
const iframe=document.querySelector('iframe'),runButton=document.querySelector('#run'),nativeButton=document.querySelector('#native'),status=document.querySelector('#status'),out=document.querySelector('#report');
const frame=()=>new Promise(resolve=>requestAnimationFrame(resolve));
const report={status:'ready',method:'Main index.html; explicit source help/credits fixtures, DOM WheelEvent and 20ms ticks. Native wheel separately recorded; user RMS detached.',checks:[],native:[]};
let b,w,d,canvas;
const show=()=>out.textContent=JSON.stringify(report,null,2);
const state=()=>sourceScrollState(b.runtime),offset=()=>state()?.offset;
const tick=n=>{for(let i=0;i<n;i++)b.update(20);b.render();};
const key=(code,down)=>w.dispatchEvent(new w.KeyboardEvent(down?'keydown':'keyup',{code,bubbles:true,cancelable:true}));
const check=(name,pass,details={})=>{report.checks.push({name,pass:!!pass,...details});if(!pass)throw Error(name);};
const open=screen=>{b.actions.clear();b.runtime.call('n','g(II)V',b.game,[screen,0],183);tick(20);};
const wheel=(deltaY,deltaMode=0,extra={},target=canvas)=>{const r=canvas.getBoundingClientRect(),e=new w.WheelEvent('wheel',{clientX:r.left+r.width/2,clientY:r.top+r.height/2,deltaY,deltaMode,bubbles:true,cancelable:true,...extra});target.dispatchEvent(e);tick(1);return e;};
function shot(label){const f=document.createElement('figure'),img=document.createElement('img'),caption=document.createElement('figcaption');img.src=canvas.toDataURL();img.alt=caption.textContent=label;f.append(img,caption);document.querySelector('#shots').append(f);}
async function run(){runButton.disabled=nativeButton.disabled=true;try{
 report.checks=[];document.querySelector('#shots').replaceChildren();
 for(const screen of [10,9]){
  open(screen);check(`source scrollbar present ${screen}`,state()?.max>0&&offset()===0);
  if(screen===10)shot('Pomoc · początek');
  check(`wheel consumed ${screen}`,wheel(120).defaultPrevented);check(`wheel moves down ${screen}`,offset()>0);
  const before=offset();wheel(-60);check(`wheel moves up ${screen}`,offset()<before);
  wheel(1e7);check(`bottom clamp ${screen}`,offset()===state().max);check(`bottom does not scroll host page ${screen}`,wheel(120).defaultPrevented&&offset()===state().max);
  wheel(-1e7);check(`top clamp ${screen}`,offset()===0);
  const line=state().lineHeight;wheel(2,1);check(`line delta ${screen}`,offset()===line*2);
  const viewport=state().viewport;wheel(1,2);check(`page delta ${screen}`,offset()===Math.min(state().max,line*2+viewport));
  const saved=offset();key('ArrowDown',true);tick(1);key('ArrowDown',false);tick(1);
  check(`keyboard continues from wheel offset ${screen}`,offset()===Math.min(state().max,saved+2));
  if(screen===10)shot('Pomoc · po przewinięciu kółkiem');
  const unchanged=offset();check('Ctrl+wheel remains browser zoom',!wheel(120,0,{ctrlKey:true}).defaultPrevented&&offset()===unchanged);
  check('horizontal wheel is not consumed',!wheel(0,0,{deltaX:40}).defaultPrevented);
  check('wheel outside canvas stays page input',!wheel(120,0,{},d.body).defaultPrevented&&offset()===unchanged);
 }
 open(5);check('menu does not consume wheel',!wheel(120).defaultPrevented);
 open(10);d.querySelector('#pause').click();check('paused game does not consume wheel',!wheel(120).defaultPrevented);
 d.querySelector('#resume').click();b.loop.stop();b.loop.resume();
 iframe.style.width='960px';iframe.style.height='500px';await frame();open(10);
 const rect=canvas.getBoundingClientRect(),scale=Math.min(rect.width/320,rect.height/240);
 wheel(120);check('pixel wheel respects CSS image scale',offset()===Math.trunc(120/scale),{scale,offset:offset()});
 const before=offset();check('letterbox does not consume wheel',!wheel(120,0,{clientX:rect.left+1}).defaultPrevented&&offset()===before);
 iframe.style.width='740px';iframe.style.height='720px';await frame();open(10);
 check('no unexpected runtime errors',b.runtime.caught.every(e=>e.type.endsWith('RecordStoreNotFoundException')));
 report.status='PASS';status.textContent=`PASS · ${report.checks.length} kontroli przewijania`;
}catch(e){report.status='FAIL';report.error=e.stack;status.textContent='FAIL: '+e.message;console.error(e);}finally{show();runButton.disabled=nativeButton.disabled=false;}}
try{
 while(!iframe.contentWindow.blood)await frame();w=iframe.contentWindow;d=w.document;b=w.blood;canvas=d.querySelector('canvas');
 b.loop.stop();b.loop.resume();b.platform.records.records={};b.platform.records.storage={getItem:()=>null,setItem:()=>{}};
 tick(600);key('Enter',true);key('Enter',false);tick(100);key('KeyE',true);key('KeyE',false);tick(100);
 canvas.addEventListener('wheel',event=>{
  if(!event.isTrusted||!state())return;
  const row={screen:state().screen,deltaY:event.deltaY,deltaMode:event.deltaMode,before:offset(),pageBefore:[window.scrollY,w.scrollY]};
  requestAnimationFrame(()=>{row.after=offset();row.pageAfter=[window.scrollY,w.scrollY];row.prevented=event.defaultPrevented;report.native.push(row);document.querySelector('#native-status').textContent=`Kółko: ${row.before} → ${row.after} · strona: ${row.pageBefore.join('/')} → ${row.pageAfter.join('/')} · przechwycone: ${row.prevented}`;show();});
 },{capture:true});
 runButton.onclick=run;nativeButton.onclick=()=>{d.querySelector('#resume').click();b.loop.stop();b.loop.resume();open(10);b.loop.start();document.querySelector('#native-status').textContent='Przewiń pomoc kółkiem w dół i w górę.';};
 runButton.disabled=nativeButton.disabled=false;status.textContent='Gotowe';
}catch(e){status.textContent='FAIL: '+e.message;}
