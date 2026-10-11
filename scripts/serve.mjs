import http from 'node:http';
import { createReadStream } from 'node:fs';
import { stat } from 'node:fs/promises';
import { extname, relative, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const root=resolve(fileURLToPath(new URL('../dist/',import.meta.url)));
const port=Number(process.env.CENTAURA_PORT||4173);
if(!Number.isInteger(port)||port<1||port>65535){console.error('CENTAURA_PORT must be a port number from 1 to 65535.');process.exit(1);}
const types={'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.json':'application/json','.svg':'image/svg+xml','.png':'image/png','.jpg':'image/jpeg','.webp':'image/webp','.mp4':'video/mp4','.ttf':'font/ttf','.woff2':'font/woff2','.ico':'image/x-icon'};
try{await stat(resolve(root,'index.html'));}catch{console.error('Production build missing. Run npm run build first.');process.exit(1);}
const server=http.createServer(async(req,res)=>{
 if(!['GET','HEAD'].includes(req.method)){res.writeHead(405);res.end();return;}
 let pathname;try{pathname=decodeURIComponent(new URL(req.url,'http://localhost').pathname);}catch{res.writeHead(400);res.end();return;}
 let path=resolve(root,'.'+pathname);let rel=relative(root,path);
 if(rel==='..'||rel.startsWith('..'+sep)||rel.includes('\0')){res.writeHead(403);res.end();return;}
 let info;try{info=await stat(path);if(!info.isFile())throw new Error('Directory');}catch{if(extname(pathname)){res.writeHead(404);res.end('Asset not found');return;}path=resolve(root,'index.html');info=await stat(path);}
 const etag=`W/"${info.size.toString(16)}-${Math.trunc(info.mtimeMs).toString(16)}"`;
 const immutable=/[\\/]assets[\\/].+-[A-Za-z0-9_-]{8,}\.(js|css)$/.test(path);
 const headers={'Content-Type':types[extname(path)]||'application/octet-stream','Accept-Ranges':'bytes','Cache-Control':immutable?'public, max-age=31536000, immutable':'no-cache','ETag':etag,'X-Content-Type-Options':'nosniff','Referrer-Policy':'strict-origin-when-cross-origin','Content-Security-Policy':"default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; font-src 'self'; media-src 'self'; connect-src 'self'; object-src 'none'; base-uri 'self'; frame-ancestors 'none'"};
 if(!req.headers.range&&req.headers['if-none-match']===etag){res.writeHead(304,headers);res.end();return;}
 if(info.size===0){res.writeHead(req.headers.range?416:200,{...headers,'Content-Length':0,...(req.headers.range?{'Content-Range':'bytes */0'}:{})});res.end();return;}
 let start=0,end=info.size-1,status=200;
 if(req.headers.range){const m=/^bytes=(\d*)-(\d*)$/.exec(req.headers.range);if(!m||(!m[1]&&!m[2])){res.writeHead(416,{'Content-Range':`bytes */${info.size}`});res.end();return;}if(!m[1])start=Math.max(0,info.size-Number(m[2]));else{start=Number(m[1]);if(m[2])end=Math.min(end,Number(m[2]));}if(start>end||start>=info.size){res.writeHead(416,{'Content-Range':`bytes */${info.size}`});res.end();return;}status=206;headers['Content-Range']=`bytes ${start}-${end}/${info.size}`;}
 headers['Content-Length']=end-start+1;res.writeHead(status,headers);if(req.method==='HEAD'){res.end();return;}const stream=createReadStream(path,{start,end});stream.on('error',()=>res.destroy());stream.pipe(res);res.on('close',()=>stream.destroy());
});
server.on('error',async err=>{
 if(err.code==='EADDRINUSE'){
  try{
   const existing=await new Promise((yes,no)=>{const request=http.get(`http://127.0.0.1:${port}/`,response=>{let body='';response.on('data',part=>body+=part);response.on('end',()=>yes(body));});request.setTimeout(1500,()=>request.destroy(new Error('Timeout')));request.on('error',no);});
   if(/<title>CENTAURA/.test(existing)){console.log(`CENTAURA is already running. Open http://127.0.0.1:${port}`);process.exit(0);}
  }catch{/* Another local process owns this port. */}
 }
 console.error(err.code==='EADDRINUSE'?`Port ${port} is serving another application. Set CENTAURA_PORT to a different port.`:err.message);process.exit(1);
});
server.listen(port,'127.0.0.1',()=>console.log(`\nCENTAURA offline production demo\nhttp://127.0.0.1:${port}\nKeep this terminal open. Press Ctrl+C to stop.\n`));
