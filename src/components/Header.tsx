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
    <header className="fixed top-0 left-0 right-0 z-[60] pointer-events-auto bg-white/95 backdrop-blur-sm shadow-md">
      <div className="max-w-7xl mx-auto px-3 sm:px-5 lg:px-6">
        <div className="flex items-center justify-between h-14 sm:h-15">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 sm:gap-3 hover:opacity-80 transition-opacity"
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 bg-primary-800 rounded-lg flex items-center justify-center flex-shrink-0">
              <Shield className="w-4 h-4 sm:w-4 sm:h-4 text-white" />
            </div>
            <div className="flex flex-col min-w-0">
              <div className="text-[13px] sm:text-[15px] font-bold text-primary-900 leading-none">CRISIS SHIELD</div>
              <div className="text-[8px] sm:text-[9px] text-neutral-500 whitespace-nowrap">Xử Lý Khủng Hoảng Truyền Thông</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className={`font-medium transition-colors ${
                  currentPage === item.id
                    ? 'text-primary-800 border-b-2 border-primary-800'
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
              className="btn-emergency flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              TƯ VẤN KHẨN CẤP
              <ChevronDown className="w-4 h-4" />
            </button>

            {showEmergency && (
              <div className="absolute right-0 mt-2 w-72 bg-white rounded-xl shadow-2xl border border-neutral-200 p-4 z-50">
                <div className="text-center mb-4">
                  <div className="text-sm text-neutral-500 mb-1">Hotline 24/7</div>
                  <ContactActionLink
                    action="call"
                    source="Header dropdown"
                    className="text-2xl font-bold text-primary-900 hover:text-primary-700"
                  >
                    0877 852 153
                  </ContactActionLink>
                </div>
                <ContactActionLink
                  action="zalo"
                  source="Header dropdown"
                  className="flex items-center justify-center gap-2 w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
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
            className="lg:hidden p-2 text-neutral-600 hover:text-primary-800"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4 border-t border-neutral-200">
            <nav className="flex flex-col gap-2 pt-4">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-left px-4 py-2 rounded-lg font-medium transition-colors ${
                    currentPage === item.id
                      ? 'bg-primary-100 text-primary-800'
                      : 'text-neutral-600 hover:bg-neutral-100'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Mobile Emergency */}
            <div className="mt-4 pt-4 border-t border-neutral-200">
              <div className="bg-red-50 rounded-xl p-4 text-center">
                <div className="text-sm text-red-600 font-medium mb-2">Hotline 24/7</div>
                <ContactActionLink
                  action="call"
                  source="Header mobile"
                  className="text-xl font-bold text-red-600 block mb-3"
                >
                  0877 852 153
                </ContactActionLink>
                <ContactActionLink
                  action="zalo"
                  source="Header mobile"
                  className="flex items-center justify-center gap-2 bg-blue-500 text-white py-2 px-4 rounded-lg font-medium"
                >
                  <MessageCircle className="w-4 h-4" />
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