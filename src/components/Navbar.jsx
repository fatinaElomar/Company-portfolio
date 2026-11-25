import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, ChevronRight, Globe } from 'lucide-react';
import logoMark from '../assets/logo-black-mark.png';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar({ onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-zinc-200/80 shadow-sm py-3'
          : 'bg-white border-b border-zinc-100 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo: Burgundy MM mark + Media Mind */}
          <a href="#" className="flex items-center gap-2.5 group shrink-0">
            <img
              src={logoMark}
              alt="Media Mind"
              className="h-8 sm:h-9 w-auto object-contain logo-burgundy transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex items-center font-display font-bold text-lg sm:text-xl tracking-tight text-zinc-950" dir="ltr">
              <span>Media</span>
              <span className="text-burgundy ms-1">Mind</span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8 text-xs font-semibold text-zinc-700">
            <a href="#" className="text-zinc-950 font-bold border-b-2 border-zinc-950 pb-0.5">
              {t.nav.home}
            </a>
            <div className="relative group/nav flex items-center gap-1 cursor-pointer hover:text-burgundy transition-colors">
              <a href="#services">{t.nav.services}</a>
              <ChevronDown className="w-3.5 h-3.5 opacity-60" />
            </div>
            <a href="#portfolio" className="hover:text-burgundy transition-colors">
              {t.nav.portfolio}
            </a>
            <a href="#about" className="hover:text-burgundy transition-colors">
              {t.nav.about}
            </a>
            <a href="#contact" className="hover:text-burgundy transition-colors">
              {t.nav.contact}
            </a>
          </div>

          {/* Right Controls: AR/EN Switcher + Let's Talk CTA */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Language Switcher Pill */}
            <div
              className="inline-flex items-center rounded-full bg-zinc-100 border border-zinc-200 p-0.5 text-[11px] font-bold"
              role="group"
              aria-label="Language switcher"
            >
              <Globe className="w-3.5 h-3.5 text-zinc-500 mx-1.5" />
              <button
                type="button"
                onClick={() => setLang('ar')}
                className={`px-2.5 py-1 rounded-full transition-all cursor-pointer ${
                  lang === 'ar'
                    ? 'bg-zinc-950 text-white shadow-sm'
                    : 'text-zinc-600 hover:text-zinc-950'
                }`}
              >
                AR
              </button>
              <button
                type="button"
                onClick={() => setLang('en')}
                className={`px-2.5 py-1 rounded-full transition-all cursor-pointer ${
                  lang === 'en'
                    ? 'bg-zinc-950 text-white shadow-sm'
                    : 'text-zinc-600 hover:text-zinc-950'
                }`}
              >
                EN
              </button>
            </div>

            <button
              onClick={onOpenBooking}
              className="px-5 py-2.5 rounded-full font-bold text-xs tracking-wide bg-burgundy hover:bg-burgundy-hover text-white transition-all duration-200 flex items-center gap-1.5 shadow-sm hover:shadow group cursor-pointer"
            >
              <span>{t.nav.letsTalk}</span>
              <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 rtl:rotate-180 rtl:group-hover:-translate-x-0.5" />
            </button>
          </div>

          {/* Mobile Controls */}
          <div className="flex items-center gap-2 sm:hidden">
            {/* Compact Mobile AR/EN toggle */}
            <button
              type="button"
              onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
              className="px-2.5 py-1.5 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-900 font-bold text-[11px] flex items-center gap-1"
              aria-label="Switch language"
            >
              <Globe className="w-3 h-3 text-burgundy" />
              <span>{lang === 'ar' ? 'EN' : 'AR'}</span>
            </button>

            <button
              onClick={onOpenBooking}
              className="px-3.5 py-1.5 rounded-full font-bold text-[11px] bg-burgundy text-white flex items-center gap-1"
            >
              <span>{t.nav.letsTalkMobile}</span>
              <ChevronRight className="w-3 h-3 rtl:rotate-180" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-zinc-700 hover:text-zinc-950 hover:bg-zinc-100 transition-colors"
              aria-label={t.nav.menuAria}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-zinc-200 px-4 pt-3 pb-6 space-y-3 text-start animate-fade-in">
          <a
            href="#"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-bold text-zinc-950 border-b border-zinc-100"
          >
            {t.nav.home}
          </a>
          <a
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-bold text-zinc-700 hover:text-burgundy border-b border-zinc-100"
          >
            {t.nav.services}
          </a>
          <a
            href="#portfolio"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-bold text-zinc-700 hover:text-burgundy border-b border-zinc-100"
          >
            {t.nav.portfolio}
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-bold text-zinc-700 hover:text-burgundy border-b border-zinc-100"
          >
            {t.nav.about}
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-bold text-zinc-700 hover:text-burgundy border-b border-zinc-100"
          >
            {t.nav.contact}
          </a>

          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 rounded-full font-bold text-xs tracking-wider bg-burgundy text-white flex items-center justify-center gap-2 cursor-pointer shadow-sm"
            >
              <span>{t.nav.letsTalkFull}</span>
              <ChevronRight className="w-3.5 h-3.5 rtl:rotate-180" />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
