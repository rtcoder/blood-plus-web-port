// Generated offline by tools/compile_game.py. Source r.class
export default function register(R) {
R.define("r","java/lang/Object",[{key:"r.a:Lr;",static:true,value:null},{key:"r.a:I",static:true,value:0},{key:"r.a:[I",static:true,value:null},{key:"r.b:[B",static:true,value:null},{key:"r.a:[B",static:true,value:null},{key:"r.a:[Z",static:true,value:null},{key:"r.b:I",static:true,value:0}]);
// r.<init>()V
R.method("r","<init>()V",function(self,args){
const S=[], L=new Array(1).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=self;
flow: while(true){ try { switch(pc){
case 0: S.push(L[0]);
case 1: a=S.splice(S.length-0,0);b=S.pop();v=R.call("java/lang/Object","<init>()V",b,a,183);
case 4: return;
default:throw new Error("Invalid control flow r.<init>()V "+pc);
}}catch(error){
throw error;}}});
// r.a(I)[Lj;
R.method("r","a(I)[Lj;",function(self,args){
const S=[], L=new Array(1).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=args[0];
flow: while(true){ try { switch(pc){
case 0: S.push(L[0]);
case 1: S.push(null);
case 2: a=S.splice(S.length-2,2);b=null;v=R.call("r","a(I[B)[Lj;",b,a,184);S.push(v);
case 5: return S.pop();
default:throw new Error("Invalid control flow r.a(I)[Lj; "+pc);
}}catch(error){
throw error;}}});
// r.a(I[B)[Lj;
R.method("r","a(I[B)[Lj;",function(self,args){
const S=[], L=new Array(11).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=args[0];
L[1]=args[1];
flow: while(true){ try { switch(pc){
case 0: ip=0;S.push(L[0]);
case 1: ip=1;a=S.splice(S.length-1,1);b=null;v=R.call("r","a(I)Ljava/io/DataInputStream;",b,a,184);S.push(v);
case 4: ip=4;S.push(S[S.length-1]);
case 5: ip=5;L[0]=S.pop();
case 6: ip=6;a=S.splice(S.length-0,0);b=S.pop();v=R.call("java/io/DataInputStream","readChar()C",b,a,182);S.push(v);
case 9: ip=9;L[2]=S.pop();
case 10: ip=10;S.push(L[0]);
case 11: ip=11;a=S.splice(S.length-0,0);b=S.pop();v=R.call("java/io/DataInputStream","readByte()B",b,a,182);S.push(v);
case 14: ip=14;S.pop();
case 15: ip=15;S.push(0);
case 16: ip=16;L[3]=S.pop();
case 17: ip=17;S.push(L[0]);
case 18: ip=18;a=S.splice(S.length-0,0);b=S.pop();v=R.call("java/io/DataInputStream","readShort()S",b,a,182);S.push(v);
case 21: ip=21;S.push(4);
case 22: ip=22;b=S.pop();a=S.pop();S.push((a-b)|0);
case 23: ip=23;S.push(R.array("B",S.pop()));
case 25: ip=25;L[4]=S.pop();
case 27: ip=27;S.push(L[0]);
case 28: ip=28;a=S.splice(S.length-0,0);b=S.pop();v=R.call("java/io/DataInputStream","readChar()C",b,a,182);S.push(v);
case 31: ip=31;L[5]=S.pop();
case 33: ip=33;S.push(L[0]);
case 34: ip=34;a=S.splice(S.length-0,0);b=S.pop();v=R.call("java/io/DataInputStream","readChar()C",b,a,182);S.push(v);
case 37: ip=37;L[6]=S.pop();
case 39: ip=39;S.push(L[0]);
case 40: ip=40;S.push(L[4]);
case 42: ip=42;a=S.splice(S.length-1,1);b=S.pop();v=R.call("java/io/DataInputStream","readFully([B)V",b,a,182);
case 45: ip=45;S.push(R.staticGet("r","r.a:[Z"));
case 48: ip=48;if(S.pop()!==null){pc=58;continue flow;}
case 51: ip=51;S.push(17);
case 53: ip=53;S.push(R.array("Z",S.pop()));
case 55: ip=55;R.staticSet("r","r.a:[Z",S.pop());
case 58: ip=58;S.push(L[6]);
case 60: ip=60;S.push(4095);
case 63: ip=63;b=S.pop();a=S.pop();S.push(a&b);
case 64: ip=64;L[6]=S.pop();
case 66: ip=66;S.push(0);
case 67: ip=67;L[3]=S.pop();
case 68: ip=68;S.push(L[3]);
case 69: ip=69;S.push(16);
case 71: ip=71;b=S.pop();a=S.pop();if(a>=b){pc=99;continue flow;}
case 74: ip=74;S.push(R.staticGet("r","r.a:[Z"));
case 77: ip=77;S.push(L[3]);
case 78: ip=78;S.push(L[5]);
case 80: ip=80;S.push(L[3]);
case 81: ip=81;b=S.pop();a=S.pop();S.push(a>>b);
case 82: ip=82;S.push(1);
case 83: ip=83;b=S.pop();a=S.pop();S.push(a&b);
case 84: ip=84;if(S.pop()!==0){pc=91;continue flow;}
case 87: ip=87;S.push(1);
case 88: ip=88;pc=92;continue flow;
case 91: ip=91;S.push(0);
case 92: ip=92;v=S.pop();b=S.pop();a=S.pop();R.aset(a,b,v);
case 93: ip=93;L[3]=(L[3]+(1))|0;
case 96: ip=96;pc=68;continue flow;
case 99: ip=99;S.push(5);
case 100: ip=100;L[5]=S.pop();
case 102: ip=102;S.push(0);
case 103: ip=103;L[3]=S.pop();
case 104: ip=104;S.push(10);
case 106: ip=106;S.push(R.array("I",S.pop()));
case 108: ip=108;L[0]=S.pop();
case 109: ip=109;S.push(0);
case 110: ip=110;L[7]=S.pop();
case 112: ip=112;S.push(L[7]);
case 114: ip=114;S.push(3);
case 115: ip=115;b=S.pop();a=S.pop();if(a>=b){pc=184;continue flow;}
case 118: ip=118;S.push(0);
case 119: ip=119;L[8]=S.pop();
case 121: ip=121;S.push(L[8]);
case 123: ip=123;S.push(L[7]);
case 125: ip=125;if(S.pop()===0){pc=132;continue flow;}
case 128: ip=128;S.push(4);
case 129: ip=129;pc=133;continue flow;
case 132: ip=132;S.push(2);
case 133: ip=133;b=S.pop();a=S.pop();if(a>=b){pc=178;continue flow;}
case 136: ip=136;S.push(L[0]);
case 137: ip=137;S.push(L[3]);
case 138: ip=138;L[3]=(L[3]+(1))|0;
case 141: ip=141;S.push(R.staticGet("r","r.a:[Z"));
case 144: ip=144;S.push(L[7]);
case 146: ip=146;b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 147: ip=147;if(S.pop()===0){pc=170;continue flow;}
case 150: ip=150;S.push(R.staticGet("r","r.a:[Z"));
case 153: ip=153;S.push(L[5]);
case 155: ip=155;L[5]=(L[5]+(1))|0;
case 158: ip=158;b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 159: ip=159;if(S.pop()===0){pc=166;continue flow;}
case 162: ip=162;S.push(2);
case 163: ip=163;pc=171;continue flow;
case 166: ip=166;S.push(1);
case 167: ip=167;pc=171;continue flow;
case 170: ip=170;S.push(0);
case 171: ip=171;v=S.pop();b=S.pop();a=S.pop();R.aset(a,b,v);
case 172: ip=172;L[8]=(L[8]+(1))|0;
case 175: ip=175;pc=121;continue flow;
case 178: ip=178;L[7]=(L[7]+(1))|0;
case 181: ip=181;pc=112;continue flow;
case 184: ip=184;S.push(L[2]);
case 185: ip=185;S.push(L[1]);
case 186: ip=186;a=S.splice(S.length-2,2);b=null;v=R.call("r","a(I[B)Ljavax/microedition/lcdui/Image;",b,a,184);S.push(v);
case 189: ip=189;L[7]=S.pop();
case 191: ip=191;S.push(10);
case 193: ip=193;S.push(R.array("S",S.pop()));
case 195: ip=195;L[8]=S.pop();
case 197: ip=197;S.push(L[6]);
case 199: ip=199;S.push(R.array("Lj;",S.pop()));
case 202: ip=202;L[1]=S.pop();
case 203: ip=203;S.push(0);
case 204: ip=204;L[2]=S.pop();
case 205: ip=205;S.push(L[2]);
case 206: ip=206;S.push(L[6]);
case 208: ip=208;b=S.pop();a=S.pop();if(a>=b){pc=362;continue flow;}
case 211: ip=211;S.push(L[1]);
case 212: ip=212;S.push(L[2]);
case 213: ip=213;S.push(R.new("j"));
case 216: ip=216;S.push(S[S.length-1]);
case 217: ip=217;S.push(L[7]);
case 219: ip=219;a=S.splice(S.length-1,1);b=S.pop();v=R.call("j","<init>(Ljavax/microedition/lcdui/Image;)V",b,a,183);
case 222: ip=222;v=S.pop();b=S.pop();a=S.pop();R.aset(a,b,v);
case 223: ip=223;S.push(0);
case 224: ip=224;L[3]=S.pop();
case 225: ip=225;S.push(0);
case 226: ip=226;L[5]=S.pop();
case 228: ip=228;S.push(L[5]);
case 230: ip=230;S.push(L[8]);
case 232: ip=232;S.push(R.length(S.pop()));
case 233: ip=233;b=S.pop();a=S.pop();if(a>=b){pc=348;continue flow;}
case 236: ip=236;S.push(0);
case 237: ip=237;L[9]=S.pop();
case 239: ip=239;S.push(L[0]);
case 240: ip=240;S.push(L[5]);
case 242: ip=242;b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 243: ip=243;S.push(1);
case 244: ip=244;b=S.pop();a=S.pop();S.push((a-b)|0);
case 245: ip=245;S.push(S[S.length-1]);
case 246: ip=246;L[10]=S.pop();
case 248: ip=248;if(S.pop()<0){pc=334;continue flow;}
case 251: ip=251;S.push(L[3]);
case 252: ip=252;S.push(L[2]);
case 253: ip=253;S.push(L[10]);
case 255: ip=255;b=S.pop();a=S.pop();S.push(a<<b);
case 256: ip=256;b=S.pop();a=S.pop();S.push((a+b)|0);
case 257: ip=257;L[3]=S.pop();
case 258: ip=258;S.push(L[10]);
case 260: ip=260;if(S.pop()!==0){pc=300;continue flow;}
case 263: ip=263;S.push(L[4]);
case 265: ip=265;S.push(L[3]);
case 266: ip=266;b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 267: ip=267;L[9]=S.pop();
case 269: ip=269;S.push(L[5]);
case 271: ip=271;S.push(1);
case 272: ip=272;b=S.pop();a=S.pop();if(a<=b){pc=324;continue flow;}
case 275: ip=275;S.push(L[5]);
case 277: ip=277;S.push(6);
case 279: ip=279;b=S.pop();a=S.pop();if(a===b){pc=324;continue flow;}
case 282: ip=282;S.push(L[5]);
case 284: ip=284;S.push(7);
case 286: ip=286;b=S.pop();a=S.pop();if(a===b){pc=324;continue flow;}
case 289: ip=289;S.push(L[9]);
case 291: ip=291;S.push(255);
case 294: ip=294;b=S.pop();a=S.pop();S.push(a&b);
case 295: ip=295;L[9]=S.pop();
case 297: ip=297;pc=324;continue flow;
case 300: ip=300;S.push(L[4]);
case 302: ip=302;S.push(L[3]);
case 303: ip=303;b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 304: ip=304;S.push(255);
case 307: ip=307;b=S.pop();a=S.pop();S.push(a&b);
case 308: ip=308;S.push(8);
case 310: ip=310;b=S.pop();a=S.pop();S.push(a<<b);
case 311: ip=311;S.push(L[4]);
case 313: ip=313;S.push(L[3]);
case 314: ip=314;S.push(1);
case 315: ip=315;b=S.pop();a=S.pop();S.push((a+b)|0);
case 316: ip=316;b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 317: ip=317;S.push(255);
case 320: ip=320;b=S.pop();a=S.pop();S.push(a&b);
case 321: ip=321;b=S.pop();a=S.pop();S.push(a|b);
case 322: ip=322;L[9]=S.pop();
case 324: ip=324;S.push(L[3]);
case 325: ip=325;S.push(L[6]);
case 327: ip=327;S.push(L[2]);
case 328: ip=328;b=S.pop();a=S.pop();S.push((a-b)|0);
case 329: ip=329;S.push(L[10]);
case 331: ip=331;b=S.pop();a=S.pop();S.push(a<<b);
case 332: ip=332;b=S.pop();a=S.pop();S.push((a+b)|0);
case 333: ip=333;L[3]=S.pop();
case 334: ip=334;S.push(L[8]);
case 336: ip=336;S.push(L[5]);
case 338: ip=338;S.push(L[9]);
case 340: ip=340;S.push(S.pop()<<16>>16);
case 341: ip=341;v=S.pop();b=S.pop();a=S.pop();R.aset(a,b,v);
case 342: ip=342;L[5]=(L[5]+(1))|0;
case 345: ip=345;pc=228;continue flow;
case 348: ip=348;S.push(L[1]);
case 349: ip=349;S.push(L[2]);
case 350: ip=350;b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 351: ip=351;S.push(L[8]);
case 353: ip=353;a=S.splice(S.length-1,1);b=S.pop();v=R.call("j","a([S)V",b,a,182);
case 356: ip=356;L[2]=(L[2]+(1))|0;
case 359: ip=359;pc=205;continue flow;
case 362: ip=362;S.push(L[1]);
case 363: ip=363;L[0]=S.pop();
case 364: ip=364;pc=370;continue flow;
case 367: ip=367;S.pop();
case 368: ip=368;S.push(null);
case 369: ip=369;L[0]=S.pop();
case 370: ip=370;S.push(L[0]);
case 371: ip=371;return S.pop();
default:throw new Error("Invalid control flow r.a(I[B)[Lj; "+pc);
}}catch(error){
if(ip>=0&&ip<364&&R.catches(error,"java/lang/Exception")){S.length=0;S.push(error);pc=367;continue flow;}
throw error;}}});
// r.a(I)Ljavax/microedition/lcdui/Image;
R.method("r","a(I)Ljavax/microedition/lcdui/Image;",function(self,args){
const S=[], L=new Array(1).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=args[0];
flow: while(true){ try { switch(pc){
case 0: S.push(L[0]);
case 1: S.push(null);
case 2: a=S.splice(S.length-2,2);b=null;v=R.call("r","a(I[B)Ljavax/microedition/lcdui/Image;",b,a,184);S.push(v);
case 5: return S.pop();
default:throw new Error("Invalid control flow r.a(I)Ljavax/microedition/lcdui/Image; "+pc);
}}catch(error){
throw error;}}});
// r.a(I[B)Ljavax/microedition/lcdui/Image;
R.method("r","a(I[B)Ljavax/microedition/lcdui/Image;",function(self,args){
const S=[], L=new Array(4).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=args[0];
L[1]=args[1];
flow: while(true){ try { switch(pc){
case 0: S.push(null);
case 1: L[2]=S.pop();
case 2: S.push(L[0]);
case 3: a=S.splice(S.length-1,1);b=null;v=R.call("r","a(I)V",b,a,184);
case 6: S.push(L[0]);
case 7: S.push(1023);
case 10: b=S.pop();a=S.pop();S.push(a&b);
case 11: S.push(S[S.length-1]);
case 12: L[0]=S.pop();
case 13: a=S.splice(S.length-1,1);b=null;v=R.call("r","a(I)I",b,a,184);S.push(v);
case 16: L[3]=S.pop();
case 17: S.push(R.staticGet("r","r.b:[B"));
case 20: S.push(L[3]);
case 21: S.push(L[1]);
case 22: a=S.splice(S.length-3,3);b=null;v=R.call("r","a([BI[B)V",b,a,184);
case 25: S.push(R.staticGet("r","r.b:[B"));
case 28: S.push(L[3]);
case 29: S.push(R.staticGet("r","r.a:[I"));
case 32: S.push(L[0]);
case 33: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 34: L[0]=S.pop();
case 35: S.push(0);
case 36: L[2]=S.pop();
case 37: S.push(L[0]);
case 38: a=S.splice(S.length-3,3);b=null;v=R.call("javax/microedition/lcdui/Image","createImage([BII)Ljavax/microedition/lcdui/Image;",b,a,184);S.push(v);
case 41: L[2]=S.pop();
case 42: S.push(R.staticGet("r","r.b:[B"));
case 45: S.push(L[3]);
case 46: S.push(L[1]);
case 47: a=S.splice(S.length-3,3);b=null;v=R.call("r","a([BI[B)V",b,a,184);
case 50: S.push(L[2]);
case 51: return S.pop();
default:throw new Error("Invalid control flow r.a(I[B)Ljavax/microedition/lcdui/Image; "+pc);
}}catch(error){
throw error;}}});
// r.a([BI[B)V
R.method("r","a([BI[B)V",function(self,args){
const S=[], L=new Array(5).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=args[0];
L[1]=args[1];
L[2]=args[2];
flow: while(true){ try { switch(pc){
case 0: ip=0;S.push(L[2]);
case 1: ip=1;if(S.pop()===null){pc=60;continue flow;}
case 4: ip=4;S.push(L[0]);
case 5: ip=5;S.push(L[1]);
case 6: ip=6;S.push(L[0]);
case 7: ip=7;S.push(R.length(S.pop()));
case 8: ip=8;S.push(L[1]);
case 9: ip=9;b=S.pop();a=S.pop();S.push((a-b)|0);
case 10: ip=10;a=S.splice(S.length-3,3);b=null;v=R.call("r","a([BII)Ljava/io/DataInputStream;",b,a,184);S.push(v);
case 13: ip=13;L[3]=S.pop();
case 14: ip=14;S.push(L[3]);
case 15: ip=15;a=S.splice(S.length-1,1);b=null;v=R.call("r","a(Ljava/io/DataInputStream;)I",b,a,184);S.push(v);
case 18: ip=18;S.pop();
case 19: ip=19;S.push(0);
case 20: ip=20;L[3]=S.pop();
case 21: ip=21;S.push(L[1]);
case 22: ip=22;S.push(R.staticGet("r","r.b:I"));
case 25: ip=25;b=S.pop();a=S.pop();S.push((a+b)|0);
case 26: ip=26;L[1]=S.pop();
case 27: ip=27;S.push(L[3]);
case 28: ip=28;S.push(L[2]);
case 29: ip=29;S.push(R.length(S.pop()));
case 30: ip=30;b=S.pop();a=S.pop();if(a>=b){pc=58;continue flow;}
case 33: ip=33;S.push(L[0]);
case 34: ip=34;S.push(L[1]);
case 35: ip=35;b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 36: ip=36;L[4]=S.pop();
case 38: ip=38;S.push(L[0]);
case 39: ip=39;S.push(L[1]);
case 40: ip=40;L[1]=(L[1]+(1))|0;
case 43: ip=43;S.push(L[2]);
case 44: ip=44;S.push(L[3]);
case 45: ip=45;b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 46: ip=46;v=S.pop();b=S.pop();a=S.pop();R.aset(a,b,v);
case 47: ip=47;S.push(L[2]);
case 48: ip=48;S.push(L[3]);
case 49: ip=49;L[3]=(L[3]+(1))|0;
case 52: ip=52;S.push(L[4]);
case 54: ip=54;v=S.pop();b=S.pop();a=S.pop();R.aset(a,b,v);
case 55: ip=55;pc=27;continue flow;
case 58: ip=58;return;
case 59: ip=59;S.pop();
case 60: ip=60;return;
default:throw new Error("Invalid control flow r.a([BI[B)V "+pc);
}}catch(error){
if(ip>=14&&ip<58&&R.catches(error,"java/lang/Exception")){S.length=0;S.push(error);pc=59;continue flow;}
throw error;}}});
// r.a(I)[B
R.method("r","a(I)[B",function(self,args){
const S=[], L=new Array(3).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=args[0];
flow: while(true){ try { switch(pc){
case 0: ip=0;S.push(null);
case 1: ip=1;L[1]=S.pop();
case 2: ip=2;S.push(L[0]);
case 3: ip=3;a=S.splice(S.length-1,1);b=null;v=R.call("r","a(I)Ljava/io/DataInputStream;",b,a,184);S.push(v);
case 6: ip=6;L[0]=S.pop();
case 7: ip=7;S.push(L[0]);
case 8: ip=8;a=S.splice(S.length-1,1);b=null;v=R.call("r","a(Ljava/io/DataInputStream;)I",b,a,184);S.push(v);
case 11: ip=11;S.push(S[S.length-1]);
case 12: ip=12;L[2]=S.pop();
case 13: ip=13;if(S.pop()<0){pc=27;continue flow;}
case 16: ip=16;S.push(L[2]);
case 17: ip=17;S.push(4);
case 18: ip=18;b=S.pop();a=S.pop();S.push((a+b)|0);
case 19: ip=19;S.push(R.array("B",S.pop()));
case 21: ip=21;L[1]=S.pop();
case 22: ip=22;S.push(L[0]);
case 23: ip=23;S.push(L[1]);
case 24: ip=24;a=S.splice(S.length-1,1);b=S.pop();v=R.call("java/io/DataInputStream","readFully([B)V",b,a,182);
case 27: ip=27;pc=31;continue flow;
case 30: ip=30;S.pop();
case 31: ip=31;S.push(L[1]);
case 32: ip=32;return S.pop();
default:throw new Error("Invalid control flow r.a(I)[B "+pc);
}}catch(error){
if(ip>=7&&ip<27&&R.catches(error,"java/lang/Exception")){S.length=0;S.push(error);pc=30;continue flow;}
throw error;}}});
// r.a(Ljava/io/DataInputStream;)I
R.method("r","a(Ljava/io/DataInputStream;)I",function(self,args){
const S=[], L=new Array(3).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=args[0];
flow: while(true){ try { switch(pc){
case 0: S.push(L[0]);
case 1: S.push(8n);
case 4: a=S.splice(S.length-1,1);b=S.pop();v=R.call("java/io/DataInputStream","skip(J)J",b,a,182);S.push(v);
case 7: a=S.pop();if(typeof a!=="bigint")S.pop();
case 8: S.push(8);
case 10: R.staticSet("r","r.b:I",S.pop());
case 13: S.push(L[0]);
case 14: a=S.splice(S.length-0,0);b=S.pop();v=R.call("java/io/DataInputStream","readInt()I",b,a,182);S.push(v);
case 17: L[1]=S.pop();
case 18: S.push(L[0]);
case 19: a=S.splice(S.length-0,0);b=S.pop();v=R.call("java/io/DataInputStream","readInt()I",b,a,182);S.push(v);
case 22: L[2]=S.pop();
case 23: S.push(R.staticGet("r","r.b:I"));
case 26: S.push(8);
case 28: b=S.pop();a=S.pop();S.push((a+b)|0);
case 29: R.staticSet("r","r.b:I",S.pop());
case 32: S.push(1347179589);
case 34: S.push(L[2]);
case 35: b=S.pop();a=S.pop();if(a!==b){pc=40;continue flow;}
case 38: S.push(L[1]);
case 39: return S.pop();
case 40: S.push(1229278788);
case 42: S.push(L[2]);
case 43: b=S.pop();a=S.pop();if(a!==b){pc=48;continue flow;}
case 46: S.push(-1);
case 47: return S.pop();
case 48: S.push(L[0]);
case 49: S.push(L[1]);
case 50: S.push(4);
case 51: b=S.pop();a=S.pop();S.push((a+b)|0);
case 52: S.push(BigInt(S.pop()));
case 53: a=S.splice(S.length-1,1);b=S.pop();v=R.call("java/io/DataInputStream","skip(J)J",b,a,182);S.push(v);
case 56: a=S.pop();if(typeof a!=="bigint")S.pop();
case 57: S.push(R.staticGet("r","r.b:I"));
case 60: S.push(L[1]);
case 61: S.push(4);
case 62: b=S.pop();a=S.pop();S.push((a+b)|0);
case 63: b=S.pop();a=S.pop();S.push((a+b)|0);
case 64: R.staticSet("r","r.b:I",S.pop());
case 67: pc=13;continue flow;
default:throw new Error("Invalid control flow r.a(Ljava/io/DataInputStream;)I "+pc);
}}catch(error){
throw error;}}});
// r.b(I)[B
R.method("r","b(I)[B",function(self,args){
const S=[], L=new Array(2).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=args[0];
flow: while(true){ try { switch(pc){
case 0: S.push(L[0]);
case 1: a=S.splice(S.length-1,1);b=null;v=R.call("r","a(I)V",b,a,184);
case 4: S.push(L[0]);
case 5: S.push(1023);
case 8: b=S.pop();a=S.pop();S.push(a&b);
case 9: L[0]=S.pop();
case 10: S.push(R.staticGet("r","r.a:[I"));
case 13: S.push(L[0]);
case 14: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 15: S.push(R.array("B",S.pop()));
case 17: L[1]=S.pop();
case 18: S.push(R.staticGet("r","r.b:[B"));
case 21: S.push(L[0]);
case 22: a=S.splice(S.length-1,1);b=null;v=R.call("r","a(I)I",b,a,184);S.push(v);
case 25: S.push(L[1]);
case 26: S.push(0);
case 27: S.push(L[1]);
case 28: S.push(R.length(S.pop()));
case 29: a=S.splice(S.length-5,5);b=null;v=R.call("java/lang/System","arraycopy(Ljava/lang/Object;ILjava/lang/Object;II)V",b,a,184);
case 32: S.push(L[1]);
case 33: return S.pop();
default:throw new Error("Invalid control flow r.b(I)[B "+pc);
}}catch(error){
throw error;}}});
// r.a(I)Ljava/io/DataInputStream;
R.method("r","a(I)Ljava/io/DataInputStream;",function(self,args){
const S=[], L=new Array(1).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=args[0];
flow: while(true){ try { switch(pc){
case 0: S.push(L[0]);
case 1: a=S.splice(S.length-1,1);b=null;v=R.call("r","a(I)V",b,a,184);
case 4: S.push(L[0]);
case 5: S.push(1023);
case 8: b=S.pop();a=S.pop();S.push(a&b);
case 9: L[0]=S.pop();
case 10: S.push(R.staticGet("r","r.b:[B"));
case 13: S.push(L[0]);
case 14: a=S.splice(S.length-1,1);b=null;v=R.call("r","a(I)I",b,a,184);S.push(v);
case 17: S.push(R.staticGet("r","r.a:[I"));
case 20: S.push(L[0]);
case 21: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 22: a=S.splice(S.length-3,3);b=null;v=R.call("r","a([BII)Ljava/io/DataInputStream;",b,a,184);S.push(v);
case 25: return S.pop();
default:throw new Error("Invalid control flow r.a(I)Ljava/io/DataInputStream; "+pc);
}}catch(error){
throw error;}}});
// r.a(I)I
R.method("r","a(I)I",function(self,args){
const S=[], L=new Array(2).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=args[0];
flow: while(true){ try { switch(pc){
case 0: S.push(0);
case 1: L[1]=S.pop();
case 2: L[0]=(L[0]+(-1))|0;
case 5: S.push(L[0]);
case 6: if(S.pop()<0){pc=20;continue flow;}
case 9: S.push(L[1]);
case 10: S.push(R.staticGet("r","r.a:[I"));
case 13: S.push(L[0]);
case 14: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 15: b=S.pop();a=S.pop();S.push((a+b)|0);
case 16: L[1]=S.pop();
case 17: pc=2;continue flow;
case 20: S.push(L[1]);
case 21: return S.pop();
default:throw new Error("Invalid control flow r.a(I)I "+pc);
}}catch(error){
throw error;}}});
// r.a(I)V
R.method("r","a(I)V",function(self,args){
const S=[], L=new Array(2).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=args[0];
flow: while(true){ try { switch(pc){
case 0: ip=0;S.push(L[0]);
case 1: ip=1;S.push(10);
case 3: ip=3;b=S.pop();a=S.pop();S.push(a>>b);
case 4: ip=4;S.push(S[S.length-1]);
case 5: ip=5;L[0]=S.pop();
case 6: ip=6;if(S.pop()===0){pc=16;continue flow;}
case 9: ip=9;S.push(L[0]);
case 10: ip=10;S.push(R.staticGet("r","r.a:I"));
case 13: ip=13;b=S.pop();a=S.pop();if(a!==b){pc=17;continue flow;}
case 16: ip=16;return;
case 17: ip=17;S.push(null);
case 18: ip=18;a=S.splice(S.length-1,1);b=null;v=R.call("r","a(Ljava/io/DataInputStream;)Z",b,a,184);S.push(v);
case 21: ip=21;S.pop();
case 22: ip=22;S.push(L[0]);
case 23: ip=23;if(S.pop()<=0){pc=108;continue flow;}
case 26: ip=26;S.push(R.new("java/lang/StringBuffer"));
case 29: ip=29;S.push(S[S.length-1]);
case 30: ip=30;S.push(8);
case 32: ip=32;a=S.splice(S.length-1,1);b=S.pop();v=R.call("java/lang/StringBuffer","<init>(I)V",b,a,183);
case 35: ip=35;S.push(S[S.length-1]);
case 36: ip=36;L[1]=S.pop();
case 37: ip=37;S.push(47);
case 39: ip=39;a=S.splice(S.length-1,1);b=S.pop();v=R.call("java/lang/StringBuffer","append(C)Ljava/lang/StringBuffer;",b,a,182);S.push(v);
case 42: ip=42;S.pop();
case 43: ip=43;S.push(L[1]);
case 44: ip=44;S.push("RP");
case 46: ip=46;a=S.splice(S.length-1,1);b=S.pop();v=R.call("java/lang/StringBuffer","append(Ljava/lang/String;)Ljava/lang/StringBuffer;",b,a,182);S.push(v);
case 49: ip=49;S.pop();
case 50: ip=50;S.push(L[1]);
case 51: ip=51;S.push(L[0]);
case 52: ip=52;a=S.splice(S.length-1,1);b=S.pop();v=R.call("java/lang/StringBuffer","append(I)Ljava/lang/StringBuffer;",b,a,182);S.push(v);
case 55: ip=55;S.pop();
case 56: ip=56;S.push(L[1]);
case 57: ip=57;a=S.splice(S.length-0,0);b=S.pop();v=R.call("java/lang/StringBuffer","toString()Ljava/lang/String;",b,a,182);S.push(v);
case 60: ip=60;L[1]=S.pop();
case 61: ip=61;S.push(R.new("java/io/DataInputStream"));
case 64: ip=64;S.push(S[S.length-1]);
case 65: ip=65;S.push(R.staticGet("r","r.a:Lr;"));
case 68: ip=68;if(S.pop()!==null){pc=81;continue flow;}
case 71: ip=71;S.push(R.new("r"));
case 74: ip=74;S.push(S[S.length-1]);
case 75: ip=75;a=S.splice(S.length-0,0);b=S.pop();v=R.call("r","<init>()V",b,a,183);
case 78: ip=78;R.staticSet("r","r.a:Lr;",S.pop());
case 81: ip=81;S.push(R.staticGet("r","r.a:Lr;"));
case 84: ip=84;a=S.splice(S.length-0,0);b=S.pop();v=R.call("java/lang/Object","getClass()Ljava/lang/Class;",b,a,182);S.push(v);
case 87: ip=87;S.push(L[1]);
case 88: ip=88;a=S.splice(S.length-1,1);b=S.pop();v=R.call("java/lang/Class","getResourceAsStream(Ljava/lang/String;)Ljava/io/InputStream;",b,a,182);S.push(v);
case 91: ip=91;a=S.splice(S.length-1,1);b=S.pop();v=R.call("java/io/DataInputStream","<init>(Ljava/io/InputStream;)V",b,a,183);
case 94: ip=94;S.push(S[S.length-1]);
case 95: ip=95;L[1]=S.pop();
case 96: ip=96;a=S.splice(S.length-1,1);b=null;v=R.call("r","a(Ljava/io/DataInputStream;)Z",b,a,184);S.push(v);
case 99: ip=99;S.pop();
case 100: ip=100;S.push(L[1]);
case 101: ip=101;a=S.splice(S.length-0,0);b=S.pop();v=R.call("java/io/DataInputStream","close()V",b,a,182);
case 104: ip=104;pc=108;continue flow;
case 107: ip=107;S.pop();
case 108: ip=108;S.push(L[0]);
case 109: ip=109;R.staticSet("r","r.a:I",S.pop());
case 112: ip=112;return;
default:throw new Error("Invalid control flow r.a(I)V "+pc);
}}catch(error){
if(ip>=26&&ip<104&&R.catches(error,"java/lang/Exception")){S.length=0;S.push(error);pc=107;continue flow;}
throw error;}}});
// r.a(Ljava/io/DataInputStream;)Z
R.method("r","a(Ljava/io/DataInputStream;)Z",function(self,args){
const S=[], L=new Array(7).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=args[0];
flow: while(true){ try { switch(pc){
case 0: ip=0;S.push(null);
case 1: ip=1;R.staticSet("r","r.a:[I",S.pop());
case 4: ip=4;S.push(null);
case 5: ip=5;R.staticSet("r","r.a:[B",S.pop());
case 8: ip=8;S.push(null);
case 9: ip=9;R.staticSet("r","r.b:[B",S.pop());
case 12: ip=12;S.push(L[0]);
case 13: ip=13;if(S.pop()!==null){pc=22;continue flow;}
case 16: ip=16;S.push(-1);
case 17: ip=17;R.staticSet("r","r.a:I",S.pop());
case 20: ip=20;S.push(0);
case 21: ip=21;return S.pop();
case 22: ip=22;S.push(0);
case 23: ip=23;R.staticSet("r","r.a:I",S.pop());
case 26: ip=26;S.push(L[0]);
case 27: ip=27;a=S.splice(S.length-0,0);b=S.pop();v=R.call("java/io/DataInputStream","read()I",b,a,182);S.push(v);
case 30: ip=30;L[1]=S.pop();
case 31: ip=31;S.push(1);
case 32: ip=32;S.push(L[1]);
case 33: ip=33;S.push(1);
case 34: ip=34;b=S.pop();a=S.pop();S.push(a&b);
case 35: ip=35;b=S.pop();a=S.pop();S.push((a+b)|0);
case 36: ip=36;S.push(1);
case 37: ip=37;b=S.pop();a=S.pop();S.push(a<<b);
case 38: ip=38;L[2]=S.pop();
case 39: ip=39;S.push(L[0]);
case 40: ip=40;a=S.splice(S.length-0,0);b=S.pop();v=R.call("java/io/DataInputStream","readChar()C",b,a,182);S.push(v);
case 43: ip=43;L[1]=S.pop();
case 44: ip=44;S.push(L[2]);
case 45: ip=45;S.push(L[1]);
case 46: ip=46;b=S.pop();a=S.pop();S.push(Math.imul(a,b));
case 47: ip=47;S.push(R.array("B",S.pop()));
case 49: ip=49;L[3]=S.pop();
case 50: ip=50;S.push(L[0]);
case 51: ip=51;S.push(L[3]);
case 52: ip=52;a=S.splice(S.length-1,1);b=S.pop();v=R.call("java/io/DataInputStream","readFully([B)V",b,a,182);
case 55: ip=55;S.push(L[1]);
case 56: ip=56;S.push(R.array("I",S.pop()));
case 58: ip=58;R.staticSet("r","r.a:[I",S.pop());
case 61: ip=61;S.push(0);
case 62: ip=62;L[4]=S.pop();
case 64: ip=64;S.push(0);
case 65: ip=65;L[5]=S.pop();
case 67: ip=67;S.push(L[5]);
case 69: ip=69;S.push(L[1]);
case 70: ip=70;b=S.pop();a=S.pop();if(a>=b){pc=120;continue flow;}
case 73: ip=73;S.push(L[2]);
case 74: ip=74;S.push(1);
case 75: ip=75;b=S.pop();a=S.pop();S.push((a-b)|0);
case 76: ip=76;L[6]=S.pop();
case 78: ip=78;S.push(L[6]);
case 80: ip=80;if(S.pop()<0){pc=114;continue flow;}
case 83: ip=83;S.push(R.staticGet("r","r.a:[I"));
case 86: ip=86;S.push(L[5]);
case 88: ip=88;a=S.pop();if(typeof a==="bigint")S.push(a,a);else{b=S.pop();S.push(b,a,b,a);}
case 89: ip=89;b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 90: ip=90;S.push(255);
case 93: ip=93;S.push(L[3]);
case 94: ip=94;S.push(L[4]);
case 96: ip=96;L[4]=(L[4]+(1))|0;
case 99: ip=99;b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 100: ip=100;b=S.pop();a=S.pop();S.push(a&b);
case 101: ip=101;S.push(L[6]);
case 103: ip=103;S.push(3);
case 104: ip=104;b=S.pop();a=S.pop();S.push(a<<b);
case 105: ip=105;b=S.pop();a=S.pop();S.push(a<<b);
case 106: ip=106;b=S.pop();a=S.pop();S.push(a|b);
case 107: ip=107;v=S.pop();b=S.pop();a=S.pop();R.aset(a,b,v);
case 108: ip=108;L[6]=(L[6]+(-1))|0;
case 111: ip=111;pc=78;continue flow;
case 114: ip=114;L[5]=(L[5]+(1))|0;
case 117: ip=117;pc=67;continue flow;
case 120: ip=120;S.push(L[1]);
case 121: ip=121;S.push(R.array("B",S.pop()));
case 123: ip=123;R.staticSet("r","r.a:[B",S.pop());
case 126: ip=126;S.push(L[0]);
case 127: ip=127;S.push(R.staticGet("r","r.a:[B"));
case 130: ip=130;a=S.splice(S.length-1,1);b=S.pop();v=R.call("java/io/DataInputStream","readFully([B)V",b,a,182);
case 133: ip=133;S.push(L[0]);
case 134: ip=134;a=S.splice(S.length-0,0);b=S.pop();v=R.call("java/io/DataInputStream","readInt()I",b,a,182);S.push(v);
case 137: ip=137;S.push(R.array("B",S.pop()));
case 139: ip=139;R.staticSet("r","r.b:[B",S.pop());
case 142: ip=142;S.push(L[0]);
case 143: ip=143;S.push(R.staticGet("r","r.b:[B"));
case 146: ip=146;a=S.splice(S.length-1,1);b=S.pop();v=R.call("java/io/DataInputStream","readFully([B)V",b,a,182);
case 149: ip=149;S.push(1);
case 150: ip=150;L[0]=S.pop();
case 151: ip=151;pc=157;continue flow;
case 154: ip=154;S.pop();
case 155: ip=155;S.push(0);
case 156: ip=156;L[0]=S.pop();
case 157: ip=157;S.push(L[0]);
case 158: ip=158;return S.pop();
default:throw new Error("Invalid control flow r.a(Ljava/io/DataInputStream;)Z "+pc);
}}catch(error){
if(ip>=26&&ip<151&&R.catches(error,"java/lang/Exception")){S.length=0;S.push(error);pc=154;continue flow;}
throw error;}}});
// r.a(I)Lg;
R.method("r","a(I)Lg;",function(self,args){
const S=[], L=new Array(1).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=args[0];
flow: while(true){ try { switch(pc){
case 0: S.push(L[0]);
case 1: a=S.splice(S.length-1,1);b=null;v=R.call("g","a(I)Lg;",b,a,184);S.push(v);
case 4: return S.pop();
default:throw new Error("Invalid control flow r.a(I)Lg; "+pc);
}}catch(error){
throw error;}}});
// r.a([BII)Ljava/io/DataInputStream;
R.method("r","a([BII)Ljava/io/DataInputStream;",function(self,args){
const S=[], L=new Array(3).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=args[0];
L[1]=args[1];
L[2]=args[2];
flow: while(true){ try { switch(pc){
case 0: S.push(R.new("java/io/DataInputStream"));
case 3: S.push(S[S.length-1]);
case 4: S.push(R.new("java/io/ByteArrayInputStream"));
case 7: S.push(S[S.length-1]);
case 8: S.push(L[0]);
case 9: S.push(L[1]);
case 10: S.push(L[2]);
case 11: a=S.splice(S.length-3,3);b=S.pop();v=R.call("java/io/ByteArrayInputStream","<init>([BII)V",b,a,183);
case 14: a=S.splice(S.length-1,1);b=S.pop();v=R.call("java/io/DataInputStream","<init>(Ljava/io/InputStream;)V",b,a,183);
case 17: return S.pop();
default:throw new Error("Invalid control flow r.a([BII)Ljava/io/DataInputStream; "+pc);
}}catch(error){
throw error;}}});
// r.<clinit>()V
R.method("r","<clinit>()V",function(self,args){
const S=[], L=new Array(0).fill(null); let a,b,c,d,v,pc=0,ip=0;
flow: while(true){ try { switch(pc){
case 0: S.push(-1);
case 1: R.staticSet("r","r.a:I",S.pop());
case 4: return;
default:throw new Error("Invalid control flow r.<clinit>()V "+pc);
}}catch(error){
throw error;}}});
}
