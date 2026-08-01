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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">Quy Trình Làm Việc Chuyên Nghiệp</h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Mỗi trường hợp đều được xử lý có phương án, có hồ sơ và có tiến độ rõ ràng.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.title} className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-900 text-white flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="text-sm font-semibold text-primary-700">0{index + 1}</div>
                </div>
                <h3 className="text-lg font-bold text-primary-900 mb-2">{step.title}</h3>
                <p className="text-sm text-neutral-600">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
