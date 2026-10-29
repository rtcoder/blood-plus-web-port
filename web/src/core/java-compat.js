// Semantics required by the statically translated Blood+ logic; no instruction interpreter.
export class JavaError extends Error { constructor(type,message=type){super(message);this.$class=type;} }
export class Runtime {
 constructor(platform={}){this.classes=new Map();this.platform=platform;this.caught=[];this.clock=0;this.seed=0xB100Dn;}
 define(name,parent,fields){this.classes.set(name,{name,parent,fields,methods:new Map(),statics:{},initialized:false});for(const f of fields)if(f.static)this.classes.get(name).statics[f.key]=f.value;}
 method(c,k,fn){this.classes.get(c).methods.set(k,fn);}
 init(c){const cls=this.classes.get(c);if(!cls||cls.initialized)return;this.init(cls.parent);cls.initialized=true;cls.methods.get('<clinit>()V')?.(null,[]);}
 new(c){this.init(c);const obj={$class:c};const inherit=cl=>{let x=this.classes.get(cl);if(!x)return;inherit(x.parent);for(let f of x.fields)if(!f.static)obj[f.key]=f.value;};inherit(c);return obj;}
 staticGet(c,k){this.init(c);const cl=this.classes.get(c);if(!cl||!(k in cl.statics))throw new Error('Missing static '+k);return cl.statics[k];}
 staticSet(c,k,v){this.init(c);this.classes.get(c).statics[k]=v;}
 nullcheck(o){if(o==null)throw new JavaError('java/lang/NullPointerException');return o;}
 get(o,k){this.nullcheck(o);if(!(k in o))throw new Error('Missing field '+k+' in '+o.$class);return o[k];}
 set(o,k,v){this.nullcheck(o);o[k]=v;}
 call(c,k,self,args,kind=182){
  if(kind!==184)this.nullcheck(self);else this.init(c);
  let cl=(kind===182||kind===185)?(self.$class||c):c;
  while(this.classes.has(cl)){const def=this.classes.get(cl);const fn=def.methods.get(k);if(fn)return fn(self,args);cl=def.parent;}
  return this.native(cl||c,k,self,args);
 }
 idiv(a,b){if(!b)throw new JavaError('java/lang/ArithmeticException');return Math.trunc(a/b)|0;}
 irem(a,b){if(!b)throw new JavaError('java/lang/ArithmeticException');return (a%b)|0;}
 array(type,n){if(n<0)throw new JavaError('java/lang/NegativeArraySizeException');const constructors={B:Int8Array,Z:Int8Array,S:Int16Array,C:Uint16Array,I:Int32Array,F:Float32Array,D:Float64Array};let a=constructors[type]?new constructors[type](n):Array(n).fill(type==='J'?0n:null);a.$type=type;return a;}
 multiArray(type,dims){const build=(t,d)=>{let a=this.array(t.slice(1),dims[d]);if(d+1<dims.length)for(let i=0;i<a.length;i++)a[i]=build(t.slice(1),d+1);return a;};return build(type,0);}
 length(a){return this.nullcheck(a).length;}
 aget(a,i){this.nullcheck(a);if(i<0||i>=a.length)throw new JavaError('java/lang/ArrayIndexOutOfBoundsException',`${i}/${a.length}`);return a[i];}
 aset(a,i,v){this.nullcheck(a);if(i<0||i>=a.length)throw new JavaError('java/lang/ArrayIndexOutOfBoundsException',`${i}/${a.length}`);a[i]=v;}
 instance(o,c){if(o==null)return false;if(c==='java/lang/Object')return true;if(c.startsWith('['))return Array.isArray(o)||ArrayBuffer.isView(o);let cl=o.$class;while(cl){if(cl===c)return true;cl=this.classes.get(cl)?.parent;}return false;}
 cast(o,c){if(o!=null&&!this.instance(o,c))throw new JavaError('java/lang/ClassCastException');}
 monitor(o){this.nullcheck(o);} // JS execution is single-threaded; no shared monitor contention.
 catches(e,type){if(!(e instanceof JavaError))return false;const yes=!type||type==='java/lang/Throwable'||type==='java/lang/Exception'||type===e.$class;if(yes){this.caught.push({type:e.$class,message:e.message});if(this.caught.length>50)this.caught.shift();}return yes;}
 dup(S,op){let a=S.pop(),b=S.pop();if(op===93){if(typeof a==='bigint')S.push(a,b,a);else{let c=S.pop();S.push(b,a,c,b,a);}}else if(typeof a==='bigint'){if(typeof b==='bigint')S.push(a,b,a);else{let c=S.pop();S.push(a,c,b,a);}}else{let c=S.pop();if(typeof c==='bigint')S.push(b,a,c,b,a);else{let d=S.pop();S.push(b,a,d,c,b,a);}}}
 native(c,k,o,a){
  const name=k.slice(0,k.indexOf('('));
  if(c==='java/lang/Object'){
   if(name==='<init>')return;
   if(name==='getClass')return {className:o.$class};
   if(name==='equals')return o===a[0]?1:0;
  }
  if(c==='java/lang/String'){
   if(name==='<init>'){o.value=String.fromCharCode(...a[0].slice(a[1],a[1]+a[2]));return;}
   if(name==='valueOf')return String(a[0]);
   const s=typeof o==='string'?o:o.value;
   if(name==='equals')return s===(typeof a[0]==='string'?a[0]:a[0]?.value)?1:0;
   if(name==='length')return s.length;
   if(name==='charAt'){if(a[0]<0||a[0]>=s.length)throw new JavaError('java/lang/StringIndexOutOfBoundsException');return s.charCodeAt(a[0]);}
   if(name==='indexOf')return s.indexOf(typeof a[0]==='string'?a[0]:a[0]?.value,a[1]);
   if(name==='lastIndexOf')return s.lastIndexOf(String.fromCharCode(a[0]),a.length>1?a[1]:Infinity);
   if(name==='substring')return s.substring(...a);
   if(name==='toLowerCase')return s.toLowerCase();
   if(name==='trim')return s.replace(/^[\x00-\x20]+|[\x00-\x20]+$/g,'');
  }
  if(c==='java/lang/StringBuffer'){
   if(name==='<init>'){o.value='';return;}
   if(name==='append'){o.value+=k.startsWith('append(C)')?String.fromCharCode(a[0]):a[0]?.value??String(a[0]);return o;}
   if(name==='setLength'){o.value=o.value.slice(0,a[0]).padEnd(a[0],'\0');return;}
   if(name==='toString')return o.value;
  }
  if(c==='java/lang/Math')return ({abs:x=>Math.abs(x)|0,min:Math.min,max:Math.max})[name](...a);
  if(c==='java/lang/Integer'&&name==='parseInt'){if(!/^[+-]?\d+$/.test(a[0])||Number(a[0])>2147483647||Number(a[0])< -2147483648)throw new JavaError('java/lang/NumberFormatException');return Number(a[0]);}
  if(c==='java/lang/System'){
   if(name==='currentTimeMillis')return BigInt(Math.trunc(this.clock));
   if(name==='arraycopy'){const [src,off,dst,to,len]=a;this.nullcheck(src);this.nullcheck(dst);if(off<0||to<0||len<0||off+len>src.length||to+len>dst.length)throw new JavaError('java/lang/ArrayIndexOutOfBoundsException');const values=src.slice(off,off+len);for(let i=0;i<len;i++)dst[to+i]=values[i];return;}
  }
  if(c==='java/util/Random'){
   if(name==='<init>'){o.seed=(this.seed^0x5DEECE66Dn)&((1n<<48n)-1n);return;}
   if(name==='nextInt'){o.seed=(o.seed*0x5DEECE66Dn+11n)&((1n<<48n)-1n);return Number(o.seed>>16n)|0;}
  }
  if(c==='java/lang/Class'&&name==='getResourceAsStream')return this.platform.resourceStream(a[0]);
  if(c==='java/io/ByteArrayInputStream'&&name==='<init>'){o.bytes=a[0];o.pos=a[1]??0;o.end=o.pos+(a[2]??a[0].length);return;}
  if(c==='java/io/DataInputStream'){
   if(name==='<init>'){o.stream=a[0];return;}
   if(name==='close')return;
   const st=o.stream,read=()=>{if(st.pos>=st.end)throw new JavaError('java/io/EOFException');return st.bytes[st.pos++]&255;};
   if(name==='read')return st.pos>=st.end?-1:read();
   if(name==='readByte')return read()<<24>>24;
   if(name==='readChar')return read()<<8|read();
   if(name==='readShort')return (read()<<8|read())<<16>>16;
   if(name==='readInt')return read()<<24|read()<<16|read()<<8|read();
   if(name==='skip'){let n=Math.min(Number(a[0]),st.end-st.pos);st.pos+=Math.max(0,n);return BigInt(Math.max(0,n));}
   if(name==='readFully'){let dst=a[0],off=a[1]??0,len=a[2]??dst.length;for(let i=0;i<len;i++)this.aset(dst,off+i,read());return;}
  }
  if(c==='java/lang/Thread'){
   if(name==='<init>'){o.target=a[0];return;}
   if(name==='start'){this.platform.start?.(o.target);return;}
   if(name==='yield')return;
   if(name==='sleep')throw new Error('Blocking source loop must be replaced by browser scheduler');
  }
  if(this.platform.call)return this.platform.call(c,k,o,a);
  throw new Error('Unsupported native '+c+'.'+k);
 }
}
