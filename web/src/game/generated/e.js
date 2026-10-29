// Generated offline by tools/compile_game.py. Source e.class
export default function register(R) {
R.define("e","java/lang/Object",[{key:"e.a:I",static:true,value:0},{key:"e.b:I",static:true,value:0},{key:"e.c:I",static:true,value:0},{key:"e.d:I",static:true,value:0},{key:"e.e:I",static:true,value:0},{key:"e.f:I",static:true,value:0},{key:"e.g:I",static:true,value:0},{key:"e.h:I",static:true,value:0},{key:"e.i:I",static:true,value:0},{key:"e.j:I",static:true,value:0},{key:"e.a:Z",static:true,value:0},{key:"e.k:I",static:true,value:0},{key:"e.l:I",static:true,value:0},{key:"e.b:Z",static:true,value:0}]);
// e.<init>()V
R.method("e","<init>()V",function(self,args){
const S=[], L=new Array(1).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=self;
flow: while(true){ try { switch(pc){
case 0: S.push(L[0]);
case 1: a=S.splice(S.length-0,0);b=S.pop();v=R.call("java/lang/Object","<init>()V",b,a,183);
case 4: return;
default:throw new Error("Invalid control flow e.<init>()V "+pc);
}}catch(error){
throw error;}}});
// e.a(IIII)V
R.method("e","a(IIII)V",function(self,args){
const S=[], L=new Array(4).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=args[0];
L[1]=args[1];
L[2]=args[2];
L[3]=args[3];
flow: while(true){ try { switch(pc){
case 0: S.push(L[0]);
case 1: R.staticSet("e","e.g:I",S.pop());
case 4: S.push(L[2]);
case 5: R.staticSet("e","e.h:I",S.pop());
case 8: S.push(L[1]);
case 9: R.staticSet("e","e.i:I",S.pop());
case 12: S.push(L[3]);
case 13: R.staticSet("e","e.j:I",S.pop());
case 16: S.push(R.staticGet("e","e.c:I"));
case 19: S.push(R.staticGet("e","e.d:I"));
case 22: a=S.splice(S.length-2,2);b=null;v=R.call("e","a(II)V",b,a,184);
case 25: return;
default:throw new Error("Invalid control flow e.a(IIII)V "+pc);
}}catch(error){
throw error;}}});
// e.a(II)V
R.method("e","a(II)V",function(self,args){
const S=[], L=new Array(2).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=args[0];
L[1]=args[1];
flow: while(true){ try { switch(pc){
case 0: S.push(L[0]);
case 1: R.staticSet("e","e.c:I",S.pop());
case 4: S.push(L[1]);
case 5: R.staticSet("e","e.d:I",S.pop());
case 8: S.push(R.staticGet("e","e.b:Z"));
case 11: if(S.pop()!==0){pc=74;continue flow;}
case 14: S.push(R.staticGet("e","e.c:I"));
case 17: S.push(R.staticGet("e","e.i:I"));
case 20: b=S.pop();a=S.pop();if(a<=b){pc=29;continue flow;}
case 23: S.push(R.staticGet("e","e.i:I"));
case 26: R.staticSet("e","e.c:I",S.pop());
case 29: S.push(R.staticGet("e","e.c:I"));
case 32: S.push(R.staticGet("e","e.g:I"));
case 35: b=S.pop();a=S.pop();if(a>=b){pc=44;continue flow;}
case 38: S.push(R.staticGet("e","e.g:I"));
case 41: R.staticSet("e","e.c:I",S.pop());
case 44: S.push(R.staticGet("e","e.d:I"));
case 47: S.push(R.staticGet("e","e.j:I"));
case 50: b=S.pop();a=S.pop();if(a<=b){pc=59;continue flow;}
case 53: S.push(R.staticGet("e","e.j:I"));
case 56: R.staticSet("e","e.d:I",S.pop());
case 59: S.push(R.staticGet("e","e.d:I"));
case 62: S.push(R.staticGet("e","e.h:I"));
case 65: b=S.pop();a=S.pop();if(a>=b){pc=74;continue flow;}
case 68: S.push(R.staticGet("e","e.h:I"));
case 71: R.staticSet("e","e.d:I",S.pop());
case 74: S.push(R.staticGet("e","e.a:Z"));
case 77: if(S.pop()===0){pc=119;continue flow;}
case 80: S.push(R.staticGet("e","e.c:I"));
case 83: S.push(R.staticGet("e","e.a:I"));
case 86: b=S.pop();a=S.pop();S.push((a-b)|0);
case 87: R.staticSet("e","e.e:I",S.pop());
case 90: S.push(R.staticGet("e","e.d:I"));
case 93: S.push(R.staticGet("e","e.b:I"));
case 96: b=S.pop();a=S.pop();S.push((a-b)|0);
case 97: R.staticSet("e","e.f:I",S.pop());
case 100: S.push(R.staticGet("e","e.e:I"));
case 103: if(S.pop()!==0){pc=112;continue flow;}
case 106: S.push(R.staticGet("e","e.f:I"));
case 109: if(S.pop()===0){pc=131;continue flow;}
case 112: S.push(R.staticGet("e","e.k:I"));
case 115: R.staticSet("e","e.l:I",S.pop());
case 118: return;
case 119: S.push(R.staticGet("e","e.c:I"));
case 122: R.staticSet("e","e.a:I",S.pop());
case 125: S.push(R.staticGet("e","e.d:I"));
case 128: R.staticSet("e","e.b:I",S.pop());
case 131: return;
default:throw new Error("Invalid control flow e.a(II)V "+pc);
}}catch(error){
throw error;}}});
}
