import {
  Phone,
  MessageCircle,
  Shield,
  Zap,
  Clock,
  ChevronRight,
  CheckCircle,
  AlertCircle,
  FileText,
  Gavel,
  Target,
} from 'lucide-react';
import { ContactActionLink } from '@/components/ContactActionLink';
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({ subsets: ['latin'] });

const solutionCards = [
  {
    title: 'Đánh giá tình huống & đề xuất phương án',
    description: 'Phân tích rủi ro và đề xuất giải pháp ứng phó phù hợp theo từng tình huống truyền thông.',
    icon: Zap,
    accent: 'blue',
  },
  {
    title: 'Căn cứ pháp lý & hồ sơ chuẩn',
    description: 'Xây dựng hồ sơ chuyên môn và kênh trình duyệt chính thức theo quy định nền tảng.',
    icon: Gavel,
    accent: 'purple',
  },
  {
    title: 'Yêu cầu gỡ nội dung & khôi phục',
    description: 'Nộp khiếu nại, đề nghị gỡ bài và phối hợp khôi phục tài khoản an toàn.',
    icon: Target,
    accent: 'green',
  },
  {
    title: 'Giám sát & kiểm soát rủi ro',
    description: 'Theo dõi tiến độ phản hồi, điều chỉnh phương án và bảo đảm xử lý minh bạch.',
    icon: AlertCircle,
    accent: 'orange',
  },
];

const trustStats = [
  ['24/7', 'Hỗ trợ nhanh'],
  ['100%', 'Hồ sơ chuẩn'],
  ['0%', 'Bỏ sót bước'],
];

const platforms = ['Mạng xã hội', 'Công cụ tìm kiếm', 'Diễn đàn', 'Tin tức & Báo chí', 'Video & Livestream', 'Khác'];

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-primary-900 to-primary-800 flex items-center pt-0">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-20 blur-sm"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-white/5 text-primary-100 px-4 py-2 rounded-full text-sm font-semibold mb-8">
            <span className="w-2 h-2 bg-green-300 rounded-full"></span>
            Tư vấn khủng hoảng truyền thông chuyên nghiệp
          </div>

          <div className="mb-6 rounded-2xl border bg-transparent p-4 sm:p-6 w-fit" style={{ borderColor: '#c5a059' }}>
            <h1 className={`${playfair.className} text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight mb-2`}>Giải pháp xử lý khủng hoảng truyền thông &amp; phục hồi tài khoản Facebook</h1>
          </div>

          <div className="mb-6 rounded-2xl border border-amber-400/20 bg-amber-500/10 p-4 sm:p-5 max-w-2xl">
            <div className="flex items-start gap-3">
              <p className="text-sm sm:text-base leading-7 text-primary-100">
                Hỗ trợ khẩn cấp cho các trường hợp phát sinh đột ngột, phù hợp cá nhân và doanh nghiệp cần phản ứng nhanh với sự cố tài khoản hoặc nội dung tiêu cực.
              </p>
            </div>
          </div>

          <div className="grid gap-4 max-w-2xl mb-6 sm:grid-cols-3">
            <div
              className="rounded-full bg-[linear-gradient(135deg,rgba(252,245,220,0.98),rgba(240,224,170,0.92))] px-4 py-2 text-sm text-amber-950 shadow-[0_2px_10px_rgba(255,255,255,0.35),0_1px_3px_rgba(120,82,20,0.18),inset_0_1px_0_rgba(255,255,255,0.7)]"
              style={{ border: '1px solid #c5a059' }}
            >
              Phục hồi tài khoản bị khóa, xâm phạm hoặc mất quyền (180 ngày)
            </div>
            <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-primary-100">
              Loại bỏ nội dung tiêu cực với cách tiếp cận thận trọng
            </div>
            <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-primary-100">
              Quy trình pháp lý minh bạch, an toàn và có kiểm soát
            </div>
          </div>

          <div className="flex items-center gap-2 mb-8 bg-white/5 w-fit px-4 py-2 rounded-lg" style={{ border: '1px solid rgba(225,29,72,0.9)', boxShadow: '0 4px 12px rgba(225,29,72,0.12), inset 0 1px 0 rgba(255,255,255,0.6)' }}>
            <span className="w-3 h-3 bg-yellow-400 rounded-full mt-0.5 ring-1 ring-yellow-300" />
            <span className="text-primary-100 font-medium">Cam kết bảo mật thông tin cấp độ doanh nghiệp</span>
          </div>

          <div className="grid grid-cols-2 gap-5 mb-12">
            <ContactActionLink
              action="call"
              source="Hero CTA"
              className="flex-col gap-1 bg-gradient-to-r from-primary-700 to-primary-600 hover:from-primary-600 hover:to-primary-500 text-white p-5 shadow-sm hover:shadow-md border border-primary-700"
            >
              <Phone className="w-6 h-6" />
              <span className="text-xs">GỌI TƯ VẤN 24/7</span>
              <span className="text-lg">0877 852 153</span>
            </ContactActionLink>
            <ContactActionLink
              action="zalo"
              source="Hero CTA"
              className="flex-col gap-1 bg-white text-primary-900 p-5 shadow-sm hover:shadow-md border border-neutral-200"
            >
              <MessageCircle className="w-6 h-6" />
              <span className="text-xs">NHẮN TIN ZALO</span>
              <span className="text-lg">TƯ VẤN NGAY</span>
            </ContactActionLink>
          </div>

          <div className="flex flex-wrap gap-8 text-neutral-400 text-sm mt-8">
            <div className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-green-400" />
              <span>Chuẩn bị hồ sơ, bằng chứng và phương án tư vấn phù hợp với từng tình huống</span>
            </div>
            <div className="flex items-center gap-2">
              <Gavel className="w-5 h-5 text-green-400" />
              <span>Áp dụng căn cứ pháp lý phù hợp theo quy định hiện hành và quy trình nền tảng</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-green-400" />
              <span>Theo dõi tiến trình xử lý và phản hồi qua kênh chính thức</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-green-400" />
              <span>Đề xuất lộ trình xử lý rõ ràng và báo cáo tiến độ minh bạch</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <ChevronRight className="w-8 h-8 text-white/30 rotate-90" />
      </div>
    </section>
  );
}

export function ContractInvoiceSection() {
  return (
    <section className="py-16 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-xl border border-neutral-200/80 bg-white/95 p-8 md:p-10 shadow-[0_12px_40px_rgba(15,23,42,0.05)]">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-primary-100 px-3 py-1 text-sm font-semibold text-primary-800 mb-4">
                <Shield className="w-4 h-4" />
                Minh bạch và đúng quy trình
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-4">
                Quy trình đánh giá và tư vấn
              </h2>
              <p className="text-base md:text-lg text-neutral-600 mb-6">
                Đánh giá rủi ro, xác định mục tiêu và xây dựng phương án phù hợp với từng đặc thù sự cố.
              </p>
              <ul className="grid gap-3 text-neutral-700">
                <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-green-500 mt-0.5" /> Định hướng xử lý rõ ràng theo mục tiêu ưu tiên.</li>
                <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-green-500 mt-0.5" /> Chuẩn bị hồ sơ chuyên môn và phương án triển khai an toàn.</li>
                <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-green-500 mt-0.5" /> Theo dõi tiến độ và cập nhật khách hàng một cách rõ ràng.</li>
              </ul>
            </div>
            <div className="rounded-xl border border-primary-100 bg-primary-900 p-8 text-white shadow-sm">
              <div className="text-sm uppercase tracking-[0.24em] text-primary-200 font-semibold mb-4">Quy trình tư vấn</div>
              <div className="space-y-4 text-sm text-primary-100">
                <div className="rounded-3xl bg-white/5 p-4">
                  <div className="font-semibold mb-2">1. Đánh giá tình huống</div>
                  <div>Xác định nguồn phát sinh, mức độ ảnh hưởng và mục tiêu cần kiểm soát.</div>
                </div>
                <div className="rounded-3xl bg-white/5 p-4">
                  <div className="font-semibold mb-2">2. Xây dựng phương án</div>
                  <div>Lên lộ trình, hồ sơ và kênh xử lý phù hợp với nền tảng.</div>
                </div>
                <div className="rounded-3xl bg-white/5 p-4">
                  <div className="font-semibold mb-2">3. Theo dõi tiến độ</div>
                  <div>Giám sát phản hồi, điều chỉnh phương án và cập nhật khách hàng.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ServiceFocusSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-xl border border-slate-200 bg-white p-10 md:p-12 shadow-subtle">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-start">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-primary-100 px-3 py-1 text-sm font-semibold text-primary-800 mb-4">
                <Shield className="w-4 h-4" />
                Tư vấn xử lý khủng hoảng truyền thông & kiểm soát sự cố tài khoản
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-4">
                Hỗ trợ xử lý sự cố và khôi phục tài khoản
              </h2>
              <p className="text-base md:text-lg text-neutral-600 mb-6">
                Chúng tôi với đội ngũ nhiều năm kinh nhiệm đã tư vấn hỗ trợ khôi phục hàng ngàn tài khoản gặp sự cố và thông tin tiêu cực lan truyền.
              </p>
              <ul className="space-y-3 text-sm text-neutral-700">
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-500 mt-0.5" /> Định hướng giải pháp phù hợp từng tình huống khủng hoảng và tài khoản.</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-500 mt-0.5" /> Chuẩn bị tài liệu, chứng cứ, hồ sơ khôi phục và yêu cầu gỡ nội dung.</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-500 mt-0.5" /> Hỗ trợ khôi phục quyền truy cập Facebook, fanpage, group và kiểm soát nội dung xấu.</li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export function TrustSection() {
  return null;
}

export function SolutionsSection() {
  return null;
}

export function PlatformsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-4">Các kênh và nền tảng hỗ trợ triển khai</h2>
          <p className="text-sm md:text-base text-neutral-600 max-w-2xl mx-auto">
            Hỗ trợ khiếu nại, khôi phục và giám sát trên các nền tảng chính của mạng xã hội, tìm kiếm và tin tức.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-stretch">
          {platforms.map((platform) => (
            <div key={platform} className="bg-white rounded-xl p-6 text-center border border-neutral-200 shadow-[0_8px_24px_rgba(15,23,42,0.04)] hover:border-primary-300 hover:shadow-[0_12px_32px_rgba(15,23,42,0.08)] transition-all h-full flex items-center justify-center">
              <div className="font-semibold text-primary-900">{platform}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
