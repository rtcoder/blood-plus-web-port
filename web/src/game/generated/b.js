// Generated offline by tools/compile_game.py. Source b.class
export default function register(R) {
R.define("b","java/lang/Object",[]);
// b.<init>()V
R.method("b","<init>()V",function(self,args){
const S=[], L=new Array(1).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=self;
flow: while(true){ try { switch(pc){
case 0: S.push(L[0]);
case 1: a=S.splice(S.length-0,0);b=S.pop();v=R.call("java/lang/Object","<init>()V",b,a,183);
case 4: return;
default:throw new Error("Invalid control flow b.<init>()V "+pc);
}}catch(error){
throw error;}}});
// b.a(IIIIII)Z
R.method("b","a(IIIIII)Z",function(self,args){
const S=[], L=new Array(6).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=args[0];
L[1]=args[1];
L[2]=args[2];
L[3]=args[3];
L[4]=args[4];
L[5]=args[5];
flow: while(true){ try { switch(pc){
case 0: S.push(L[0]);
case 1: S.push(L[2]);
case 2: b=S.pop();a=S.pop();if(a<b){pc=28;continue flow;}
case 5: S.push(L[0]);
case 6: S.push(L[2]);
case 7: S.push(L[4]);
case 9: b=S.pop();a=S.pop();S.push((a+b)|0);
case 10: b=S.pop();a=S.pop();if(a>b){pc=28;continue flow;}
case 13: S.push(L[1]);
case 14: S.push(L[3]);
case 15: b=S.pop();a=S.pop();if(a<b){pc=28;continue flow;}
case 18: S.push(L[1]);
case 19: S.push(L[3]);
case 20: S.push(L[5]);
case 22: b=S.pop();a=S.pop();S.push((a+b)|0);
case 23: b=S.pop();a=S.pop();if(a>b){pc=28;continue flow;}
case 26: S.push(1);
case 27: return S.pop();
case 28: S.push(0);
case 29: return S.pop();
default:throw new Error("Invalid control flow b.a(IIIIII)Z "+pc);
}}catch(error){
throw error;}}});
// b.a(IIIIIIII)Z
R.method("b","a(IIIIIIII)Z",function(self,args){
const S=[], L=new Array(8).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=args[0];
L[1]=args[1];
L[2]=args[2];
L[3]=args[3];
L[4]=args[4];
L[5]=args[5];
L[6]=args[6];
L[7]=args[7];
flow: while(true){ try { switch(pc){
case 0: S.push(L[0]);
case 1: S.push(L[2]);
case 2: b=S.pop();a=S.pop();S.push((a+b)|0);
case 3: S.push(L[4]);
case 5: b=S.pop();a=S.pop();if(a<b){pc=36;continue flow;}
case 8: S.push(L[0]);
case 9: S.push(L[4]);
case 11: S.push(L[6]);
case 13: b=S.pop();a=S.pop();S.push((a+b)|0);
case 14: b=S.pop();a=S.pop();if(a>b){pc=36;continue flow;}
case 17: S.push(L[1]);
case 18: S.push(L[5]);
case 20: S.push(L[7]);
case 22: b=S.pop();a=S.pop();S.push((a+b)|0);
case 23: b=S.pop();a=S.pop();if(a>b){pc=36;continue flow;}
case 26: S.push(L[1]);
case 27: S.push(L[3]);
case 28: b=S.pop();a=S.pop();S.push((a+b)|0);
case 29: S.push(L[5]);
case 31: b=S.pop();a=S.pop();if(a<b){pc=36;continue flow;}
case 34: S.push(1);
case 35: return S.pop();
case 36: S.push(0);
case 37: return S.pop();
default:throw new Error("Invalid control flow b.a(IIIIIIII)Z "+pc);
}}catch(error){
throw error;}}});
// b.a(IIIIIIII)I
R.method("b","a(IIIIIIII)I",function(self,args){
const S=[], L=new Array(9).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=args[0];
L[1]=args[1];
L[2]=args[2];
L[3]=args[3];
L[4]=args[4];
L[5]=args[5];
L[6]=args[6];
L[7]=args[7];
flow: while(true){ try { switch(pc){
case 0: S.push(L[0]);
case 1: S.push(L[4]);
case 3: a=S.splice(S.length-2,2);b=null;v=R.call("java/lang/Math","max(II)I",b,a,184);S.push(v);
case 6: L[8]=S.pop();
case 8: S.push(L[0]);
case 9: S.push(L[2]);
case 10: b=S.pop();a=S.pop();S.push((a+b)|0);
case 11: S.push(L[4]);
case 13: S.push(L[6]);
case 15: b=S.pop();a=S.pop();S.push((a+b)|0);
case 16: a=S.splice(S.length-2,2);b=null;v=R.call("java/lang/Math","min(II)I",b,a,184);S.push(v);
case 19: L[0]=S.pop();
case 20: S.push(L[8]);
case 22: S.push(L[8]);
case 24: S.push(L[0]);
case 25: b=S.pop();a=S.pop();S.push((a-b)|0);
case 26: a=S.splice(S.length-1,1);b=null;v=R.call("java/lang/Math","abs(I)I",b,a,184);S.push(v);
case 29: S.push(1);
case 30: b=S.pop();a=S.pop();S.push(a>>b);
case 31: b=S.pop();a=S.pop();S.push((a+b)|0);
case 32: L[0]=S.pop();
case 33: S.push(L[1]);
case 34: S.push(L[5]);
case 36: a=S.splice(S.length-2,2);b=null;v=R.call("java/lang/Math","max(II)I",b,a,184);S.push(v);
case 39: L[2]=S.pop();
case 40: S.push(L[1]);
case 41: S.push(L[3]);
case 42: b=S.pop();a=S.pop();S.push((a+b)|0);
case 43: S.push(L[5]);
case 45: S.push(L[7]);
case 47: b=S.pop();a=S.pop();S.push((a+b)|0);
case 48: a=S.splice(S.length-2,2);b=null;v=R.call("java/lang/Math","min(II)I",b,a,184);S.push(v);
case 51: L[1]=S.pop();
case 52: S.push(L[2]);
case 53: S.push(L[2]);
case 54: S.push(L[1]);
case 55: b=S.pop();a=S.pop();S.push((a-b)|0);
case 56: a=S.splice(S.length-1,1);b=null;v=R.call("java/lang/Math","abs(I)I",b,a,184);S.push(v);
case 59: S.push(1);
case 60: b=S.pop();a=S.pop();S.push(a>>b);
case 61: b=S.pop();a=S.pop();S.push((a+b)|0);
case 62: L[1]=S.pop();
case 63: S.push(L[0]);
case 64: S.push(16);
case 66: b=S.pop();a=S.pop();S.push(a<<b);
case 67: S.push(L[1]);
case 68: b=S.pop();a=S.pop();S.push(a|b);
case 69: return S.pop();
default:throw new Error("Invalid control flow b.a(IIIIIIII)I "+pc);
}}catch(error){
throw error;}}});
}
