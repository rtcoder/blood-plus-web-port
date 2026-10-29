const iframe=document.querySelector('iframe'),button=document.querySelector('#run'),status=document.querySelector('#status'),out=document.querySelector('#report');
const frame=()=>new Promise(resolve=>requestAnimationFrame(resolve));
const report={status:'ready',method:'Main index.html in iframe; explicit source map-4 fixture; DOM keyboard events, fixed 20 ms. Adapter option toggled only for before/after comparison. User RMS detached before updates.',checks:[],runs:[]};
let b,w,d;
const check=(name,pass,details={})=>{report.checks.push({name,pass:!!pass,...details});if(!pass)throw Error(name);};
const key=(code,down)=>w.dispatchEvent(new w.KeyboardEvent(down?'keydown':'keyup',{code,bubbles:true,cancelable:true}));
const tick=n=>{for(let i=0;i<n;i++)b.update(20);b.render();};
const snapshot=()=>{const p=b.runtime.staticGet('n','n.a:La;');return{x:b.runtime.call('o','e()I',p,[]),y:b.runtime.call('o','f()I',p,[]),animation:p['a.i:I'],health:p['a.j:I']};};
function fixture(){
 b.actions.clear();b.runtime.call('n','l(I)V',b.game,[4],183);tick(100);
 if(b.runtime.staticGet('n','n.k:I')===13){key('KeyE',true);tick(1);key('KeyE',false);tick(1);}
 for(let i=0;i<6;i++){key('KeyJ',true);tick(80);key('KeyJ',false);tick(5);}
 check('fixture: gameplay and idle',b.runtime.staticGet('n','n.k:I')===6&&snapshot().animation===0);
}
async function run(){button.disabled=true;try{
 report.checks=[];report.runs=[];document.querySelector('#shots').replaceChildren();
 const preserve=b.actions.preserveMovement;
 check('main enables remaster during gameplay',typeof preserve==='function');
 for(const scenario of ['skok','atak na ziemi','atak w powietrzu']){
  const pair=[];
  for(const remaster of [false,true]){
   b.actions.preserveMovement=false;fixture();b.actions.preserveMovement=remaster?preserve:false;
   const animations=new Set(),step=n=>{for(let i=0;i<n;i++){tick(1);animations.add(snapshot().animation);}};
   if(scenario==='atak na ziemi'){
    key('KeyJ',true);step(1);check('ground attack actually starts',snapshot().animation===6);
    key('ArrowLeft',true);step(3);key('KeyJ',false);step(45);
   }else{
    key('ArrowLeft',true);step(20);key('Space',true);step(scenario==='skok'?4:10);
    check('jump actually starts',snapshot().animation===13);key('Space',false);
    if(scenario==='atak w powietrzu'){
     key('KeyJ',true);step(1);check('air attack actually starts',snapshot().animation===12);
     step(3);key('KeyJ',false);step(50);
    }else step(45);
   }
   const start=snapshot();step(8);const end=snapshot();
   check(`${scenario}: ${remaster?'ruch trwa':'źródło stoi'}`,remaster?end.x<start.x&&end.animation===4:end.x===start.x,{start,end});
   check('no enemy damage / grounded sample',end.health===1300&&end.y===484);
   const row={scenario,remaster,start,end,deltaX:end.x-start.x,animations:[...animations]};report.runs.push(row);pair.push(row);
   if(scenario==='atak w powietrzu'){
    const figure=document.createElement('figure'),img=document.createElement('img'),caption=document.createElement('figcaption');
    img.src=d.querySelector('canvas').toDataURL();img.alt=remaster?'Remaster: nadal biegnie po ataku':'Oryginalne wejście: zatrzymana po ataku';
    caption.textContent=`${img.alt}. Δx = ${row.deltaX} w 8 krokach, animacja ${end.animation}.`;figure.append(img,caption);document.querySelector('#shots').append(figure);
   }
   key('ArrowLeft',false);step(15);const stopped=snapshot();step(8);
   check('release direction stops movement',snapshot().x===stopped.x);
   out.textContent=JSON.stringify(report,null,2);await frame();
  }
  check('remaster improves post-action movement',pair[1].deltaX<pair[0].deltaX);
 }
 b.actions.preserveMovement=preserve;
 key('ArrowRight',true);tick(1);key('Space',true);key('Space',false);
 w.dispatchEvent(new w.Event('blur'));
 check('blur clears held and pending input and pauses',!b.actions.held.size&&!b.actions.pendingRelease.size&&b.loop.paused);
 d.querySelector('#resume').click();b.loop.stop();b.loop.resume();
 check('resume never restores stale movement',!b.actions.held.size);
 key('ArrowLeft',true);tick(1);d.querySelector('#pause').click();
 check('pause clears held input',!b.actions.held.size&&b.loop.paused);
 d.querySelector('#resume').click();b.loop.stop();b.loop.resume();tick(15);
 fixture();
 key('ArrowLeft',true);tick(1);key('Escape',true);tick(1);
 check('source Esc pause clears held and pending input',b.runtime.staticGet('n','n.k:I')===7&&!b.actions.held.size&&!b.actions.pendingRelease.size);
 key('Escape',false);
 check('no unexpected runtime errors',b.runtime.caught.every(e=>e.type.endsWith('RecordStoreNotFoundException')));
 report.status='PASS';status.textContent=`PASS · ${report.checks.length} kontroli · skok, atak naziemny, atak w powietrzu, puszczenie kierunku, pauza i blur`;
}catch(e){report.status='FAIL';report.error=e.stack;status.textContent='FAIL: '+e.message;console.error(e);}finally{out.textContent=JSON.stringify(report,null,2);button.disabled=false;}}
try{
 while(!iframe.contentWindow.blood)await frame();
 w=iframe.contentWindow;d=w.document;b=w.blood;b.loop.stop();b.loop.resume();
 b.platform.records.records={};b.platform.records.storage={getItem:()=>null,setItem:()=>{}};
 tick(600);key('Enter',true);key('Enter',false);tick(100);key('KeyE',true);key('KeyE',false);tick(100);
 button.disabled=false;status.textContent='Gotowe';button.onclick=run;
}catch(e){status.textContent='FAIL: '+e.message;}
