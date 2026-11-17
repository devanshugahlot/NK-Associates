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

// Candidates:
// photo-1586281380349-632531db7ed4 (Wesley Tingey - organized folder/files)
// photo-1568234928966-359c35dd8327 (documents)
// photo-1554224155-1696413565da (Kelly Sikkema - paperwork / documents / pen)
// photo-1454165804606-c3d57bc86b40 (Scott Graham - team reviewing spreadsheets and paperwork)
await download('photo-1586281380349-632531db7ed4', 'docs-wesley.webp');
await download('photo-1554224155-1696413565da', 'docs-kelly.webp');
await download('photo-1454165804606-c3d57bc86b40', 'docs-scott.webp');

console.log('Downloaded candidates');
