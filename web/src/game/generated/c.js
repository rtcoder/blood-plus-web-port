// Generated offline by tools/compile_game.py. Source c.class
export default function register(R) {
R.define("c","java/lang/Object",[{key:"c.a:[B",static:false,value:null},{key:"c.a:I",static:false,value:0},{key:"c.a:Z",static:false,value:0}]);
// c.<init>()V
R.method("c","<init>()V",function(self,args){
const S=[], L=new Array(1).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=self;
flow: while(true){ try { switch(pc){
case 0: S.push(L[0]);
case 1: a=S.splice(S.length-0,0);b=S.pop();v=R.call("java/lang/Object","<init>()V",b,a,183);
case 4: return;
default:throw new Error("Invalid control flow c.<init>()V "+pc);
}}catch(error){
throw error;}}});
// c.<init>([B)V
R.method("c","<init>([B)V",function(self,args){
const S=[], L=new Array(2).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=self;
L[1]=args[0];
flow: while(true){ try { switch(pc){
case 0: S.push(L[0]);
case 1: a=S.splice(S.length-0,0);b=S.pop();v=R.call("java/lang/Object","<init>()V",b,a,183);
case 4: S.push(L[0]);
case 5: S.push(L[1]);
case 6: a=S.splice(S.length-1,1);b=S.pop();v=R.call("c","a([B)V",b,a,182);
case 9: return;
default:throw new Error("Invalid control flow c.<init>([B)V "+pc);
}}catch(error){
throw error;}}});
// c.a([B)V
R.method("c","a([B)V",function(self,args){
const S=[], L=new Array(2).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=self;
L[1]=args[0];
flow: while(true){ try { switch(pc){
case 0: S.push(L[0]);
case 1: S.push(L[1]);
case 2: S.push(R.length(S.pop()));
case 3: S.push(R.array("B",S.pop()));
case 5: v=S.pop();a=S.pop();R.set(a,"c.a:[B",v);
case 8: S.push(L[1]);
case 9: S.push(0);
case 10: S.push(L[0]);
case 11: a=S.pop();S.push(R.get(a,"c.a:[B"));
case 14: S.push(0);
case 15: S.push(L[1]);
case 16: S.push(R.length(S.pop()));
case 17: a=S.splice(S.length-5,5);b=null;v=R.call("java/lang/System","arraycopy(Ljava/lang/Object;ILjava/lang/Object;II)V",b,a,184);
case 20: S.push(L[0]);
case 21: S.push(0);
case 22: v=S.pop();a=S.pop();R.set(a,"c.a:I",v);
case 25: return;
default:throw new Error("Invalid control flow c.a([B)V "+pc);
}}catch(error){
throw error;}}});
// c.a(Ln;)I
R.method("c","a(Ln;)I",function(self,args){
const S=[], L=new Array(7).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=self;
L[1]=args[0];
flow: while(true){ try { switch(pc){
case 0: S.push(1);
case 1: L[2]=S.pop();
case 2: S.push(0);
case 3: L[3]=S.pop();
case 4: S.push(L[2]);
case 5: if(S.pop()===0){pc=1452;continue flow;}
case 8: S.push(L[0]);
case 9: a=S.splice(S.length-0,0);b=S.pop();v=R.call("c","a()I",b,a,183);S.push(v);
case 12: S.push(S[S.length-1]);
case 13: L[2]=S.pop();
case 14: S.push(-2147483648);
case 16: b=S.pop();a=S.pop();if(a!==b){pc=27;continue flow;}
case 19: S.push(L[0]);
case 20: S.push(1);
case 21: v=S.pop();a=S.pop();R.set(a,"c.a:Z",v);
case 24: pc=1452;continue flow;
case 27: S.push(1);
case 28: L[4]=S.pop();
case 30: S.push(L[2]);
case 31: S.push(2);
case 32: b=S.pop();a=S.pop();if(a!==b){pc=41;continue flow;}
case 35: L[4]=(L[4]+(2))|0;
case 38: pc=301;continue flow;
case 41: S.push(L[2]);
case 42: S.push(5);
case 43: b=S.pop();a=S.pop();if(a!==b){pc=52;continue flow;}
case 46: L[4]=(L[4]+(3))|0;
case 49: pc=301;continue flow;
case 52: S.push(L[2]);
case 53: S.push(6);
case 55: b=S.pop();a=S.pop();if(a!==b){pc=64;continue flow;}
case 58: L[4]=(L[4]+(2))|0;
case 61: pc=301;continue flow;
case 64: S.push(L[2]);
case 65: S.push(7);
case 67: b=S.pop();a=S.pop();if(a!==b){pc=76;continue flow;}
case 70: L[4]=(L[4]+(2))|0;
case 73: pc=301;continue flow;
case 76: S.push(L[2]);
case 77: S.push(8);
case 79: b=S.pop();a=S.pop();if(a!==b){pc=88;continue flow;}
case 82: L[4]=(L[4]+(1))|0;
case 85: pc=301;continue flow;
case 88: S.push(L[2]);
case 89: S.push(9);
case 91: b=S.pop();a=S.pop();if(a!==b){pc=100;continue flow;}
case 94: L[4]=(L[4]+(2))|0;
case 97: pc=301;continue flow;
case 100: S.push(L[2]);
case 101: S.push(10);
case 103: b=S.pop();a=S.pop();if(a!==b){pc=112;continue flow;}
case 106: L[4]=(L[4]+(1))|0;
case 109: pc=301;continue flow;
case 112: S.push(L[2]);
case 113: S.push(11);
case 115: b=S.pop();a=S.pop();if(a!==b){pc=124;continue flow;}
case 118: L[4]=(L[4]+(1))|0;
case 121: pc=301;continue flow;
case 124: S.push(L[2]);
case 125: S.push(13);
case 127: b=S.pop();a=S.pop();if(a!==b){pc=136;continue flow;}
case 130: L[4]=(L[4]+(2))|0;
case 133: pc=301;continue flow;
case 136: S.push(L[2]);
case 137: S.push(14);
case 139: b=S.pop();a=S.pop();if(a!==b){pc=148;continue flow;}
case 142: L[4]=(L[4]+(1))|0;
case 145: pc=301;continue flow;
case 148: S.push(L[2]);
case 149: S.push(17);
case 151: b=S.pop();a=S.pop();if(a!==b){pc=160;continue flow;}
case 154: L[4]=(L[4]+(1))|0;
case 157: pc=301;continue flow;
case 160: S.push(L[2]);
case 161: S.push(18);
case 163: b=S.pop();a=S.pop();if(a!==b){pc=172;continue flow;}
case 166: L[4]=(L[4]+(1))|0;
case 169: pc=301;continue flow;
case 172: S.push(L[2]);
case 173: S.push(19);
case 175: b=S.pop();a=S.pop();if(a!==b){pc=184;continue flow;}
case 178: L[4]=(L[4]+(4))|0;
case 181: pc=301;continue flow;
case 184: S.push(L[2]);
case 185: S.push(20);
case 187: b=S.pop();a=S.pop();if(a!==b){pc=196;continue flow;}
case 190: L[4]=(L[4]+(1))|0;
case 193: pc=301;continue flow;
case 196: S.push(L[2]);
case 197: S.push(21);
case 199: b=S.pop();a=S.pop();if(a!==b){pc=208;continue flow;}
case 202: L[4]=(L[4]+(1))|0;
case 205: pc=301;continue flow;
case 208: S.push(L[2]);
case 209: S.push(24);
case 211: b=S.pop();a=S.pop();if(a!==b){pc=220;continue flow;}
case 214: L[4]=(L[4]+(5))|0;
case 217: pc=301;continue flow;
case 220: S.push(L[2]);
case 221: S.push(26);
case 223: b=S.pop();a=S.pop();if(a!==b){pc=232;continue flow;}
case 226: L[4]=(L[4]+(1))|0;
case 229: pc=301;continue flow;
case 232: S.push(L[2]);
case 233: S.push(28);
case 235: b=S.pop();a=S.pop();if(a!==b){pc=244;continue flow;}
case 238: L[4]=(L[4]+(1))|0;
case 241: pc=301;continue flow;
case 244: S.push(L[2]);
case 245: S.push(29);
case 247: b=S.pop();a=S.pop();if(a!==b){pc=256;continue flow;}
case 250: L[4]=(L[4]+(2))|0;
case 253: pc=301;continue flow;
case 256: S.push(L[2]);
case 257: S.push(30);
case 259: b=S.pop();a=S.pop();if(a!==b){pc=268;continue flow;}
case 262: L[4]=(L[4]+(2))|0;
case 265: pc=301;continue flow;
case 268: S.push(L[2]);
case 269: S.push(31);
case 271: b=S.pop();a=S.pop();if(a!==b){pc=280;continue flow;}
case 274: L[4]=(L[4]+(2))|0;
case 277: pc=301;continue flow;
case 280: S.push(L[2]);
case 281: S.push(34);
case 283: b=S.pop();a=S.pop();if(a!==b){pc=292;continue flow;}
case 286: L[4]=(L[4]+(4))|0;
case 289: pc=301;continue flow;
case 292: S.push(L[2]);
case 293: S.push(36);
case 295: b=S.pop();a=S.pop();if(a!==b){pc=301;continue flow;}
case 298: L[4]=(L[4]+(3))|0;
case 301: S.push(L[4]);
case 303: S.push(R.array("I",S.pop()));
case 305: S.push(S[S.length-1]);
case 306: L[5]=S.pop();
case 308: S.push(0);
case 309: S.push(L[2]);
case 310: v=S.pop();b=S.pop();a=S.pop();R.aset(a,b,v);
case 311: S.push(1);
case 312: L[2]=S.pop();
case 313: S.push(L[2]);
case 314: S.push(L[4]);
case 316: b=S.pop();a=S.pop();if(a>=b){pc=333;continue flow;}
case 319: S.push(L[5]);
case 321: S.push(L[2]);
case 322: S.push(L[0]);
case 323: a=S.splice(S.length-0,0);b=S.pop();v=R.call("c","a()I",b,a,183);S.push(v);
case 326: v=S.pop();b=S.pop();a=S.pop();R.aset(a,b,v);
case 327: L[2]=(L[2]+(1))|0;
case 330: pc=313;continue flow;
case 333: S.push(L[1]);
case 334: S.push(L[5]);
case 336: L[4]=S.pop();
case 338: L[2]=S.pop();
case 339: S.push(L[4]);
case 341: S.push(0);
case 342: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 343: L[5]=S.pop();
case 345: S.push(-1);
case 346: L[6]=S.pop();
case 348: S.push(L[5]);
case 350: S.push(1);
case 351: b=S.pop();a=S.pop();if(a!==b){pc=363;continue flow;}
case 354: a=S.splice(S.length-0,0);b=null;v=R.call("n","d()V",b,a,184);
case 357: S.push(1);
case 358: L[6]=S.pop();
case 360: pc=1429;continue flow;
case 363: S.push(L[5]);
case 365: S.push(3);
case 366: b=S.pop();a=S.pop();if(a!==b){pc=378;continue flow;}
case 369: a=S.splice(S.length-0,0);b=null;v=R.call("n","e()V",b,a,184);
case 372: S.push(1);
case 373: L[6]=S.pop();
case 375: pc=1429;continue flow;
case 378: S.push(L[5]);
case 380: S.push(2);
case 381: b=S.pop();a=S.pop();if(a!==b){pc=406;continue flow;}
case 384: S.push(L[2]);
case 385: S.push(L[4]);
case 387: S.push(1);
case 388: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 389: S.push(L[4]);
case 391: S.push(2);
case 392: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 393: a=S.splice(S.length-2,2);b=S.pop();v=R.call("n","a(II)V",b,a,182);
case 396: S.push(2);
case 397: a=S.splice(S.length-1,1);b=null;v=R.call("n","g(I)V",b,a,184);
case 400: S.push(1);
case 401: L[6]=S.pop();
case 403: pc=1429;continue flow;
case 406: S.push(L[5]);
case 408: S.push(5);
case 409: b=S.pop();a=S.pop();if(a!==b){pc=452;continue flow;}
case 412: S.push(L[4]);
case 414: S.push(1);
case 415: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 416: a=S.splice(S.length-1,1);b=null;v=R.call("n","a(I)La;",b,a,184);S.push(v);
case 419: S.push(S[S.length-1]);
case 420: L[5]=S.pop();
case 422: if(S.pop()===null){pc=446;continue flow;}
case 425: S.push(L[5]);
case 427: S.push(L[4]);
case 429: S.push(2);
case 430: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 431: S.push(R.staticGet("q","q.b:I"));
case 434: b=S.pop();a=S.pop();S.push(Math.imul(a,b));
case 435: S.push(L[4]);
case 437: S.push(3);
case 438: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 439: S.push(R.staticGet("q","q.c:I"));
case 442: b=S.pop();a=S.pop();S.push(Math.imul(a,b));
case 443: a=S.splice(S.length-3,3);b=null;v=R.call("n","b(La;II)V",b,a,184);
case 446: S.push(0);
case 447: L[6]=S.pop();
case 449: pc=1429;continue flow;
case 452: S.push(L[5]);
case 454: S.push(6);
case 456: b=S.pop();a=S.pop();if(a!==b){pc=487;continue flow;}
case 459: S.push(R.staticGet("n","n.a:La;"));
case 462: S.push(L[4]);
case 464: S.push(1);
case 465: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 466: S.push(R.staticGet("q","q.b:I"));
case 469: b=S.pop();a=S.pop();S.push(Math.imul(a,b));
case 470: S.push(L[4]);
case 472: S.push(2);
case 473: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 474: S.push(R.staticGet("q","q.c:I"));
case 477: b=S.pop();a=S.pop();S.push(Math.imul(a,b));
case 478: a=S.splice(S.length-3,3);b=null;v=R.call("n","a(La;II)V",b,a,184);
case 481: S.push(0);
case 482: L[6]=S.pop();
case 484: pc=1429;continue flow;
case 487: S.push(L[5]);
case 489: S.push(7);
case 491: b=S.pop();a=S.pop();if(a!==b){pc=530;continue flow;}
case 494: S.push(L[4]);
case 496: S.push(1);
case 497: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 498: a=S.splice(S.length-1,1);b=null;v=R.call("n","a(I)La;",b,a,184);S.push(v);
case 501: S.push(S[S.length-1]);
case 502: L[5]=S.pop();
case 504: if(S.pop()===null){pc=524;continue flow;}
case 507: S.push(L[5]);
case 509: S.push(L[4]);
case 511: S.push(2);
case 512: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 513: a=S.splice(S.length-2,2);b=null;v=R.call("n","a(La;I)V",b,a,184);
case 516: S.push(L[2]);
case 517: S.push(L[5]);
case 519: S.push(30);
case 521: a=S.splice(S.length-2,2);b=S.pop();v=R.call("n","c(La;I)V",b,a,182);
case 524: S.push(0);
case 525: L[6]=S.pop();
case 527: pc=1429;continue flow;
case 530: S.push(L[5]);
case 532: S.push(8);
case 534: b=S.pop();a=S.pop();if(a!==b){pc=574;continue flow;}
case 537: S.push(L[4]);
case 539: S.push(1);
case 540: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 541: L[5]=S.pop();
case 543: S.push(L[4]);
case 545: S.push(1);
case 546: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 547: if(S.pop()===0){pc=558;continue flow;}
case 550: S.push(L[4]);
case 552: S.push(1);
case 553: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 554: S.push(1);
case 555: b=S.pop();a=S.pop();if(a!==b){pc=563;continue flow;}
case 558: S.push(R.staticGet("n","n.c:I"));
case 561: L[5]=S.pop();
case 563: S.push(L[5]);
case 565: a=S.splice(S.length-1,1);b=null;v=R.call("n","c(I)V",b,a,184);
case 568: S.push(0);
case 569: L[6]=S.pop();
case 571: pc=1429;continue flow;
case 574: S.push(L[5]);
case 576: S.push(9);
case 578: b=S.pop();a=S.pop();if(a!==b){pc=618;continue flow;}
case 581: S.push(L[4]);
case 583: S.push(1);
case 584: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 585: a=S.splice(S.length-1,1);b=null;v=R.call("n","a(I)La;",b,a,184);S.push(v);
case 588: S.push(S[S.length-1]);
case 589: L[5]=S.pop();
case 591: if(S.pop()===null){pc=612;continue flow;}
case 594: S.push(L[5]);
case 596: S.push(L[4]);
case 598: S.push(2);
case 599: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 600: S.push(1);
case 601: b=S.pop();a=S.pop();if(a!==b){pc=608;continue flow;}
case 604: S.push(1);
case 605: pc=609;continue flow;
case 608: S.push(0);
case 609: a=S.splice(S.length-1,1);b=S.pop();v=R.call("a","a(Z)V",b,a,182);
case 612: S.push(0);
case 613: L[6]=S.pop();
case 615: pc=1429;continue flow;
case 618: S.push(L[5]);
case 620: S.push(10);
case 622: b=S.pop();a=S.pop();if(a!==b){pc=650;continue flow;}
case 625: S.push(R.staticGet("n","n.a:La;"));
case 628: S.push(L[4]);
case 630: S.push(1);
case 631: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 632: S.push(1);
case 633: b=S.pop();a=S.pop();if(a!==b){pc=640;continue flow;}
case 636: S.push(1);
case 637: pc=641;continue flow;
case 640: S.push(0);
case 641: a=S.splice(S.length-1,1);b=S.pop();v=R.call("a","a(Z)V",b,a,182);
case 644: S.push(0);
case 645: L[6]=S.pop();
case 647: pc=1429;continue flow;
case 650: S.push(L[5]);
case 652: S.push(19);
case 654: b=S.pop();a=S.pop();if(a!==b){pc=692;continue flow;}
case 657: S.push(L[2]);
case 658: S.push(L[4]);
case 660: S.push(1);
case 661: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 662: S.push(L[4]);
case 664: S.push(2);
case 665: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 666: S.push(L[4]);
case 668: S.push(3);
case 669: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 670: S.push(R.staticGet("q","q.b:I"));
case 673: b=S.pop();a=S.pop();S.push(Math.imul(a,b));
case 674: S.push(L[4]);
case 676: S.push(4);
case 677: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 678: S.push(R.staticGet("q","q.c:I"));
case 681: b=S.pop();a=S.pop();S.push(Math.imul(a,b));
case 682: a=S.splice(S.length-4,4);b=S.pop();v=R.call("n","a(IIII)La;",b,a,182);S.push(v);
case 685: S.pop();
case 686: S.push(0);
case 687: L[6]=S.pop();
case 689: pc=1429;continue flow;
case 692: S.push(L[5]);
case 694: S.push(20);
case 696: b=S.pop();a=S.pop();if(a!==b){pc=726;continue flow;}
case 699: S.push(L[4]);
case 701: S.push(1);
case 702: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 703: a=S.splice(S.length-1,1);b=null;v=R.call("n","a(I)La;",b,a,184);S.push(v);
case 706: S.push(S[S.length-1]);
case 707: L[5]=S.pop();
case 709: if(S.pop()===null){pc=720;continue flow;}
case 712: S.push(L[2]);
case 713: S.push(L[5]);
case 715: S.push(12);
case 717: a=S.splice(S.length-2,2);b=S.pop();v=R.call("n","c(La;I)V",b,a,182);
case 720: S.push(0);
case 721: L[6]=S.pop();
case 723: pc=1429;continue flow;
case 726: S.push(L[5]);
case 728: S.push(11);
case 730: b=S.pop();a=S.pop();if(a!==b){pc=777;continue flow;}
case 733: S.push(0);
case 734: a=S.splice(S.length-1,1);b=null;v=R.call("n","b(Z)V",b,a,184);
case 737: S.push(L[4]);
case 739: S.push(1);
case 740: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 741: a=S.splice(S.length-1,1);b=null;v=R.call("n","a(I)La;",b,a,184);S.push(v);
case 744: S.push(S[S.length-1]);
case 745: L[5]=S.pop();
case 747: if(S.pop()===null){pc=771;continue flow;}
case 750: S.push(L[5]);
case 752: a=S.splice(S.length-0,0);b=S.pop();v=R.call("o","e()I",b,a,182);S.push(v);
case 755: S.push(R.staticGet("n","n.a:I"));
case 758: b=S.pop();a=S.pop();S.push((a-b)|0);
case 759: S.push(L[5]);
case 761: a=S.splice(S.length-0,0);b=S.pop();v=R.call("o","f()I",b,a,182);S.push(v);
case 764: S.push(R.staticGet("n","n.b:I"));
case 767: b=S.pop();a=S.pop();S.push((a-b)|0);
case 768: a=S.splice(S.length-2,2);b=null;v=R.call("e","a(II)V",b,a,184);
case 771: S.push(0);
case 772: L[6]=S.pop();
case 774: pc=1429;continue flow;
case 777: S.push(L[5]);
case 779: S.push(12);
case 781: b=S.pop();a=S.pop();if(a!==b){pc=817;continue flow;}
case 784: S.push(0);
case 785: a=S.splice(S.length-1,1);b=null;v=R.call("n","b(Z)V",b,a,184);
case 788: S.push(R.staticGet("n","n.a:La;"));
case 791: a=S.splice(S.length-0,0);b=S.pop();v=R.call("o","e()I",b,a,182);S.push(v);
case 794: S.push(R.staticGet("n","n.a:I"));
case 797: b=S.pop();a=S.pop();S.push((a-b)|0);
case 798: S.push(R.staticGet("n","n.a:La;"));
case 801: a=S.splice(S.length-0,0);b=S.pop();v=R.call("o","f()I",b,a,182);S.push(v);
case 804: S.push(R.staticGet("n","n.b:I"));
case 807: b=S.pop();a=S.pop();S.push((a-b)|0);
case 808: a=S.splice(S.length-2,2);b=null;v=R.call("e","a(II)V",b,a,184);
case 811: S.push(0);
case 812: L[6]=S.pop();
case 814: pc=1429;continue flow;
case 817: S.push(L[5]);
case 819: S.push(13);
case 821: b=S.pop();a=S.pop();if(a!==b){pc=861;continue flow;}
case 824: S.push(0);
case 825: a=S.splice(S.length-1,1);b=null;v=R.call("n","b(Z)V",b,a,184);
case 828: S.push(L[4]);
case 830: S.push(1);
case 831: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 832: S.push(R.staticGet("q","q.b:I"));
case 835: b=S.pop();a=S.pop();S.push(Math.imul(a,b));
case 836: S.push(R.staticGet("n","n.a:I"));
case 839: b=S.pop();a=S.pop();S.push((a-b)|0);
case 840: S.push(L[4]);
case 842: S.push(2);
case 843: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 844: S.push(R.staticGet("q","q.c:I"));
case 847: b=S.pop();a=S.pop();S.push(Math.imul(a,b));
case 848: S.push(R.staticGet("n","n.b:I"));
case 851: b=S.pop();a=S.pop();S.push((a-b)|0);
case 852: a=S.splice(S.length-2,2);b=null;v=R.call("e","a(II)V",b,a,184);
case 855: S.push(0);
case 856: L[6]=S.pop();
case 858: pc=1429;continue flow;
case 861: S.push(L[5]);
case 863: S.push(14);
case 865: b=S.pop();a=S.pop();if(a!==b){pc=896;continue flow;}
case 868: S.push(1);
case 869: a=S.splice(S.length-1,1);b=null;v=R.call("n","b(Z)V",b,a,184);
case 872: S.push(L[4]);
case 874: S.push(1);
case 875: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 876: a=S.splice(S.length-1,1);b=null;v=R.call("n","a(I)La;",b,a,184);S.push(v);
case 879: S.push(S[S.length-1]);
case 880: L[5]=S.pop();
case 882: if(S.pop()===null){pc=890;continue flow;}
case 885: S.push(L[5]);
case 887: a=S.splice(S.length-1,1);b=null;v=R.call("n","a(La;)V",b,a,184);
case 890: S.push(0);
case 891: L[6]=S.pop();
case 893: pc=1429;continue flow;
case 896: S.push(L[5]);
case 898: S.push(15);
case 900: b=S.pop();a=S.pop();if(a!==b){pc=919;continue flow;}
case 903: S.push(1);
case 904: a=S.splice(S.length-1,1);b=null;v=R.call("n","b(Z)V",b,a,184);
case 907: S.push(R.staticGet("n","n.a:La;"));
case 910: a=S.splice(S.length-1,1);b=null;v=R.call("n","a(La;)V",b,a,184);
case 913: S.push(0);
case 914: L[6]=S.pop();
case 916: pc=1429;continue flow;
case 919: S.push(L[5]);
case 921: S.push(16);
case 923: b=S.pop();a=S.pop();if(a!==b){pc=940;continue flow;}
case 926: S.push(null);
case 927: a=S.splice(S.length-1,1);b=null;v=R.call("n","a(La;)V",b,a,184);
case 930: S.push(1);
case 931: a=S.splice(S.length-1,1);b=null;v=R.call("n","b(Z)V",b,a,184);
case 934: S.push(0);
case 935: L[6]=S.pop();
case 937: pc=1429;continue flow;
case 940: S.push(L[5]);
case 942: S.push(17);
case 944: b=S.pop();a=S.pop();if(a!==b){pc=971;continue flow;}
case 947: S.push(L[4]);
case 949: S.push(1);
case 950: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 951: S.push(1);
case 952: b=S.pop();a=S.pop();if(a!==b){pc=959;continue flow;}
case 955: S.push(1);
case 956: pc=960;continue flow;
case 959: S.push(0);
case 960: S.push(0);
case 961: L[2]=S.pop();
case 962: R.staticSet("e","e.a:Z",S.pop());
case 965: S.push(0);
case 966: L[6]=S.pop();
case 968: pc=1429;continue flow;
case 971: S.push(L[5]);
case 973: S.push(21);
case 975: b=S.pop();a=S.pop();if(a!==b){pc=1001;continue flow;}
case 978: S.push(L[2]);
case 979: S.push(L[4]);
case 981: S.push(1);
case 982: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 983: S.push(1);
case 984: b=S.pop();a=S.pop();if(a!==b){pc=991;continue flow;}
case 987: S.push(1);
case 988: pc=992;continue flow;
case 991: S.push(0);
case 992: a=S.splice(S.length-1,1);b=S.pop();v=R.call("n","a(Z)V",b,a,182);
case 995: S.push(1);
case 996: L[6]=S.pop();
case 998: pc=1429;continue flow;
case 1001: S.push(L[5]);
case 1003: S.push(22);
case 1005: b=S.pop();a=S.pop();if(a!==b){pc=1017;continue flow;}
case 1008: a=S.splice(S.length-0,0);b=null;v=R.call("n","f()V",b,a,184);
case 1011: S.push(1);
case 1012: L[6]=S.pop();
case 1014: pc=1429;continue flow;
case 1017: S.push(L[5]);
case 1019: S.push(23);
case 1021: b=S.pop();a=S.pop();if(a!==b){pc=1033;continue flow;}
case 1024: a=S.splice(S.length-0,0);b=null;v=R.call("n","g()V",b,a,184);
case 1027: S.push(1);
case 1028: L[6]=S.pop();
case 1030: pc=1429;continue flow;
case 1033: S.push(L[5]);
case 1035: S.push(18);
case 1037: b=S.pop();a=S.pop();if(a!==b){pc=1053;continue flow;}
case 1040: S.push(L[4]);
case 1042: S.push(1);
case 1043: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 1044: a=S.splice(S.length-1,1);b=null;v=R.call("n","f(I)V",b,a,184);
case 1047: S.push(1);
case 1048: L[6]=S.pop();
case 1050: pc=1429;continue flow;
case 1053: S.push(L[5]);
case 1055: S.push(24);
case 1057: b=S.pop();a=S.pop();if(a!==b){pc=1105;continue flow;}
case 1060: S.push(L[4]);
case 1062: S.push(1);
case 1063: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 1064: S.push(R.staticGet("q","q.b:I"));
case 1067: b=S.pop();a=S.pop();S.push(Math.imul(a,b));
case 1068: S.push(L[4]);
case 1070: S.push(3);
case 1071: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 1072: S.push(R.staticGet("q","q.b:I"));
case 1075: b=S.pop();a=S.pop();S.push(Math.imul(a,b));
case 1076: S.push(L[4]);
case 1078: S.push(2);
case 1079: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 1080: S.push(R.staticGet("q","q.c:I"));
case 1083: b=S.pop();a=S.pop();S.push(Math.imul(a,b));
case 1084: S.push(L[4]);
case 1086: S.push(4);
case 1087: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 1088: S.push(R.staticGet("q","q.c:I"));
case 1091: b=S.pop();a=S.pop();S.push(Math.imul(a,b));
case 1092: S.push(L[4]);
case 1094: S.push(5);
case 1095: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 1096: a=S.splice(S.length-5,5);b=null;v=R.call("n","a(IIIII)V",b,a,184);
case 1099: S.push(0);
case 1100: L[6]=S.pop();
case 1102: pc=1429;continue flow;
case 1105: S.push(L[5]);
case 1107: S.push(25);
case 1109: b=S.pop();a=S.pop();if(a!==b){pc=1121;continue flow;}
case 1112: a=S.splice(S.length-0,0);b=null;v=R.call("n","c()V",b,a,184);
case 1115: S.push(0);
case 1116: L[6]=S.pop();
case 1118: pc=1429;continue flow;
case 1121: S.push(L[5]);
case 1123: S.push(26);
case 1125: b=S.pop();a=S.pop();if(a!==b){pc=1141;continue flow;}
case 1128: S.push(L[4]);
case 1130: S.push(1);
case 1131: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 1132: a=S.splice(S.length-1,1);b=null;v=R.call("n","d(I)V",b,a,184);
case 1135: S.push(0);
case 1136: L[6]=S.pop();
case 1138: pc=1429;continue flow;
case 1141: S.push(L[5]);
case 1143: S.push(29);
case 1145: b=S.pop();a=S.pop();if(a!==b){pc=1176;continue flow;}
case 1148: S.push(L[4]);
case 1150: S.push(1);
case 1151: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 1152: a=S.splice(S.length-1,1);b=null;v=R.call("n","a(I)La;",b,a,184);S.push(v);
case 1155: S.push(S[S.length-1]);
case 1156: L[5]=S.pop();
case 1158: if(S.pop()===null){pc=1170;continue flow;}
case 1161: S.push(L[5]);
case 1163: S.push(L[4]);
case 1165: S.push(2);
case 1166: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 1167: a=S.splice(S.length-2,2);b=null;v=R.call("n","b(La;I)V",b,a,184);
case 1170: S.push(0);
case 1171: L[6]=S.pop();
case 1173: pc=1429;continue flow;
case 1176: S.push(L[5]);
case 1178: S.push(30);
case 1180: b=S.pop();a=S.pop();if(a!==b){pc=1212;continue flow;}
case 1183: S.push(L[4]);
case 1185: S.push(1);
case 1186: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 1187: a=S.splice(S.length-1,1);b=null;v=R.call("n","a(I)La;",b,a,184);S.push(v);
case 1190: S.push(S[S.length-1]);
case 1191: L[5]=S.pop();
case 1193: if(S.pop()===null){pc=1206;continue flow;}
case 1196: S.push(L[5]);
case 1198: S.push(L[4]);
case 1200: S.push(2);
case 1201: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 1202: S.push(S.pop()<<24>>24);
case 1203: v=S.pop();a=S.pop();R.set(a,"a.b:B",v);
case 1206: S.push(0);
case 1207: L[6]=S.pop();
case 1209: pc=1429;continue flow;
case 1212: S.push(L[5]);
case 1214: S.push(31);
case 1216: b=S.pop();a=S.pop();if(a!==b){pc=1248;continue flow;}
case 1219: S.push(L[4]);
case 1221: S.push(1);
case 1222: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 1223: a=S.splice(S.length-1,1);b=null;v=R.call("n","a(I)La;",b,a,184);S.push(v);
case 1226: S.push(S[S.length-1]);
case 1227: L[5]=S.pop();
case 1229: if(S.pop()===null){pc=1242;continue flow;}
case 1232: S.push(L[5]);
case 1234: S.push(L[4]);
case 1236: S.push(2);
case 1237: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 1238: S.push(S.pop()<<16>>16);
case 1239: v=S.pop();a=S.pop();R.set(a,"a.b:S",v);
case 1242: S.push(0);
case 1243: L[6]=S.pop();
case 1245: pc=1429;continue flow;
case 1248: S.push(L[5]);
case 1250: S.push(28);
case 1252: b=S.pop();a=S.pop();if(a!==b){pc=1270;continue flow;}
case 1255: S.push(L[4]);
case 1257: S.push(1);
case 1258: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 1259: S.push(1);
case 1260: b=S.pop();a=S.pop();S.push((a-b)|0);
case 1261: a=S.splice(S.length-1,1);b=null;v=R.call("n","b(I)V",b,a,184);
case 1264: S.push(0);
case 1265: L[6]=S.pop();
case 1267: pc=1429;continue flow;
case 1270: S.push(L[5]);
case 1272: S.push(27);
case 1274: b=S.pop();a=S.pop();if(a!==b){pc=1290;continue flow;}
case 1277: a=S.splice(S.length-0,0);b=null;v=R.call("n","a()V",b,a,184);
case 1280: S.push(1);
case 1281: R.staticSet("n","n.a:Z",S.pop());
case 1284: S.push(0);
case 1285: L[6]=S.pop();
case 1287: pc=1429;continue flow;
case 1290: S.push(L[5]);
case 1292: S.push(33);
case 1294: b=S.pop();a=S.pop();if(a!==b){pc=1306;continue flow;}
case 1297: a=S.splice(S.length-0,0);b=null;v=R.call("n","i()V",b,a,184);
case 1300: S.push(1);
case 1301: L[6]=S.pop();
case 1303: pc=1429;continue flow;
case 1306: S.push(L[5]);
case 1308: S.push(32);
case 1310: b=S.pop();a=S.pop();if(a!==b){pc=1322;continue flow;}
case 1313: a=S.splice(S.length-0,0);b=null;v=R.call("n","h()V",b,a,184);
case 1316: S.push(1);
case 1317: L[6]=S.pop();
case 1319: pc=1429;continue flow;
case 1322: S.push(L[5]);
case 1324: S.push(34);
case 1326: b=S.pop();a=S.pop();if(a!==b){pc=1362;continue flow;}
case 1329: S.push(L[4]);
case 1331: S.push(1);
case 1332: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 1333: S.push(L[4]);
case 1335: S.push(2);
case 1336: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 1337: S.push(16);
case 1339: b=S.pop();a=S.pop();S.push(a<<b);
case 1340: S.push(L[4]);
case 1342: S.push(3);
case 1343: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 1344: S.push(8);
case 1346: b=S.pop();a=S.pop();S.push(a<<b);
case 1347: b=S.pop();a=S.pop();S.push(a|b);
case 1348: S.push(L[4]);
case 1350: S.push(3);
case 1351: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 1352: b=S.pop();a=S.pop();S.push(a|b);
case 1353: a=S.splice(S.length-2,2);b=null;v=R.call("n","b(II)V",b,a,184);
case 1356: S.push(0);
case 1357: L[6]=S.pop();
case 1359: pc=1429;continue flow;
case 1362: S.push(L[5]);
case 1364: S.push(35);
case 1366: b=S.pop();a=S.pop();if(a!==b){pc=1379;continue flow;}
case 1369: S.push(0);
case 1370: R.staticSet("n","n.b:Z",S.pop());
case 1373: S.push(0);
case 1374: L[6]=S.pop();
case 1376: pc=1429;continue flow;
case 1379: S.push(L[5]);
case 1381: S.push(36);
case 1383: b=S.pop();a=S.pop();if(a!==b){pc=1415;continue flow;}
case 1386: S.push(L[4]);
case 1388: S.push(1);
case 1389: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 1390: S.push(L[4]);
case 1392: S.push(2);
case 1393: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 1394: S.push(R.staticGet("q","q.b:I"));
case 1397: b=S.pop();a=S.pop();S.push(Math.imul(a,b));
case 1398: S.push(L[4]);
case 1400: S.push(3);
case 1401: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 1402: S.push(R.staticGet("q","q.c:I"));
case 1405: b=S.pop();a=S.pop();S.push(Math.imul(a,b));
case 1406: a=S.splice(S.length-3,3);b=null;v=R.call("n","a(III)V",b,a,184);
case 1409: S.push(0);
case 1410: L[6]=S.pop();
case 1412: pc=1429;continue flow;
case 1415: S.push(L[5]);
case 1417: S.push(37);
case 1419: b=S.pop();a=S.pop();if(a!==b){pc=1429;continue flow;}
case 1422: S.push(0);
case 1423: a=S.splice(S.length-1,1);b=null;v=R.call("n","e(I)V",b,a,184);
case 1426: S.push(0);
case 1427: L[6]=S.pop();
case 1429: S.push(L[6]);
case 1431: S.push(S[S.length-1]);
case 1432: L[2]=S.pop();
case 1433: if(S.pop()<0){pc=1452;continue flow;}
case 1436: S.push(L[2]);
case 1437: if(S.pop()!==0){pc=1444;continue flow;}
case 1440: S.push(1);
case 1441: pc=1445;continue flow;
case 1444: S.push(0);
case 1445: L[2]=S.pop();
case 1446: L[3]=(L[3]+(1))|0;
case 1449: pc=4;continue flow;
case 1452: S.push(L[3]);
case 1453: return S.pop();
default:throw new Error("Invalid control flow c.a(Ln;)I "+pc);
}}catch(error){
throw error;}}});
// c.a()I
R.method("c","a()I",function(self,args){
const S=[], L=new Array(2).fill(null); let a,b,c,d,v,pc=0,ip=0;
L[0]=self;
flow: while(true){ try { switch(pc){
case 0: S.push(L[0]);
case 1: a=S.pop();S.push(R.get(a,"c.a:I"));
case 4: S.push(L[0]);
case 5: a=S.pop();S.push(R.get(a,"c.a:[B"));
case 8: S.push(R.length(S.pop()));
case 9: S.push(1);
case 10: b=S.pop();a=S.pop();S.push((a-b)|0);
case 11: b=S.pop();a=S.pop();if(a>=b){pc=62;continue flow;}
case 14: S.push(L[0]);
case 15: a=S.pop();S.push(R.get(a,"c.a:[B"));
case 18: S.push(L[0]);
case 19: a=S.pop();S.push(R.get(a,"c.a:I"));
case 22: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 23: S.push(255);
case 26: b=S.pop();a=S.pop();S.push(a&b);
case 27: S.push(8);
case 29: b=S.pop();a=S.pop();S.push(a<<b);
case 30: S.push(0);
case 31: L[1]=S.pop();
case 32: S.push(L[0]);
case 33: a=S.pop();S.push(R.get(a,"c.a:[B"));
case 36: S.push(L[0]);
case 37: a=S.pop();S.push(R.get(a,"c.a:I"));
case 40: S.push(1);
case 41: b=S.pop();a=S.pop();S.push((a+b)|0);
case 42: b=S.pop();a=S.pop();S.push(R.aget(a,b));
case 43: S.push(255);
case 46: b=S.pop();a=S.pop();S.push(a&b);
case 47: b=S.pop();a=S.pop();S.push(a|b);
case 48: L[1]=S.pop();
case 49: S.push(L[0]);
case 50: S.push(S[S.length-1]);
case 51: a=S.pop();S.push(R.get(a,"c.a:I"));
case 54: S.push(2);
case 55: b=S.pop();a=S.pop();S.push((a+b)|0);
case 56: v=S.pop();a=S.pop();R.set(a,"c.a:I",v);
case 59: S.push(L[1]);
case 60: S.push(S.pop()<<16>>16);
case 61: return S.pop();
case 62: S.push(-2147483648);
case 64: return S.pop();
default:throw new Error("Invalid control flow c.a()I "+pc);
}}catch(error){
throw error;}}});
}
