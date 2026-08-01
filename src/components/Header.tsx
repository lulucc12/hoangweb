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
    <header className="fixed top-0 left-0 right-0 z-[60] pointer-events-auto bg-white/90 backdrop-blur-md border-b border-neutral-100 shadow-sm transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 hover:opacity-95 transition-opacity"
          >
            <div className="w-9 h-9 bg-primary-800 rounded-lg flex items-center justify-center flex-shrink-0">
              <Shield className="w-4 h-4 text-white" />
            </div>
            <div className="flex flex-col min-w-0">
              <div className="text-sm sm:text-base font-semibold text-primary-900 leading-tight">CRISIS SHIELD</div>
              <div className="text-[10px] sm:text-[11px] text-neutral-500 whitespace-nowrap">Xử Lý Khủng Hoảng Truyền Thông</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className={`font-semibold transition-colors py-2 px-1 ${
                  currentPage === item.id
                    ? 'text-primary-900 border-b-2 border-primary-700'
                    : 'text-neutral-600 hover:text-primary-900 hover:underline hover:underline-offset-4'
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
              className="btn-emergency inline-flex items-center gap-2 rounded-xl border border-neutral-200 bg-white px-4 py-2.5 font-semibold text-neutral-700 shadow-sm transition duration-200 ease-out hover:bg-primary-50 hover:shadow-md"
            >
              <Phone className="w-5 h-5" />
              TƯ VẤN KHẨN CẤP
              <ChevronDown className="w-4 h-4" />
            </button>

            {showEmergency && (
              <div className="absolute right-0 mt-2 w-72 bg-white rounded-xl shadow-lg border border-neutral-100 p-4 z-50">
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
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 font-semibold text-white shadow-sm transition duration-200 ease-out hover:bg-blue-500 hover:shadow-md"
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
            className="lg:hidden inline-flex rounded-xl border border-neutral-200 p-2.5 text-neutral-600 transition duration-200 ease-out hover:bg-neutral-50 hover:text-primary-700"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4 border-t border-neutral-100">
            <nav className="flex flex-col gap-2 pt-4">
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
            <div className="mt-4 pt-4 border-t border-neutral-100">
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
                  className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 font-semibold text-white shadow-sm transition duration-200 ease-out hover:bg-blue-500 hover:shadow-md"
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