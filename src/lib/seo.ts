import type { Metadata } from "next";

export const siteName = "Crisis Shield";
export const siteUrl = "https://crisisshield.biz.vn";
export const defaultDescription =
  "Crisis Shield cung cấp tư vấn khủng hoảng truyền thông, hỗ trợ khôi phục tài khoản Facebook, khiếu nại nội dung và bảo vệ danh tiếng doanh nghiệp.";
export const defaultKeywords = [
  "tư vấn khủng hoảng truyền thông",
  "khôi phục tài khoản facebook",
  "khiếu nại nội dung",
  "bảo vệ danh tiếng",
  "quản trị rủi ro truyền thông",
];

export function createMetadata({
  title,
  description = defaultDescription,
  path = "/",
  keywords = [],
  image = "/og-image.svg",
}: {
  title: string;
  description?: string;
  path?: string;
  keywords?: string[];
  image?: string;
}): Metadata {
  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;
  const canonical = new URL(path, siteUrl).toString();

  return {
    title: fullTitle,
    description,
    keywords: [...defaultKeywords, ...keywords],
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonical,
      siteName,
      type: "website",
      locale: "vi_VN",
      images: [{ url: image, width: 1200, height: 630, alt: fullTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    category: "business",
    applicationName: siteName,
    authors: [{ name: siteName }],
  };
}
