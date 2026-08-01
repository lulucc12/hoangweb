'use client';

import Link from 'next/link';
import { ArrowRight, MessageCircle, Phone } from 'lucide-react';
import { ContactActionLink } from '@/components/ContactActionLink';

export default function QuickContactCta() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
      <div className="rounded-[2rem] border border-primary-200 bg-gradient-to-r from-primary-900 via-primary-800 to-primary-700 p-8 text-white shadow-lg">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-primary-100">
              Tư vấn chuyên nghiệp
            </p>
            <h2 className="mb-3 text-2xl font-bold md:text-3xl">
              Cần hỗ trợ đánh giá và ứng phó với tình huống truyền thông ngay từ giai đoạn đầu?
            </h2>
            <p className="text-primary-100">
              Liên hệ hotline hoặc Zalo để nhận tư vấn về phương án xử lý, hồ sơ bằng chứng và lộ trình triển khai phù hợp với từng trường hợp.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <ContactActionLink
              action="call"
              source="Quick Contact CTA"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-primary-900 transition hover:bg-primary-50"
            >
              <Phone className="h-5 w-5" />
              Gọi ngay
            </ContactActionLink>
            <ContactActionLink
              action="zalo"
              source="Quick Contact CTA"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-primary-300 bg-primary-800/60 px-5 py-3 font-semibold text-white transition hover:bg-primary-700"
            >
              <MessageCircle className="h-5 w-5" />
              Nhắn Zalo
            </ContactActionLink>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-3 font-semibold text-white transition hover:bg-white/20"
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
