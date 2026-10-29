// s.n() sets minimum interval=20ms. Simulation advances in that original unit.
export class GameLoop {
 constructor(update,render){this.update=update;this.render=render;this.last=null;this.accumulator=0;this.paused=false;this.running=false;}
 advance(now){if(this.paused){this.last=null;return;}if(this.last===null){this.last=now;this.render();return;}this.accumulator+=Math.min(200,Math.max(0,now-this.last));this.last=now;while(this.accumulator>=20){if(this.update(20)===false){this.stop();return;}this.accumulator-=20;this.render();}}
 stop(){this.running=false;this.pause();}
 pause(){this.paused=true;this.last=null;this.accumulator=0;}
 resume(){this.paused=false;this.last=null;this.accumulator=0;}
 start(){this.running=true;const frame=t=>{if(!this.running)return;try{this.advance(t);}catch(e){this.running=false;this.onError?.(e);return;}requestAnimationFrame(frame);};requestAnimationFrame(frame);}
}
