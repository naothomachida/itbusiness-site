import { useEffect } from 'react';

const SEOHead = ({
  title,
  description,
  keywords,
  author,
  publishDate,
  category,
  readTime,
  canonicalUrl,
  ogImage = '/og-default.jpg'
}) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta tags
    const updateMetaTag = (name, content, property = false) => {
      const attr = property ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attr}="${name}"]`);

      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attr, name);
        document.head.appendChild(meta);
      }

      meta.setAttribute('content', content);
    };

    // Basic SEO meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('author', author);

    // Open Graph meta tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:type', 'article', true);
    updateMetaTag('og:image', `${window.location.origin}${ogImage}`, true);
    updateMetaTag('og:url', window.location.href, true);

    // Twitter Card meta tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', `${window.location.origin}${ogImage}`);

    // Article specific meta tags
    if (publishDate) {
      updateMetaTag('article:published_time', publishDate, true);
    }
    if (author) {
      updateMetaTag('article:author', author, true);
    }
    if (category) {
      updateMetaTag('article:section', category, true);
    }

    // Schema.org JSON-LD
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": title,
      "description": description,
      "author": {
        "@type": "Person",
        "name": author
      },
      "publisher": {
        "@type": "Organization",
        "name": "IT Business",
        "logo": {
          "@type": "ImageObject",
          "url": `${window.location.origin}/logo.png`
        }
      },
      "datePublished": publishDate,
      "dateModified": publishDate,
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": window.location.href
      },
      "image": `${window.location.origin}${ogImage}`,
      "keywords": keywords,
      "articleSection": category,
      "wordCount": readTime ? parseInt(readTime) * 250 : undefined // Estimate 250 words per minute
    };

    // Remove existing schema script
    const existingSchema = document.querySelector('#article-schema');
    if (existingSchema) {
      existingSchema.remove();
    }

    // Add new schema script
    const script = document.createElement('script');
    script.id = 'article-schema';
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schemaData);
    document.head.appendChild(script);

    // Canonical URL
    if (canonicalUrl) {
      let canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.rel = 'canonical';
        document.head.appendChild(canonical);
      }
      canonical.href = canonicalUrl;
    }

    // Cleanup function
    return () => {
      // Reset title to default when component unmounts
      document.title = 'IT Business - Tecnologia & Inovação';
    };
  }, [title, description, keywords, author, publishDate, category, readTime, canonicalUrl, ogImage]);

  return null; // This component doesn't render anything
};

export default SEOHead;