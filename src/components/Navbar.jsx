import React, { useState, useEffect } from 'react';
import { Menu, X, PhoneCall } from 'lucide-react';
import logoMark from '../assets/logo-black-mark.png';

export default function Navbar({ onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-zinc-200 py-3'
          : 'bg-white/80 backdrop-blur-sm border-b border-zinc-100 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo with official MediaMind mark */}
          <a href="#" className="flex items-center gap-3 group shrink-0">
            <img
              src={logoMark}
              alt="MEDIAMIND"
              className="h-9 sm:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex flex-col text-right">
              <span className="font-display font-black text-base sm:text-lg tracking-wider text-zinc-950 leading-tight">
                MEDIAMIND
              </span>
              <span className="text-[10px] tracking-widest text-zinc-500 uppercase font-bold">
                بيروت • دبي
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-7 text-xs xl:text-sm font-bold text-zinc-700">
            <a href="#services" className="hover:text-black transition-colors">
              خدماتنا
            </a>
            <a href="#case-studies" className="hover:text-black transition-colors">
              مشاريعنا
            </a>
            <a href="#why-us" className="hover:text-black transition-colors">
              لماذا نحن؟
            </a>
            <a href="#reach" className="hover:text-black transition-colors">
              نطاق انتشارنا
            </a>
            <a href="#testimonials" className="hover:text-black transition-colors">
              آراء العملاء
            </a>
            <a href="#faq" className="hover:text-black transition-colors">
              الأسئلة الشائعة
            </a>
          </div>

          {/* Single Desktop CTA: Book a call */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              onClick={onOpenBooking}
              className="px-5 py-2.5 rounded-none font-bold text-xs tracking-wider bg-zinc-950 hover:bg-black text-white transition-all duration-200 border border-zinc-950 flex items-center gap-2 cursor-pointer"
            >
              <PhoneCall className="w-3.5 h-3.5 text-zinc-300" />
              <span>احجز مكالمة</span>
            </button>
          </div>

          {/* Mobile hamburger */}
          <div className="flex items-center gap-2 sm:hidden">
            <button
              onClick={onOpenBooking}
              className="px-3 py-1.5 rounded-none font-bold text-[11px] bg-zinc-950 text-white flex items-center gap-1.5"
            >
              <PhoneCall className="w-3 h-3" />
              <span>احجز</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-none text-zinc-700 hover:text-black hover:bg-zinc-100 transition-colors"
              aria-label="القائمة الرئيسية"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-zinc-200 px-4 pt-3 pb-6 space-y-3 text-right animate-fade-in">
          <a
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-bold text-zinc-800 hover:text-black border-b border-zinc-100"
          >
            خدماتنا
          </a>
          <a
            href="#case-studies"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-bold text-zinc-800 hover:text-black border-b border-zinc-100"
          >
            مشاريعنا
          </a>
          <a
            href="#why-us"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-bold text-zinc-800 hover:text-black border-b border-zinc-100"
          >
            لماذا نحن؟
          </a>
          <a
            href="#reach"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-bold text-zinc-800 hover:text-black border-b border-zinc-100"
          >
            نطاق انتشارنا
          </a>
          <a
            href="#testimonials"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-bold text-zinc-800 hover:text-black border-b border-zinc-100"
          >
            آراء العملاء
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-bold text-zinc-800 hover:text-black border-b border-zinc-100"
          >
            الأسئلة الشائعة
          </a>

          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 rounded-none font-bold text-xs tracking-wider bg-zinc-950 text-white flex items-center justify-center gap-2 cursor-pointer"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>احجز مكالمة استشارية</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
