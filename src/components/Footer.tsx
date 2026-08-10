     'use client';

import Link from 'next/link';
import { Shield, Phone, Mail, MapPin, ChevronRight, MessageCircle } from 'lucide-react';
import { ContactActionLink } from '@/components/ContactActionLink';

export default function Footer() {
  return (
    <footer className="bg-primary-950 text-white pt-16 pb-28 md:pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-primary-800/70 bg-primary-900/60 p-6 mb-10">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary-300">Cần hỗ trợ ngay</p>
              <h3 className="text-xl font-bold text-white">Đội ngũ tư vấn đang sẵn sàng phản hồi trong giờ hành chính</h3>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <ContactActionLink action="call" source="Footer" className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-2.5 font-semibold text-primary-900 transition hover:bg-primary-50">
                <Phone className="w-4 h-4" /> Gọi hotline
              </ContactActionLink>
              <ContactActionLink action="zalo" source="Footer" className="inline-flex items-center justify-center gap-2 rounded-xl border border-primary-700 bg-primary-800/70 px-4 py-2.5 font-semibold text-white transition hover:bg-primary-700">
                <MessageCircle className="w-4 h-4" /> Nhắn Zalo
              </ContactActionLink>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-primary-800 rounded-lg flex items-center justify-center">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <div>
                <div className="text-xl font-bold">CRISIS SHIELD</div>
                <div className="text-sm text-primary-300">Consulting & Advisory</div>
              </div>
            </div>
            <p className="text-neutral-400 mb-6 max-w-md">
              Đơn vị tư vấn chuyên nghiệp về xử lý khủng hoảng truyền thông, kiểm soát rủi ro và ứng phó sự cố tài khoản trên môi trường mạng.
            </p>
            <div className="space-y-3 text-neutral-400">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary-300" />
                <ContactActionLink action="call" source="Footer contact" className="hover:text-white transition-colors font-bold">0877 852 153</ContactActionLink>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary-300" />
                <a href="mailto:contact@crisisshield.biz.vn" className="hover:text-white transition-colors">contact@crisisshield.biz.vn</a>
              </div>
              <div className="flex items-center gap-2 pt-2">
                <a
                  href="https://t.me/CrisisShieldVN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-full border border-primary-700 bg-primary-900/70 px-3 py-1.5 text-sm font-medium text-primary-100 transition-colors hover:border-primary-500 hover:text-white"
                >
                  Telegram: @CrisisShieldVN
                </a>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href="https://web.facebook.com/hoangdvfb24"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-full border border-primary-700 bg-primary-900/70 px-3 py-1.5 text-sm font-medium text-primary-100 transition-colors hover:border-primary-500 hover:text-white"
                >
                  Facebook: Hoàng Nguyễn
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Dịch vụ chính</h3>
            <ul className="space-y-3">
              {[
                { label: 'Xử lý tài khoản Facebook bị khóa', href: '/services' },
                { label: 'Khiếu nại bóc phốt và tin đồn', href: '/services/defamation' },
                { label: 'Bảo vệ danh tiếng doanh nghiệp', href: '/services' },
                { label: 'Giám sát & phản ứng khủng hoảng', href: '/services' },
                { label: 'Soạn hồ sơ khiếu nại nền tảng', href: '/services' },
                { label: 'Đào tạo xử lý sự cố truyền thông', href: '/services' },
              ].map((item) => (
                <li key={item.label}>
                  {item.href === '/services/defamation' ? (
                    <a
                      href={item.href}
                      className="text-neutral-400 hover:text-white transition-colors flex items-center gap-1"
                    >
                      <ChevronRight className="w-3 h-3" />
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-neutral-400 hover:text-white transition-colors flex items-center gap-1"
                    >
                      <ChevronRight className="w-3 h-3" />
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links 2 */}
          <div>
            <h3 className="font-bold text-lg mb-4">Liên kết</h3>
            <ul className="space-y-3">
              {[
                { label: 'Trang chủ', href: '/' },
                { label: 'Quy trình xử lý', href: '/process' },
                { label: 'Về chúng tôi', href: '/about' },
                { label: 'Case Study', href: '/blog' },
                { label: 'FAQ', href: '/faq' },
                { label: 'Liên hệ', href: '/contact' },
                { label: 'Chính sách bảo mật', href: '/privacy' },
                { label: 'Điều khoản dịch vụ', href: '/terms' },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-neutral-400 hover:text-white transition-colors flex items-center gap-1"
                  >
                    <ChevronRight className="w-3 h-3" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 text-sm text-neutral-400 space-y-2">
          <p><span className="font-semibold text-neutral-300">Đơn vị vận hành:</span> HKD SỬ LÝ KHỦNG HOẢNG TRUYỀN THÔNG HOÀNG NGUYỄN</p>
          <p><span className="font-semibold text-neutral-300">Tên viết tắt:</span> HOANG NGUYEN CRISIS SHIELD MEDIA</p>
          <p><span className="font-semibold text-neutral-300">Hình thức hoạt động:</span> Cung cấp dịch vụ trực tuyến trên phạm vi toàn quốc</p>
          <p><span className="font-semibold text-neutral-300">Mã số thuế:</span> 8887207810</p>
          <p><span className="font-semibold text-neutral-300">Đại diện:</span> Ông Nguyễn Văn Hoàng</p>
          <div className="flex items-center gap-2 pt-1">
            <MapPin className="w-4 h-4 text-primary-300" />
            <span>Phú Lạc, Thái Nguyên, Việt Nam</span>
          </div>
        </div>

        {/* Maps */}
        <div className="mt-8 border-t border-primary-800 pt-8">
          <h3 className="font-bold text-lg mb-4">Google Maps</h3>
          <div className="w-full h-64 rounded-lg overflow-hidden border border-primary-700">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119102.58319694115!2d105.62678685117187!3d21.603332000000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31352e46b3cf5569%3A0x67137f828114f40f!2sPh%C3%BA%20L%E1%BA%A1c%2C%20%C4%90%E1%BA%A1i%20T%E1%BB%AB%2C%20Th%C3%A1i%20Nguy%C3%AAn%2C%20Vi%E1%BB%87t%20Nam!5e0!3m2!1svi!2s!4v1722026400000!5m2!1svi!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-800 pt-8 mt-8 text-center text-neutral-500 text-sm">
          <p>© 2026 Crisis Shield | Hotline: 0877 852 153. Tất cả quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  );
}