// Test Unsplash photo candidates
const candidates = [
  // Slot 1: Hero (Tax filing, laptop, calculator, invoice)
  { slot: 1, name: 'hero', id: '1554224155-8d04cb21cd6c', note: 'Laptop, calculator, documents on desk' },
  { slot: 1, name: 'hero-alt', id: '1460925895917-afdab827c52f', note: 'Financial charts and laptop workspace' },
  
  // Slot 2: Why Choose Us / Indian business (Indian small shop, kirana, merchant, Indian market)
  { slot: 2, name: 'india-shop-1', id: '1587293852726-70cdb56c2866', note: 'Indian marketplace / small business' },
  { slot: 2, name: 'india-shop-2', id: '1509099836639-18ba1795216d', note: 'Indian store owner / artisan' },
  { slot: 2, name: 'india-shop-3', id: '1607344645866-009c320c5ab8', note: 'Indian spice / grocery store' },
  { slot: 2, name: 'india-shop-4', id: '1615886753866-79396abc446e', note: 'Indian merchant shop' },
  { slot: 2, name: 'india-shop-5', id: '1589365278144-c9e705f843ba', note: 'Indian artisan / business shop' },
  { slot: 2, name: 'india-shop-6', id: '1596178065887-1198b6148b2b', note: 'Indian street shop / vendor' },
  
  // Slot 3: How it works (Online application, typing on laptop with documents)
  { slot: 3, name: 'online-app', id: '1517245386807-bb43f82c33c4', note: 'Hands working on laptop with documents' },
  
  // Slot 4: Documents (Organized folders, checklist, paperwork)
  { slot: 4, name: 'docs-folders', id: '1450133064473-71024230f91b', note: 'Organized folders, file review, pen' },
  { slot: 4, name: 'docs-stack', id: '1586281380349-632531db7ed4', note: 'Clean resume / application folders' },

  // Slot 5: Benefits / E-commerce (E-commerce packaging, shipping boxes, small business dispatch)
  { slot: 5, name: 'ecommerce-box', id: '1586528116311-ad8dd3c8310d', note: 'Warehouse parcel boxes / e-commerce' },
  { slot: 5, name: 'ecommerce-pack', id: '1563986768609-322da13575f3', note: 'Order packing and delivery boxes' },
  
  // Slot 6: Final CTA (Modern office / architectural skyline)
  { slot: 6, name: 'cta-arch', id: '1486406146926-c627a92ad1ab', note: 'Modern glass skyscraper facade' },
  { slot: 6, name: 'cta-office', id: '1497366216548-37526070297c', note: 'Modern corporate office space' }
];

async function check() {
  for (const c of candidates) {
    const url = `https://images.unsplash.com/photo-${c.id}?auto=format&fit=crop&w=600&q=70&fm=webp`;
    try {
      const res = await fetch(url, { method: 'HEAD' });
      console.log(`[Slot ${c.slot}] ${c.name} (${c.id}): status ${res.status}`);
    } catch (e) {
      console.log(`[Slot ${c.slot}] ${c.name} (${c.id}): error ${e.message}`);
    }
  }
}
check();
