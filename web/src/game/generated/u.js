// Generated offline by tools/compile_game.py. Source u.class
export default function register(R) {
R.define("u","java/lang/Object",[{key:"u.a:[[B",static:false,value:null},{key:"u.a:[Z",static:false,value:null},{key:"u.a:I",static:false,value:0}]);
// u.<init>()V
R.method("u","<init>()V",function(self,args){
const S=[], L=new Array(1).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=self;
flow: while(true){ try { switch(pc){
case 0: S.push(L[0]);
case 1: a=S.splice(S.length-0,0);b=S.pop();v=R.call("java/lang/Object","<init>()V",b,a,183);
case 4: S.push(L[0]);
case 5: S.push(16);
case 7: S.push(R.array("Z",S.pop()));
case 9: v=S.pop();a=S.pop();R.set(a,"u.a:[Z",v);
case 12: S.push(L[0]);
case 13: S.push(0);
case 14: v=S.pop();a=S.pop();R.set(a,"u.a:I",v);
case 17: return;
default:throw new Error("Invalid control flow u.<init>()V "+pc);
}}catch(error){
throw error;}}});
// u.a()I
R.method("u","a()I",function(self,args){
const S=[], L=new Array(3).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=self;
flow: while(true){ try { switch(pc){
case 0: S.push(L[0]);
case 1: a=S.pop();S.push(R.get(a,"u.a:[[B"));
case 4: if(S.pop()!==null){pc=9;continue flow;}
case 7: S.push(-1);
case 8: return S.pop();
case 9: S.push(-1);
case 10: L[1]=S.pop();
case 11: S.push(15);
case 13: L[2]=S.pop();
case 14: S.push(L[2]);
case 15: if(S.pop()<0){pc=74;continue flow;}
case 18: S.push(L[0]);
case 19: a=S.pop();S.push(R.get(a,"u.a:[Z"));
case 22: S.push(L[2]);
case 23: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 24: if(S.pop()===0){pc=68;continue flow;}
case 27: S.push(L[0]);
case 28: a=S.pop();S.push(R.get(a,"u.a:[[B"));
case 31: S.push(L[0]);
case 32: a=S.pop();S.push(R.get(a,"u.a:I"));
case 35: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 36: S.push(L[2]);
case 37: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 38: if(S.pop()<=0){pc=68;continue flow;}
case 41: S.push(L[0]);
case 42: S.push(L[0]);
case 43: a=S.pop();S.push(R.get(a,"u.a:[[B"));
case 46: S.push(L[0]);
case 47: a=S.pop();S.push(R.get(a,"u.a:I"));
case 50: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 51: S.push(L[2]);
case 52: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 53: L[2]=S.pop();
case 54: S.push(null);
case 55: L[1]=S.pop();
case 56: S.push(L[2]);
case 57: v=S.pop();a=S.pop();R.set(a,"u.a:I",v);
case 60: S.push(L[0]);
case 61: a=S.pop();S.push(R.get(a,"u.a:I"));
case 64: L[1]=S.pop();
case 65: pc=74;continue flow;
case 68: L[2]=(L[2]+(-1))|0;
case 71: pc=14;continue flow;
case 74: S.push(15);
case 76: L[2]=S.pop();
case 77: S.push(L[2]);
case 78: if(S.pop()<0){pc=94;continue flow;}
case 81: S.push(L[0]);
case 82: a=S.pop();S.push(R.get(a,"u.a:[Z"));
case 85: S.push(L[2]);
case 86: S.push(0);
case 87: v=S.pop();b=S.pop();a=S.pop();R.aset(a,b,v);
case 88: L[2]=(L[2]+(-1))|0;
case 91: pc=77;continue flow;
case 94: S.push(L[1]);
case 95: return S.pop();
default:throw new Error("Invalid control flow u.a()I "+pc);
}}catch(error){
throw error;}}});
// u.a(I)V
R.method("u","a(I)V",function(self,args){
const S=[], L=new Array(2).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=self;
L[1]=args[0];
flow: while(true){ try { switch(pc){
case 0: S.push(L[0]);
case 1: S.push(L[1]);
case 2: v=S.pop();a=S.pop();R.set(a,"u.a:I",v);
case 5: return;
default:throw new Error("Invalid control flow u.a(I)V "+pc);
}}catch(error){
throw error;}}});
// u.b()I
R.method("u","b()I",function(self,args){
const S=[], L=new Array(1).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=self;
flow: while(true){ try { switch(pc){
case 0: S.push(L[0]);
case 1: a=S.pop();S.push(R.get(a,"u.a:I"));
case 4: return S.pop();
default:throw new Error("Invalid control flow u.b()I "+pc);
}}catch(error){
throw error;}}});
// u.b(I)V
R.method("u","b(I)V",function(self,args){
const S=[], L=new Array(2).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=self;
L[1]=args[0];
flow: while(true){ try { switch(pc){
case 0: S.push(L[0]);
case 1: a=S.pop();S.push(R.get(a,"u.a:[Z"));
case 4: S.push(L[1]);
case 5: S.push(1);
case 6: v=S.pop();b=S.pop();a=S.pop();R.aset(a,b,v);
case 7: return;
default:throw new Error("Invalid control flow u.b(I)V "+pc);
}}catch(error){
throw error;}}});
// u.a([[B)V
R.method("u","a([[B)V",function(self,args){
const S=[], L=new Array(2).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=self;
L[1]=args[0];
flow: while(true){ try { switch(pc){
case 0: S.push(L[0]);
case 1: S.push(L[1]);
case 2: v=S.pop();a=S.pop();R.set(a,"u.a:[[B",v);
case 5: return;
default:throw new Error("Invalid control flow u.a([[B)V "+pc);
}}catch(error){
throw error;}}});
}
