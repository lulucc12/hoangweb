'use client';

import { Phone, MessageCircle, Mail, MapPin } from 'lucide-react';
import Disclaimer from '@/components/Disclaimer';
import QuickContactCta from '@/components/QuickContactCta';
import ConsultationRequestForm from '@/components/ConsultationRequestForm';

export default function ContactPage() {

  return (
    <div className="bg-neutral-50 pt-24 pb-24">
      <section className="bg-primary-900 py-20 text-white text-center">
        <h1 className="text-4xl font-bold mb-4">Liên Hệ Tư Vấn Quản Trị Rủi Ro Truyền Thông & Khôi Phục Tài Khoản</h1>
        <p className="text-primary-200">Chúng tôi sẵn sàng hỗ trợ doanh nghiệp, tổ chức và cá nhân trong các tình huống liên quan đến tài khoản, nội dung mạng xã hội và các rủi ro phát sinh trên môi trường trực tuyến.</p>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Disclaimer />

        <div className="mt-8">
          <QuickContactCta />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-primary-900">Thông Tin Liên Hệ</h2>
            <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white border border-neutral-200 mb-4">
                <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <div className="text-sm text-neutral-500">Hotline / Zalo</div>
                  <div className="font-bold text-primary-900">0877 852 153</div>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white border border-neutral-200 mb-4">
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <div className="text-sm text-neutral-500">Email</div>
                  <div className="font-bold text-primary-900">hoang.helpmedia@gmail.com</div>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white border border-neutral-200">
                <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <div className="text-sm text-neutral-500">Địa chỉ</div>
                  <div className="font-bold text-primary-900">Đồng Tiến, Phú Lạc, Đại Từ, Thái Nguyên</div>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
              <h3 className="font-semibold text-primary-900 mb-2">Các tình huống thường gặp</h3>
              <ul className="space-y-2 text-sm text-primary-800">
                <li>• Khôi phục tài khoản Facebook bị khóa, bị hack hoặc bị chiếm quyền</li>
                <li>• Hỗ trợ khiếu nại nội dung vi phạm, xuyên tạc hoặc ảnh hưởng uy tín</li>
                <li>• Tư vấn bảo vệ danh tính, quản trị tài sản số và kiểm soát rủi ro truyền thông</li>
              </ul>
            </div>
          </div>

          <ConsultationRequestForm source="Trang Liên hệ" />
        </div>
      </section>
    </div>
  );
}