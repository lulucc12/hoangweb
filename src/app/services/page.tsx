'use client';

import { Phone, MessageCircle, Check, Shield, FileText, Gavel, Target, Clock, AlertCircle } from 'lucide-react';
import Disclaimer from '@/components/Disclaimer';
import QuickContactCta from '@/components/QuickContactCta';
import { ContactActionLink } from '@/components/ContactActionLink';

export default function ServicesPage() {
  const platformProcedures = [
    {
      platform: 'Mạng xã hội phổ biến (Facebook, TikTok, YouTube, Zalo)',
      time: 'Thường 1-30 ngày (tùy nền tảng)',
      measures: [
        'Tư vấn thủ tục báo cáo vi phạm tiêu chuẩn cộng đồng',
        'Soạn thảo văn bản yêu cầu hỗ trợ từ nền tảng',
        'Hướng dẫn quy trình khiếu nại theo chính sách bảo mật',
        'Phối hợp xử lý các hành vi giả mạo thông tin',
        'Hỗ trợ thực thi quyền bảo vệ danh dự trực tuyến',
      ],
      legalBasis: 'Điều khoản dịch vụ nền tảng, Luật An ninh mạng, Luật Bảo vệ quyền lợi cá nhân',
    },
    {
      platform: 'Công cụ tìm kiếm (Google, Bing, Cốc Cốc)',
      time: 'Thường 2-4 tuần',
      measures: [
        'Tư vấn yêu cầu gỡ bỏ kết quả tìm kiếm vi phạm quyền riêng tư',
        'Soạn thảo hồ sơ yêu cầu theo căn cứ pháp lý',
        'Xử lý yêu cầu gỡ bỏ nội dung không chính xác',
        'Tối ưu hóa thông tin định danh cá nhân',
        'Quản trị cache và snapshot dữ liệu',
      ],
      legalBasis: 'Luật Tiếp cận thông tin, Luật Bảo vệ dữ liệu cá nhân',
    },
  ];

  const packages = [
    {
      name: 'Tư vấn Khẩn cấp',
      subtitle: 'Hỗ trợ đánh giá và ứng phó ngay khi sự cố xuất hiện',
      price: 'Liên hệ',
      duration: '3-7 ngày',
      features: [
        'Đánh giá rủi ro truyền thông và mức độ ảnh hưởng',
        'Tư vấn phương án ứng phó trong 24 giờ đầu',
        'Hướng dẫn thu thập bằng chứng và hồ sơ hỗ trợ',
        'Theo dõi tiến độ & báo cáo phản hồi',
        'Tư vấn bước tiếp theo nếu tình huống tiếp tục phát triển',
      ],
      highlight: false,
    },
    {
      name: 'Kiểm soát Khủng hoảng',
      subtitle: 'Giám sát & xây dựng phương án ứng phó đa nền tảng',
      price: 'Liên hệ',
      duration: '7-14 ngày',
      features: [
        'Giám sát từ khóa, nội dung tiêu cực và diễn biến truyền thông',
        'Xây dựng lộ trình ứng phó và kiểm soát thông tin lan rộng',
        'Báo cáo tiến độ hàng tuần',
        'Tư vấn chiến lược phòng ngừa khủng hoảng',
        'Hỗ trợ phối hợp với nền tảng và các bên liên quan',
      ],
      highlight: true,
    },
    {
      name: 'Đào tạo Nội bộ',
      subtitle: 'Hướng dẫn đội ngũ xử lý sự cố và phòng ngừa rủi ro',
      price: 'Liên hệ',
      duration: 'Theo hợp đồng',
      features: [
        'Audit rủi ro truyền thông hiện trạng',
        'Xây dựng SOP xử lý sự cố và phản ứng khẩn',
        'Đào tạo nhân sự thao tác trên nền tảng và quy trình báo cáo',
        'Cung cấp template hồ sơ và kịch bản ứng phó',
        'Hỗ trợ từ xa 3 tháng',
      ],
      highlight: false,
    },
  ];

  return (
    <div className="bg-white pt-20">
      <section className="bg-gradient-to-br from-primary-800 to-primary-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Tư vấn Khủng Hoảng Truyền Thông & Xử Lý Sự Cố Tài Khoản Facebook
          </h1>
          <p className="text-lg text-primary-200 max-w-2xl mx-auto">
            Cung cấp tư vấn nghiệp vụ, xây dựng hồ sơ và triển khai phương án ứng phó phù hợp cho doanh nghiệp, tổ chức và cá nhân khi gặp sự cố truyền thông hoặc tài khoản trên môi trường mạng.
          </p>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Disclaimer />
        </div>
      </section>

      <section className="py-16 bg-primary-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-primary-200 bg-white p-8 md:p-10 shadow-sm">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-start">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-primary-100 px-3 py-1 text-sm font-semibold text-primary-800 mb-4">
                  <Shield className="w-4 h-4" />
                  Dịch vụ cốt lõi: Tư vấn khủng hoảng truyền thông
                </div>
                <h2 className="text-3xl font-bold text-primary-900 mb-4">Hỗ trợ đánh giá rủi ro, kiểm soát sự cố và xử lý các vấn đề liên quan đến tài khoản Facebook</h2>
                <p className="text-lg text-neutral-600 mb-6">
                  Khi tài khoản bị khóa đột ngột, bị tấn công, bị ảnh hưởng bởi nội dung tiêu cực hoặc phát sinh rủi ro truyền thông, chúng tôi hỗ trợ xác định nguyên nhân, chuẩn bị hồ sơ và đề xuất phương án ứng phó phù hợp.
                </p>
                <ul className="space-y-3 text-sm text-neutral-700">
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-green-500 mt-0.5" />Phân tích tình trạng tài khoản và mức độ ảnh hưởng truyền thông.</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-green-500 mt-0.5" />Tư vấn cách sử dụng các công cụ xác minh và hồ sơ hỗ trợ do nền tảng cung cấp.</li>
                  <li className="flex items-start gap-2"><Check className="w-5 h-5 text-green-500 mt-0.5" />Hỗ trợ chuẩn bị thông tin cần thiết để tăng khả năng kiểm soát và phục hồi hiệu quả.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-primary-900 p-6 text-white">
                <h3 className="text-xl font-bold mb-4">Thông tin nên chuẩn bị</h3>
                <ul className="space-y-2 text-sm text-primary-100">
                  <li>• Email hoặc số điện thoại liên kết với tài khoản</li>
                  <li>• Ảnh CCCD/CMND hoặc giấy tờ xác minh danh tính</li>
                  <li>• Màn hình lỗi đăng nhập, thông báo khóa hoặc cảnh báo bảo mật</li>
                  <li>• Thời điểm tài khoản bị khóa và các bước đã thử</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary-900">Quy trình Nghiệp vụ Theo Nền Tảng</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {platformProcedures.map((procedure) => (
              <div key={procedure.platform} className="bg-white rounded-2xl border border-neutral-200 p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-primary-900 mb-4">{procedure.platform}</h3>
                <ul className="space-y-2 mb-4">
                  {procedure.measures.map((measure, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-neutral-600">
                      <Check className="w-4 h-4 text-green-500 mt-0.5" />
                      {measure}
                    </li>
                  ))}
                </ul>
                <div className="bg-neutral-50 rounded-lg p-3 text-xs text-neutral-500">
                  <strong>Căn cứ:</strong> {procedure.legalBasis}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary-900">Gói Giải pháp Tư vấn</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div key={pkg.name} className={`bg-white rounded-2xl p-8 border border-neutral-200 shadow-lg ${pkg.highlight ? 'ring-2 ring-primary-500 relative' : ''}`}>
                {pkg.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    Phổ biến nhất
                  </div>
                )}
                <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>
                <p className="text-sm text-neutral-500 mb-6">{pkg.subtitle}</p>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <Check className="w-5 h-5 text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <ContactActionLink action="zalo" source="Services package" className="block w-full text-center bg-primary-800 text-white py-3 rounded-xl font-bold">Nhận tư vấn miễn phí</ContactActionLink>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10">
        <QuickContactCta />
      </section>

      {/* CTA Liên hệ Đồng bộ */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Cần Tư vấn Quản trị Danh tiếng?
          </h2>
          <p className="text-red-100 mb-8">
            Liên hệ trực tiếp để được tư vấn chuyên sâu
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ContactActionLink
              action="call"
              source="Services CTA"
              className="inline-flex items-center justify-center gap-2 bg-white text-red-600 font-bold px-8 py-4 rounded-xl text-lg hover:bg-red-50 transition-colors"
            >
              <Phone className="w-6 h-6" />
              Gọi: 0877 852 153
            </ContactActionLink>
            <ContactActionLink
              action="zalo"
              source="Services CTA"
              className="inline-flex items-center justify-center gap-2 bg-blue-500 text-white font-semibold px-8 py-4 rounded-xl text-lg hover:bg-blue-600 transition-colors"
            >
              <MessageCircle className="w-6 h-6" />
              Nhắn Zalo: 0877 852 153
            </ContactActionLink>
          </div>
        </div>
      </section>
    </div>
  );
}