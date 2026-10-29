// Generated offline by tools/compile_game.py. Source a.class
export default function register(R) {
R.define("a","o",[{key:"a.a:B",static:false,value:0},{key:"a.a:I",static:false,value:0},{key:"a.b:I",static:false,value:0},{key:"a.c:I",static:false,value:0},{key:"a.d:I",static:false,value:0},{key:"a.e:I",static:false,value:0},{key:"a.f:I",static:false,value:0},{key:"a.g:I",static:false,value:0},{key:"a.h:I",static:false,value:0},{key:"a.a:[I",static:false,value:null},{key:"a.a:Z",static:false,value:0},{key:"a.i:I",static:false,value:0},{key:"a.j:I",static:false,value:0},{key:"a.k:I",static:false,value:0},{key:"a.l:I",static:false,value:0},{key:"a.b:Z",static:false,value:0},{key:"a.m:I",static:false,value:0},{key:"a.c:Z",static:false,value:0},{key:"a.b:B",static:false,value:0},{key:"a.a:S",static:false,value:0},{key:"a.b:S",static:false,value:0},{key:"a.c:S",static:false,value:0},{key:"a.d:S",static:false,value:0},{key:"a.d:Z",static:false,value:0},{key:"a.e:Z",static:false,value:0},{key:"a.e:S",static:false,value:0},{key:"a.f:S",static:false,value:0},{key:"a.f:Z",static:false,value:0},{key:"a.g:Z",static:false,value:0},{key:"a.a:Lu;",static:false,value:null},{key:"a.n:I",static:false,value:0},{key:"a.a:Lc;",static:false,value:null}]);
// a.<init>()V
R.method("a","<init>()V",function(self,args){
const S=[], L=new Array(1).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=self;
flow: while(true){ try { switch(pc){
case 0: S.push(L[0]);
case 1: a=S.splice(S.length-0,0);b=S.pop();v=R.call("o","<init>()V",b,a,183);
case 4: S.push(L[0]);
case 5: S.push(10);
case 7: S.push(R.array("I",S.pop()));
case 9: v=S.pop();a=S.pop();R.set(a,"a.a:[I",v);
case 12: S.push(L[0]);
case 13: S.push(R.new("u"));
case 16: S.push(S[S.length-1]);
case 17: a=S.splice(S.length-0,0);b=S.pop();v=R.call("u","<init>()V",b,a,183);
case 20: v=S.pop();a=S.pop();R.set(a,"a.a:Lu;",v);
case 23: return;
default:throw new Error("Invalid control flow a.<init>()V "+pc);
}}catch(error){
throw error;}}});
// a.a(Z)V
R.method("a","a(Z)V",function(self,args){
const S=[], L=new Array(2).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=self;
L[1]=args[0];
flow: while(true){ try { switch(pc){
case 0: S.push(L[0]);
case 1: S.push(L[1]);
case 2: v=S.pop();a=S.pop();R.set(a,"a.b:Z",v);
case 5: S.push(L[0]);
case 6: S.push(L[0]);
case 7: a=S.pop();S.push(R.get(a,"a.b:Z"));
case 10: if(S.pop()===0){pc=17;continue flow;}
case 13: S.push(0);
case 14: pc=18;continue flow;
case 17: S.push(2);
case 18: a=S.splice(S.length-1,1);b=S.pop();v=R.call("o","e(I)V",b,a,182);
case 21: return;
default:throw new Error("Invalid control flow a.a(Z)V "+pc);
}}catch(error){
throw error;}}});
// a.a()V
R.method("a","a()V",function(self,args){
const S=[], L=new Array(1).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=self;
flow: while(true){ try { switch(pc){
case 0: S.push(L[0]);
case 1: S.push(L[0]);
case 2: S.push(L[0]);
case 3: a=S.pop();S.push(R.get(a,"a.a:[I"));
case 6: S.push(-1);
case 7: a=S.splice(S.length-2,2);b=S.pop();v=R.call("o","a([II)I",b,a,182);S.push(v);
case 10: v=S.pop();a=S.pop();R.set(a,"a.h:I",v);
case 13: return;
default:throw new Error("Invalid control flow a.a()V "+pc);
}}catch(error){
throw error;}}});
// a.b()V
R.method("a","b()V",function(self,args){
const S=[], L=new Array(1).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=self;
flow: while(true){ try { switch(pc){
case 0: S.push(L[0]);
case 1: S.push(L[0]);
case 2: a=S.pop();S.push(R.get(a,"o.g:S"));
case 5: S.push(L[0]);
case 6: a=S.pop();S.push(R.get(a,"a.e:I"));
case 9: b=S.pop();a=S.pop();S.push((a-b)|0);
case 10: v=S.pop();a=S.pop();R.set(a,"a.b:I",v);
case 13: S.push(L[0]);
case 14: S.push(L[0]);
case 15: a=S.pop();S.push(R.get(a,"o.h:S"));
case 18: S.push(L[0]);
case 19: a=S.pop();S.push(R.get(a,"a.f:I"));
case 22: b=S.pop();a=S.pop();S.push((a-b)|0);
case 23: v=S.pop();a=S.pop();R.set(a,"a.c:I",v);
case 26: return;
default:throw new Error("Invalid control flow a.b()V "+pc);
}}catch(error){
throw error;}}});
// a.a(I)Z
R.method("a","a(I)Z",function(self,args){
const S=[], L=new Array(2).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=self;
L[1]=args[0];
flow: while(true){ try { switch(pc){
case 0: S.push(L[0]);
case 1: a=S.pop();S.push(R.get(a,"a.e:S"));
case 4: if(S.pop()<=0){pc=35;continue flow;}
case 7: S.push(L[0]);
case 8: S.push(S[S.length-1]);
case 9: a=S.pop();S.push(R.get(a,"a.e:S"));
case 12: S.push(L[1]);
case 13: b=S.pop();a=S.pop();S.push((a-b)|0);
case 14: S.push(S.pop()<<16>>16);
case 15: v=S.pop();a=S.pop();R.set(a,"a.e:S",v);
case 18: S.push(L[0]);
case 19: a=S.pop();S.push(R.get(a,"a.e:S"));
case 22: if(S.pop()>0){pc=33;continue flow;}
case 25: S.push(L[0]);
case 26: S.push(0);
case 27: v=S.pop();a=S.pop();R.set(a,"a.e:S",v);
case 30: pc=35;continue flow;
case 33: S.push(0);
case 34: L[1]=S.pop();
case 35: S.push(L[0]);
case 36: a=S.pop();S.push(R.get(a,"a.f:S"));
case 39: if(S.pop()<=0){pc=65;continue flow;}
case 42: S.push(L[0]);
case 43: S.push(S[S.length-1]);
case 44: a=S.pop();S.push(R.get(a,"a.f:S"));
case 47: S.push(L[1]);
case 48: b=S.pop();a=S.pop();S.push((a-b)|0);
case 49: S.push(S.pop()<<16>>16);
case 50: v=S.pop();a=S.pop();R.set(a,"a.f:S",v);
case 53: S.push(L[0]);
case 54: a=S.pop();S.push(R.get(a,"a.f:S"));
case 57: if(S.pop()>0){pc=65;continue flow;}
case 60: S.push(L[0]);
case 61: S.push(0);
case 62: v=S.pop();a=S.pop();R.set(a,"a.f:S",v);
case 65: S.push(L[0]);
case 66: S.push(L[1]);
case 67: a=S.splice(S.length-1,1);b=S.pop();v=R.call("o","a(I)Z",b,a,183);S.push(v);
case 70: return S.pop();
default:throw new Error("Invalid control flow a.a(I)Z "+pc);
}}catch(error){
throw error;}}});
// a.a(I)V
R.method("a","a(I)V",function(self,args){
const S=[], L=new Array(2).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=self;
L[1]=args[0];
flow: while(true){ try { switch(pc){
case 0: S.push(L[0]);
case 1: S.push(L[1]);
case 2: v=S.pop();a=S.pop();R.set(a,"a.i:I",v);
case 5: S.push(L[0]);
case 6: S.push(L[1]);
case 7: a=S.splice(S.length-1,1);b=S.pop();v=R.call("o","a(I)V",b,a,183);
case 10: return;
default:throw new Error("Invalid control flow a.a(I)V "+pc);
}}catch(error){
throw error;}}});
}
