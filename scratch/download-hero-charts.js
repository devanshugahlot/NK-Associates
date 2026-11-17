import fs from 'fs';
import path from 'path';

async function testDownload() {
  const url = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=75&fm=webp';
  const res = await fetch(url);
  const buf = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(path.join('scratch', 'hero-charts.webp'), buf);
  console.log('Saved hero-charts.webp:', (buf.length / 1024).toFixed(1), 'KB');
}
testDownload();
