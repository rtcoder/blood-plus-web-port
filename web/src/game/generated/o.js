// Generated offline by tools/compile_game.py. Source o.class
export default function register(R) {
R.define("o","h",[{key:"o.a:S",static:false,value:0},{key:"o.b:S",static:false,value:0},{key:"o.a:B",static:false,value:0},{key:"o.c:S",static:false,value:0},{key:"o.d:S",static:false,value:0},{key:"o.a:Lg;",static:false,value:null},{key:"o.e:S",static:false,value:0},{key:"o.f:S",static:false,value:0},{key:"o.b:B",static:false,value:0},{key:"o.g:S",static:false,value:0},{key:"o.h:S",static:false,value:0},{key:"o.i:S",static:false,value:0},{key:"o.j:S",static:false,value:0}]);
// o.<init>()V
R.method("o","<init>()V",function(self,args){
const S=[], L=new Array(1).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=self;
flow: while(true){ try { switch(pc){
case 0: S.push(L[0]);
case 1: a=S.splice(S.length-0,0);b=S.pop();v=R.call("h","<init>()V",b,a,183);
case 4: return;
default:throw new Error("Invalid control flow o.<init>()V "+pc);
}}catch(error){
throw error;}}});
// o.a([II)I
R.method("o","a([II)I",function(self,args){
const S=[], L=new Array(3).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=self;
L[1]=args[0];
L[2]=args[1];
flow: while(true){ try { switch(pc){
case 0: S.push(0);
case 1: L[2]=S.pop();
case 2: S.push(L[0]);
case 3: a=S.pop();S.push(R.get(a,"o.a:Lg;"));
case 6: S.push(L[0]);
case 7: a=S.pop();S.push(R.get(a,"o.a:S"));
case 10: a=S.splice(S.length-1,1);b=S.pop();v=R.call("g","a(I)I",b,a,182);S.push(v);
case 13: if(S.pop()<=0){pc=34;continue flow;}
case 16: S.push(L[0]);
case 17: a=S.pop();S.push(R.get(a,"o.a:Lg;"));
case 20: S.push(L[0]);
case 21: a=S.splice(S.length-0,0);b=S.pop();v=R.call("o","d()I",b,a,182);S.push(v);
case 24: S.push(L[0]);
case 25: a=S.pop();S.push(R.get(a,"o.b:B"));
case 28: S.push(L[1]);
case 29: S.push(-1);
case 30: a=S.splice(S.length-4,4);b=S.pop();v=R.call("g","a(II[II)I",b,a,182);S.push(v);
case 33: L[2]=S.pop();
case 34: S.push(L[2]);
case 35: return S.pop();
default:throw new Error("Invalid control flow o.a([II)I "+pc);
}}catch(error){
throw error;}}});
// o.a([I)I
R.method("o","a([I)I",function(self,args){
const S=[], L=new Array(3).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=self;
L[1]=args[0];
flow: while(true){ try { switch(pc){
case 0: S.push(0);
case 1: L[2]=S.pop();
case 2: S.push(L[0]);
case 3: a=S.pop();S.push(R.get(a,"o.a:Lg;"));
case 6: S.push(L[0]);
case 7: a=S.pop();S.push(R.get(a,"o.a:S"));
case 10: a=S.splice(S.length-1,1);b=S.pop();v=R.call("g","a(I)I",b,a,182);S.push(v);
case 13: if(S.pop()<=0){pc=33;continue flow;}
case 16: S.push(L[0]);
case 17: a=S.pop();S.push(R.get(a,"o.a:Lg;"));
case 20: S.push(L[0]);
case 21: a=S.splice(S.length-0,0);b=S.pop();v=R.call("o","d()I",b,a,182);S.push(v);
case 24: S.push(L[0]);
case 25: a=S.pop();S.push(R.get(a,"o.b:B"));
case 28: S.push(L[1]);
case 29: a=S.splice(S.length-3,3);b=S.pop();v=R.call("g","a(II[I)I",b,a,182);S.push(v);
case 32: L[2]=S.pop();
case 33: S.push(L[2]);
case 34: return S.pop();
default:throw new Error("Invalid control flow o.a([I)I "+pc);
}}catch(error){
throw error;}}});
// o.a(I)V
R.method("o","a(I)V",function(self,args){
const S=[], L=new Array(2).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=self;
L[1]=args[0];
flow: while(true){ try { switch(pc){
case 0: S.push(L[0]);
case 1: S.push(L[1]);
case 2: S.push(S.pop()<<16>>16);
case 3: v=S.pop();a=S.pop();R.set(a,"o.a:S",v);
case 6: S.push(L[0]);
case 7: S.push(0);
case 8: v=S.pop();a=S.pop();R.set(a,"o.b:S",v);
case 11: S.push(L[0]);
case 12: S.push(L[0]);
case 13: a=S.pop();S.push(R.get(a,"o.a:Lg;"));
case 16: a=S.pop();S.push(R.get(a,"g.a:[I"));
case 19: S.push(L[1]);
case 20: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 21: S.push(16);
case 23: b=S.pop();a=S.pop();S.push(a<<b);
case 24: S.push(26);
case 26: b=S.pop();a=S.pop();S.push(a>>b);
case 27: S.push(S.pop()<<24>>24);
case 28: v=S.pop();a=S.pop();R.set(a,"o.a:B",v);
case 31: S.push(L[0]);
case 32: S.push(0);
case 33: v=S.pop();a=S.pop();R.set(a,"o.c:S",v);
case 36: S.push(L[0]);
case 37: S.push(0);
case 38: v=S.pop();a=S.pop();R.set(a,"o.e:S",v);
case 41: S.push(L[0]);
case 42: S.push(0);
case 43: v=S.pop();a=S.pop();R.set(a,"o.f:S",v);
case 46: S.push(L[0]);
case 47: S.push(0);
case 48: v=S.pop();a=S.pop();R.set(a,"o.d:S",v);
case 51: return;
default:throw new Error("Invalid control flow o.a(I)V "+pc);
}}catch(error){
throw error;}}});
// o.a()I
R.method("o","a()I",function(self,args){
const S=[], L=new Array(1).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=self;
flow: while(true){ try { switch(pc){
case 0: S.push(L[0]);
case 1: a=S.pop();S.push(R.get(a,"o.a:S"));
case 4: return S.pop();
default:throw new Error("Invalid control flow o.a()I "+pc);
}}catch(error){
throw error;}}});
// o.b(I)V
R.method("o","b(I)V",function(self,args){
const S=[], L=new Array(4).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=self;
L[1]=args[0];
flow: while(true){ try { switch(pc){
case 0: S.push(L[0]);
case 1: a=S.pop();S.push(R.get(a,"o.a:Lg;"));
case 4: a=S.pop();S.push(R.get(a,"g.b:[I"));
case 7: S.push(L[0]);
case 8: a=S.pop();S.push(R.get(a,"o.a:Lg;"));
case 11: a=S.pop();S.push(R.get(a,"g.a:[I"));
case 14: S.push(L[0]);
case 15: a=S.pop();S.push(R.get(a,"o.a:S"));
case 18: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 19: S.push(16);
case 21: b=S.pop();a=S.pop();S.push((a>>>b)|0);
case 22: S.push(L[1]);
case 23: b=S.pop();a=S.pop();S.push((a+b)|0);
case 24: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 25: S.push(S[S.length-1]);
case 26: L[2]=S.pop();
case 27: S.push(10);
case 29: b=S.pop();a=S.pop();S.push(a<<b);
case 30: S.push(22);
case 32: b=S.pop();a=S.pop();S.push(a>>b);
case 33: L[3]=S.pop();
case 34: S.push(L[2]);
case 35: S.push(20);
case 37: b=S.pop();a=S.pop();S.push(a<<b);
case 38: S.push(22);
case 40: b=S.pop();a=S.pop();S.push(a>>b);
case 41: L[2]=S.pop();
case 42: S.push(L[0]);
case 43: S.push(L[1]);
case 44: S.push(S.pop()<<16>>16);
case 45: v=S.pop();a=S.pop();R.set(a,"o.b:S",v);
case 48: S.push(L[0]);
case 49: S.push(0);
case 50: v=S.pop();a=S.pop();R.set(a,"o.c:S",v);
case 53: S.push(L[0]);
case 54: S.push(L[3]);
case 55: S.push(S.pop()<<16>>16);
case 56: v=S.pop();a=S.pop();R.set(a,"o.e:S",v);
case 59: S.push(L[0]);
case 60: S.push(L[2]);
case 61: S.push(S.pop()<<16>>16);
case 62: v=S.pop();a=S.pop();R.set(a,"o.f:S",v);
case 65: S.push(L[0]);
case 66: S.push(L[1]);
case 67: S.push(S.pop()<<16>>16);
case 68: v=S.pop();a=S.pop();R.set(a,"o.d:S",v);
case 71: return;
default:throw new Error("Invalid control flow o.b(I)V "+pc);
}}catch(error){
throw error;}}});
// o.a(I)Z
R.method("o","a(I)Z",function(self,args){
const S=[], L=new Array(10).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=self;
L[1]=args[0];
flow: while(true){ try { switch(pc){
case 0: S.push(L[0]);
case 1: a=S.pop();S.push(R.get(a,"o.a:B"));
case 4: if(S.pop()!==0){pc=25;continue flow;}
case 7: S.push(L[0]);
case 8: S.push(L[0]);
case 9: a=S.pop();S.push(R.get(a,"o.g:S"));
case 12: v=S.pop();a=S.pop();R.set(a,"o.i:S",v);
case 15: S.push(L[0]);
case 16: S.push(L[0]);
case 17: a=S.pop();S.push(R.get(a,"o.h:S"));
case 20: v=S.pop();a=S.pop();R.set(a,"o.j:S",v);
case 23: S.push(0);
case 24: return S.pop();
case 25: S.push(L[1]);
case 26: S.push(L[0]);
case 27: a=S.pop();S.push(R.get(a,"o.c:S"));
case 30: S.push(65535);
case 32: b=S.pop();a=S.pop();S.push(a&b);
case 33: b=S.pop();a=S.pop();S.push((a+b)|0);
case 34: L[1]=S.pop();
case 35: S.push(L[0]);
case 36: a=S.pop();S.push(R.get(a,"o.a:Lg;"));
case 39: a=S.pop();S.push(R.get(a,"g.a:[I"));
case 42: S.push(L[0]);
case 43: a=S.pop();S.push(R.get(a,"o.a:S"));
case 46: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 47: S.push(S[S.length-1]);
case 48: L[2]=S.pop();
case 49: S.push(16);
case 51: b=S.pop();a=S.pop();S.push((a>>>b)|0);
case 52: L[3]=S.pop();
case 53: S.push(L[2]);
case 54: S.push(1023);
case 57: b=S.pop();a=S.pop();S.push(a&b);
case 58: S.push(S[S.length-1]);
case 59: L[4]=S.pop();
case 61: if(S.pop()!==0){pc=66;continue flow;}
case 64: S.push(0);
case 65: return S.pop();
case 66: S.push(L[0]);
case 67: a=S.pop();S.push(R.get(a,"o.b:S"));
case 70: L[5]=S.pop();
case 72: S.push(L[0]);
case 73: a=S.pop();S.push(R.get(a,"o.b:S"));
case 76: S.push(L[0]);
case 77: a=S.pop();S.push(R.get(a,"o.d:S"));
case 80: b=S.pop();a=S.pop();if(a===b){pc=103;continue flow;}
case 83: S.push(L[0]);
case 84: a=S.pop();S.push(R.get(a,"o.a:Lg;"));
case 87: a=S.pop();S.push(R.get(a,"g.a:[B"));
case 90: S.push(L[3]);
case 91: S.push(L[5]);
case 93: b=S.pop();a=S.pop();S.push((a+b)|0);
case 94: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 95: S.push(6);
case 97: b=S.pop();a=S.pop();S.push(a>>b);
case 98: S.push(3);
case 99: b=S.pop();a=S.pop();S.push(a&b);
case 100: pc=104;continue flow;
case 103: S.push(0);
case 104: L[6]=S.pop();
case 106: S.push(L[1]);
case 107: S.push(L[0]);
case 108: a=S.pop();S.push(R.get(a,"o.a:Lg;"));
case 111: a=S.pop();S.push(R.get(a,"g.a:[C"));
case 114: S.push(L[0]);
case 115: a=S.pop();S.push(R.get(a,"o.a:Lg;"));
case 118: a=S.pop();S.push(R.get(a,"g.a:[B"));
case 121: S.push(L[3]);
case 122: S.push(L[0]);
case 123: a=S.pop();S.push(R.get(a,"o.b:S"));
case 126: b=S.pop();a=S.pop();S.push((a+b)|0);
case 127: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 128: S.push(63);
case 130: b=S.pop();a=S.pop();S.push(a&b);
case 131: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 132: S.push(S[S.length-1]);
case 133: L[7]=S.pop();
case 135: b=S.pop();a=S.pop();if(a<b){pc=296;continue flow;}
case 138: S.push(L[1]);
case 139: S.push(L[7]);
case 141: b=S.pop();a=S.pop();S.push((a-b)|0);
case 142: L[1]=S.pop();
case 143: S.push(L[0]);
case 144: S.push(S[S.length-1]);
case 145: a=S.pop();S.push(R.get(a,"o.b:S"));
case 148: S.push(1);
case 149: b=S.pop();a=S.pop();S.push((a+b)|0);
case 150: S.push(S.pop()<<16>>16);
case 151: a=S.pop();b=S.pop();S.push(a,b,a);
case 152: v=S.pop();a=S.pop();R.set(a,"o.b:S",v);
case 155: S.push(L[4]);
case 157: b=S.pop();a=S.pop();if(a!==b){pc=253;continue flow;}
case 160: S.push(L[0]);
case 161: a=S.pop();S.push(R.get(a,"o.a:B"));
case 164: if(S.pop()<=0){pc=199;continue flow;}
case 167: S.push(L[0]);
case 168: S.push(S[S.length-1]);
case 169: a=S.pop();S.push(R.get(a,"o.a:B"));
case 172: S.push(1);
case 173: b=S.pop();a=S.pop();S.push((a-b)|0);
case 174: S.push(S.pop()<<24>>24);
case 175: a=S.pop();b=S.pop();S.push(a,b,a);
case 176: v=S.pop();a=S.pop();R.set(a,"o.a:B",v);
case 179: if(S.pop()!==0){pc=199;continue flow;}
case 182: S.push(L[0]);
case 183: S.push(S[S.length-1]);
case 184: a=S.pop();S.push(R.get(a,"o.b:S"));
case 187: S.push(1);
case 188: b=S.pop();a=S.pop();S.push((a-b)|0);
case 189: S.push(S.pop()<<16>>16);
case 190: v=S.pop();a=S.pop();R.set(a,"o.b:S",v);
case 193: S.push(L[7]);
case 195: L[1]=S.pop();
case 196: pc=296;continue flow;
case 199: S.push(L[0]);
case 200: S.push(0);
case 201: v=S.pop();a=S.pop();R.set(a,"o.b:S",v);
case 204: S.push(L[0]);
case 205: a=S.pop();S.push(R.get(a,"o.a:Lg;"));
case 208: a=S.pop();S.push(R.get(a,"g.b:[I"));
case 211: S.push(L[3]);
case 212: S.push(L[4]);
case 214: S.push(1);
case 215: b=S.pop();a=S.pop();S.push((a-b)|0);
case 216: b=S.pop();a=S.pop();S.push((a+b)|0);
case 217: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 218: L[2]=S.pop();
case 219: S.push(L[0]);
case 220: S.push(S[S.length-1]);
case 221: a=S.pop();S.push(R.get(a,"o.e:S"));
case 224: S.push(L[2]);
case 225: S.push(10);
case 227: b=S.pop();a=S.pop();S.push(a<<b);
case 228: S.push(22);
case 230: b=S.pop();a=S.pop();S.push(a>>b);
case 231: b=S.pop();a=S.pop();S.push((a-b)|0);
case 232: S.push(S.pop()<<16>>16);
case 233: v=S.pop();a=S.pop();R.set(a,"o.e:S",v);
case 236: S.push(L[0]);
case 237: S.push(S[S.length-1]);
case 238: a=S.pop();S.push(R.get(a,"o.f:S"));
case 241: S.push(L[2]);
case 242: S.push(20);
case 244: b=S.pop();a=S.pop();S.push(a<<b);
case 245: S.push(22);
case 247: b=S.pop();a=S.pop();S.push(a>>b);
case 248: b=S.pop();a=S.pop();S.push((a-b)|0);
case 249: S.push(S.pop()<<16>>16);
case 250: v=S.pop();a=S.pop();R.set(a,"o.f:S",v);
case 253: S.push(L[0]);
case 254: a=S.pop();S.push(R.get(a,"o.a:Lg;"));
case 257: a=S.pop();S.push(R.get(a,"g.a:[B"));
case 260: S.push(L[3]);
case 261: S.push(L[0]);
case 262: a=S.pop();S.push(R.get(a,"o.b:S"));
case 265: b=S.pop();a=S.pop();S.push((a+b)|0);
case 266: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 267: S.push(6);
case 269: b=S.pop();a=S.pop();S.push(a>>b);
case 270: S.push(3);
case 271: b=S.pop();a=S.pop();S.push(a&b);
case 272: S.push(S[S.length-1]);
case 273: L[8]=S.pop();
case 275: S.push(L[6]);
case 277: b=S.pop();a=S.pop();if(a<b){pc=106;continue flow;}
case 280: S.push(L[8]);
case 282: L[6]=S.pop();
case 284: S.push(L[0]);
case 285: a=S.pop();S.push(R.get(a,"o.b:S"));
case 288: L[5]=S.pop();
case 290: S.push(L[8]);
case 292: S.push(3);
case 293: b=S.pop();a=S.pop();if(a!==b){pc=106;continue flow;}
case 296: S.push(L[0]);
case 297: a=S.pop();S.push(R.get(a,"o.a:Lg;"));
case 300: a=S.pop();S.push(R.get(a,"g.b:[I"));
case 303: S.push(L[3]);
case 304: S.push(L[0]);
case 305: a=S.pop();S.push(R.get(a,"o.b:S"));
case 308: b=S.pop();a=S.pop();S.push((a+b)|0);
case 309: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 310: S.push(S[S.length-1]);
case 311: L[2]=S.pop();
case 312: S.push(10);
case 314: b=S.pop();a=S.pop();S.push(a<<b);
case 315: S.push(22);
case 317: b=S.pop();a=S.pop();S.push(a>>b);
case 318: L[8]=S.pop();
case 320: S.push(L[2]);
case 321: S.push(20);
case 323: b=S.pop();a=S.pop();S.push(a<<b);
case 324: S.push(22);
case 326: b=S.pop();a=S.pop();S.push(a>>b);
case 327: L[6]=S.pop();
case 329: S.push(L[2]);
case 330: S.push(3);
case 331: b=S.pop();a=S.pop();S.push(a&b);
case 332: if(S.pop()<=0){pc=497;continue flow;}
case 335: S.push(L[0]);
case 336: a=S.pop();S.push(R.get(a,"o.a:B"));
case 339: if(S.pop()===0){pc=497;continue flow;}
case 342: S.push(L[0]);
case 343: a=S.pop();S.push(R.get(a,"o.b:S"));
case 346: S.push(1);
case 347: b=S.pop();a=S.pop();S.push((a+b)|0);
case 348: S.push(L[4]);
case 350: b=S.pop();a=S.pop();if(a!==b){pc=361;continue flow;}
case 353: S.push(L[0]);
case 354: a=S.pop();S.push(R.get(a,"o.a:B"));
case 357: S.push(1);
case 358: b=S.pop();a=S.pop();if(a===b){pc=497;continue flow;}
case 361: S.push(L[0]);
case 362: a=S.pop();S.push(R.get(a,"o.b:S"));
case 365: S.push(1);
case 366: b=S.pop();a=S.pop();S.push((a+b)|0);
case 367: S.push(L[4]);
case 369: b=S.pop();a=S.pop();if(a!==b){pc=410;continue flow;}
case 372: S.push(L[0]);
case 373: a=S.pop();S.push(R.get(a,"o.a:Lg;"));
case 376: a=S.pop();S.push(R.get(a,"g.b:[I"));
case 379: S.push(L[3]);
case 380: S.push(L[0]);
case 381: a=S.pop();S.push(R.get(a,"o.b:S"));
case 384: b=S.pop();a=S.pop();S.push((a+b)|0);
case 385: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 386: S.push(S[S.length-1]);
case 387: L[2]=S.pop();
case 388: S.push(10);
case 390: b=S.pop();a=S.pop();S.push(a<<b);
case 391: S.push(22);
case 393: b=S.pop();a=S.pop();S.push(a>>b);
case 394: L[4]=S.pop();
case 396: S.push(L[2]);
case 397: S.push(20);
case 399: b=S.pop();a=S.pop();S.push(a<<b);
case 400: S.push(22);
case 402: b=S.pop();a=S.pop();S.push(a>>b);
case 403: L[9]=S.pop();
case 405: S.push(0);
case 406: L[2]=S.pop();
case 407: pc=423;continue flow;
case 410: S.push(0);
case 411: L[4]=S.pop();
case 413: S.push(0);
case 414: L[9]=S.pop();
case 416: S.push(L[0]);
case 417: a=S.pop();S.push(R.get(a,"o.b:S"));
case 420: S.push(1);
case 421: b=S.pop();a=S.pop();S.push((a+b)|0);
case 422: L[2]=S.pop();
case 423: S.push(L[0]);
case 424: a=S.pop();S.push(R.get(a,"o.a:Lg;"));
case 427: a=S.pop();S.push(R.get(a,"g.b:[I"));
case 430: S.push(L[3]);
case 431: S.push(L[2]);
case 432: b=S.pop();a=S.pop();S.push((a+b)|0);
case 433: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 434: L[2]=S.pop();
case 435: S.push(L[4]);
case 437: S.push(L[2]);
case 438: S.push(10);
case 440: b=S.pop();a=S.pop();S.push(a<<b);
case 441: S.push(22);
case 443: b=S.pop();a=S.pop();S.push(a>>b);
case 444: b=S.pop();a=S.pop();S.push((a+b)|0);
case 445: L[4]=S.pop();
case 447: S.push(L[9]);
case 449: S.push(L[2]);
case 450: S.push(20);
case 452: b=S.pop();a=S.pop();S.push(a<<b);
case 453: S.push(22);
case 455: b=S.pop();a=S.pop();S.push(a>>b);
case 456: b=S.pop();a=S.pop();S.push((a+b)|0);
case 457: L[9]=S.pop();
case 459: S.push(L[1]);
case 460: S.push(12);
case 462: b=S.pop();a=S.pop();S.push(a<<b);
case 463: S.push(L[7]);
case 465: b=S.pop();a=S.pop();S.push(R.idiv(a,b));
case 466: L[2]=S.pop();
case 467: S.push(L[8]);
case 469: S.push(L[4]);
case 471: S.push(L[8]);
case 473: b=S.pop();a=S.pop();S.push((a-b)|0);
case 474: S.push(L[2]);
case 475: b=S.pop();a=S.pop();S.push(Math.imul(a,b));
case 476: S.push(12);
case 478: b=S.pop();a=S.pop();S.push(a>>b);
case 479: b=S.pop();a=S.pop();S.push((a+b)|0);
case 480: L[8]=S.pop();
case 482: S.push(L[6]);
case 484: S.push(L[9]);
case 486: S.push(L[6]);
case 488: b=S.pop();a=S.pop();S.push((a-b)|0);
case 489: S.push(L[2]);
case 490: b=S.pop();a=S.pop();S.push(Math.imul(a,b));
case 491: S.push(12);
case 493: b=S.pop();a=S.pop();S.push(a>>b);
case 494: b=S.pop();a=S.pop();S.push((a+b)|0);
case 495: L[6]=S.pop();
case 497: S.push(L[8]);
case 499: S.push(L[0]);
case 500: a=S.pop();S.push(R.get(a,"o.e:S"));
case 503: b=S.pop();a=S.pop();S.push((a-b)|0);
case 504: S.push(S.pop()<<16>>16);
case 505: L[2]=S.pop();
case 506: S.push(L[6]);
case 508: S.push(L[0]);
case 509: a=S.pop();S.push(R.get(a,"o.f:S"));
case 512: b=S.pop();a=S.pop();S.push((a-b)|0);
case 513: S.push(S.pop()<<16>>16);
case 514: L[4]=S.pop();
case 516: S.push(L[0]);
case 517: S.push(L[1]);
case 518: S.push(S.pop()<<16>>16);
case 519: v=S.pop();a=S.pop();R.set(a,"o.c:S",v);
case 522: S.push(L[0]);
case 523: S.push(L[8]);
case 525: S.push(S.pop()<<16>>16);
case 526: v=S.pop();a=S.pop();R.set(a,"o.e:S",v);
case 529: S.push(L[0]);
case 530: S.push(L[6]);
case 532: S.push(S.pop()<<16>>16);
case 533: v=S.pop();a=S.pop();R.set(a,"o.f:S",v);
case 536: S.push(L[0]);
case 537: S.push(L[5]);
case 539: S.push(S.pop()<<16>>16);
case 540: v=S.pop();a=S.pop();R.set(a,"o.d:S",v);
case 543: S.push(L[0]);
case 544: S.push(L[0]);
case 545: a=S.pop();S.push(R.get(a,"o.g:S"));
case 548: v=S.pop();a=S.pop();R.set(a,"o.i:S",v);
case 551: S.push(L[0]);
case 552: S.push(L[0]);
case 553: a=S.pop();S.push(R.get(a,"o.h:S"));
case 556: v=S.pop();a=S.pop();R.set(a,"o.j:S",v);
case 559: S.push(L[0]);
case 560: S.push(S[S.length-1]);
case 561: a=S.pop();S.push(R.get(a,"o.g:S"));
case 564: S.push(L[2]);
case 565: S.push(L[4]);
case 567: S.push(L[0]);
case 568: a=S.pop();S.push(R.get(a,"o.b:B"));
case 571: a=S.splice(S.length-3,3);b=null;v=R.call("g","a(III)I",b,a,184);S.push(v);
case 574: b=S.pop();a=S.pop();S.push((a+b)|0);
case 575: S.push(S.pop()<<16>>16);
case 576: v=S.pop();a=S.pop();R.set(a,"o.g:S",v);
case 579: S.push(L[0]);
case 580: S.push(S[S.length-1]);
case 581: a=S.pop();S.push(R.get(a,"o.h:S"));
case 584: S.push(L[2]);
case 585: S.push(L[4]);
case 587: S.push(L[0]);
case 588: a=S.pop();S.push(R.get(a,"o.b:B"));
case 591: a=S.splice(S.length-3,3);b=null;v=R.call("g","b(III)I",b,a,184);S.push(v);
case 594: b=S.pop();a=S.pop();S.push((a+b)|0);
case 595: S.push(S.pop()<<16>>16);
case 596: v=S.pop();a=S.pop();R.set(a,"o.h:S",v);
case 599: S.push(L[0]);
case 600: a=S.pop();S.push(R.get(a,"o.a:B"));
case 603: if(S.pop()===0){pc=608;continue flow;}
case 606: S.push(1);
case 607: return S.pop();
case 608: S.push(0);
case 609: return S.pop();
default:throw new Error("Invalid control flow o.a(I)Z "+pc);
}}catch(error){
throw error;}}});
// o.a(Ljavax/microedition/lcdui/Graphics;)V
R.method("o","a(Ljavax/microedition/lcdui/Graphics;)V",function(self,args){
const S=[], L=new Array(2).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=self;
L[1]=args[0];
flow: while(true){ try { switch(pc){
case 0: S.push(L[0]);
case 1: a=S.pop();S.push(R.get(a,"o.a:Lg;"));
case 4: S.push(L[0]);
case 5: a=S.pop();S.push(R.get(a,"o.a:S"));
case 8: a=S.splice(S.length-1,1);b=S.pop();v=R.call("g","a(I)I",b,a,182);S.push(v);
case 11: if(S.pop()!==0){pc=15;continue flow;}
case 14: return;
case 15: S.push(L[0]);
case 16: a=S.pop();S.push(R.get(a,"o.a:Lg;"));
case 19: S.push(L[1]);
case 20: S.push(L[0]);
case 21: a=S.splice(S.length-0,0);b=S.pop();v=R.call("o","d()I",b,a,182);S.push(v);
case 24: S.push(L[0]);
case 25: a=S.pop();S.push(R.get(a,"o.g:S"));
case 28: S.push(L[0]);
case 29: a=S.pop();S.push(R.get(a,"o.h:S"));
case 32: S.push(L[0]);
case 33: a=S.pop();S.push(R.get(a,"o.b:B"));
case 36: a=S.splice(S.length-5,5);b=S.pop();v=R.call("g","a(Ljavax/microedition/lcdui/Graphics;IIII)V",b,a,182);
case 39: return;
default:throw new Error("Invalid control flow o.a(Ljavax/microedition/lcdui/Graphics;)V "+pc);
}}catch(error){
throw error;}}});
// o.a(Ljavax/microedition/lcdui/Graphics;III)V
R.method("o","a(Ljavax/microedition/lcdui/Graphics;III)V",function(self,args){
const S=[], L=new Array(5).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=self;
L[1]=args[0];
L[2]=args[1];
L[3]=args[2];
L[4]=args[3];
flow: while(true){ try { switch(pc){
case 0: S.push(L[0]);
case 1: S.push(S[S.length-1]);
case 2: a=S.pop();S.push(R.get(a,"o.g:S"));
case 5: S.push(L[2]);
case 6: b=S.pop();a=S.pop();S.push((a+b)|0);
case 7: S.push(S.pop()<<16>>16);
case 8: v=S.pop();a=S.pop();R.set(a,"o.g:S",v);
case 11: S.push(L[0]);
case 12: S.push(S[S.length-1]);
case 13: a=S.pop();S.push(R.get(a,"o.h:S"));
case 16: S.push(L[3]);
case 17: b=S.pop();a=S.pop();S.push((a+b)|0);
case 18: S.push(S.pop()<<16>>16);
case 19: v=S.pop();a=S.pop();R.set(a,"o.h:S",v);
case 22: S.push(L[0]);
case 23: S.push(S[S.length-1]);
case 24: a=S.pop();S.push(R.get(a,"o.b:B"));
case 27: S.push(L[4]);
case 29: b=S.pop();a=S.pop();S.push(a^b);
case 30: S.push(S.pop()<<24>>24);
case 31: v=S.pop();a=S.pop();R.set(a,"o.b:B",v);
case 34: S.push(L[0]);
case 35: S.push(L[1]);
case 36: a=S.splice(S.length-1,1);b=S.pop();v=R.call("o","a(Ljavax/microedition/lcdui/Graphics;)V",b,a,182);
case 39: S.push(L[0]);
case 40: S.push(S[S.length-1]);
case 41: a=S.pop();S.push(R.get(a,"o.g:S"));
case 44: S.push(L[2]);
case 45: b=S.pop();a=S.pop();S.push((a-b)|0);
case 46: S.push(S.pop()<<16>>16);
case 47: v=S.pop();a=S.pop();R.set(a,"o.g:S",v);
case 50: S.push(L[0]);
case 51: S.push(S[S.length-1]);
case 52: a=S.pop();S.push(R.get(a,"o.h:S"));
case 55: S.push(L[3]);
case 56: b=S.pop();a=S.pop();S.push((a-b)|0);
case 57: S.push(S.pop()<<16>>16);
case 58: v=S.pop();a=S.pop();R.set(a,"o.h:S",v);
case 61: S.push(L[0]);
case 62: S.push(S[S.length-1]);
case 63: a=S.pop();S.push(R.get(a,"o.b:B"));
case 66: S.push(L[4]);
case 68: b=S.pop();a=S.pop();S.push(a^b);
case 69: S.push(S.pop()<<24>>24);
case 70: v=S.pop();a=S.pop();R.set(a,"o.b:B",v);
case 73: return;
default:throw new Error("Invalid control flow o.a(Ljavax/microedition/lcdui/Graphics;III)V "+pc);
}}catch(error){
throw error;}}});
// o.a(I)I
R.method("o","a(I)I",function(self,args){
const S=[], L=new Array(2).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=self;
L[1]=args[0];
flow: while(true){ try { switch(pc){
case 0: S.push(L[0]);
case 1: a=S.pop();S.push(R.get(a,"o.a:Lg;"));
case 4: S.push(L[0]);
case 5: a=S.pop();S.push(R.get(a,"o.a:S"));
case 8: a=S.splice(S.length-1,1);b=S.pop();v=R.call("g","a(I)Lp;",b,a,182);S.push(v);
case 11: S.push(L[1]);
case 12: a=S.splice(S.length-1,1);b=S.pop();v=R.call("p","a(I)I",b,a,182);S.push(v);
case 15: return S.pop();
default:throw new Error("Invalid control flow o.a(I)I "+pc);
}}catch(error){
throw error;}}});
// o.b(I)I
R.method("o","b(I)I",function(self,args){
const S=[], L=new Array(2).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=self;
L[1]=args[0];
flow: while(true){ try { switch(pc){
case 0: S.push(L[0]);
case 1: a=S.pop();S.push(R.get(a,"o.a:Lg;"));
case 4: S.push(L[0]);
case 5: a=S.pop();S.push(R.get(a,"o.a:S"));
case 8: a=S.splice(S.length-1,1);b=S.pop();v=R.call("g","a(I)Lp;",b,a,182);S.push(v);
case 11: S.push(L[1]);
case 12: a=S.splice(S.length-1,1);b=S.pop();v=R.call("p","b(I)I",b,a,182);S.push(v);
case 15: return S.pop();
default:throw new Error("Invalid control flow o.b(I)I "+pc);
}}catch(error){
throw error;}}});
// o.c(I)I
R.method("o","c(I)I",function(self,args){
const S=[], L=new Array(2).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=self;
L[1]=args[0];
flow: while(true){ try { switch(pc){
case 0: S.push(L[0]);
case 1: a=S.pop();S.push(R.get(a,"o.a:Lg;"));
case 4: S.push(L[0]);
case 5: a=S.pop();S.push(R.get(a,"o.a:S"));
case 8: a=S.splice(S.length-1,1);b=S.pop();v=R.call("g","a(I)Lp;",b,a,182);S.push(v);
case 11: S.push(L[1]);
case 12: a=S.splice(S.length-1,1);b=S.pop();v=R.call("p","c(I)I",b,a,182);S.push(v);
case 15: return S.pop();
default:throw new Error("Invalid control flow o.c(I)I "+pc);
}}catch(error){
throw error;}}});
// o.d(I)I
R.method("o","d(I)I",function(self,args){
const S=[], L=new Array(2).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=self;
L[1]=args[0];
flow: while(true){ try { switch(pc){
case 0: S.push(L[0]);
case 1: a=S.pop();S.push(R.get(a,"o.a:Lg;"));
case 4: S.push(L[0]);
case 5: a=S.pop();S.push(R.get(a,"o.a:S"));
case 8: a=S.splice(S.length-1,1);b=S.pop();v=R.call("g","a(I)Lp;",b,a,182);S.push(v);
case 11: S.push(L[1]);
case 12: a=S.splice(S.length-1,1);b=S.pop();v=R.call("p","d(I)I",b,a,182);S.push(v);
case 15: return S.pop();
default:throw new Error("Invalid control flow o.d(I)I "+pc);
}}catch(error){
throw error;}}});
// o.b()I
R.method("o","b()I",function(self,args){
const S=[], L=new Array(1).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=self;
flow: while(true){ try { switch(pc){
case 0: S.push(L[0]);
case 1: a=S.pop();S.push(R.get(a,"o.g:S"));
case 4: S.push(L[0]);
case 5: a=S.pop();S.push(R.get(a,"o.i:S"));
case 8: b=S.pop();a=S.pop();S.push((a-b)|0);
case 9: return S.pop();
default:throw new Error("Invalid control flow o.b()I "+pc);
}}catch(error){
throw error;}}});
// o.c()I
R.method("o","c()I",function(self,args){
const S=[], L=new Array(1).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=self;
flow: while(true){ try { switch(pc){
case 0: S.push(L[0]);
case 1: a=S.pop();S.push(R.get(a,"o.h:S"));
case 4: S.push(L[0]);
case 5: a=S.pop();S.push(R.get(a,"o.j:S"));
case 8: b=S.pop();a=S.pop();S.push((a-b)|0);
case 9: return S.pop();
default:throw new Error("Invalid control flow o.c()I "+pc);
}}catch(error){
throw error;}}});
// o.d()I
R.method("o","d()I",function(self,args){
const S=[], L=new Array(2).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=self;
flow: while(true){ try { switch(pc){
case 0: S.push(L[0]);
case 1: a=S.pop();S.push(R.get(a,"o.a:Lg;"));
case 4: a=S.pop();S.push(R.get(a,"g.a:[I"));
case 7: S.push(L[0]);
case 8: a=S.pop();S.push(R.get(a,"o.a:S"));
case 11: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 12: S.push(16);
case 14: b=S.pop();a=S.pop();S.push((a>>>b)|0);
case 15: S.push(L[0]);
case 16: a=S.pop();S.push(R.get(a,"o.d:S"));
case 19: b=S.pop();a=S.pop();S.push((a+b)|0);
case 20: L[1]=S.pop();
case 21: S.push(L[0]);
case 22: a=S.pop();S.push(R.get(a,"o.a:Lg;"));
case 25: a=S.pop();S.push(R.get(a,"g.b:[I"));
case 28: S.push(L[1]);
case 29: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 30: S.push(22);
case 32: b=S.pop();a=S.pop();S.push((a>>>b)|0);
case 33: return S.pop();
default:throw new Error("Invalid control flow o.d()I "+pc);
}}catch(error){
throw error;}}});
// o.e()I
R.method("o","e()I",function(self,args){
const S=[], L=new Array(1).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=self;
flow: while(true){ try { switch(pc){
case 0: S.push(L[0]);
case 1: a=S.pop();S.push(R.get(a,"o.g:S"));
case 4: return S.pop();
default:throw new Error("Invalid control flow o.e()I "+pc);
}}catch(error){
throw error;}}});
// o.c(I)V
R.method("o","c(I)V",function(self,args){
const S=[], L=new Array(2).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=self;
L[1]=args[0];
flow: while(true){ try { switch(pc){
case 0: S.push(L[0]);
case 1: S.push(L[1]);
case 2: S.push(S.pop()<<16>>16);
case 3: v=S.pop();a=S.pop();R.set(a,"o.g:S",v);
case 6: return;
default:throw new Error("Invalid control flow o.c(I)V "+pc);
}}catch(error){
throw error;}}});
// o.f()I
R.method("o","f()I",function(self,args){
const S=[], L=new Array(1).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=self;
flow: while(true){ try { switch(pc){
case 0: S.push(L[0]);
case 1: a=S.pop();S.push(R.get(a,"o.h:S"));
case 4: return S.pop();
default:throw new Error("Invalid control flow o.f()I "+pc);
}}catch(error){
throw error;}}});
// o.d(I)V
R.method("o","d(I)V",function(self,args){
const S=[], L=new Array(2).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=self;
L[1]=args[0];
flow: while(true){ try { switch(pc){
case 0: S.push(L[0]);
case 1: S.push(L[1]);
case 2: S.push(S.pop()<<16>>16);
case 3: v=S.pop();a=S.pop();R.set(a,"o.h:S",v);
case 6: return;
default:throw new Error("Invalid control flow o.d(I)V "+pc);
}}catch(error){
throw error;}}});
// o.g()I
R.method("o","g()I",function(self,args){
const S=[], L=new Array(1).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=self;
flow: while(true){ try { switch(pc){
case 0: S.push(L[0]);
case 1: a=S.pop();S.push(R.get(a,"o.b:B"));
case 4: return S.pop();
default:throw new Error("Invalid control flow o.g()I "+pc);
}}catch(error){
throw error;}}});
// o.e(I)V
R.method("o","e(I)V",function(self,args){
const S=[], L=new Array(2).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=self;
L[1]=args[0];
flow: while(true){ try { switch(pc){
case 0: S.push(L[0]);
case 1: S.push(L[1]);
case 2: S.push(S.pop()<<24>>24);
case 3: v=S.pop();a=S.pop();R.set(a,"o.b:B",v);
case 6: return;
default:throw new Error("Invalid control flow o.e(I)V "+pc);
}}catch(error){
throw error;}}});
// o.a()Lg;
R.method("o","a()Lg;",function(self,args){
const S=[], L=new Array(1).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=self;
flow: while(true){ try { switch(pc){
case 0: S.push(L[0]);
case 1: a=S.pop();S.push(R.get(a,"o.a:Lg;"));
case 4: return S.pop();
default:throw new Error("Invalid control flow o.a()Lg; "+pc);
}}catch(error){
throw error;}}});
// o.a(Lg;)V
R.method("o","a(Lg;)V",function(self,args){
const S=[], L=new Array(2).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=self;
L[1]=args[0];
flow: while(true){ try { switch(pc){
case 0: S.push(L[0]);
case 1: S.push(L[1]);
case 2: v=S.pop();a=S.pop();R.set(a,"o.a:Lg;",v);
case 5: return;
default:throw new Error("Invalid control flow o.a(Lg;)V "+pc);
}}catch(error){
throw error;}}});
}
