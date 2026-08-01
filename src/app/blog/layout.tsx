import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Blog Crisis Shield - Kiến thức và case study về truyền thông",
  description: "Khám phá các bài viết về khôi phục tài khoản Facebook, xử lý nội dung tiêu cực, bảo vệ danh tiếng và quản trị rủi ro truyền thông.",
  path: "/blog",
  keywords: ["blog crisis shield", "case study truyền thông", "khôi phục tài khoản facebook"],
});

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
