import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Dịch vụ tư vấn khủng hoảng truyền thông và xử lý sự cố tài khoản",
  description: "Cung cấp dịch vụ tư vấn khủng hoảng truyền thông, hỗ trợ khiếu nại nội dung vi phạm, khôi phục tài khoản Facebook và bảo vệ danh tiếng.",
  path: "/services",
  keywords: ["dịch vụ khủng hoảng truyền thông", "hỗ trợ tài khoản facebook", "bảo vệ danh tiếng"],
});

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
