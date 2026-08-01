'use client';

import { AlertTriangle, Clock, FileText, Globe, Lock, MessageCircle, Shield, ShieldCheck, Users, Zap } from 'lucide-react';
import ProcessTimeline from '@/components/ProcessTimeline';
import {
  HeroSection,
  ContractInvoiceSection,
  ServiceFocusSection,
  TrustSection,
  SolutionsSection,
  PlatformsSection,
} from '@/components/home/HomeSections';
import ConsultationRequestForm from '@/components/ConsultationRequestForm';
import QuickContactCta from '@/components/QuickContactCta';

const caseCards = [
  {
    title: 'Tài khoản Facebook bị vô hiệu hóa, bị đình chỉ 180 ngày',
    subtitle: 'Khôi phục tài khoản bị vô hiệu hóa do lỗi hệ thống hoặc báo cáo sai.',
    image: '/card-facebook-disabled.png',
  },
  {
    title: 'Tài khoản bị hack / chiếm quyền',
    subtitle: 'Giải pháp nhanh cho tài khoản bị truy cập trái phép.',
    image: '/card-account-hacked.png',
  },
  {
    title: 'Nội dung bị gỡ nhầm',
    subtitle: 'Hỗ trợ khiếu nại với nền tảng để phục hồi bài viết và uy tín.',
    image: '/card-content-removed.png',
  },
  {
    title: 'Khủng hoảng truyền thông',
    subtitle: 'Ứng phó khi thông tin xấu lan truyền trên mạng xã hội.',
    image: '/card-crisis.png',
  },
  {
    title: 'Fanpage / Ads gặp sự cố',
    subtitle: 'Tư vấn xử lý khi quảng cáo, fanpage hoặc tài khoản quảng cáo bị hạn chế.',
    image: '/card-ads-issue.png',
  },
  {
    title: 'Danh tiếng cá nhân & thương hiệu',
    subtitle: 'Kiểm soát vi phạm, bóc phốt và sai lệch thông tin.',
    image: '/card-reputation.png',
  },
];

export default function HomePage() {
  return (
    <div className="bg-neutral-50">
      <HeroSection />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 relative z-10">
        <div className="mb-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5">
              <h2 className="text-base font-semibold text-slate-900 mb-3">Khi nào nên liên hệ?</h2>
              <ul className="text-sm text-slate-700 space-y-2">
                <li>✓ Xuất hiện thông tin sai sự thật</li>
                <li>✓ Fanpage bị chiếm quyền quản trị</li>
                <li>✓ Tài khoản Facebook bị vô hiệu hóa</li>
                <li>✓ Bị mạo danh thương hiệu</li>
                <li>✓ Khủng hoảng truyền thông trên mạng xã hội</li>
                <li>✓ Cần đánh giá phương án xử lý</li>
              </ul>
            </div>
            <div className="w-full">
              <ConsultationRequestForm source="Trang Chủ" className="w-full" />
            </div>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-5 text-center text-slate-900">
          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="text-2xl font-bold text-primary-900">1500+</div>
            <div className="text-xs text-slate-500 mt-1">Hồ sơ đã xử lý</div>
          </div>
          <div className="rounded-xl border border-slate-200 bg-neutral-50 p-3 shadow-sm">
            <div className="text-2xl font-bold text-primary-900">85%+</div>
            <div className="text-xs text-slate-500 mt-1">Tỉ lệ thành công</div>
          </div>
          <div className="rounded-xl border border-slate-200 bg-neutral-50 p-3 shadow-sm">
            <div className="text-2xl font-bold text-primary-900">200+</div>
            <div className="text-xs text-slate-500 mt-1">Doanh nghiệp phục vụ</div>
          </div>
          <div className="rounded-xl border border-slate-200 bg-neutral-50 p-3 shadow-sm">
            <div className="text-2xl font-bold text-primary-900">30p - 48h</div>
            <div className="text-xs text-slate-500 mt-1">Phản hồi sơ bộ</div>
          </div>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {caseCards.map((card) => (
            <div key={card.title} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="mb-4 flex items-center justify-center rounded-xl bg-white p-4 shadow-sm">
                <img
                  src={card.image}
                  alt={card.title}
                  className="h-24 w-24 object-contain"
                  loading="lazy"
                />
              </div>
              <h3 className="text-base font-semibold text-slate-900 mb-1">{card.title}</h3>
              <p className="text-xs text-slate-600">{card.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
      <ServiceFocusSection />
      <ContractInvoiceSection />
      <TrustSection />
      <SolutionsSection />
      <ProcessTimeline />

      <section className="py-24 bg-primary-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Giải pháp Khủng hoảng Nhanh - Đúng Quy trình Pháp lý
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-primary-300" />
              </div>
              <div className="text-xl font-bold mb-2">Phản hồi 30 phút</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-primary-300" />
              </div>
              <div className="text-xl font-bold mb-2">Hồ sơ chuẩn pháp lý</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-primary-300" />
              </div>
              <div className="text-xl font-bold mb-2">Theo dõi 24/7</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary-300" />
              </div>
              <div className="text-xl font-bold mb-2">Báo cáo chi tiết</div>
            </div>
          </div>
        </div>
      </section>

      <QuickContactCta />
      <PlatformsSection />
    </div>
  );
}