import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {createHash} from 'node:crypto';
import {BrowserPlatform} from '../src/core/platform.js';
import {Runtime} from '../src/core/java-compat.js';
import {registerGame} from '../src/game/generated/index.js';
import {Actions} from '../src/input/actions.js';
import {idatHash} from '../src/render/canvas.js';
import {FrameStore,installStreamingHooks} from '../src/render/frame-store.js';
import {parseCampaign} from './campaign-review.js';
const root=new URL('../',import.meta.url),read=p=>fs.readFileSync(new URL(p,root)),manifest=JSON.parse(read('assets/manifest.json')),art=JSON.parse(read('assets/remaster-v3/manifest.json'));
const commands=parseCampaign(read('dev/campaign-actions.txt').toString()).commands;
async function replay(streaming){
 const graphics={call:name=>name==='getFont'?{height:16,baseline:12,css:'16px sans-serif'}:0,region(){}};
 const p=new BrowserPlatform({getContext:()=>({})});p.graphics=graphics;p.records.records={};p.records.warning=null;p.records.storage={getItem:()=>null,setItem:()=>{}};p.properties={...JSON.parse(read('assets/data/properties.json')),'Glu-Wap-Type':'0'};
 for(const name of fs.readdirSync(new URL('assets/data/',root)))p.resources.set(name,new Uint8Array(read('assets/data/'+name)));
 p.imageFromBytes=bytes=>{const i=manifest.images.find(i=>i.idatByteHash===idatHash(bytes));if(!i)throw Error('Unknown image');return {$class:'javax/microedition/lcdui/Image',width:i.width,height:i.height};};
 const native=p.call.bind(p);p.call=(c,k,o,a)=>{if(c==='javax/microedition/lcdui/Image'&&k.startsWith('createImage(II)'))return {$class:c,width:a[0],height:a[1],graphics};if(c.startsWith('javax/microedition/media/'))return k.startsWith('createPlayer')?{$class:'javax/microedition/media/Player'}:null;return native(c,k,o,a);};
 p.loadImage=async(url,width,height,scale)=>({canvas:{width:width*scale,height:height*scale},width,height,scale});
 const r=new Runtime(p);r.seed=0xB100Dn;registerGame(r);const frames=new FrameStore(p,art,{lazy:true});if(streaming)installStreamingHooks(r,frames);
 const mid=r.new('GameMIDletBLOOD');r.call('GameMIDletBLOOD','<init>()V',mid,[],183);r.call('GameMIDletBLOOD','startApp()V',mid,[]);const game=p.current;r.call('n','a(I)V',game,[0]);
 const actions=new Actions((code,down)=>r.call('s',down?'keyPressed(I)V':'keyReleased(I)V',game,[code],183));
 const hash=createHash('sha256'),stages=new Set();let ticks=0,samples=0;
 const scalar=o=>o?Object.fromEntries(Object.entries(o).filter(([,v])=>typeof v==='number'||typeof v==='boolean'||typeof v==='bigint').map(([k,v])=>[k,String(v)])):null;
 for(const command of commands){
  if(command.command==='press')actions.down(command.domCode);else if(command.command==='release')actions.up(command.domCode);
  else if(command.command==='step')for(let i=0;i<command.value;i++){
   if(p.assets.busy)await p.assets.wait();r.clock+=20;game['s.c:I']=20;r.call('n','b()V',game,[]);actions.endTick();ticks++;
   if(ticks%20===0){stages.add(r.staticGet('q','q.a:I'));hash.update(JSON.stringify({n:scalar(r.classes.get('n').statics),q:scalar(r.classes.get('q').statics),player:scalar(r.staticGet('n','n.a:La;')),actors:(r.staticGet('n','n.a:[La;')??[]).map(scalar),rng:String(r.seed)}));samples++;}
  }
 }
 await p.assets.wait();return {ticks,samples,digest:hash.digest('hex'),stages:[...stages],rms:p.records.records,screen:r.staticGet('n','n.k:I'),errors:r.caught.filter(e=>!e.type.endsWith('RecordStoreNotFoundException'))};
}
test('full 188619-tick campaign has identical source state with and without streaming hooks',async()=>{
 const baseline=await replay(false),streaming=await replay(true);assert.equal(baseline.ticks,188619);assert.equal(streaming.samples,9430);assert.deepEqual(streaming,baseline);assert.equal(streaming.errors.length,0);assert.ok(streaming.stages.includes(9));console.log(JSON.stringify(streaming));
});
