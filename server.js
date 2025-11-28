import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname } from 'node:path';

const PORT = process.env.PORT || 3000;

const mime = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8'
};

async function handler(req, res) {
  const url = req.url === '/' ? '/index.html' : req.url;
  try {
    let filePath;
    if (url.startsWith('/node_modules/')) {
      filePath = new URL('.' + url, import.meta.url);
    } else {
      filePath = new URL('./public' + url, import.meta.url);
    }
    const data = await readFile(filePath);
    const type = mime[extname(filePath.pathname)] || 'application/octet-stream';
    res.writeHead(200, { 'Content-Type': type });
    res.end(data);
  } catch (err) {
    res.writeHead(err.code === 'ENOENT' ? 404 : 500, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end(err.code === 'ENOENT' ? 'Recurso no encontrado' : 'Error interno');
  }
}

createServer(handler).listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
