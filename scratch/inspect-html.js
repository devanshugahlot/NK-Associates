async function inspectHtml(pageUrl) {
  const res = await fetch(pageUrl, {
    headers: { 'User-Agent': 'Mozilla/5.0' }
  });
  const html = await res.text();
  const matches = [...html.matchAll(/https:\/\/[^"'\s<>]+images\.unsplash\.com[^"'\s<>]+/g)].map(m => m[0]);
  console.log('Matches found:', matches.length);
  for (const m of matches.slice(0, 5)) {
    console.log('->', m);
  }
}
inspectHtml('https://unsplash.com/photos/a-store-front-with-many-items-on-display-bAKYjjvAQIE');
