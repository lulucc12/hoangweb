'use client';

import { CheckCircle, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import QuickContactCta from '@/components/QuickContactCta';

export default function AboutPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const stats = [
    { value: '1500+', label: 'Hồ sơ đã xử lý' },
    { value: '85%+', label: 'Tỉ lệ thành công' },
    { value: '200+', label: 'Doanh nghiệp phục vụ' },
    { value: '48h', label: 'Phản hồi sơ bộ' },
  ];

  const methodology = [
    { title: 'Tiếp nhận', desc: 'Đánh giá hồ sơ và xác minh thông tin tài khoản theo căn cứ pháp lý.' },
    { title: 'Xây dựng hồ sơ', desc: 'Soạn đơn khiếu nại chuẩn mực, đúng quy định.' },
    { title: 'Thực thi', desc: 'Gửi yêu cầu qua kênh chính thức, theo dõi sát sao.' },
    { title: 'Kết quả', desc: 'Bàn giao phản hồi và hướng dẫn kháng nghị khi cần.' },
  ];

  const highlights = [
    'Tư vấn thực chiến với các vụ việc liên quan đến nội dung vi phạm, tài khoản bị khóa và rủi ro truyền thông.',
    'Làm việc theo quy trình rõ ràng: tiếp nhận, đánh giá, xây hồ sơ, theo dõi và báo cáo minh bạch.',
    'Không sử dụng cách thức trái phép, không lạm dụng thao tác kỹ thuật, luôn giữ đúng quy định của nền tảng và pháp luật.',
  ];

  const commitments = [
    'Sẵn sàng chia sẻ mục tiêu, phạm vi làm việc, thời gian dự kiến và rủi ro trước khi triển khai.',
    'Báo cáo tiến độ theo từng giai đoạn để khách hàng luôn nắm được tình hình.',
    'Khi kết quả bị từ chối, tư vấn phương án thay thế thay vì giấu thực tế hoặc hứa hẹn không thực tế.',
  ];

  const faqs = [
    { q: 'Có cam kết thành công 100% không?', a: 'Không. Kết quả phụ thuộc vào quy định của từng nền tảng và bằng chứng pháp lý. Chúng tôi làm việc dựa trên quy trình chuẩn, minh bạch và thực tế.' },
    { q: 'Thông tin có được bảo mật không?', a: 'Có. Mọi thông tin và bằng chứng đều được xử lý với mức độ bảo mật cao, phù hợp với mục đích hỗ trợ vụ việc.' },
    { q: 'Thời gian xử lý mất bao lâu?', a: 'Thông thường từ 3-10 ngày làm việc tùy mức độ phức tạp của hồ sơ, nhưng có thể kéo dài hơn nếu nền tảng yêu cầu bổ sung thông tin.' },
  ];

  return (
    <div className="bg-neutral-50 min-h-screen py-24">
      <div className="max-w-6xl mx-auto px-6">
        <section className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 mb-20 items-start">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-subtle">
            <div className="flex flex-col sm:flex-row items-start gap-6 mb-6">
              <img
                src="/hoangnguyen_n.jpg"
                alt="Hoàng Nguyễn"
                className="w-28 h-28 rounded-full object-cover shadow-lg border-4 border-white"
              />
              <div>
                <h1 className="text-3xl font-bold text-neutral-900 mb-2">Hoàng Nguyễn</h1>
                <p className="text-sm font-medium text-primary-800 mb-1">Người đại diện của CRISIS SHIELD</p>
                <p className="text-sm font-semibold text-primary-900 mb-3">Đơn vị vận hành: HOANG NGUYEN CRISIS SHIELD MEDIA</p>
                <p className="text-neutral-600 leading-relaxed">
                  Chúng tôi chuyên tư vấn xử lý khủng hoảng truyền thông, khôi phục tài khoản Facebook và xây dựng hồ sơ khiếu nại với tư duy thực chiến, căn cứ pháp lý và quy trình minh bạch. Mỗi vụ việc được tiếp cận dựa trên bằng chứng, mục tiêu rõ ràng và phương án ứng phó phù hợp với từng tình huống.
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div className="rounded-2xl bg-white p-4 border border-neutral-200">
                <div className="text-sm font-semibold text-primary-900 mb-1">Phạm vi hoạt động</div>
                <div className="text-sm text-neutral-600">Khôi phục tài khoản Facebook, khiếu nại nội dung vi phạm, quản trị rủi ro truyền thông.</div>
              </div>
              <div className="rounded-2xl bg-white p-4 border border-neutral-200">
                <div className="text-sm font-semibold text-primary-900 mb-1">Cách làm việc</div>
                <div className="text-sm text-neutral-600">Minh bạch, có căn cứ, có quy trình và luôn báo cáo tiến độ rõ ràng.</div>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-primary-800/60 bg-primary-900 p-8 text-white shadow-[0_12px_40px_rgba(15,23,42,0.16)]">
            <h2 className="text-xl font-semibold mb-4">Điều khách hàng nên biết trước khi hợp tác</h2>
            <ul className="space-y-3 text-sm text-primary-100">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span>Phạm vi hỗ trợ và mục tiêu xử lý sẽ được xác định rõ ngay từ đầu.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span>Khách hàng được cập nhật tiến độ theo từng giai đoạn thay vì chỉ chờ đợi.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span>Không hứa hẹn kết quả 100% nếu phụ thuộc vào quyết định của nền tảng.</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((s, i) => (
            <div key={i} className="p-6 bg-white rounded-2xl text-center border border-neutral-200 shadow-[0_8px_24px_rgba(15,23,42,0.04)]">
              <div className="text-xl font-bold text-primary-900">{s.value}</div>
              <div className="text-xs text-neutral-500 uppercase mt-1">{s.label}</div>
            </div>
          ))}
        </section>

        <section className="rounded-[2rem] border border-neutral-200/80 bg-neutral-50/80 p-8 shadow-[0_10px_30px_rgba(15,23,42,0.04)] mb-20">
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">Kinh nghiệm thực tế</h2>
          <p className="text-neutral-700 leading-relaxed mb-4">
            Chúng tôi đã đồng hành với nhiều trường hợp liên quan đến khôi phục quyền truy cập, xử lý nội dung vi phạm, quản trị rủi ro truyền thông và xây dựng hồ sơ khiếu nại theo hướng có căn cứ, rõ mục tiêu và dễ theo dõi.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="rounded-2xl bg-white p-4 border border-neutral-200">
              <div className="text-sm font-semibold text-primary-900 mb-1">Khôi phục tài khoản</div>
              <div className="text-sm text-neutral-600">Hỗ trợ xử lý tình huống bị khóa, bị hack hoặc mất quyền truy cập.</div>
            </div>
            <div className="rounded-2xl bg-white p-4 border border-neutral-200">
              <div className="text-sm font-semibold text-primary-900 mb-1">Xử lý nội dung</div>
              <div className="text-sm text-neutral-600">Tư vấn hồ sơ khiếu nại và cách tiếp cận với nội dung vi phạm.</div>
            </div>
            <div className="rounded-2xl bg-white p-4 border border-neutral-200">
              <div className="text-sm font-semibold text-primary-900 mb-1">Quản trị rủi ro</div>
              <div className="text-sm text-neutral-600">Đánh giá kịch bản ứng phó và kiểm soát ảnh hưởng truyền thông.</div>
            </div>
          </div>
        </section>

        <section className="grid lg:grid-cols-2 gap-10 mb-20">
          <div className="rounded-[2rem] border border-neutral-200/80 bg-white p-7 shadow-[0_10px_30px_rgba(15,23,42,0.04)]">
            <h2 className="text-2xl font-bold text-neutral-900 mb-6">Dịch vụ trọng tâm</h2>
            <ul className="space-y-3 text-neutral-700">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-primary-700 mt-0.5 flex-shrink-0" />
                <span>Khôi phục tài khoản Facebook bị khóa, bị hack hoặc mất quyền truy cập.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-primary-700 mt-0.5 flex-shrink-0" />
                <span>Tư vấn hồ sơ khiếu nại vi phạm bản quyền, thương hiệu hoặc nội dung sai sự thật.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-primary-700 mt-0.5 flex-shrink-0" />
                <span>Phân tích rủi ro thông tin tiêu cực và đề xuất kịch bản ứng phó phù hợp.</span>
              </li>
            </ul>
          </div>

          <div className="rounded-[2rem] border border-neutral-200/80 bg-neutral-50/80 p-7 shadow-[0_10px_30px_rgba(15,23,42,0.04)]">
            <h2 className="text-2xl font-bold text-neutral-900 mb-6">Điểm khác biệt</h2>
            <div className="space-y-4">
              {highlights.map((item, i) => (
                <div key={i} className="rounded-2xl bg-white p-4 border border-neutral-200">
                  <p className="text-sm text-neutral-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-neutral-900 mb-6">Quy trình làm việc minh bạch</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {methodology.map((m, i) => (
              <div key={i} className="p-5 border border-neutral-200/80 rounded-2xl bg-white shadow-[0_8px_24px_rgba(15,23,42,0.04)]">
                <div className="font-semibold text-primary-900 mb-2">{m.title}</div>
                <div className="text-sm text-neutral-600">{m.desc}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-[2rem] border border-neutral-200/80 bg-neutral-50/80 p-8 shadow-[0_10px_30px_rgba(15,23,42,0.04)] mb-16">
          <h2 className="text-2xl font-semibold text-neutral-900 mb-6">Cam kết với khách hàng</h2>
          <div className="space-y-4">
            {commitments.map((item, i) => (
              <div key={i} className="flex items-start gap-3 text-neutral-700">
                <CheckCircle className="w-4 h-4 text-primary-700 mt-0.5 flex-shrink-0" />
                <span className="leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-neutral-900 mb-6">Câu hỏi thường gặp</h2>
          <div className="rounded-2xl border border-neutral-100 bg-white p-2 shadow-sm">
            {faqs.map((f, i) => (
              <div key={i} className={`border-b border-neutral-100 ${i === faqs.length - 1 ? 'border-b-0' : ''}`}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left text-neutral-900 transition-colors hover:bg-neutral-50"
                >
                  <span className="font-medium">{f.q}</span>
                  <ChevronDown className={`w-4 h-4 text-neutral-500 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && <p className="px-4 pb-4 text-sm leading-relaxed text-neutral-600">{f.a}</p>}
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}