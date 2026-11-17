import https from 'https';
import fs from 'fs';

async function download(id, filename) {
  const url = `https://images.unsplash.com/${id}?w=1000&q=80&fm=webp`;
  const file = fs.createWriteStream(`scratch/${filename}`);
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        https.get(res.headers.location, (res2) => {
          res2.pipe(file);
          file.on('finish', () => { file.close(); resolve(); });
        });
      } else {
        res.pipe(file);
        file.on('finish', () => { file.close(); resolve(); });
      }
    }).on('error', reject);
  });
}

// photo-1618042164219-62c820f10723 (Kelly Sikkema - office desk with folder, notebook, pen, paperwork)
// photo-1568234928966-359c35dd8327 (documents)
// photo-1584438784894-089d6a62b8fa (signing contract / documents)
await download('photo-1618042164219-62c820f10723', 'docs-folder.webp');
await download('photo-1584438784894-089d6a62b8fa', 'docs-signing.webp');

console.log('Downloaded folder candidates');
