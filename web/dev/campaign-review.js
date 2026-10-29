import {installStreamingHooks} from '../src/render/frame-store.js?v=stream-1';
import {invalidateGraphics} from '../src/render/invalidate.js';
import {Runtime} from '../src/core/java-compat.js';
import {BrowserPlatform} from '../src/core/platform.js?v=stream-1';
import {registerGame} from '../src/game/generated/index.js';
import {RecordStorage} from '../src/storage/records.js?v=polish-1';
import {Actions,keyCodes} from '../src/input/actions.js';
import {stopAllAudio} from '../src/audio/midi.js';
import {loadDrawnFrames,installDrawnRenderer} from '../src/render/drawn.js?v=stream-1';

export const domKeys={[-1]:'ArrowUp',[-2]:'ArrowDown',[-3]:'ArrowLeft',[-4]:'ArrowRight',[-5]:'KeyJ',[-6]:'KeyQ',[-7]:'KeyE',...Object.fromEntries(Array.from({length:10},(_,i)=>[48+i,'Digit'+i]))};

// Reject the whole trace before boot, including duplicate physical presses that
// direct calls to the J2ME handler would accept but the real Actions adapter drops.
export function parseCampaign(text){
 const commands=[],errors=[],duplicates=[],held=new Set();let ticks=0,keyEvents=0;
 for(const [index,line]of text.split(/\r?\n/).entries()){
  const words=line.replace(/#.*/,'').trim().split(/\s+/),[command,arg]=words;if(!command)continue;
  const row=index+1,entry={command,line:row,tick:ticks};
  const fail=message=>errors.push({line:row,tick:ticks,command,message});
  if(!['press','release','step','capture','detail'].includes(command)){fail('Forbidden command; only press/release/step/capture/detail are permitted');continue;}
  if(command==='detail'){
   if(words.length!==1){fail('detail takes no argument');continue;}
  }else if(command==='capture'){
   if(words.length!==2||!/^[a-zA-Z0-9_-]+$/.test(arg)){fail('capture requires one simple name');continue;}
   entry.name=arg;
  }else{
   if(words.length!==2||!(/^-?\d+$/.test(arg))||!Number.isSafeInteger(Number(arg))){fail('Expected one integer argument');continue;}
   entry.value=Number(arg);
   if(command==='step'){
    if(entry.value<1||entry.value>1000000){fail('step must be between 1 and 1000000');continue;}
    ticks+=entry.value;
   }else{
    if(domKeys[entry.value]===undefined){fail('Unmapped J2ME key');continue;}
    entry.domCode=domKeys[entry.value];keyEvents++;
    if(command==='press'){
     if(held.has(entry.value)){duplicates.push({line:row,tick:ticks,key:entry.value,domCode:entry.domCode});fail('Duplicate physical keydown; Actions would suppress it');}
     held.add(entry.value);
    }else{
     if(!held.has(entry.value))fail('Keyup without a held physical key');
     held.delete(entry.value);
    }
   }
  }
  commands.push(entry);
 }
 return {commands,errors,duplicates,ticks,keyEvents,heldAtEnd:[...held]};
}

async function run(){
 const params=new URLSearchParams(location.search),scriptUrl=new URL(params.get('script')??'/dev/campaign-actions.txt',location.href);
 const result=document.querySelector('#result'),out=document.querySelector('#report'),state=document.querySelector('#state'),canvas=document.querySelector('canvas');
 const report={schemaVersion:1,status:'loading',script:scriptUrl.pathname+scriptUrl.search,variant:'drawn4x',seed:'0xB100D',tickMs:20,browser:navigator.userAgent,
  inputPath:'DOM KeyboardEvent -> page keydown/keyup listener -> Actions -> source s.keyPressed/keyReleased',
  gameplayStateMutation:'None: only source initialization, keyboard input, 20 ms updates and normal paint. No load/place/event/native gameplay commands. Host clock/render invalidation flags follow main.js. Fresh in-memory RMS does not touch user saves.',
  ticks:0,sourceClock:0,stagesSeen:[],gameplayStagesSeen:[],screenTransitions:[],bossPhaseCoverage:[],qteOutcomes:[],checkpoints:[],keyEvents:[],emittedKeyEvents:[],ignoredUnrecordedKeyboardEvents:[],duplicates:[],runtimeCaught:[],errors:[]};
 let runtime,platform,game,actions,currentLine=0,downloadUrl,drawnStats,drawnFrames;
 const listeners=new AbortController(),physicalHeld=new Set(),bossCoverage=new Map(),stages=new Set(),gameplayStages=new Set();
 let replayingKeyboard=false,inputFailure=null;
 let lastScreenStage='',activeQte=null,qteSerial=0,lastSnapshot=null;
 const json=()=>JSON.stringify(report,(_,v)=>typeof v==='bigint'?v.toString():v,2);
 const publish=()=>{
  report.sourceClock=runtime?.clock??0;report.runtimeCaught=runtime?.caught.slice()??[];
  report.stagesSeen=[...stages];report.gameplayStagesSeen=[...gameplayStages];report.bossPhaseCoverage=[...bossCoverage.values()].map(b=>({...b,phases:[...b.phases],states:[...b.states],animations:[...b.animations]}));
  report.heldAtEnd=[...physicalHeld];report.endedState=lastSnapshot;
  if(drawnStats)report.drawnCoverage=drawnStats;
  // The full campaign has tens of thousands of events. Laying out its pretty
  // JSON as ~600k visible lines can freeze Chrome despite a completed replay.
  let full=document.querySelector('#full-report');
  if(!full){full=document.createElement('script');full.type='application/json';full.id='full-report';document.body.append(full);}
  full.textContent=json();
  out.textContent=JSON.stringify({status:report.status,ticks:report.ticks,stages:report.gameplayStagesSeen,keyEvents:report.keyEvents.length,emittedKeyEvents:report.emittedKeyEvents.length,qte:report.qteOutcomes.length,errors:report.errors,endedState:report.endedState},null,2);
  state.textContent=`tick ${report.ticks} · zegar ${report.sourceClock} ms · ekran ${lastSnapshot?.screen??'—'} · etap ${lastSnapshot?.stage??'—'} · gracz ${JSON.stringify(lastSnapshot?.player??null)}`;
 };
 const scheduler=new MessageChannel();
 const yieldTask=()=>new Promise(resolve=>{scheduler.port1.onmessage=resolve;scheduler.port2.postMessage(null);});
 const yieldUI=async()=>{
  // Keep progress cheap: serializing the complete growing event history on
  // every 100 ticks made the acceptance viewer quadratic in campaign length.
  state.textContent=`tick ${report.ticks} · etap ${lastSnapshot?.stage} · ekran ${lastSnapshot?.screen}`;
  out.textContent=JSON.stringify({status:report.status,ticks:report.ticks,plannedTicks:report.plannedTicks,stages:[...stages],keyEvents:report.keyEvents.length,lastSnapshot},null,2);
  await yieldTask();
 };
 try{
  if(scriptUrl.origin!==location.origin)throw Error('Only same-origin local scripts are supported');
  const response=await fetch(scriptUrl,{cache:'no-store'});if(!response.ok)throw Error(`Script HTTP ${response.status}`);
  const text=await response.text();report.scriptSha256=[...new Uint8Array(await crypto.subtle.digest('SHA-256',new TextEncoder().encode(text)))].map(x=>x.toString(16).padStart(2,'0')).join('');
  const parsed=parseCampaign(text);report.plannedTicks=parsed.ticks;report.plannedKeyEvents=parsed.keyEvents;report.duplicates=parsed.duplicates;report.errors=parsed.errors;
  if(parsed.errors.length)throw Error(`Input rejected at line ${parsed.errors[0].line}, tick ${parsed.errors[0].tick}: ${parsed.errors[0].message}`);
  const artText=await(await fetch('assets/remaster-v3/manifest.json',{cache:'no-store'})).text();
  report.assetModel=JSON.parse(artText).model;
  report.aiManifestSha256=[...new Uint8Array(await crypto.subtle.digest('SHA-256',new TextEncoder().encode(artText)))].map(x=>x.toString(16).padStart(2,'0')).join('');
  platform=new BrowserPlatform(canvas);
  const qaKey='blood-plus:qa:campaign-acceptance';
  if(params.get('storage')==='qa'){
   // Separate QA namespace; source RMS writes are persisted, never user saves.
   localStorage.removeItem(qaKey);
   platform.records=new RecordStorage({getItem:()=>localStorage.getItem(qaKey),setItem:(_,value)=>localStorage.setItem(qaKey,value)});
   report.storage='Isolated localStorage '+qaKey+'; initially empty, written only by source RMS';
  }else platform.records=new RecordStorage({getItem:()=>null,setItem:()=>{}});
  await platform.load({lazyTextures:!params.has('eager')});
  drawnFrames=await loadDrawnFrames(platform,JSON.parse(artText),{lazy:!params.has('eager')});canvas.style.imageRendering='auto';
  report.assetModel='built-in image_gen; model/seed not exposed';
  runtime=new Runtime(platform);runtime.seed=0xB100Dn;registerGame(runtime);if(!params.has('eager'))installStreamingHooks(runtime,drawnFrames);
  if(drawnFrames)drawnStats=installDrawnRenderer(runtime,drawnFrames,new Set(platform.images.values()));
  const midlet=runtime.new('GameMIDletBLOOD');runtime.call('GameMIDletBLOOD','<init>()V',midlet,[],183);runtime.call('GameMIDletBLOOD','startApp()V',midlet,[]);
  game=platform.current;runtime.call('n','a(I)V',game,[0]);
  const field=(c,k)=>runtime.staticGet(c,`${c}.${k}`);
  const actor=a=>a?{type:a['a.a:B'],x:runtime.call('o','e()I',a,[]),y:runtime.call('o','f()I',a,[]),health:a['a.j:I'],animation:a['a.i:I'],phase:a['a.m:I'],fsm:a['a.a:Lu;']?.['u.a:I']??null}:null;
  const observe=()=>{
   const stage=field('q','a:I'),screen=field('n','k:I');
   const bosses=(field('n','a:[La;')??[]).slice(0,field('n','ab:I')).map((a,index)=>({a,index})).filter(({a})=>a&&[6,8,10].includes(a['a.a:B'])).map(({a,index})=>({...actor(a),index}));
   const qte={active:!!field('n','K:Z'),success:!!field('n','L:Z'),failure:!!field('n','M:Z'),index:field('n','at:I'),length:field('n','aM:I'),opponent:actor(field('n','b:La;'))};
   const glyphs=field('n','c:[B');qte.glyph=qte.active&&glyphs?qte.index<glyphs.length?glyphs[qte.index]:null:null;
   const snapshot={tick:report.ticks,sourceClock:runtime.clock,screen,stage,sourceStage:field('n','am:I'),player:actor(field('n','a:La;')),bosses,qte,stopped:platform.stopped};
   if((screen===6||screen===13)&&field('q','j:I')>0)stages.add(stage);
   if(screen===6)gameplayStages.add(stage);
   if(`${screen}:${stage}`!==lastScreenStage){report.screenTransitions.push({tick:report.ticks,screen,stage});lastScreenStage=`${screen}:${stage}`;}
   if(screen===6)for(const boss of bosses){
    const id=`${stage}:${boss.type}:${boss.index}`;let c=bossCoverage.get(id);
    if(!c){c={id,stage,type:boss.type,index:boss.index,firstTick:report.ticks,lastTick:report.ticks,phases:new Set(),states:new Set(),animations:new Set(),minimumHealth:boss.health};bossCoverage.set(id,c);}
    c.lastTick=report.ticks;c.phases.add(boss.phase);c.states.add(boss.fsm);c.animations.add(boss.animation);c.minimumHealth=Math.min(c.minimumHealth,boss.health);
   }
   if(qte.active&&!activeQte){activeQte={id:++qteSerial,stage,startTick:report.ticks,opponent:qte.opponent?.type,initialPhase:qte.opponent?.phase,outcome:'pending',glyphs:[]};report.qteOutcomes.push(activeQte);}
   if(activeQte){
    if(qte.active){const last=activeQte.glyphs.at(-1);if(!last||last.index!==qte.index)activeQte.glyphs.push({tick:report.ticks,index:qte.index,glyph:qte.glyph});if(qte.success)activeQte.outcome='success';else if(qte.failure)activeQte.outcome='failure';}
    else{activeQte.endTick=report.ticks;if(activeQte.outcome==='pending')activeQte.outcome='ended-without-observed-outcome';activeQte=null;}
   }
   lastSnapshot=snapshot;return snapshot;
  };
  actions=new Actions((code,down)=>{report.emittedKeyEvents.push({tick:report.ticks,line:currentLine,code,down});if(!platform.stopped)runtime.call('s',down?'keyPressed(I)V':'keyReleased(I)V',game,[code],183);});
  const keyboard=(e,down)=>{
   if(keyCodes[e.code]===undefined)return;e.preventDefault();
   if(!replayingKeyboard){report.ignoredUnrecordedKeyboardEvents.push({tick:report.ticks,code:e.code,down,trusted:e.isTrusted});return;}
   try{if(down){if(!e.repeat)actions.down(e.code);}else actions.up(e.code);}catch(error){inputFailure=error;}
  };
  addEventListener('keydown',e=>keyboard(e,true),{signal:listeners.signal});
  addEventListener('keyup',e=>keyboard(e,false),{signal:listeners.signal});
  const draw=()=>{runtime.set(game,'s.o:Z',runtime.get(game,'s.p:Z'));runtime.set(game,'s.p:Z',0);platform.graphics.reset();runtime.call('s','paint(Ljavax/microedition/lcdui/Graphics;)V',game,[platform.graphics],183);};
  const step=async n=>{for(let i=0;i<n;i++){
   if(platform.stopped)throw Error(`Source application stopped before trace end at tick ${report.ticks}`);
   if(platform.assets.busy)await platform.assets.wait();
   runtime.clock+=20;runtime.set(game,'s.c:I',20);runtime.call('n','b()V',game,[]);actions.endTick();report.ticks++;if(platform.assets.busy){await platform.assets.wait();invalidateGraphics(runtime,game);}draw();
   while(platform.assets.busy){await platform.assets.wait();invalidateGraphics(runtime,game);draw();}observe();
   if(report.ticks%100===0){result.textContent=`Odtwarzanie ${report.ticks}/${report.plannedTicks} ticków…`;await yieldUI();}
  }};
  const capture=name=>{
   const checkpoint={name,...observe()};report.checkpoints.push(checkpoint);
   if(params.get('captures')==='0')return;
   const url=canvas.toDataURL('image/jpeg',0.9),figure=document.createElement('figure'),link=document.createElement('a'),img=new Image(),caption=document.createElement('figcaption');
   link.href=url;link.download=`${name}.jpg`;img.src=url;img.alt=`${name}, tick ${report.ticks}, etap ${lastSnapshot.stage}`;caption.textContent=img.alt;link.append(img);figure.append(link,caption);document.querySelector('#captures').append(figure);
  };
  report.status='running';observe();
  for(const command of parsed.commands){
   currentLine=command.line;
   if(command.command==='step')await step(command.value);
   else if(command.command==='capture')capture(command.name);
   else if(command.command==='detail')report.checkpoints.push({name:`detail-line-${command.line}`,...observe()});
   else{
    const down=command.command==='press';
    if(down===physicalHeld.has(command.domCode))throw Error(`Physical key state mismatch at line ${command.line}`);
    down?physicalHeld.add(command.domCode):physicalHeld.delete(command.domCode);
    report.keyEvents.push({tick:report.ticks,line:command.line,code:command.value,domCode:command.domCode,down});
    replayingKeyboard=true;
    try{dispatchEvent(new KeyboardEvent(down?'keydown':'keyup',{code:command.domCode,bubbles:true,cancelable:true,repeat:false}));}finally{replayingKeyboard=false;}
    if(inputFailure)throw inputFailure;
    observe();
   }
  }
  report.status='replay-complete';result.textContent=`Odtworzono cały ślad: ${report.ticks} ticków, ${stages.size} etapów, ${report.qteOutcomes.length} QTE. Końcowy stan jest w raporcie; koniec śladu sam w sobie nie dowodzi zakończenia kampanii.`;
 }catch(error){report.status='failed';report.failure={line:currentLine,tick:report.ticks,message:error.message,stack:error.stack};result.textContent='FAIL: '+error.message;result.className='error';console.error(error);}
 finally{
  listeners.abort();scheduler.port1.close();scheduler.port2.close();stopAllAudio();report.finalRms=platform?.records.records;publish();
  downloadUrl=URL.createObjectURL(new Blob([json()],{type:'application/json'}));document.querySelector('#download').href=downloadUrl;
 }
}
if(typeof document!=='undefined')run();
