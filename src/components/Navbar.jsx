import React, { useState, useEffect } from 'react';
import { Menu, X, PhoneCall } from 'lucide-react';

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
          ? 'bg-white/95 backdrop-blur-md border-b border-zinc-200/80 py-2.5 sm:py-3'
          : 'bg-transparent py-3 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-none bg-gradient-to-br from-gold-400 via-amber-500 to-amber-700 p-[1px] transition-transform duration-300 group-hover:scale-105">
              <div className="w-full h-full bg-white rounded-[11px] flex items-center justify-center">
                <span className="font-display font-black text-lg sm:text-xl text-zinc-900">M</span>
              </div>
            </div>
            <div className="flex flex-col text-right">
              <span className="font-display font-extrabold text-base sm:text-lg tracking-wider text-zinc-950 flex items-center gap-1 leading-tight">
                MEDIA <span className="text-gold-gradient">MINED</span>
              </span>
              <span className="text-[9px] sm:text-[10px] tracking-widest text-zinc-500 uppercase font-semibold">
                لبنان • الإمارات
              </span>
            </div>
          </a>

          {/* Desktop Nav Links in Arabic with flexible gaps */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8 text-xs xl:text-sm font-bold">
            <a href="#services" className="text-zinc-600 hover:text-zinc-950 transition-colors">
              خدماتنا
            </a>
            <a href="#case-studies" className="text-zinc-600 hover:text-zinc-950 transition-colors">
              مشاريعنا
            </a>
            <a href="#why-us" className="text-zinc-600 hover:text-zinc-950 transition-colors">
              لماذا نحن؟
            </a>
            <a href="#reach" className="text-zinc-600 hover:text-zinc-950 transition-colors">
              نطاق انتشارنا
            </a>
            <a href="#testimonials" className="text-zinc-600 hover:text-zinc-950 transition-colors">
              آراء العملاء
            </a>
            <a href="#faq" className="text-zinc-600 hover:text-zinc-950 transition-colors">
              الأسئلة الشائعة
            </a>
          </div>

          {/* Single primary CTA: Book a call */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenBooking}
              className="relative group overflow-hidden px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs font-bold bg-gold-gradient text-white-gold-glow hover:shadow-gold-glow-lg transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer flex items-center gap-2"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>احجز مكالمة استشارية</span>
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={onOpenBooking}
              className="sm:hidden px-3 py-1.5 rounded-full text-[11px] font-bold bg-gold-gradient text-white flex items-center gap-1.5"
            >
              <PhoneCall className="w-3 h-3" />
              <span>احجز مكالمة</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 sm:p-2 rounded-lg text-zinc-700 hover:text-black hover:bg-zinc-100 focus:outline-none"
              aria-label="القائمة"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 border-b border-zinc-200 px-5 sm:px-8 py-5 space-y-4 text-right">
          <div className="flex flex-col space-y-2.5 text-sm sm:text-base font-semibold">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="text-zinc-700 hover:text-black transition-colors py-1.5 border-b border-zinc-100"
            >
              خدماتنا (سوشيال، براندنج، شوبيفاي)
            </a>
            <a
              href="#case-studies"
              onClick={() => setMobileMenuOpen(false)}
              className="text-zinc-700 hover:text-black transition-colors py-1.5 border-b border-zinc-100"
            >
              سجل المشاريع والأعمال
            </a>
            <a
              href="#why-us"
              onClick={() => setMobileMenuOpen(false)}
              className="text-zinc-700 hover:text-black transition-colors py-1.5 border-b border-zinc-100"
            >
              لماذا تختار ميديا ماينيد؟
            </a>
            <a
              href="#reach"
              onClick={() => setMobileMenuOpen(false)}
              className="text-zinc-700 hover:text-black transition-colors py-1.5 border-b border-zinc-100"
            >
              نطاق العمل (لبنان، الإمارات، والخليج)
            </a>
            <a
              href="#testimonials"
              onClick={() => setMobileMenuOpen(false)}
              className="text-zinc-700 hover:text-black transition-colors py-1.5 border-b border-zinc-100"
            >
              آراء أصحاب المتاجر والشركات
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="text-zinc-700 hover:text-black transition-colors py-1.5"
            >
              الأسئلة الشائعة
            </a>
          </div>
          
          <div className="pt-3 border-t border-zinc-200">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 rounded-none font-bold text-xs sm:text-sm bg-gold-gradient text-white flex items-center justify-center gap-2-gold-glow cursor-pointer"
            >
              <PhoneCall className="w-4 h-4" />
              <span>احجز مكالمة استشارية الآن</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
