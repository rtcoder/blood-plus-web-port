// A bounded queue shared by atlas and animation downloads. Simulation observes
// busy/error; promises never change gameplay state or advance the source clock.
export class AssetQueue {
 constructor({concurrency=8}={}){if(!Number.isInteger(concurrency)||concurrency<1)throw Error('Invalid asset concurrency');this.concurrency=concurrency;this.jobs=[];this.pending=new Map();this.active=0;this.error=null;this.stats={requested:0,completed:0,failed:0};}
 get busy(){return this.pending.size>0;}
 request(key,load){
  if(this.pending.has(key))return this.pending.get(key);
  let resolve,reject;const promise=new Promise((a,b)=>{resolve=a;reject=b;});
  promise.catch(()=>{}); // Consumers can await the original rejection; the game loop also checks error.
  this.pending.set(key,promise);this.stats.requested++;
  this.jobs.push({key,load,resolve,reject});this.pump();return promise;
 }
 pump(){
  while(this.active<this.concurrency&&this.jobs.length){
   const job=this.jobs.shift();this.active++;
   const finish=()=>{this.active--;this.pending.delete(job.key);this.pump();};
   Promise.resolve().then(job.load).then(value=>{this.stats.completed++;finish();job.resolve(value);},error=>{this.error??=error;this.stats.failed++;finish();job.reject(error);});
  }
 }
 throwIfFailed(){if(this.error)throw this.error;}
 async wait(){while(this.pending.size)await Promise.all([...this.pending.values()]);this.throwIfFailed();}
}
