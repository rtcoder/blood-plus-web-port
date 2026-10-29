// Generated offline by tools/compile_game.py. Source p.class
export default function register(R) {
R.define("p","h",[{key:"p.a:Lg;",static:false,value:null},{key:"p.a:S",static:false,value:0},{key:"p.b:S",static:false,value:0},{key:"p.c:S",static:false,value:0},{key:"p.d:S",static:false,value:0},{key:"p.e:S",static:false,value:0}]);
// p.<init>(Lg;I[I)V
R.method("p","<init>(Lg;I[I)V",function(self,args){
const S=[], L=new Array(4).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=self;
L[1]=args[0];
L[2]=args[1];
L[3]=args[2];
flow: while(true){ try { switch(pc){
case 0: S.push(L[0]);
case 1: a=S.splice(S.length-0,0);b=S.pop();v=R.call("h","<init>()V",b,a,183);
case 4: S.push(L[0]);
case 5: S.push(L[1]);
case 6: v=S.pop();a=S.pop();R.set(a,"p.a:Lg;",v);
case 9: S.push(L[0]);
case 10: S.push(L[2]);
case 11: S.push(S.pop()<<16>>16);
case 12: v=S.pop();a=S.pop();R.set(a,"p.a:S",v);
case 15: S.push(L[0]);
case 16: S.push(L[3]);
case 17: S.push(0);
case 18: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 19: S.push(S.pop()<<16>>16);
case 20: v=S.pop();a=S.pop();R.set(a,"p.b:S",v);
case 23: S.push(L[0]);
case 24: S.push(L[3]);
case 25: S.push(1);
case 26: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 27: S.push(S.pop()<<16>>16);
case 28: v=S.pop();a=S.pop();R.set(a,"p.c:S",v);
case 31: S.push(L[0]);
case 32: S.push(L[3]);
case 33: S.push(2);
case 34: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 35: S.push(S.pop()<<16>>16);
case 36: v=S.pop();a=S.pop();R.set(a,"p.d:S",v);
case 39: S.push(L[0]);
case 40: S.push(L[3]);
case 41: S.push(3);
case 42: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 43: S.push(S.pop()<<16>>16);
case 44: v=S.pop();a=S.pop();R.set(a,"p.e:S",v);
case 47: return;
default:throw new Error("Invalid control flow p.<init>(Lg;I[I)V "+pc);
}}catch(error){
throw error;}}});
// p.a(I)I
R.method("p","a(I)I",function(self,args){
const S=[], L=new Array(2).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=self;
L[1]=args[0];
flow: while(true){ try { switch(pc){
case 0: S.push(L[1]);
case 1: S.push(2);
case 2: b=S.pop();a=S.pop();S.push(a&b);
case 3: if(S.pop()===0){pc=17;continue flow;}
case 6: S.push(L[0]);
case 7: a=S.pop();S.push(R.get(a,"p.b:S"));
case 10: S.push(L[0]);
case 11: a=S.pop();S.push(R.get(a,"p.d:S"));
case 14: b=S.pop();a=S.pop();S.push((a+b)|0);
case 15: S.push((-S.pop())|0);
case 16: return S.pop();
case 17: S.push(L[0]);
case 18: a=S.pop();S.push(R.get(a,"p.b:S"));
case 21: return S.pop();
default:throw new Error("Invalid control flow p.a(I)I "+pc);
}}catch(error){
throw error;}}});
// p.b(I)I
R.method("p","b(I)I",function(self,args){
const S=[], L=new Array(2).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=self;
L[1]=args[0];
flow: while(true){ try { switch(pc){
case 0: S.push(L[1]);
case 1: S.push(1);
case 2: b=S.pop();a=S.pop();S.push(a&b);
case 3: if(S.pop()===0){pc=17;continue flow;}
case 6: S.push(L[0]);
case 7: a=S.pop();S.push(R.get(a,"p.c:S"));
case 10: S.push(L[0]);
case 11: a=S.pop();S.push(R.get(a,"p.e:S"));
case 14: b=S.pop();a=S.pop();S.push((a+b)|0);
case 15: S.push((-S.pop())|0);
case 16: return S.pop();
case 17: S.push(L[0]);
case 18: a=S.pop();S.push(R.get(a,"p.c:S"));
case 21: return S.pop();
default:throw new Error("Invalid control flow p.b(I)I "+pc);
}}catch(error){
throw error;}}});
// p.c(I)I
R.method("p","c(I)I",function(self,args){
const S=[], L=new Array(2).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=self;
L[1]=args[0];
flow: while(true){ try { switch(pc){
case 0: S.push(L[0]);
case 1: a=S.pop();S.push(R.get(a,"p.d:S"));
case 4: return S.pop();
default:throw new Error("Invalid control flow p.c(I)I "+pc);
}}catch(error){
throw error;}}});
// p.d(I)I
R.method("p","d(I)I",function(self,args){
const S=[], L=new Array(2).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=self;
L[1]=args[0];
flow: while(true){ try { switch(pc){
case 0: S.push(L[0]);
case 1: a=S.pop();S.push(R.get(a,"p.e:S"));
case 4: return S.pop();
default:throw new Error("Invalid control flow p.d(I)I "+pc);
}}catch(error){
throw error;}}});
// p.a(Ljavax/microedition/lcdui/Graphics;III)V
R.method("p","a(Ljavax/microedition/lcdui/Graphics;III)V",function(self,args){
const S=[], L=new Array(5).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=self;
L[1]=args[0];
L[2]=args[1];
L[3]=args[2];
L[4]=args[3];
flow: while(true){ try { switch(pc){
case 0: S.push(L[0]);
case 1: a=S.pop();S.push(R.get(a,"p.a:Lg;"));
case 4: S.push(L[1]);
case 5: S.push(L[0]);
case 6: a=S.pop();S.push(R.get(a,"p.a:S"));
case 9: S.push(L[2]);
case 10: S.push(L[3]);
case 11: S.push(L[4]);
case 13: a=S.splice(S.length-5,5);b=S.pop();v=R.call("g","a(Ljavax/microedition/lcdui/Graphics;IIII)V",b,a,182);
case 16: return;
default:throw new Error("Invalid control flow p.a(Ljavax/microedition/lcdui/Graphics;III)V "+pc);
}}catch(error){
throw error;}}});
}
