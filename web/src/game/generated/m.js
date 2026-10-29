// Generated offline by tools/compile_game.py. Source m.class
export default function register(R) {
R.define("m","java/lang/Object",[{key:"m.a:[C",static:false,value:null},{key:"m.a:[[I",static:false,value:null},{key:"m.a:S",static:false,value:0},{key:"m.b:S",static:false,value:0}]);
// m.<init>()V
R.method("m","<init>()V",function(self,args){
const S=[], L=new Array(1).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=self;
flow: while(true){ try { switch(pc){
case 0: S.push(L[0]);
case 1: a=S.splice(S.length-0,0);b=S.pop();v=R.call("java/lang/Object","<init>()V",b,a,183);
case 4: return;
default:throw new Error("Invalid control flow m.<init>()V "+pc);
}}catch(error){
throw error;}}});
// m.a(Lg;III)Lm;
R.method("m","a(Lg;III)Lm;",function(self,args){
const S=[], L=new Array(13).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=args[0];
L[1]=args[1];
L[2]=args[2];
L[3]=args[3];
flow: while(true){ try { switch(pc){
case 0: S.push(R.new("m"));
case 3: S.push(S[S.length-1]);
case 4: a=S.splice(S.length-0,0);b=S.pop();v=R.call("m","<init>()V",b,a,183);
case 7: L[4]=S.pop();
case 9: S.push(L[0]);
case 10: a=S.splice(S.length-0,0);b=S.pop();v=R.call("g","a()I",b,a,182);S.push(v);
case 13: L[5]=S.pop();
case 15: S.push(L[4]);
case 17: S.push(L[5]);
case 19: S.push(R.array("C",S.pop()));
case 21: v=S.pop();a=S.pop();R.set(a,"m.a:[C",v);
case 24: S.push(L[4]);
case 26: S.push(L[4]);
case 28: a=S.pop();S.push(R.get(a,"m.a:[[I"));
case 31: a=S.splice(S.length-1,1);b=null;v=R.call("m","a([[I)[[I",b,a,184);S.push(v);
case 34: v=S.pop();a=S.pop();R.set(a,"m.a:[[I",v);
case 37: S.push(L[4]);
case 39: S.push(L[1]);
case 40: S.push(S.pop()<<16>>16);
case 41: v=S.pop();a=S.pop();R.set(a,"m.a:S",v);
case 44: S.push(L[4]);
case 46: S.push(L[2]);
case 47: S.push(S.pop()<<16>>16);
case 48: v=S.pop();a=S.pop();R.set(a,"m.b:S",v);
case 51: S.push(0);
case 52: L[6]=S.pop();
case 54: S.push(0);
case 55: L[7]=S.pop();
case 57: S.push(800);
case 60: S.push(R.array("I",S.pop()));
case 62: L[8]=S.pop();
case 64: S.push(0);
case 65: L[9]=S.pop();
case 67: S.push(L[9]);
case 69: S.push(L[5]);
case 71: b=S.pop();a=S.pop();if(a>=b){pc=332;continue flow;}
case 74: S.push(L[0]);
case 75: S.push(L[9]);
case 77: S.push(0);
case 78: S.push(L[8]);
case 80: a=S.splice(S.length-3,3);b=S.pop();v=R.call("g","a(II[I)I",b,a,182);S.push(v);
case 83: S.push(2);
case 84: b=S.pop();a=S.pop();S.push(a<<b);
case 85: L[6]=S.pop();
case 87: S.push(0);
case 88: L[10]=S.pop();
case 90: S.push(-1);
case 91: L[1]=S.pop();
case 92: S.push(-1);
case 93: L[2]=S.pop();
case 94: S.push(L[10]);
case 96: S.push(L[6]);
case 98: b=S.pop();a=S.pop();if(a>=b){pc=326;continue flow;}
case 101: S.push(L[8]);
case 103: S.push(L[10]);
case 105: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 106: L[11]=S.pop();
case 108: S.push(L[1]);
case 109: if(S.pop()>=0){pc=125;continue flow;}
case 112: S.push(L[11]);
case 114: S.push(L[4]);
case 116: a=S.pop();S.push(R.get(a,"m.a:S"));
case 119: b=S.pop();a=S.pop();if(a!==b){pc=125;continue flow;}
case 122: S.push(L[10]);
case 124: L[1]=S.pop();
case 125: S.push(L[2]);
case 126: if(S.pop()>=0){pc=142;continue flow;}
case 129: S.push(L[11]);
case 131: S.push(L[4]);
case 133: a=S.pop();S.push(R.get(a,"m.b:S"));
case 136: b=S.pop();a=S.pop();if(a!==b){pc=142;continue flow;}
case 139: S.push(L[10]);
case 141: L[2]=S.pop();
case 142: S.push(L[1]);
case 143: if(S.pop()<0){pc=320;continue flow;}
case 146: S.push(L[2]);
case 147: if(S.pop()<0){pc=320;continue flow;}
case 150: L[7]=(L[7]+(1))|0;
case 153: S.push(L[4]);
case 155: S.push(L[4]);
case 157: a=S.pop();S.push(R.get(a,"m.a:[[I"));
case 160: a=S.splice(S.length-1,1);b=null;v=R.call("m","a([[I)[[I",b,a,184);S.push(v);
case 163: v=S.pop();a=S.pop();R.set(a,"m.a:[[I",v);
case 166: S.push(L[4]);
case 168: a=S.pop();S.push(R.get(a,"m.a:[[I"));
case 171: S.push(L[7]);
case 173: S.push(L[2]);
case 174: S.push(L[1]);
case 175: b=S.pop();a=S.pop();S.push((a-b)|0);
case 176: S.push(4);
case 177: b=S.pop();a=S.pop();S.push((a+b)|0);
case 178: S.push(2);
case 179: b=S.pop();a=S.pop();S.push(a>>b);
case 180: S.push(R.array("I",S.pop()));
case 182: v=S.pop();b=S.pop();a=S.pop();R.aset(a,b,v);
case 183: S.push(L[1]);
case 184: S.push(4);
case 185: b=S.pop();a=S.pop();S.push((a+b)|0);
case 186: L[10]=S.pop();
case 188: S.push(0);
case 189: L[12]=S.pop();
case 191: S.push(L[10]);
case 193: S.push(L[2]);
case 194: b=S.pop();a=S.pop();if(a>=b){pc=306;continue flow;}
case 197: S.push(L[8]);
case 199: S.push(L[10]);
case 201: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 202: L[11]=S.pop();
case 204: S.push(L[8]);
case 206: S.push(L[10]);
case 208: S.push(1);
case 209: b=S.pop();a=S.pop();S.push((a+b)|0);
case 210: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 211: L[1]=S.pop();
case 212: S.push(L[8]);
case 214: S.push(L[10]);
case 216: S.push(2);
case 217: b=S.pop();a=S.pop();S.push((a+b)|0);
case 218: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 219: L[6]=S.pop();
case 221: S.push(L[11]);
case 223: S.push(L[3]);
case 224: b=S.pop();a=S.pop();if(a!==b){pc=231;continue flow;}
case 227: S.push(1);
case 228: pc=232;continue flow;
case 231: S.push(0);
case 232: L[11]=S.pop();
case 234: S.push(L[4]);
case 236: a=S.pop();S.push(R.get(a,"m.a:[[I"));
case 239: S.push(L[7]);
case 241: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 242: S.push(L[12]);
case 244: a=S.pop();if(typeof a==="bigint")S.push(a,a);else{b=S.pop();S.push(b,a,b,a);}
case 245: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 246: S.push(L[11]);
case 248: S.push(3);
case 249: b=S.pop();a=S.pop();S.push(a&b);
case 250: S.push(30);
case 252: b=S.pop();a=S.pop();S.push(a<<b);
case 253: b=S.pop();a=S.pop();S.push(a|b);
case 254: v=S.pop();b=S.pop();a=S.pop();R.aset(a,b,v);
case 255: S.push(L[4]);
case 257: a=S.pop();S.push(R.get(a,"m.a:[[I"));
case 260: S.push(L[7]);
case 262: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 263: S.push(L[12]);
case 265: a=S.pop();if(typeof a==="bigint")S.push(a,a);else{b=S.pop();S.push(b,a,b,a);}
case 266: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 267: S.push(L[1]);
case 268: S.push(17);
case 270: b=S.pop();a=S.pop();S.push(a<<b);
case 271: S.push(2);
case 272: b=S.pop();a=S.pop();S.push((a>>>b)|0);
case 273: b=S.pop();a=S.pop();S.push(a|b);
case 274: v=S.pop();b=S.pop();a=S.pop();R.aset(a,b,v);
case 275: S.push(L[4]);
case 277: a=S.pop();S.push(R.get(a,"m.a:[[I"));
case 280: S.push(L[7]);
case 282: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 283: S.push(L[12]);
case 285: a=S.pop();if(typeof a==="bigint")S.push(a,a);else{b=S.pop();S.push(b,a,b,a);}
case 286: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 287: S.push(L[6]);
case 289: S.push(17);
case 291: b=S.pop();a=S.pop();S.push(a<<b);
case 292: S.push(17);
case 294: b=S.pop();a=S.pop();S.push((a>>>b)|0);
case 295: b=S.pop();a=S.pop();S.push(a|b);
case 296: v=S.pop();b=S.pop();a=S.pop();R.aset(a,b,v);
case 297: L[10]=(L[10]+(4))|0;
case 300: L[12]=(L[12]+(1))|0;
case 303: pc=191;continue flow;
case 306: S.push(L[4]);
case 308: a=S.pop();S.push(R.get(a,"m.a:[C"));
case 311: S.push(L[9]);
case 313: S.push(L[7]);
case 315: S.push(S.pop()&65535);
case 316: v=S.pop();b=S.pop();a=S.pop();R.aset(a,b,v);
case 317: pc=326;continue flow;
case 320: L[10]=(L[10]+(4))|0;
case 323: pc=94;continue flow;
case 326: L[9]=(L[9]+(1))|0;
case 329: pc=67;continue flow;
case 332: S.push(L[4]);
case 334: return S.pop();
default:throw new Error("Invalid control flow m.a(Lg;III)Lm; "+pc);
}}catch(error){
throw error;}}});
// m.a(Ljavax/microedition/lcdui/Graphics;Ls;IIIII)V
R.method("m","a(Ljavax/microedition/lcdui/Graphics;Ls;IIIII)V",function(self,args){
const S=[], L=new Array(15).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=self;
L[1]=args[0];
L[2]=args[1];
L[3]=args[2];
L[4]=args[3];
L[5]=args[4];
L[6]=args[5];
L[7]=args[6];
flow: while(true){ try { switch(pc){
case 0: S.push(L[0]);
case 1: a=S.pop();S.push(R.get(a,"m.a:[C"));
case 4: S.push(L[3]);
case 5: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 6: if(S.pop()<=0){pc=240;continue flow;}
case 9: S.push(0);
case 10: L[2]=S.pop();
case 11: S.push(L[0]);
case 12: a=S.pop();S.push(R.get(a,"m.a:[[I"));
case 15: S.push(L[0]);
case 16: a=S.pop();S.push(R.get(a,"m.a:[C"));
case 19: S.push(L[3]);
case 20: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 21: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 22: S.push(S[S.length-1]);
case 23: L[3]=S.pop();
case 24: S.push(0);
case 25: L[2]=(L[2]+(1))|0;
case 28: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 29: S.push(S[S.length-1]);
case 30: L[8]=S.pop();
case 32: S.push(L[6]);
case 34: a=S.splice(S.length-2,2);b=null;v=R.call("m","a(II)I",b,a,184);S.push(v);
case 37: L[9]=S.pop();
case 39: S.push(L[8]);
case 41: S.push(L[6]);
case 43: a=S.splice(S.length-2,2);b=null;v=R.call("m","b(II)I",b,a,184);S.push(v);
case 46: L[10]=S.pop();
case 48: S.push(L[3]);
case 49: S.push(1);
case 50: L[2]=(L[2]+(1))|0;
case 53: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 54: S.push(S[S.length-1]);
case 55: L[8]=S.pop();
case 57: S.push(L[6]);
case 59: a=S.splice(S.length-2,2);b=null;v=R.call("m","a(II)I",b,a,184);S.push(v);
case 62: L[11]=S.pop();
case 64: S.push(L[8]);
case 66: S.push(L[6]);
case 68: a=S.splice(S.length-2,2);b=null;v=R.call("m","b(II)I",b,a,184);S.push(v);
case 71: L[12]=S.pop();
case 73: S.push(L[1]);
case 74: S.push(L[7]);
case 76: S.push(16777215);
case 78: b=S.pop();a=S.pop();S.push(a&b);
case 79: a=S.splice(S.length-1,1);b=S.pop();v=R.call("javax/microedition/lcdui/Graphics","setColor(I)V",b,a,182);
case 82: S.push(L[2]);
case 83: S.push(L[3]);
case 84: S.push(R.length(S.pop()));
case 85: b=S.pop();a=S.pop();if(a>=b){pc=240;continue flow;}
case 88: S.push(L[3]);
case 89: S.push(L[2]);
case 90: L[2]=(L[2]+(1))|0;
case 93: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 94: S.push(S[S.length-1]);
case 95: L[8]=S.pop();
case 97: S.push(0);
case 98: L[13]=S.pop();
case 100: S.push(30);
case 102: b=S.pop();a=S.pop();S.push((a>>>b)|0);
case 103: L[14]=S.pop();
case 105: S.push(L[8]);
case 107: S.push(L[6]);
case 109: a=S.splice(S.length-2,2);b=null;v=R.call("m","a(II)I",b,a,184);S.push(v);
case 112: L[13]=S.pop();
case 114: S.push(L[8]);
case 116: S.push(L[6]);
case 118: a=S.splice(S.length-2,2);b=null;v=R.call("m","b(II)I",b,a,184);S.push(v);
case 121: L[8]=S.pop();
case 123: S.push(L[1]);
case 124: S.push(L[4]);
case 126: S.push(L[9]);
case 128: b=S.pop();a=S.pop();S.push((a+b)|0);
case 129: S.push(L[5]);
case 131: S.push(L[10]);
case 133: b=S.pop();a=S.pop();S.push((a+b)|0);
case 134: S.push(L[4]);
case 136: S.push(L[11]);
case 138: b=S.pop();a=S.pop();S.push((a+b)|0);
case 139: S.push(L[5]);
case 141: S.push(L[12]);
case 143: b=S.pop();a=S.pop();S.push((a+b)|0);
case 144: S.push(L[4]);
case 146: S.push(L[13]);
case 148: b=S.pop();a=S.pop();S.push((a+b)|0);
case 149: S.push(L[5]);
case 151: S.push(L[8]);
case 153: b=S.pop();a=S.pop();S.push((a+b)|0);
case 154: S.push(L[7]);
case 156: S.push(24);
case 158: b=S.pop();a=S.pop();S.push((a>>>b)|0);
case 159: a=S.splice(S.length-8,8);b=null;v=R.call("s","a(Ljavax/microedition/lcdui/Graphics;IIIIIII)V",b,a,184);
case 162: S.push(L[14]);
case 164: S.push(1);
case 165: b=S.pop();a=S.pop();if(a!==b){pc=221;continue flow;}
case 168: S.push(L[3]);
case 169: S.push(L[2]);
case 170: L[2]=(L[2]+(1))|0;
case 173: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 174: S.push(S[S.length-1]);
case 175: L[8]=S.pop();
case 177: S.push(L[6]);
case 179: a=S.splice(S.length-2,2);b=null;v=R.call("m","a(II)I",b,a,184);S.push(v);
case 182: L[9]=S.pop();
case 184: S.push(L[8]);
case 186: S.push(L[6]);
case 188: a=S.splice(S.length-2,2);b=null;v=R.call("m","b(II)I",b,a,184);S.push(v);
case 191: L[10]=S.pop();
case 193: S.push(L[3]);
case 194: S.push(L[2]);
case 195: L[2]=(L[2]+(1))|0;
case 198: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 199: S.push(S[S.length-1]);
case 200: L[8]=S.pop();
case 202: S.push(L[6]);
case 204: a=S.splice(S.length-2,2);b=null;v=R.call("m","a(II)I",b,a,184);S.push(v);
case 207: L[11]=S.pop();
case 209: S.push(L[8]);
case 211: S.push(L[6]);
case 213: a=S.splice(S.length-2,2);b=null;v=R.call("m","b(II)I",b,a,184);S.push(v);
case 216: L[12]=S.pop();
case 218: pc=82;continue flow;
case 221: S.push(L[11]);
case 223: L[9]=S.pop();
case 225: S.push(L[12]);
case 227: L[10]=S.pop();
case 229: S.push(L[13]);
case 231: L[11]=S.pop();
case 233: S.push(L[8]);
case 235: L[12]=S.pop();
case 237: pc=82;continue flow;
case 240: return;
default:throw new Error("Invalid control flow m.a(Ljavax/microedition/lcdui/Graphics;Ls;IIIII)V "+pc);
}}catch(error){
throw error;}}});
// m.a([[I)[[I
R.method("m","a([[I)[[I",function(self,args){
const S=[], L=new Array(2).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=args[0];
flow: while(true){ try { switch(pc){
case 0: S.push(L[0]);
case 1: if(S.pop()!==null){pc=9;continue flow;}
case 4: S.push(0);
case 5: S.push(R.array("L[I;",S.pop()));
case 8: L[0]=S.pop();
case 9: S.push(L[0]);
case 10: S.push(R.length(S.pop()));
case 11: S.push(1);
case 12: b=S.pop();a=S.pop();S.push((a+b)|0);
case 13: S.push(R.array("L[I;",S.pop()));
case 16: L[1]=S.pop();
case 17: S.push(L[0]);
case 18: S.push(0);
case 19: S.push(L[1]);
case 20: S.push(0);
case 21: S.push(L[0]);
case 22: S.push(R.length(S.pop()));
case 23: a=S.splice(S.length-5,5);b=null;v=R.call("java/lang/System","arraycopy(Ljava/lang/Object;ILjava/lang/Object;II)V",b,a,184);
case 26: S.push(L[1]);
case 27: return S.pop();
default:throw new Error("Invalid control flow m.a([[I)[[I "+pc);
}}catch(error){
throw error;}}});
// m.a(II)I
R.method("m","a(II)I",function(self,args){
const S=[], L=new Array(2).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=args[0];
L[1]=args[1];
flow: while(true){ try { switch(pc){
case 0: S.push(L[0]);
case 1: S.push(2);
case 2: b=S.pop();a=S.pop();S.push(a<<b);
case 3: S.push(17);
case 5: b=S.pop();a=S.pop();S.push(a>>b);
case 6: S.push(0);
case 7: S.push(L[1]);
case 8: a=S.splice(S.length-3,3);b=null;v=R.call("g","a(III)I",b,a,184);S.push(v);
case 11: return S.pop();
default:throw new Error("Invalid control flow m.a(II)I "+pc);
}}catch(error){
throw error;}}});
// m.b(II)I
R.method("m","b(II)I",function(self,args){
const S=[], L=new Array(2).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=args[0];
L[1]=args[1];
flow: while(true){ try { switch(pc){
case 0: S.push(0);
case 1: S.push(L[0]);
case 2: S.push(17);
case 4: b=S.pop();a=S.pop();S.push(a<<b);
case 5: S.push(17);
case 7: b=S.pop();a=S.pop();S.push(a>>b);
case 8: S.push(L[1]);
case 9: a=S.splice(S.length-3,3);b=null;v=R.call("g","b(III)I",b,a,184);S.push(v);
case 12: return S.pop();
default:throw new Error("Invalid control flow m.b(II)I "+pc);
}}catch(error){
throw error;}}});
}
