import https from 'https';
import fs from 'fs';

const url = 'https://images.unsplash.com/photo-1772460759097-ad68b3232a4f?w=640&q=55&fm=webp';
const file = fs.createWriteStream('scratch/why-choose-us.webp');
https.get(url, (res) => {
  res.pipe(file);
  file.on('finish', () => {
    file.close();
    console.log('Saved scratch/why-choose-us.webp, size:', fs.statSync('scratch/why-choose-us.webp').size);
  });
});
