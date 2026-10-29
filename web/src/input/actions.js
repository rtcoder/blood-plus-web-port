export const keyCodes={ArrowUp:-1,KeyW:-1,Space:-1,ArrowDown:-2,KeyS:-2,ArrowLeft:-3,KeyA:-3,ArrowRight:-4,KeyD:-4,KeyJ:-5,Enter:-5,KeyQ:-6,KeyE:-7,Escape:-7,Digit0:48,Digit1:49,Digit2:50,Digit3:51,Digit4:52,Digit5:53,Digit6:54,Digit7:55,Digit8:56,Digit9:57,MouseLeft:-5,MouseRight:-2,MouseSoftLeft:-6,MouseSoftRight:-7,MousePrevious:-3,MouseNext:-4,MouseConfirm:-5};
const horizontalCodes=new Set([-3,-4,52,54]);
const enabled=option=>typeof option==='function'?option():option;
export class Actions {
 // Opt-in so deterministic JAR/reference runners retain the original input stream.
 constructor(emit,{preserveMovement=false,preserveBlock=false}={}){this.emit=emit;this.preserveMovement=preserveMovement;this.preserveBlock=preserveBlock;this.held=new Map();this.pressed=new Set();this.released=new Set();this.pendingRelease=new Set();}
 down(key){const code=keyCodes[key];if(code===undefined||this.held.has(key))return false;const already=[...this.held.values()].includes(code);this.held.set(key,code);const pending=this.pendingRelease.delete(code);this.released.delete(code);if(!already&&!pending){this.pressed.add(code);this.emit(code,true);}return true;}
 up(key){if(!this.held.has(key))return false;const code=this.held.get(key);this.held.delete(key);if(![...this.held.values()].includes(code)){this.released.add(code);if(this.pressed.has(code))this.pendingRelease.add(code);else{this.emit(code,false);this.restoreHeld();}}return true;}
 restoreHeld(){
  const movement=enabled(this.preserveMovement),block=enabled(this.preserveBlock);
  if(!movement&&!block)return;
  // s.keyReleased clears ALL source keys. Reassert physical movement/block holds;
  // replaying jump/fire would create new actions. Never run this during clear().
  for(const code of new Set(this.held.values()))if(movement&&horizontalCodes.has(code)||block&&(code===-2||code===56))this.emit(code,true);
 }
 clear(){for(const code of new Set([...this.held.values(),...this.pendingRelease]))this.emit(code,false);this.pendingRelease.clear();this.held.clear();this.pressed.clear();this.released.clear();}
 endTick(){const released=this.pendingRelease.size>0;for(const code of this.pendingRelease)this.emit(code,false);this.pendingRelease.clear();if(released)this.restoreHeld();this.pressed.clear();this.released.clear();}
}
