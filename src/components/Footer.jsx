import React, { useState } from 'react';
import { ArrowLeft, Instagram, Linkedin, Twitter, Youtube, MapPin, CheckCircle2, PhoneCall } from 'lucide-react';

export default function Footer({ onOpenBooking }) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
    }
  };

  return (
    <footer className="bg-white border-t border-zinc-200 text-zinc-600 text-xs py-16 relative text-right">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter / "Stay in the loop" Section (Devancy Inspired in Arabic) */}
        <div className="mb-14 p-8 sm:p-10 rounded-none bg-zinc-50 border border-zinc-200 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-lg">
            <span className="text-[11px] font-mono uppercase tracking-widest text-amber-800 font-bold block mb-1">
              نشرة ميديا ماينيد التحليلية
            </span>
            <h4 className="text-xl sm:text-2xl font-display font-bold text-zinc-950">
              ابقَ على اطلاع دائم
            </h4>
            <p className="text-xs text-zinc-600 mt-1">
              انضم إلى أكثر من 4,200 من رواد الأعمال وأصحاب المتاجر الذين يتلقون تقريرنا الشهري حول أحدث استراتيجيات تيك توك، رفع تحويلات شوبيفاي، واتجاهات التغليف الفاخر.
            </p>
          </div>

          <div className="w-full md:w-auto">
            {!subscribed ? (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 w-full sm:w-80">
                <input
                  type="email"
                  required
                  placeholder="أدخل بريدك الإلكتروني"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="px-4 py-3 rounded-full bg-white border border-zinc-300 text-zinc-900 text-xs placeholder-zinc-400 focus:outline-none focus:border-amber-600 flex-1 text-right"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-full bg-zinc-900 hover:bg-gold-gradient text-white text-xs font-bold transition-all cursor-pointer whitespace-nowrap"
                >
                  اشتراك
                </button>
              </form>
            ) : (
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 bg-emerald-50 px-4 py-2.5 rounded-full border border-emerald-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>أهلاً بك! تم تسجيل اشتراكك بنجاح.</span>
              </div>
            )}
          </div>
        </div>

        {/* Links Grid in Arabic */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 pb-12 border-b border-zinc-200">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-none bg-gradient-to-br from-gold-400 via-amber-500 to-amber-700 p-[1px]">
                <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center">
                  <span className="font-display font-black text-lg text-zinc-950">M</span>
                </div>
              </div>
              <span className="font-display font-extrabold text-lg tracking-wider text-zinc-950">
                MEDIA <span className="text-gold-gradient">MINED</span>
              </span>
            </div>

            <p className="text-zinc-600 text-xs sm:text-sm max-w-sm leading-relaxed">
              وكالة رائدة متخصصة في إدارة صفحات السوشيال ميديا للشركات، الهوية البصرية الفاخرة، تصميم التغليف والعلب، وبناء وتطوير متاجر شوبيفاي التي تضاعف أرباحك الصافية.
            </p>

            {/* Dual Location Badges: Lebanon & UAE */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-[11px] text-zinc-700 font-semibold">
                <MapPin className="w-3.5 h-3.5 text-amber-600" />
                <span className="font-bold text-zinc-900">دبي، الإمارات</span>
                <span className="text-zinc-400">•</span>
                <span className="text-zinc-600">مركز الأعمال والتوسع التجاري</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-[11px] text-zinc-700 font-semibold">
                <MapPin className="w-3.5 h-3.5 text-amber-600" />
                <span className="font-bold text-zinc-900">بيروت، لبنان</span>
                <span className="text-zinc-400">•</span>
                <span className="text-zinc-600">استوديو الإنتاج الفني وتصاميم الهوية</span>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-zinc-100 border border-zinc-200 flex items-center justify-center hover:border-gold-500 hover:text-amber-800 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-zinc-100 border border-zinc-200 flex items-center justify-center hover:border-gold-500 hover:text-amber-800 transition-colors"
                aria-label="TikTok"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298 0 .591.045.87.134V9.41a6.34 6.34 0 0 0-.87-.06A6.33 6.33 0 0 0 3 15.68a6.34 6.34 0 0 0 10.82 4.47 6.27 6.27 0 0 0 1.86-4.48V8.71a8.18 8.18 0 0 0 4.91 1.62v-3.64z"/>
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-zinc-100 border border-zinc-200 flex items-center justify-center hover:border-gold-500 hover:text-amber-800 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-zinc-100 border border-zinc-200 flex items-center justify-center hover:border-gold-500 hover:text-amber-800 transition-colors"
                aria-label="X (Twitter)"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-zinc-100 border border-zinc-200 flex items-center justify-center hover:border-gold-500 hover:text-amber-800 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Project Pillars */}
          <div>
            <h4 className="text-zinc-950 font-bold text-xs mb-4">
              مجالات العمل
            </h4>
            <ul className="space-y-2.5">
              <li><a href="#services" className="hover:text-amber-800 transition-colors">إدارة صفحات السوشيال ميديا</a></li>
              <li><a href="#services" className="hover:text-amber-800 transition-colors">الهوية البصرية والبراندنج الفاخر</a></li>
              <li><a href="#services" className="hover:text-amber-800 transition-colors">تصميم التغليف والعلب الملكية</a></li>
              <li><a href="#services" className="hover:text-amber-800 transition-colors">تطوير متاجر شوبيفاي والمواقع</a></li>
              <li><a href="#case-studies" className="hover:text-amber-800 transition-colors">الباقات الشاملة للشركات</a></li>
            </ul>
          </div>

          {/* Navigation & Tools */}
          <div>
            <h4 className="text-zinc-950 font-bold text-xs mb-4">
              أقسام الموقع
            </h4>
            <ul className="space-y-2.5">
              <li><a href="#case-studies" className="hover:text-amber-800 transition-colors">سجل الأعمال والمشاريع</a></li>
              <li><a href="#why-us" className="hover:text-amber-800 transition-colors">لماذا ميديا ماينيد؟</a></li>
              <li><a href="#reach" className="hover:text-amber-800 transition-colors">نطاق انتشارنا (لبنان والإمارات)</a></li>
              <li><a href="#testimonials" className="hover:text-amber-800 transition-colors">شهادات أصحاب الشركات</a></li>
              <li><a href="#faq" className="hover:text-amber-800 transition-colors">الأسئلة الشائعة</a></li>
            </ul>
          </div>

          {/* Regional Hubs & Inquiries */}
          <div>
            <h4 className="text-zinc-950 font-bold text-xs mb-4">
              فروع واستوديوهات الوكالة
            </h4>
            <div className="space-y-3">
              <div>
                <p className="text-zinc-900 font-bold flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-amber-600" />
                  الإمارات العربية المتحدة
                </p>
                <p className="text-zinc-500 text-[11px]">داون تاون دبي / الخليج التجاري</p>
              </div>

              <div>
                <p className="text-zinc-900 font-bold flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-amber-600" />
                  لبنان
                </p>
                <p className="text-zinc-500 text-[11px]">بيروت سنترال / استوديو التصوير والتصميم</p>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenBooking}
                  className="inline-flex items-center gap-1.5 text-amber-800 hover:text-amber-950 font-bold cursor-pointer"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-amber-600" />
                  <span>احجز مكالمة استشارية</span>
                  <ArrowLeft className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500 font-medium">
          <div>
            © {new Date().getFullYear()} وكالة ميديا ماينيد (Media Mined) • بيروت ودبي. جميع الحقوق محفوظة.
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-zinc-700 transition-colors cursor-pointer">سياسة الخصوصية</span>
            <span className="hover:text-zinc-700 transition-colors cursor-pointer">الشروط والأحكام</span>
            <span className="hover:text-zinc-700 transition-colors cursor-pointer">اتفاقية تقديم الخدمات</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
