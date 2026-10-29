// Generated offline by tools/compile_game.py. Source q.class
export default function register(R) {
R.define("q","java/lang/Object",[{key:"q.a:[[I",static:true,value:null},{key:"q.a:[B",static:true,value:null},{key:"q.a:I",static:true,value:0},{key:"q.b:I",static:true,value:0},{key:"q.c:I",static:true,value:0},{key:"q.d:I",static:true,value:0},{key:"q.e:I",static:true,value:0},{key:"q.f:I",static:true,value:0},{key:"q.b:[B",static:true,value:null},{key:"q.g:I",static:true,value:0},{key:"q.a:[Li;",static:true,value:null},{key:"q.a:Li;",static:true,value:null},{key:"q.h:I",static:true,value:0},{key:"q.i:I",static:true,value:0},{key:"q.j:I",static:true,value:0},{key:"q.k:I",static:true,value:0},{key:"q.c:[B",static:true,value:null},{key:"q.l:I",static:true,value:0},{key:"q.m:I",static:true,value:0},{key:"q.n:I",static:true,value:0},{key:"q.o:I",static:true,value:0},{key:"q.p:I",static:true,value:0},{key:"q.r:I",static:true,value:0},{key:"q.q:I",static:true,value:0}]);
// q.<init>()V
R.method("q","<init>()V",function(self,args){
const S=[], L=new Array(1).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=self;
flow: while(true){ try { switch(pc){
case 0: S.push(L[0]);
case 1: a=S.splice(S.length-0,0);b=S.pop();v=R.call("java/lang/Object","<init>()V",b,a,183);
case 4: return;
default:throw new Error("Invalid control flow q.<init>()V "+pc);
}}catch(error){
throw error;}}});
// q.a(III)V
R.method("q","a(III)V",function(self,args){
const S=[], L=new Array(3).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=args[0];
L[1]=args[1];
L[2]=args[2];
flow: while(true){ try { switch(pc){
case 0: S.push(L[0]);
case 1: if(S.pop()<0){pc=22;continue flow;}
case 4: S.push(L[0]);
case 5: S.push(R.staticGet("q","q.j:I"));
case 8: b=S.pop();a=S.pop();if(a>=b){pc=22;continue flow;}
case 11: S.push(L[1]);
case 12: if(S.pop()<0){pc=22;continue flow;}
case 15: S.push(L[1]);
case 16: S.push(R.staticGet("q","q.k:I"));
case 19: b=S.pop();a=S.pop();if(a<b){pc=23;continue flow;}
case 22: return;
case 23: S.push(R.staticGet("q","q.c:[B"));
case 26: S.push(L[0]);
case 27: S.push(R.staticGet("q","q.j:I"));
case 30: S.push(L[1]);
case 31: b=S.pop();a=S.pop();S.push(Math.imul(a,b));
case 32: b=S.pop();a=S.pop();S.push((a+b)|0);
case 33: a=S.pop();if(typeof a==="bigint")S.push(a,a);else{b=S.pop();S.push(b,a,b,a);}
case 34: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 35: S.push(L[2]);
case 36: S.push(S.pop()<<24>>24);
case 37: b=S.pop();a=S.pop();S.push(a|b);
case 38: S.push(S.pop()<<24>>24);
case 39: v=S.pop();b=S.pop();a=S.pop();R.aset(a,b,v);
case 40: return;
default:throw new Error("Invalid control flow q.a(III)V "+pc);
}}catch(error){
throw error;}}});
// q.a(IIIIIZI)I
R.method("q","a(IIIIIZI)I",function(self,args){
const S=[], L=new Array(12).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=args[0];
L[1]=args[1];
L[2]=args[2];
L[3]=args[3];
L[4]=args[4];
L[5]=args[5];
L[6]=args[6];
flow: while(true){ try { switch(pc){
case 0: L[6]=(L[6]+(-1))|0;
case 3: S.push(L[2]);
case 4: a=S.splice(S.length-1,1);b=null;v=R.call("java/lang/Math","abs(I)I",b,a,184);S.push(v);
case 7: S.push(L[3]);
case 8: a=S.splice(S.length-1,1);b=null;v=R.call("java/lang/Math","abs(I)I",b,a,184);S.push(v);
case 11: a=S.splice(S.length-2,2);b=null;v=R.call("java/lang/Math","max(II)I",b,a,184);S.push(v);
case 14: L[7]=S.pop();
case 16: S.push(2);
case 17: L[8]=S.pop();
case 19: S.push(1);
case 20: L[9]=S.pop();
case 22: S.push(L[7]);
case 24: S.push(R.staticGet("q","q.b:I"));
case 27: b=S.pop();a=S.pop();if(a<=b){pc=67;continue flow;}
case 30: S.push(L[2]);
case 31: S.push(1);
case 32: b=S.pop();a=S.pop();S.push(a>>b);
case 33: L[2]=S.pop();
case 34: S.push(L[3]);
case 35: S.push(1);
case 36: b=S.pop();a=S.pop();S.push(a>>b);
case 37: L[3]=S.pop();
case 38: S.push(L[8]);
case 40: S.push(L[9]);
case 42: b=S.pop();a=S.pop();S.push((a+b)|0);
case 43: L[8]=S.pop();
case 45: S.push(L[9]);
case 47: S.push(1);
case 48: b=S.pop();a=S.pop();S.push(a<<b);
case 49: L[9]=S.pop();
case 51: S.push(L[2]);
case 52: a=S.splice(S.length-1,1);b=null;v=R.call("java/lang/Math","abs(I)I",b,a,184);S.push(v);
case 55: S.push(L[3]);
case 56: a=S.splice(S.length-1,1);b=null;v=R.call("java/lang/Math","abs(I)I",b,a,184);S.push(v);
case 59: a=S.splice(S.length-2,2);b=null;v=R.call("java/lang/Math","max(II)I",b,a,184);S.push(v);
case 62: L[7]=S.pop();
case 64: pc=22;continue flow;
case 67: S.push(L[8]);
case 69: L[10]=S.pop();
case 71: S.push(L[10]);
case 73: if(S.pop()<=0){pc=250;continue flow;}
case 76: S.push(L[0]);
case 77: S.push(L[1]);
case 78: a=S.splice(S.length-2,2);b=null;v=R.call("q","a(II)I",b,a,184);S.push(v);
case 81: R.staticSet("q","q.p:I",S.pop());
case 84: S.push(L[5]);
case 86: if(S.pop()===0){pc=95;continue flow;}
case 89: S.push(R.staticGet("q","q.q:I"));
case 92: pc=98;continue flow;
case 95: S.push(R.staticGet("q","q.r:I"));
case 98: L[8]=S.pop();
case 100: S.push(R.staticGet("q","q.r:I"));
case 103: L[7]=S.pop();
case 105: S.push(R.staticGet("q","q.q:I"));
case 108: L[11]=S.pop();
case 110: S.push(L[5]);
case 112: if(S.pop()===0){pc=130;continue flow;}
case 115: S.push(L[0]);
case 116: S.push(L[6]);
case 118: b=S.pop();a=S.pop();S.push((a+b)|0);
case 119: S.push(L[1]);
case 120: a=S.splice(S.length-2,2);b=null;v=R.call("q","a(II)I",b,a,184);S.push(v);
case 123: S.push(1);
case 124: b=S.pop();a=S.pop();S.push((a+b)|0);
case 125: L[9]=S.pop();
case 127: pc=144;continue flow;
case 130: S.push(L[0]);
case 131: S.push(L[1]);
case 132: S.push(L[6]);
case 134: b=S.pop();a=S.pop();S.push((a+b)|0);
case 135: a=S.splice(S.length-2,2);b=null;v=R.call("q","a(II)I",b,a,184);S.push(v);
case 138: S.push(R.staticGet("q","q.j:I"));
case 141: b=S.pop();a=S.pop();S.push((a+b)|0);
case 142: L[9]=S.pop();
case 144: S.push(L[7]);
case 146: R.staticSet("q","q.r:I",S.pop());
case 149: S.push(L[11]);
case 151: R.staticSet("q","q.q:I",S.pop());
case 154: S.push(R.staticGet("q","q.p:I"));
case 157: S.push(L[9]);
case 159: b=S.pop();a=S.pop();if(a===b){pc=236;continue flow;}
case 162: S.push(R.staticGet("q","q.c:[B"));
case 165: S.push(R.staticGet("q","q.p:I"));
case 168: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 169: S.push(L[4]);
case 171: b=S.pop();a=S.pop();S.push(a&b);
case 172: if(S.pop()<=0){pc=178;continue flow;}
case 175: S.push(L[8]);
case 177: return S.pop();
case 178: S.push(L[5]);
case 180: if(S.pop()===0){pc=204;continue flow;}
case 183: S.push(R.staticGet("q","q.p:I"));
case 186: S.push(1);
case 187: b=S.pop();a=S.pop();S.push((a+b)|0);
case 188: R.staticSet("q","q.p:I",S.pop());
case 191: S.push(R.staticGet("q","q.r:I"));
case 194: S.push(R.staticGet("q","q.b:I"));
case 197: b=S.pop();a=S.pop();S.push((a+b)|0);
case 198: R.staticSet("q","q.r:I",S.pop());
case 201: pc=224;continue flow;
case 204: S.push(R.staticGet("q","q.p:I"));
case 207: S.push(R.staticGet("q","q.j:I"));
case 210: b=S.pop();a=S.pop();S.push((a+b)|0);
case 211: R.staticSet("q","q.p:I",S.pop());
case 214: S.push(R.staticGet("q","q.q:I"));
case 217: S.push(R.staticGet("q","q.c:I"));
case 220: b=S.pop();a=S.pop();S.push((a+b)|0);
case 221: R.staticSet("q","q.q:I",S.pop());
case 224: S.push(R.staticGet("q","q.p:I"));
case 227: S.push(R.staticGet("q","q.c:[B"));
case 230: S.push(R.length(S.pop()));
case 231: b=S.pop();a=S.pop();if(a<b){pc=154;continue flow;}
case 234: S.push(-1);
case 235: return S.pop();
case 236: S.push(L[0]);
case 237: S.push(L[2]);
case 238: b=S.pop();a=S.pop();S.push((a+b)|0);
case 239: L[0]=S.pop();
case 240: S.push(L[1]);
case 241: S.push(L[3]);
case 242: b=S.pop();a=S.pop();S.push((a+b)|0);
case 243: L[1]=S.pop();
case 244: L[10]=(L[10]+(-1))|0;
case 247: pc=71;continue flow;
case 250: S.push(-1);
case 251: return S.pop();
default:throw new Error("Invalid control flow q.a(IIIIIZI)I "+pc);
}}catch(error){
throw error;}}});
// q.a(II)I
R.method("q","a(II)I",function(self,args){
const S=[], L=new Array(3).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=args[0];
L[1]=args[1];
flow: while(true){ try { switch(pc){
case 0: S.push(L[0]);
case 1: if(S.pop()<=0){pc=15;continue flow;}
case 4: S.push(L[0]);
case 5: S.push(R.staticGet("q","q.e:I"));
case 8: b=S.pop();a=S.pop();S.push(Math.imul(a,b));
case 9: S.push(16);
case 11: b=S.pop();a=S.pop();S.push(a>>b);
case 12: pc=16;continue flow;
case 15: S.push(0);
case 16: L[0]=S.pop();
case 17: S.push(L[1]);
case 18: if(S.pop()<=0){pc=32;continue flow;}
case 21: S.push(L[1]);
case 22: S.push(R.staticGet("q","q.f:I"));
case 25: b=S.pop();a=S.pop();S.push(Math.imul(a,b));
case 26: S.push(16);
case 28: b=S.pop();a=S.pop();S.push(a>>b);
case 29: pc=33;continue flow;
case 32: S.push(0);
case 33: S.push(S[S.length-1]);
case 34: L[1]=S.pop();
case 35: S.push(R.staticGet("q","q.j:I"));
case 38: b=S.pop();a=S.pop();S.push(Math.imul(a,b));
case 39: S.push(L[0]);
case 40: b=S.pop();a=S.pop();S.push((a+b)|0);
case 41: S.push(S[S.length-1]);
case 42: L[2]=S.pop();
case 43: S.push(R.staticGet("q","q.c:[B"));
case 46: S.push(R.length(S.pop()));
case 47: b=S.pop();a=S.pop();if(a<b){pc=52;continue flow;}
case 50: S.push(0);
case 51: L[2]=S.pop();
case 52: S.push(L[0]);
case 53: S.push(R.staticGet("q","q.b:I"));
case 56: b=S.pop();a=S.pop();S.push(Math.imul(a,b));
case 57: R.staticSet("q","q.r:I",S.pop());
case 60: S.push(L[1]);
case 61: S.push(R.staticGet("q","q.c:I"));
case 64: b=S.pop();a=S.pop();S.push(Math.imul(a,b));
case 65: R.staticSet("q","q.q:I",S.pop());
case 68: S.push(L[0]);
case 69: S.push(R.staticGet("q","q.j:I"));
case 72: b=S.pop();a=S.pop();if(a>=b){pc=82;continue flow;}
case 75: S.push(L[1]);
case 76: S.push(R.staticGet("q","q.k:I"));
case 79: b=S.pop();a=S.pop();if(a<b){pc=84;continue flow;}
case 82: S.push(0);
case 83: return S.pop();
case 84: S.push(L[2]);
case 85: return S.pop();
default:throw new Error("Invalid control flow q.a(II)I "+pc);
}}catch(error){
throw error;}}});
}
