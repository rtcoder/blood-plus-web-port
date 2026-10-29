import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {createHash} from 'node:crypto';
import {AssetQueue} from '../src/core/assets.js';
import {FrameStore,installStreamingHooks} from '../src/render/frame-store.js';
import {GameLoop} from '../src/core/loop.js';
import {BrowserPlatform} from '../src/core/platform.js';
import {Runtime} from '../src/core/java-compat.js';
const deferred=()=>{let resolve,reject;const promise=new Promise((a,b)=>{resolve=a;reject=b;});return {promise,resolve,reject};};
const entry=(frame,url='frame-'+frame)=>({frame,url,logicalBounds:[-1,-2,1,2]});
const manifest={groups:[{resourceId:25600,paletteRGB:[0,0,0],frames:[entry(0),entry(1),entry(2),entry(3)],animations:[[0,1],[2],...Array.from({length:45},()=>[]),[3]]},{resourceId:20480,paletteRGB:[0,0,0],frames:[entry(0,'boss')],animations:[[0]]}]};
const backend=()=>{const loads=[];return {assets:new AssetQueue({concurrency:2}),loads,loadImage:async(url,width,height,scale)=>{loads.push(url);return {canvas:{width:width*scale,height:height*scale},width,height,scale};}};};
test('queue bounds concurrency, deduplicates pending requests and drains later jobs',async()=>{
 const q=new AssetQueue({concurrency:2}),jobs=[deferred(),deferred(),deferred()],started=[];
 const requests=jobs.map((j,i)=>q.request(String(i),()=>{started.push(i);return j.promise;}));assert.equal(q.request('0',()=>assert.fail('duplicate')),requests[0]);
 await Promise.resolve();assert.deepEqual(started,[0,1]);assert.equal(q.busy,true);jobs[0].resolve(10);await requests[0];await Promise.resolve();assert.deepEqual(started,[0,1,2]);jobs[1].resolve(11);jobs[2].resolve(12);await q.wait();assert.equal(q.busy,false);assert.equal(q.stats.completed,3);
});
test('failed downloads reach wait/readiness without unhandled promise rejection',async()=>{
 const q=new AssetQueue();q.request('missing',async()=>{throw Error('404 missing.webp');});await assert.rejects(q.wait(),/404 missing/);assert.throws(()=>q.throwIfFailed(),/404 missing/);
});
test('lazy frames initially load nothing, player common moves exclude boss/scripted animations',async()=>{
 const p=backend(),frames=new FrameStore(p,manifest,{lazy:true});assert.equal(p.loads.length,0);frames.preloadGroup(25600);await p.assets.wait();assert.deepEqual(p.loads.sort(),['frame-0','frame-1','frame-2']);assert.ok(frames.get('25600:0').image);assert.equal(frames.get('20480:0').image,null);assert.equal(frames.get('25600:3').image,null);
 frames.preloadSequence(25600,47);await p.assets.wait();assert.ok(frames.get('25600:3').image);assert.ok(!p.loads.includes('boss'));
});
test('URL aliases share decoded textures and empty frames perform no request',async()=>{
 const p=backend(),m={groups:[{resourceId:1,frames:[entry(0,'same'),entry(1,'same'),{...entry(2,'empty'),empty:true}],animations:[[0,1,2]]}]},f=new FrameStore(p,m,{lazy:true});f.preloadGroup(1);await p.assets.wait();assert.deepEqual(p.loads,['same']);assert.equal(f.get('1:0').image,f.get('1:1').image);assert.equal(f.decodedBytes,8*16*4);
});
test('releasing a scene frees enemy/scripted frames, keeps common player frames, permits reload',async()=>{
 const p=backend(),f=new FrameStore(p,manifest,{lazy:true});f.preloadGroup(25600);f.preloadGroup(20480);f.preloadSequence(25600,47);await p.assets.wait();f.releaseScene();assert.ok(f.get('25600:0').image);assert.equal(f.get('20480:0').image,null);assert.equal(f.get('25600:3').image,null);f.requestFrame(20480,0);await p.assets.wait();assert.ok(f.get('20480:0').image);assert.equal(p.loads.filter(u=>u==='boss').length,2);
});
test('source hooks only request resources; animator arguments and return values remain intact',()=>{
 const r=new Runtime();for(const name of ['g','o','n'])r.define(name,null,[]);const calls=[];r.method('g','a(I)Lg;',(_,a)=>({id:a[0]}));r.method('o','a(I)V',(self,a)=>self.sequence=a[0]);r.method('n','l(I)V',(_,a)=>a[0]+1);
 const f={preloadGroup:id=>calls.push(['group',id]),preloadSequence:(id,seq)=>calls.push(['sequence',id,seq]),releaseScene:()=>calls.push(['release'])};installStreamingHooks(r,f);
 const g=r.call('g','a(I)Lg;',null,[25600],184),o={$class:'o','o.a:Lg;':{'g.a:I':25600}};r.call('o','a(I)V',o,[13]);assert.equal(o.sequence,13);assert.deepEqual(g,{id:25600});assert.equal(r.call('n','l(I)V',{$class:'n'},[4]),5);assert.deepEqual(calls,[['group',25600],['sequence',25600,13],['release']]);
});
test('blocked game loop discards loading wall time and never catches up after downloads',()=>{
 let ready=true,ticks=0,renders=0;const loop=new GameLoop(()=>ticks++,()=>renders++,{ready:()=>ready});loop.advance(0);loop.advance(20);assert.equal(ticks,1);ready=false;loop.advance(5000);ready=true;loop.advance(6000);assert.equal(ticks,1);loop.advance(6020);assert.equal(ticks,2);assert.equal(renders,4);
});
test('resources discovered during update stop additional ticks and wait before rendering',()=>{
 let ready=true,ticks=0,renders=0;const loop=new GameLoop(()=>{ticks++;ready=false;},()=>renders++,{ready:()=>ready});loop.advance(0);loop.advance(200);assert.equal(ticks,1);assert.equal(renders,1);ready=true;loop.advance(3000);assert.equal(ticks,1);assert.equal(renders,2);
});
test('lazy base atlases load on source image use, once, retaining logical geometry',async t=>{
 const old=globalThis.fetch;t.after(()=>globalThis.fetch=old);const requested=[];
 globalThis.fetch=async url=>{requested.push(String(url));const raw=fs.readFileSync(new URL('../'+String(url).split('?')[0],import.meta.url));return {ok:true,json:async()=>JSON.parse(raw),arrayBuffer:async()=>raw.buffer.slice(raw.byteOffset,raw.byteOffset+raw.byteLength)};};
 const p=new BrowserPlatform({getContext:()=>({})});const loaded=[];p.loadImage=async(url,width,height,scale)=>{loaded.push(url);return {canvas:{width:width*scale,height:height*scale},width,height,scale};};await p.load({lazyTextures:true});assert.equal(loaded.length,0);assert.ok(!requested.some(u=>u.includes('palette-indices')));
 const bytes=p.resources.get('brand0.png');const first=p.imageFromBytes(bytes),second=p.imageFromBytes(bytes);assert.equal(first,second);await p.assets.wait();assert.equal(loaded.length,1);assert.equal(first.variant().scale,4);assert.equal(first.width,217);assert.equal(first.height,162);
});

test('production index preserves every source frame ID/bounds/palette and only points to verified WebP',()=>{
 const m=JSON.parse(fs.readFileSync(new URL('../assets/remaster-v3/manifest.json',import.meta.url))),proof=JSON.parse(fs.readFileSync(new URL('../assets/remaster-v3/encoding-proof.json',import.meta.url)));let count=0;
 const rows=[];const ids=new Set();for(const g of m.groups)for(const f of g.frames){rows.push([g.resourceId,f.frame,f.logicalBounds,g.paletteRGB??null]);const key=g.resourceId+':'+f.frame;assert.ok(!ids.has(key));ids.add(key);const url=f.url.split('?')[0],encoded=Object.values(proof.files).find(x=>x.url===url);assert.ok(encoded,url);assert.equal(createHash('sha256').update(fs.readFileSync(new URL('../'+url,import.meta.url))).digest('hex'),encoded.webpSha256);assert.equal((f.logicalBounds[2]-f.logicalBounds[0])*4,encoded.size[0]);assert.equal((f.logicalBounds[3]-f.logicalBounds[1])*4,encoded.size[1]);count++;}
 rows.sort((a,b)=>a[0]-b[0]||a[1]-b[1]);assert.equal(createHash('sha256').update(JSON.stringify(rows)).digest('hex'),'885d6e82999b159a6a62add28c8da61117d44d66b5524e8fc8ed811bee216082','Source IDs, anchors and palettes must match the previous package exactly');
 assert.equal(count,3604);assert.equal(Object.keys(proof.files).length,3661);assert.ok(proof.webpBytes<proof.pngBytes*.75);
});

test('incorrect texture dimensions fail the barrier rather than stretch a frame',async()=>{
 const p=backend();p.loadImage=async()=>({canvas:{width:1,height:1},width:1,height:1,scale:4});const f=new FrameStore(p,manifest,{lazy:true});f.requestFrame(20480,0);await assert.rejects(p.assets.wait(),/Invalid 4× frame/);assert.equal(f.get('20480:0').image,null);assert.equal(f.decodedBytes,0);
});
test('blur/pause continues to hold the loop after an asset finishes',()=>{
 let ready=false,ticks=0;const loop=new GameLoop(()=>ticks++,()=>{},{ready:()=>ready});loop.advance(0);loop.pause();ready=true;loop.advance(5000);assert.equal(ticks,0);loop.resume();loop.advance(10000);loop.advance(10020);assert.equal(ticks,1);
});

test('a texture requested by the initial paint cannot accumulate download time before the next RAF',()=>{
 let ready=true,ticks=0,renders=0;const loop=new GameLoop(()=>ticks++,()=>{if(renders++===0)ready=false;},{ready:()=>ready});loop.advance(0);ready=true;loop.advance(5000);assert.equal(ticks,0);loop.advance(5020);assert.equal(ticks,1);
});
