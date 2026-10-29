const iframe=document.querySelector('iframe'),out=document.querySelector('#report'),status=document.querySelector('#status'),button=document.querySelector('#run');
const report={status:'loading',checks:[],snapshots:[],images:[],browser:navigator.userAgent,method:'Production main; explicit source loader fixtures; no changes to HP, timers or world coordinates. Resource sizes are encodedBodySize (cold-equivalent), not claimed external network latency.'};
const frame=()=>new Promise(r=>requestAnimationFrame(r));let b,w,d,canvas;
const show=()=>out.textContent=JSON.stringify(report,null,2);
const check=(name,pass,details={})=>{report.checks.push({...details,name,pass:!!pass});if(!pass)throw Error(name);};
const screen=()=>b.runtime.staticGet('n','n.k:I');
const key=(code,down)=>w.dispatchEvent(new w.KeyboardEvent(down?'keydown':'keyup',{code,bubbles:true,cancelable:true,repeat:false}));
const settle=async()=>{if(b.platform.assets.busy)await b.waitForAssets();};
const tick=async n=>{for(let i=0;i<n;i++){await settle();b.update(20);b.render();}await settle();};
function snapshot(name){const entries=w.performance.getEntriesByType('resource'),bytes=entries.reduce((n,e)=>n+e.encodedBodySize,0),textures=[...b.frames.textures.values()].filter(t=>t.image);const row={name,screen:screen(),ticks:b.ticks,requests:entries.length,encodedBytes:bytes,loadedFrames:textures.length,decodedFrameBytes:b.frames.decodedBytes,loadedAtlases:[...b.platform.images.values()].filter(i=>i.texture).length,queue:{...b.platform.assets.stats},loadedGroups:[...b.frames.groups.keys()].filter(id=>[...b.frames.entries()].some(([key,f])=>key.startsWith(id+':')&&f.image))};report.snapshots.push(row);return row;}
function shot(name){const img=new Image(),figure=document.createElement('figure'),caption=document.createElement('figcaption');img.src=canvas.toDataURL();img.alt=caption.textContent=name;figure.append(img,caption);document.querySelector('#shots').append(figure);}
async function run(){button.disabled=true;try{
 report.checks=[];report.snapshots=[];
 b.platform.records.records={};b.platform.records.storage={getItem:()=>null,setItem:()=>{}};d.querySelector('#resume').click();b.loop.stop();b.loop.resume();
 b.runtime.seed=0xB100Dn;
 await tick(600);const boot=snapshot('language menu');
 check('first menu loads less than 8 MB',boot.encodedBytes<8e6,boot);check('first menu does not decode campaign frames',boot.loadedFrames<80,boot);check('boss textures absent at menu',!boot.loadedGroups.includes(20480)&&!boot.loadedGroups.includes(27648));shot('Cold menu · source language choice');
 // Main keyboard still selects language/audio normally.
 key('Enter',true);await tick(1);key('Enter',false);await tick(80);key('KeyE',true);await tick(1);key('KeyE',false);await tick(80);
 check('normal keyboard reaches main menu',screen()===5,{screen:screen()});shot('Main menu · streamed UI');
 // Deliberately slow one uncached image: the real loop must not consume its wall time.
 const originalLoad=b.platform.loadImage.bind(b.platform);b.platform.loadImage=async(...args)=>{await new Promise(resolve=>setTimeout(resolve,100));return originalLoad(...args);};
 b.runtime.call('n','l(I)V',b.game,[0],183);b.loop.resume();b.loop.advance(0);
 for(let time=20;time<3000&&!b.platform.assets.busy;time+=20)b.loop.advance(time);
 const beforeClock=b.runtime.clock,beforeTicks=b.ticks;
 if(b.platform.assets.busy){b.loop.advance(5000);check('pending graphics freeze source clock',b.runtime.clock===beforeClock&&b.ticks===beforeTicks);await settle();b.loop.advance(6000);check('no catch-up after loading',b.runtime.clock===beforeClock&&b.ticks===beforeTicks);}
 else check('loader has pending resources to test barrier',false);
 b.platform.loadImage=originalLoad;
 await tick(250);if(screen()===13){key('KeyE',true);await tick(1);key('KeyE',false);await tick(50);}
 check('first source level loads',screen()===6,{screen:screen()});const level=snapshot('level 0');shot('Level 0 · full gameplay');
 check('first level has not loaded all frames',level.loadedFrames<1700,level);check('no simultaneous downloads above queue limit',b.platform.assets.active<=8);
 // Held keyboard movement survives actual jump and release with all common poses ready.
 key('ArrowRight',true);await tick(8);key('Space',true);await tick(3);key('Space',false);await tick(30);key('ArrowRight',false);await tick(1);check('jump and movement leave no asset errors',!b.platform.assets.error);
 const current=b.frames.decodedBytes;b.frames.releaseScene();check('scene release frees decoded level frames',b.frames.decodedBytes<current,{before:current,after:b.frames.decodedBytes});
 for(const levelId of [4,6,9]){
  b.actions.clear();b.runtime.call('n','l(I)V',b.game,[levelId],183);await tick(220);if(screen()===13){key('KeyE',true);await tick(1);key('KeyE',false);await tick(50);}
  check('source level '+levelId+' ready',screen()===6,{screen:screen()});snapshot('level '+levelId);shot('Level '+levelId+' · streamed scenery/actors');
 }
 // Load every boss group sequentially, preserving its real animator and geometry.
 const samples=[];
 for(const id of [19456,20480,21504,22528,23552,24576,26624,27648]){
  b.frames.releaseScene();b.frames.preloadGroup(id);await settle();samples.push({id,loaded:[...b.frames].filter(([key,f])=>key.startsWith(id+':')&&f.image).length});
 }
 check('all enemy/boss groups decode on demand',samples.every(s=>s.loaded>0),{samples});
 d.querySelector('#pause').click();check('pause works after downloads',b.loop.paused);d.querySelector('#resume').click();b.loop.stop();b.loop.resume();
 check('resume clears stale input',!b.actions.held.size);w.dispatchEvent(new w.Event('blur'));check('blur still pauses',b.loop.paused);
 check('source exceptions remain expected only',b.runtime.caught.every(e=>e.type.endsWith('RecordStoreNotFoundException')),{caught:b.runtime.caught});
 check('zero asset failures',b.platform.assets.stats.failed===0);
 report.drawnStats=b.drawnStats;
 const oldBlood=b;const failing=[...b.frames].find(([id,f])=>id.startsWith('20480:')&&!f.empty&&!f.image);
 check('uncached boss frame exists for error test',!!failing);
 const decode=b.platform.loadImage.bind(b.platform);let injected=false;
 b.platform.loadImage=async(...args)=>{if(!injected&&args[0]===failing[1].url){injected=true;throw Error('Controlled missing WebP for retry test');}return decode(...args);};
 b.frames.requestFrame(20480,failing[1].frame);b.loop.resume();b.loop.start();
 for(let i=0;i<120&&d.querySelector('#resume').textContent!=='Retry loading';i++)await frame();
 check('failed download exposes Retry loading',d.querySelector('#resume').textContent==='Retry loading'&&!d.querySelector('#resume').hidden&&!b.loop.running);
 check('failed download clears held input',!b.actions.held.size);
 d.querySelector('#resume').click();while(w.blood===oldBlood)await frame();b=w.blood;await b.waitForAssets();b.loop.stop();b.loop.resume();b.platform.records.storage={getItem:()=>null,setItem:()=>{}};
 check('retry creates a clean, working asset queue',!b.platform.assets.error&&d.querySelector('#status').textContent.indexOf('Error:')!==0);
 report.status='PASS';status.textContent='PASS · '+report.checks.length+' streaming checks';
}catch(error){report.status='FAIL';report.error=error.stack;status.textContent='FAIL: '+error.message;console.error(error);}finally{show();button.disabled=false;}}
try{while(!iframe.contentWindow.blood)await frame();w=iframe.contentWindow;w.performance.setResourceTimingBufferSize(10000);d=w.document;b=w.blood;canvas=d.querySelector('canvas');await b.waitForAssets();b.loop.stop();b.loop.resume();button.onclick=run;button.disabled=false;status.textContent='Ready';report.status='ready';show();}catch(e){status.textContent='FAIL: '+e.message;}
