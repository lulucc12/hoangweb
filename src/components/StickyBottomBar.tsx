'use client';
import { Phone, MessageCircle } from 'lucide-react';
import { ContactActionLink } from '@/components/ContactActionLink';

export default function StickyBottomBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex md:hidden bg-white border-t border-neutral-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
      <ContactActionLink action="call" source="Sticky Bottom Bar" className="flex-1 flex items-center justify-center gap-2 py-3 text-red-600 font-bold border-r border-neutral-200">
        <Phone className="w-5 h-5" /> GỌI
      </ContactActionLink>
      <ContactActionLink action="zalo" source="Sticky Bottom Bar" className="flex-1 flex items-center justify-center gap-2 py-3 text-blue-600 font-bold">
        <MessageCircle className="w-5 h-5" /> ZALO
      </ContactActionLink>
    </div>
  );
}
