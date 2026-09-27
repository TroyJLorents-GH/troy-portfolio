// Local production-build preview, including the existing Vercel chat handler.
// Serves only build/ and binds only to loopback. Never publishes anything.
const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
for (const filename of ['.env.local', '.env']) {
  if (fs.existsSync(filename)) process.loadEnvFile(filename);
}
const chat = require('../api/chat');
const root = path.resolve(__dirname, '../build');
const port = Number(process.env.PREVIEW_PORT || 4178);
const types = { '.html': 'text/html; charset=utf-8', '.js': 'application/javascript', '.css': 'text/css', '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.avif': 'image/avif', '.ico': 'image/x-icon', '.json': 'application/json', '.pdf': 'application/pdf', '.txt': 'text/plain' };
http.createServer(async (req, res) => {
  let pathname;
  try { pathname = decodeURIComponent(new URL(req.url, `http://127.0.0.1:${port}`).pathname); }
  catch { res.writeHead(400).end(); return; }
  if (pathname === '/api/chat') {
    try {
      const chunks = []; let length = 0;
      for await (const chunk of req) {
        length += chunk.length;
        if (length > 1_000_000) { res.writeHead(413).end(); return; }
        chunks.push(chunk);
      }
      req.body = Buffer.concat(chunks).toString('utf8');
      res.status = code => { res.statusCode = code; return res; };
      res.send = body => res.end(body);
      await chat(req, res);
    } catch { res.writeHead(500, { 'Content-Type': 'application/json' }).end(JSON.stringify({ error: 'Local chat preview could not complete the request.' })); }
    return;
  }
  const file = path.resolve(root, `.${pathname === '/' ? '/index.html' : pathname}`);
  if (!file.startsWith(root + path.sep)) { res.writeHead(403).end(); return; }
  try {
    const data = fs.readFileSync(file);
    res.writeHead(200, { 'Content-Type': types[path.extname(file)] || 'application/octet-stream', 'Cache-Control': 'no-store' });
    res.end(data);
  } catch { res.writeHead(404).end('Not found'); }
}).listen(port, '127.0.0.1', () => console.log(`Portfolio preview: http://127.0.0.1:${port}`));
