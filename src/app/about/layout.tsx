import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Về Crisis Shield - Quy trình làm việc và kinh nghiệm thực tế",
  description: "Tìm hiểu về Crisis Shield, quy trình làm việc, kinh nghiệm thực tế và cam kết hỗ trợ khách hàng trong các tình huống truyền thông phức tạp.",
  path: "/about",
  keywords: ["về crisis shield", "quy trình làm việc", "cam kết khách hàng"],
});

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
