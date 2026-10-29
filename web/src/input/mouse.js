const buttons=new Map([[0,'MouseLeft'],[2,'MouseRight']]);

export function bindMouseCombat(canvas,{actions,enabled,onInteract=()=>{},signal}){
 const target=canvas.ownerDocument.defaultView,options={signal};
 const release=()=>{for(const key of buttons.values())actions.up(key);};
 // Mouse events report each button independently, including LMB+RMB chords.
 canvas.addEventListener('mousedown',event=>{
  const key=buttons.get(event.button);
  if(!key||!enabled())return;
  event.preventDefault();canvas.focus();onInteract();actions.down(key);
 },options);
 target.addEventListener('mouseup',event=>{const key=buttons.get(event.button);if(key)actions.up(key);},options);
 canvas.addEventListener('mouseleave',release,options);
 target.addEventListener('blur',release,options);
 canvas.addEventListener('contextmenu',event=>event.preventDefault(),options);
}
