import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/_next/', '/static/', '/*.json$'],
    },
    sitemap: 'https://www.crisisshield.biz.vn/sitemap.xml',
    host: 'https://www.crisisshield.biz.vn',
  };
}