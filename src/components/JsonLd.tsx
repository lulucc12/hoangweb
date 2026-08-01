'use client';

export function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Crisis Shield - Tư vấn & Xử lý Khủng hoảng Truyền thông',
    description:
      'Chuyên gia tư vấn khủng hoảng truyền thông, hỗ trợ thủ tục khiếu nại bảo vệ bản quyền/thương hiệu, quản trị danh tiếng doanh nghiệp. Hotline 24/7: 0877 852 153.',
    url: 'https://crisisshield.vn',
    telephone: '+84877852153',
    email: 'hoang.helpmedia@gmail.com',
    areaServed: 'VN',
    availableLanguage: ['Vietnamese', 'English'],
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday',
      ],
      opens: '00:00',
      closes: '23:59',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+84877852153',
      contactType: 'customer service',
      availableLanguage: ['Vietnamese', 'English'],
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Thái Nguyên',
      addressRegion: 'Thái Nguyên',
      addressCountry: 'VN',
    },
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export function ServiceSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Tư vấn & Xử lý Khủng hoảng Truyền thông',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Crisis Shield',
      url: 'https://crisisshield.vn',
    },
    areaServed: 'VN',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Giải pháp Tư vấn Truyền thông & Pháp lý',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Tư vấn Hồ sơ Khiếu nại',
            description: 'Tư vấn lập hồ sơ khiếu nại gửi các nền tảng theo đúng quy định pháp luật.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Phân tích Rủi ro & Xây dựng Kịch bản Ứng phó',
            description: 'Phân tích rủi ro và xây dựng kịch bản ứng phó khủng hoảng cho doanh nghiệp.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Đàm phán & Giải quyết Tranh chấp Thông tin',
            description: 'Hỗ trợ làm việc với các cơ quan chức năng và đơn vị báo chí theo quy trình pháp lý.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Quản trị Danh tiếng & Giám sát Thông tin',
            description: 'Giám sát thông tin, phân tích rủi ro, hạn chế thông tin tiêu cực lan truyền.',
          },
        },
      ],
    },
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export function ReviewSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Crisis Shield - Tư vấn & Xử lý Khủng hoảng Truyền thông',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      bestRating: '5',
      ratingCount: '150',
    },
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export default function JsonLd() {
  return (
    <>
      <LocalBusinessSchema />
      <ServiceSchema />
      <ReviewSchema />
      <OrganizationSchema />
    </>
  );
}

export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Crisis Shield',
    legalName: 'Crisis Shield Consulting',
    url: 'https://crisisshield.vn',
    logo: 'https://crisisshield.vn/logo.png',
    foundingDate: '2017',
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+84877852153',
        contactType: 'customer service',
        areaServed: 'VN',
        availableLanguage: ['Vietnamese', 'English'],
      },
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Đồng Tiến, Phú Lạc',
      addressLocality: 'Đại Từ',
      addressRegion: 'Thái Nguyên',
      addressCountry: 'VN',
    },
    sameAs: [
      'https://www.facebook.com/hoangdvfb24',
      'https://t.me/CrisisShieldVN',
    ],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}