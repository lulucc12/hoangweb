'use client';
import { Phone } from 'lucide-react';
import { ContactActionLink } from '@/components/ContactActionLink';

export default function StickyBottomBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex md:hidden bg-white border-t border-[#E2E8F0] shadow-[0_-2px_8px_rgba(15,23,42,0.04)]">
      <ContactActionLink action="call" source="Sticky Bottom Bar" className="flex-1 flex items-center justify-center gap-2 py-4 text-slate-700 font-medium border-r border-[#E2E8F0] rounded-none hover:bg-[#F8FAFC] transition-colors">
        📞 Gọi tư vấn
      </ContactActionLink>
      <ContactActionLink action="zalo" source="Sticky Bottom Bar" className="flex-1 flex items-center justify-center gap-2 py-4 text-slate-700 font-medium rounded-none hover:bg-[#F8FAFC] transition-colors">
        💬 Trao đổi Zalo
      </ContactActionLink>
    </div>
  );
}
