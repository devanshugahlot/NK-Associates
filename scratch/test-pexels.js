async function testPexels() {
  const res = await fetch('https://www.pexels.com/search/indian%20shopkeeper/', {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
    }
  });
  console.log('Status:', res.status);
  const text = await res.text();
  const matches = [...text.matchAll(/https:\/\/images\.pexels\.com\/photos\/[0-9]+\/[^"'\s<>]+/g)].map(m => m[0]);
  console.log('Found pexels image urls:', matches.length);
  for (const u of matches.slice(0, 5)) {
    console.log('->', u);
  }
}
testPexels();
