// Generated offline by tools/compile_game.py. Source d.class
export default function register(R) {
R.define("d","java/lang/Object",[{key:"d.a:[Lj;",static:false,value:null},{key:"d.a:Lg;",static:false,value:null}]);
// d.<init>(I[BI)V
R.method("d","<init>(I[BI)V",function(self,args){
const S=[], L=new Array(4).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=self;
L[1]=args[0];
L[2]=args[1];
L[3]=args[2];
flow: while(true){ try { switch(pc){
case 0: S.push(L[0]);
case 1: a=S.splice(S.length-0,0);b=S.pop();v=R.call("java/lang/Object","<init>()V",b,a,183);
case 4: S.push(L[0]);
case 5: S.push(L[1]);
case 6: S.push(L[2]);
case 7: a=S.splice(S.length-2,2);b=null;v=R.call("r","a(I[B)[Lj;",b,a,184);S.push(v);
case 10: v=S.pop();a=S.pop();R.set(a,"d.a:[Lj;",v);
case 13: S.push(L[0]);
case 14: S.push(L[3]);
case 15: a=S.splice(S.length-1,1);b=null;v=R.call("r","a(I)Lg;",b,a,184);S.push(v);
case 18: v=S.pop();a=S.pop();R.set(a,"d.a:Lg;",v);
case 21: S.push(L[0]);
case 22: a=S.pop();S.push(R.get(a,"d.a:Lg;"));
case 25: S.push(L[0]);
case 26: a=S.pop();S.push(R.get(a,"d.a:[Lj;"));
case 29: a=S.splice(S.length-1,1);b=S.pop();v=R.call("g","a([Lj;)V",b,a,182);
case 32: return;
default:throw new Error("Invalid control flow d.<init>(I[BI)V "+pc);
}}catch(error){
throw error;}}});
// d.<init>([BLg;)V
R.method("d","<init>([BLg;)V",function(self,args){
const S=[], L=new Array(3).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=self;
L[1]=args[0];
L[2]=args[1];
flow: while(true){ try { switch(pc){
case 0: S.push(L[0]);
case 1: a=S.splice(S.length-0,0);b=S.pop();v=R.call("java/lang/Object","<init>()V",b,a,183);
case 4: S.push(L[0]);
case 5: S.push(22530);
case 8: S.push(L[1]);
case 9: a=S.splice(S.length-2,2);b=null;v=R.call("r","a(I[B)[Lj;",b,a,184);S.push(v);
case 12: v=S.pop();a=S.pop();R.set(a,"d.a:[Lj;",v);
case 15: S.push(L[0]);
case 16: S.push(L[2]);
case 17: S.push(L[0]);
case 18: a=S.pop();S.push(R.get(a,"d.a:[Lj;"));
case 21: a=S.splice(S.length-1,1);b=S.pop();v=R.call("g","a([Lj;)Lg;",b,a,182);S.push(v);
case 24: v=S.pop();a=S.pop();R.set(a,"d.a:Lg;",v);
case 27: S.push(L[0]);
case 28: a=S.pop();S.push(R.get(a,"d.a:Lg;"));
case 31: S.push(L[0]);
case 32: a=S.pop();S.push(R.get(a,"d.a:[Lj;"));
case 35: a=S.splice(S.length-1,1);b=S.pop();v=R.call("g","a([Lj;)V",b,a,182);
case 38: return;
default:throw new Error("Invalid control flow d.<init>([BLg;)V "+pc);
}}catch(error){
throw error;}}});
}
