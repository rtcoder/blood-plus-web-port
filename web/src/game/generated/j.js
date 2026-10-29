// Generated offline by tools/compile_game.py. Source j.class
export default function register(R) {
R.define("j","h",[{key:"j.a:Ljavax/microedition/lcdui/Image;",static:false,value:null},{key:"j.a:S",static:false,value:0},{key:"j.b:S",static:false,value:0},{key:"j.c:S",static:false,value:0},{key:"j.d:S",static:false,value:0},{key:"j.e:S",static:false,value:0},{key:"j.f:S",static:false,value:0},{key:"j.g:S",static:false,value:0},{key:"j.h:S",static:false,value:0},{key:"j.i:S",static:false,value:0},{key:"j.j:S",static:false,value:0}]);
// j.<init>(Ljavax/microedition/lcdui/Image;)V
R.method("j","<init>(Ljavax/microedition/lcdui/Image;)V",function(self,args){
const S=[], L=new Array(2).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=self;
L[1]=args[0];
flow: while(true){ try { switch(pc){
case 0: S.push(L[0]);
case 1: a=S.splice(S.length-0,0);b=S.pop();v=R.call("h","<init>()V",b,a,183);
case 4: S.push(L[0]);
case 5: S.push(L[1]);
case 6: v=S.pop();a=S.pop();R.set(a,"j.a:Ljavax/microedition/lcdui/Image;",v);
case 9: return;
default:throw new Error("Invalid control flow j.<init>(Ljavax/microedition/lcdui/Image;)V "+pc);
}}catch(error){
throw error;}}});
// j.a([S)V
R.method("j","a([S)V",function(self,args){
const S=[], L=new Array(2).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=self;
L[1]=args[0];
flow: while(true){ try { switch(pc){
case 0: S.push(L[0]);
case 1: S.push(L[1]);
case 2: S.push(0);
case 3: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 4: v=S.pop();a=S.pop();R.set(a,"j.a:S",v);
case 7: S.push(L[0]);
case 8: S.push(L[1]);
case 9: S.push(1);
case 10: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 11: v=S.pop();a=S.pop();R.set(a,"j.b:S",v);
case 14: S.push(L[0]);
case 15: S.push(L[1]);
case 16: S.push(2);
case 17: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 18: v=S.pop();a=S.pop();R.set(a,"j.i:S",v);
case 21: S.push(L[0]);
case 22: S.push(L[1]);
case 23: S.push(3);
case 24: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 25: v=S.pop();a=S.pop();R.set(a,"j.j:S",v);
case 28: S.push(L[0]);
case 29: S.push(L[1]);
case 30: S.push(4);
case 31: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 32: v=S.pop();a=S.pop();R.set(a,"j.c:S",v);
case 35: S.push(L[0]);
case 36: S.push(L[1]);
case 37: S.push(5);
case 38: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 39: v=S.pop();a=S.pop();R.set(a,"j.d:S",v);
case 42: S.push(L[0]);
case 43: S.push(L[1]);
case 44: S.push(6);
case 46: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 47: v=S.pop();a=S.pop();R.set(a,"j.e:S",v);
case 50: S.push(L[0]);
case 51: S.push(L[1]);
case 52: S.push(7);
case 54: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 55: v=S.pop();a=S.pop();R.set(a,"j.f:S",v);
case 58: S.push(L[0]);
case 59: S.push(L[1]);
case 60: S.push(8);
case 62: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 63: v=S.pop();a=S.pop();R.set(a,"j.g:S",v);
case 66: S.push(L[0]);
case 67: S.push(L[1]);
case 68: S.push(9);
case 70: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 71: v=S.pop();a=S.pop();R.set(a,"j.h:S",v);
case 74: return;
default:throw new Error("Invalid control flow j.a([S)V "+pc);
}}catch(error){
throw error;}}});
// j.a(Ljavax/microedition/lcdui/Graphics;III)V
R.method("j","a(Ljavax/microedition/lcdui/Graphics;III)V",function(self,args){
const S=[], L=new Array(11).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=self;
L[1]=args[0];
L[2]=args[1];
L[3]=args[2];
L[4]=args[3];
flow: while(true){ try { switch(pc){
case 0: S.push(L[2]);
case 1: S.push(L[4]);
case 3: S.push(2);
case 4: b=S.pop();a=S.pop();S.push(a&b);
case 5: if(S.pop()===0){pc=21;continue flow;}
case 8: S.push(L[0]);
case 9: a=S.pop();S.push(R.get(a,"j.a:S"));
case 12: S.push(L[0]);
case 13: a=S.pop();S.push(R.get(a,"j.c:S"));
case 16: b=S.pop();a=S.pop();S.push((a+b)|0);
case 17: S.push((-S.pop())|0);
case 18: pc=25;continue flow;
case 21: S.push(L[0]);
case 22: a=S.pop();S.push(R.get(a,"j.a:S"));
case 25: b=S.pop();a=S.pop();S.push((a+b)|0);
case 26: L[2]=S.pop();
case 27: S.push(L[3]);
case 28: S.push(L[4]);
case 30: S.push(1);
case 31: b=S.pop();a=S.pop();S.push(a&b);
case 32: if(S.pop()===0){pc=48;continue flow;}
case 35: S.push(L[0]);
case 36: a=S.pop();S.push(R.get(a,"j.b:S"));
case 39: S.push(L[0]);
case 40: a=S.pop();S.push(R.get(a,"j.d:S"));
case 43: b=S.pop();a=S.pop();S.push((a+b)|0);
case 44: S.push((-S.pop())|0);
case 45: pc=52;continue flow;
case 48: S.push(L[0]);
case 49: a=S.pop();S.push(R.get(a,"j.b:S"));
case 52: b=S.pop();a=S.pop();S.push((a+b)|0);
case 53: L[3]=S.pop();
case 54: S.push(L[0]);
case 55: a=S.pop();S.push(R.get(a,"j.c:S"));
case 58: L[5]=S.pop();
case 60: S.push(L[0]);
case 61: a=S.pop();S.push(R.get(a,"j.d:S"));
case 64: L[6]=S.pop();
case 66: S.push(L[0]);
case 67: a=S.pop();S.push(R.get(a,"j.i:S"));
case 70: L[7]=S.pop();
case 72: S.push(L[0]);
case 73: a=S.pop();S.push(R.get(a,"j.j:S"));
case 76: L[8]=S.pop();
case 78: S.push(L[1]);
case 79: a=S.splice(S.length-0,0);b=S.pop();v=R.call("javax/microedition/lcdui/Graphics","getClipX()I",b,a,182);S.push(v);
case 82: S.push(S[S.length-1]);
case 83: L[9]=S.pop();
case 85: S.push(L[2]);
case 86: b=S.pop();a=S.pop();S.push((a-b)|0);
case 87: S.push(S[S.length-1]);
case 88: L[10]=S.pop();
case 90: if(S.pop()<=0){pc=117;continue flow;}
case 93: S.push(L[5]);
case 95: S.push(L[10]);
case 97: b=S.pop();a=S.pop();S.push((a-b)|0);
case 98: L[5]=S.pop();
case 100: S.push(L[4]);
case 102: S.push(2);
case 103: b=S.pop();a=S.pop();S.push(a&b);
case 104: if(S.pop()!==0){pc=114;continue flow;}
case 107: S.push(L[7]);
case 109: S.push(L[10]);
case 111: b=S.pop();a=S.pop();S.push((a+b)|0);
case 112: L[7]=S.pop();
case 114: S.push(L[9]);
case 116: L[2]=S.pop();
case 117: S.push(L[9]);
case 119: S.push(L[1]);
case 120: a=S.splice(S.length-0,0);b=S.pop();v=R.call("javax/microedition/lcdui/Graphics","getClipWidth()I",b,a,182);S.push(v);
case 123: b=S.pop();a=S.pop();S.push((a+b)|0);
case 124: L[9]=S.pop();
case 126: S.push(L[2]);
case 127: S.push(L[5]);
case 129: b=S.pop();a=S.pop();S.push((a+b)|0);
case 130: S.push(L[9]);
case 132: b=S.pop();a=S.pop();S.push((a-b)|0);
case 133: S.push(S[S.length-1]);
case 134: L[10]=S.pop();
case 136: if(S.pop()<=0){pc=160;continue flow;}
case 139: S.push(L[5]);
case 141: S.push(L[10]);
case 143: b=S.pop();a=S.pop();S.push((a-b)|0);
case 144: L[5]=S.pop();
case 146: S.push(L[4]);
case 148: S.push(2);
case 149: b=S.pop();a=S.pop();S.push(a&b);
case 150: if(S.pop()===0){pc=160;continue flow;}
case 153: S.push(L[7]);
case 155: S.push(L[10]);
case 157: b=S.pop();a=S.pop();S.push((a+b)|0);
case 158: L[7]=S.pop();
case 160: S.push(L[1]);
case 161: a=S.splice(S.length-0,0);b=S.pop();v=R.call("javax/microedition/lcdui/Graphics","getClipY()I",b,a,182);S.push(v);
case 164: S.push(S[S.length-1]);
case 165: L[9]=S.pop();
case 167: S.push(L[3]);
case 168: b=S.pop();a=S.pop();S.push((a-b)|0);
case 169: S.push(S[S.length-1]);
case 170: L[10]=S.pop();
case 172: if(S.pop()<=0){pc=199;continue flow;}
case 175: S.push(L[6]);
case 177: S.push(L[10]);
case 179: b=S.pop();a=S.pop();S.push((a-b)|0);
case 180: L[6]=S.pop();
case 182: S.push(L[4]);
case 184: S.push(1);
case 185: b=S.pop();a=S.pop();S.push(a&b);
case 186: if(S.pop()!==0){pc=196;continue flow;}
case 189: S.push(L[8]);
case 191: S.push(L[10]);
case 193: b=S.pop();a=S.pop();S.push((a+b)|0);
case 194: L[8]=S.pop();
case 196: S.push(L[9]);
case 198: L[3]=S.pop();
case 199: S.push(L[9]);
case 201: S.push(L[1]);
case 202: a=S.splice(S.length-0,0);b=S.pop();v=R.call("javax/microedition/lcdui/Graphics","getClipHeight()I",b,a,182);S.push(v);
case 205: b=S.pop();a=S.pop();S.push((a+b)|0);
case 206: L[9]=S.pop();
case 208: S.push(L[3]);
case 209: S.push(L[6]);
case 211: b=S.pop();a=S.pop();S.push((a+b)|0);
case 212: S.push(L[9]);
case 214: b=S.pop();a=S.pop();S.push((a-b)|0);
case 215: S.push(S[S.length-1]);
case 216: L[10]=S.pop();
case 218: if(S.pop()<=0){pc=242;continue flow;}
case 221: S.push(L[6]);
case 223: S.push(L[10]);
case 225: b=S.pop();a=S.pop();S.push((a-b)|0);
case 226: L[6]=S.pop();
case 228: S.push(L[4]);
case 230: S.push(1);
case 231: b=S.pop();a=S.pop();S.push(a&b);
case 232: if(S.pop()===0){pc=242;continue flow;}
case 235: S.push(L[8]);
case 237: S.push(L[10]);
case 239: b=S.pop();a=S.pop();S.push((a+b)|0);
case 240: L[8]=S.pop();
case 242: S.push(L[5]);
case 244: if(S.pop()<=0){pc=274;continue flow;}
case 247: S.push(L[6]);
case 249: if(S.pop()<=0){pc=274;continue flow;}
case 252: S.push(L[1]);
case 253: S.push(L[0]);
case 254: a=S.pop();S.push(R.get(a,"j.a:Ljavax/microedition/lcdui/Image;"));
case 257: S.push(L[7]);
case 259: S.push(L[8]);
case 261: S.push(L[5]);
case 263: S.push(L[6]);
case 265: S.push(L[4]);
case 267: S.push(L[2]);
case 268: S.push(L[3]);
case 269: S.push(20);
case 271: a=S.splice(S.length-9,9);b=S.pop();v=R.call("javax/microedition/lcdui/Graphics","drawRegion(Ljavax/microedition/lcdui/Image;IIIIIIII)V",b,a,182);
case 274: return;
default:throw new Error("Invalid control flow j.a(Ljavax/microedition/lcdui/Graphics;III)V "+pc);
}}catch(error){
throw error;}}});
// j.a(I)I
R.method("j","a(I)I",function(self,args){
const S=[], L=new Array(2).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=self;
L[1]=args[0];
flow: while(true){ try { switch(pc){
case 0: S.push(L[1]);
case 1: S.push(2);
case 2: b=S.pop();a=S.pop();S.push(a&b);
case 3: if(S.pop()===0){pc=17;continue flow;}
case 6: S.push(L[0]);
case 7: a=S.pop();S.push(R.get(a,"j.a:S"));
case 10: S.push(L[0]);
case 11: a=S.pop();S.push(R.get(a,"j.c:S"));
case 14: b=S.pop();a=S.pop();S.push((a+b)|0);
case 15: S.push((-S.pop())|0);
case 16: return S.pop();
case 17: S.push(L[0]);
case 18: a=S.pop();S.push(R.get(a,"j.a:S"));
case 21: return S.pop();
default:throw new Error("Invalid control flow j.a(I)I "+pc);
}}catch(error){
throw error;}}});
// j.b(I)I
R.method("j","b(I)I",function(self,args){
const S=[], L=new Array(2).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=self;
L[1]=args[0];
flow: while(true){ try { switch(pc){
case 0: S.push(L[1]);
case 1: S.push(1);
case 2: b=S.pop();a=S.pop();S.push(a&b);
case 3: if(S.pop()===0){pc=17;continue flow;}
case 6: S.push(L[0]);
case 7: a=S.pop();S.push(R.get(a,"j.b:S"));
case 10: S.push(L[0]);
case 11: a=S.pop();S.push(R.get(a,"j.d:S"));
case 14: b=S.pop();a=S.pop();S.push((a+b)|0);
case 15: S.push((-S.pop())|0);
case 16: return S.pop();
case 17: S.push(L[0]);
case 18: a=S.pop();S.push(R.get(a,"j.b:S"));
case 21: return S.pop();
default:throw new Error("Invalid control flow j.b(I)I "+pc);
}}catch(error){
throw error;}}});
// j.c(I)I
R.method("j","c(I)I",function(self,args){
const S=[], L=new Array(2).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=self;
L[1]=args[0];
flow: while(true){ try { switch(pc){
case 0: S.push(L[0]);
case 1: a=S.pop();S.push(R.get(a,"j.c:S"));
case 4: return S.pop();
default:throw new Error("Invalid control flow j.c(I)I "+pc);
}}catch(error){
throw error;}}});
// j.d(I)I
R.method("j","d(I)I",function(self,args){
const S=[], L=new Array(2).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=self;
L[1]=args[0];
flow: while(true){ try { switch(pc){
case 0: S.push(L[0]);
case 1: a=S.pop();S.push(R.get(a,"j.d:S"));
case 4: return S.pop();
default:throw new Error("Invalid control flow j.d(I)I "+pc);
}}catch(error){
throw error;}}});
}
