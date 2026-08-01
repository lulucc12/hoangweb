'use client';

import Link from 'next/link';
import { ArrowRight, MessageCircle, Phone } from 'lucide-react';
import { ContactActionLink } from '@/components/ContactActionLink';

export default function QuickContactCta() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-xl border border-white/20 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.16),_transparent_38%),linear-gradient(135deg,_#071b3a_0%,_#102d5c_48%,_#0b1f3f_100%)] p-10 text-white shadow-sm sm:p-12 lg:p-14">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="mb-4 text-[0.7rem] font-semibold uppercase tracking-[0.35em] text-primary-100/90">
              Tư vấn chuyên nghiệp
            </p>
            <h2 className="mb-4 text-2xl font-semibold leading-tight md:text-3xl text-white">
              Cần hỗ trợ đánh giá và ứng phó với tình huống truyền thông ngay từ giai đoạn đầu?
            </h2>
            <p className="max-w-xl text-base leading-7 text-primary-100/70">
              Liên hệ hotline hoặc Zalo để nhận tư vấn về phương án xử lý, hồ sơ bằng chứng và lộ trình triển khai phù hợp với từng trường hợp.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap lg:justify-end">
            <ContactActionLink
              action="call"
              source="Quick Contact CTA"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3.5 font-semibold text-primary-900 shadow-sm transition duration-200 hover:bg-primary-50 hover:shadow-md"
            >
              <Phone className="h-5 w-5" />
              Gọi ngay
            </ContactActionLink>
            <ContactActionLink
              action="zalo"
              source="Quick Contact CTA"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-primary-800/70 px-5 py-3.5 font-semibold text-white shadow-sm transition duration-200 hover:bg-primary-700 hover:shadow-md"
            >
              <MessageCircle className="h-5 w-5" />
              Nhắn Zalo
            </ContactActionLink>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-3.5 font-semibold text-white shadow-sm transition duration-200 hover:bg-white/20 hover:shadow-md"
            >
              Gửi yêu cầu
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
