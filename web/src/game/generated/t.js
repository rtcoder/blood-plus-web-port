// Generated offline by tools/compile_game.py. Source t.class
export default function register(R) {
R.define("t","java/lang/Object",[{key:"t.a:Ls;",static:false,value:null},{key:"t.a:Ljava/lang/String;",static:false,value:null},{key:"t.a:[S",static:false,value:null},{key:"t.a:[C",static:false,value:null},{key:"t.a:I",static:false,value:0},{key:"t.b:I",static:false,value:0},{key:"t.c:I",static:false,value:0}]);
// t.<init>(Ls;)V
R.method("t","<init>(Ls;)V",function(self,args){
const S=[], L=new Array(2).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=self;
L[1]=args[0];
flow: while(true){ try { switch(pc){
case 0: S.push(L[0]);
case 1: a=S.splice(S.length-0,0);b=S.pop();v=R.call("java/lang/Object","<init>()V",b,a,183);
case 4: S.push(L[0]);
case 5: S.push(L[1]);
case 6: v=S.pop();a=S.pop();R.set(a,"t.a:Ls;",v);
case 9: S.push(L[0]);
case 10: S.push(0);
case 11: v=S.pop();a=S.pop();R.set(a,"t.b:I",v);
case 14: S.push(L[0]);
case 15: S.push(0);
case 16: v=S.pop();a=S.pop();R.set(a,"t.a:I",v);
case 19: S.push(L[0]);
case 20: S.push(0);
case 21: v=S.pop();a=S.pop();R.set(a,"t.c:I",v);
case 24: S.push(L[0]);
case 25: S.push(4);
case 26: S.push(R.array("C",S.pop()));
case 28: S.push(S[S.length-1]);
case 29: S.push(0);
case 30: S.push(32);
case 32: v=S.pop();b=S.pop();a=S.pop();R.aset(a,b,v);
case 33: S.push(S[S.length-1]);
case 34: S.push(1);
case 35: S.push(64);
case 37: v=S.pop();b=S.pop();a=S.pop();R.aset(a,b,v);
case 38: S.push(S[S.length-1]);
case 39: S.push(2);
case 40: S.push(45);
case 42: v=S.pop();b=S.pop();a=S.pop();R.aset(a,b,v);
case 43: S.push(S[S.length-1]);
case 44: S.push(3);
case 45: S.push(95);
case 47: v=S.pop();b=S.pop();a=S.pop();R.aset(a,b,v);
case 48: v=S.pop();a=S.pop();R.set(a,"t.a:[C",v);
case 51: return;
default:throw new Error("Invalid control flow t.<init>(Ls;)V "+pc);
}}catch(error){
throw error;}}});
// t.a(Ljavax/microedition/lcdui/Graphics;IIII)V
R.method("t","a(Ljavax/microedition/lcdui/Graphics;IIII)V",function(self,args){
const S=[], L=new Array(11).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=self;
L[1]=args[0];
L[2]=args[1];
L[3]=args[2];
L[4]=args[3];
L[5]=args[4];
flow: while(true){ try { switch(pc){
case 0: S.push(L[3]);
case 1: S.push(L[4]);
case 3: b=S.pop();a=S.pop();S.push((a+b)|0);
case 4: S.push(L[0]);
case 5: a=S.pop();S.push(R.get(a,"t.c:I"));
case 8: b=S.pop();a=S.pop();S.push((a-b)|0);
case 9: L[2]=S.pop();
case 10: S.push(L[3]);
case 11: L[6]=S.pop();
case 13: S.push(4);
case 14: S.push(R.array("I",S.pop()));
case 16: S.push(S[S.length-1]);
case 17: L[7]=S.pop();
case 19: S.push(0);
case 20: S.push(L[1]);
case 21: a=S.splice(S.length-0,0);b=S.pop();v=R.call("javax/microedition/lcdui/Graphics","getClipX()I",b,a,182);S.push(v);
case 24: v=S.pop();b=S.pop();a=S.pop();R.aset(a,b,v);
case 25: S.push(L[7]);
case 27: S.push(1);
case 28: S.push(L[1]);
case 29: a=S.splice(S.length-0,0);b=S.pop();v=R.call("javax/microedition/lcdui/Graphics","getClipY()I",b,a,182);S.push(v);
case 32: v=S.pop();b=S.pop();a=S.pop();R.aset(a,b,v);
case 33: S.push(L[7]);
case 35: S.push(2);
case 36: S.push(L[1]);
case 37: a=S.splice(S.length-0,0);b=S.pop();v=R.call("javax/microedition/lcdui/Graphics","getClipWidth()I",b,a,182);S.push(v);
case 40: v=S.pop();b=S.pop();a=S.pop();R.aset(a,b,v);
case 41: S.push(L[7]);
case 43: S.push(3);
case 44: S.push(L[1]);
case 45: a=S.splice(S.length-0,0);b=S.pop();v=R.call("javax/microedition/lcdui/Graphics","getClipHeight()I",b,a,182);S.push(v);
case 48: v=S.pop();b=S.pop();a=S.pop();R.aset(a,b,v);
case 49: S.push(L[1]);
case 50: S.push(10);
case 52: S.push(L[3]);
case 53: S.push(L[0]);
case 54: a=S.pop();S.push(R.get(a,"t.a:I"));
case 57: S.push(L[4]);
case 59: a=S.splice(S.length-4,4);b=S.pop();v=R.call("javax/microedition/lcdui/Graphics","setClip(IIII)V",b,a,182);
case 62: S.push(0);
case 63: L[3]=S.pop();
case 64: S.push(L[0]);
case 65: a=S.pop();S.push(R.get(a,"t.a:[S"));
case 68: S.push(R.length(S.pop()));
case 69: L[4]=S.pop();
case 71: S.push(10);
case 73: L[8]=S.pop();
case 75: S.push(L[5]);
case 77: S.push(1);
case 78: b=S.pop();a=S.pop();S.push(a&b);
case 79: if(S.pop()<=0){pc=96;continue flow;}
case 82: S.push(10);
case 84: S.push(L[0]);
case 85: a=S.pop();S.push(R.get(a,"t.a:I"));
case 88: S.push(1);
case 89: b=S.pop();a=S.pop();S.push(a>>b);
case 90: b=S.pop();a=S.pop();S.push((a+b)|0);
case 91: L[8]=S.pop();
case 93: pc=113;continue flow;
case 96: S.push(L[5]);
case 98: S.push(8);
case 100: b=S.pop();a=S.pop();S.push(a&b);
case 101: if(S.pop()<=0){pc=113;continue flow;}
case 104: S.push(10);
case 106: S.push(L[0]);
case 107: a=S.pop();S.push(R.get(a,"t.a:I"));
case 110: b=S.pop();a=S.pop();S.push((a+b)|0);
case 111: L[8]=S.pop();
case 113: S.push(L[3]);
case 114: S.push(L[4]);
case 116: b=S.pop();a=S.pop();if(a>=b){pc=239;continue flow;}
case 119: S.push(L[6]);
case 121: S.push(L[2]);
case 122: b=S.pop();a=S.pop();if(a>b){pc=239;continue flow;}
case 125: S.push(L[0]);
case 126: a=S.pop();S.push(R.get(a,"t.a:[S"));
case 129: S.push(L[3]);
case 130: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 131: L[9]=S.pop();
case 133: S.push(L[0]);
case 134: a=S.pop();S.push(R.get(a,"t.a:[S"));
case 137: S.push(L[3]);
case 138: S.push(1);
case 139: b=S.pop();a=S.pop();S.push((a+b)|0);
case 140: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 141: S.push(S[S.length-1]);
case 142: L[10]=S.pop();
case 144: if(S.pop()<=0){pc=224;continue flow;}
case 147: S.push(L[0]);
case 148: a=S.pop();S.push(R.get(a,"t.a:Ljava/lang/String;"));
case 151: S.push(L[9]);
case 153: S.push(L[10]);
case 155: b=S.pop();a=S.pop();S.push((a+b)|0);
case 156: S.push(1);
case 157: b=S.pop();a=S.pop();S.push((a-b)|0);
case 158: a=S.splice(S.length-1,1);b=S.pop();v=R.call("java/lang/String","charAt(I)C",b,a,182);S.push(v);
case 161: S.push(13);
case 163: b=S.pop();a=S.pop();if(a!==b){pc=187;continue flow;}
case 166: S.push(L[0]);
case 167: a=S.pop();S.push(R.get(a,"t.a:Ljava/lang/String;"));
case 170: S.push(L[9]);
case 172: S.push(L[9]);
case 174: S.push(L[10]);
case 176: b=S.pop();a=S.pop();S.push((a+b)|0);
case 177: S.push(1);
case 178: b=S.pop();a=S.pop();S.push((a-b)|0);
case 179: a=S.splice(S.length-2,2);b=S.pop();v=R.call("java/lang/String","substring(II)Ljava/lang/String;",b,a,182);S.push(v);
case 182: L[9]=S.pop();
case 184: pc=203;continue flow;
case 187: S.push(L[0]);
case 188: a=S.pop();S.push(R.get(a,"t.a:Ljava/lang/String;"));
case 191: S.push(L[9]);
case 193: S.push(L[9]);
case 195: S.push(L[10]);
case 197: b=S.pop();a=S.pop();S.push((a+b)|0);
case 198: a=S.splice(S.length-2,2);b=S.pop();v=R.call("java/lang/String","substring(II)Ljava/lang/String;",b,a,182);S.push(v);
case 201: L[9]=S.pop();
case 203: S.push(L[0]);
case 204: a=S.pop();S.push(R.get(a,"t.a:Ls;"));
case 207: S.push(L[1]);
case 208: S.push(L[9]);
case 210: S.push(L[8]);
case 212: S.push(L[6]);
case 214: S.push(L[0]);
case 215: a=S.pop();S.push(R.get(a,"t.c:I"));
case 218: b=S.pop();a=S.pop();S.push((a+b)|0);
case 219: S.push(L[5]);
case 221: a=S.splice(S.length-5,5);b=S.pop();v=R.call("s","a(Ljavax/microedition/lcdui/Graphics;Ljava/lang/String;III)V",b,a,182);
case 224: S.push(L[6]);
case 226: S.push(L[0]);
case 227: a=S.pop();S.push(R.get(a,"t.b:I"));
case 230: b=S.pop();a=S.pop();S.push((a+b)|0);
case 231: L[6]=S.pop();
case 233: L[3]=(L[3]+(2))|0;
case 236: pc=113;continue flow;
case 239: S.push(L[1]);
case 240: S.push(L[7]);
case 242: S.push(0);
case 243: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 244: S.push(L[7]);
case 246: S.push(1);
case 247: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 248: S.push(L[7]);
case 250: S.push(2);
case 251: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 252: S.push(L[7]);
case 254: S.push(3);
case 255: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 256: a=S.splice(S.length-4,4);b=S.pop();v=R.call("javax/microedition/lcdui/Graphics","setClip(IIII)V",b,a,182);
case 259: return;
default:throw new Error("Invalid control flow t.a(Ljavax/microedition/lcdui/Graphics;IIII)V "+pc);
}}catch(error){
throw error;}}});
// t.a(Ljava/lang/String;I)I
R.method("t","a(Ljava/lang/String;I)I",function(self,args){
const S=[], L=new Array(13).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=self;
L[1]=args[0];
L[2]=args[1];
flow: while(true){ try { switch(pc){
case 0: S.push(L[0]);
case 1: S.push(L[1]);
case 2: v=S.pop();a=S.pop();R.set(a,"t.a:Ljava/lang/String;",v);
case 5: S.push(L[0]);
case 6: S.push(L[2]);
case 7: v=S.pop();a=S.pop();R.set(a,"t.a:I",v);
case 10: S.push(L[1]);
case 11: a=S.splice(S.length-0,0);b=S.pop();v=R.call("java/lang/String","length()I",b,a,182);S.push(v);
case 14: L[3]=S.pop();
case 15: S.push(L[0]);
case 16: S.push(L[0]);
case 17: a=S.pop();S.push(R.get(a,"t.a:Ls;"));
case 20: a=S.splice(S.length-0,0);b=S.pop();v=R.call("s","a()I",b,a,182);S.push(v);
case 23: v=S.pop();a=S.pop();R.set(a,"t.b:I",v);
case 26: S.push(null);
case 27: L[4]=S.pop();
case 29: S.push(0);
case 30: L[5]=S.pop();
case 32: S.push(L[5]);
case 34: S.push(2);
case 35: b=S.pop();a=S.pop();if(a>=b){pc=321;continue flow;}
case 38: S.push(0);
case 39: L[6]=S.pop();
case 41: S.push(0);
case 42: L[7]=S.pop();
case 44: S.push(L[7]);
case 46: S.push(L[3]);
case 47: b=S.pop();a=S.pop();if(a>=b){pc=304;continue flow;}
case 50: S.push(0);
case 51: L[8]=S.pop();
case 53: S.push(L[7]);
case 55: L[9]=S.pop();
case 57: S.push(0);
case 58: L[10]=S.pop();
case 60: S.push(L[8]);
case 62: S.push(L[2]);
case 63: b=S.pop();a=S.pop();if(a>b){pc=157;continue flow;}
case 66: S.push(L[9]);
case 68: S.push(L[3]);
case 69: b=S.pop();a=S.pop();if(a>=b){pc=157;continue flow;}
case 72: S.push(L[1]);
case 73: S.push(L[9]);
case 75: a=S.splice(S.length-1,1);b=S.pop();v=R.call("java/lang/String","charAt(I)C",b,a,182);S.push(v);
case 78: L[11]=S.pop();
case 80: S.push(L[7]);
case 82: S.push(L[9]);
case 84: b=S.pop();a=S.pop();if(a!==b){pc=111;continue flow;}
case 87: S.push(L[11]);
case 89: S.push(32);
case 91: b=S.pop();a=S.pop();if(a!==b){pc=111;continue flow;}
case 94: L[7]=(L[7]+(1))|0;
case 97: L[9]=(L[9]+(1))|0;
case 100: S.push(L[1]);
case 101: S.push(L[9]);
case 103: a=S.splice(S.length-1,1);b=S.pop();v=R.call("java/lang/String","charAt(I)C",b,a,182);S.push(v);
case 106: L[11]=S.pop();
case 108: pc=80;continue flow;
case 111: S.push(L[11]);
case 113: S.push(10);
case 115: b=S.pop();a=S.pop();if(a!==b){pc=124;continue flow;}
case 118: S.push(1);
case 119: L[10]=S.pop();
case 121: pc=157;continue flow;
case 124: S.push(L[0]);
case 125: a=S.pop();S.push(R.get(a,"t.a:Ls;"));
case 128: S.push(L[11]);
case 130: a=S.splice(S.length-1,1);b=S.pop();v=R.call("s","a(C)I",b,a,182);S.push(v);
case 133: L[12]=S.pop();
case 135: S.push(L[8]);
case 137: S.push(L[12]);
case 139: b=S.pop();a=S.pop();S.push((a+b)|0);
case 140: S.push(L[2]);
case 141: b=S.pop();a=S.pop();if(a>b){pc=157;continue flow;}
case 144: S.push(L[8]);
case 146: S.push(L[12]);
case 148: b=S.pop();a=S.pop();S.push((a+b)|0);
case 149: L[8]=S.pop();
case 151: L[9]=(L[9]+(1))|0;
case 154: pc=60;continue flow;
case 157: S.push(L[10]);
case 159: if(S.pop()!==0){pc=257;continue flow;}
case 162: S.push(L[9]);
case 164: S.push(L[3]);
case 165: b=S.pop();a=S.pop();if(a>=b){pc=257;continue flow;}
case 168: S.push(-1);
case 169: L[11]=S.pop();
case 171: S.push(0);
case 172: L[12]=S.pop();
case 174: S.push(L[12]);
case 176: S.push(L[0]);
case 177: a=S.pop();S.push(R.get(a,"t.a:[C"));
case 180: S.push(R.length(S.pop()));
case 181: b=S.pop();a=S.pop();if(a>=b){pc=210;continue flow;}
case 184: S.push(L[1]);
case 185: S.push(L[0]);
case 186: a=S.pop();S.push(R.get(a,"t.a:[C"));
case 189: S.push(L[12]);
case 191: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 192: S.push(L[9]);
case 194: a=S.splice(S.length-2,2);b=S.pop();v=R.call("java/lang/String","lastIndexOf(II)I",b,a,182);S.push(v);
case 197: S.push(L[11]);
case 199: a=S.splice(S.length-2,2);b=null;v=R.call("java/lang/Math","max(II)I",b,a,184);S.push(v);
case 202: L[11]=S.pop();
case 204: L[12]=(L[12]+(1))|0;
case 207: pc=174;continue flow;
case 210: S.push(L[11]);
case 212: S.push(-1);
case 213: b=S.pop();a=S.pop();if(a===b){pc=257;continue flow;}
case 216: S.push(L[11]);
case 218: S.push(L[7]);
case 220: b=S.pop();a=S.pop();if(a<=b){pc=257;continue flow;}
case 223: S.push(L[11]);
case 225: S.push(L[9]);
case 227: b=S.pop();a=S.pop();if(a>=b){pc=257;continue flow;}
case 230: S.push(L[11]);
case 232: L[9]=S.pop();
case 234: S.push(L[1]);
case 235: S.push(L[11]);
case 237: a=S.splice(S.length-1,1);b=S.pop();v=R.call("java/lang/String","charAt(I)C",b,a,182);S.push(v);
case 240: S.push(32);
case 242: b=S.pop();a=S.pop();if(a!==b){pc=251;continue flow;}
case 245: S.push(1);
case 246: L[10]=S.pop();
case 248: pc=257;continue flow;
case 251: L[9]=(L[9]+(1))|0;
case 254: S.push(0);
case 255: L[10]=S.pop();
case 257: S.push(L[4]);
case 259: if(S.pop()===null){pc=283;continue flow;}
case 262: S.push(L[4]);
case 264: S.push(L[6]);
case 266: S.push(L[7]);
case 268: S.push(S.pop()<<16>>16);
case 269: v=S.pop();b=S.pop();a=S.pop();R.aset(a,b,v);
case 270: S.push(L[4]);
case 272: S.push(L[6]);
case 274: S.push(1);
case 275: b=S.pop();a=S.pop();S.push((a+b)|0);
case 276: S.push(L[9]);
case 278: S.push(L[7]);
case 280: b=S.pop();a=S.pop();S.push((a-b)|0);
case 281: S.push(S.pop()<<16>>16);
case 282: v=S.pop();b=S.pop();a=S.pop();R.aset(a,b,v);
case 283: L[6]=(L[6]+(2))|0;
case 286: S.push(L[9]);
case 288: S.push(L[10]);
case 290: if(S.pop()===0){pc=297;continue flow;}
case 293: S.push(1);
case 294: pc=298;continue flow;
case 297: S.push(0);
case 298: b=S.pop();a=S.pop();S.push((a+b)|0);
case 299: L[7]=S.pop();
case 301: pc=44;continue flow;
case 304: S.push(L[5]);
case 306: if(S.pop()!==0){pc=315;continue flow;}
case 309: S.push(L[6]);
case 311: S.push(R.array("S",S.pop()));
case 313: L[4]=S.pop();
case 315: L[5]=(L[5]+(1))|0;
case 318: pc=32;continue flow;
case 321: S.push(L[0]);
case 322: S.push(L[4]);
case 324: v=S.pop();a=S.pop();R.set(a,"t.a:[S",v);
case 327: S.push(L[0]);
case 328: a=S.pop();S.push(R.get(a,"t.a:[S"));
case 331: S.push(R.length(S.pop()));
case 332: S.push(1);
case 333: b=S.pop();a=S.pop();S.push(a>>b);
case 334: return S.pop();
default:throw new Error("Invalid control flow t.a(Ljava/lang/String;I)I "+pc);
}}catch(error){
throw error;}}});
// t.a()I
R.method("t","a()I",function(self,args){
const S=[], L=new Array(1).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=self;
flow: while(true){ try { switch(pc){
case 0: S.push(L[0]);
case 1: a=S.pop();S.push(R.get(a,"t.a:[S"));
case 4: S.push(R.length(S.pop()));
case 5: S.push(1);
case 6: b=S.pop();a=S.pop();S.push(a>>b);
case 7: return S.pop();
default:throw new Error("Invalid control flow t.a()I "+pc);
}}catch(error){
throw error;}}});
// t.b()I
R.method("t","b()I",function(self,args){
const S=[], L=new Array(1).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=self;
flow: while(true){ try { switch(pc){
case 0: S.push(L[0]);
case 1: a=S.pop();S.push(R.get(a,"t.b:I"));
case 4: return S.pop();
default:throw new Error("Invalid control flow t.b()I "+pc);
}}catch(error){
throw error;}}});
// t.a(I)Ljava/lang/String;
R.method("t","a(I)Ljava/lang/String;",function(self,args){
const S=[], L=new Array(3).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=self;
L[1]=args[0];
flow: while(true){ try { switch(pc){
case 0: S.push(L[1]);
case 1: S.push(1);
case 2: b=S.pop();a=S.pop();S.push(a<<b);
case 3: L[1]=S.pop();
case 4: S.push(L[0]);
case 5: a=S.pop();S.push(R.get(a,"t.a:[S"));
case 8: S.push(L[1]);
case 9: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 10: L[2]=S.pop();
case 11: S.push(L[0]);
case 12: a=S.pop();S.push(R.get(a,"t.a:[S"));
case 15: S.push(L[1]);
case 16: S.push(1);
case 17: b=S.pop();a=S.pop();S.push((a+b)|0);
case 18: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 19: S.push(S[S.length-1]);
case 20: L[1]=S.pop();
case 21: if(S.pop()<=0){pc=72;continue flow;}
case 24: S.push(L[0]);
case 25: a=S.pop();S.push(R.get(a,"t.a:Ljava/lang/String;"));
case 28: S.push(L[2]);
case 29: S.push(L[1]);
case 30: b=S.pop();a=S.pop();S.push((a+b)|0);
case 31: S.push(1);
case 32: b=S.pop();a=S.pop();S.push((a-b)|0);
case 33: a=S.splice(S.length-1,1);b=S.pop();v=R.call("java/lang/String","charAt(I)C",b,a,182);S.push(v);
case 36: S.push(13);
case 38: b=S.pop();a=S.pop();if(a!==b){pc=58;continue flow;}
case 41: S.push(L[0]);
case 42: a=S.pop();S.push(R.get(a,"t.a:Ljava/lang/String;"));
case 45: S.push(L[2]);
case 46: S.push(L[2]);
case 47: S.push(L[1]);
case 48: b=S.pop();a=S.pop();S.push((a+b)|0);
case 49: S.push(1);
case 50: b=S.pop();a=S.pop();S.push((a-b)|0);
case 51: a=S.splice(S.length-2,2);b=S.pop();v=R.call("java/lang/String","substring(II)Ljava/lang/String;",b,a,182);S.push(v);
case 54: L[1]=S.pop();
case 55: pc=70;continue flow;
case 58: S.push(L[0]);
case 59: a=S.pop();S.push(R.get(a,"t.a:Ljava/lang/String;"));
case 62: S.push(L[2]);
case 63: S.push(L[2]);
case 64: S.push(L[1]);
case 65: b=S.pop();a=S.pop();S.push((a+b)|0);
case 66: a=S.splice(S.length-2,2);b=S.pop();v=R.call("java/lang/String","substring(II)Ljava/lang/String;",b,a,182);S.push(v);
case 69: L[1]=S.pop();
case 70: S.push(L[1]);
case 71: return S.pop();
case 72: S.push("");
case 74: return S.pop();
default:throw new Error("Invalid control flow t.a(I)Ljava/lang/String; "+pc);
}}catch(error){
throw error;}}});
// t.a(I)V
R.method("t","a(I)V",function(self,args){
const S=[], L=new Array(2).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=self;
L[1]=args[0];
flow: while(true){ try { switch(pc){
case 0: S.push(L[0]);
case 1: S.push(S[S.length-1]);
case 2: a=S.pop();S.push(R.get(a,"t.c:I"));
case 5: S.push(L[1]);
case 6: b=S.pop();a=S.pop();S.push((a+b)|0);
case 7: v=S.pop();a=S.pop();R.set(a,"t.c:I",v);
case 10: return;
default:throw new Error("Invalid control flow t.a(I)V "+pc);
}}catch(error){
throw error;}}});
// t.a()V
R.method("t","a()V",function(self,args){
const S=[], L=new Array(1).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=self;
flow: while(true){ try { switch(pc){
case 0: S.push(L[0]);
case 1: S.push(0);
case 2: v=S.pop();a=S.pop();R.set(a,"t.c:I",v);
case 5: return;
default:throw new Error("Invalid control flow t.a()V "+pc);
}}catch(error){
throw error;}}});
}
