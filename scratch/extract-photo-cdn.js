async function getPhotoUrl(pageUrl) {
  const res = await fetch(pageUrl, {
    headers: { 'User-Agent': 'Mozilla/5.0' }
  });
  const html = await res.text();
  const match = html.match(/https:\/\/images\.unsplash\.com\/photo-[a-zA-Z0-9_-]+/);
  console.log('Matched CDN URL:', match ? match[0] : 'None');
}
getPhotoUrl('https://unsplash.com/photos/a-store-front-with-many-items-on-display-bAKYjjvAQIE');
