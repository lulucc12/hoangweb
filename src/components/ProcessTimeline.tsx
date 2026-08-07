'use client';

import { CheckCircle2, ShieldCheck, MessageSquareText, FileText, Send } from 'lucide-react';

const steps = [
  {
    title: 'Tiếp nhận & phân tích',
    description: 'Khách hàng cung cấp link bài viết, hình ảnh, nội dung bị ảnh hưởng và mục tiêu xử lý.',
    icon: MessageSquareText,
  },
  {
    title: 'Xây dựng hồ sơ',
    description: 'Chuẩn bị hồ sơ khiếu nại, căn cứ pháp lý và tài liệu minh chứng theo đúng quy định.',
    icon: FileText,
  },
  {
    title: 'Nộp và theo dõi',
    description: 'Gửi lên nền tảng, cơ quan liên quan và theo dõi tiến trình phản hồi liên tục.',
    icon: Send,
  },
  {
    title: 'Đảm bảo kết quả',
    description: 'Báo cáo tiến độ, đề xuất bước tiếp theo và kiểm soát rủi ro tái phát.',
    icon: ShieldCheck,
  },
];

export default function ProcessTimeline() {
  return (
    <section className="py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary-900 mb-4 leading-tight">Quy Trình Làm Việc</h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Mỗi trường hợp đều được xử lý có phương án, có hồ sơ và có tiến độ rõ ràng.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.title} className="rounded-2xl border border-neutral-200/80 bg-white p-8 shadow-[0_10px_30px_rgba(15,23,42,0.04)] hover:shadow-[0_16px_40px_rgba(15,23,42,0.08)] transition-all">
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-lg bg-primary-50 text-primary-700 flex items-center justify-center ring-1 ring-primary-100">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="text-sm font-medium text-neutral-400">0{index + 1}</div>
                </div>
                <h3 className="text-xl font-semibold text-primary-900 mb-3">{step.title}</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
