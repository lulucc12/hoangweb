'use client';

import { useState, FormEvent } from 'react';
import { MessageCircle, Zap, Loader2, Shield } from 'lucide-react';
import { logActivity } from '@/lib/activity';

interface ConsultationRequestFormProps {
  source?: string;
  className?: string;
}

export default function ConsultationRequestForm({ source = 'Trang Chủ', className = 'max-w-xl mx-auto' }: ConsultationRequestFormProps) {
  const openZalo = (message: string) => {
    const zaloUrl = `http://zalo.me/1221769728911537809?text=${encodeURIComponent(message)}`;
    const newWindow = window.open(zaloUrl, '_blank', 'noopener,noreferrer');
    if (!newWindow) {
      window.location.href = zaloUrl;
    }
  };

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Khôi phục tài khoản Facebook bị khóa/hack',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsSubmitted(false);

    const payload = {
      name: formData.name,
      phone: formData.phone,
      service: formData.service,
      message: formData.message,
      source,
    };

    const zaloMessage = `Chào anh Hoàng, tôi cần tư vấn:\n- Họ tên: ${formData.name}\n- SĐT: ${formData.phone}\n- Dịch vụ: ${formData.service}\n- Nội dung: ${formData.message}`;
    openZalo(zaloMessage);

    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
    } catch {
      // If webhook fails, still open Zalo so user can contact directly.
    }

    try {
      await logActivity({
        title: 'Yêu cầu tư vấn mới',
        source: payload.source,
        name: payload.name,
        phone: payload.phone,
      });
    } catch {
      // ignore activity log errors
    }

    setIsSubmitted(true);
    setFormData({ name: '', phone: '', service: 'Khôi phục tài khoản Facebook bị khóa/hack', message: '' });
    setIsSubmitting(false);

    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <form onSubmit={handleSubmit} className={`p-0 max-h-[min(560px,calc(100vh-220px))] overflow-y-auto ${className}`}>
      <h2 className="text-xl sm:text-2xl font-bold mb-4">Gửi Yêu Cầu Tư Vấn Cho Doanh Nghiệp Và Cá Nhân, Tổ Chức</h2>

      {isSubmitted && (
        <div className="mb-2 rounded-xl bg-green-50 border border-green-200 p-2.5 text-green-900 text-sm">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-green-600" />
            <p className="font-semibold">Đã tiếp nhận yêu cầu. Đang kết nối Zalo để trao đổi tiếp...</p>
          </div>
        </div>
      )}

      <label className="block mb-1 font-semibold">Họ và Tên *</label>
      <input
        required
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        placeholder="Họ và tên"
        className="w-full rounded-2xl border border-neutral-300 bg-white px-4 py-3 mb-4 text-sm transition focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
      />

      <label className="block mb-1 font-semibold">Số Điện Thoại / Zalo *</label>
      <input
        required
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        placeholder="Số điện thoại / Zalo"
        className="w-full rounded-2xl border border-neutral-300 bg-white px-4 py-3 mb-4 text-sm transition focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
      />

      <label className="block mb-1 font-semibold">Dịch vụ cần tư vấn</label>
      <select
        value={formData.service}
        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
        className="w-full rounded-2xl border border-neutral-300 bg-white px-4 py-3 mb-4 text-sm transition focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
      >
        <option>Khôi phục tài khoản Facebook bị khóa/hack</option>
        <option>Khiếu nại nội dung vi phạm</option>
        <option>Hỗ trợ khiếu nại bóc phốt</option>
        <option>Quản trị danh tiếng & Giám sát</option>
        <option>Tư vấn & Đào tạo nội bộ</option>
      </select>

      <label className="block mb-1 font-semibold">Mô tả tình huống *</label>
      <textarea
        required
        rows={2}
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        placeholder="Ví dụ: Facebook bị khóa/hack, bài viết bị gỡ nhầm, thông tin cá nhân bị xuyên tạc, hoặc kết quả tìm kiếm sai lệch về bạn..."
        className="w-full rounded-2xl border border-neutral-300 bg-white px-4 py-3 mb-4 text-sm transition focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
      />

      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3.5 font-semibold shadow-sm transition duration-200 ease-out ${
          isSubmitting ? 'cursor-not-allowed bg-neutral-400' : 'bg-primary-800 text-white hover:bg-primary-700 hover:shadow-md'
        }`}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            ĐANG GỬI...
          </>
        ) : (
          <>
            <Zap className="w-5 h-5" />
            GỬI YÊU CẦU TƯ VẤN
          </>
        )}
      </button>

      <p className="text-[10px] text-center text-neutral-500 mt-1">
        🔒 Cam kết bảo mật thông tin • Phản hồi trong giờ hành chính • Kết quả cuối cùng phụ thuộc vào quy trình và quyết định của nền tảng
      </p>
    </form>
  );
}
