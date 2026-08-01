'use client';

import { Phone, MessageCircle, FileText, Gavel, Target, Shield, ArrowRight, CheckCircle, Clock, AlertTriangle, Info } from 'lucide-react';
import { ContactActionLink } from '@/components/ContactActionLink';
import Disclaimer from '@/components/Disclaimer';
import QuickContactCta from '@/components/QuickContactCta';

export default function ProcessPage() {
  const steps = [
    {
      step: 1,
      title: 'Tiếp nhận & đánh giá tình huống',
      duration: '0-24 giờ',
      icon: FileText,
      color: 'blue',
      description: 'Trước khi triển khai phương án, chúng tôi xác định loại rủi ro, mức độ ảnh hưởng và mục tiêu xử lý:',
      details: [
        'Xác định tình huống phát sinh: nội dung tiêu cực, tài khoản bị khóa, mất quyền truy cập hoặc uy tín bị ảnh hưởng',
        'Đánh giá bối cảnh, thời điểm và mức độ lan truyền của thông tin',
        'Thống nhất phạm vi tư vấn, trách nhiệm và thời gian phản ứng',
        'Chuẩn bị thông tin khách hàng và bằng chứng cần thiết để triển khai',
        'Xác định hướng ưu tiên: kiểm soát, khôi phục, khiếu nại hay phòng ngừa',
      ],
      outcome: 'Tình huống được đánh giá rõ ràng, có mục tiêu xử lý và lộ trình ứng phó',
    },
    {
      step: 2,
      title: 'Thu thập bằng chứng & xác minh tài khoản',
      duration: '0-30 phút',
      icon: FileText,
      color: 'blue',
      description: 'Khi nhận yêu cầu, đội ngũ hướng dẫn chuẩn bị bằng chứng và thông tin xác minh theo đúng yêu cầu nền tảng:',
      details: [
        'Tiếp nhận link bài viết/video hoặc màn hình cảnh báo cần xử lý',
        'Screenshot toàn bộ nội dung (bao gồm URL, thời gian, tác giả)',
        'Chụp màn hình cảnh báo vi phạm quy chuẩn cộng đồng hoặc thông báo bảo mật',
        'Chuẩn bị giấy tờ xác minh danh tính, email/SĐT liên kết và thông tin tài khoản',
        'Xác định điều khoản vi phạm cụ thể để xây dựng hồ sơ phù hợp',
      ],
      outcome: 'Hồ sơ bằng chứng và thông tin xác minh được chuẩn bị đầy đủ',
    },
    {
      step: 3,
      title: 'Xây dựng phương án ứng phó & hồ sơ khiếu nại',
      duration: '30-60 phút',
      icon: Gavel,
      color: 'orange',
      description: 'Dựa trên bằng chứng, đội ngũ đề xuất phương án ứng phó và soạn hồ sơ phù hợp với từng nền tảng:',
      details: [
        'Điền form báo cáo vi phạm chính thức hoặc yêu cầu hỗ trợ từ nền tảng',
        'Trích dẫn điều khoản quy chuẩn cộng đồng và căn cứ pháp lý phù hợp',
        'Đính kèm bằng chứng, chứng từ xác minh danh tính và mục tiêu xử lý',
        'Chọn đúng kênh nộp và cấu trúc nội dung trình bày',
        'Tổ chức lộ trình phản ứng theo từng cấp độ rủi ro',
      ],
      outcome: 'Phương án ứng phó và hồ sơ khiếu nại sẵn sàng triển khai',
    },
    {
      step: 4,
      title: 'Triển khai và theo dõi phản hồi',
      duration: '24-72 giờ',
      icon: Target,
      color: 'purple',
      description: 'Thực hiện triển khai hồ sơ và theo dõi tiến trình xử lý:',
      details: [
        'Nộp hồ sơ qua kênh chính thức của từng nền tảng',
        'Ghi nhận mã ticket/reference number để tra cứu',
        'Thiết lập lịch kiểm tra phản hồi định kỳ',
        'Bổ sung tài liệu khi nền tảng yêu cầu',
        'Liên hệ kênh hỗ trợ doanh nghiệp hoặc nhóm hỗ trợ chuyên biệt nếu có',
      ],
      outcome: 'Hồ sơ đã triển khai, có mã tra cứu và đang được theo dõi',
    },
    {
      step: 5,
      title: 'Báo cáo kết quả và đề xuất bước tiếp theo',
      duration: 'Sau khi có kết quả',
      icon: Shield,
      color: 'green',
      description: 'Sau khi nền tảng có quyết định, chúng tôi tổng hợp kết quả và đề xuất hướng xử lý tiếp:',
      details: [
        'Xác nhận kết quả: Đã gỡ / Từ chối / Yêu cầu bổ sung',
        'Screenshot quyết định nền tảng làm bằng chứng',
        'Nếu gỡ thành công: giám sát 30 ngày để phát hiện tái đăng',
        'Nếu từ chối: tư vấn biện pháp thay thế phù hợp như phản biện, SEO suppression hoặc hỗ trợ pháp lý',
        'Tổng hợp báo cáo PDF: Timeline, Ticket ID, Evidence, Decision, Next steps',
      ],
      outcome: 'Báo cáo hoàn chỉnh — khách hàng hiểu rõ kết quả và phương án tiếp theo',
    },
  ];

  const colorMap = {
    blue: { bg: 'bg-blue-100', text: 'text-blue-600', border: 'border-blue-200' },
    orange: { bg: 'bg-orange-100', text: 'text-orange-600', border: 'border-orange-200' },
    purple: { bg: 'bg-purple-100', text: 'text-purple-600', border: 'border-purple-200' },
    green: { bg: 'bg-green-100', text: 'text-green-600', border: 'border-green-200' },
  };

  return (
    <div className="bg-neutral-50 pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-800 to-primary-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium mb-8">
            Quy trình hỗ trợ khiếu nại chuẩn pháp lý
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Quy Trình Tư Vấn Xử Lý Khủng Hoảng Truyền Thông<br />và Sự Cố Tài Khoản Facebook
          </h1>
          <p className="text-lg text-slate-100 max-w-2xl mx-auto">
            Phương pháp ứng phó với các sự cố truyền thông, nội dung tiêu cực và tài khoản bị ảnh hưởng theo tiêu chuẩn nền tảng — minh bạch, có căn cứ pháp lý và phù hợp với từng tình huống.
          </p>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Disclaimer />
        </div>
      </section>

      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-subtle">
            <div className="grid gap-10 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold text-primary-900 mb-4">Quy trình ứng phó sự cố và kiểm soát rủi ro truyền thông</h2>
                <p className="text-neutral-600 mb-6">
                  Khi sự cố xuất hiện, yếu tố quan trọng nhất là đánh giá nhanh, chuẩn bị hồ sơ và triển khai phương án ứng phó đúng kênh hỗ trợ của nền tảng.
                </p>
              </div>
              <div className="rounded-xl border border-[#E2E8F0] bg-white p-8 text-slate-900">
                <h3 className="text-xl font-bold mb-4">3 bước khôi phục nhanh</h3>
                <ul className="space-y-5 text-sm text-slate-600 list-none">
                  <li className="relative pl-5 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-2 before:w-2 before:rounded-full before:bg-blue-600 first-letter:text-transparent">• Xác minh email/SĐT liên kết và thu thập ảnh giấy tờ.</li>
                  <li className="relative pl-5 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-2 before:w-2 before:rounded-full before:bg-blue-600 first-letter:text-transparent">• Soạn hồ sơ khôi phục theo mẫu Meta, gửi yêu cầu chính thức.</li>
                  <li className="relative pl-5 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-2 before:w-2 before:rounded-full before:bg-blue-600 first-letter:text-transparent">• Theo dõi ticket và bổ sung thông tin khi nền tảng yêu cầu.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-22">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const colors = colorMap[step.color as keyof typeof colorMap];
            const isEven = index % 2 === 0;

            return (
              <div key={step.step} className="mb-16 last:mb-0">
                <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}>
                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`${colors.bg} w-16 h-16 rounded-2xl flex items-center justify-center`}>
                        <Icon className={`w-8 h-8 ${colors.text}`} />
                      </div>
                      <div>
                        <div className="text-sm text-neutral-500 font-medium">Bước {step.step}</div>
                        <h2 className="text-2xl font-bold text-primary-900">{step.title}</h2>
                      </div>
                    </div>

                    <div className="ml-0 lg:ml-0">
                      <div className="inline-flex items-center gap-2 bg-neutral-100 px-3 py-1 rounded-full text-sm font-medium text-neutral-700 mb-4">
                        <Clock className="w-4 h-4" />
                        Thời gian dự kiến: {step.duration}
                      </div>

                      <p className="text-neutral-700 mb-6">{step.description}</p>

                      <ul className="space-y-3 mb-6">
                        {step.details.map((detail, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <CheckCircle className={`${colors.text} w-5 h-5 mt-0.5 flex-shrink-0`} />
                            <span className="text-neutral-800">{detail}</span>
                          </li>
                        ))}
                      </ul>

                      <div className={`${colors.bg} ${colors.border} border rounded-xl p-4`}>
                        <div className="flex items-center gap-2 mb-1">
                          <ArrowRight className={`${colors.text} w-4 h-4`} />
                          <span className="font-semibold text-primary-900">Kết quả bước này</span>
                        </div>
                        <p className="text-neutral-800 text-sm">{step.outcome}</p>
                      </div>
                    </div>
                  </div>

                  {/* Visual */}
                  <div className="flex-1 max-w-md">
                    <div className={`${colors.bg} rounded-3xl flex items-center justify-center relative aspect-square`}>
                      <div className="text-[180px] font-bold text-white/20">{step.step}</div>
                      <Icon className={`w-24 h-24 ${colors.text} absolute`} />
                    </div>
                  </div>
                </div>

                {/* Connector */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex justify-center mt-8">
                    <ArrowRight className="w-8 h-8 text-primary-300 rotate-90" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Outcomes - Transparency */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-primary-900 text-center mb-14">
            Kết Quả Có Thể Xảy Ra — Minh Bạch Từ Đầu
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-neutral-200 shadow-[0_10px_30px_rgba(15,23,42,0.04)]">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-bold text-green-800 mb-2">Nền tảng gỡ bài</h3>
              <p className="text-sm text-green-700">Khiếu nại được chấp thuận, nội dung vi phạm bị gỡ bỏ. Đội ngũ giám sát 30 ngày và theo dõi khả năng tái đăng.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-[0_10px_30px_rgba(15,23,42,0.04)]">
              <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mb-4">
                <AlertTriangle className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="font-bold text-yellow-800 mb-2">Nền tảng từ chối / Yêu cầu bổ sung</h3>
              <p className="text-sm text-yellow-700">Hỗ trợ appeal lần 2 với bằng chứng mạnh hơn, hoặc đề xuất biện pháp thay thế phù hợp.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-[0_10px_30px_rgba(15,23,42,0.04)]">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-bold text-blue-800 mb-2">Biện pháp thay thế (Khi không gỡ được)</h3>
              <p className="text-sm text-blue-700">SEO đẩy xuống kết quả tìm kiếm, báo chí phản biện, khiếu nại Bộ TT&TT/tòa án — tư vấn lộ pháp phù hợp với mục tiêu bảo vệ uy tín.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <QuickContactCta />
      </section>

      {/* Important Notice */}
      <section className="py-20 bg-amber-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-amber-600 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-amber-800 mb-2">Lưu ý quan trọng về quy trình khiếu nại</h3>
              <ul className="text-amber-700 text-sm space-y-2">
                <li>- Quyết định cuối cùng thuộc về nền tảng nơi nội dung được đăng tải</li>
                <li>- Chúng tôi xây dựng hồ sơ đầy đủ, nộp đúng quy trình nhằm tăng cơ hội phản hồi tích cực</li>
                <li>- Trong trường hợp từ chối, sẽ tư vấn các biện pháp thay thế</li>
                <li>- Thời gian phản hồi phụ thuộc vào từng nền tảng và mức độ phức tạp (thường 1-30 ngày)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Cần hỗ trợ khiếu nại nội dung hoặc khôi phục tài khoản?
          </h2>
          <p className="text-red-100 mb-8">
            Gửi thông tin để đội ngũ đánh giá nhanh và hỗ trợ xây dựng hồ sơ khiếu nại chính xác.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ContactActionLink
              action="call"
              source="Process CTA"
              className="inline-flex items-center justify-center gap-2 bg-white text-red-600 font-bold px-8 py-4 rounded-xl text-lg hover:bg-red-50 transition-colors"
            >
              <Phone className="w-6 h-6" />
              Gọi: 0877 852 153
            </ContactActionLink>
            <ContactActionLink
              action="zalo"
              source="Process CTA"
              className="inline-flex items-center justify-center gap-2 bg-blue-500 text-white font-semibold px-8 py-4 rounded-xl text-lg hover:bg-blue-600 transition-colors"
            >
              <MessageCircle className="w-6 h-6" />
              Gửi link qua Zalo
            </ContactActionLink>
          </div>
        </div>
      </section>
    </div>
  );
}