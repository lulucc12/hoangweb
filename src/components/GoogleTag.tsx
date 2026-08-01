'use client';

const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // Thay bằng ID thật sau khi tạo
const ADS_CONVERSION_ID = 'AW-XXXXXXXXXX'; // Thay bằng ID thật sau khi tạo

export default function GoogleTag() {
  return (
    <>
      {/* Google Analytics 4 */}
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `,
        }}
      />
      {/* Google Ads Conversion */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${ADS_CONVERSION_ID}');
          `,
        }}
      />
    </>
  );
}
