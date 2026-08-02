import Link from 'next/link';
import { AlertTriangle, CheckCircle2, FileText, MessageCircle, Search, Shield } from 'lucide-react';
import Disclaimer from '@/components/Disclaimer';
import QuickContactCta from '@/components/QuickContactCta';
import { ContactActionLink } from '@/components/ContactActionLink';

const serviceSteps = [
  {
    title: '1. Đánh giá thực trạng',
    description: 'Phân tích nội dung, nguồn phát tán, phạm vi ảnh hưởng và mức độ đe dọa đến danh tiếng.',
  },
  {
    title: '2. Xây dựng hồ sơ',
    description: 'Thu thập bằng chứng, lưu trữ màn hình, liên kết và tài liệu liên quan để chuẩn bị cho khiếu nại.',
  },
  {
    title: '3. Triển khai phản ứng',
    description: 'Đề xuất lộ trình liên hệ nền tảng, gửi yêu cầu gỡ bỏ, kiểm soát lan truyền và bảo vệ danh tính.',
  },
  {
    title: '4. Theo dõi và phục hồi',
    description: 'Giám sát diễn biến, phối hợp cập nhật chiến lược và hỗ trợ khôi phục tín nhiệm sau sự cố.',
  },
];

const supportAreas = [
  {
    title: 'Bài viết bóc phốt',
    description: 'Hỗ trợ xác định nội dung sai sự thật, bịa đặt hoặc làm tổn hại uy tín và đề xuất cách xử lý phù hợp.',
    icon: AlertTriangle,
  },
  {
    title: 'Tin đồn thất thiệt',
    description: 'Giúp kiểm soát vòng lặp lan truyền, điều chỉnh thông tin sai lệch và tăng khả năng phản hồi hiệu quả.',
    icon: Search,
  },
  {
    title: 'Tài khoản bị ảnh hưởng',
    description: 'Tư vấn cách xử lý tài khoản bị tấn công, bị giả mạo hoặc bị kéo vào vòng xoáy thông tin tiêu cực.',
    icon: Shield,
  },
];

export default function DefamationSupportPage() {
  return (
    <div className="bg-neutral-50 pt-20">
      <section className="bg-gradient-to-br from-primary-800 to-primary-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm font-semibold text-primary-100 mb-4">
            <Shield className="w-4 h-4" />
            Hỗ trợ chuyên sâu khiếu nại và xử lý nội dung tiêu cực
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Hỗ trợ khiếu nại xử lý bài viết bóc phốt và tin đồn thất thiệt
          </h1>
          <p className="text-lg text-primary-100 max-w-3xl mx-auto">
            Khi thông tin sai sự thật, tin đồn xuyên tạc hoặc bài viết bóc phốt lan truyền trên mạng, chúng tôi có thể hỗ trợ đánh giá rủi ro, chuẩn bị hồ sơ và triển khai chiến lược phản ứng phù hợp.
          </p>
        </div>
      </section>

      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Disclaimer />
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-start rounded-[2rem] border border-slate-200 bg-neutral-50 p-8 md:p-10 shadow-subtle">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-primary-100 px-3 py-1 text-sm font-semibold text-primary-800 mb-4">
                <FileText className="w-4 h-4" />
                Mục tiêu hỗ trợ
              </div>
              <h2 className="text-3xl font-bold text-primary-900 mb-4">
                Giảm thiểu thiệt hại, kiểm soát lan truyền và bảo vệ danh tiếng trong thời gian ngắn nhất
              </h2>
              <p className="text-lg text-neutral-600 mb-6">
                Chúng tôi hỗ trợ khách hàng xây dựng giải pháp phối hợp giữa nghiệp vụ, chứng cứ và quy trình xử lý để tăng khả năng gỡ bỏ nội dung sai lệch và hạn chế ảnh hưởng về mặt truyền thông.
              </p>
              <ul className="space-y-3 text-sm text-neutral-700">
                <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5" />Đánh giá mức độ nguy hiểm của nội dung và phạm vi ảnh hưởng.</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5" />Tư vấn cách chuẩn bị bằng chứng và hồ sơ khiếu nại đúng hướng.</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5" />Thực hiện các biện pháp sẵn có của chính nền tảng để gửi yêu cầu gỡ bài và theo dõi tiến trình xử lý.</li>
              </ul>
            </div>

            <div className="rounded-2xl bg-primary-900 p-8 text-white">
              <h3 className="text-xl font-bold mb-4">Thông tin nên chuẩn bị sớm</h3>
              <ul className="space-y-3 text-sm text-primary-100">
                <li>• Đường dẫn bài viết, ảnh chụp màn hình và thời điểm xuất hiện</li>
                <li>• Nội dung sai lệch, thông tin liên quan và nguồn phát tán</li>
                <li>• Bằng chứng chứng minh tính không chính xác hoặc gây ảnh hưởng</li>
                <li>• Thông tin tài khoản bị ảnh hưởng và các bước đã thử trước đó</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-900 mb-4">Các lĩnh vực hỗ trợ trọng tâm</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Mỗi tình huống đều có cách tiếp cận khác nhau, tùy theo loại nội dung và mức độ ảnh hưởng.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportAreas.map(({ title, description, icon: Icon }) => (
              <div key={title} className="rounded-2xl border border-neutral-200 bg-white p-8 shadow-[0_10px_30px_rgba(15,23,42,0.04)]">
                <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary-700" />
                </div>
                <h3 className="text-xl font-semibold text-primary-900 mb-3">{title}</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-900 mb-4">Quy trình hỗ trợ từng bước</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Từ đánh giá ban đầu đến theo dõi sau khi triển khai, quy trình được thiết kế để giữ kiểm soát và phản ứng đúng thời điểm.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceSteps.map((step) => (
              <div key={step.title} className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
                <h3 className="text-lg font-semibold text-primary-900 mb-3">{step.title}</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 md:p-10 shadow-subtle flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-3">
                Cần hỗ trợ xử lý bài viết bóc phốt hoặc tin đồn thất thiệt?
              </h2>
              <p className="text-neutral-600 max-w-2xl">
                Liên hệ ngay để được tư vấn cách tiếp cận phù hợp với từng nền tảng và tình huống cụ thể.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <ContactActionLink action="zalo" source="Defamation support page" className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary-800 px-5 py-3 font-semibold text-white">
                <MessageCircle className="w-5 h-5" />
                Nhắn Zalo ngay
              </ContactActionLink>
              <Link href="/services" className="inline-flex items-center justify-center rounded-xl border border-neutral-300 px-5 py-3 font-semibold text-primary-900 hover:bg-neutral-50">
                Quay lại dịch vụ
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <QuickContactCta />
      </section>
    </div>
  );
}
