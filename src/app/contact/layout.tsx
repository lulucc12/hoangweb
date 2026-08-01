import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Liên hệ tư vấn khôi phục tài khoản và xử lý khủng hoảng truyền thông",
  description: "Liên hệ Crisis Shield qua hotline, Zalo hoặc form tư vấn để nhận hỗ trợ khôi phục tài khoản Facebook và quản trị rủi ro truyền thông.",
  path: "/contact",
  keywords: ["liên hệ crisis shield", "hotline tư vấn", "zalo tư vấn"],
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
