async function extractNextData(pageUrl) {
  const res = await fetch(pageUrl, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    }
  });
  console.log('Status:', res.status);
  const text = await res.text();
  const nextDataMatch = text.match(/<script id="__NEXT_DATA__" type="application\/json">([\s\S]*?)<\/script>/);
  if (nextDataMatch) {
    console.log('Found __NEXT_DATA__! Length:', nextDataMatch[1].length);
    const data = JSON.parse(nextDataMatch[1]);
    console.log('Keys:', Object.keys(data));
    // search photos in props
    const photos = [];
    function findPhotos(obj) {
      if (!obj || typeof obj !== 'object') return;
      if (obj.id && obj.urls && obj.urls.regular) {
        photos.push({ id: obj.id, alt: obj.alt_description, url: obj.urls.regular, user: obj.user?.name });
      }
      for (const k of Object.keys(obj)) {
        findPhotos(obj[k]);
      }
    }
    findPhotos(data);
    console.log('Found photos:', photos.length);
    for (const p of photos.slice(0, 10)) {
      console.log(`- ID: ${p.id} | Alt: ${p.alt} | User: ${p.user}`);
      console.log(`  URL: ${p.url}`);
    }
  } else {
    console.log('No __NEXT_DATA__ script found.');
  }
}

extractNextData('https://unsplash.com/s/photos/indian-shop');
