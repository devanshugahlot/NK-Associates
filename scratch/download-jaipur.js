import fs from 'fs';
import path from 'path';

async function download(url, outName) {
  const res = await fetch(url, { headers: { 'User-Agent': 'NKWebsite/1.0' } });
  const buf = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(path.join('scratch', outName), buf);
  console.log(`Saved ${outName} (${(buf.length / 1024).toFixed(1)} KB)`);
}

await download('https://upload.wikimedia.org/wikipedia/commons/1/12/Leather_bags_%2Clocal_artwork_Jaipur_India.jpg', 'jaipur-leather.jpg');
await download('https://upload.wikimedia.org/wikipedia/commons/a/a7/Clothing_shop_in_Jaipur%2C_goods.jpg', 'jaipur-clothing.jpg');
