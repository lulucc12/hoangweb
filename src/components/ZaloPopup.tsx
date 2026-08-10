'use client';

import { useState } from 'react';
import { X } from 'lucide-react';
import { ContactActionLink } from '@/components/ContactActionLink';

function ZaloIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M12 2C6.48 2 2 5.92 2 10.5c0 2.42 1.19 4.59 3.19 6.16L4 22l5.31-1.76A10.89 10.89 0 0012 21c5.52 0 10-3.92 10-8.5S17.52 2 12 2z" fill="#0097ff"/>
      <path d="M7.9 7.5h2.8l-1.4 2.4-1.4 2.6h2.3l1.7-2.3-1.6-1.5h1.9v-1.5H7.9v0.3z" fill="#fff"/>
    </svg>
  );
}

export default function ZaloPopup() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-24 right-6 z-60 flex flex-col items-end gap-3 md:bottom-6">
      {isOpen ? (
        <div className="w-72 overflow-hidden rounded-[28px] border border-slate-200 bg-white/95 shadow-2xl backdrop-blur-xl">
          <div className="flex items-center justify-between gap-3 px-4 py-4 bg-primary-800 text-white">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/15">
                <ZaloIcon className="h-5 w-5" />
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
              <ZaloIcon className="h-4 w-4" />
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
          <ZaloIcon className="h-5 w-5" />
          <span className="hidden sm:inline">Zalo</span>
        </button>
      )}
    </div>
  );
}
