// Preserve original generated PNGs; create smaller WebP delivery copies without cropping.
import { createRequire } from 'node:module';
import { readdir, stat, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
const require=createRequire(import.meta.url);
const sharp=require(process.env.CENTAURA_SHARP_PATH||'sharp');
const root=resolve('public/images');
const files=(await readdir(resolve(root,'products'))).filter(n=>n.endsWith('.png')).map(n=>`products/${n}`);
for(const n of ['hero-campaign.png','aurawear-campaign.png','starter-presentation-v2.png','aurawear-lifestyle-v2.png','aurawear-campaign-v3.png','aurawear-lifestyle-v3.png','starter-presentation-v3.png']){try{await stat(resolve(root,n));files.push(n);}catch{/* Optional editorial assets may be added later. */}}
const report=[];
for(const name of files){const source=resolve(root,name),output=source.replace(/\.png$/,'.webp');const input=await stat(source);const metadata=await sharp(source).metadata();let fresh=false;try{fresh=(await stat(output)).mtimeMs>=input.mtimeMs;}catch{/* A first delivery copy is needed. */}if(!fresh)await sharp(source).webp({quality:88,alphaQuality:100,effort:6}).toFile(output);const result=await stat(output);report.push({source:`/images/${name}`,output:`/images/${name.replace(/\.png$/,'.webp')}`,width:metadata.width,height:metadata.height,originalBytes:input.size,webpBytes:result.size});console.log(`${name}: ${(input.size/1024).toFixed(0)} → ${(result.size/1024).toFixed(0)} KB${fresh?' (retained)':''}`);}
await writeFile(resolve(root,'optimized-assets.json'),JSON.stringify(report,null,2)+'\n');
