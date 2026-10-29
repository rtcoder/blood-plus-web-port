const iframe=document.querySelector('iframe'),runButton=document.querySelector('#run'),nativeButton=document.querySelector('#native'),status=document.querySelector('#status'),out=document.querySelector('#report');
const frame=()=>new Promise(resolve=>requestAnimationFrame(resolve));
const report={status:'ready',method:'Main index.html; source map-4 fixture; DOM mouse/keyboard, fixed 20 ms; user RMS detached. Native mouse events recorded separately.',checks:[],native:[]};
let b,w,d,canvas;
const show=()=>out.textContent=JSON.stringify(report,null,2);
const check=(name,pass)=>{report.checks.push({name,pass:!!pass});if(!pass)throw Error(name);};
const tick=n=>{for(let i=0;i<n;i++)b.update(20);b.render();};
const key=(code,down)=>w.dispatchEvent(new w.KeyboardEvent(down?'keydown':'keyup',{code,bubbles:true,cancelable:true}));
const mouse=(type,button=0,target=canvas)=>{const e=new w.MouseEvent(type,{button,bubbles:true,cancelable:true});target.dispatchEvent(e);return e;};
const player=()=>b.runtime.staticGet('n','n.a:La;');
const animation=()=>player()['a.i:I'];
const x=()=>b.runtime.call('o','e()I',player(),[]);
const held=id=>!!b.runtime.call('s','b(B)Z',b.game,[id],183);
function fixture(){
 b.actions.clear();b.runtime.call('n','l(I)V',b.game,[4],183);tick(100);
 if(b.runtime.staticGet('n','n.k:I')===13){key('KeyE',true);tick(1);key('KeyE',false);tick(1);}
 for(let i=0;i<6;i++){key('KeyJ',true);tick(80);key('KeyJ',false);tick(5);}
 check('fixture: source idle',animation()===0);
}
function shot(label){const f=document.createElement('figure'),img=document.createElement('img'),c=document.createElement('figcaption');img.src=canvas.toDataURL();img.alt=label;c.textContent=label;f.append(img,c);document.querySelector('#shots').append(f);}
async function run(){runButton.disabled=nativeButton.disabled=true;try{
 report.checks=[];document.querySelector('#shots').replaceChildren();fixture();
 check('LPM default prevented',mouse('mousedown').defaultPrevented);tick(1);
 check('LPM starts actual sword attack 6',animation()===6);shot('LPM · atak (animacja 6)');
 mouse('mouseup',0,w);tick(40);check('LPM release leaves no held fire',!held(8)&&!b.actions.held.has('MouseLeft'));
 mouse('mousedown',2);tick(1);check('PPM starts block 26',animation()===26);shot('PPM · blok (animacja 26)');
 mouse('mousedown',0);tick(1);mouse('mouseup',0,w);tick(2);
 check('LPM release preserves held PPM/block',held(6)&&animation()===26);
 check('context menu suppressed on canvas',mouse('contextmenu',2).defaultPrevented);
 check('context menu outside canvas unchanged',!mouse('contextmenu',2,d.body).defaultPrevented);
 key('KeyS',true);tick(1);mouse('mouseup',2,w);tick(1);
 check('PPM release preserves keyboard block alias',held(6));key('KeyS',false);tick(30);
 check('block ends after last alias release',!held(6)&&animation()===0);
 key('KeyJ',true);mouse('mousedown',0);tick(1);mouse('mouseup',0,w);tick(1);
 check('LPM release preserves keyboard attack alias',held(8));key('KeyJ',false);tick(40);
 fixture();key('ArrowLeft',true);tick(20);key('Space',true);tick(10);check('jump starts before mouse air attack',animation()===13);key('Space',false);
 mouse('mousedown',0);tick(1);check('LPM starts actual air attack 12',animation()===12);
 tick(3);mouse('mouseup',0,w);tick(50);const start=x();tick(8);
 check('keyboard movement continues after mouse attack',x()<start&&animation()===4);key('ArrowLeft',false);tick(30);
 fixture();key('ArrowRight',true);mouse('mousedown',2);tick(1);mouse('mouseleave');tick(1);
 check('leaving canvas releases mouse but preserves held movement',!b.actions.held.has('MouseRight')&&held(5));
 key('ArrowRight',false);tick(20);mouse('mousedown',2);tick(1);d.querySelector('#pause').click();
 check('pause clears mouse holds',b.loop.paused&&!b.actions.held.size);
 d.querySelector('#resume').click();b.loop.stop();b.loop.resume();tick(20);
 fixture();mouse('mousedown',2);tick(1);w.dispatchEvent(new w.Event('blur'));
 check('blur clears all mouse input',b.loop.paused&&!b.actions.held.size&&!b.actions.pendingRelease.size);
 d.querySelector('#resume').click();b.loop.stop();b.loop.resume();tick(20);
 fixture();key('Escape',true);tick(1);key('Escape',false);tick(1);mouse('mousedown',0);mouse('mousedown',2);
 check('mouse combat disabled in source pause menu',!b.actions.held.size);
 check('no unexpected runtime errors',b.runtime.caught.every(e=>e.type.endsWith('RecordStoreNotFoundException')));
 report.status='PASS';status.textContent=`PASS · ${report.checks.length} kontroli myszy`;
}catch(e){report.status='FAIL';report.error=e.stack;status.textContent='FAIL: '+e.message;console.error(e);}finally{show();runButton.disabled=nativeButton.disabled=false;}}
try{
 while(!iframe.contentWindow.blood)await frame();w=iframe.contentWindow;d=w.document;b=w.blood;canvas=d.querySelector('canvas');
 b.loop.stop();b.loop.resume();b.platform.records.records={};b.platform.records.storage={getItem:()=>null,setItem:()=>{}};
 tick(600);key('Enter',true);key('Enter',false);tick(100);key('KeyE',true);key('KeyE',false);tick(100);
 let armed=false,active=null;
 canvas.addEventListener('mousedown',e=>{if(armed&&e.isTrusted)active={button:e.button,animations:[],released:false};});
 w.addEventListener('mouseup',e=>{if(active&&e.isTrusted){active.released=true;active.events='trusted mousedown/up';}});
 const observe=()=>{if(active){const a=animation();if(!active.animations.includes(a))active.animations.push(a);if(active.released&&(active.animations.includes(active.button===0?6:26)||(active.releaseFrames=(active.releaseFrames??0)+1)>=5)){const wanted=active.button===0?6:26;active.pass=active.animations.includes(wanted);report.native.push(active);document.querySelector('#native-status').textContent=report.native.map(n=>`${n.button===0?'LPM':'PPM'}: ${n.pass?'PASS':'FAIL'} (animacje ${n.animations.join(', ')})`).join(' · ');active=null;show();}}requestAnimationFrame(observe);};requestAnimationFrame(observe);
 nativeButton.onclick=()=>{d.querySelector('#resume').click();b.loop.stop();b.loop.resume();fixture();armed=true;b.loop.start();document.querySelector('#native-status').textContent='Kliknij LPM, następnie przytrzymaj PPM na ekranie gry.';show();};
 runButton.onclick=run;runButton.disabled=nativeButton.disabled=false;status.textContent='Gotowe';
}catch(e){status.textContent='FAIL: '+e.message;}
