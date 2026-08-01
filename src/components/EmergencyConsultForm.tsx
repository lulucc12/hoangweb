'use client';

import { useEffect, useRef, useState, FormEvent } from 'react';
import { Phone, MessageCircle, Zap, X, Loader2, Shield } from 'lucide-react';
import { logActivity } from '@/lib/activity';
import { ContactActionLink } from '@/components/ContactActionLink';

export default function EmergencyConsultForm() {
  const openZalo = (message: string) => {
    const zaloUrl = `https://zalo.me/0877852153?text=${encodeURIComponent(message)}`;
    const newWindow = window.open(zaloUrl, '_blank', 'noopener,noreferrer');
    if (!newWindow) {
      window.location.href = zaloUrl;
    }
  };

  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Khiếu nại nội dung vi phạm',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const services = [
    'Khiếu nại nội dung vi phạm',
    'Hỗ trợ khiếu nại bóc phốt',
    'Quản trị danh tiếng & Giám sát',
    'Tư vấn & Đào tạo nội bộ',
  ];

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsSubmitted(false);

    try {
      // Gửi webhook Telegram ngầm
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
          source: 'Emergency Form - Trang chủ',
        }),
      });
    } catch {
      // Ignore webhook errors, continue to open Zalo
    }

    try {
      await logActivity({
        title: 'Yêu cầu tư vấn khẩn cấp',
        source: 'Emergency Form - Trang chủ',
        name: formData.name,
        phone: formData.phone,
      });
    } catch {
      // ignore
    }

    const zaloMessage = `Chào anh Hoàng, tôi cần tư vấn khẩn:\n- Họ tên: ${formData.name}\n- SĐT: ${formData.phone}\n- Dịch vụ: ${formData.service}\n- Nội dung: ${formData.message}`;
    openZalo(zaloMessage);

    setIsSubmitted(true);
    setFormData({ name: '', phone: '', service: 'Khiếu nại nội dung vi phạm', message: '' });
    setIsSubmitting(false);

    // Đóng form sau 3s
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
      setIsSubmitted(false);
    }, 3000);
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700/20 bg-slate-900 px-4 py-2.5 text-white font-semibold shadow-sm transition duration-300 ease-out hover:bg-slate-800"
        aria-label="Mở form tư vấn khẩn cấp"
      >
        <Zap className="w-6 h-6" />
        <span className="hidden sm:block font-bold text-lg">Tư Vấn Khẩn Cấp 24/7</span>
        <Phone className="w-5 h-5" />
      </button>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto shadow-lg animate-slide-up">
        {/* Header */}
        <div className="bg-gradient-to-r from-red-600 to-red-500 rounded-t-xl p-6 text-white relative">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/20 transition duration-200 ease-out hover:bg-white/30"
            aria-label="Đóng form"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="text-center">
            <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Zap className="w-7 h-7" />
            </div>
            <h2 className="text-2xl font-bold mb-1">Tư Vấn Khẩn Cấp</h2>
            <p className="text-red-100 text-sm">Phản hồi trong 30 phút — 24/7</p>
          </div>
        </div>

        {/* Form Content */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          {isSubmitted && (
            <div className="bg-green-50 border border-green-200 rounded-xl p-4 flex items-start gap-3 animate-fade-in">
              <Shield className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-green-800">Đã gửi yêu cầu tư vấn!</p>
                <p className="text-green-700 text-sm mt-1">Đang mở Zalo để kết nối trực tiếp với anh Hoàng...</p>
              </div>
            </div>
          )}

          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-neutral-700 mb-2">
              Họ và Tên <span className="text-red-500">*</span>
            </label>
            <input
              id="name"
              required
              disabled={isSubmitted}
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Họ và Tên của bạn"
              className="w-full rounded-2xl border border-neutral-300 bg-white px-4 py-3 text-sm transition focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent disabled:bg-neutral-50 disabled:cursor-not-allowed"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-neutral-700 mb-2">
              Số Điện Thoại / Zalo <span className="text-red-500">*</span>
            </label>
            <input
              id="phone"
              type="tel"
              required
              disabled={isSubmitted}
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="Số điện thoại của bạn"
              className="w-full rounded-2xl border border-neutral-300 bg-white px-4 py-3 text-sm transition focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent disabled:bg-neutral-50 disabled:cursor-not-allowed"
            />
          </div>

          <div>
            <label htmlFor="service" className="block text-sm font-semibold text-neutral-700 mb-2">
              Dịch vụ cần tư vấn
            </label>
            <select
              id="service"
              disabled={isSubmitted}
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              className="w-full rounded-2xl border border-neutral-300 bg-white px-4 py-3 text-sm transition focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent disabled:bg-neutral-50 disabled:cursor-not-allowed"
            >
              {services.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-neutral-700 mb-2">
              Mô tả tình huống <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              required
              rows={4}
              disabled={isSubmitted}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Ví dụ: Link bài Facebook bóc phốt sai sự thật... TikTok clip ghép nội dung xuyên tạc... Kết quả Google Search hiện bài báo cũ sai sự thật..."
              className="w-full rounded-2xl border border-neutral-300 bg-white px-4 py-3 text-sm transition focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent disabled:bg-neutral-50 disabled:cursor-not-allowed resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isSubmitting || isSubmitted}
            className={`w-full inline-flex items-center justify-center gap-3 rounded-xl px-5 py-4 text-lg font-semibold transition duration-200 ease-out ${
              isSubmitting || isSubmitted
                ? 'cursor-not-allowed bg-neutral-400'
                : 'bg-gradient-to-r from-red-600 to-red-500 text-white shadow-sm hover:bg-red-700 hover:from-red-500 hover:to-red-400 hover:shadow-md'
            }`}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                ĐANG GỬI...
              </>
            ) : isSubmitted ? (
              <>
                <MessageCircle className="w-5 h-5" />
                ĐÃ GỬI - ĐANG MỞ ZALO
              </>
            ) : (
              <>
                <Zap className="w-5 h-5" />
                GỬI YÊU CẦU TƯ VẤN MIỄN PHÍ
              </>
            )}
          </button>

          <p className="text-[11px] text-center text-neutral-500">
            🔒 Cam kết bảo mật thông tin • Phản hồi nhanh trong giờ hành chính • Kết quả do nền tảng quyết định
          </p>

          <div className="flex items-center justify-center gap-4 pt-2">
            <ContactActionLink
              action="call"
              source="Emergency Form"
              className="flex items-center gap-2 text-red-600 font-semibold hover:text-red-700"
            >
              Gọi: 0877 852 153
            </ContactActionLink>
            <ContactActionLink
              action="zalo"
              source="Emergency Form"
              className="flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700"
            >
              <MessageCircle className="w-5 h-5" />
              Nhắn Zalo
            </ContactActionLink>
          </div>
        </form>
      </div>

      <style jsx>{`
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-slide-up { animation: slide-up 0.3s ease-out; }
        .animate-fade-in { animation: fade-in 0.3s ease-out; }
      `}</style>
    </div>
  );
}