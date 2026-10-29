// Generated offline by tools/compile_game.py. Source s.class
export default function register(R) {
R.define("s","javax/microedition/lcdui/Canvas",[{key:"s.a:Ljava/lang/String;",static:true,value:null},{key:"s.b:Ljava/lang/String;",static:true,value:null},{key:"s.a:[Z",static:true,value:null},{key:"s.b:[I",static:true,value:null},{key:"s.a:[[I",static:true,value:null},{key:"s.a:J",static:true,value:0n},{key:"s.d:I",static:true,value:0},{key:"s.e:I",static:true,value:0},{key:"s.c:Z",static:true,value:0},{key:"s.d:Z",static:true,value:0},{key:"s.e:Z",static:true,value:0},{key:"s.a:Ljavax/microedition/lcdui/Image;",static:true,value:null},{key:"s.f:Z",static:true,value:0},{key:"s.g:Z",static:true,value:0},{key:"s.a:Z",static:true,value:0},{key:"s.f:I",static:true,value:0},{key:"s.h:Z",static:true,value:0},{key:"s.c:Ljava/lang/String;",static:true,value:null},{key:"s.a:Ljava/lang/Thread;",static:true,value:null},{key:"s.b:J",static:false,value:0n},{key:"s.a:Ljavax/microedition/midlet/MIDlet;",static:true,value:null},{key:"s.a:Ll;",static:false,value:null},{key:"s.c:[I",static:true,value:null},{key:"s.a:[B",static:true,value:null},{key:"s.b:[B",static:true,value:null},{key:"s.g:I",static:true,value:0},{key:"s.h:I",static:true,value:0},{key:"s.b:Z",static:false,value:0},{key:"s.i:Z",static:false,value:0},{key:"s.c:[B",static:false,value:null},{key:"s.a:[C",static:false,value:null},{key:"s.a:[Lj;",static:false,value:null},{key:"s.b:[C",static:false,value:null},{key:"s.a:Ljavax/microedition/lcdui/Font;",static:false,value:null},{key:"s.a:Ljava/io/DataInputStream;",static:false,value:null},{key:"s.a:I",static:false,value:0},{key:"s.b:I",static:false,value:0},{key:"s.a:[I",static:true,value:null},{key:"s.d:[B",static:false,value:null},{key:"s.e:[B",static:false,value:null},{key:"s.j:Z",static:false,value:0},{key:"s.k:Z",static:false,value:0},{key:"s.c:I",static:false,value:0},{key:"s.i:I",static:false,value:0},{key:"s.j:I",static:false,value:0},{key:"s.l:Z",static:false,value:0},{key:"s.m:Z",static:false,value:0},{key:"s.n:Z",static:false,value:0},{key:"s.k:I",static:false,value:0},{key:"s.l:I",static:false,value:0},{key:"s.m:I",static:false,value:0},{key:"s.n:I",static:false,value:0},{key:"s.o:I",static:false,value:0},{key:"s.o:Z",static:false,value:0},{key:"s.p:Z",static:false,value:0},{key:"s.c:J",static:false,value:0n},{key:"s.p:I",static:false,value:0}]);
// s.a(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;
R.method("s","a(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;",function(self,args){
const S=[], L=new Array(4).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=args[0];
L[1]=args[1];
L[2]=args[2];
flow: while(true){ try { switch(pc){
case 0: S.push(null);
case 1: L[3]=S.pop();
case 2: S.push(0);
case 3: L[3]=S.pop();
case 4: S.push(L[0]);
case 5: S.push(L[1]);
case 6: a=S.splice(S.length-1,1);b=S.pop();v=R.call("java/lang/String","indexOf(Ljava/lang/String;)I",b,a,182);S.push(v);
case 9: S.push(S[S.length-1]);
case 10: L[3]=S.pop();
case 11: S.push(-1);
case 12: b=S.pop();a=S.pop();if(a===b){pc=55;continue flow;}
case 15: S.push(R.new("java/lang/StringBuffer"));
case 18: S.push(S[S.length-1]);
case 19: a=S.splice(S.length-0,0);b=S.pop();v=R.call("java/lang/StringBuffer","<init>()V",b,a,183);
case 22: S.push(L[0]);
case 23: S.push(0);
case 24: S.push(L[3]);
case 25: a=S.splice(S.length-2,2);b=S.pop();v=R.call("java/lang/String","substring(II)Ljava/lang/String;",b,a,182);S.push(v);
case 28: a=S.splice(S.length-1,1);b=S.pop();v=R.call("java/lang/StringBuffer","append(Ljava/lang/String;)Ljava/lang/StringBuffer;",b,a,182);S.push(v);
case 31: S.push(L[2]);
case 32: a=S.splice(S.length-1,1);b=S.pop();v=R.call("java/lang/StringBuffer","append(Ljava/lang/String;)Ljava/lang/StringBuffer;",b,a,182);S.push(v);
case 35: S.push(L[0]);
case 36: S.push(L[3]);
case 37: S.push(L[1]);
case 38: a=S.splice(S.length-0,0);b=S.pop();v=R.call("java/lang/String","length()I",b,a,182);S.push(v);
case 41: b=S.pop();a=S.pop();S.push((a+b)|0);
case 42: a=S.splice(S.length-1,1);b=S.pop();v=R.call("java/lang/String","substring(I)Ljava/lang/String;",b,a,182);S.push(v);
case 45: a=S.splice(S.length-1,1);b=S.pop();v=R.call("java/lang/StringBuffer","append(Ljava/lang/String;)Ljava/lang/StringBuffer;",b,a,182);S.push(v);
case 48: a=S.splice(S.length-0,0);b=S.pop();v=R.call("java/lang/StringBuffer","toString()Ljava/lang/String;",b,a,182);S.push(v);
case 51: L[3]=S.pop();
case 52: pc=57;continue flow;
case 55: S.push(L[0]);
case 56: L[3]=S.pop();
case 57: S.push(L[3]);
case 58: return S.pop();
default:throw new Error("Invalid control flow s.a(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String; "+pc);
}}catch(error){
throw error;}}});
// s.a(B)V
R.method("s","a(B)V",function(self,args){
const S=[], L=new Array(1).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=args[0];
flow: while(true){ try { switch(pc){
case 0: S.push(R.staticGet("s","s.b:[B"));
case 3: S.push(R.staticGet("s","s.h:I"));
case 6: S.push(L[0]);
case 7: v=S.pop();b=S.pop();a=S.pop();R.aset(a,b,v);
case 8: S.push(R.staticGet("s","s.h:I"));
case 11: S.push(1);
case 12: b=S.pop();a=S.pop();S.push((a+b)|0);
case 13: R.staticSet("s","s.h:I",S.pop());
case 16: return;
default:throw new Error("Invalid control flow s.a(B)V "+pc);
}}catch(error){
throw error;}}});
// s.a(S)V
R.method("s","a(S)V",function(self,args){
const S=[], L=new Array(1).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=args[0];
flow: while(true){ try { switch(pc){
case 0: S.push(R.staticGet("s","s.b:[B"));
case 3: S.push(R.staticGet("s","s.h:I"));
case 6: S.push(L[0]);
case 7: S.push(8);
case 9: b=S.pop();a=S.pop();S.push(a>>b);
case 10: S.push(S.pop()<<24>>24);
case 11: v=S.pop();b=S.pop();a=S.pop();R.aset(a,b,v);
case 12: S.push(R.staticGet("s","s.h:I"));
case 15: S.push(1);
case 16: b=S.pop();a=S.pop();S.push((a+b)|0);
case 17: R.staticSet("s","s.h:I",S.pop());
case 20: S.push(R.staticGet("s","s.b:[B"));
case 23: S.push(R.staticGet("s","s.h:I"));
case 26: S.push(L[0]);
case 27: S.push(S.pop()<<24>>24);
case 28: v=S.pop();b=S.pop();a=S.pop();R.aset(a,b,v);
case 29: S.push(R.staticGet("s","s.h:I"));
case 32: S.push(1);
case 33: b=S.pop();a=S.pop();S.push((a+b)|0);
case 34: R.staticSet("s","s.h:I",S.pop());
case 37: return;
default:throw new Error("Invalid control flow s.a(S)V "+pc);
}}catch(error){
throw error;}}});
// s.a(C)V
R.method("s","a(C)V",function(self,args){
const S=[], L=new Array(1).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=args[0];
flow: while(true){ try { switch(pc){
case 0: S.push(L[0]);
case 1: S.push(S.pop()<<16>>16);
case 2: a=S.splice(S.length-1,1);b=null;v=R.call("s","a(S)V",b,a,184);
case 5: return;
default:throw new Error("Invalid control flow s.a(C)V "+pc);
}}catch(error){
throw error;}}});
// s.a()B
R.method("s","a()B",function(self,args){
const S=[], L=new Array(0).fill(null); let a,b,c,d,v,pc=0,ip=0;
flow: while(true){ try { switch(pc){
case 0: S.push(R.staticGet("s","s.a:[B"));
case 3: S.push(R.staticGet("s","s.g:I"));
case 6: S.push(S[S.length-1]);
case 7: S.push(1);
case 8: b=S.pop();a=S.pop();S.push((a+b)|0);
case 9: R.staticSet("s","s.g:I",S.pop());
case 12: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 13: return S.pop();
default:throw new Error("Invalid control flow s.a()B "+pc);
}}catch(error){
throw error;}}});
// s.a()C
R.method("s","a()C",function(self,args){
const S=[], L=new Array(0).fill(null); let a,b,c,d,v,pc=0,ip=0;
flow: while(true){ try { switch(pc){
case 0: S.push(R.staticGet("s","s.a:[B"));
case 3: S.push(R.staticGet("s","s.g:I"));
case 6: S.push(S[S.length-1]);
case 7: S.push(1);
case 8: b=S.pop();a=S.pop();S.push((a+b)|0);
case 9: R.staticSet("s","s.g:I",S.pop());
case 12: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 13: S.push(8);
case 15: b=S.pop();a=S.pop();S.push(a<<b);
case 16: S.push(R.staticGet("s","s.a:[B"));
case 19: S.push(R.staticGet("s","s.g:I"));
case 22: S.push(S[S.length-1]);
case 23: S.push(1);
case 24: b=S.pop();a=S.pop();S.push((a+b)|0);
case 25: R.staticSet("s","s.g:I",S.pop());
case 28: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 29: S.push(255);
case 32: b=S.pop();a=S.pop();S.push(a&b);
case 33: b=S.pop();a=S.pop();S.push(a|b);
case 34: S.push(S.pop()&65535);
case 35: return S.pop();
default:throw new Error("Invalid control flow s.a()C "+pc);
}}catch(error){
throw error;}}});
// s.a(Ljava/lang/String;I)I
R.method("s","a(Ljava/lang/String;I)I",function(self,args){
const S=[], L=new Array(2).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=args[0];
L[1]=args[1];
flow: while(true){ try { switch(pc){
case 0: ip=0;S.push(L[0]);
case 1: ip=1;a=S.splice(S.length-1,1);b=null;v=R.call("java/lang/Integer","parseInt(Ljava/lang/String;)I",b,a,184);S.push(v);
case 4: ip=4;L[1]=S.pop();
case 5: ip=5;pc=9;continue flow;
case 8: ip=8;S.pop();
case 9: ip=9;S.push(L[1]);
case 10: ip=10;return S.pop();
default:throw new Error("Invalid control flow s.a(Ljava/lang/String;I)I "+pc);
}}catch(error){
if(ip>=0&&ip<5&&R.catches(error,"java/lang/Exception")){S.length=0;S.push(error);pc=8;continue flow;}
throw error;}}});
// s.a([II)V
R.method("s","a([II)V",function(self,args){
const S=[], L=new Array(6).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=args[0];
L[1]=args[1];
flow: while(true){ try { switch(pc){
case 0: S.push(L[1]);
case 1: L[2]=S.pop();
case 2: L[1]=(L[1]+(-1))|0;
case 5: S.push(L[2]);
case 6: S.push(1);
case 7: b=S.pop();a=S.pop();if(a===b){pc=19;continue flow;}
case 10: S.push(L[2]);
case 11: S.push(197);
case 14: b=S.pop();a=S.pop();S.push(Math.imul(a,b));
case 15: S.push(8);
case 17: b=S.pop();a=S.pop();S.push(a>>b);
case 18: L[2]=S.pop();
case 19: S.push(0);
case 20: L[3]=S.pop();
case 21: S.push(L[1]);
case 22: S.push(L[2]);
case 23: b=S.pop();a=S.pop();S.push((a-b)|0);
case 24: L[4]=S.pop();
case 26: S.push(L[1]);
case 27: L[5]=S.pop();
case 29: S.push(L[4]);
case 31: if(S.pop()<0){pc=74;continue flow;}
case 34: S.push(L[0]);
case 35: S.push(L[4]);
case 37: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 38: S.push(L[0]);
case 39: S.push(L[5]);
case 41: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 42: b=S.pop();a=S.pop();if(a<=b){pc=65;continue flow;}
case 45: S.push(L[0]);
case 46: S.push(L[4]);
case 48: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 49: L[3]=S.pop();
case 50: S.push(L[0]);
case 51: S.push(L[4]);
case 53: S.push(L[0]);
case 54: S.push(L[5]);
case 56: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 57: v=S.pop();b=S.pop();a=S.pop();R.aset(a,b,v);
case 58: S.push(L[0]);
case 59: S.push(L[5]);
case 61: S.push(L[3]);
case 62: v=S.pop();b=S.pop();a=S.pop();R.aset(a,b,v);
case 63: S.push(1);
case 64: L[3]=S.pop();
case 65: L[4]=(L[4]+(-1))|0;
case 68: L[5]=(L[5]+(-1))|0;
case 71: pc=29;continue flow;
case 74: S.push(L[3]);
case 75: if(S.pop()!==0){pc=5;continue flow;}
case 78: S.push(L[2]);
case 79: S.push(1);
case 80: b=S.pop();a=S.pop();if(a>b){pc=5;continue flow;}
case 83: return;
default:throw new Error("Invalid control flow s.a([II)V "+pc);
}}catch(error){
throw error;}}});
// s.a(I)[B
R.method("s","a(I)[B",function(self,args){
const S=[], L=new Array(5).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=args[0];
flow: while(true){ try { switch(pc){
case 0: ip=0;S.push(null);
case 1: ip=1;L[0]=S.pop();
case 2: ip=2;S.push(1);
case 3: ip=3;a=S.splice(S.length-1,1);b=null;v=R.call("java/lang/String","valueOf(I)Ljava/lang/String;",b,a,184);S.push(v);
case 6: ip=6;S.push(0);
case 7: ip=7;a=S.splice(S.length-2,2);b=null;v=R.call("javax/microedition/rms/RecordStore","openRecordStore(Ljava/lang/String;Z)Ljavax/microedition/rms/RecordStore;",b,a,184);S.push(v);
case 10: ip=10;S.push(S[S.length-1]);
case 11: ip=11;L[0]=S.pop();
case 12: ip=12;a=S.splice(S.length-0,0);b=S.pop();v=R.call("javax/microedition/rms/RecordStore","getNumRecords()I",b,a,182);S.push(v);
case 15: ip=15;L[2]=S.pop();
case 16: ip=16;S.push(0);
case 17: ip=17;L[3]=S.pop();
case 18: ip=18;S.push(1);
case 19: ip=19;L[4]=S.pop();
case 21: ip=21;S.push(L[4]);
case 23: ip=23;S.push(L[2]);
case 24: ip=24;b=S.pop();a=S.pop();if(a>b){pc=42;continue flow;}
case 27: ip=27;S.push(L[3]);
case 28: ip=28;S.push(L[0]);
case 29: ip=29;S.push(L[4]);
case 31: ip=31;a=S.splice(S.length-1,1);b=S.pop();v=R.call("javax/microedition/rms/RecordStore","getRecordSize(I)I",b,a,182);S.push(v);
case 34: ip=34;b=S.pop();a=S.pop();S.push((a+b)|0);
case 35: ip=35;L[3]=S.pop();
case 36: ip=36;L[4]=(L[4]+(1))|0;
case 39: ip=39;pc=21;continue flow;
case 42: ip=42;S.push(L[3]);
case 43: ip=43;S.push(R.array("B",S.pop()));
case 45: ip=45;L[1]=S.pop();
case 46: ip=46;S.push(0);
case 47: ip=47;L[3]=S.pop();
case 48: ip=48;S.push(1);
case 49: ip=49;L[4]=S.pop();
case 51: ip=51;S.push(L[4]);
case 53: ip=53;S.push(L[2]);
case 54: ip=54;b=S.pop();a=S.pop();if(a>b){pc=74;continue flow;}
case 57: ip=57;S.push(L[3]);
case 58: ip=58;S.push(L[0]);
case 59: ip=59;S.push(L[4]);
case 61: ip=61;S.push(L[1]);
case 62: ip=62;S.push(L[3]);
case 63: ip=63;a=S.splice(S.length-3,3);b=S.pop();v=R.call("javax/microedition/rms/RecordStore","getRecord(I[BI)I",b,a,182);S.push(v);
case 66: ip=66;b=S.pop();a=S.pop();S.push((a+b)|0);
case 67: ip=67;L[3]=S.pop();
case 68: ip=68;L[4]=(L[4]+(1))|0;
case 71: ip=71;pc=51;continue flow;
case 74: ip=74;pc=80;continue flow;
case 77: ip=77;S.pop();
case 78: ip=78;S.push(null);
case 79: ip=79;L[1]=S.pop();
case 80: ip=80;S.push(L[0]);
case 81: ip=81;if(S.pop()===null){pc=92;continue flow;}
case 84: ip=84;S.push(L[0]);
case 85: ip=85;a=S.splice(S.length-0,0);b=S.pop();v=R.call("javax/microedition/rms/RecordStore","closeRecordStore()V",b,a,182);
case 88: ip=88;pc=92;continue flow;
case 91: ip=91;S.pop();
case 92: ip=92;S.push(L[1]);
case 93: ip=93;return S.pop();
default:throw new Error("Invalid control flow s.a(I)[B "+pc);
}}catch(error){
if(ip>=2&&ip<74&&R.catches(error,"java/lang/Throwable")){S.length=0;S.push(error);pc=77;continue flow;}
if(ip>=84&&ip<88&&R.catches(error,"java/lang/Throwable")){S.length=0;S.push(error);pc=91;continue flow;}
throw error;}}});
// s.a(I[B)Z
R.method("s","a(I[B)Z",function(self,args){
const S=[], L=new Array(7).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=args[0];
L[1]=args[1];
flow: while(true){ try { switch(pc){
case 0: ip=0;S.push(1);
case 1: ip=1;a=S.splice(S.length-1,1);b=null;v=R.call("java/lang/String","valueOf(I)Ljava/lang/String;",b,a,184);S.push(v);
case 4: ip=4;L[0]=S.pop();
case 5: ip=5;S.push(null);
case 6: ip=6;L[2]=S.pop();
case 7: ip=7;S.push(1);
case 8: ip=8;L[3]=S.pop();
case 9: ip=9;a=S.splice(S.length-0,0);b=null;v=R.call("javax/microedition/rms/RecordStore","listRecordStores()[Ljava/lang/String;",b,a,184);S.push(v);
case 12: ip=12;S.push(S[S.length-1]);
case 13: ip=13;L[4]=S.pop();
case 15: ip=15;if(S.pop()===null){pc=54;continue flow;}
case 18: ip=18;S.push(0);
case 19: ip=19;L[5]=S.pop();
case 21: ip=21;S.push(L[5]);
case 23: ip=23;S.push(L[4]);
case 25: ip=25;S.push(R.length(S.pop()));
case 26: ip=26;b=S.pop();a=S.pop();if(a>=b){pc=54;continue flow;}
case 29: ip=29;S.push(L[0]);
case 30: ip=30;S.push(L[4]);
case 32: ip=32;S.push(L[5]);
case 34: ip=34;b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 35: ip=35;a=S.splice(S.length-1,1);b=S.pop();v=R.call("java/lang/String","equals(Ljava/lang/Object;)Z",b,a,182);S.push(v);
case 38: ip=38;if(S.pop()===0){pc=48;continue flow;}
case 41: ip=41;S.push(L[0]);
case 42: ip=42;a=S.splice(S.length-1,1);b=null;v=R.call("javax/microedition/rms/RecordStore","deleteRecordStore(Ljava/lang/String;)V",b,a,184);
case 45: ip=45;pc=54;continue flow;
case 48: ip=48;L[5]=(L[5]+(1))|0;
case 51: ip=51;pc=21;continue flow;
case 54: ip=54;S.push(L[1]);
case 55: ip=55;if(S.pop()===null){pc=124;continue flow;}
case 58: ip=58;S.push(L[0]);
case 59: ip=59;S.push(1);
case 60: ip=60;a=S.splice(S.length-2,2);b=null;v=R.call("javax/microedition/rms/RecordStore","openRecordStore(Ljava/lang/String;Z)Ljavax/microedition/rms/RecordStore;",b,a,184);S.push(v);
case 63: ip=63;L[2]=S.pop();
case 64: ip=64;S.push(L[1]);
case 65: ip=65;S.push(R.length(S.pop()));
case 66: ip=66;S.push(786432);
case 68: ip=68;b=S.pop();a=S.pop();S.push((a+b)|0);
case 69: ip=69;S.push(1);
case 70: ip=70;b=S.pop();a=S.pop();S.push((a-b)|0);
case 71: ip=71;S.push(786432);
case 73: ip=73;b=S.pop();a=S.pop();S.push(R.idiv(a,b));
case 74: ip=74;L[5]=S.pop();
case 76: ip=76;S.push(0);
case 77: ip=77;L[0]=S.pop();
case 78: ip=78;S.push(1);
case 79: ip=79;L[4]=S.pop();
case 81: ip=81;S.push(L[4]);
case 83: ip=83;S.push(L[5]);
case 85: ip=85;b=S.pop();a=S.pop();if(a>b){pc=124;continue flow;}
case 88: ip=88;S.push(L[1]);
case 89: ip=89;S.push(R.length(S.pop()));
case 90: ip=90;S.push(L[0]);
case 91: ip=91;b=S.pop();a=S.pop();S.push((a-b)|0);
case 92: ip=92;S.push(S[S.length-1]);
case 93: ip=93;L[6]=S.pop();
case 95: ip=95;S.push(786432);
case 97: ip=97;b=S.pop();a=S.pop();if(a<=b){pc=104;continue flow;}
case 100: ip=100;S.push(786432);
case 102: ip=102;L[6]=S.pop();
case 104: ip=104;S.push(L[2]);
case 105: ip=105;S.push(L[1]);
case 106: ip=106;S.push(L[0]);
case 107: ip=107;S.push(L[6]);
case 109: ip=109;a=S.splice(S.length-3,3);b=S.pop();v=R.call("javax/microedition/rms/RecordStore","addRecord([BII)I",b,a,182);S.push(v);
case 112: ip=112;S.pop();
case 113: ip=113;S.push(L[0]);
case 114: ip=114;S.push(L[6]);
case 116: ip=116;b=S.pop();a=S.pop();S.push((a+b)|0);
case 117: ip=117;L[0]=S.pop();
case 118: ip=118;L[4]=(L[4]+(1))|0;
case 121: ip=121;pc=81;continue flow;
case 124: ip=124;pc=130;continue flow;
case 127: ip=127;S.pop();
case 128: ip=128;S.push(0);
case 129: ip=129;L[3]=S.pop();
case 130: ip=130;S.push(L[2]);
case 131: ip=131;if(S.pop()===null){pc=142;continue flow;}
case 134: ip=134;S.push(L[2]);
case 135: ip=135;a=S.splice(S.length-0,0);b=S.pop();v=R.call("javax/microedition/rms/RecordStore","closeRecordStore()V",b,a,182);
case 138: ip=138;pc=142;continue flow;
case 141: ip=141;S.pop();
case 142: ip=142;S.push(L[3]);
case 143: ip=143;return S.pop();
default:throw new Error("Invalid control flow s.a(I[B)Z "+pc);
}}catch(error){
if(ip>=9&&ip<124&&R.catches(error,"java/lang/Throwable")){S.length=0;S.push(error);pc=127;continue flow;}
if(ip>=134&&ip<138&&R.catches(error,"java/lang/Throwable")){S.length=0;S.push(error);pc=141;continue flow;}
throw error;}}});
// s.k()V
R.method("s","k()V",function(self,args){
const S=[], L=new Array(1).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=self;
flow: while(true){ try { switch(pc){
case 0: S.push(L[0]);
case 1: a=S.pop();S.push(R.get(a,"s.b:Z"));
case 4: if(S.pop()!==0){pc=17;continue flow;}
case 7: S.push(L[0]);
case 8: S.push(1);
case 9: v=S.pop();a=S.pop();R.set(a,"s.b:Z",v);
case 12: S.push(L[0]);
case 13: S.push(1);
case 14: v=S.pop();a=S.pop();R.set(a,"s.i:Z",v);
case 17: return;
default:throw new Error("Invalid control flow s.k()V "+pc);
}}catch(error){
throw error;}}});
// s.a(I)Ljava/lang/String;
R.method("s","a(I)Ljava/lang/String;",function(self,args){
const S=[], L=new Array(12).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=self;
L[1]=args[0];
flow: while(true){ try { switch(pc){
case 0: ip=0;S.push(L[1]);
case 1: ip=1;S.push(5);
case 2: ip=2;b=S.pop();a=S.pop();if(a!==b){pc=28;continue flow;}
case 5: ip=5;S.push(R.staticGet("s","s.c:Ljava/lang/String;"));
case 8: ip=8;if(S.pop()===null){pc=28;continue flow;}
case 11: ip=11;S.push(R.staticGet("s","s.c:Ljava/lang/String;"));
case 14: ip=14;a=S.splice(S.length-0,0);b=S.pop();v=R.call("java/lang/String","length()I",b,a,182);S.push(v);
case 17: ip=17;S.push(1);
case 18: ip=18;b=S.pop();a=S.pop();if(a<=b){pc=28;continue flow;}
case 21: ip=21;S.push(R.staticGet("s","s.c:Ljava/lang/String;"));
case 24: ip=24;a=S.splice(S.length-0,0);b=S.pop();v=R.call("java/lang/String","trim()Ljava/lang/String;",b,a,182);S.push(v);
case 27: ip=27;return S.pop();
case 28: ip=28;S.push(L[0]);
case 29: ip=29;a=S.pop();S.push(R.get(a,"s.a:[C"));
case 32: ip=32;S.push(L[1]);
case 33: ip=33;b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 34: ip=34;L[2]=S.pop();
case 35: ip=35;S.push(L[0]);
case 36: ip=36;a=S.pop();S.push(R.get(a,"s.a:[C"));
case 39: ip=39;S.push(L[1]);
case 40: ip=40;S.push(1);
case 41: ip=41;b=S.pop();a=S.pop();S.push((a+b)|0);
case 42: ip=42;b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 43: ip=43;S.push(L[2]);
case 44: ip=44;b=S.pop();a=S.pop();S.push((a-b)|0);
case 45: ip=45;L[3]=S.pop();
case 46: ip=46;S.push(L[0]);
case 47: ip=47;a=S.pop();S.push(R.get(a,"s.a:[C"));
case 50: ip=50;S.push(0);
case 51: ip=51;b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 52: ip=52;if(S.pop()===0){pc=58;continue flow;}
case 55: ip=55;L[3]=(L[3]+(-2))|0;
case 58: ip=58;S.push(null);
case 59: ip=59;L[4]=S.pop();
case 61: ip=61;S.push(L[0]);
case 62: ip=62;a=S.pop();S.push(R.get(a,"s.c:[B"));
case 65: ip=65;S.push(L[2]);
case 66: ip=66;S.push(L[3]);
case 67: ip=67;L[5]=S.pop();
case 69: ip=69;L[3]=S.pop();
case 70: ip=70;L[2]=S.pop();
case 71: ip=71;S.push(L[5]);
case 73: ip=73;S.push(R.array("C",S.pop()));
case 75: ip=75;L[6]=S.pop();
case 77: ip=77;S.push(0);
case 78: ip=78;L[7]=S.pop();
case 80: ip=80;S.push(0);
case 81: ip=81;L[8]=S.pop();
case 83: ip=83;S.push(L[7]);
case 85: ip=85;S.push(L[5]);
case 87: ip=87;b=S.pop();a=S.pop();if(a>=b){pc=125;continue flow;}
case 90: ip=90;S.push(L[2]);
case 91: ip=91;S.push(L[3]);
case 92: ip=92;S.push(L[7]);
case 94: ip=94;b=S.pop();a=S.pop();S.push((a+b)|0);
case 95: ip=95;b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 96: ip=96;S.push(255);
case 99: ip=99;b=S.pop();a=S.pop();S.push(a&b);
case 100: ip=100;S.push(S[S.length-1]);
case 101: ip=101;L[9]=S.pop();
case 103: ip=103;S.push(127);
case 105: ip=105;b=S.pop();a=S.pop();if(a>b){pc=125;continue flow;}
case 108: ip=108;L[7]=(L[7]+(1))|0;
case 111: ip=111;S.push(L[6]);
case 113: ip=113;S.push(L[8]);
case 115: ip=115;L[8]=(L[8]+(1))|0;
case 118: ip=118;S.push(L[9]);
case 120: ip=120;S.push(S.pop()&65535);
case 121: ip=121;v=S.pop();b=S.pop();a=S.pop();R.aset(a,b,v);
case 122: ip=122;pc=83;continue flow;
case 125: ip=125;S.push(L[7]);
case 127: ip=127;S.push(L[5]);
case 129: ip=129;b=S.pop();a=S.pop();if(a>=b){pc=334;continue flow;}
case 132: ip=132;S.push(L[2]);
case 133: ip=133;S.push(L[3]);
case 134: ip=134;S.push(L[7]);
case 136: ip=136;b=S.pop();a=S.pop();S.push((a+b)|0);
case 137: ip=137;b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 138: ip=138;S.push(255);
case 141: ip=141;b=S.pop();a=S.pop();S.push(a&b);
case 142: ip=142;S.push(S[S.length-1]);
case 143: ip=143;L[9]=S.pop();
case 145: ip=145;S.push(4);
case 146: ip=146;b=S.pop();a=S.pop();S.push(a>>b);
case 147: ip=147;switch(S.pop()){case 0:pc=220;break;case 1:pc=220;break;case 2:pc=220;break;case 3:pc=220;break;case 4:pc=220;break;case 5:pc=220;break;case 6:pc=220;break;case 7:pc=220;break;case 8:pc=331;break;case 9:pc=331;break;case 10:pc=331;break;case 11:pc=331;break;case 12:pc=237;break;case 13:pc=237;break;case 14:pc=276;break;default:pc=331;}continue flow;
case 220: ip=220;L[7]=(L[7]+(1))|0;
case 223: ip=223;S.push(L[6]);
case 225: ip=225;S.push(L[8]);
case 227: ip=227;L[8]=(L[8]+(1))|0;
case 230: ip=230;S.push(L[9]);
case 232: ip=232;S.push(S.pop()&65535);
case 233: ip=233;v=S.pop();b=S.pop();a=S.pop();R.aset(a,b,v);
case 234: ip=234;pc=125;continue flow;
case 237: ip=237;L[7]=(L[7]+(2))|0;
case 240: ip=240;S.push(L[2]);
case 241: ip=241;S.push(L[3]);
case 242: ip=242;S.push(L[7]);
case 244: ip=244;b=S.pop();a=S.pop();S.push((a+b)|0);
case 245: ip=245;S.push(1);
case 246: ip=246;b=S.pop();a=S.pop();S.push((a-b)|0);
case 247: ip=247;b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 248: ip=248;L[10]=S.pop();
case 250: ip=250;S.push(L[6]);
case 252: ip=252;S.push(L[8]);
case 254: ip=254;L[8]=(L[8]+(1))|0;
case 257: ip=257;S.push(L[9]);
case 259: ip=259;S.push(31);
case 261: ip=261;b=S.pop();a=S.pop();S.push(a&b);
case 262: ip=262;S.push(6);
case 264: ip=264;b=S.pop();a=S.pop();S.push(a<<b);
case 265: ip=265;S.push(L[10]);
case 267: ip=267;S.push(63);
case 269: ip=269;b=S.pop();a=S.pop();S.push(a&b);
case 270: ip=270;b=S.pop();a=S.pop();S.push(a|b);
case 271: ip=271;S.push(S.pop()&65535);
case 272: ip=272;v=S.pop();b=S.pop();a=S.pop();R.aset(a,b,v);
case 273: ip=273;pc=125;continue flow;
case 276: ip=276;L[7]=(L[7]+(3))|0;
case 279: ip=279;S.push(L[2]);
case 280: ip=280;S.push(L[3]);
case 281: ip=281;S.push(L[7]);
case 283: ip=283;b=S.pop();a=S.pop();S.push((a+b)|0);
case 284: ip=284;S.push(2);
case 285: ip=285;b=S.pop();a=S.pop();S.push((a-b)|0);
case 286: ip=286;b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 287: ip=287;L[10]=S.pop();
case 289: ip=289;S.push(L[2]);
case 290: ip=290;S.push(L[3]);
case 291: ip=291;S.push(L[7]);
case 293: ip=293;b=S.pop();a=S.pop();S.push((a+b)|0);
case 294: ip=294;S.push(1);
case 295: ip=295;b=S.pop();a=S.pop();S.push((a-b)|0);
case 296: ip=296;b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 297: ip=297;L[11]=S.pop();
case 299: ip=299;S.push(L[6]);
case 301: ip=301;S.push(L[8]);
case 303: ip=303;L[8]=(L[8]+(1))|0;
case 306: ip=306;S.push(L[9]);
case 308: ip=308;S.push(15);
case 310: ip=310;b=S.pop();a=S.pop();S.push(a&b);
case 311: ip=311;S.push(12);
case 313: ip=313;b=S.pop();a=S.pop();S.push(a<<b);
case 314: ip=314;S.push(L[10]);
case 316: ip=316;S.push(63);
case 318: ip=318;b=S.pop();a=S.pop();S.push(a&b);
case 319: ip=319;S.push(6);
case 321: ip=321;b=S.pop();a=S.pop();S.push(a<<b);
case 322: ip=322;b=S.pop();a=S.pop();S.push(a|b);
case 323: ip=323;S.push(L[11]);
case 325: ip=325;S.push(63);
case 327: ip=327;b=S.pop();a=S.pop();S.push(a&b);
case 328: ip=328;b=S.pop();a=S.pop();S.push(a|b);
case 329: ip=329;S.push(S.pop()&65535);
case 330: ip=330;v=S.pop();b=S.pop();a=S.pop();R.aset(a,b,v);
case 331: ip=331;pc=125;continue flow;
case 334: ip=334;S.push(R.new("java/lang/String"));
case 337: ip=337;S.push(S[S.length-1]);
case 338: ip=338;S.push(L[6]);
case 340: ip=340;S.push(0);
case 341: ip=341;S.push(L[8]);
case 343: ip=343;a=S.splice(S.length-3,3);b=S.pop();v=R.call("java/lang/String","<init>([CII)V",b,a,183);
case 346: ip=346;S.push(S[S.length-1]);
case 347: ip=347;L[4]=S.pop();
case 349: ip=349;S.push("%U");
case 351: ip=351;a=S.splice(S.length-1,1);b=S.pop();v=R.call("java/lang/String","indexOf(Ljava/lang/String;)I",b,a,182);S.push(v);
case 354: ip=354;S.push(-1);
case 355: ip=355;b=S.pop();a=S.pop();if(a===b){pc=370;continue flow;}
case 358: ip=358;S.push(L[4]);
case 360: ip=360;S.push("%U");
case 362: ip=362;S.push(R.staticGet("s","s.a:Ljava/lang/String;"));
case 365: ip=365;a=S.splice(S.length-3,3);b=null;v=R.call("s","a(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;",b,a,184);S.push(v);
case 368: ip=368;L[4]=S.pop();
case 370: ip=370;S.push(L[4]);
case 372: ip=372;S.push("%S");
case 374: ip=374;a=S.splice(S.length-1,1);b=S.pop();v=R.call("java/lang/String","indexOf(Ljava/lang/String;)I",b,a,182);S.push(v);
case 377: ip=377;S.push(-1);
case 378: ip=378;b=S.pop();a=S.pop();if(a===b){pc=393;continue flow;}
case 381: ip=381;S.push(L[4]);
case 383: ip=383;S.push("%S");
case 385: ip=385;S.push(R.staticGet("s","s.b:Ljava/lang/String;"));
case 388: ip=388;a=S.splice(S.length-3,3);b=null;v=R.call("s","a(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;",b,a,184);S.push(v);
case 391: ip=391;L[4]=S.pop();
case 393: ip=393;S.push(L[1]);
case 394: ip=394;S.push(69);
case 396: ip=396;b=S.pop();a=S.pop();if(a!==b){pc=547;continue flow;}
case 399: ip=399;S.push(R.staticGet("s","s.g:Z"));
case 402: ip=402;if(S.pop()===0){pc=480;continue flow;}
case 405: ip=405;S.push(L[4]);
case 407: ip=407;S.push(L[4]);
case 409: ip=409;S.push(L[4]);
case 411: ip=411;S.push(10);
case 413: ip=413;a=S.splice(S.length-1,1);b=S.pop();v=R.call("java/lang/String","lastIndexOf(I)I",b,a,182);S.push(v);
case 416: ip=416;S.push(L[4]);
case 418: ip=418;a=S.splice(S.length-0,0);b=S.pop();v=R.call("java/lang/String","length()I",b,a,182);S.push(v);
case 421: ip=421;a=S.splice(S.length-2,2);b=S.pop();v=R.call("java/lang/String","substring(II)Ljava/lang/String;",b,a,182);S.push(v);
case 424: ip=424;S.push(L[0]);
case 425: ip=425;S.push(231);
case 428: ip=428;a=S.splice(S.length-1,1);b=S.pop();v=R.call("s","a(I)Ljava/lang/String;",b,a,182);S.push(v);
case 431: ip=431;a=S.splice(S.length-3,3);b=null;v=R.call("s","a(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;",b,a,184);S.push(v);
case 434: ip=434;S.push(S[S.length-1]);
case 435: ip=435;S.push(S[S.length-1]);
case 436: ip=436;S.push(S[S.length-1]);
case 437: ip=437;L[4]=S.pop();
case 439: ip=439;S.push("%D");
case 441: ip=441;a=S.splice(S.length-1,1);b=S.pop();v=R.call("java/lang/String","indexOf(Ljava/lang/String;)I",b,a,182);S.push(v);
case 444: ip=444;S.push(L[4]);
case 446: ip=446;S.push("%D");
case 448: ip=448;S.push(L[4]);
case 450: ip=450;S.push("%D");
case 452: ip=452;a=S.splice(S.length-1,1);b=S.pop();v=R.call("java/lang/String","indexOf(Ljava/lang/String;)I",b,a,182);S.push(v);
case 455: ip=455;S.push(1);
case 456: ip=456;b=S.pop();a=S.pop();S.push((a+b)|0);
case 457: ip=457;a=S.splice(S.length-2,2);b=S.pop();v=R.call("java/lang/String","indexOf(Ljava/lang/String;I)I",b,a,182);S.push(v);
case 460: ip=460;S.push(2);
case 461: ip=461;b=S.pop();a=S.pop();S.push((a+b)|0);
case 462: ip=462;a=S.splice(S.length-2,2);b=S.pop();v=R.call("java/lang/String","substring(II)Ljava/lang/String;",b,a,182);S.push(v);
case 465: ip=465;S.push(L[0]);
case 466: ip=466;S.push(232);
case 469: ip=469;a=S.splice(S.length-1,1);b=S.pop();v=R.call("s","a(I)Ljava/lang/String;",b,a,182);S.push(v);
case 472: ip=472;a=S.splice(S.length-3,3);b=null;v=R.call("s","a(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;",b,a,184);S.push(v);
case 475: ip=475;L[4]=S.pop();
case 477: ip=477;pc=547;continue flow;
case 480: ip=480;S.push(L[4]);
case 482: ip=482;S.push(L[4]);
case 484: ip=484;S.push(L[4]);
case 486: ip=486;S.push("%D");
case 488: ip=488;a=S.splice(S.length-1,1);b=S.pop();v=R.call("java/lang/String","indexOf(Ljava/lang/String;)I",b,a,182);S.push(v);
case 491: ip=491;S.push(L[4]);
case 493: ip=493;S.push("%D");
case 495: ip=495;S.push(L[4]);
case 497: ip=497;S.push("%D");
case 499: ip=499;a=S.splice(S.length-1,1);b=S.pop();v=R.call("java/lang/String","indexOf(Ljava/lang/String;)I",b,a,182);S.push(v);
case 502: ip=502;S.push(1);
case 503: ip=503;b=S.pop();a=S.pop();S.push((a+b)|0);
case 504: ip=504;a=S.splice(S.length-2,2);b=S.pop();v=R.call("java/lang/String","indexOf(Ljava/lang/String;I)I",b,a,182);S.push(v);
case 507: ip=507;S.push(2);
case 508: ip=508;b=S.pop();a=S.pop();S.push((a+b)|0);
case 509: ip=509;a=S.splice(S.length-2,2);b=S.pop();v=R.call("java/lang/String","substring(II)Ljava/lang/String;",b,a,182);S.push(v);
case 512: ip=512;S.push(L[4]);
case 514: ip=514;S.push(L[4]);
case 516: ip=516;S.push("%D");
case 518: ip=518;a=S.splice(S.length-1,1);b=S.pop();v=R.call("java/lang/String","indexOf(Ljava/lang/String;)I",b,a,182);S.push(v);
case 521: ip=521;S.push(2);
case 522: ip=522;b=S.pop();a=S.pop();S.push((a+b)|0);
case 523: ip=523;S.push(L[4]);
case 525: ip=525;S.push("%D");
case 527: ip=527;S.push(L[4]);
case 529: ip=529;S.push("%D");
case 531: ip=531;a=S.splice(S.length-1,1);b=S.pop();v=R.call("java/lang/String","indexOf(Ljava/lang/String;)I",b,a,182);S.push(v);
case 534: ip=534;S.push(1);
case 535: ip=535;b=S.pop();a=S.pop();S.push((a+b)|0);
case 536: ip=536;a=S.splice(S.length-2,2);b=S.pop();v=R.call("java/lang/String","indexOf(Ljava/lang/String;I)I",b,a,182);S.push(v);
case 539: ip=539;a=S.splice(S.length-2,2);b=S.pop();v=R.call("java/lang/String","substring(II)Ljava/lang/String;",b,a,182);S.push(v);
case 542: ip=542;a=S.splice(S.length-3,3);b=null;v=R.call("s","a(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;",b,a,184);S.push(v);
case 545: ip=545;L[4]=S.pop();
case 547: ip=547;S.push(R.staticGet("s","s.g:Z"));
case 550: ip=550;if(S.pop()===0){pc=617;continue flow;}
case 553: ip=553;S.push(L[1]);
case 554: ip=554;S.push(110);
case 556: ip=556;b=S.pop();a=S.pop();if(a!==b){pc=617;continue flow;}
case 559: ip=559;S.push(L[4]);
case 561: ip=561;S.push("%D");
case 563: ip=563;a=S.splice(S.length-1,1);b=S.pop();v=R.call("java/lang/String","indexOf(Ljava/lang/String;)I",b,a,182);S.push(v);
case 566: ip=566;S.push(-1);
case 567: ip=567;b=S.pop();a=S.pop();if(a===b){pc=695;continue flow;}
case 570: ip=570;S.push(L[4]);
case 572: ip=572;S.push(L[4]);
case 574: ip=574;S.push(L[4]);
case 576: ip=576;S.push("%D");
case 578: ip=578;a=S.splice(S.length-1,1);b=S.pop();v=R.call("java/lang/String","indexOf(Ljava/lang/String;)I",b,a,182);S.push(v);
case 581: ip=581;S.push(L[4]);
case 583: ip=583;S.push("%D");
case 585: ip=585;S.push(L[4]);
case 587: ip=587;S.push("%D");
case 589: ip=589;a=S.splice(S.length-1,1);b=S.pop();v=R.call("java/lang/String","indexOf(Ljava/lang/String;)I",b,a,182);S.push(v);
case 592: ip=592;S.push(1);
case 593: ip=593;b=S.pop();a=S.pop();S.push((a+b)|0);
case 594: ip=594;a=S.splice(S.length-2,2);b=S.pop();v=R.call("java/lang/String","indexOf(Ljava/lang/String;I)I",b,a,182);S.push(v);
case 597: ip=597;S.push(2);
case 598: ip=598;b=S.pop();a=S.pop();S.push((a+b)|0);
case 599: ip=599;a=S.splice(S.length-2,2);b=S.pop();v=R.call("java/lang/String","substring(II)Ljava/lang/String;",b,a,182);S.push(v);
case 602: ip=602;S.push(L[0]);
case 603: ip=603;S.push(232);
case 606: ip=606;a=S.splice(S.length-1,1);b=S.pop();v=R.call("s","a(I)Ljava/lang/String;",b,a,182);S.push(v);
case 609: ip=609;a=S.splice(S.length-3,3);b=null;v=R.call("s","a(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;",b,a,184);S.push(v);
case 612: ip=612;L[4]=S.pop();
case 614: ip=614;pc=699;continue flow;
case 617: ip=617;S.push(L[4]);
case 619: ip=619;S.push("%D");
case 621: ip=621;a=S.splice(S.length-1,1);b=S.pop();v=R.call("java/lang/String","indexOf(Ljava/lang/String;)I",b,a,182);S.push(v);
case 624: ip=624;S.push(-1);
case 625: ip=625;b=S.pop();a=S.pop();if(a===b){pc=695;continue flow;}
case 628: ip=628;S.push(L[4]);
case 630: ip=630;S.push(L[4]);
case 632: ip=632;S.push(L[4]);
case 634: ip=634;S.push("%D");
case 636: ip=636;a=S.splice(S.length-1,1);b=S.pop();v=R.call("java/lang/String","indexOf(Ljava/lang/String;)I",b,a,182);S.push(v);
case 639: ip=639;S.push(L[4]);
case 641: ip=641;S.push("%D");
case 643: ip=643;S.push(L[4]);
case 645: ip=645;S.push("%D");
case 647: ip=647;a=S.splice(S.length-1,1);b=S.pop();v=R.call("java/lang/String","indexOf(Ljava/lang/String;)I",b,a,182);S.push(v);
case 650: ip=650;S.push(1);
case 651: ip=651;b=S.pop();a=S.pop();S.push((a+b)|0);
case 652: ip=652;a=S.splice(S.length-2,2);b=S.pop();v=R.call("java/lang/String","indexOf(Ljava/lang/String;I)I",b,a,182);S.push(v);
case 655: ip=655;S.push(2);
case 656: ip=656;b=S.pop();a=S.pop();S.push((a+b)|0);
case 657: ip=657;a=S.splice(S.length-2,2);b=S.pop();v=R.call("java/lang/String","substring(II)Ljava/lang/String;",b,a,182);S.push(v);
case 660: ip=660;S.push(L[4]);
case 662: ip=662;S.push(L[4]);
case 664: ip=664;S.push("%D");
case 666: ip=666;a=S.splice(S.length-1,1);b=S.pop();v=R.call("java/lang/String","indexOf(Ljava/lang/String;)I",b,a,182);S.push(v);
case 669: ip=669;S.push(2);
case 670: ip=670;b=S.pop();a=S.pop();S.push((a+b)|0);
case 671: ip=671;S.push(L[4]);
case 673: ip=673;S.push("%D");
case 675: ip=675;S.push(L[4]);
case 677: ip=677;S.push("%D");
case 679: ip=679;a=S.splice(S.length-1,1);b=S.pop();v=R.call("java/lang/String","indexOf(Ljava/lang/String;)I",b,a,182);S.push(v);
case 682: ip=682;S.push(1);
case 683: ip=683;b=S.pop();a=S.pop();S.push((a+b)|0);
case 684: ip=684;a=S.splice(S.length-2,2);b=S.pop();v=R.call("java/lang/String","indexOf(Ljava/lang/String;I)I",b,a,182);S.push(v);
case 687: ip=687;a=S.splice(S.length-2,2);b=S.pop();v=R.call("java/lang/String","substring(II)Ljava/lang/String;",b,a,182);S.push(v);
case 690: ip=690;a=S.splice(S.length-3,3);b=null;v=R.call("s","a(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;",b,a,184);S.push(v);
case 693: ip=693;L[4]=S.pop();
case 695: ip=695;pc=699;continue flow;
case 698: ip=698;S.pop();
case 699: ip=699;S.push(L[4]);
case 701: ip=701;return S.pop();
default:throw new Error("Invalid control flow s.a(I)Ljava/lang/String; "+pc);
}}catch(error){
if(ip>=61&&ip<695&&R.catches(error,"java/lang/Exception")){S.length=0;S.push(error);pc=698;continue flow;}
throw error;}}});
// s.h(I)V
R.method("s","h(I)V",function(self,args){
const S=[], L=new Array(5).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=self;
L[1]=args[0];
flow: while(true){ try { switch(pc){
case 0: ip=0;S.push(L[0]);
case 1: ip=1;S.push(null);
case 2: ip=2;v=S.pop();a=S.pop();R.set(a,"s.c:[B",v);
case 5: ip=5;S.push(L[0]);
case 6: ip=6;S.push(null);
case 7: ip=7;v=S.pop();a=S.pop();R.set(a,"s.a:[C",v);
case 10: ip=10;S.push(L[1]);
case 11: ip=11;S.push(-1);
case 12: ip=12;b=S.pop();a=S.pop();if(a!==b){pc=16;continue flow;}
case 15: ip=15;return;
case 16: ip=16;S.push(L[1]);
case 17: ip=17;a=S.splice(S.length-1,1);b=null;v=R.call("r","a(I)Ljava/io/DataInputStream;",b,a,184);S.push(v);
case 20: ip=20;L[2]=S.pop();
case 21: ip=21;S.push(L[0]);
case 22: ip=22;S.push(L[2]);
case 23: ip=23;a=S.splice(S.length-0,0);b=S.pop();v=R.call("java/io/DataInputStream","readShort()S",b,a,182);S.push(v);
case 26: ip=26;S.push(1);
case 27: ip=27;b=S.pop();a=S.pop();S.push((a+b)|0);
case 28: ip=28;S.push(R.array("C",S.pop()));
case 30: ip=30;v=S.pop();a=S.pop();R.set(a,"s.a:[C",v);
case 33: ip=33;S.push(R.staticGet("r","r.a:[I"));
case 36: ip=36;S.push(L[1]);
case 37: ip=37;S.push(1023);
case 40: ip=40;b=S.pop();a=S.pop();S.push(a&b);
case 41: ip=41;b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 42: ip=42;L[1]=S.pop();
case 43: ip=43;S.push(L[0]);
case 44: ip=44;S.push(L[1]);
case 45: ip=45;S.push(L[0]);
case 46: ip=46;a=S.pop();S.push(R.get(a,"s.a:[C"));
case 49: ip=49;S.push(R.length(S.pop()));
case 50: ip=50;S.push(1);
case 51: ip=51;b=S.pop();a=S.pop();S.push(a<<b);
case 52: ip=52;b=S.pop();a=S.pop();S.push((a-b)|0);
case 53: ip=53;S.push(R.array("B",S.pop()));
case 55: ip=55;v=S.pop();a=S.pop();R.set(a,"s.c:[B",v);
case 58: ip=58;S.push(0);
case 59: ip=59;L[1]=S.pop();
case 60: ip=60;S.push(0);
case 61: ip=61;L[3]=S.pop();
case 62: ip=62;S.push(L[3]);
case 63: ip=63;S.push(L[0]);
case 64: ip=64;a=S.pop();S.push(R.get(a,"s.a:[C"));
case 67: ip=67;S.push(R.length(S.pop()));
case 68: ip=68;S.push(1);
case 69: ip=69;b=S.pop();a=S.pop();S.push((a-b)|0);
case 70: ip=70;b=S.pop();a=S.pop();if(a>=b){pc=113;continue flow;}
case 73: ip=73;S.push(L[0]);
case 74: ip=74;a=S.pop();S.push(R.get(a,"s.a:[C"));
case 77: ip=77;S.push(L[3]);
case 78: ip=78;S.push(L[1]);
case 79: ip=79;v=S.pop();b=S.pop();a=S.pop();R.aset(a,b,v);
case 80: ip=80;S.push(L[2]);
case 81: ip=81;a=S.splice(S.length-0,0);b=S.pop();v=R.call("java/io/DataInputStream","readShort()S",b,a,182);S.push(v);
case 84: ip=84;S.push(S[S.length-1]);
case 85: ip=85;L[4]=S.pop();
case 87: ip=87;if(S.pop()<=0){pc=101;continue flow;}
case 90: ip=90;S.push(L[2]);
case 91: ip=91;S.push(L[0]);
case 92: ip=92;a=S.pop();S.push(R.get(a,"s.c:[B"));
case 95: ip=95;S.push(L[1]);
case 96: ip=96;S.push(L[4]);
case 98: ip=98;a=S.splice(S.length-3,3);b=S.pop();v=R.call("java/io/DataInputStream","readFully([BII)V",b,a,182);
case 101: ip=101;S.push(L[1]);
case 102: ip=102;S.push(L[4]);
case 104: ip=104;b=S.pop();a=S.pop();S.push((a+b)|0);
case 105: ip=105;S.push(S.pop()&65535);
case 106: ip=106;L[1]=S.pop();
case 107: ip=107;L[3]=(L[3]+(1))|0;
case 110: ip=110;pc=62;continue flow;
case 113: ip=113;S.push(L[0]);
case 114: ip=114;a=S.pop();S.push(R.get(a,"s.a:[C"));
case 117: ip=117;S.push(L[3]);
case 118: ip=118;S.push(L[1]);
case 119: ip=119;v=S.pop();b=S.pop();a=S.pop();R.aset(a,b,v);
case 120: ip=120;return;
case 121: ip=121;S.pop();
case 122: ip=122;return;
default:throw new Error("Invalid control flow s.h(I)V "+pc);
}}catch(error){
if(ip>=16&&ip<120&&R.catches(error,"java/lang/Exception")){S.length=0;S.push(error);pc=121;continue flow;}
throw error;}}});
// s.a(Ljavax/microedition/lcdui/Graphics;IIIIIII)V
R.method("s","a(Ljavax/microedition/lcdui/Graphics;IIIIIII)V",function(self,args){
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
case 1: S.push(L[7]);
case 3: S.push(24);
case 5: b=S.pop();a=S.pop();S.push(a<<b);
case 6: S.push(L[0]);
case 7: a=S.splice(S.length-0,0);b=S.pop();v=R.call("javax/microedition/lcdui/Graphics","getColor()I",b,a,182);S.push(v);
case 10: S.push(16777215);
case 12: b=S.pop();a=S.pop();S.push(a&b);
case 13: b=S.pop();a=S.pop();S.push(a|b);
case 14: a=S.splice(S.length-1,1);b=S.pop();v=R.call("javax/microedition/lcdui/Graphics","setColor(I)V",b,a,182);
case 17: S.push(L[0]);
case 18: S.push(L[1]);
case 19: S.push(L[2]);
case 20: S.push(L[3]);
case 21: S.push(L[4]);
case 23: S.push(L[5]);
case 25: S.push(L[6]);
case 27: a=S.splice(S.length-6,6);b=S.pop();v=R.call("javax/microedition/lcdui/Graphics","fillTriangle(IIIIII)V",b,a,182);
case 30: return;
default:throw new Error("Invalid control flow s.a(Ljavax/microedition/lcdui/Graphics;IIIIIII)V "+pc);
}}catch(error){
throw error;}}});
// s.a([Lj;)V
R.method("s","a([Lj;)V",function(self,args){
const S=[], L=new Array(5).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=self;
L[1]=args[0];
flow: while(true){ try { switch(pc){
case 0: S.push(L[0]);
case 1: S.push(L[1]);
case 2: v=S.pop();a=S.pop();R.set(a,"s.a:[Lj;",v);
case 5: S.push(L[0]);
case 6: a=S.pop();S.push(R.get(a,"s.a:[Lj;"));
case 9: if(S.pop()===null){pc=99;continue flow;}
case 12: S.push(L[1]);
case 13: S.push(3);
case 14: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 15: a=S.pop();S.push(R.get(a,"j.h:S"));
case 18: S.push(255);
case 21: b=S.pop();a=S.pop();if(a!==b){pc=99;continue flow;}
case 24: S.push(L[1]);
case 25: S.push(3);
case 26: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 27: S.push(0);
case 28: v=S.pop();a=S.pop();R.set(a,"j.h:S",v);
case 31: S.push(0);
case 32: L[2]=S.pop();
case 33: S.push(0);
case 34: L[3]=S.pop();
case 35: S.push(L[3]);
case 36: S.push(L[1]);
case 37: S.push(R.length(S.pop()));
case 38: b=S.pop();a=S.pop();if(a>=b){pc=99;continue flow;}
case 41: S.push(L[1]);
case 42: S.push(L[3]);
case 43: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 44: L[4]=S.pop();
case 46: S.push(L[2]);
case 47: S.push(L[4]);
case 49: a=S.pop();S.push(R.get(a,"j.a:S"));
case 52: S.push(8);
case 54: b=S.pop();a=S.pop();S.push(a<<b);
case 55: S.push(L[4]);
case 57: a=S.pop();S.push(R.get(a,"j.b:S"));
case 60: S.push(65535);
case 62: b=S.pop();a=S.pop();S.push(a&b);
case 63: b=S.pop();a=S.pop();S.push((a+b)|0);
case 64: b=S.pop();a=S.pop();S.push((a+b)|0);
case 65: S.push(S.pop()<<16>>16);
case 66: L[2]=S.pop();
case 67: S.push(L[4]);
case 69: S.push(L[4]);
case 71: a=S.pop();S.push(R.get(a,"j.e:S"));
case 74: v=S.pop();a=S.pop();R.set(a,"j.a:S",v);
case 77: S.push(L[4]);
case 79: S.push(L[4]);
case 81: a=S.pop();S.push(R.get(a,"j.f:S"));
case 84: v=S.pop();a=S.pop();R.set(a,"j.b:S",v);
case 87: S.push(L[4]);
case 89: S.push(L[2]);
case 90: v=S.pop();a=S.pop();R.set(a,"j.e:S",v);
case 93: L[3]=(L[3]+(1))|0;
case 96: pc=35;continue flow;
case 99: return;
default:throw new Error("Invalid control flow s.a([Lj;)V "+pc);
}}catch(error){
throw error;}}});
// s.b(I)V
R.method("s","b(I)V",function(self,args){
const S=[], L=new Array(2).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=self;
L[1]=args[0];
flow: while(true){ try { switch(pc){
case 0: S.push(L[0]);
case 1: a=S.pop();S.push(R.get(a,"s.b:[C"));
case 4: if(S.pop()===null){pc=16;continue flow;}
case 7: S.push(L[0]);
case 8: a=S.pop();S.push(R.get(a,"s.b:[C"));
case 11: S.push(R.length(S.pop()));
case 12: S.push(L[1]);
case 13: b=S.pop();a=S.pop();if(a>=b){pc=23;continue flow;}
case 16: S.push(L[0]);
case 17: S.push(L[1]);
case 18: S.push(R.array("C",S.pop()));
case 20: v=S.pop();a=S.pop();R.set(a,"s.b:[C",v);
case 23: return;
default:throw new Error("Invalid control flow s.b(I)V "+pc);
}}catch(error){
throw error;}}});
// s.a(C)I
R.method("s","a(C)I",function(self,args){
const S=[], L=new Array(2).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=self;
L[1]=args[0];
flow: while(true){ try { switch(pc){
case 0: S.push(L[0]);
case 1: S.push(1);
case 2: a=S.splice(S.length-1,1);b=S.pop();v=R.call("s","b(I)V",b,a,183);
case 5: S.push(L[0]);
case 6: a=S.pop();S.push(R.get(a,"s.b:[C"));
case 9: S.push(0);
case 10: S.push(L[1]);
case 11: v=S.pop();b=S.pop();a=S.pop();R.aset(a,b,v);
case 12: S.push(L[0]);
case 13: S.push(L[0]);
case 14: a=S.pop();S.push(R.get(a,"s.b:[C"));
case 17: S.push(0);
case 18: S.push(1);
case 19: a=S.splice(S.length-3,3);b=S.pop();v=R.call("s","a([CII)I",b,a,183);S.push(v);
case 22: return S.pop();
default:throw new Error("Invalid control flow s.a(C)I "+pc);
}}catch(error){
throw error;}}});
// s.a([CII)I
R.method("s","a([CII)I",function(self,args){
const S=[], L=new Array(6).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=self;
L[1]=args[0];
L[2]=args[1];
L[3]=args[2];
flow: while(true){ try { switch(pc){
case 0: S.push(L[0]);
case 1: a=S.pop();S.push(R.get(a,"s.a:[Lj;"));
case 4: if(S.pop()===null){pc=60;continue flow;}
case 7: S.push(0);
case 8: L[4]=S.pop();
case 10: S.push(L[2]);
case 11: S.push(L[3]);
case 12: b=S.pop();a=S.pop();if(a>=b){pc=57;continue flow;}
case 15: S.push(L[0]);
case 16: S.push(L[1]);
case 17: S.push(L[2]);
case 18: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 19: a=S.splice(S.length-1,1);b=S.pop();v=R.call("s","a(C)Lj;",b,a,183);S.push(v);
case 22: L[5]=S.pop();
case 24: S.push(L[4]);
case 26: S.push(L[5]);
case 28: if(S.pop()!==null){pc=43;continue flow;}
case 31: S.push(L[0]);
case 32: a=S.pop();S.push(R.get(a,"s.a:[Lj;"));
case 35: S.push(2);
case 36: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 37: a=S.pop();S.push(R.get(a,"j.h:S"));
case 40: pc=48;continue flow;
case 43: S.push(L[5]);
case 45: a=S.pop();S.push(R.get(a,"j.g:S"));
case 48: b=S.pop();a=S.pop();S.push((a+b)|0);
case 49: L[4]=S.pop();
case 51: L[2]=(L[2]+(1))|0;
case 54: pc=10;continue flow;
case 57: S.push(L[4]);
case 59: return S.pop();
case 60: S.push(L[3]);
case 61: if(S.pop()!==0){pc=66;continue flow;}
case 64: S.push(0);
case 65: return S.pop();
case 66: S.push(L[0]);
case 67: a=S.pop();S.push(R.get(a,"s.a:Ljavax/microedition/lcdui/Font;"));
case 70: S.push(L[1]);
case 71: S.push(0);
case 72: S.push(L[3]);
case 73: a=S.splice(S.length-3,3);b=S.pop();v=R.call("javax/microedition/lcdui/Font","charsWidth([CII)I",b,a,182);S.push(v);
case 76: return S.pop();
default:throw new Error("Invalid control flow s.a([CII)I "+pc);
}}catch(error){
throw error;}}});
// s.a(C)Lj;
R.method("s","a(C)Lj;",function(self,args){
const S=[], L=new Array(3).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=self;
L[1]=args[0];
flow: while(true){ try { switch(pc){
case 0: S.push(0);
case 1: L[2]=S.pop();
case 2: S.push(L[2]);
case 3: S.push(L[0]);
case 4: a=S.pop();S.push(R.get(a,"s.a:[Lj;"));
case 7: S.push(R.length(S.pop()));
case 8: b=S.pop();a=S.pop();if(a>=b){pc=38;continue flow;}
case 11: S.push(L[0]);
case 12: a=S.pop();S.push(R.get(a,"s.a:[Lj;"));
case 15: S.push(L[2]);
case 16: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 17: a=S.pop();S.push(R.get(a,"j.e:S"));
case 20: S.push(S.pop()&65535);
case 21: S.push(L[1]);
case 22: b=S.pop();a=S.pop();if(a!==b){pc=32;continue flow;}
case 25: S.push(L[0]);
case 26: a=S.pop();S.push(R.get(a,"s.a:[Lj;"));
case 29: S.push(L[2]);
case 30: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 31: return S.pop();
case 32: L[2]=(L[2]+(1))|0;
case 35: pc=2;continue flow;
case 38: S.push(null);
case 39: return S.pop();
default:throw new Error("Invalid control flow s.a(C)Lj; "+pc);
}}catch(error){
throw error;}}});
// s.a()I
R.method("s","a()I",function(self,args){
const S=[], L=new Array(1).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=self;
flow: while(true){ try { switch(pc){
case 0: S.push(L[0]);
case 1: a=S.pop();S.push(R.get(a,"s.a:[Lj;"));
case 4: if(S.pop()===null){pc=17;continue flow;}
case 7: S.push(L[0]);
case 8: a=S.pop();S.push(R.get(a,"s.a:[Lj;"));
case 11: S.push(0);
case 12: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 13: a=S.pop();S.push(R.get(a,"j.h:S"));
case 16: return S.pop();
case 17: S.push(L[0]);
case 18: a=S.pop();S.push(R.get(a,"s.a:Ljavax/microedition/lcdui/Font;"));
case 21: a=S.splice(S.length-0,0);b=S.pop();v=R.call("javax/microedition/lcdui/Font","getHeight()I",b,a,182);S.push(v);
case 24: return S.pop();
default:throw new Error("Invalid control flow s.a()I "+pc);
}}catch(error){
throw error;}}});
// s.a(Ljavax/microedition/lcdui/Graphics;Ljava/lang/String;III)V
R.method("s","a(Ljavax/microedition/lcdui/Graphics;Ljava/lang/String;III)V",function(self,args){
const S=[], L=new Array(9).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=self;
L[1]=args[0];
L[2]=args[1];
L[3]=args[2];
L[4]=args[3];
L[5]=args[4];
flow: while(true){ try { switch(pc){
case 0: S.push(L[0]);
case 1: S.push(L[1]);
case 2: S.push(L[2]);
case 3: S.push(L[2]);
case 4: a=S.splice(S.length-0,0);b=S.pop();v=R.call("java/lang/String","length()I",b,a,182);S.push(v);
case 7: S.push(L[3]);
case 8: S.push(L[4]);
case 10: S.push(L[5]);
case 12: L[7]=S.pop();
case 14: L[6]=S.pop();
case 16: L[5]=S.pop();
case 18: L[4]=S.pop();
case 20: S.push(0);
case 21: L[1]=S.pop();
case 22: L[3]=S.pop();
case 23: L[2]=S.pop();
case 24: S.push(S[S.length-1]);
case 25: L[1]=S.pop();
case 26: S.push(L[4]);
case 28: a=S.splice(S.length-1,1);b=S.pop();v=R.call("s","b(I)V",b,a,183);
case 31: S.push(0);
case 32: L[8]=S.pop();
case 34: S.push(L[8]);
case 36: S.push(L[4]);
case 38: b=S.pop();a=S.pop();if(a>=b){pc=60;continue flow;}
case 41: S.push(L[1]);
case 42: a=S.pop();S.push(R.get(a,"s.b:[C"));
case 45: S.push(L[8]);
case 47: S.push(L[3]);
case 48: S.push(L[8]);
case 50: a=S.splice(S.length-1,1);b=S.pop();v=R.call("java/lang/String","charAt(I)C",b,a,182);S.push(v);
case 53: v=S.pop();b=S.pop();a=S.pop();R.aset(a,b,v);
case 54: L[8]=(L[8]+(1))|0;
case 57: pc=34;continue flow;
case 60: S.push(L[1]);
case 61: S.push(L[2]);
case 62: S.push(L[1]);
case 63: a=S.pop();S.push(R.get(a,"s.b:[C"));
case 66: S.push(0);
case 67: S.push(L[4]);
case 69: S.push(L[5]);
case 71: S.push(L[6]);
case 73: S.push(L[7]);
case 75: L[8]=S.pop();
case 77: L[7]=S.pop();
case 79: L[6]=S.pop();
case 81: L[5]=S.pop();
case 83: L[4]=S.pop();
case 85: L[3]=S.pop();
case 86: L[2]=S.pop();
case 87: L[1]=S.pop();
case 88: S.push(L[8]);
case 90: S.push(64);
case 92: b=S.pop();a=S.pop();S.push(a&b);
case 93: if(S.pop()===0){pc=135;continue flow;}
case 96: S.push(L[7]);
case 98: S.push(L[1]);
case 99: S.push(S[S.length-1]);
case 100: L[7]=S.pop();
case 102: a=S.pop();S.push(R.get(a,"s.a:[Lj;"));
case 105: if(S.pop()===null){pc=121;continue flow;}
case 108: S.push(L[7]);
case 110: a=S.pop();S.push(R.get(a,"s.a:[Lj;"));
case 113: S.push(1);
case 114: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 115: a=S.pop();S.push(R.get(a,"j.h:S"));
case 118: pc=129;continue flow;
case 121: S.push(L[7]);
case 123: a=S.pop();S.push(R.get(a,"s.a:Ljavax/microedition/lcdui/Font;"));
case 126: a=S.splice(S.length-0,0);b=S.pop();v=R.call("javax/microedition/lcdui/Font","getBaselinePosition()I",b,a,182);S.push(v);
case 129: b=S.pop();a=S.pop();S.push((a-b)|0);
case 130: L[7]=S.pop();
case 132: pc=152;continue flow;
case 135: S.push(L[8]);
case 137: S.push(32);
case 139: b=S.pop();a=S.pop();S.push(a&b);
case 140: if(S.pop()===0){pc=152;continue flow;}
case 143: S.push(L[7]);
case 145: S.push(L[1]);
case 146: a=S.splice(S.length-0,0);b=S.pop();v=R.call("s","a()I",b,a,182);S.push(v);
case 149: b=S.pop();a=S.pop();S.push((a-b)|0);
case 150: L[7]=S.pop();
case 152: S.push(L[8]);
case 154: S.push(9);
case 156: b=S.pop();a=S.pop();S.push(a&b);
case 157: if(S.pop()===0){pc=178;continue flow;}
case 160: S.push(L[6]);
case 162: S.push(L[1]);
case 163: S.push(L[3]);
case 164: S.push(0);
case 165: S.push(L[5]);
case 167: a=S.splice(S.length-3,3);b=S.pop();v=R.call("s","a([CII)I",b,a,183);S.push(v);
case 170: S.push(L[8]);
case 172: S.push(1);
case 173: b=S.pop();a=S.pop();S.push(a&b);
case 174: b=S.pop();a=S.pop();S.push(a>>b);
case 175: b=S.pop();a=S.pop();S.push((a-b)|0);
case 176: L[6]=S.pop();
case 178: S.push(L[1]);
case 179: a=S.pop();S.push(R.get(a,"s.a:[Lj;"));
case 182: if(S.pop()===null){pc=250;continue flow;}
case 185: S.push(L[4]);
case 187: S.push(L[5]);
case 189: b=S.pop();a=S.pop();if(a>=b){pc=288;continue flow;}
case 192: S.push(L[1]);
case 193: S.push(L[3]);
case 194: S.push(L[4]);
case 196: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 197: a=S.splice(S.length-1,1);b=S.pop();v=R.call("s","a(C)Lj;",b,a,183);S.push(v);
case 200: S.push(S[S.length-1]);
case 201: L[8]=S.pop();
case 203: if(S.pop()===null){pc=230;continue flow;}
case 206: S.push(L[8]);
case 208: S.push(L[2]);
case 209: S.push(L[6]);
case 211: S.push(L[7]);
case 213: S.push(0);
case 214: a=S.splice(S.length-4,4);b=S.pop();v=R.call("j","a(Ljavax/microedition/lcdui/Graphics;III)V",b,a,182);
case 217: S.push(L[6]);
case 219: S.push(L[8]);
case 221: a=S.pop();S.push(R.get(a,"j.g:S"));
case 224: b=S.pop();a=S.pop();S.push((a+b)|0);
case 225: L[6]=S.pop();
case 227: pc=244;continue flow;
case 230: S.push(L[6]);
case 232: S.push(L[1]);
case 233: a=S.pop();S.push(R.get(a,"s.a:[Lj;"));
case 236: S.push(2);
case 237: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 238: a=S.pop();S.push(R.get(a,"j.h:S"));
case 241: b=S.pop();a=S.pop();S.push((a+b)|0);
case 242: L[6]=S.pop();
case 244: L[4]=(L[4]+(1))|0;
case 247: pc=185;continue flow;
case 250: S.push(L[5]);
case 252: if(S.pop()===0){pc=288;continue flow;}
case 255: S.push(L[2]);
case 256: a=S.splice(S.length-0,0);b=S.pop();v=R.call("javax/microedition/lcdui/Graphics","getFont()Ljavax/microedition/lcdui/Font;",b,a,182);S.push(v);
case 259: S.push(L[1]);
case 260: a=S.pop();S.push(R.get(a,"s.a:Ljavax/microedition/lcdui/Font;"));
case 263: b=S.pop();a=S.pop();if(a===b){pc=274;continue flow;}
case 266: S.push(L[2]);
case 267: S.push(L[1]);
case 268: a=S.pop();S.push(R.get(a,"s.a:Ljavax/microedition/lcdui/Font;"));
case 271: a=S.splice(S.length-1,1);b=S.pop();v=R.call("javax/microedition/lcdui/Graphics","setFont(Ljavax/microedition/lcdui/Font;)V",b,a,182);
case 274: S.push(L[2]);
case 275: S.push(L[3]);
case 276: S.push(0);
case 277: S.push(L[5]);
case 279: S.push(L[6]);
case 281: S.push(L[7]);
case 283: S.push(20);
case 285: a=S.splice(S.length-6,6);b=S.pop();v=R.call("javax/microedition/lcdui/Graphics","drawChars([CIIIII)V",b,a,182);
case 288: return;
default:throw new Error("Invalid control flow s.a(Ljavax/microedition/lcdui/Graphics;Ljava/lang/String;III)V "+pc);
}}catch(error){
throw error;}}});
// s.a(Ljavax/microedition/lcdui/Image;IIIILjavax/microedition/lcdui/Graphics;II)V
R.method("s","a(Ljavax/microedition/lcdui/Image;IIIILjavax/microedition/lcdui/Graphics;II)V",function(self,args){
const S=[], L=new Array(10).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=args[0];
L[1]=args[1];
L[2]=args[2];
L[3]=args[3];
L[4]=args[4];
L[5]=args[5];
L[6]=args[6];
L[7]=args[7];
flow: while(true){ try { switch(pc){
case 0: S.push(L[5]);
case 2: S.push(L[0]);
case 3: S.push(L[1]);
case 4: S.push(L[2]);
case 5: S.push(L[3]);
case 6: S.push(L[4]);
case 8: S.push(L[6]);
case 10: S.push(L[7]);
case 12: S.push(0);
case 13: L[0]=S.pop();
case 14: L[7]=S.pop();
case 16: L[6]=S.pop();
case 18: L[5]=S.pop();
case 20: L[4]=S.pop();
case 22: L[3]=S.pop();
case 23: L[2]=S.pop();
case 24: L[1]=S.pop();
case 25: L[0]=S.pop();
case 26: S.push(L[4]);
case 28: L[8]=S.pop();
case 30: S.push(L[5]);
case 32: L[9]=S.pop();
case 34: S.push(L[0]);
case 35: a=S.splice(S.length-0,0);b=S.pop();v=R.call("javax/microedition/lcdui/Graphics","getClipX()I",b,a,182);S.push(v);
case 38: S.push(S[S.length-1]);
case 39: L[4]=S.pop();
case 41: S.push(L[6]);
case 43: b=S.pop();a=S.pop();S.push((a-b)|0);
case 44: S.push(S[S.length-1]);
case 45: L[5]=S.pop();
case 47: if(S.pop()<=0){pc=66;continue flow;}
case 50: S.push(L[8]);
case 52: S.push(L[5]);
case 54: b=S.pop();a=S.pop();S.push((a-b)|0);
case 55: L[8]=S.pop();
case 57: S.push(L[2]);
case 58: S.push(L[5]);
case 60: b=S.pop();a=S.pop();S.push((a+b)|0);
case 61: L[2]=S.pop();
case 62: S.push(L[4]);
case 64: L[6]=S.pop();
case 66: S.push(L[4]);
case 68: S.push(L[0]);
case 69: a=S.splice(S.length-0,0);b=S.pop();v=R.call("javax/microedition/lcdui/Graphics","getClipWidth()I",b,a,182);S.push(v);
case 72: b=S.pop();a=S.pop();S.push((a+b)|0);
case 73: L[4]=S.pop();
case 75: S.push(L[6]);
case 77: S.push(L[8]);
case 79: b=S.pop();a=S.pop();S.push((a+b)|0);
case 80: S.push(L[4]);
case 82: b=S.pop();a=S.pop();S.push((a-b)|0);
case 83: S.push(S[S.length-1]);
case 84: L[5]=S.pop();
case 86: if(S.pop()<=0){pc=96;continue flow;}
case 89: S.push(L[8]);
case 91: S.push(L[5]);
case 93: b=S.pop();a=S.pop();S.push((a-b)|0);
case 94: L[8]=S.pop();
case 96: S.push(L[0]);
case 97: a=S.splice(S.length-0,0);b=S.pop();v=R.call("javax/microedition/lcdui/Graphics","getClipY()I",b,a,182);S.push(v);
case 100: S.push(S[S.length-1]);
case 101: L[4]=S.pop();
case 103: S.push(L[7]);
case 105: b=S.pop();a=S.pop();S.push((a-b)|0);
case 106: S.push(S[S.length-1]);
case 107: L[5]=S.pop();
case 109: if(S.pop()<=0){pc=128;continue flow;}
case 112: S.push(L[9]);
case 114: S.push(L[5]);
case 116: b=S.pop();a=S.pop();S.push((a-b)|0);
case 117: L[9]=S.pop();
case 119: S.push(L[3]);
case 120: S.push(L[5]);
case 122: b=S.pop();a=S.pop();S.push((a+b)|0);
case 123: L[3]=S.pop();
case 124: S.push(L[4]);
case 126: L[7]=S.pop();
case 128: S.push(L[4]);
case 130: S.push(L[0]);
case 131: a=S.splice(S.length-0,0);b=S.pop();v=R.call("javax/microedition/lcdui/Graphics","getClipHeight()I",b,a,182);S.push(v);
case 134: b=S.pop();a=S.pop();S.push((a+b)|0);
case 135: L[4]=S.pop();
case 137: S.push(L[7]);
case 139: S.push(L[9]);
case 141: b=S.pop();a=S.pop();S.push((a+b)|0);
case 142: S.push(L[4]);
case 144: b=S.pop();a=S.pop();S.push((a-b)|0);
case 145: S.push(S[S.length-1]);
case 146: L[5]=S.pop();
case 148: if(S.pop()<=0){pc=158;continue flow;}
case 151: S.push(L[9]);
case 153: S.push(L[5]);
case 155: b=S.pop();a=S.pop();S.push((a-b)|0);
case 156: L[9]=S.pop();
case 158: S.push(L[8]);
case 160: if(S.pop()<=0){pc=186;continue flow;}
case 163: S.push(L[9]);
case 165: if(S.pop()<=0){pc=186;continue flow;}
case 168: S.push(L[0]);
case 169: S.push(L[1]);
case 170: S.push(L[2]);
case 171: S.push(L[3]);
case 172: S.push(L[8]);
case 174: S.push(L[9]);
case 176: S.push(0);
case 177: S.push(L[6]);
case 179: S.push(L[7]);
case 181: S.push(20);
case 183: a=S.splice(S.length-9,9);b=S.pop();v=R.call("javax/microedition/lcdui/Graphics","drawRegion(Ljavax/microedition/lcdui/Image;IIIIIIII)V",b,a,182);
case 186: return;
default:throw new Error("Invalid control flow s.a(Ljavax/microedition/lcdui/Image;IIIILjavax/microedition/lcdui/Graphics;II)V "+pc);
}}catch(error){
throw error;}}});
// s.a([B)V
R.method("s","a([B)V",function(self,args){
const S=[], L=new Array(11).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=args[0];
flow: while(true){ try { switch(pc){
case 0: S.push(L[0]);
case 1: S.push(S[S.length-1]);
case 2: L[0]=S.pop();
case 3: S.push(R.length(S.pop()));
case 4: S.push(4);
case 5: b=S.pop();a=S.pop();S.push((a-b)|0);
case 6: S.push(S[S.length-1]);
case 7: L[1]=S.pop();
case 8: S.push(4);
case 9: b=S.pop();a=S.pop();S.push((a+b)|0);
case 10: S.push(R.array("B",S.pop()));
case 12: S.push(S[S.length-1]);
case 13: L[2]=S.pop();
case 14: S.push(0);
case 15: S.push(80);
case 17: v=S.pop();b=S.pop();a=S.pop();R.aset(a,b,v);
case 18: S.push(L[2]);
case 19: S.push(1);
case 20: S.push(76);
case 22: v=S.pop();b=S.pop();a=S.pop();R.aset(a,b,v);
case 23: S.push(L[2]);
case 24: S.push(2);
case 25: S.push(84);
case 27: v=S.pop();b=S.pop();a=S.pop();R.aset(a,b,v);
case 28: S.push(L[2]);
case 29: S.push(3);
case 30: S.push(69);
case 32: v=S.pop();b=S.pop();a=S.pop();R.aset(a,b,v);
case 33: S.push(L[0]);
case 34: S.push(0);
case 35: S.push(L[2]);
case 36: S.push(4);
case 37: S.push(L[1]);
case 38: a=S.splice(S.length-5,5);b=null;v=R.call("java/lang/System","arraycopy(Ljava/lang/Object;ILjava/lang/Object;II)V",b,a,184);
case 41: S.push(L[2]);
case 42: S.push(L[2]);
case 43: S.push(R.length(S.pop()));
case 44: L[3]=S.pop();
case 45: S.push(0);
case 46: L[2]=S.pop();
case 47: L[2]=S.pop();
case 48: S.push(-1);
case 49: S.push(L[2]);
case 50: S.push(L[3]);
case 51: L[4]=S.pop();
case 53: L[3]=S.pop();
case 54: L[2]=S.pop();
case 55: S.push(R.staticGet("s","s.c:[I"));
case 58: if(S.pop()!==null){pc=262;continue flow;}
case 61: S.push(256);
case 64: S.push(R.array("I",S.pop()));
case 66: R.staticSet("s","s.c:[I",S.pop());
case 69: S.push("\u0400\u0000\u0000\u0000\u0000w\u00070\u0016n\u000ea,\u0019\tQ:\u0007mD\u0019pjt\u000fic%5\u001ed\u0015#\u000e[\b2y\\8$`Ui\u001e\u0017RY\b\t6L+~1|=g8-\u0007\u0010?\u001d\u0011\u001d7\u0010dj0 rs9qH\u0004>A^\u001aZT}m]dktT5Q\u0003S\u0005G\u0013l\u0018Vdk(@}byz\neIl\u0014\u0001\\Oc\u0006lYz\u000f=c\r\b\ru;n HLi\u0010^U`Ad\"gqr<\u0003dQK\u0004TGR\r\u0005}%\n5k55(zB2\u0018l[;IV,<y@2XlcE_\\u\\V\rO+Q=Y&Y0,Q^\u0000:HWQ\u0000?Pa\u0016!4t5V3D#O:\u0015\u00198=%\u000f(\u00028\u001e_\u0005\b\bF\fY21\u000bi$/o|\u0007XhL\u0011Aa\u001d+6f-=v\\A\u0010\u0001[q\u0006\u0018R <oU\u0010*q1\u0005\t\u000665\u001f\u001f?d%h8T3x\u0007I\"\u000f\u0000y4\u0016\t(\u000ea\u000e\u0018\u0018\u007fj\r;\bm=-\u0011dl\u0017fc\\\u0001kkQt\u001clab\u0005e0Xrb\u0000Nl\u0006\u0015m\u001b\u0001%{\u0002\btAu\u000fDWe0YF\u00127iP\u000b>8j|9\b|b]\u001d_\u0015Z-I\fS|s{TLeM2aX:5QN#<\u0000tT;0bJ_%A=X\u0015W$QDmSVt{Ciij4nY|-g\bFZ`8PD\u0004-s3\u0003\u001de*\nL_]\r|IP\u0005q<'\u0002A*>\u000b\u0010\u0010I\f \u0006Wh5% o\u000539fT\tNad\u001f^^y\u000e)YI\u00180P\u0018\"GW(4Y3=\u0017.4\r\u00017=\\;@:l-m8\u0003 \u001a?36\u00036b\ft1R\u001ajUG9\u001dRw/\u0004[&\u0015s\\\u0016\u0003cc\u000b\u0012\u0014d;\u0004\rmj>zjZ(d\u000eO\u000b\u0013\t\u007f\u001d\n\u0000.'}\u0007\u001e1p\u000f\u0013D\u0007\b#R\u001e\u0001rhi\u0006B~wbW]\u0000egK\u0019l6qnk\u0006g~T\u001bv\tS+`\u0010ZzZg]JLy9_o\u000e>oy\u00177>C`0\u000eUVV#h!Q\u0013~8XBDO_rRQ;gq&<Wg?5\u0006]H26KX\r+Z/\n\u001bL6\u0003JvA\u0004z`_`oC(g_U1n\u000eoFi>yKa3\f<f\u0003\u001a%oR Rhb6L\fw\u0015;\u000bG\u0003\"\u0002\u00169U\u0005&/E:;>2=\u000b(+4Z\u0012\\3j\u0004BW\u007f'5PO1,Y\u001e\u000b[^.\u001d\u001bdB0lcr&uj#\u001c\u0002m\u0013\n\u001c\t\u0006)k\u000e6?r\u0007g\u0005\u0005\u0000W\u0013\u0015?J\u0002b8z\u0014{1+.\f6\u001b8\u0012R\u000e\u001beU>\r|\\o7\u000b[_!\u0006SRTqTbBh]3x\u001fZ\u0003n\u0001>\u0016Mv9&[o0wa\u00187Gw\b\bZf\u007f\u000fjpf\u0006;J\u0011\u0001\u000b\\\u000fe\u001e\u007fxb.iak\u007fS\u0016lOE \nbxW\rRnN\u0004\u0003T9\u00033B'g&aP`\u0016wIiGM>nw[.QjJYVZ\\@_\u000bf7X;p)<.S^;\u001eEG2O\u007f05\u007fi==r\u001cJ:B\nS3\u00130$4#&:P6\u0005MW\u0006\u0013T^W)#Yg?3fz.DaJ8]h\u001b\u0002*o+\u00144\u000b>7C\f\u000e!Z\u0005_\u001b-\u0002o\r\u0000#\u0012.m|=Q3EN5~\u001eqj\u0000#\"HA)\u00177\u007fTlQ2G[?L:!H!e\u000e7\u007f\u0018uB\u0010\u0003B\fL:9{'e\u000eQ3M_'\\\u001a`H\u0000#\u0012.m|=Q3o\u001b\u001f+4$@U\tW&\u001c\u0012`Y\"o\u001b\u007fgm\u000e\u0015\u0019\u0010tbT\u000bS\f\bv(yg-\u0017&\u0019\u0010lQrO[?nv(I\u0001!\u0017&U\tG\u00048Vh{fo\u001b\u001f+4$@U\t\u0003");
case 71: S.push(S[S.length-1]);
case 72: L[5]=S.pop();
case 74: S.push(0);
case 75: a=S.splice(S.length-1,1);b=S.pop();v=R.call("java/lang/String","charAt(I)C",b,a,182);S.push(v);
case 78: S.push(R.array("B",S.pop()));
case 80: L[6]=S.pop();
case 82: S.push(0);
case 83: L[7]=S.pop();
case 85: S.push(1);
case 86: L[8]=S.pop();
case 88: S.push(L[8]);
case 90: S.push(L[5]);
case 92: a=S.splice(S.length-0,0);b=S.pop();v=R.call("java/lang/String","length()I",b,a,182);S.push(v);
case 95: b=S.pop();a=S.pop();if(a>=b){pc=179;continue flow;}
case 98: S.push(L[5]);
case 100: S.push(L[8]);
case 102: a=S.splice(S.length-1,1);b=S.pop();v=R.call("java/lang/String","charAt(I)C",b,a,182);S.push(v);
case 105: L[9]=S.pop();
case 107: S.push(L[8]);
case 109: S.push(L[6]);
case 111: S.push(R.length(S.pop()));
case 112: b=S.pop();a=S.pop();if(a>b){pc=128;continue flow;}
case 115: S.push(L[6]);
case 117: S.push(L[8]);
case 119: S.push(1);
case 120: b=S.pop();a=S.pop();S.push((a-b)|0);
case 121: S.push(L[9]);
case 123: S.push(S.pop()<<24>>24);
case 124: v=S.pop();b=S.pop();a=S.pop();R.aset(a,b,v);
case 125: pc=173;continue flow;
case 128: S.push(7);
case 130: L[10]=S.pop();
case 132: S.push(L[10]);
case 134: if(S.pop()<=0){pc=173;continue flow;}
case 137: S.push(L[7]);
case 139: S.push(L[6]);
case 141: S.push(R.length(S.pop()));
case 142: b=S.pop();a=S.pop();if(a>=b){pc=173;continue flow;}
case 145: S.push(L[6]);
case 147: S.push(L[7]);
case 149: a=S.pop();if(typeof a==="bigint")S.push(a,a);else{b=S.pop();S.push(b,a,b,a);}
case 150: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 151: S.push(L[9]);
case 153: S.push(L[10]);
case 155: b=S.pop();a=S.pop();S.push(a<<b);
case 156: S.push(128);
case 159: b=S.pop();a=S.pop();S.push(a&b);
case 160: S.push(S.pop()<<24>>24);
case 161: b=S.pop();a=S.pop();S.push(a|b);
case 162: S.push(S.pop()<<24>>24);
case 163: v=S.pop();b=S.pop();a=S.pop();R.aset(a,b,v);
case 164: L[10]=(L[10]+(-1))|0;
case 167: L[7]=(L[7]+(1))|0;
case 170: pc=132;continue flow;
case 173: L[8]=(L[8]+(1))|0;
case 176: pc=88;continue flow;
case 179: S.push(L[6]);
case 181: L[5]=S.pop();
case 183: S.push(0);
case 184: L[6]=S.pop();
case 186: S.push(L[6]);
case 188: S.push(1024);
case 191: b=S.pop();a=S.pop();if(a>=b){pc=262;continue flow;}
case 194: S.push(R.staticGet("s","s.c:[I"));
case 197: S.push(L[6]);
case 199: S.push(2);
case 200: b=S.pop();a=S.pop();S.push(a>>b);
case 201: S.push(L[5]);
case 203: S.push(L[6]);
case 205: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 206: S.push(255);
case 209: b=S.pop();a=S.pop();S.push(a&b);
case 210: S.push(8);
case 212: b=S.pop();a=S.pop();S.push(a<<b);
case 213: S.push(L[5]);
case 215: S.push(L[6]);
case 217: S.push(1);
case 218: b=S.pop();a=S.pop();S.push((a+b)|0);
case 219: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 220: S.push(255);
case 223: b=S.pop();a=S.pop();S.push(a&b);
case 224: b=S.pop();a=S.pop();S.push(a|b);
case 225: S.push(8);
case 227: b=S.pop();a=S.pop();S.push(a<<b);
case 228: S.push(L[5]);
case 230: S.push(L[6]);
case 232: S.push(2);
case 233: b=S.pop();a=S.pop();S.push((a+b)|0);
case 234: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 235: S.push(255);
case 238: b=S.pop();a=S.pop();S.push(a&b);
case 239: b=S.pop();a=S.pop();S.push(a|b);
case 240: S.push(8);
case 242: b=S.pop();a=S.pop();S.push(a<<b);
case 243: S.push(L[5]);
case 245: S.push(L[6]);
case 247: S.push(3);
case 248: b=S.pop();a=S.pop();S.push((a+b)|0);
case 249: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 250: S.push(255);
case 253: b=S.pop();a=S.pop();S.push(a&b);
case 254: b=S.pop();a=S.pop();S.push(a|b);
case 255: v=S.pop();b=S.pop();a=S.pop();R.aset(a,b,v);
case 256: L[6]=(L[6]+(4))|0;
case 259: pc=186;continue flow;
case 262: S.push(0);
case 263: L[5]=S.pop();
case 265: S.push(L[5]);
case 267: S.push(L[4]);
case 269: b=S.pop();a=S.pop();if(a>=b){pc=298;continue flow;}
case 272: S.push(R.staticGet("s","s.c:[I"));
case 275: S.push(L[2]);
case 276: S.push(L[3]);
case 277: S.push(L[5]);
case 279: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 280: b=S.pop();a=S.pop();S.push(a^b);
case 281: S.push(255);
case 284: b=S.pop();a=S.pop();S.push(a&b);
case 285: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 286: S.push(L[2]);
case 287: S.push(8);
case 289: b=S.pop();a=S.pop();S.push((a>>>b)|0);
case 290: b=S.pop();a=S.pop();S.push(a^b);
case 291: L[2]=S.pop();
case 292: L[5]=(L[5]+(1))|0;
case 295: pc=265;continue flow;
case 298: S.push(L[2]);
case 299: S.push(-1);
case 300: b=S.pop();a=S.pop();S.push(a^b);
case 301: L[2]=S.pop();
case 302: S.push(L[0]);
case 303: S.push(L[1]);
case 304: S.push(L[2]);
case 305: S.push(24);
case 307: b=S.pop();a=S.pop();S.push(a>>b);
case 308: v=S.pop();b=S.pop();a=S.pop();R.aset(a,b,v);
case 309: S.push(L[0]);
case 310: S.push(L[1]);
case 311: S.push(1);
case 312: b=S.pop();a=S.pop();S.push((a+b)|0);
case 313: S.push(L[2]);
case 314: S.push(16);
case 316: b=S.pop();a=S.pop();S.push(a>>b);
case 317: S.push(S.pop()<<24>>24);
case 318: v=S.pop();b=S.pop();a=S.pop();R.aset(a,b,v);
case 319: S.push(L[0]);
case 320: S.push(L[1]);
case 321: S.push(2);
case 322: b=S.pop();a=S.pop();S.push((a+b)|0);
case 323: S.push(L[2]);
case 324: S.push(8);
case 326: b=S.pop();a=S.pop();S.push(a>>b);
case 327: S.push(S.pop()<<24>>24);
case 328: v=S.pop();b=S.pop();a=S.pop();R.aset(a,b,v);
case 329: S.push(L[0]);
case 330: S.push(L[1]);
case 331: S.push(3);
case 332: b=S.pop();a=S.pop();S.push((a+b)|0);
case 333: S.push(L[2]);
case 334: S.push(S.pop()<<24>>24);
case 335: v=S.pop();b=S.pop();a=S.pop();R.aset(a,b,v);
case 336: return;
default:throw new Error("Invalid control flow s.a([B)V "+pc);
}}catch(error){
throw error;}}});
// s.i(I)V
R.method("s","i(I)V",function(self,args){
const S=[], L=new Array(13).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=self;
L[1]=args[0];
flow: while(true){ try { switch(pc){
case 0: S.push(L[0]);
case 1: S.push(L[1]);
case 2: a=S.splice(S.length-1,1);b=null;v=R.call("r","a(I)Ljava/io/DataInputStream;",b,a,184);S.push(v);
case 5: v=S.pop();a=S.pop();R.set(a,"s.a:Ljava/io/DataInputStream;",v);
case 8: S.push(L[0]);
case 9: S.push(0);
case 10: v=S.pop();a=S.pop();R.set(a,"s.a:I",v);
case 13: S.push(L[0]);
case 14: S.push(0);
case 15: v=S.pop();a=S.pop();R.set(a,"s.b:I",v);
case 18: S.push(L[0]);
case 19: S.push(8);
case 21: a=S.splice(S.length-1,1);b=S.pop();v=R.call("s","a(I)I",b,a,182);S.push(v);
case 24: S.push(24);
case 26: b=S.pop();a=S.pop();S.push(a<<b);
case 27: if(S.pop()>=0){pc=34;continue flow;}
case 30: S.push(1);
case 31: pc=35;continue flow;
case 34: S.push(0);
case 35: L[2]=S.pop();
case 36: S.push(L[0]);
case 37: a=S.splice(S.length-0,0);b=S.pop();v=R.call("s","a()Z",b,a,182);S.push(v);
case 40: if(S.pop()===0){pc=65;continue flow;}
case 43: S.push(L[0]);
case 44: S.push(L[0]);
case 45: S.push(10);
case 47: a=S.splice(S.length-1,1);b=S.pop();v=R.call("s","a(I)I",b,a,182);S.push(v);
case 50: S.pop();
case 51: a=S.splice(S.length-0,0);b=S.pop();v=R.call("s","j()V",b,a,182);
case 54: S.push(L[2]);
case 55: if(S.pop()===0){pc=65;continue flow;}
case 58: S.push(L[0]);
case 59: S.push(6);
case 61: a=S.splice(S.length-1,1);b=S.pop();v=R.call("s","a(I)I",b,a,182);S.push(v);
case 64: S.pop();
case 65: S.push(L[0]);
case 66: a=S.splice(S.length-0,0);b=S.pop();v=R.call("s","a()Z",b,a,182);S.push(v);
case 69: if(S.pop()===0){pc=454;continue flow;}
case 72: S.push(L[0]);
case 73: S.push(L[0]);
case 74: S.push(8);
case 76: a=S.splice(S.length-1,1);b=S.pop();v=R.call("s","a(I)I",b,a,182);S.push(v);
case 79: S.push(L[0]);
case 80: S.push(12);
case 82: a=S.splice(S.length-1,1);b=S.pop();v=R.call("s","a(I)I",b,a,182);S.push(v);
case 85: L[3]=S.pop();
case 86: S.push(L[0]);
case 87: S.push(null);
case 88: L[1]=S.pop();
case 89: S.push(17);
case 91: a=S.splice(S.length-1,1);b=S.pop();v=R.call("s","a(I)I",b,a,182);S.push(v);
case 94: S.push(15);
case 96: b=S.pop();a=S.pop();S.push(a<<b);
case 97: S.push(15);
case 99: b=S.pop();a=S.pop();S.push(a>>b);
case 100: S.push(L[0]);
case 101: S.push(10);
case 103: a=S.splice(S.length-1,1);b=S.pop();v=R.call("s","a(I)I",b,a,182);S.push(v);
case 106: S.push(L[0]);
case 107: S.push(10);
case 109: a=S.splice(S.length-1,1);b=S.pop();v=R.call("s","a(I)I",b,a,182);S.push(v);
case 112: S.push(L[0]);
case 113: a=S.splice(S.length-0,0);b=S.pop();v=R.call("s","a()Z",b,a,182);S.push(v);
case 116: if(S.pop()===0){pc=126;continue flow;}
case 119: S.push(L[0]);
case 120: S.push(10);
case 122: a=S.splice(S.length-1,1);b=S.pop();v=R.call("s","a(I)I",b,a,182);S.push(v);
case 125: S.pop();
case 126: S.push(0);
case 127: L[4]=S.pop();
case 129: S.push(L[0]);
case 130: S.push(12);
case 132: a=S.splice(S.length-1,1);b=S.pop();v=R.call("s","a(I)I",b,a,182);S.push(v);
case 135: L[5]=S.pop();
case 137: a=S.splice(S.length-4,4);b=S.pop();v=R.call("s","a(IIII)V",b,a,182);
case 140: S.push(L[5]);
case 142: S.push(1);
case 143: b=S.pop();a=S.pop();S.push((a+b)|0);
case 144: S.push(R.array("C",S.pop()));
case 146: L[6]=S.pop();
case 148: S.push(L[0]);
case 149: S.push(4);
case 150: a=S.splice(S.length-1,1);b=S.pop();v=R.call("s","a(I)I",b,a,182);S.push(v);
case 153: L[7]=S.pop();
case 155: S.push(0);
case 156: L[1]=S.pop();
case 157: S.push(L[1]);
case 158: S.push(L[3]);
case 159: b=S.pop();a=S.pop();if(a>b){pc=174;continue flow;}
case 162: S.push(L[6]);
case 164: S.push(L[1]);
case 165: S.push(L[1]);
case 166: L[1]=(L[1]+(1))|0;
case 169: S.push(S.pop()&65535);
case 170: v=S.pop();b=S.pop();a=S.pop();R.aset(a,b,v);
case 171: pc=157;continue flow;
case 174: S.push(L[1]);
case 175: S.push(L[5]);
case 177: b=S.pop();a=S.pop();if(a>=b){pc=215;continue flow;}
case 180: S.push(L[0]);
case 181: S.push(L[7]);
case 183: a=S.splice(S.length-1,1);b=S.pop();v=R.call("s","a(I)I",b,a,182);S.push(v);
case 186: S.push(1);
case 187: b=S.pop();a=S.pop();S.push((a-b)|0);
case 188: L[8]=S.pop();
case 190: S.push(L[6]);
case 192: L[1]=(L[1]+(1))|0;
case 195: S.push(L[1]);
case 196: S.push(L[8]);
case 198: S.push(L[3]);
case 199: b=S.pop();a=S.pop();S.push(R.irem(a,b));
case 200: S.push(1);
case 201: b=S.pop();a=S.pop();S.push((a+b)|0);
case 202: S.push(L[8]);
case 204: S.push(L[3]);
case 205: b=S.pop();a=S.pop();S.push(R.idiv(a,b));
case 206: S.push(12);
case 208: b=S.pop();a=S.pop();S.push(a<<b);
case 209: b=S.pop();a=S.pop();S.push(a|b);
case 210: S.push(S.pop()&65535);
case 211: v=S.pop();b=S.pop();a=S.pop();R.aset(a,b,v);
case 212: pc=174;continue flow;
case 215: S.push(L[2]);
case 216: if(S.pop()===0){pc=226;continue flow;}
case 219: S.push(L[0]);
case 220: S.push(6);
case 222: a=S.splice(S.length-1,1);b=S.pop();v=R.call("s","a(I)I",b,a,182);S.push(v);
case 225: S.pop();
case 226: S.push(L[0]);
case 227: S.push(12);
case 229: a=S.splice(S.length-1,1);b=S.pop();v=R.call("s","a(I)I",b,a,182);S.push(v);
case 232: L[8]=S.pop();
case 234: S.push(L[0]);
case 235: S.push(12);
case 237: a=S.splice(S.length-1,1);b=S.pop();v=R.call("s","a(I)I",b,a,182);S.push(v);
case 240: L[9]=S.pop();
case 242: S.push(L[0]);
case 243: S.push(L[8]);
case 245: S.push(L[9]);
case 247: a=S.splice(S.length-2,2);b=S.pop();v=R.call("s","c(II)V",b,a,182);
case 250: S.push(0);
case 251: L[10]=S.pop();
case 253: S.push(L[5]);
case 255: L[11]=S.pop();
case 257: S.push(L[11]);
case 259: if(S.pop()<=0){pc=274;continue flow;}
case 262: L[10]=(L[10]+(1))|0;
case 265: S.push(L[11]);
case 267: S.push(1);
case 268: b=S.pop();a=S.pop();S.push(a>>b);
case 269: L[11]=S.pop();
case 271: pc=257;continue flow;
case 274: S.push(L[0]);
case 275: S.push(L[10]);
case 277: a=S.splice(S.length-1,1);b=S.pop();v=R.call("s","a(I)I",b,a,182);S.push(v);
case 280: L[1]=S.pop();
case 281: S.push(L[5]);
case 283: S.push(1);
case 284: b=S.pop();a=S.pop();S.push((a+b)|0);
case 285: S.push(R.array("I",S.pop()));
case 287: L[11]=S.pop();
case 289: S.push(L[5]);
case 291: L[12]=S.pop();
case 293: S.push(L[12]);
case 295: if(S.pop()<0){pc=310;continue flow;}
case 298: S.push(L[11]);
case 300: S.push(L[12]);
case 302: L[12]=(L[12]+(-1))|0;
case 305: S.push(L[1]);
case 306: v=S.pop();b=S.pop();a=S.pop();R.aset(a,b,v);
case 307: pc=293;continue flow;
case 310: S.push(-1);
case 311: L[12]=S.pop();
case 313: S.push(0);
case 314: L[3]=S.pop();
case 315: S.push(L[3]);
case 316: S.push(L[9]);
case 318: b=S.pop();a=S.pop();if(a>=b){pc=454;continue flow;}
case 321: S.push(0);
case 322: L[1]=S.pop();
case 323: S.push(L[1]);
case 324: S.push(L[8]);
case 326: b=S.pop();a=S.pop();if(a>=b){pc=448;continue flow;}
case 329: S.push(L[0]);
case 330: S.push(2);
case 331: a=S.splice(S.length-1,1);b=S.pop();v=R.call("s","a(I)I",b,a,182);S.push(v);
case 334: S.push(S[S.length-1]);
case 335: L[4]=S.pop();
case 337: if(S.pop()!==0){pc=347;continue flow;}
case 340: S.push(L[12]);
case 342: L[5]=S.pop();
case 344: pc=427;continue flow;
case 347: S.push(L[4]);
case 349: S.push(2);
case 350: b=S.pop();a=S.pop();if(a!==b){pc=363;continue flow;}
case 353: S.push(L[11]);
case 355: S.push(L[12]);
case 357: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 358: L[5]=S.pop();
case 360: pc=427;continue flow;
case 363: S.push(L[0]);
case 364: S.push(L[10]);
case 366: a=S.splice(S.length-1,1);b=S.pop();v=R.call("s","a(I)I",b,a,182);S.push(v);
case 369: L[5]=S.pop();
case 371: S.push(L[4]);
case 373: S.push(3);
case 374: b=S.pop();a=S.pop();if(a!==b){pc=387;continue flow;}
case 377: S.push(L[11]);
case 379: S.push(L[12]);
case 381: S.push(L[5]);
case 383: v=S.pop();b=S.pop();a=S.pop();R.aset(a,b,v);
case 384: pc=427;continue flow;
case 387: S.push(L[5]);
case 389: S.push(L[12]);
case 391: b=S.pop();a=S.pop();if(a!==b){pc=427;continue flow;}
case 394: S.push(L[0]);
case 395: S.push(8);
case 397: a=S.splice(S.length-1,1);b=S.pop();v=R.call("s","a(I)I",b,a,182);S.push(v);
case 400: L[4]=S.pop();
case 402: L[4]=(L[4]+(-1))|0;
case 405: S.push(L[4]);
case 407: if(S.pop()<=0){pc=427;continue flow;}
case 410: S.push(L[0]);
case 411: S.push(L[1]);
case 412: L[1]=(L[1]+(1))|0;
case 415: S.push(L[3]);
case 416: S.push(L[6]);
case 418: S.push(L[5]);
case 420: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 421: a=S.splice(S.length-3,3);b=S.pop();v=R.call("s","b(III)V",b,a,182);
case 424: pc=402;continue flow;
case 427: S.push(L[5]);
case 429: L[12]=S.pop();
case 431: S.push(L[0]);
case 432: S.push(L[1]);
case 433: S.push(L[3]);
case 434: S.push(L[6]);
case 436: S.push(L[5]);
case 438: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 439: a=S.splice(S.length-3,3);b=S.pop();v=R.call("s","b(III)V",b,a,182);
case 442: L[1]=(L[1]+(1))|0;
case 445: pc=323;continue flow;
case 448: L[3]=(L[3]+(1))|0;
case 451: pc=315;continue flow;
case 454: S.push(L[0]);
case 455: a=S.splice(S.length-0,0);b=S.pop();v=R.call("s","a()Z",b,a,182);S.push(v);
case 458: if(S.pop()===0){pc=625;continue flow;}
case 461: S.push(L[0]);
case 462: S.push(16);
case 464: a=S.splice(S.length-1,1);b=S.pop();v=R.call("s","a(I)I",b,a,182);S.push(v);
case 467: L[3]=S.pop();
case 468: S.push(L[0]);
case 469: S.push(10);
case 471: a=S.splice(S.length-1,1);b=S.pop();v=R.call("s","a(I)I",b,a,182);S.push(v);
case 474: L[4]=S.pop();
case 476: S.push(L[0]);
case 477: S.push(10);
case 479: a=S.splice(S.length-1,1);b=S.pop();v=R.call("s","a(I)I",b,a,182);S.push(v);
case 482: L[5]=S.pop();
case 484: S.push(L[0]);
case 485: S.push(10);
case 487: a=S.splice(S.length-1,1);b=S.pop();v=R.call("s","a(I)I",b,a,182);S.push(v);
case 490: L[6]=S.pop();
case 492: S.push(L[0]);
case 493: S.push(5);
case 494: a=S.splice(S.length-1,1);b=S.pop();v=R.call("s","a(I)I",b,a,182);S.push(v);
case 497: L[7]=S.pop();
case 499: S.push(0);
case 500: L[8]=S.pop();
case 502: S.push(L[8]);
case 504: S.push(L[6]);
case 506: b=S.pop();a=S.pop();if(a>=b){pc=625;continue flow;}
case 509: S.push(L[0]);
case 510: S.push(L[0]);
case 511: S.push(10);
case 513: a=S.splice(S.length-1,1);b=S.pop();v=R.call("s","a(I)I",b,a,182);S.push(v);
case 516: S.push(S[S.length-1]);
case 517: L[9]=S.pop();
case 519: S.push(L[0]);
case 520: S.push(12);
case 522: a=S.splice(S.length-1,1);b=S.pop();v=R.call("s","a(I)I",b,a,182);S.push(v);
case 525: S.push(S[S.length-1]);
case 526: L[10]=S.pop();
case 528: a=S.splice(S.length-2,2);b=S.pop();v=R.call("s","d(II)V",b,a,182);
case 531: S.push(L[10]);
case 533: S.push(R.array("I",S.pop()));
case 535: L[11]=S.pop();
case 537: S.push(0);
case 538: L[12]=S.pop();
case 540: S.push(0);
case 541: L[1]=S.pop();
case 542: S.push(L[1]);
case 543: S.push(L[10]);
case 545: b=S.pop();a=S.pop();if(a>=b){pc=570;continue flow;}
case 548: S.push(L[11]);
case 550: S.push(L[1]);
case 551: S.push(L[12]);
case 553: S.push(L[0]);
case 554: S.push(L[7]);
case 556: a=S.splice(S.length-1,1);b=S.pop();v=R.call("s","a(I)I",b,a,182);S.push(v);
case 559: b=S.pop();a=S.pop();S.push((a+b)|0);
case 560: S.push(S[S.length-1]);
case 561: L[12]=S.pop();
case 563: v=S.pop();b=S.pop();a=S.pop();R.aset(a,b,v);
case 564: L[1]=(L[1]+(1))|0;
case 567: pc=542;continue flow;
case 570: S.push(0);
case 571: L[1]=S.pop();
case 572: S.push(L[1]);
case 573: S.push(L[10]);
case 575: b=S.pop();a=S.pop();if(a>=b){pc=608;continue flow;}
case 578: S.push(L[0]);
case 579: S.push(L[9]);
case 581: S.push(L[4]);
case 583: S.push(L[11]);
case 585: S.push(L[1]);
case 586: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 587: S.push(L[3]);
case 588: b=S.pop();a=S.pop();S.push(R.irem(a,b));
case 589: b=S.pop();a=S.pop();S.push((a+b)|0);
case 590: S.push(L[5]);
case 592: S.push(L[11]);
case 594: S.push(L[1]);
case 595: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 596: S.push(L[3]);
case 597: b=S.pop();a=S.pop();S.push(R.idiv(a,b));
case 598: b=S.pop();a=S.pop();S.push((a+b)|0);
case 599: a=S.splice(S.length-3,3);b=S.pop();v=R.call("s","c(III)V",b,a,182);
case 602: L[1]=(L[1]+(1))|0;
case 605: pc=572;continue flow;
case 608: S.push(L[2]);
case 609: if(S.pop()===0){pc=619;continue flow;}
case 612: S.push(L[0]);
case 613: S.push(6);
case 615: a=S.splice(S.length-1,1);b=S.pop();v=R.call("s","a(I)I",b,a,182);S.push(v);
case 618: S.pop();
case 619: L[8]=(L[8]+(1))|0;
case 622: pc=502;continue flow;
case 625: S.push(L[0]);
case 626: S.push(null);
case 627: v=S.pop();a=S.pop();R.set(a,"s.a:Ljava/io/DataInputStream;",v);
case 630: return;
default:throw new Error("Invalid control flow s.i(I)V "+pc);
}}catch(error){
throw error;}}});
// s.a(I)I
R.method("s","a(I)I",function(self,args){
const S=[], L=new Array(4).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=self;
L[1]=args[0];
flow: while(true){ try { switch(pc){
case 0: ip=0;S.push(0);
case 1: ip=1;L[2]=S.pop();
case 2: ip=2;S.push(L[1]);
case 3: ip=3;if(S.pop()<=0){pc=77;continue flow;}
case 6: ip=6;S.push(L[0]);
case 7: ip=7;a=S.pop();S.push(R.get(a,"s.b:I"));
case 10: ip=10;if(S.pop()!==0){pc=34;continue flow;}
case 13: ip=13;S.push(L[0]);
case 14: ip=14;S.push(L[0]);
case 15: ip=15;a=S.pop();S.push(R.get(a,"s.a:Ljava/io/DataInputStream;"));
case 18: ip=18;a=S.splice(S.length-0,0);b=S.pop();v=R.call("java/io/DataInputStream","read()I",b,a,182);S.push(v);
case 21: ip=21;v=S.pop();a=S.pop();R.set(a,"s.a:I",v);
case 24: ip=24;pc=28;continue flow;
case 27: ip=27;S.pop();
case 28: ip=28;S.push(L[0]);
case 29: ip=29;S.push(8);
case 31: ip=31;v=S.pop();a=S.pop();R.set(a,"s.b:I",v);
case 34: ip=34;S.push(L[1]);
case 35: ip=35;S.push(L[0]);
case 36: ip=36;a=S.pop();S.push(R.get(a,"s.b:I"));
case 39: ip=39;a=S.splice(S.length-2,2);b=null;v=R.call("java/lang/Math","min(II)I",b,a,184);S.push(v);
case 42: ip=42;L[3]=S.pop();
case 43: ip=43;S.push(L[2]);
case 44: ip=44;S.push(L[0]);
case 45: ip=45;a=S.pop();S.push(R.get(a,"s.a:I"));
case 48: ip=48;S.push(L[0]);
case 49: ip=49;S.push(S[S.length-1]);
case 50: ip=50;a=S.pop();S.push(R.get(a,"s.b:I"));
case 53: ip=53;S.push(L[3]);
case 54: ip=54;b=S.pop();a=S.pop();S.push((a-b)|0);
case 55: ip=55;a=S.pop();b=S.pop();S.push(a,b,a);
case 56: ip=56;v=S.pop();a=S.pop();R.set(a,"s.b:I",v);
case 59: ip=59;b=S.pop();a=S.pop();S.push(a>>b);
case 60: ip=60;S.push(-1);
case 61: ip=61;S.push(L[3]);
case 62: ip=62;b=S.pop();a=S.pop();S.push(a<<b);
case 63: ip=63;S.push(-1);
case 64: ip=64;b=S.pop();a=S.pop();S.push(a^b);
case 65: ip=65;b=S.pop();a=S.pop();S.push(a&b);
case 66: ip=66;S.push(L[1]);
case 67: ip=67;S.push(L[3]);
case 68: ip=68;b=S.pop();a=S.pop();S.push((a-b)|0);
case 69: ip=69;S.push(S[S.length-1]);
case 70: ip=70;L[1]=S.pop();
case 71: ip=71;b=S.pop();a=S.pop();S.push(a<<b);
case 72: ip=72;b=S.pop();a=S.pop();S.push(a|b);
case 73: ip=73;L[2]=S.pop();
case 74: ip=74;pc=2;continue flow;
case 77: ip=77;S.push(L[2]);
case 78: ip=78;return S.pop();
default:throw new Error("Invalid control flow s.a(I)I "+pc);
}}catch(error){
if(ip>=13&&ip<24&&R.catches(error,"java/lang/Exception")){S.length=0;S.push(error);pc=27;continue flow;}
throw error;}}});
// s.a()Z
R.method("s","a()Z",function(self,args){
const S=[], L=new Array(1).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=self;
flow: while(true){ try { switch(pc){
case 0: S.push(L[0]);
case 1: S.push(1);
case 2: a=S.splice(S.length-1,1);b=S.pop();v=R.call("s","a(I)I",b,a,182);S.push(v);
case 5: S.push(1);
case 6: b=S.pop();a=S.pop();if(a!==b){pc=11;continue flow;}
case 9: S.push(1);
case 10: return S.pop();
case 11: S.push(0);
case 12: return S.pop();
default:throw new Error("Invalid control flow s.a()Z "+pc);
}}catch(error){
throw error;}}});
// s.j()V
R.method("s","j()V",function(self,args){
const S=[], L=new Array(1).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=self;
flow: while(true){ try { switch(pc){
case 0: return;
default:throw new Error("Invalid control flow s.j()V "+pc);
}}catch(error){
throw error;}}});
// s.a(IIII)V
R.method("s","a(IIII)V",function(self,args){
const S=[], L=new Array(5).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=self;
L[1]=args[0];
L[2]=args[1];
L[3]=args[2];
L[4]=args[3];
flow: while(true){ try { switch(pc){
case 0: return;
default:throw new Error("Invalid control flow s.a(IIII)V "+pc);
}}catch(error){
throw error;}}});
// s.c(II)V
R.method("s","c(II)V",function(self,args){
const S=[], L=new Array(3).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=self;
L[1]=args[0];
L[2]=args[1];
flow: while(true){ try { switch(pc){
case 0: return;
default:throw new Error("Invalid control flow s.c(II)V "+pc);
}}catch(error){
throw error;}}});
// s.b(III)V
R.method("s","b(III)V",function(self,args){
const S=[], L=new Array(4).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=self;
L[1]=args[0];
L[2]=args[1];
L[3]=args[2];
flow: while(true){ try { switch(pc){
case 0: return;
default:throw new Error("Invalid control flow s.b(III)V "+pc);
}}catch(error){
throw error;}}});
// s.d(II)V
R.method("s","d(II)V",function(self,args){
const S=[], L=new Array(3).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=self;
L[1]=args[0];
L[2]=args[1];
flow: while(true){ try { switch(pc){
case 0: return;
default:throw new Error("Invalid control flow s.d(II)V "+pc);
}}catch(error){
throw error;}}});
// s.c(III)V
R.method("s","c(III)V",function(self,args){
const S=[], L=new Array(4).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=self;
L[1]=args[0];
L[2]=args[1];
L[3]=args[2];
flow: while(true){ try { switch(pc){
case 0: return;
default:throw new Error("Invalid control flow s.c(III)V "+pc);
}}catch(error){
throw error;}}});
// s.a([III)I
R.method("s","a([III)I",function(self,args){
const S=[], L=new Array(6).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=args[0];
L[1]=args[1];
L[2]=args[2];
flow: while(true){ try { switch(pc){
case 0: S.push(0);
case 1: L[3]=S.pop();
case 2: S.push(L[3]);
case 3: S.push(L[1]);
case 4: b=S.pop();a=S.pop();if(a>b){pc=50;continue flow;}
case 7: S.push(L[3]);
case 8: S.push(L[1]);
case 9: b=S.pop();a=S.pop();S.push((a+b)|0);
case 10: S.push(1);
case 11: b=S.pop();a=S.pop();S.push(a>>b);
case 12: L[4]=S.pop();
case 14: S.push(L[0]);
case 15: S.push(L[4]);
case 17: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 18: S.push(S[S.length-1]);
case 19: L[5]=S.pop();
case 21: S.push(L[2]);
case 22: b=S.pop();a=S.pop();if(a>=b){pc=33;continue flow;}
case 25: S.push(L[4]);
case 27: S.push(1);
case 28: b=S.pop();a=S.pop();S.push((a+b)|0);
case 29: L[3]=S.pop();
case 30: pc=2;continue flow;
case 33: S.push(L[5]);
case 35: S.push(L[2]);
case 36: b=S.pop();a=S.pop();if(a<=b){pc=47;continue flow;}
case 39: S.push(L[4]);
case 41: S.push(1);
case 42: b=S.pop();a=S.pop();S.push((a-b)|0);
case 43: L[1]=S.pop();
case 44: pc=2;continue flow;
case 47: S.push(L[4]);
case 49: return S.pop();
case 50: S.push(L[1]);
case 51: S.push(1);
case 52: b=S.pop();a=S.pop();S.push((a+b)|0);
case 53: return S.pop();
default:throw new Error("Invalid control flow s.a([III)I "+pc);
}}catch(error){
throw error;}}});
// s.l()V
R.method("s","l()V",function(self,args){
const S=[], L=new Array(2).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=self;
flow: while(true){ try { switch(pc){
case 0: S.push(L[0]);
case 1: a=S.pop();S.push(R.get(a,"s.d:[B"));
case 4: L[1]=S.pop();
case 5: S.push(L[0]);
case 6: S.push(L[0]);
case 7: a=S.pop();S.push(R.get(a,"s.e:[B"));
case 10: v=S.pop();a=S.pop();R.set(a,"s.d:[B",v);
case 13: S.push(L[0]);
case 14: S.push(L[1]);
case 15: v=S.pop();a=S.pop();R.set(a,"s.e:[B",v);
case 18: S.push(0);
case 19: L[1]=S.pop();
case 20: S.push(L[1]);
case 21: S.push(64);
case 23: b=S.pop();a=S.pop();if(a>=b){pc=72;continue flow;}
case 26: S.push(L[0]);
case 27: a=S.pop();S.push(R.get(a,"s.e:[B"));
case 30: S.push(L[1]);
case 31: S.push(L[0]);
case 32: a=S.pop();S.push(R.get(a,"s.d:[B"));
case 35: S.push(L[1]);
case 36: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 37: S.push(64);
case 39: b=S.pop();a=S.pop();S.push(a&b);
case 40: S.push(S.pop()<<24>>24);
case 41: v=S.pop();b=S.pop();a=S.pop();R.aset(a,b,v);
case 42: S.push(L[0]);
case 43: a=S.pop();S.push(R.get(a,"s.d:[B"));
case 46: S.push(L[1]);
case 47: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 48: S.push(63);
case 50: b=S.pop();a=S.pop();S.push(a&b);
case 51: if(S.pop()===0){pc=66;continue flow;}
case 54: S.push(L[0]);
case 55: a=S.pop();S.push(R.get(a,"s.d:[B"));
case 58: S.push(L[1]);
case 59: a=S.pop();if(typeof a==="bigint")S.push(a,a);else{b=S.pop();S.push(b,a,b,a);}
case 60: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 61: S.push(64);
case 63: b=S.pop();a=S.pop();S.push(a|b);
case 64: S.push(S.pop()<<24>>24);
case 65: v=S.pop();b=S.pop();a=S.pop();R.aset(a,b,v);
case 66: L[1]=(L[1]+(1))|0;
case 69: pc=20;continue flow;
case 72: S.push(L[0]);
case 73: S.push(L[0]);
case 74: a=S.pop();S.push(R.get(a,"s.j:Z"));
case 77: v=S.pop();a=S.pop();R.set(a,"s.k:Z",v);
case 80: S.push(L[0]);
case 81: S.push(0);
case 82: v=S.pop();a=S.pop();R.set(a,"s.j:Z",v);
case 85: return;
default:throw new Error("Invalid control flow s.l()V "+pc);
}}catch(error){
throw error;}}});
// s.a()V
R.method("s","a()V",function(self,args){
const S=[], L=new Array(2).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=self;
flow: while(true){ try { switch(pc){
case 0: S.push(1);
case 1: L[1]=S.pop();
case 2: S.push(L[1]);
case 3: S.push(64);
case 5: b=S.pop();a=S.pop();if(a>=b){pc=51;continue flow;}
case 8: S.push(L[0]);
case 9: a=S.pop();S.push(R.get(a,"s.d:[B"));
case 12: S.push(L[1]);
case 13: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 14: S.push(64);
case 16: b=S.pop();a=S.pop();S.push(a&b);
case 17: if(S.pop()===0){pc=31;continue flow;}
case 20: S.push(L[0]);
case 21: a=S.pop();S.push(R.get(a,"s.e:[B"));
case 24: S.push(L[1]);
case 25: S.push(-128);
case 27: v=S.pop();b=S.pop();a=S.pop();R.aset(a,b,v);
case 28: pc=38;continue flow;
case 31: S.push(L[0]);
case 32: a=S.pop();S.push(R.get(a,"s.e:[B"));
case 35: S.push(L[1]);
case 36: S.push(0);
case 37: v=S.pop();b=S.pop();a=S.pop();R.aset(a,b,v);
case 38: S.push(L[0]);
case 39: a=S.pop();S.push(R.get(a,"s.d:[B"));
case 42: S.push(L[1]);
case 43: S.push(0);
case 44: v=S.pop();b=S.pop();a=S.pop();R.aset(a,b,v);
case 45: L[1]=(L[1]+(1))|0;
case 48: pc=2;continue flow;
case 51: S.push(L[0]);
case 52: S.push(0);
case 53: v=S.pop();a=S.pop();R.set(a,"s.j:Z",v);
case 56: S.push(L[0]);
case 57: S.push(0);
case 58: v=S.pop();a=S.pop();R.set(a,"s.k:Z",v);
case 61: return;
default:throw new Error("Invalid control flow s.a()V "+pc);
}}catch(error){
throw error;}}});
// s.a(B)Z
R.method("s","a(B)Z",function(self,args){
const S=[], L=new Array(2).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=self;
L[1]=args[0];
flow: while(true){ try { switch(pc){
case 0: S.push(L[0]);
case 1: S.push(L[1]);
case 2: S.push(63);
case 4: a=S.splice(S.length-2,2);b=S.pop();v=R.call("s","a(BB)Z",b,a,183);S.push(v);
case 7: return S.pop();
default:throw new Error("Invalid control flow s.a(B)Z "+pc);
}}catch(error){
throw error;}}});
// s.b(B)Z
R.method("s","b(B)Z",function(self,args){
const S=[], L=new Array(2).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=self;
L[1]=args[0];
flow: while(true){ try { switch(pc){
case 0: S.push(L[0]);
case 1: S.push(L[1]);
case 2: S.push(64);
case 4: a=S.splice(S.length-2,2);b=S.pop();v=R.call("s","a(BB)Z",b,a,183);S.push(v);
case 7: return S.pop();
default:throw new Error("Invalid control flow s.b(B)Z "+pc);
}}catch(error){
throw error;}}});
// s.c(B)Z
R.method("s","c(B)Z",function(self,args){
const S=[], L=new Array(2).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=self;
L[1]=args[0];
flow: while(true){ try { switch(pc){
case 0: S.push(L[0]);
case 1: S.push(L[1]);
case 2: S.push(-128);
case 4: a=S.splice(S.length-2,2);b=S.pop();v=R.call("s","a(BB)Z",b,a,183);S.push(v);
case 7: return S.pop();
default:throw new Error("Invalid control flow s.c(B)Z "+pc);
}}catch(error){
throw error;}}});
// s.b()Z
R.method("s","b()Z",function(self,args){
const S=[], L=new Array(1).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=self;
flow: while(true){ try { switch(pc){
case 0: S.push(L[0]);
case 1: a=S.pop();S.push(R.get(a,"s.k:Z"));
case 4: return S.pop();
default:throw new Error("Invalid control flow s.b()Z "+pc);
}}catch(error){
throw error;}}});
// s.a(BB)Z
R.method("s","a(BB)Z",function(self,args){
const S=[], L=new Array(5).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=self;
L[1]=args[0];
L[2]=args[1];
flow: while(true){ try { switch(pc){
case 0: S.push(L[0]);
case 1: S.push(L[1]);
case 2: L[3]=S.pop();
case 3: L[1]=S.pop();
case 4: S.push(L[3]);
case 5: S.push(S[S.length-1]);
case 6: L[3]=S.pop();
case 7: if(S.pop()===0){pc=20;continue flow;}
case 10: S.push(L[3]);
case 11: S.push(64);
case 13: b=S.pop();a=S.pop();if(a>=b){pc=20;continue flow;}
case 16: S.push(L[3]);
case 17: if(S.pop()>=0){pc=25;continue flow;}
case 20: S.push(-1);
case 21: L[3]=S.pop();
case 22: pc=34;continue flow;
case 25: S.push(L[3]);
case 26: if(S.pop()>=0){pc=34;continue flow;}
case 29: S.push(63);
case 31: S.push(L[3]);
case 32: b=S.pop();a=S.pop();S.push((a-b)|0);
case 33: L[3]=S.pop();
case 34: S.push(0);
case 35: L[4]=S.pop();
case 37: S.push(L[3]);
case 38: if(S.pop()<0){pc=49;continue flow;}
case 41: S.push(L[1]);
case 42: a=S.pop();S.push(R.get(a,"s.d:[B"));
case 45: S.push(L[3]);
case 46: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 47: L[4]=S.pop();
case 49: S.push(L[4]);
case 51: S.push(L[2]);
case 52: b=S.pop();a=S.pop();S.push(a&b);
case 53: if(S.pop()===0){pc=58;continue flow;}
case 56: S.push(1);
case 57: return S.pop();
case 58: S.push(0);
case 59: return S.pop();
default:throw new Error("Invalid control flow s.a(BB)Z "+pc);
}}catch(error){
throw error;}}});
// s.keyPressed(I)V
R.method("s","keyPressed(I)V",function(self,args){
const S=[], L=new Array(4).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=self;
L[1]=args[0];
flow: while(true){ try { switch(pc){
case 0: S.push(L[1]);
case 1: L[2]=S.pop();
case 2: S.push(R.staticGet("s","s.d:Z"));
case 5: if(S.pop()===0){pc=83;continue flow;}
case 8: S.push(0);
case 9: L[3]=S.pop();
case 10: S.push(L[3]);
case 11: S.push(R.staticGet("s","s.a:[[I"));
case 14: S.push(R.length(S.pop()));
case 15: b=S.pop();a=S.pop();if(a>=b){pc=83;continue flow;}
case 18: S.push(L[2]);
case 19: S.push(R.staticGet("s","s.a:[[I"));
case 22: S.push(L[3]);
case 23: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 24: S.push(R.staticGet("s","s.b:[I"));
case 27: S.push(L[3]);
case 28: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 29: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 30: b=S.pop();a=S.pop();if(a!==b){pc=45;continue flow;}
case 33: S.push(R.staticGet("s","s.b:[I"));
case 36: S.push(L[3]);
case 37: a=S.pop();if(typeof a==="bigint")S.push(a,a);else{b=S.pop();S.push(b,a,b,a);}
case 38: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 39: S.push(1);
case 40: b=S.pop();a=S.pop();S.push((a+b)|0);
case 41: v=S.pop();b=S.pop();a=S.pop();R.aset(a,b,v);
case 42: pc=51;continue flow;
case 45: S.push(R.staticGet("s","s.b:[I"));
case 48: S.push(L[3]);
case 49: S.push(0);
case 50: v=S.pop();b=S.pop();a=S.pop();R.aset(a,b,v);
case 51: S.push(R.staticGet("s","s.b:[I"));
case 54: S.push(L[3]);
case 55: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 56: S.push(R.staticGet("s","s.a:[[I"));
case 59: S.push(L[3]);
case 60: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 61: S.push(R.length(S.pop()));
case 62: b=S.pop();a=S.pop();if(a!==b){pc=77;continue flow;}
case 65: S.push(R.staticGet("s","s.a:[Z"));
case 68: S.push(L[3]);
case 69: S.push(1);
case 70: v=S.pop();b=S.pop();a=S.pop();R.aset(a,b,v);
case 71: S.push(R.staticGet("s","s.b:[I"));
case 74: S.push(L[3]);
case 75: S.push(0);
case 76: v=S.pop();b=S.pop();a=S.pop();R.aset(a,b,v);
case 77: L[3]=(L[3]+(1))|0;
case 80: pc=10;continue flow;
case 83: S.push(L[0]);
case 84: S.push(L[1]);
case 85: S.push(1);
case 86: a=S.splice(S.length-2,2);b=S.pop();v=R.call("s","a(IZ)V",b,a,183);
case 89: S.push(L[0]);
case 90: S.push(L[1]);
case 91: a=S.splice(S.length-1,1);b=S.pop();v=R.call("javax/microedition/lcdui/Canvas","keyPressed(I)V",b,a,183);
case 94: return;
default:throw new Error("Invalid control flow s.keyPressed(I)V "+pc);
}}catch(error){
throw error;}}});
// s.keyReleased(I)V
R.method("s","keyReleased(I)V",function(self,args){
const S=[], L=new Array(2).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=self;
L[1]=args[0];
flow: while(true){ try { switch(pc){
case 0: S.push(L[0]);
case 1: S.push(L[1]);
case 2: S.push(0);
case 3: a=S.splice(S.length-2,2);b=S.pop();v=R.call("s","a(IZ)V",b,a,183);
case 6: S.push(L[0]);
case 7: S.push(L[1]);
case 8: a=S.splice(S.length-1,1);b=S.pop();v=R.call("javax/microedition/lcdui/Canvas","keyReleased(I)V",b,a,183);
case 11: S.push(L[0]);
case 12: a=S.splice(S.length-0,0);b=S.pop();v=R.call("s","a()V",b,a,183);
case 15: return;
default:throw new Error("Invalid control flow s.keyReleased(I)V "+pc);
}}catch(error){
throw error;}}});
// s.pointerPressed(II)V
R.method("s","pointerPressed(II)V",function(self,args){
const S=[], L=new Array(3).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=self;
L[1]=args[0];
L[2]=args[1];
flow: while(true){ try { switch(pc){
case 0: return;
default:throw new Error("Invalid control flow s.pointerPressed(II)V "+pc);
}}catch(error){
throw error;}}});
// s.pointerReleased(II)V
R.method("s","pointerReleased(II)V",function(self,args){
const S=[], L=new Array(3).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=self;
L[1]=args[0];
L[2]=args[1];
flow: while(true){ try { switch(pc){
case 0: S.push(L[0]);
case 1: a=S.splice(S.length-0,0);b=S.pop();v=R.call("s","a()V",b,a,183);
case 4: return;
default:throw new Error("Invalid control flow s.pointerReleased(II)V "+pc);
}}catch(error){
throw error;}}});
// s.keyRepeated(I)V
R.method("s","keyRepeated(I)V",function(self,args){
const S=[], L=new Array(2).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=self;
L[1]=args[0];
flow: while(true){ try { switch(pc){
case 0: S.push(L[0]);
case 1: S.push(L[1]);
case 2: a=S.splice(S.length-1,1);b=S.pop();v=R.call("javax/microedition/lcdui/Canvas","keyRepeated(I)V",b,a,183);
case 5: return;
default:throw new Error("Invalid control flow s.keyRepeated(I)V "+pc);
}}catch(error){
throw error;}}});
// s.a(IZ)V
R.method("s","a(IZ)V",function(self,args){
const S=[], L=new Array(8).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=self;
L[1]=args[0];
L[2]=args[1];
flow: while(true){ try { switch(pc){
case 0: S.push(L[1]);
case 1: if(S.pop()===0){pc=152;continue flow;}
case 4: S.push(L[2]);
case 5: if(S.pop()===0){pc=15;continue flow;}
case 8: S.push(0);
case 9: L[3]=S.pop();
case 10: S.push(L[0]);
case 11: S.push(1);
case 12: v=S.pop();a=S.pop();R.set(a,"s.j:Z",v);
case 15: S.push(1);
case 16: L[3]=S.pop();
case 17: S.push(L[3]);
case 18: S.push(64);
case 20: b=S.pop();a=S.pop();if(a>=b){pc=152;continue flow;}
case 23: S.push(R.staticGet("s","s.a:[I"));
case 26: S.push(L[3]);
case 27: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 28: S.push(L[1]);
case 29: b=S.pop();a=S.pop();if(a!==b){pc=146;continue flow;}
case 32: S.push(L[2]);
case 33: if(S.pop()===0){pc=48;continue flow;}
case 36: S.push(L[0]);
case 37: a=S.pop();S.push(R.get(a,"s.e:[B"));
case 40: S.push(L[3]);
case 41: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 42: S.push(64);
case 44: b=S.pop();a=S.pop();S.push(a&b);
case 45: if(S.pop()!==0){pc=146;continue flow;}
case 48: S.push(L[0]);
case 49: S.push(L[3]);
case 50: S.push(L[2]);
case 51: L[6]=S.pop();
case 53: L[5]=S.pop();
case 55: L[4]=S.pop();
case 57: S.push(L[6]);
case 59: if(S.pop()===0){pc=68;continue flow;}
case 62: S.push(L[4]);
case 64: S.push(1);
case 65: v=S.pop();a=S.pop();R.set(a,"s.j:Z",v);
case 68: S.push(L[4]);
case 70: a=S.pop();S.push(R.get(a,"s.e:[B"));
case 73: S.push(L[5]);
case 75: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 76: S.push(63);
case 78: b=S.pop();a=S.pop();S.push(a&b);
case 79: S.push(S.pop()<<24>>24);
case 80: L[7]=S.pop();
case 82: S.push(L[6]);
case 84: if(S.pop()===0){pc=118;continue flow;}
case 87: S.push(L[7]);
case 89: S.push(63);
case 91: b=S.pop();a=S.pop();if(a>=b){pc=101;continue flow;}
case 94: S.push(L[7]);
case 96: S.push(1);
case 97: b=S.pop();a=S.pop();S.push((a+b)|0);
case 98: S.push(S.pop()<<24>>24);
case 99: L[7]=S.pop();
case 101: S.push(L[4]);
case 103: a=S.pop();S.push(R.get(a,"s.e:[B"));
case 106: S.push(L[5]);
case 108: S.push(64);
case 110: S.push(L[7]);
case 112: b=S.pop();a=S.pop();S.push(a|b);
case 113: S.push(S.pop()<<24>>24);
case 114: v=S.pop();b=S.pop();a=S.pop();R.aset(a,b,v);
case 115: pc=146;continue flow;
case 118: S.push(L[4]);
case 120: a=S.pop();S.push(R.get(a,"s.e:[B"));
case 123: S.push(L[5]);
case 125: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 126: S.push(64);
case 128: b=S.pop();a=S.pop();S.push(a&b);
case 129: if(S.pop()===0){pc=146;continue flow;}
case 132: S.push(L[4]);
case 134: a=S.pop();S.push(R.get(a,"s.e:[B"));
case 137: S.push(L[5]);
case 139: S.push(-128);
case 141: S.push(L[7]);
case 143: b=S.pop();a=S.pop();S.push(a|b);
case 144: S.push(S.pop()<<24>>24);
case 145: v=S.pop();b=S.pop();a=S.pop();R.aset(a,b,v);
case 146: L[3]=(L[3]+(1))|0;
case 149: pc=17;continue flow;
case 152: return;
default:throw new Error("Invalid control flow s.a(IZ)V "+pc);
}}catch(error){
throw error;}}});
// s.m()V
R.method("s","m()V",function(self,args){
const S=[], L=new Array(1).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=self;
flow: while(true){ try { switch(pc){
case 0: S.push(L[0]);
case 1: S.push(200);
case 4: v=S.pop();a=S.pop();R.set(a,"s.j:I",v);
case 7: return;
default:throw new Error("Invalid control flow s.m()V "+pc);
}}catch(error){
throw error;}}});
// s.n()V
R.method("s","n()V",function(self,args){
const S=[], L=new Array(1).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=self;
flow: while(true){ try { switch(pc){
case 0: S.push(L[0]);
case 1: S.push(20);
case 3: v=S.pop();a=S.pop();R.set(a,"s.i:I",v);
case 6: return;
default:throw new Error("Invalid control flow s.n()V "+pc);
}}catch(error){
throw error;}}});
// s.b()I
R.method("s","b()I",function(self,args){
const S=[], L=new Array(1).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=self;
flow: while(true){ try { switch(pc){
case 0: S.push(L[0]);
case 1: a=S.pop();S.push(R.get(a,"s.c:I"));
case 4: return S.pop();
default:throw new Error("Invalid control flow s.b()I "+pc);
}}catch(error){
throw error;}}});
// s.paint(Ljavax/microedition/lcdui/Graphics;)V
R.method("s","paint(Ljavax/microedition/lcdui/Graphics;)V",function(self,args){
const S=[], L=new Array(5).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=self;
L[1]=args[0];
flow: while(true){ try { switch(pc){
case 0: S.push(R.staticGet("s","s.e:Z"));
case 3: if(S.pop()===0){pc=45;continue flow;}
case 6: S.push(R.staticGet("s","s.f:Z"));
case 9: if(S.pop()===0){pc=45;continue flow;}
case 12: S.push(L[1]);
case 13: S.push(0);
case 14: a=S.splice(S.length-1,1);b=S.pop();v=R.call("javax/microedition/lcdui/Graphics","setColor(I)V",b,a,182);
case 17: S.push(L[1]);
case 18: S.push(0);
case 19: S.push(0);
case 20: S.push(L[0]);
case 21: S.push(null);
case 22: L[2]=S.pop();
case 23: a=S.splice(S.length-0,0);b=S.pop();v=R.call("javax/microedition/lcdui/Displayable","getWidth()I",b,a,182);S.push(v);
case 26: S.push(L[0]);
case 27: a=S.splice(S.length-0,0);b=S.pop();v=R.call("s","d()I",b,a,182);S.push(v);
case 30: a=S.splice(S.length-4,4);b=S.pop();v=R.call("javax/microedition/lcdui/Graphics","fillRect(IIII)V",b,a,182);
case 33: S.push(L[1]);
case 34: S.push(R.staticGet("s","s.a:Ljavax/microedition/lcdui/Image;"));
case 37: S.push(0);
case 38: S.push(0);
case 39: S.push(20);
case 41: a=S.splice(S.length-4,4);b=S.pop();v=R.call("javax/microedition/lcdui/Graphics","drawImage(Ljavax/microedition/lcdui/Image;III)V",b,a,182);
case 44: return;
case 45: S.push(L[1]);
case 46: if(S.pop()!==null){pc=55;continue flow;}
case 49: S.push(L[0]);
case 50: S.push(1);
case 51: v=S.pop();a=S.pop();R.set(a,"s.p:Z",v);
case 54: return;
case 55: S.push(L[0]);
case 56: S.push(null);
case 57: L[2]=S.pop();
case 58: a=S.splice(S.length-0,0);b=S.pop();v=R.call("javax/microedition/lcdui/Displayable","getWidth()I",b,a,182);S.push(v);
case 61: L[2]=S.pop();
case 62: S.push(L[0]);
case 63: a=S.splice(S.length-0,0);b=S.pop();v=R.call("s","d()I",b,a,182);S.push(v);
case 66: L[3]=S.pop();
case 67: S.push(L[2]);
case 68: S.push(L[0]);
case 69: a=S.pop();S.push(R.get(a,"s.k:I"));
case 72: b=S.pop();a=S.pop();if(a!==b){pc=83;continue flow;}
case 75: S.push(L[3]);
case 76: S.push(L[0]);
case 77: a=S.pop();S.push(R.get(a,"s.l:I"));
case 80: b=S.pop();a=S.pop();if(a===b){pc=87;continue flow;}
case 83: S.push(1);
case 84: pc=88;continue flow;
case 87: S.push(0);
case 88: S.push(0);
case 89: L[4]=S.pop();
case 91: if(S.pop()===0){pc=224;continue flow;}
case 94: S.push(L[0]);
case 95: a=S.pop();S.push(R.get(a,"s.o:Z"));
case 98: if(S.pop()===0){pc=212;continue flow;}
case 101: S.push(L[3]);
case 102: S.push(L[0]);
case 103: a=S.pop();S.push(R.get(a,"s.l:I"));
case 106: b=S.pop();a=S.pop();S.push((a-b)|0);
case 107: S.push(1);
case 108: b=S.pop();a=S.pop();S.push((a+b)|0);
case 109: S.push(1);
case 110: b=S.pop();a=S.pop();S.push((a>>>b)|0);
case 111: L[4]=S.pop();
case 113: S.push(L[1]);
case 114: S.push(-16777216);
case 116: a=S.splice(S.length-1,1);b=S.pop();v=R.call("javax/microedition/lcdui/Graphics","setColor(I)V",b,a,182);
case 119: S.push(L[4]);
case 121: if(S.pop()<=0){pc=154;continue flow;}
case 124: S.push(L[0]);
case 125: a=S.pop();S.push(R.get(a,"s.n:I"));
case 128: if(S.pop()<=0){pc=142;continue flow;}
case 131: S.push(L[1]);
case 132: S.push(0);
case 133: S.push(0);
case 134: S.push(L[2]);
case 135: S.push(L[0]);
case 136: a=S.pop();S.push(R.get(a,"s.n:I"));
case 139: a=S.splice(S.length-4,4);b=S.pop();v=R.call("javax/microedition/lcdui/Graphics","fillRect(IIII)V",b,a,182);
case 142: S.push(L[1]);
case 143: S.push(0);
case 144: S.push(L[3]);
case 145: S.push(L[4]);
case 147: b=S.pop();a=S.pop();S.push((a-b)|0);
case 148: S.push(L[2]);
case 149: S.push(L[4]);
case 151: a=S.splice(S.length-4,4);b=S.pop();v=R.call("javax/microedition/lcdui/Graphics","fillRect(IIII)V",b,a,182);
case 154: S.push(L[2]);
case 155: S.push(L[0]);
case 156: a=S.pop();S.push(R.get(a,"s.k:I"));
case 159: b=S.pop();a=S.pop();S.push((a-b)|0);
case 160: S.push(1);
case 161: b=S.pop();a=S.pop();S.push((a+b)|0);
case 162: S.push(1);
case 163: b=S.pop();a=S.pop();S.push((a>>>b)|0);
case 164: S.push(S[S.length-1]);
case 165: L[4]=S.pop();
case 167: if(S.pop()<=0){pc=212;continue flow;}
case 170: S.push(L[0]);
case 171: a=S.pop();S.push(R.get(a,"s.m:I"));
case 174: if(S.pop()<=0){pc=194;continue flow;}
case 177: S.push(L[1]);
case 178: S.push(0);
case 179: S.push(L[0]);
case 180: a=S.pop();S.push(R.get(a,"s.n:I"));
case 183: S.push(L[0]);
case 184: a=S.pop();S.push(R.get(a,"s.m:I"));
case 187: S.push(L[0]);
case 188: a=S.pop();S.push(R.get(a,"s.l:I"));
case 191: a=S.splice(S.length-4,4);b=S.pop();v=R.call("javax/microedition/lcdui/Graphics","fillRect(IIII)V",b,a,182);
case 194: S.push(L[1]);
case 195: S.push(L[2]);
case 196: S.push(L[4]);
case 198: b=S.pop();a=S.pop();S.push((a-b)|0);
case 199: S.push(L[0]);
case 200: a=S.pop();S.push(R.get(a,"s.n:I"));
case 203: S.push(L[4]);
case 205: S.push(L[0]);
case 206: a=S.pop();S.push(R.get(a,"s.l:I"));
case 209: a=S.splice(S.length-4,4);b=S.pop();v=R.call("javax/microedition/lcdui/Graphics","fillRect(IIII)V",b,a,182);
case 212: S.push(L[1]);
case 213: S.push(L[0]);
case 214: a=S.pop();S.push(R.get(a,"s.m:I"));
case 217: S.push(L[0]);
case 218: a=S.pop();S.push(R.get(a,"s.n:I"));
case 221: a=S.splice(S.length-2,2);b=S.pop();v=R.call("javax/microedition/lcdui/Graphics","translate(II)V",b,a,182);
case 224: S.push(L[0]);
case 225: S.push(L[1]);
case 226: a=S.splice(S.length-1,1);b=S.pop();v=R.call("s","b(Ljavax/microedition/lcdui/Graphics;)V",b,a,182);
case 229: S.push(L[0]);
case 230: S.push(L[1]);
case 231: a=S.splice(S.length-1,1);b=S.pop();v=R.call("s","a(Ljavax/microedition/lcdui/Graphics;)V",b,a,182);
case 234: return;
default:throw new Error("Invalid control flow s.paint(Ljavax/microedition/lcdui/Graphics;)V "+pc);
}}catch(error){
throw error;}}});
// s.e(II)V
R.method("s","e(II)V",function(self,args){
const S=[], L=new Array(5).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=self;
L[1]=args[0];
L[2]=args[1];
flow: while(true){ try { switch(pc){
case 0: S.push(L[0]);
case 1: S.push(1);
case 2: v=S.pop();a=S.pop();R.set(a,"s.p:Z",v);
case 5: S.push(L[0]);
case 6: S.push(null);
case 7: L[3]=S.pop();
case 8: a=S.splice(S.length-0,0);b=S.pop();v=R.call("javax/microedition/lcdui/Displayable","getWidth()I",b,a,182);S.push(v);
case 11: L[3]=S.pop();
case 12: S.push(L[0]);
case 13: a=S.splice(S.length-0,0);b=S.pop();v=R.call("s","d()I",b,a,182);S.push(v);
case 16: L[4]=S.pop();
case 18: S.push(L[1]);
case 19: if(S.pop()>0){pc=24;continue flow;}
case 22: S.push(L[3]);
case 23: L[1]=S.pop();
case 24: S.push(L[2]);
case 25: if(S.pop()>0){pc=31;continue flow;}
case 28: S.push(L[4]);
case 30: L[2]=S.pop();
case 31: S.push(L[0]);
case 32: S.push(L[1]);
case 33: v=S.pop();a=S.pop();R.set(a,"s.k:I",v);
case 36: S.push(L[0]);
case 37: S.push(L[2]);
case 38: v=S.pop();a=S.pop();R.set(a,"s.l:I",v);
case 41: S.push(L[0]);
case 42: S.push(L[3]);
case 43: S.push(L[1]);
case 44: b=S.pop();a=S.pop();S.push((a-b)|0);
case 45: v=S.pop();a=S.pop();R.set(a,"s.m:I",v);
case 48: S.push(L[0]);
case 49: S.push(L[4]);
case 51: S.push(L[2]);
case 52: b=S.pop();a=S.pop();S.push((a-b)|0);
case 53: v=S.pop();a=S.pop();R.set(a,"s.n:I",v);
case 56: S.push(L[0]);
case 57: a=S.pop();S.push(R.get(a,"s.m:I"));
case 60: if(S.pop()>=0){pc=73;continue flow;}
case 63: S.push(L[0]);
case 64: S.push(S[S.length-1]);
case 65: a=S.pop();S.push(R.get(a,"s.m:I"));
case 68: S.push(1);
case 69: b=S.pop();a=S.pop();S.push((a+b)|0);
case 70: v=S.pop();a=S.pop();R.set(a,"s.m:I",v);
case 73: S.push(L[0]);
case 74: a=S.pop();S.push(R.get(a,"s.n:I"));
case 77: if(S.pop()>=0){pc=90;continue flow;}
case 80: S.push(L[0]);
case 81: S.push(S[S.length-1]);
case 82: a=S.pop();S.push(R.get(a,"s.n:I"));
case 85: S.push(1);
case 86: b=S.pop();a=S.pop();S.push((a+b)|0);
case 87: v=S.pop();a=S.pop();R.set(a,"s.n:I",v);
case 90: S.push(L[0]);
case 91: S.push(S[S.length-1]);
case 92: a=S.pop();S.push(R.get(a,"s.m:I"));
case 95: S.push(1);
case 96: b=S.pop();a=S.pop();S.push(a>>b);
case 97: v=S.pop();a=S.pop();R.set(a,"s.m:I",v);
case 100: S.push(L[0]);
case 101: S.push(S[S.length-1]);
case 102: a=S.pop();S.push(R.get(a,"s.n:I"));
case 105: S.push(1);
case 106: b=S.pop();a=S.pop();S.push(a>>b);
case 107: v=S.pop();a=S.pop();R.set(a,"s.n:I",v);
case 110: return;
default:throw new Error("Invalid control flow s.e(II)V "+pc);
}}catch(error){
throw error;}}});
// s.b(Ljavax/microedition/lcdui/Graphics;)V
R.method("s","b(Ljavax/microedition/lcdui/Graphics;)V",function(self,args){
const S=[], L=new Array(2).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=self;
L[1]=args[0];
flow: while(true){ try { switch(pc){
case 0: S.push(L[1]);
case 1: S.push(0);
case 2: S.push(0);
case 3: S.push(L[0]);
case 4: a=S.pop();S.push(R.get(a,"s.k:I"));
case 7: S.push(L[0]);
case 8: a=S.pop();S.push(R.get(a,"s.l:I"));
case 11: a=S.splice(S.length-4,4);b=S.pop();v=R.call("javax/microedition/lcdui/Graphics","setClip(IIII)V",b,a,182);
case 14: return;
default:throw new Error("Invalid control flow s.b(Ljavax/microedition/lcdui/Graphics;)V "+pc);
}}catch(error){
throw error;}}});
// s.c()I
R.method("s","c()I",function(self,args){
const S=[], L=new Array(1).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=self;
flow: while(true){ try { switch(pc){
case 0: S.push(L[0]);
case 1: a=S.splice(S.length-0,0);b=S.pop();v=R.call("javax/microedition/lcdui/Displayable","getWidth()I",b,a,182);S.push(v);
case 4: return S.pop();
default:throw new Error("Invalid control flow s.c()I "+pc);
}}catch(error){
throw error;}}});
// s.d()I
R.method("s","d()I",function(self,args){
const S=[], L=new Array(1).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=self;
flow: while(true){ try { switch(pc){
case 0: S.push(L[0]);
case 1: a=S.splice(S.length-0,0);b=S.pop();v=R.call("javax/microedition/lcdui/Displayable","getHeight()I",b,a,182);S.push(v);
case 4: S.push(R.staticGet("s","s.d:I"));
case 7: b=S.pop();a=S.pop();S.push((a-b)|0);
case 8: return S.pop();
default:throw new Error("Invalid control flow s.d()I "+pc);
}}catch(error){
throw error;}}});
// s.e()I
R.method("s","e()I",function(self,args){
const S=[], L=new Array(1).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=self;
flow: while(true){ try { switch(pc){
case 0: S.push(L[0]);
case 1: a=S.pop();S.push(R.get(a,"s.k:I"));
case 4: return S.pop();
default:throw new Error("Invalid control flow s.e()I "+pc);
}}catch(error){
throw error;}}});
// s.f()I
R.method("s","f()I",function(self,args){
const S=[], L=new Array(1).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=self;
flow: while(true){ try { switch(pc){
case 0: S.push(L[0]);
case 1: a=S.pop();S.push(R.get(a,"s.l:I"));
case 4: return S.pop();
default:throw new Error("Invalid control flow s.f()I "+pc);
}}catch(error){
throw error;}}});
// s.c()Z
R.method("s","c()Z",function(self,args){
const S=[], L=new Array(1).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=self;
flow: while(true){ try { switch(pc){
case 0: S.push(L[0]);
case 1: a=S.pop();S.push(R.get(a,"s.o:Z"));
case 4: return S.pop();
default:throw new Error("Invalid control flow s.c()Z "+pc);
}}catch(error){
throw error;}}});
// s.o()V
R.method("s","o()V",function(self,args){
const S=[], L=new Array(1).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=self;
flow: while(true){ try { switch(pc){
case 0: S.push(L[0]);
case 1: S.push(1);
case 2: v=S.pop();a=S.pop();R.set(a,"s.p:Z",v);
case 5: return;
default:throw new Error("Invalid control flow s.o()V "+pc);
}}catch(error){
throw error;}}});
// s.a(I)V
R.method("s","a(I)V",function(self,args){
const S=[], L=new Array(2).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=self;
L[1]=args[0];
flow: while(true){ try { switch(pc){
case 0: S.push(L[1]);
case 1: S.push(3);
case 2: b=S.pop();a=S.pop();if(a!==b){pc=38;continue flow;}
case 5: S.push(L[0]);
case 6: a=S.pop();S.push(R.get(a,"s.n:Z"));
case 9: if(S.pop()===0){pc=13;continue flow;}
case 12: return;
case 13: S.push(L[0]);
case 14: S.push(1);
case 15: v=S.pop();a=S.pop();R.set(a,"s.n:Z",v);
case 18: S.push(L[0]);
case 19: a=S.pop();S.push(R.get(a,"s.a:Ll;"));
case 22: if(S.pop()===null){pc=32;continue flow;}
case 25: S.push(L[0]);
case 26: a=S.pop();S.push(R.get(a,"s.a:Ll;"));
case 29: a=S.splice(S.length-0,0);b=S.pop();v=R.call("l","a()V",b,a,182);
case 32: S.push(R.staticGet("s","s.a:Ljavax/microedition/midlet/MIDlet;"));
case 35: a=S.splice(S.length-0,0);b=S.pop();v=R.call("javax/microedition/midlet/MIDlet","notifyDestroyed()V",b,a,182);
case 38: S.push(L[1]);
case 39: if(S.pop()===0){pc=52;continue flow;}
case 42: S.push(L[1]);
case 43: S.push(1);
case 44: b=S.pop();a=S.pop();if(a===b){pc=52;continue flow;}
case 47: S.push(L[1]);
case 48: S.push(2);
case 49: b=S.pop();a=S.pop();if(a!==b){pc=66;continue flow;}
case 52: S.push(L[0]);
case 53: S.push(1);
case 54: v=S.pop();a=S.pop();R.set(a,"s.p:Z",v);
case 57: S.push(L[0]);
case 58: S.push(1);
case 59: v=S.pop();a=S.pop();R.set(a,"s.l:Z",v);
case 62: S.push(L[0]);
case 63: a=S.splice(S.length-0,0);b=S.pop();v=R.call("s","a()V",b,a,183);
case 66: return;
default:throw new Error("Invalid control flow s.a(I)V "+pc);
}}catch(error){
throw error;}}});
// s.hideNotify()V
R.method("s","hideNotify()V",function(self,args){
const S=[], L=new Array(1).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=self;
flow: while(true){ try { switch(pc){
case 0: S.push(L[0]);
case 1: S.push(1);
case 2: a=S.splice(S.length-1,1);b=S.pop();v=R.call("s","j(I)V",b,a,182);
case 5: return;
default:throw new Error("Invalid control flow s.hideNotify()V "+pc);
}}catch(error){
throw error;}}});
// s.showNotify()V
R.method("s","showNotify()V",function(self,args){
const S=[], L=new Array(1).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=self;
flow: while(true){ try { switch(pc){
case 0: S.push(L[0]);
case 1: S.push(2);
case 2: a=S.splice(S.length-1,1);b=S.pop();v=R.call("s","j(I)V",b,a,182);
case 5: S.push(R.staticGet("s","s.a:Ljava/lang/Thread;"));
case 8: if(S.pop()!==null){pc=26;continue flow;}
case 11: S.push(R.new("java/lang/Thread"));
case 14: S.push(S[S.length-1]);
case 15: S.push(L[0]);
case 16: a=S.splice(S.length-1,1);b=S.pop();v=R.call("java/lang/Thread","<init>(Ljava/lang/Runnable;)V",b,a,183);
case 19: S.push(S[S.length-1]);
case 20: R.staticSet("s","s.a:Ljava/lang/Thread;",S.pop());
case 23: a=S.splice(S.length-0,0);b=S.pop();v=R.call("java/lang/Thread","start()V",b,a,182);
case 26: return;
default:throw new Error("Invalid control flow s.showNotify()V "+pc);
}}catch(error){
throw error;}}});
// s.j(I)V
R.method("s","j(I)V",function(self,args){
const S=[], L=new Array(2).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=self;
L[1]=args[0];
flow: while(true){ try { switch(pc){
case 0: S.push(L[0]);
case 1: a=S.pop();S.push(R.get(a,"s.n:Z"));
case 4: if(S.pop()===0){pc=8;continue flow;}
case 7: return;
case 8: S.push(L[1]);
case 9: S.push(3);
case 10: b=S.pop();a=S.pop();if(a!==b){pc=19;continue flow;}
case 13: S.push(L[0]);
case 14: S.push(L[1]);
case 15: a=S.splice(S.length-1,1);b=S.pop();v=R.call("s","a(I)V",b,a,182);
case 18: return;
case 19: S.push(L[1]);
case 20: S.push(1);
case 21: b=S.pop();a=S.pop();if(a===b){pc=29;continue flow;}
case 24: S.push(L[1]);
case 25: S.push(2);
case 26: b=S.pop();a=S.pop();if(a!==b){pc=85;continue flow;}
case 29: S.push(L[0]);
case 30: a=S.pop();S.push(R.get(a,"s.m:Z"));
case 33: if(S.pop()===0){pc=90;continue flow;}
case 36: S.push(L[1]);
case 37: S.push(1);
case 38: b=S.pop();a=S.pop();if(a!==b){pc=58;continue flow;}
case 41: S.push(L[0]);
case 42: a=S.pop();S.push(R.get(a,"s.a:Ll;"));
case 45: if(S.pop()===null){pc=72;continue flow;}
case 48: S.push(L[0]);
case 49: a=S.pop();S.push(R.get(a,"s.a:Ll;"));
case 52: a=S.splice(S.length-0,0);b=S.pop();v=R.call("l","c()V",b,a,182);
case 55: pc=72;continue flow;
case 58: S.push(L[0]);
case 59: a=S.pop();S.push(R.get(a,"s.a:Ll;"));
case 62: if(S.pop()===null){pc=72;continue flow;}
case 65: S.push(L[0]);
case 66: a=S.pop();S.push(R.get(a,"s.a:Ll;"));
case 69: a=S.splice(S.length-0,0);b=S.pop();v=R.call("l","c()V",b,a,182);
case 72: S.push(L[0]);
case 73: S.push(L[1]);
case 74: v=S.pop();a=S.pop();R.set(a,"s.o:I",v);
case 77: S.push(L[0]);
case 78: a=S.splice(S.length-0,0);b=null;v=R.call("java/lang/System","currentTimeMillis()J",b,a,184);S.push(v);
case 81: v=S.pop();a=S.pop();R.set(a,"s.c:J",v);
case 84: return;
case 85: S.push(L[0]);
case 86: S.push(L[1]);
case 87: a=S.splice(S.length-1,1);b=S.pop();v=R.call("s","a(I)V",b,a,182);
case 90: return;
default:throw new Error("Invalid control flow s.j(I)V "+pc);
}}catch(error){
throw error;}}});
// s.a(Ljava/lang/String;)Z
R.method("s","a(Ljava/lang/String;)Z",function(self,args){
const S=[], L=new Array(2).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=self;
L[1]=args[0];
flow: while(true){ try { switch(pc){
case 0: S.push(L[0]);
case 1: S.push(L[1]);
case 2: a=S.splice(S.length-1,1);b=S.pop();v=R.call("s","b(Ljava/lang/String;)Z",b,a,183);S.push(v);
case 5: return S.pop();
default:throw new Error("Invalid control flow s.a(Ljava/lang/String;)Z "+pc);
}}catch(error){
throw error;}}});
// s.b(Ljava/lang/String;)Z
R.method("s","b(Ljava/lang/String;)Z",function(self,args){
const S=[], L=new Array(3).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=self;
L[1]=args[0];
flow: while(true){ try { switch(pc){
case 0: ip=0;S.push(1);
case 1: ip=1;L[2]=S.pop();
case 2: ip=2;S.push(L[0]);
case 3: ip=3;a=S.pop();S.push(R.get(a,"s.a:Ll;"));
case 6: ip=6;if(S.pop()===null){pc=16;continue flow;}
case 9: ip=9;S.push(L[0]);
case 10: ip=10;a=S.pop();S.push(R.get(a,"s.a:Ll;"));
case 13: ip=13;a=S.splice(S.length-0,0);b=S.pop();v=R.call("l","c()V",b,a,182);
case 16: ip=16;S.push(R.staticGet("s","s.a:Ljavax/microedition/midlet/MIDlet;"));
case 19: ip=19;S.push(L[1]);
case 20: ip=20;a=S.splice(S.length-1,1);b=S.pop();v=R.call("javax/microedition/midlet/MIDlet","platformRequest(Ljava/lang/String;)Z",b,a,182);S.push(v);
case 23: ip=23;S.pop();
case 24: ip=24;pc=30;continue flow;
case 27: ip=27;S.pop();
case 28: ip=28;S.push(0);
case 29: ip=29;L[2]=S.pop();
case 30: ip=30;S.push(L[0]);
case 31: ip=31;S.push(3);
case 32: ip=32;a=S.splice(S.length-1,1);b=S.pop();v=R.call("s","j(I)V",b,a,182);
case 35: ip=35;S.push(L[2]);
case 36: ip=36;return S.pop();
default:throw new Error("Invalid control flow s.b(Ljava/lang/String;)Z "+pc);
}}catch(error){
if(ip>=16&&ip<24&&R.catches(error,"java/lang/Throwable")){S.length=0;S.push(error);pc=27;continue flow;}
throw error;}}});
// s.run()V
R.method("s","run()V",function(self,args){
const S=[], L=new Array(5).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=self;
flow: while(true){ try { switch(pc){
case 0: ip=0;S.push(L[0]);
case 1: ip=1;S.push(1);
case 2: ip=2;v=S.pop();a=S.pop();R.set(a,"s.m:Z",v);
case 5: ip=5;S.push(L[0]);
case 6: ip=6;S.push(0);
case 7: ip=7;a=S.splice(S.length-1,1);b=S.pop();v=R.call("s","a(I)V",b,a,182);
case 10: ip=10;S.push(L[0]);
case 11: ip=11;a=S.pop();S.push(R.get(a,"s.n:Z"));
case 14: ip=14;if(S.pop()!==0){pc=435;continue flow;}
case 17: ip=17;S.push(L[0]);
case 18: ip=18;L[1]=S.pop();
case 19: ip=19;S.push(L[1]);
case 20: ip=20;a=S.pop();S.push(R.get(a,"s.o:I"));
case 23: ip=23;S.push(-1);
case 24: ip=24;b=S.pop();a=S.pop();if(a===b){pc=137;continue flow;}
case 27: ip=27;S.push(L[1]);
case 28: ip=28;a=S.pop();S.push(R.get(a,"s.p:I"));
case 31: ip=31;S.push(1);
case 32: ip=32;b=S.pop();a=S.pop();if(a===b){pc=45;continue flow;}
case 35: ip=35;S.push(L[1]);
case 36: ip=36;S.push(1);
case 37: ip=37;a=S.splice(S.length-1,1);b=S.pop();v=R.call("s","a(I)V",b,a,182);
case 40: ip=40;S.push(L[1]);
case 41: ip=41;S.push(1);
case 42: ip=42;v=S.pop();a=S.pop();R.set(a,"s.p:I",v);
case 45: ip=45;S.push(L[1]);
case 46: ip=46;a=S.pop();S.push(R.get(a,"s.o:I"));
case 49: ip=49;S.push(1);
case 50: ip=50;b=S.pop();a=S.pop();if(a!==b){pc=58;continue flow;}
case 53: ip=53;S.push(L[1]);
case 54: ip=54;S.push(-1);
case 55: ip=55;v=S.pop();a=S.pop();R.set(a,"s.o:I",v);
case 58: ip=58;S.push(L[1]);
case 59: ip=59;a=S.pop();S.push(R.get(a,"s.o:I"));
case 62: ip=62;S.push(2);
case 63: ip=63;b=S.pop();a=S.pop();if(a!==b){pc=19;continue flow;}
case 66: ip=66;S.push(L[1]);
case 67: ip=67;a=S.splice(S.length-0,0);b=S.pop();v=R.call("javax/microedition/lcdui/Displayable","isShown()Z",b,a,182);S.push(v);
case 70: ip=70;if(S.pop()===0){pc=19;continue flow;}
case 73: ip=73;a=S.splice(S.length-0,0);b=null;v=R.call("java/lang/System","currentTimeMillis()J",b,a,184);S.push(v);
case 76: ip=76;S.push(L[1]);
case 77: ip=77;a=S.pop();S.push(R.get(a,"s.c:J"));
case 80: ip=80;b=S.pop();a=S.pop();S.push(BigInt.asIntN(64,a-b));
case 81: ip=81;S.push(Number(S.pop())|0);
case 82: ip=82;S.push(0);
case 83: ip=83;L[2]=S.pop();
case 84: ip=84;S.push(750);
case 87: ip=87;b=S.pop();a=S.pop();if(a>=b){pc=106;continue flow;}
case 90: ip=90;S.push(250n);
case 93: ip=93;a=S.splice(S.length-1,1);b=null;v=R.call("java/lang/Thread","sleep(J)V",b,a,184);
case 96: ip=96;a=S.splice(S.length-0,0);b=null;v=R.call("java/lang/Thread","yield()V",b,a,184);
case 99: ip=99;pc=58;continue flow;
case 102: ip=102;S.pop();
case 103: ip=103;pc=58;continue flow;
case 106: ip=106;S.push(L[1]);
case 107: ip=107;a=S.pop();S.push(R.get(a,"s.o:I"));
case 110: ip=110;S.push(2);
case 111: ip=111;b=S.pop();a=S.pop();if(a!==b){pc=134;continue flow;}
case 114: ip=114;S.push(L[1]);
case 115: ip=115;S.push(-1);
case 116: ip=116;v=S.pop();a=S.pop();R.set(a,"s.o:I",v);
case 119: ip=119;S.push(L[1]);
case 120: ip=120;S.push(2);
case 121: ip=121;a=S.splice(S.length-1,1);b=S.pop();v=R.call("s","a(I)V",b,a,182);
case 124: ip=124;S.push(L[1]);
case 125: ip=125;S.push(2);
case 126: ip=126;v=S.pop();a=S.pop();R.set(a,"s.p:I",v);
case 129: ip=129;S.push(L[1]);
case 130: ip=130;S.push(5);
case 131: ip=131;a=S.splice(S.length-1,1);b=S.pop();v=R.call("s","a(I)V",b,a,182);
case 134: ip=134;pc=58;continue flow;
case 137: ip=137;S.push(R.staticGet("s","s.e:I"));
case 140: ip=140;if(S.pop()<=0){pc=178;continue flow;}
case 143: ip=143;a=S.splice(S.length-0,0);b=null;v=R.call("java/lang/System","currentTimeMillis()J",b,a,184);S.push(v);
case 146: ip=146;L[1]=S.pop();
case 147: ip=147;S.push(R.staticGet("s","s.a:Z"));
case 150: ip=150;if(S.pop()!==0){pc=174;continue flow;}
case 153: ip=153;S.push(L[1]);
case 154: ip=154;S.push(R.staticGet("s","s.a:J"));
case 157: ip=157;b=S.pop();a=S.pop();S.push(BigInt.asIntN(64,a-b));
case 158: ip=158;S.push(R.staticGet("s","s.e:I"));
case 161: ip=161;S.push(BigInt(S.pop()));
case 162: ip=162;b=S.pop();a=S.pop();S.push(a>b?1:a<b?-1:0);
case 163: ip=163;if(S.pop()<=0){pc=170;continue flow;}
case 166: ip=166;S.push(1);
case 167: ip=167;pc=171;continue flow;
case 170: ip=170;S.push(0);
case 171: ip=171;R.staticSet("s","s.a:Z",S.pop());
case 174: ip=174;S.push(L[1]);
case 175: ip=175;R.staticSet("s","s.a:J",S.pop());
case 178: ip=178;S.push(R.staticGet("s","s.a:Z"));
case 181: ip=181;if(S.pop()===0){pc=199;continue flow;}
case 184: ip=184;S.push(0);
case 185: ip=185;R.staticSet("s","s.a:Z",S.pop());
case 188: ip=188;S.push(L[0]);
case 189: ip=189;S.push(null);
case 190: ip=190;L[1]=S.pop();
case 191: ip=191;S.push(1);
case 192: ip=192;a=S.splice(S.length-1,1);b=S.pop();v=R.call("s","j(I)V",b,a,182);
case 195: ip=195;S.push(L[0]);
case 196: ip=196;a=S.splice(S.length-0,0);b=S.pop();v=R.call("s","showNotify()V",b,a,182);
case 199: ip=199;S.push(L[0]);
case 200: ip=200;a=S.splice(S.length-0,0);b=S.pop();v=R.call("javax/microedition/lcdui/Displayable","isShown()Z",b,a,182);S.push(v);
case 203: ip=203;if(S.pop()===0){pc=414;continue flow;}
case 206: ip=206;a=S.splice(S.length-0,0);b=null;v=R.call("java/lang/System","currentTimeMillis()J",b,a,184);S.push(v);
case 209: ip=209;L[1]=S.pop();
case 210: ip=210;S.push(L[0]);
case 211: ip=211;a=S.pop();S.push(R.get(a,"s.l:Z"));
case 214: ip=214;if(S.pop()===0){pc=233;continue flow;}
case 217: ip=217;S.push(L[0]);
case 218: ip=218;S.push(0);
case 219: ip=219;v=S.pop();a=S.pop();R.set(a,"s.l:Z",v);
case 222: ip=222;S.push(L[0]);
case 223: ip=223;S.push(L[0]);
case 224: ip=224;a=S.pop();S.push(R.get(a,"s.i:I"));
case 227: ip=227;v=S.pop();a=S.pop();R.set(a,"s.c:I",v);
case 230: ip=230;pc=330;continue flow;
case 233: ip=233;S.push(L[1]);
case 234: ip=234;S.push(L[0]);
case 235: ip=235;a=S.pop();S.push(R.get(a,"s.b:J"));
case 238: ip=238;b=S.pop();a=S.pop();S.push(BigInt.asIntN(64,a-b));
case 239: ip=239;S.push(Number(S.pop())|0);
case 240: ip=240;S.push(S[S.length-1]);
case 241: ip=241;L[3]=S.pop();
case 242: ip=242;S.push(L[0]);
case 243: ip=243;a=S.pop();S.push(R.get(a,"s.j:I"));
case 246: ip=246;b=S.pop();a=S.pop();if(a>b){pc=253;continue flow;}
case 249: ip=249;S.push(L[3]);
case 250: ip=250;if(S.pop()>=0){pc=258;continue flow;}
case 253: ip=253;S.push(L[0]);
case 254: ip=254;a=S.pop();S.push(R.get(a,"s.j:I"));
case 257: ip=257;L[3]=S.pop();
case 258: ip=258;S.push(L[0]);
case 259: ip=259;S.push(L[3]);
case 260: ip=260;v=S.pop();a=S.pop();R.set(a,"s.c:I",v);
case 263: ip=263;S.push(L[0]);
case 264: ip=264;a=S.pop();S.push(R.get(a,"s.c:I"));
case 267: ip=267;S.push(L[0]);
case 268: ip=268;a=S.pop();S.push(R.get(a,"s.i:I"));
case 271: ip=271;b=S.pop();a=S.pop();if(a>=b){pc=330;continue flow;}
case 274: ip=274;S.push(L[0]);
case 275: ip=275;a=S.pop();S.push(R.get(a,"s.i:I"));
case 278: ip=278;S.push(L[0]);
case 279: ip=279;a=S.pop();S.push(R.get(a,"s.c:I"));
case 282: ip=282;b=S.pop();a=S.pop();S.push((a-b)|0);
case 283: ip=283;S.push(S[S.length-1]);
case 284: ip=284;L[3]=S.pop();
case 285: ip=285;S.push(10);
case 287: ip=287;b=S.pop();a=S.pop();if(a>=b){pc=293;continue flow;}
case 290: ip=290;S.push(10);
case 292: ip=292;L[3]=S.pop();
case 293: ip=293;S.push(L[0]);
case 294: ip=294;a=S.pop();S.push(R.get(a,"s.i:I"));
case 297: ip=297;S.push(L[0]);
case 298: ip=298;a=S.pop();S.push(R.get(a,"s.c:I"));
case 301: ip=301;b=S.pop();a=S.pop();S.push((a-b)|0);
case 302: ip=302;L[4]=S.pop();
case 304: ip=304;S.push(L[0]);
case 305: ip=305;S.push(S[S.length-1]);
case 306: ip=306;a=S.pop();S.push(R.get(a,"s.c:I"));
case 309: ip=309;S.push(L[4]);
case 311: ip=311;b=S.pop();a=S.pop();S.push((a+b)|0);
case 312: ip=312;v=S.pop();a=S.pop();R.set(a,"s.c:I",v);
case 315: ip=315;S.push(L[1]);
case 316: ip=316;S.push(L[4]);
case 318: ip=318;S.push(BigInt(S.pop()));
case 319: ip=319;b=S.pop();a=S.pop();S.push(BigInt.asIntN(64,a+b));
case 320: ip=320;L[1]=S.pop();
case 321: ip=321;S.push(L[3]);
case 322: ip=322;S.push(BigInt(S.pop()));
case 323: ip=323;a=S.splice(S.length-1,1);b=null;v=R.call("java/lang/Thread","sleep(J)V",b,a,184);
case 326: ip=326;pc=330;continue flow;
case 329: ip=329;S.pop();
case 330: ip=330;S.push(L[0]);
case 331: ip=331;S.push(L[1]);
case 332: ip=332;v=S.pop();a=S.pop();R.set(a,"s.b:J",v);
case 335: ip=335;S.push(null);
case 336: ip=336;L[1]=S.pop();
case 337: ip=337;S.push(L[0]);
case 338: ip=338;a=S.splice(S.length-0,0);b=S.pop();v=R.call("s","b()V",b,a,182);
case 341: ip=341;S.push(L[0]);
case 342: ip=342;a=S.pop();S.push(R.get(a,"s.n:Z"));
case 345: ip=345;if(S.pop()===0){pc=349;continue flow;}
case 348: ip=348;return;
case 349: ip=349;S.push(L[0]);
case 350: ip=350;a=S.pop();S.push(R.get(a,"s.n:Z"));
case 353: ip=353;if(S.pop()===0){pc=357;continue flow;}
case 356: ip=356;return;
case 357: ip=357;S.push(L[0]);
case 358: ip=358;a=S.splice(S.length-0,0);b=S.pop();v=R.call("javax/microedition/lcdui/Displayable","isShown()Z",b,a,182);S.push(v);
case 361: ip=361;if(S.pop()===0){pc=411;continue flow;}
case 364: ip=364;S.push(L[0]);
case 365: ip=365;S.push(L[0]);
case 366: ip=366;a=S.pop();S.push(R.get(a,"s.p:Z"));
case 369: ip=369;v=S.pop();a=S.pop();R.set(a,"s.o:Z",v);
case 372: ip=372;S.push(L[0]);
case 373: ip=373;S.push(0);
case 374: ip=374;v=S.pop();a=S.pop();R.set(a,"s.p:Z",v);
case 377: ip=377;S.push(L[0]);
case 378: ip=378;L[1]=S.pop();
case 379: ip=379;S.push(R.staticGet("s","s.e:Z"));
case 382: ip=382;if(S.pop()===0){pc=403;continue flow;}
case 385: ip=385;S.push(0);
case 386: ip=386;R.staticSet("s","s.f:Z",S.pop());
case 389: ip=389;S.push(L[1]);
case 390: ip=390;S.push(R.staticGet("s","s.a:Ljavax/microedition/lcdui/Image;"));
case 393: ip=393;a=S.splice(S.length-0,0);b=S.pop();v=R.call("javax/microedition/lcdui/Image","getGraphics()Ljavax/microedition/lcdui/Graphics;",b,a,182);S.push(v);
case 396: ip=396;a=S.splice(S.length-1,1);b=S.pop();v=R.call("s","paint(Ljavax/microedition/lcdui/Graphics;)V",b,a,182);
case 399: ip=399;S.push(1);
case 400: ip=400;R.staticSet("s","s.f:Z",S.pop());
case 403: ip=403;S.push(L[1]);
case 404: ip=404;a=S.splice(S.length-0,0);b=S.pop();v=R.call("javax/microedition/lcdui/Canvas","repaint()V",b,a,182);
case 407: ip=407;S.push(L[1]);
case 408: ip=408;a=S.splice(S.length-0,0);b=S.pop();v=R.call("javax/microedition/lcdui/Canvas","serviceRepaints()V",b,a,182);
case 411: ip=411;pc=429;continue flow;
case 414: ip=414;S.push(100n);
case 417: ip=417;a=S.splice(S.length-1,1);b=null;v=R.call("java/lang/Thread","sleep(J)V",b,a,184);
case 420: ip=420;pc=424;continue flow;
case 423: ip=423;S.pop();
case 424: ip=424;S.push(L[0]);
case 425: ip=425;S.push(1);
case 426: ip=426;v=S.pop();a=S.pop();R.set(a,"s.l:Z",v);
case 429: ip=429;a=S.splice(S.length-0,0);b=null;v=R.call("java/lang/Thread","yield()V",b,a,184);
case 432: ip=432;pc=10;continue flow;
case 435: ip=435;return;
default:throw new Error("Invalid control flow s.run()V "+pc);
}}catch(error){
if(ip>=90&&ip<99&&R.catches(error,"java/lang/Exception")){S.length=0;S.push(error);pc=102;continue flow;}
if(ip>=321&&ip<326&&R.catches(error,"java/lang/Exception")){S.length=0;S.push(error);pc=329;continue flow;}
if(ip>=414&&ip<420&&R.catches(error,"java/lang/Exception")){S.length=0;S.push(error);pc=423;continue flow;}
throw error;}}});
// s.<init>(Ljavax/microedition/midlet/MIDlet;)V
R.method("s","<init>(Ljavax/microedition/midlet/MIDlet;)V",function(self,args){
const S=[], L=new Array(2).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=self;
L[1]=args[0];
flow: while(true){ try { switch(pc){
case 0: S.push(L[0]);
case 1: a=S.splice(S.length-0,0);b=S.pop();v=R.call("javax/microedition/lcdui/Canvas","<init>()V",b,a,183);
case 4: S.push(R.new("java/lang/Object"));
case 7: a=S.splice(S.length-0,0);b=S.pop();v=R.call("java/lang/Object","<init>()V",b,a,183);
case 10: S.push(L[0]);
case 11: S.push(0);
case 12: S.push(0);
case 13: S.push(0);
case 14: a=S.splice(S.length-3,3);b=null;v=R.call("javax/microedition/lcdui/Font","getFont(III)Ljavax/microedition/lcdui/Font;",b,a,184);S.push(v);
case 17: v=S.pop();a=S.pop();R.set(a,"s.a:Ljavax/microedition/lcdui/Font;",v);
case 20: S.push(L[0]);
case 21: S.push(64);
case 23: S.push(R.array("B",S.pop()));
case 25: v=S.pop();a=S.pop();R.set(a,"s.d:[B",v);
case 28: S.push(L[0]);
case 29: S.push(64);
case 31: S.push(R.array("B",S.pop()));
case 33: v=S.pop();a=S.pop();R.set(a,"s.e:[B",v);
case 36: S.push(L[0]);
case 37: S.push(10);
case 39: v=S.pop();a=S.pop();R.set(a,"s.c:I",v);
case 42: S.push(L[0]);
case 43: S.push(10);
case 45: v=S.pop();a=S.pop();R.set(a,"s.i:I",v);
case 48: S.push(L[0]);
case 49: S.push(100);
case 51: v=S.pop();a=S.pop();R.set(a,"s.j:I",v);
case 54: S.push(L[0]);
case 55: S.push(-1);
case 56: v=S.pop();a=S.pop();R.set(a,"s.o:I",v);
case 59: S.push(L[0]);
case 60: S.push(2);
case 61: v=S.pop();a=S.pop();R.set(a,"s.p:I",v);
case 64: S.push(L[0]);
case 65: S.push(1);
case 66: a=S.splice(S.length-1,1);b=S.pop();v=R.call("javax/microedition/lcdui/Canvas","setFullScreenMode(Z)V",b,a,182);
case 69: a=S.splice(S.length-0,0);b=null;v=R.call("java/lang/System","currentTimeMillis()J",b,a,184);S.push(v);
case 72: a=S.pop();if(typeof a!=="bigint")S.pop();
case 73: S.push(L[1]);
case 74: R.staticSet("s","s.a:Ljavax/microedition/midlet/MIDlet;",S.pop());
case 77: S.push(L[0]);
case 78: S.push(-1);
case 79: S.push(-1);
case 80: a=S.splice(S.length-2,2);b=S.pop();v=R.call("s","e(II)V",b,a,182);
case 83: return;
default:throw new Error("Invalid control flow s.<init>(Ljavax/microedition/midlet/MIDlet;)V "+pc);
}}catch(error){
throw error;}}});
// s.<clinit>()V
R.method("s","<clinit>()V",function(self,args){
const S=[], L=new Array(1).fill(null); let a,b,c,d,v,pc=0,ip=0;
flow: while(true){ try { switch(pc){
case 0: S.push(3);
case 1: S.push(R.array("Z",S.pop()));
case 3: R.staticSet("s","s.a:[Z",S.pop());
case 6: S.push(3);
case 7: S.push(R.array("I",S.pop()));
case 9: S.push(S[S.length-1]);
case 10: S.push(0);
case 11: S.push(0);
case 12: v=S.pop();b=S.pop();a=S.pop();R.aset(a,b,v);
case 13: S.push(S[S.length-1]);
case 14: S.push(1);
case 15: S.push(0);
case 16: v=S.pop();b=S.pop();a=S.pop();R.aset(a,b,v);
case 17: S.push(S[S.length-1]);
case 18: S.push(2);
case 19: S.push(0);
case 20: v=S.pop();b=S.pop();a=S.pop();R.aset(a,b,v);
case 21: R.staticSet("s","s.b:[I",S.pop());
case 24: S.push(3);
case 25: S.push(R.array("L[I;",S.pop()));
case 28: S.push(S[S.length-1]);
case 29: S.push(0);
case 30: S.push(5);
case 31: S.push(R.array("I",S.pop()));
case 33: S.push(S[S.length-1]);
case 34: S.push(0);
case 35: S.push(-1);
case 36: v=S.pop();b=S.pop();a=S.pop();R.aset(a,b,v);
case 37: S.push(S[S.length-1]);
case 38: S.push(1);
case 39: S.push(-1);
case 40: v=S.pop();b=S.pop();a=S.pop();R.aset(a,b,v);
case 41: S.push(S[S.length-1]);
case 42: S.push(2);
case 43: S.push(-2);
case 45: v=S.pop();b=S.pop();a=S.pop();R.aset(a,b,v);
case 46: S.push(S[S.length-1]);
case 47: S.push(3);
case 48: S.push(-2);
case 50: v=S.pop();b=S.pop();a=S.pop();R.aset(a,b,v);
case 51: S.push(S[S.length-1]);
case 52: S.push(4);
case 53: S.push(-5);
case 55: v=S.pop();b=S.pop();a=S.pop();R.aset(a,b,v);
case 56: v=S.pop();b=S.pop();a=S.pop();R.aset(a,b,v);
case 57: S.push(S[S.length-1]);
case 58: S.push(1);
case 59: S.push(5);
case 60: S.push(R.array("I",S.pop()));
case 62: S.push(S[S.length-1]);
case 63: S.push(0);
case 64: S.push(-1);
case 65: v=S.pop();b=S.pop();a=S.pop();R.aset(a,b,v);
case 66: S.push(S[S.length-1]);
case 67: S.push(1);
case 68: S.push(-2);
case 70: v=S.pop();b=S.pop();a=S.pop();R.aset(a,b,v);
case 71: S.push(S[S.length-1]);
case 72: S.push(2);
case 73: S.push(-1);
case 74: v=S.pop();b=S.pop();a=S.pop();R.aset(a,b,v);
case 75: S.push(S[S.length-1]);
case 76: S.push(3);
case 77: S.push(-2);
case 79: v=S.pop();b=S.pop();a=S.pop();R.aset(a,b,v);
case 80: S.push(S[S.length-1]);
case 81: S.push(4);
case 82: S.push(-5);
case 84: v=S.pop();b=S.pop();a=S.pop();R.aset(a,b,v);
case 85: v=S.pop();b=S.pop();a=S.pop();R.aset(a,b,v);
case 86: S.push(S[S.length-1]);
case 87: S.push(2);
case 88: S.push(5);
case 89: S.push(R.array("I",S.pop()));
case 91: S.push(S[S.length-1]);
case 92: S.push(0);
case 93: S.push(-4);
case 95: v=S.pop();b=S.pop();a=S.pop();R.aset(a,b,v);
case 96: S.push(S[S.length-1]);
case 97: S.push(1);
case 98: S.push(-3);
case 100: v=S.pop();b=S.pop();a=S.pop();R.aset(a,b,v);
case 101: S.push(S[S.length-1]);
case 102: S.push(2);
case 103: S.push(-2);
case 105: v=S.pop();b=S.pop();a=S.pop();R.aset(a,b,v);
case 106: S.push(S[S.length-1]);
case 107: S.push(3);
case 108: S.push(-1);
case 109: v=S.pop();b=S.pop();a=S.pop();R.aset(a,b,v);
case 110: S.push(S[S.length-1]);
case 111: S.push(4);
case 112: S.push(-5);
case 114: v=S.pop();b=S.pop();a=S.pop();R.aset(a,b,v);
case 115: v=S.pop();b=S.pop();a=S.pop();R.aset(a,b,v);
case 116: R.staticSet("s","s.a:[[I",S.pop());
case 119: S.push(0);
case 120: R.staticSet("s","s.d:I",S.pop());
case 123: S.push(0);
case 124: R.staticSet("s","s.e:I",S.pop());
case 127: S.push(0);
case 128: R.staticSet("s","s.e:Z",S.pop());
case 131: S.push("");
case 133: R.staticSet("s","s.c:Ljava/lang/String;",S.pop());
case 136: S.push(64);
case 138: S.push(R.array("I",S.pop()));
case 140: S.push(S[S.length-1]);
case 141: R.staticSet("s","s.a:[I",S.pop());
case 144: S.push(1);
case 145: S.push(-1);
case 146: v=S.pop();b=S.pop();a=S.pop();R.aset(a,b,v);
case 147: S.push(R.staticGet("s","s.a:[I"));
case 150: S.push(2);
case 151: S.push(-3);
case 153: v=S.pop();b=S.pop();a=S.pop();R.aset(a,b,v);
case 154: S.push(R.staticGet("s","s.a:[I"));
case 157: S.push(3);
case 158: S.push(35);
case 160: v=S.pop();b=S.pop();a=S.pop();R.aset(a,b,v);
case 161: S.push(R.staticGet("s","s.a:[I"));
case 164: S.push(4);
case 165: S.push(-8);
case 167: v=S.pop();b=S.pop();a=S.pop();R.aset(a,b,v);
case 168: S.push(R.staticGet("s","s.a:[I"));
case 171: S.push(5);
case 172: S.push(-4);
case 174: v=S.pop();b=S.pop();a=S.pop();R.aset(a,b,v);
case 175: S.push(R.staticGet("s","s.a:[I"));
case 178: S.push(6);
case 180: S.push(-2);
case 182: v=S.pop();b=S.pop();a=S.pop();R.aset(a,b,v);
case 183: S.push(R.staticGet("s","s.a:[I"));
case 186: S.push(8);
case 188: S.push(-5);
case 190: v=S.pop();b=S.pop();a=S.pop();R.aset(a,b,v);
case 191: S.push(R.staticGet("s","s.a:[I"));
case 194: S.push(9);
case 196: S.push(-20);
case 198: v=S.pop();b=S.pop();a=S.pop();R.aset(a,b,v);
case 199: S.push(R.staticGet("s","s.a:[I"));
case 202: S.push(10);
case 204: S.push(42);
case 206: v=S.pop();b=S.pop();a=S.pop();R.aset(a,b,v);
case 207: S.push(R.staticGet("s","s.a:[I"));
case 210: S.push(13);
case 212: S.push(-37);
case 214: v=S.pop();b=S.pop();a=S.pop();R.aset(a,b,v);
case 215: S.push(R.staticGet("s","s.a:[I"));
case 218: S.push(14);
case 220: S.push(-36);
case 222: v=S.pop();b=S.pop();a=S.pop();R.aset(a,b,v);
case 223: S.push(R.staticGet("s","s.a:[I"));
case 226: S.push(15);
case 228: S.push(-11);
case 230: v=S.pop();b=S.pop();a=S.pop();R.aset(a,b,v);
case 231: S.push(0);
case 232: L[0]=S.pop();
case 233: S.push(L[0]);
case 234: S.push(10);
case 236: b=S.pop();a=S.pop();if(a>=b){pc=257;continue flow;}
case 239: S.push(R.staticGet("s","s.a:[I"));
case 242: S.push(L[0]);
case 243: S.push(16);
case 245: b=S.pop();a=S.pop();S.push((a+b)|0);
case 246: S.push(L[0]);
case 247: S.push(48);
case 249: b=S.pop();a=S.pop();S.push((a+b)|0);
case 250: v=S.pop();b=S.pop();a=S.pop();R.aset(a,b,v);
case 251: L[0]=(L[0]+(1))|0;
case 254: pc=233;continue flow;
case 257: S.push(R.staticGet("s","s.a:[I"));
case 260: S.push(27);
case 262: S.push(-6);
case 264: v=S.pop();b=S.pop();a=S.pop();R.aset(a,b,v);
case 265: S.push(R.staticGet("s","s.a:[I"));
case 268: S.push(29);
case 270: S.push(-7);
case 272: v=S.pop();b=S.pop();a=S.pop();R.aset(a,b,v);
case 273: return;
default:throw new Error("Invalid control flow s.<clinit>()V "+pc);
}}catch(error){
throw error;}}});
}
