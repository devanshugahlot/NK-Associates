// Search Unsplash for Indian small business / shopkeeper
async function searchUnsplash(query) {
  const url = `https://unsplash.com/napi/search/photos?query=${encodeURIComponent(query)}&per_page=15`;
  const res = await fetch(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
    }
  });
  if (!res.ok) {
    console.log('Search status:', res.status);
    return [];
  }
  const data = await res.json();
  return (data.results || []).map(r => ({
    id: r.id,
    alt: r.alt_description || r.description,
    url: r.urls?.regular,
    user: r.user?.name,
    userLink: r.user?.links?.html
  }));
}

async function run() {
  const queries = ['indian shopkeeper', 'kirana store india', 'small business india shop', 'indian merchant'];
  for (const q of queries) {
    console.log(`\n--- Results for: "${q}" ---`);
    const results = await searchUnsplash(q);
    for (const r of results.slice(0, 5)) {
      console.log(`ID: ${r.id} | User: ${r.user} | Alt: ${r.alt}`);
      console.log(`URL: ${r.url}`);
    }
  }
}
run();
