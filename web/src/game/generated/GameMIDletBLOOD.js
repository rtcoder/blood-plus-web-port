// Generated offline by tools/compile_game.py. Source GameMIDletBLOOD.class
export default function register(R) {
R.define("GameMIDletBLOOD","javax/microedition/midlet/MIDlet",[{key:"GameMIDletBLOOD.a:Ls;",static:false,value:null}]);
// GameMIDletBLOOD.<init>()V
R.method("GameMIDletBLOOD","<init>()V",function(self,args){
const S=[], L=new Array(1).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=self;
flow: while(true){ try { switch(pc){
case 0: S.push(L[0]);
case 1: a=S.splice(S.length-0,0);b=S.pop();v=R.call("javax/microedition/midlet/MIDlet","<init>()V",b,a,183);
case 4: return;
default:throw new Error("Invalid control flow GameMIDletBLOOD.<init>()V "+pc);
}}catch(error){
throw error;}}});
// GameMIDletBLOOD.startApp()V
R.method("GameMIDletBLOOD","startApp()V",function(self,args){
const S=[], L=new Array(1).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=self;
flow: while(true){ try { switch(pc){
case 0: S.push(L[0]);
case 1: a=S.pop();S.push(R.get(a,"GameMIDletBLOOD.a:Ls;"));
case 4: if(S.pop()!==null){pc=31;continue flow;}
case 7: S.push(L[0]);
case 8: S.push(R.new("n"));
case 11: S.push(S[S.length-1]);
case 12: S.push(L[0]);
case 13: a=S.splice(S.length-1,1);b=S.pop();v=R.call("n","<init>(Ljavax/microedition/midlet/MIDlet;)V",b,a,183);
case 16: v=S.pop();a=S.pop();R.set(a,"GameMIDletBLOOD.a:Ls;",v);
case 19: S.push(L[0]);
case 20: a=S.splice(S.length-1,1);b=null;v=R.call("javax/microedition/lcdui/Display","getDisplay(Ljavax/microedition/midlet/MIDlet;)Ljavax/microedition/lcdui/Display;",b,a,184);S.push(v);
case 23: S.push(L[0]);
case 24: a=S.pop();S.push(R.get(a,"GameMIDletBLOOD.a:Ls;"));
case 27: a=S.splice(S.length-1,1);b=S.pop();v=R.call("javax/microedition/lcdui/Display","setCurrent(Ljavax/microedition/lcdui/Displayable;)V",b,a,182);
case 30: return;
case 31: S.push(L[0]);
case 32: a=S.pop();S.push(R.get(a,"GameMIDletBLOOD.a:Ls;"));
case 35: a=S.splice(S.length-0,0);b=S.pop();v=R.call("s","showNotify()V",b,a,182);
case 38: return;
default:throw new Error("Invalid control flow GameMIDletBLOOD.startApp()V "+pc);
}}catch(error){
throw error;}}});
// GameMIDletBLOOD.destroyApp(Z)V
R.method("GameMIDletBLOOD","destroyApp(Z)V",function(self,args){
const S=[], L=new Array(2).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=self;
L[1]=args[0];
flow: while(true){ try { switch(pc){
case 0: S.push(L[0]);
case 1: a=S.pop();S.push(R.get(a,"GameMIDletBLOOD.a:Ls;"));
case 4: S.push(3);
case 5: a=S.splice(S.length-1,1);b=S.pop();v=R.call("s","j(I)V",b,a,182);
case 8: return;
default:throw new Error("Invalid control flow GameMIDletBLOOD.destroyApp(Z)V "+pc);
}}catch(error){
throw error;}}});
// GameMIDletBLOOD.pauseApp()V
R.method("GameMIDletBLOOD","pauseApp()V",function(self,args){
const S=[], L=new Array(1).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=self;
flow: while(true){ try { switch(pc){
case 0: S.push(L[0]);
case 1: a=S.pop();S.push(R.get(a,"GameMIDletBLOOD.a:Ls;"));
case 4: a=S.splice(S.length-0,0);b=S.pop();v=R.call("s","hideNotify()V",b,a,182);
case 7: return;
default:throw new Error("Invalid control flow GameMIDletBLOOD.pauseApp()V "+pc);
}}catch(error){
throw error;}}});
}
