import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { routesData } from './prerenderData.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '..', 'dist');

export function runPrerender() {
  const indexHtmlPath = path.join(distDir, 'index.html');
  if (!fs.existsSync(indexHtmlPath)) {
    console.error('dist/index.html not found. Please run vite build first.');
    return;
  }

  const baseHtml = fs.readFileSync(indexHtmlPath, 'utf8');

  console.log('Starting static HTML pre-rendering for Google Sitelinks & SEO...');

  for (const [route, config] of Object.entries(routesData)) {
    const data = config.aliasOf ? routesData[config.aliasOf] : config;
    const targetCanonical = config.aliasOf ? `https://nkassociate.in/${route}` : data.canonical;

    let pageHtml = baseHtml;

    // Replace Title
    pageHtml = pageHtml.replace(/<title>.*?<\/title>/s, `<title>${data.title}</title>`);
    pageHtml = pageHtml.replace(/<meta name="title" content=".*?" \/>/, `<meta name="title" content="${data.title}" />`);

    // Replace Description
    pageHtml = pageHtml.replace(/<meta name="description" content=".*?" \/>/, `<meta name="description" content="${data.description}" />`);

    // Replace Canonical
    pageHtml = pageHtml.replace(/<link rel="canonical" href=".*?" \/>/, `<link rel="canonical" href="${targetCanonical}" />`);

    // Replace OpenGraph
    pageHtml = pageHtml.replace(/<meta property="og:title" content=".*?" \/>/, `<meta property="og:title" content="${data.title}" />`);
    pageHtml = pageHtml.replace(/<meta property="og:description" content=".*?" \/>/, `<meta property="og:description" content="${data.description}" />`);
    pageHtml = pageHtml.replace(/<meta property="og:url" content=".*?" \/>/, `<meta property="og:url" content="${targetCanonical}" />`);

    // Replace Twitter
    pageHtml = pageHtml.replace(/<meta name="twitter:title" content=".*?" \/>/, `<meta name="twitter:title" content="${data.title}" />`);
    pageHtml = pageHtml.replace(/<meta name="twitter:description" content=".*?" \/>/, `<meta name="twitter:description" content="${data.description}" />`);
    pageHtml = pageHtml.replace(/<meta name="twitter:url" content=".*?" \/>/, `<meta name="twitter:url" content="${targetCanonical}" />`);

    // Generate BreadcrumbList Schema
    const breadcrumbItems = [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://nkassociate.in/"
      }
    ];

    if (data.parentCrumb) {
      breadcrumbItems.push({
        "@type": "ListItem",
        "position": 2,
        "name": data.parentCrumb.name,
        "item": data.parentCrumb.url
      });
      breadcrumbItems.push({
        "@type": "ListItem",
        "position": 3,
        "name": data.breadcrumbName,
        "item": targetCanonical
      });
    } else {
      breadcrumbItems.push({
        "@type": "ListItem",
        "position": 2,
        "name": data.breadcrumbName,
        "item": targetCanonical
      });
    }

    const breadcrumbJson = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbItems
    }, null, 2);

    const breadcrumbSnippet = `<!-- 5️⃣ BreadcrumbList Schema (Inner Page) -->\n    <script type="application/ld+json">\n${breadcrumbJson}\n    </script>`;

    // Replace Homepage BreadcrumbList schema
    pageHtml = pageHtml.replace(/<!-- 5️⃣ BreadcrumbList Schema.*?<\/script>/s, breadcrumbSnippet);

    // Pre-render content inside <div id="root">
    pageHtml = pageHtml.replace('<div id="root"></div>', `<div id="root">${data.content.trim()}</div>`);

    // Write file to target folder
    const routeFolder = path.join(distDir, route);
    if (!fs.existsSync(routeFolder)) {
      fs.mkdirSync(routeFolder, { recursive: true });
    }
    fs.writeFileSync(path.join(routeFolder, 'index.html'), pageHtml, 'utf8');
    console.log(`Pre-rendered: /${route}/index.html`);
  }

  // 404 fallback
  fs.writeFileSync(path.join(distDir, '404.html'), baseHtml, 'utf8');
  console.log('Pre-rendered: /404.html');
  console.log('All routes pre-rendered successfully!');
}

// Run if called directly
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  runPrerender();
}
