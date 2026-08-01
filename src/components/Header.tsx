'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Phone, MessageCircle, Menu, X, Shield, ChevronDown } from 'lucide-react';
import { ContactActionLink } from '@/components/ContactActionLink';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showEmergency, setShowEmergency] = useState(false);
  const pathname = usePathname();
  const currentPage = pathname === '/' ? 'home' : pathname.slice(1);

  const navItems = [
    { id: 'home', label: 'Trang chủ', href: '/' },
    { id: 'about', label: 'Về chúng tôi', href: '/about' },
    { id: 'process', label: 'Quy trình', href: '/process' },
    { id: 'services', label: 'Dịch vụ', href: '/services' },
    { id: 'faq', label: 'FAQ', href: '/faq' },
    { id: 'blog', label: 'Case Study', href: '/blog' },
    { id: 'contact', label: 'Liên hệ', href: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-[60] pointer-events-auto bg-[rgba(255,255,255,0.82)] backdrop-blur-xl border-b border-[#E2E8F0] shadow-[0_2px_8px_rgba(15,23,42,0.04)] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-4 hover:opacity-95 transition-opacity">
            <div className="w-10 h-10 bg-primary-800 rounded-lg flex items-center justify-center flex-shrink-0">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col min-w-0">
              <div className="text-base sm:text-base font-semibold text-primary-900 leading-tight tracking-tight antialiased">CRISIS SHIELD</div>
              <div className="text-[10px] sm:text-[11px] text-neutral-500 whitespace-nowrap">Xử Lý Khủng Hoảng Truyền Thông</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className={`font-medium transition-colors duration-150 py-2 px-1 ${
                  currentPage === item.id
                    ? 'text-primary-900 border-b-2 border-primary-700'
                    : 'text-neutral-600 hover:text-primary-800'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Emergency Button */}
          <div className="relative hidden md:block">
            <button
              onClick={() => setShowEmergency(!showEmergency)}
              className="btn-emergency inline-flex items-center gap-2 rounded-lg border border-[#E2E8F0] bg-white px-4 py-2.5 font-medium text-neutral-700 shadow-sm transition-colors duration-150 hover:bg-primary-50"
            >
              <Phone className="w-5 h-5" />
              TƯ VẤN KHẨN CẤP
              <ChevronDown className="w-4 h-4" />
            </button>

            {showEmergency && (
              <div className="absolute right-0 mt-2 w-72 bg-white rounded-xl shadow-[0_2px_10px_rgba(15,23,42,0.04)] border border-[#E2E8F0] p-6 z-50">
                <div className="text-center mb-6">
                  <div className="text-sm text-slate-500 font-medium mb-4">Hotline 24/7</div>
                  <ContactActionLink
                    action="call"
                    source="Header dropdown"
                    className="inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 font-medium leading-none border border-[#E2E8F0] bg-white text-xl text-slate-900 mb-3 hover:border-primary-600 hover:text-primary-700 transition-colors duration-150 block"
                  >
                    0877 852 153
                  </ContactActionLink>
                </div>
                <ContactActionLink
                  action="zalo"
                  source="Header dropdown"
                  className="inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 font-medium text-white bg-primary-700 transition-colors duration-150 hover:bg-primary-800 w-full"
                >
                  <MessageCircle className="w-5 h-5 text-primary-700" />
                  Nhắn tin Zalo ngay
                </ContactActionLink>
                <button
                  onClick={() => setShowEmergency(false)}
                  className="mt-3 w-full text-sm text-neutral-500 hover:text-neutral-700"
                >
                  Đóng
                </button>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden inline-flex rounded-lg border border-[#E2E8F0] p-2.5 text-neutral-600 transition-colors duration-150 ease-out hover:bg-neutral-50 hover:text-primary-700"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4 border-t border-[#E2E8F0]">
            <nav className="flex flex-col gap-3 pt-4">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-left px-4 py-2 rounded-lg font-medium transition-colors ${
                    currentPage === item.id
                      ? 'bg-primary-50 text-primary-800'
                      : 'text-neutral-700 hover:bg-neutral-100'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Mobile Emergency */}
            <div className="mt-4 pt-4 border-t border-[#E2E8F0]">
              <div className="bg-white rounded-xl p-6 text-center shadow-[0_2px_10px_rgba(15,23,42,0.04)] border border-[#E2E8F0]">
                <div className="text-sm text-slate-500 font-medium mb-4">Hotline 24/7</div>
                <ContactActionLink
                  action="call"
                  source="Header mobile"
                  className="inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 font-medium leading-none border border-[#E2E8F0] bg-white text-xl text-slate-900 block mb-3 hover:border-primary-600 hover:text-primary-700 transition-colors duration-150"
                >
                  0877 852 153
                </ContactActionLink>
                <ContactActionLink
                  action="zalo"
                  source="Header mobile"
                  className="flex items-center justify-center gap-2 rounded-lg bg-primary-700 px-4 py-2.5 font-medium text-white transition-colors hover:bg-primary-800 w-full"
                >
                  <MessageCircle className="w-4 h-4 text-primary-700" />
                  Nhắn tin Zalo
                </ContactActionLink>
              </div>
            </div>
          </div>
        )}
      </div>

    </header>
  );
}