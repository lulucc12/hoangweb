'use client';

import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { ContactActionLink } from '@/components/ContactActionLink';

export default function ZaloPopup() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-24 right-6 z-60 flex flex-col items-end gap-3 md:bottom-6">
      {isOpen ? (
        <div className="w-72 overflow-hidden rounded-[28px] border border-slate-200 bg-white/95 shadow-2xl backdrop-blur-xl">
          <div className="flex items-center justify-between gap-3 px-4 py-4 bg-primary-800 text-white">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/15">
                <MessageCircle className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold">Hỗ trợ Zalo 24/7</p>
                <p className="text-xs text-primary-200">Nhắn ngay để được tư vấn gấp</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="rounded-full p-2 text-white/80 transition hover:bg-white/10 hover:text-white"
              aria-label="Đóng popup Zalo"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="space-y-3 px-4 py-4 text-sm text-slate-700">
            <p>Bạn cần hỗ trợ gấp? Nhấn vào nút bên dưới để mở Zalo và chat ngay với đội ngũ chuyên trách.</p>
            <ContactActionLink
              action="zalo"
              source="Zalo Popup"
              className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#12b44b] px-4 py-3 text-sm font-semibold text-white shadow-sm transition duration-200 hover:bg-[#0f9b40]"
            >
              <MessageCircle className="h-4 w-4" />
              Nhắn Zalo ngay
            </ContactActionLink>
          </div>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="flex h-14 min-w-[56px] items-center justify-center gap-2 rounded-full bg-[#12b44b] px-4 text-white shadow-2xl transition duration-200 hover:bg-[#0f9b40] focus:outline-none focus:ring-2 focus:ring-[#12b44b]/40"
          aria-label="Mở popup Zalo"
        >
          <MessageCircle className="h-5 w-5" />
          <span className="hidden sm:inline">Zalo</span>
        </button>
      )}
    </div>
  );
}
