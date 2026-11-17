import fs from 'fs';
import path from 'path';

async function testDownload() {
  const ids = ['1554224154-26032ffc0d07', '1554224155-6726b3ff858f', '1586486855512-856abab6866e'];
  for (const id of ids) {
    const url = `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1200&q=75&fm=webp`;
    const res = await fetch(url);
    if (res.ok) {
      const buf = Buffer.from(await res.arrayBuffer());
      fs.writeFileSync(path.join('scratch', `hero-${id.slice(0, 10)}.webp`), buf);
      console.log(`Saved hero-${id.slice(0, 10)}.webp (${(buf.length / 1024).toFixed(1)} KB)`);
    } else {
      console.log(`ID ${id} status: ${res.status}`);
    }
  }
}
testDownload();
