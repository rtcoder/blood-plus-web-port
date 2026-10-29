#!/usr/bin/env python3
"""Offline, exact RGBA PNG→WebP conversion. No generation or online dependency.
Run only against a PNG package; the shipped runtime already contains its results.
"""
from pathlib import Path
from concurrent.futures import ThreadPoolExecutor
from PIL import Image
import hashlib,json,subprocess
ROOT=Path(__file__).resolve().parents[2]
WEB=ROOT/'web';ART=WEB/'assets/remaster-v3'
sha=lambda b:hashlib.sha256(b).hexdigest()
def main():
 manifest=json.loads((ART/'manifest.json').read_text())
 if 'groups' in manifest:raise SystemExit('Already encoded; no changes made.')
 base=json.loads((WEB/'assets/manifest.json').read_text());source=json.loads((WEB/'assets/game-data.json').read_text())
 paths={WEB/f['url'].split('?')[0] for s in manifest['sequences']for f in s['frames']}
 paths.update(WEB/i['finalTexture'] for i in base['images'])
 def encode(p):
  target=p.with_suffix('.webp');subprocess.run(['cwebp','-quiet','-lossless','-exact','-m','4',str(p),'-o',str(target)],check=True)
  with Image.open(p)as im:rgba=im.convert('RGBA').tobytes();size=im.size
  with Image.open(target)as im:
   assert im.size==size,str(p)
   assert im.convert('RGBA').tobytes()==rgba,'RGBA mismatch '+str(p)
  return str(p.relative_to(WEB)),{'url':str(target.relative_to(WEB)),'pngSha256':sha(p.read_bytes()),'webpSha256':sha(target.read_bytes()),'rgbaSha256':sha(rgba),'size':list(size),'pngBytes':p.stat().st_size,'webpBytes':target.stat().st_size}
 encoded={}
 with ThreadPoolExecutor(max_workers=6)as pool:
  for index,(name,record)in enumerate(pool.map(encode,sorted(paths)),1):
   encoded[name]=record
   if index%300==0:print('RGBA verified:',index,'/',len(paths),flush=True)
 # Source group palettes are invariant in the approved package. Preserve exact
 # per-frame geometry and the same last-wins resolution, without production prompts.
 groups={};animations={g['resourceId']:[[s['frame']for s in a['steps']]for a in g['animations']]for g in source['animationSets']}
 for s in manifest['sequences']:
  rid=s['resourceId'];g=groups.setdefault(rid,{'resourceId':rid,'paletteRGB':s.get('paletteRGB'),'frames':{},'animations':animations.get(rid,[])})
  assert g['paletteRGB']==s.get('paletteRGB')
  for f in s['frames']:
   r=encoded[f['url'].split('?')[0]];g['frames'][f['frame']]={'frame':f['frame'],'logicalBounds':f['logicalBounds'],'url':r['url']+'?v='+r['webpSha256'],**({'empty':True}if f.get('empty')else{})}
 for g in groups.values():g['frames']=list(g['frames'].values())
 compact={'schemaVersion':2,'textureScale':4,'encoding':'WebP lossless exact; decoded RGBA verified against every previous PNG','groups':list(groups.values())}
 for i in base['images']:
  r=encoded[i['finalTexture']];i['finalTexture']=r['url'];i['finalSha256']=r['webpSha256']
 proof={'codec':'libwebp cwebp 1.6.0 -lossless -exact -m 4','pixelVerification':'Every decoded RGBA byte matches its previous PNG, including alpha-zero pixels. No geometry changes.','files':encoded,'pngBytes':sum(r['pngBytes']for r in encoded.values()),'webpBytes':sum(r['webpBytes']for r in encoded.values()),'oldIndexBytes':(ART/'manifest.json').stat().st_size}
 (ART/'encoding-proof.json').write_text(json.dumps(proof,separators=(',',':'))+'\n')
 (ART/'manifest.json').write_text(json.dumps(compact,separators=(',',':'))+'\n')
 (WEB/'assets/manifest.json').write_text(json.dumps(base,separators=(',',':'))+'\n')
 for p in paths:p.unlink()
 print(json.dumps({k:v for k,v in proof.items()if k!='files'},indent=2),flush=True)
 print('Compact index bytes:',(ART/'manifest.json').stat().st_size,flush=True)
if __name__=='__main__':main()
