// Optional port localization. Original generated methods and six RP54 tables stay intact.
import strings from './strings-pl.js?v=1';
export const polishStrings=Object.freeze(strings);
export const POLISH_RESOURCE=55302, POLISH_MENU=30, POLISH_LABEL=233;
const letters=Object.entries({Ą:'A',Ć:'C',Ę:'E',Ł:'L',Ń:'N',Ó:'O',Ś:'S',Ź:'Z',Ż:'Z',ą:'a',ć:'c',ę:'e',ł:'l',ń:'n',ó:'o',ś:'s',ź:'z',ż:'z'});

function drawMark(graphics,glyph,x,y,flip){
 if(!graphics.draw)return; // Simulation backends have no canvas.
 const base=glyph.polishBase,c=glyph.polishChar,w=base['j.c:S'],h=base['j.d:S'];
 const bx=base['j.a:S'],by=base['j.b:S'];
 graphics.draw(ctx=>{
  ctx.translate(x,y);ctx.scale(flip&2?-1:1,flip&1?-1:1);
  // The accent is a small vector extension of the bitmap glyph, not AI artwork.
  const cx=bx+w*.6,top=Math.max(0,by-2.5),bottom=by+h;
  const stroke=(color,offset)=>{
   ctx.save();ctx.translate(offset,offset);ctx.strokeStyle=ctx.fillStyle=color;ctx.lineWidth=Math.max(.85,h/12);ctx.lineCap='round';ctx.lineJoin='round';ctx.beginPath();
   if('ĄĘąę'.includes(c)){ctx.moveTo(bx+w*.72,bottom-.5);ctx.quadraticCurveTo(bx+w*.25,bottom+2.4,bx+w*.8,bottom+2.2);ctx.stroke();}
   else if('Łł'.includes(c)){ctx.moveTo(bx+w*.12,by+h*.66);ctx.lineTo(bx+w*.9,by+h*.36);ctx.stroke();}
   else if('Żż'.includes(c)){ctx.arc(cx,top+.5,Math.max(.6,h/15),0,Math.PI*2);ctx.fill();}
   else{ctx.moveTo(cx-.7,top+1.3);ctx.lineTo(cx+1,top-.5);ctx.stroke();}
   ctx.restore();
  };
  stroke('#17151b',.55);stroke('#f5f1ed',0);
 });
}

export function installPolishLocalization(R){
 const state={active:false};
 const wrap=(c,key,fn)=>{const methods=R.classes.get(c).methods,original=methods.get(key);if(!original)throw Error('Localization method missing: '+c+'.'+key);methods.set(key,(self,args)=>fn(original,self,args));};
 const set=(key,value)=>R.staticSet('n','n.'+key,value),get=key=>R.staticGet('n','n.'+key);
 const game=()=>R.platform.current;
 const load=()=>R.call('s','h(I)V',game(),[POLISH_RESOURCE],183);
 wrap('s','h(I)V',(original,self,args)=>{
  state.active=args[0]===POLISH_RESOURCE;
  if(!state.active)return original(self,args);
  const encoded=polishStrings.map(t=>new TextEncoder().encode(t)),length=encoded.reduce((n,b)=>n+b.length,0);
  if(length>65535)throw Error('Polish source offset table overflow');
  const offsets=R.array('C',234),bytes=R.array('B',length);let pos=0;
  encoded.forEach((b,i)=>{offsets[i]=pos;bytes.set(b,pos);pos+=b.length;});offsets[233]=pos;
  self['s.a:[C']=offsets;self['s.c:[B']=bytes;
 });
 wrap('s','a(I)Ljava/lang/String;',(original,self,args)=>args[0]===POLISH_LABEL?'Polski':original(self,args));
 wrap('n','b([B)V',(original,self,args)=>{
  const value=original(self,args),old=get('p:[I');
  if(old.length===30){const menu=R.array('I',31);menu.set(old);menu[29]&=~0x400;menu[30]=0x1c00|POLISH_LABEL;set('p:[I',menu);}
  return value;
 });
 wrap('n','s()V',(original,self,args)=>{const value=original(self,args);set('a:B',POLISH_MENU);return value;});
 wrap('n','r()V',(original,self,args)=>{const value=original(self,args);if(get('a:B')===POLISH_MENU)load();return value;});
 wrap('n','g(II)V',(original,self,args)=>{const value=original(self,args);if(args[0]===8&&get('a:B')===POLISH_MENU)R.call('n','p(I)V',null,[POLISH_MENU],184);return value;});
 wrap('n','O()V',(original,self,args)=>{
  if(get('bG:I')!==POLISH_MENU||!(get('n:Z')||get('p:Z')))return original(self,args);
  load();set('a:B',POLISH_MENU);set('P:Z',0);R.call('n','q()V',null,[],184);
  if(get('k:I')===8){set('aB:I',19);set('am:I',5);set('an:I',5);set('ak:I',17);R.call('n','g(II)V',self,[1,12],183);}
  else if(get('bH:I')>0){const index=get('bH:I')-1;set('bH:I',index);R.call('n','p(I)V',null,[get('q:[I')[index]],184);R.call('s','o()V',self,[],183);}
 });
 // Let the source initialize its delta-encoded font metadata first. Added
 // letters inherit the real bitmap advance, bounds and per-variant texture.
 const fonts=new WeakSet();
 wrap('s','a([Lj;)V',(original,self,args)=>{
  const value=original(self,args),font=args[0];if(!font||fonts.has(font))return value;fonts.add(font);
  for(const [char,baseChar]of letters){if(font.some(g=>g['j.e:S']===char.charCodeAt(0)))continue;const base=font.find(g=>g['j.e:S']===baseChar.charCodeAt(0));if(base)font.push({...base,'j.e:S':char.charCodeAt(0),polishBase:base,polishChar:char});}
  return value;
 });
 wrap('j','a(Ljavax/microedition/lcdui/Graphics;III)V',(original,self,args)=>{
  if(!self.polishBase)return original(self,args);
  const result=original(self.polishBase,args);drawMark(args[0],self,...args.slice(1));return result;
 });
 return state;
}
