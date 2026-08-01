import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Quy trình xử lý khủng hoảng truyền thông và sự cố tài khoản",
  description: "Học quy trình tư vấn khủng hoảng truyền thông, thu thập bằng chứng, chuẩn bị hồ sơ khiếu nại và theo dõi phản hồi từ nền tảng.",
  path: "/process",
  keywords: ["quy trình xử lý khủng hoảng", "thu thập bằng chứng", "hồ sơ khiếu nại"],
});

export default function ProcessLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
