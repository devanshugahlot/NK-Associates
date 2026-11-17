import fs from 'fs';
import path from 'path';

async function download(url, outName) {
  const res = await fetch(url, { headers: { 'User-Agent': 'NKWebsite/1.0' } });
  const buf = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(path.join('scratch', outName), buf);
  console.log(`Saved ${outName} (${(buf.length / 1024).toFixed(1)} KB)`);
}

await download('https://upload.wikimedia.org/wikipedia/commons/a/a2/Kirana_shop.jpg', 'kirana-1.jpg');
await download('https://upload.wikimedia.org/wikipedia/commons/9/9d/Grocery_Shop_in_a_small_Town_in_South_India_%281%29.JPG', 'kirana-2.jpg');
