'use client';

import { useState } from 'react';
import { Bot, X, MessageCircle, Phone, Send } from 'lucide-react';
import { ContactActionLink } from '@/components/ContactActionLink';

export default function ChatbotPlaceholder() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="w-80 sm:w-96 bg-white rounded-2xl shadow-lg border border-neutral-200 overflow-hidden animate-fade-in">
          {/* Header */}
          <div className="bg-primary-800 text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold">Trợ lý Crisis Shield</div>
                <div className="text-xs text-primary-200">Đang trực tuyến</div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="rounded-xl p-1.5 transition duration-200 ease-out hover:bg-white/10">
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="h-96 p-4 overflow-y-auto bg-neutral-50 flex flex-col gap-4">
            <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm border border-neutral-100 max-w-[85%]">
              <p className="text-sm text-neutral-800">
                Chào anh! Em là trợ lý ảo của Crisis Shield. Anh cần hỗ trợ gỡ bài viết hay tư vấn xử lý khủng hoảng gấp không ạ?
              </p>
            </div>
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-neutral-100">
            <div className="flex gap-2 mb-3">
              <ContactActionLink action="call" source="Chatbot" className="flex-1 flex items-center justify-center gap-2 bg-red-50 text-[color:var(--color-crisis-red)] py-2 rounded-2xl text-sm font-semibold hover:bg-red-100 transition-all duration-200 border border-red-100">
                <Phone className="w-4 h-4" />
                Gọi 24/7
              </ContactActionLink>
              <ContactActionLink action="zalo" source="Chatbot" className="flex-1 flex items-center justify-center gap-2 bg-blue-50 text-blue-600 py-2 rounded-2xl text-sm font-semibold hover:bg-blue-100 transition-all duration-200 border border-blue-100">
                <MessageCircle className="w-4 h-4" />
                Zalo
              </ContactActionLink>
            </div>
            <div className="flex gap-2">
              <input type="text" placeholder="Nhập tin nhắn..." className="flex-1 rounded-2xl border border-neutral-200 bg-neutral-100 px-4 py-2 text-sm transition focus:outline-none focus:ring-2 focus:ring-primary-800 focus:border-transparent" />
              <button type="button" className="rounded-xl bg-primary-800 p-2.5 text-white shadow-sm transition duration-200 ease-out hover:bg-primary-900 hover:shadow-md">
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button onClick={() => setIsOpen(true)} className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-primary-800 text-white shadow-lg transition duration-300 ease-out hover:bg-primary-900">
          <MessageCircle className="w-8 h-8" />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white"></span>
          <div className="absolute right-20 bg-white text-primary-900 px-4 py-2 rounded-xl shadow-sm font-bold text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-neutral-100">
            Cần hỗ trợ gấp? Nhắn em ngay!
          </div>
        </button>
      )}
    </div>
  );
}
