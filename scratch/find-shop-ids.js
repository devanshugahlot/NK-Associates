import https from 'https';

function fetchPage(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

const html = await fetchPage('https://unsplash.com/s/photos/indian-shop');
const matches = [...html.matchAll(/https:\/\/images\.unsplash\.com\/(photo-[a-zA-Z0-9-]+)\?/g)];
const ids = [...new Set(matches.map(m => m[1]))];
console.log('Found photo ids:', ids.slice(0, 10));
