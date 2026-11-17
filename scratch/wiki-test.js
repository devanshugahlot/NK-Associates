async function getWikiImage(title) {
  const url = `https://commons.wikimedia.org/w/api.php?action=query&titles=${encodeURIComponent(title)}&prop=imageinfo&iiprop=url|size|mime|extmetadata&format=json`;
  const res = await fetch(url, { headers: { 'User-Agent': 'NKWebsite/1.0' } });
  const data = await res.json();
  const pages = data.query?.pages;
  const page = Object.values(pages)[0];
  const info = page?.imageinfo?.[0];
  console.log('Title:', title);
  console.log('URL:', info?.url);
  console.log('License:', info?.extmetadata?.LicenseShortName?.value);
  console.log('Artist:', info?.extmetadata?.Artist?.value);
  return info;
}

getWikiImage('File:Kirana shop.jpg');
getWikiImage('File:Grocery Shop in a small Town in South India (1).JPG');
