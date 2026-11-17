import https from 'https';
import fs from 'fs';

async function download(id, filename) {
  const url = `https://images.unsplash.com/photo-${id}?w=1000&q=80&fm=webp`;
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

await download('1750387354022-484120f3dcd0', 'market-mana.webp');
await download('1772460759097-ad68b3232a4f', 'market-aditya.webp');
console.log('Downloaded test market images');
