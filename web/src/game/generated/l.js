// Generated offline by tools/compile_game.py. Source l.class
export default function register(R) {
R.define("l","java/lang/Object",[{key:"l.a:Ls;",static:false,value:null},{key:"l.a:I",static:false,value:0},{key:"l.a:Z",static:false,value:0},{key:"l.b:I",static:false,value:0},{key:"l.a:[I",static:false,value:null},{key:"l.b:[I",static:false,value:null},{key:"l.c:I",static:false,value:0},{key:"l.a:[Ljavax/microedition/media/Player;",static:false,value:null},{key:"l.a:Ljavax/microedition/media/Player;",static:false,value:null},{key:"l.d:I",static:true,value:0}]);
// l.a()V
R.method("l","a()V",function(self,args){
const S=[], L=new Array(1).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=self;
flow: while(true){ try { switch(pc){
case 0: S.push(L[0]);
case 1: a=S.pop();S.push(R.get(a,"l.a:Z"));
case 4: if(S.pop()!==0){pc=17;continue flow;}
case 7: S.push(L[0]);
case 8: S.push(1);
case 9: v=S.pop();a=S.pop();R.set(a,"l.a:Z",v);
case 12: S.push(L[0]);
case 13: S.push(-1);
case 14: a=S.splice(S.length-1,1);b=S.pop();v=R.call("l","b(I)V",b,a,183);
case 17: return;
default:throw new Error("Invalid control flow l.a()V "+pc);
}}catch(error){
throw error;}}});
// l.a()Z
R.method("l","a()Z",function(self,args){
const S=[], L=new Array(1).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=self;
flow: while(true){ try { switch(pc){
case 0: S.push(L[0]);
case 1: a=S.pop();S.push(R.get(a,"l.a:Z"));
case 4: if(S.pop()!==0){pc=19;continue flow;}
case 7: S.push(L[0]);
case 8: a=S.pop();S.push(R.get(a,"l.a:Ls;"));
case 11: a=S.pop();S.push(R.get(a,"s.i:Z"));
case 14: if(S.pop()===0){pc=19;continue flow;}
case 17: S.push(1);
case 18: return S.pop();
case 19: S.push(0);
case 20: return S.pop();
default:throw new Error("Invalid control flow l.a()Z "+pc);
}}catch(error){
throw error;}}});
// l.b()V
R.method("l","b()V",function(self,args){
const S=[], L=new Array(1).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=self;
flow: while(true){ try { switch(pc){
case 0: S.push(L[0]);
case 1: a=S.splice(S.length-0,0);b=S.pop();v=R.call("l","a()Z",b,a,183);S.push(v);
case 4: S.push(1);
case 5: b=S.pop();a=S.pop();if(a===b){pc=27;continue flow;}
case 8: S.push(L[0]);
case 9: a=S.splice(S.length-0,0);b=S.pop();v=R.call("l","c()V",b,a,182);
case 12: S.push(L[0]);
case 13: a=S.pop();S.push(R.get(a,"l.a:Ls;"));
case 16: S.push(1);
case 17: v=S.pop();a=S.pop();R.set(a,"s.i:Z",v);
case 20: S.push(L[0]);
case 21: a=S.pop();S.push(R.get(a,"l.a:Ls;"));
case 24: a=S.splice(S.length-0,0);b=S.pop();v=R.call("s","k()V",b,a,182);
case 27: return;
default:throw new Error("Invalid control flow l.b()V "+pc);
}}catch(error){
throw error;}}});
// l.a(II)V
R.method("l","a(II)V",function(self,args){
const S=[], L=new Array(3).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=self;
L[1]=args[0];
L[2]=args[1];
flow: while(true){ try { switch(pc){
case 0: ip=0;S.push(L[0]);
case 1: ip=1;a=S.pop();S.push(R.get(a,"l.a:Z"));
case 4: ip=4;if(S.pop()!==0){pc=47;continue flow;}
case 7: ip=7;S.push(L[0]);
case 8: ip=8;a=S.pop();S.push(R.get(a,"l.a:[Ljavax/microedition/media/Player;"));
case 11: ip=11;S.push(L[1]);
case 12: ip=12;b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 13: ip=13;if(S.pop()===null){pc=21;continue flow;}
case 16: ip=16;S.push(L[0]);
case 17: ip=17;S.push(L[1]);
case 18: ip=18;a=S.splice(S.length-1,1);b=S.pop();v=R.call("l","b(I)V",b,a,183);
case 21: ip=21;S.push(L[0]);
case 22: ip=22;a=S.pop();S.push(R.get(a,"l.a:[I"));
case 25: ip=25;S.push(L[1]);
case 26: ip=26;S.push(-1);
case 27: ip=27;v=S.pop();b=S.pop();a=S.pop();R.aset(a,b,v);
case 28: ip=28;S.push(L[0]);
case 29: ip=29;a=S.pop();S.push(R.get(a,"l.b:[I"));
case 32: ip=32;S.push(L[1]);
case 33: ip=33;S.push(1);
case 34: ip=34;v=S.pop();b=S.pop();a=S.pop();R.aset(a,b,v);
case 35: ip=35;S.push(L[0]);
case 36: ip=36;a=S.pop();S.push(R.get(a,"l.a:[Ljavax/microedition/media/Player;"));
case 39: ip=39;S.push(L[1]);
case 40: ip=40;S.push(L[2]);
case 41: ip=41;a=S.splice(S.length-1,1);b=null;v=R.call("l","a(I)Ljavax/microedition/media/Player;",b,a,184);S.push(v);
case 44: ip=44;v=S.pop();b=S.pop();a=S.pop();R.aset(a,b,v);
case 45: ip=45;return;
case 46: ip=46;S.pop();
case 47: ip=47;return;
default:throw new Error("Invalid control flow l.a(II)V "+pc);
}}catch(error){
if(ip>=35&&ip<45&&R.catches(error,"java/lang/Exception")){S.length=0;S.push(error);pc=46;continue flow;}
throw error;}}});
// l.a(I)Ljavax/microedition/media/Player;
R.method("l","a(I)Ljavax/microedition/media/Player;",function(self,args){
const S=[], L=new Array(3).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=args[0];
flow: while(true){ try { switch(pc){
case 0: ip=0;S.push(null);
case 1: ip=1;L[1]=S.pop();
case 2: ip=2;S.push(L[0]);
case 3: ip=3;a=S.splice(S.length-1,1);b=null;v=R.call("r","b(I)[B",b,a,184);S.push(v);
case 6: ip=6;L[2]=S.pop();
case 7: ip=7;S.push(R.staticGet("r","r.a:[B"));
case 10: ip=10;S.push(L[0]);
case 11: ip=11;S.push(1023);
case 14: ip=14;b=S.pop();a=S.pop();S.push(a&b);
case 15: ip=15;b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 16: ip=16;S.push(S[S.length-1]);
case 17: ip=17;L[0]=S.pop();
case 18: ip=18;S.push(1);
case 19: ip=19;b=S.pop();a=S.pop();if(a!==b){pc=27;continue flow;}
case 22: ip=22;S.push("audio/x-wav");
case 24: ip=24;pc=71;continue flow;
case 27: ip=27;S.push(L[0]);
case 28: ip=28;S.push(2);
case 29: ip=29;b=S.pop();a=S.pop();if(a!==b){pc=37;continue flow;}
case 32: ip=32;S.push("audio/mpeg");
case 34: ip=34;pc=71;continue flow;
case 37: ip=37;S.push(L[0]);
case 38: ip=38;S.push(3);
case 39: ip=39;b=S.pop();a=S.pop();if(a!==b){pc=47;continue flow;}
case 42: ip=42;S.push("audio/amr");
case 44: ip=44;pc=71;continue flow;
case 47: ip=47;S.push(L[0]);
case 48: ip=48;S.push(8);
case 50: ip=50;b=S.pop();a=S.pop();if(a!==b){pc=58;continue flow;}
case 53: ip=53;S.push("audio/x-tone-seq");
case 55: ip=55;pc=71;continue flow;
case 58: ip=58;S.push(L[0]);
case 59: ip=59;S.push(9);
case 61: ip=61;b=S.pop();a=S.pop();if(a!==b){pc=69;continue flow;}
case 64: ip=64;S.push("audio/imelody");
case 66: ip=66;pc=71;continue flow;
case 69: ip=69;S.push("audio/midi");
case 71: ip=71;L[0]=S.pop();
case 72: ip=72;S.push(R.new("java/io/ByteArrayInputStream"));
case 75: ip=75;S.push(S[S.length-1]);
case 76: ip=76;S.push(L[2]);
case 77: ip=77;a=S.splice(S.length-1,1);b=S.pop();v=R.call("java/io/ByteArrayInputStream","<init>([B)V",b,a,183);
case 80: ip=80;S.push(L[0]);
case 81: ip=81;a=S.splice(S.length-2,2);b=null;v=R.call("javax/microedition/media/Manager","createPlayer(Ljava/io/InputStream;Ljava/lang/String;)Ljavax/microedition/media/Player;",b,a,184);S.push(v);
case 84: ip=84;S.push(S[S.length-1]);
case 85: ip=85;L[1]=S.pop();
case 86: ip=86;a=S.splice(S.length-0,0);b=S.pop();v=R.call("javax/microedition/media/Player","realize()V",b,a,185);
case 91: ip=91;S.push(L[1]);
case 92: ip=92;S.push("VolumeControl");
case 94: ip=94;a=S.splice(S.length-1,1);b=S.pop();v=R.call("javax/microedition/media/Controllable","getControl(Ljava/lang/String;)Ljavax/microedition/media/Control;",b,a,185);S.push(v);
case 99: ip=99;R.cast(S[S.length-1],"javax/microedition/media/control/VolumeControl");
case 102: ip=102;S.push(S[S.length-1]);
case 103: ip=103;L[0]=S.pop();
case 104: ip=104;if(S.pop()===null){pc=117;continue flow;}
case 107: ip=107;S.push(L[0]);
case 108: ip=108;S.push(R.staticGet("l","l.d:I"));
case 111: ip=111;a=S.splice(S.length-1,1);b=S.pop();v=R.call("javax/microedition/media/control/VolumeControl","setLevel(I)I",b,a,185);S.push(v);
case 116: ip=116;S.pop();
case 117: ip=117;pc=121;continue flow;
case 120: ip=120;S.pop();
case 121: ip=121;S.push(L[1]);
case 122: ip=122;return S.pop();
default:throw new Error("Invalid control flow l.a(I)Ljavax/microedition/media/Player; "+pc);
}}catch(error){
if(ip>=2&&ip<117&&R.catches(error,"java/lang/Exception")){S.length=0;S.push(error);pc=120;continue flow;}
throw error;}}});
// l.b(I)V
R.method("l","b(I)V",function(self,args){
const S=[], L=new Array(2).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=self;
L[1]=args[0];
flow: while(true){ try { switch(pc){
case 0: S.push(L[1]);
case 1: S.push(-1);
case 2: b=S.pop();a=S.pop();if(a!==b){pc=27;continue flow;}
case 5: S.push(0);
case 6: L[1]=S.pop();
case 7: S.push(L[1]);
case 8: S.push(L[0]);
case 9: a=S.pop();S.push(R.get(a,"l.a:I"));
case 12: b=S.pop();a=S.pop();if(a>=b){pc=26;continue flow;}
case 15: S.push(L[0]);
case 16: S.push(L[1]);
case 17: a=S.splice(S.length-1,1);b=S.pop();v=R.call("l","b(I)V",b,a,183);
case 20: L[1]=(L[1]+(1))|0;
case 23: pc=7;continue flow;
case 26: return;
case 27: S.push(L[0]);
case 28: a=S.pop();S.push(R.get(a,"l.c:I"));
case 31: S.push(L[1]);
case 32: b=S.pop();a=S.pop();if(a===b){pc=43;continue flow;}
case 35: S.push(L[0]);
case 36: a=S.pop();S.push(R.get(a,"l.b:I"));
case 39: S.push(L[1]);
case 40: b=S.pop();a=S.pop();if(a!==b){pc=47;continue flow;}
case 43: S.push(L[0]);
case 44: a=S.splice(S.length-0,0);b=S.pop();v=R.call("l","c()V",b,a,182);
case 47: S.push(L[0]);
case 48: a=S.pop();S.push(R.get(a,"l.a:[Ljavax/microedition/media/Player;"));
case 51: S.push(L[1]);
case 52: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 53: if(S.pop()===null){pc=74;continue flow;}
case 56: S.push(L[0]);
case 57: a=S.pop();S.push(R.get(a,"l.a:[Ljavax/microedition/media/Player;"));
case 60: S.push(L[1]);
case 61: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 62: a=S.splice(S.length-0,0);b=S.pop();v=R.call("javax/microedition/media/Player","close()V",b,a,185);
case 67: S.push(L[0]);
case 68: a=S.pop();S.push(R.get(a,"l.a:[Ljavax/microedition/media/Player;"));
case 71: S.push(L[1]);
case 72: S.push(null);
case 73: v=S.pop();b=S.pop();a=S.pop();R.aset(a,b,v);
case 74: return;
default:throw new Error("Invalid control flow l.b(I)V "+pc);
}}catch(error){
throw error;}}});
// l.a(I)V
R.method("l","a(I)V",function(self,args){
const S=[], L=new Array(3).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=self;
L[1]=args[0];
flow: while(true){ try { switch(pc){
case 0: ip=0;S.push(L[0]);
case 1: ip=1;a=S.splice(S.length-0,0);b=S.pop();v=R.call("l","a()Z",b,a,183);S.push(v);
case 4: ip=4;if(S.pop()===0){pc=95;continue flow;}
case 7: ip=7;S.push(L[0]);
case 8: ip=8;a=S.pop();S.push(R.get(a,"l.b:I"));
case 11: ip=11;if(S.pop()<0){pc=32;continue flow;}
case 14: ip=14;S.push(L[0]);
case 15: ip=15;a=S.pop();S.push(R.get(a,"l.b:[I"));
case 18: ip=18;S.push(L[0]);
case 19: ip=19;a=S.pop();S.push(R.get(a,"l.b:I"));
case 22: ip=22;b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 23: ip=23;S.push(L[0]);
case 24: ip=24;a=S.pop();S.push(R.get(a,"l.b:[I"));
case 27: ip=27;S.push(L[1]);
case 28: ip=28;b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 29: ip=29;b=S.pop();a=S.pop();if(a>b){pc=95;continue flow;}
case 32: ip=32;S.push(L[0]);
case 33: ip=33;a=S.pop();S.push(R.get(a,"l.c:I"));
case 36: ip=36;if(S.pop()<0){pc=43;continue flow;}
case 39: ip=39;S.push(L[0]);
case 40: ip=40;a=S.splice(S.length-0,0);b=S.pop();v=R.call("l","c()V",b,a,182);
case 43: ip=43;S.push(L[0]);
case 44: ip=44;a=S.pop();S.push(R.get(a,"l.a:[Ljavax/microedition/media/Player;"));
case 47: ip=47;S.push(L[1]);
case 48: ip=48;b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 49: ip=49;L[2]=S.pop();
case 50: ip=50;S.push(L[0]);
case 51: ip=51;S.push(-1);
case 52: ip=52;v=S.pop();a=S.pop();R.set(a,"l.b:I",v);
case 55: ip=55;S.push(L[2]);
case 56: ip=56;if(S.pop()===null){pc=95;continue flow;}
case 59: ip=59;S.push(L[2]);
case 60: ip=60;S.push(L[0]);
case 61: ip=61;a=S.pop();S.push(R.get(a,"l.a:[I"));
case 64: ip=64;S.push(L[1]);
case 65: ip=65;b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 66: ip=66;a=S.splice(S.length-1,1);b=S.pop();v=R.call("javax/microedition/media/Player","setLoopCount(I)V",b,a,185);
case 71: ip=71;pc=75;continue flow;
case 74: ip=74;S.pop();
case 75: ip=75;S.push(L[2]);
case 76: ip=76;a=S.splice(S.length-0,0);b=S.pop();v=R.call("javax/microedition/media/Player","start()V",b,a,185);
case 81: ip=81;pc=85;continue flow;
case 84: ip=84;S.pop();
case 85: ip=85;S.push(L[0]);
case 86: ip=86;S.push(L[2]);
case 87: ip=87;v=S.pop();a=S.pop();R.set(a,"l.a:Ljavax/microedition/media/Player;",v);
case 90: ip=90;S.push(L[0]);
case 91: ip=91;S.push(L[1]);
case 92: ip=92;v=S.pop();a=S.pop();R.set(a,"l.b:I",v);
case 95: ip=95;return;
default:throw new Error("Invalid control flow l.a(I)V "+pc);
}}catch(error){
if(ip>=59&&ip<71&&R.catches(error,"java/lang/Exception")){S.length=0;S.push(error);pc=74;continue flow;}
if(ip>=75&&ip<81&&R.catches(error,"java/lang/Exception")){S.length=0;S.push(error);pc=84;continue flow;}
throw error;}}});
// l.c()V
R.method("l","c()V",function(self,args){
const S=[], L=new Array(1).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=self;
flow: while(true){ try { switch(pc){
case 0: ip=0;S.push(L[0]);
case 1: ip=1;a=S.pop();S.push(R.get(a,"l.a:Ljavax/microedition/media/Player;"));
case 4: ip=4;if(S.pop()===null){pc=40;continue flow;}
case 7: ip=7;S.push(L[0]);
case 8: ip=8;a=S.pop();S.push(R.get(a,"l.a:Ljavax/microedition/media/Player;"));
case 11: ip=11;a=S.splice(S.length-0,0);b=S.pop();v=R.call("javax/microedition/media/Player","getState()I",b,a,185);S.push(v);
case 16: ip=16;S.push(400);
case 19: ip=19;b=S.pop();a=S.pop();if(a!==b){pc=31;continue flow;}
case 22: ip=22;S.push(L[0]);
case 23: ip=23;a=S.pop();S.push(R.get(a,"l.a:Ljavax/microedition/media/Player;"));
case 26: ip=26;a=S.splice(S.length-0,0);b=S.pop();v=R.call("javax/microedition/media/Player","stop()V",b,a,185);
case 31: ip=31;pc=35;continue flow;
case 34: ip=34;S.pop();
case 35: ip=35;S.push(L[0]);
case 36: ip=36;S.push(null);
case 37: ip=37;v=S.pop();a=S.pop();R.set(a,"l.a:Ljavax/microedition/media/Player;",v);
case 40: ip=40;S.push(L[0]);
case 41: ip=41;S.push(-1);
case 42: ip=42;v=S.pop();a=S.pop();R.set(a,"l.b:I",v);
case 45: ip=45;S.push(L[0]);
case 46: ip=46;S.push(-1);
case 47: ip=47;v=S.pop();a=S.pop();R.set(a,"l.c:I",v);
case 50: ip=50;return;
default:throw new Error("Invalid control flow l.c()V "+pc);
}}catch(error){
if(ip>=7&&ip<31&&R.catches(error,"java/lang/Throwable")){S.length=0;S.push(error);pc=34;continue flow;}
throw error;}}});
// l.<init>(Ls;)V
R.method("l","<init>(Ls;)V",function(self,args){
const S=[], L=new Array(2).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=self;
L[1]=args[0];
flow: while(true){ try { switch(pc){
case 0: S.push(L[0]);
case 1: a=S.splice(S.length-0,0);b=S.pop();v=R.call("java/lang/Object","<init>()V",b,a,183);
case 4: S.push(L[0]);
case 5: S.push(L[1]);
case 6: v=S.pop();a=S.pop();R.set(a,"l.a:Ls;",v);
case 9: S.push(L[0]);
case 10: S.push(-1);
case 11: v=S.pop();a=S.pop();R.set(a,"l.b:I",v);
case 14: S.push(L[0]);
case 15: S.push(5);
case 16: v=S.pop();a=S.pop();R.set(a,"l.a:I",v);
case 19: S.push(L[0]);
case 20: S.push(5);
case 21: S.push(R.array("I",S.pop()));
case 23: v=S.pop();a=S.pop();R.set(a,"l.a:[I",v);
case 26: S.push(L[0]);
case 27: S.push(5);
case 28: S.push(R.array("I",S.pop()));
case 30: v=S.pop();a=S.pop();R.set(a,"l.b:[I",v);
case 33: S.push(L[0]);
case 34: S.push(-1);
case 35: v=S.pop();a=S.pop();R.set(a,"l.c:I",v);
case 38: S.push(L[0]);
case 39: S.push(5);
case 40: S.push(R.array("Ljavax/microedition/media/Player;",S.pop()));
case 43: v=S.pop();a=S.pop();R.set(a,"l.a:[Ljavax/microedition/media/Player;",v);
case 46: S.push(L[1]);
case 47: S.push(L[0]);
case 48: v=S.pop();a=S.pop();R.set(a,"s.a:Ll;",v);
case 51: return;
default:throw new Error("Invalid control flow l.<init>(Ls;)V "+pc);
}}catch(error){
throw error;}}});
// l.<clinit>()V
R.method("l","<clinit>()V",function(self,args){
const S=[], L=new Array(0).fill(null); let a,b,c,d,v,pc=0,ip=0;
flow: while(true){ try { switch(pc){
case 0: S.push(50);
case 2: R.staticSet("l","l.d:I",S.pop());
case 5: return;
default:throw new Error("Invalid control flow l.<clinit>()V "+pc);
}}catch(error){
throw error;}}});
}
