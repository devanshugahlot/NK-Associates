import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const BASE_URL = 'https://nkassociate.in';

const SEO = ({
  title = 'NK Associates | Chartered Accountants & Tax Consultants in Jaipur',
  description = 'NK Associates provides professional GST registration, return filing, Income Tax filing, TDS compliance, and corporate bookkeeping services in Jaipur, Rajasthan.',
  keywords = 'Chartered Accountant Jaipur, CA Jaipur, GST registration Jaipur, Income tax filing Jaipur, Tax consultant Rajasthan, TDS compliance, corporate accounting',
  canonicalPath = '/',
  ogType = 'website',
  schemaJson = null
}) => {
  const location = useLocation();
  const canonicalUrl = `${BASE_URL}${canonicalPath === '/' ? '' : canonicalPath}`;

  useEffect(() => {
    // 1. Update document title
    document.title = title;

    // Helper to update or create meta tag
    const updateMeta = (selector, attributeName, attributeValue, content) => {
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attributeName, attributeValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 2. Update standard meta tags
    updateMeta('meta[name="description"]', 'name', 'description', description);
    updateMeta('meta[name="keywords"]', 'name', 'keywords', keywords);

    // 3. Update Canonical Link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    // 4. Update Open Graph tags
    updateMeta('meta[property="og:title"]', 'property', 'og:title', title);
    updateMeta('meta[property="og:description"]', 'property', 'og:description', description);
    updateMeta('meta[property="og:url"]', 'property', 'og:url', canonicalUrl);
    updateMeta('meta[property="og:type"]', 'property', 'og:type', ogType);

    // 5. Update Twitter tags
    updateMeta('meta[name="twitter:title"], meta[property="twitter:title"]', 'name', 'twitter:title', title);
    updateMeta('meta[name="twitter:description"], meta[property="twitter:description"]', 'name', 'twitter:description', description);
    updateMeta('meta[name="twitter:url"], meta[property="twitter:url"]', 'name', 'twitter:url', canonicalUrl);

    // 6. Inject per-page Schema if provided
    let dynamicSchemaTag = document.getElementById('dynamic-page-schema');
    if (schemaJson) {
      if (!dynamicSchemaTag) {
        dynamicSchemaTag = document.createElement('script');
        dynamicSchemaTag.id = 'dynamic-page-schema';
        dynamicSchemaTag.type = 'application/ld+json';
        document.head.appendChild(dynamicSchemaTag);
      }
      dynamicSchemaTag.textContent = JSON.stringify(schemaJson);
    } else if (dynamicSchemaTag) {
      dynamicSchemaTag.remove();
    }

    return () => {
      // Clean up dynamic page schema if component unmounts
      const tag = document.getElementById('dynamic-page-schema');
      if (tag) tag.remove();
    };
  }, [title, description, keywords, canonicalUrl, ogType, schemaJson, location.pathname]);

  return null;
};

export default SEO;
