import fs from 'fs';
import path from 'path';

const testImages = [
  { name: 'shop-1.webp', id: '1587293852726-70cdb56c2866' },
  { name: 'shop-2.webp', id: '1615886753866-79396abc446e' },
  { name: 'shop-3.webp', id: '1589365278144-c9e705f843ba' },
  { name: 'shop-4.webp', id: '1596178065887-1198b6148b2b' }
];

async function run() {
  if (!fs.existsSync('scratch')) fs.mkdirSync('scratch', { recursive: true });
  for (const item of testImages) {
    const url = `https://images.unsplash.com/photo-${item.id}?auto=format&fit=crop&w=800&q=70&fm=webp`;
    console.log(`Downloading ${item.name}...`);
    const res = await fetch(url);
    const buf = Buffer.from(await res.arrayBuffer());
    fs.writeFileSync(path.join('scratch', item.name), buf);
    console.log(`Saved scratch/${item.name}: ${(buf.length / 1024).toFixed(1)} KB`);
  }
}
run();
