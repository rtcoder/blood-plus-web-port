import {installPolishLocalization} from './localization/polish.js?v=1';
import {installStreamingHooks} from './render/frame-store.js?v=texture-1';
import {invalidateGraphics} from './render/invalidate.js';
import {Runtime} from './core/java-compat.js';
import {registerGame} from './game/generated/index.js';
import {BrowserPlatform} from './core/platform.js?v=texture-1';
import {GameLoop} from './core/loop.js?v=atlas-1';
import {Actions,keyCodes} from './input/actions.js?v=canvas-ui-1';
import {bindMouseCombat} from './input/mouse.js?v=1';
import {bindCanvasUI,sourceControls} from './input/canvas-ui.js?v=1';
import {bindCanvasWheel,sourceScrollState,scrollSourceText} from './input/wheel.js?v=1';
import {unlockAudio,stopAllAudio} from './audio/midi.js';
import {loadDrawnFrames,installDrawnRenderer} from './render/drawn.js?v=texture-1';
const canvas=document.querySelector('canvas'),status=document.querySelector('#status'),resume=document.querySelector('#resume');
const loading=document.querySelector('#loading'),loadingText=document.querySelector('#loading-text'),loadingProgress=document.querySelector('#loading-progress');
const fail=e=>{console.error(e);dispose();document.querySelector('#pause').disabled=true;status.textContent='Error: '+e.message+'. Reload this page if it was open during an update.';status.classList.add('error');loading.hidden=true;resume.textContent='Retry loading';resume.hidden=false;resume.onclick=()=>{dispose();boot();};};
let dispose=()=>{};
async function boot(){try{
 const listeners=new AbortController(),options={signal:listeners.signal};
 status.textContent='Loading game resources…';status.classList.remove('error');loading.hidden=false;loadingText.textContent='Loading game resources…';loadingProgress.removeAttribute('value');resume.hidden=true;resume.textContent='Resume';document.querySelector('#pause').disabled=false;
 const platform=new BrowserPlatform(canvas);await platform.load({lazyTextures:true});
 status.textContent='Loading remastered 4× graphics…';
 const art=await(await platform.fetchResource('assets/remaster-v3/manifest.json?v=texture-1')).json();
 const frames=await loadDrawnFrames(platform,art,{lazy:true});
 canvas.style.imageRendering='auto';
 const runtime=new Runtime(platform);runtime.seed=BigInt(Date.now());registerGame(runtime);installPolishLocalization(runtime);installStreamingHooks(runtime,frames);
 installDrawnRenderer(runtime,frames,new Set(platform.images.values()));
 const midlet=runtime.new('GameMIDletBLOOD');runtime.call('GameMIDletBLOOD','<init>()V',midlet,[],183);runtime.call('GameMIDletBLOOD','startApp()V',midlet,[]);
 const game=platform.current;runtime.call('n','a(I)V',game,[0]);
 const isPlaying=()=>!platform.stopped&&runtime.staticGet('n','n.k:I')===6;
 const actions=new Actions((code,down)=>{if(!platform.stopped)runtime.call('s',down?'keyPressed(I)V':'keyReleased(I)V',game,[code],183);},{preserveMovement:isPlaying,preserveBlock:isPlaying});
 const finish=()=>{actions.clear();stopAllAudio();status.textContent=platform.records.warning??'Game closed. Your save has been kept.';resume.textContent='Restart';resume.hidden=false;document.querySelector('#pause').disabled=true;return false;};
 const update=dt=>{if(platform.records.warning)status.textContent=platform.records.warning;if(platform.stopped)return finish();runtime.clock+=dt;runtime.set(game,'s.c:I',dt);const wasPlaying=runtime.staticGet('n','n.k:I')===6;runtime.call('n','b()V',game,[]);if(wasPlaying&&runtime.staticGet('n','n.k:I')!==6)actions.clear();else actions.endTick();if(platform.stopped)return finish();};
 const render=()=>{runtime.set(game,'s.o:Z',runtime.get(game,'s.p:Z'));runtime.set(game,'s.p:Z',0);platform.graphics.reset();runtime.call('s','paint(Ljavax/microedition/lcdui/Graphics;)V',game,[platform.graphics],183);};
 let waiting=false;
 const showLoading=()=>{waiting=true;loading.hidden=false;const stats=platform.assets.stats;loadingText.textContent=`Loading graphics… ${stats.completed} / ${stats.requested}`;loadingProgress.max=Math.max(1,stats.requested);loadingProgress.value=stats.completed;};
 const ready=()=>{platform.assets.throwIfFailed();if(platform.assets.busy){showLoading();return false;}if(waiting){invalidateGraphics(runtime,game);waiting=false;}return true;};
 const present=()=>{render();if(platform.assets.busy)showLoading();else loading.hidden=true;};
 const loop=new GameLoop(update,present,{ready});loop.onError=fail;
 const pause=()=>{if(loop.paused)return;actions.clear();loop.pause();stopAllAudio();runtime.call('n','a(I)V',game,[1]);resume.hidden=false;};
 const unpause=()=>{if(platform.stopped){dispose();boot();return;}unlockAudio();actions.clear();loop.resume();runtime.call('n','a(I)V',game,[2]);runtime.call('n','a(I)V',game,[5]);resume.hidden=true;canvas.focus();};
 addEventListener('keydown',e=>{if(keyCodes[e.code]===undefined)return;if(e.target instanceof HTMLSelectElement)return;e.preventDefault();if(loop.paused){unpause();return;}if(platform.assets.busy)return;unlockAudio();if(!e.repeat)actions.down(e.code);},options);
 addEventListener('keyup',e=>{if(keyCodes[e.code]!==undefined){e.preventDefault();actions.up(e.code);}},options);
 addEventListener('blur',pause,options);document.addEventListener('visibilitychange',()=>{if(document.hidden)pause();},options);
 bindMouseCombat(canvas,{actions,enabled:()=>isPlaying()&&!loop.paused&&!platform.assets.busy,onInteract:unlockAudio,signal:listeners.signal});
 bindCanvasUI(canvas,{actions,getLayout:()=>sourceControls(runtime),enabled:()=>!platform.stopped&&!loop.paused&&!platform.assets.busy,onInteract:unlockAudio,signal:listeners.signal});
 bindCanvasWheel(canvas,{getState:()=>sourceScrollState(runtime),scrollBy:delta=>scrollSourceText(runtime,delta),enabled:()=>!platform.stopped&&!loop.paused&&!platform.assets.busy,signal:listeners.signal});
 resume.onclick=unpause;document.querySelector('#pause').onclick=pause;

 for(const button of document.querySelectorAll('[data-key]')){button.addEventListener('pointerdown',e=>{e.preventDefault();if(platform.assets.busy)return;unlockAudio();button.setPointerCapture(e.pointerId);actions.down(button.dataset.key);},options);for(const event of ['pointerup','pointercancel','lostpointercapture'])button.addEventListener(event,()=>actions.up(button.dataset.key),options);}
 document.querySelector('#reset-save').onclick=()=>{if(!confirm('Delete your local Blood+ save and start over?'))return;platform.records.records={};platform.records.warning=null;platform.records.persist();if(platform.records.warning){status.textContent=platform.records.warning;return;}dispose();boot();};
 dispose=()=>{listeners.abort();loop.stop();actions.clear();stopAllAudio();};
 status.textContent=platform.records.warning??'320 × 240 · JavaScript · AI remaster 4×';loop.start();
}catch(e){fail(e);}

}
boot();
