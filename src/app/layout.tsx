import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatbotPlaceholder from "@/components/ChatbotPlaceholder";
import StickyBottomBar from "@/components/StickyBottomBar";
import JsonLd from "@/components/JsonLd";
import GoogleTag from "@/components/GoogleTag";

const inter = Inter({
  subsets: ["vietnamese", "latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Tư vấn & Xử lý Khủng hoảng Truyền thông | Hỗ trợ Thủ tục Khiếu nại Bảo vệ Danh tiếng",
  description:
    "Chuyên tư vấn chiến lược truyền thông, hỗ trợ thủ tục khiếu nại bảo vệ bản quyền/thương hiệu, quản trị danh tiếng doanh nghiệp. Hotline 24/7: 0877 852 153.",
  keywords: [
    "tư vấn khủng hoảng truyền thông",
    "hỗ trợ khiếu nại bảo vệ thương hiệu",
    "quản trị danh tiếng doanh nghiệp",
    "chiến lược truyền thông khủng hoảng",
    "giải quyết tranh chấp thông tin",
    "kiểm soát rủi ro thông tin",
  ],
  openGraph: {
    title: "Crisis Shield - Tư vấn & Xử lý Khủng hoảng Truyền thông",
    description:
      "Chuyên gia tư vấn khủng hoảng truyền thông, hỗ trợ khiếu nại bảo vệ bản quyền, quản trị danh tiếng. Hotline 24/7: 0877 852 153",
    type: "website",
    locale: "vi_VN",
    siteName: "Crisis Shield",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${inter.variable} h-full antialiased`}>
      <head>
        <JsonLd />
        <GoogleTag />
      </head>
      <body className="min-h-full flex flex-col bg-neutral-50">
        <Header />
        <main className="flex-1 pt-20">{children}</main>
        <Footer />
        <ChatbotPlaceholder />
        <StickyBottomBar />
      </body>
    </html>
  );
}