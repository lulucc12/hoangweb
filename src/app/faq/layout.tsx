import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "FAQ - Câu hỏi thường gặp về khôi phục tài khoản và xử lý khủng hoảng",
  description: "Tìm câu trả lời cho các câu hỏi thường gặp về khôi phục tài khoản Facebook, hỗ trợ khiếu nại nội dung và bảo vệ danh tiếng.",
  path: "/faq",
  keywords: ["faq khôi phục tài khoản", "hỏi đáp truyền thông", "câu hỏi thường gặp"],
});

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
