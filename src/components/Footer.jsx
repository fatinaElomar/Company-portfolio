import React, { useState } from 'react';
import { ArrowLeft, Instagram, Linkedin, Twitter, Youtube, MapPin, CheckCircle2, PhoneCall } from 'lucide-react';
import logoMark from '../assets/logo-black-mark.png';

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
    <footer className="bg-white border-t border-zinc-200 text-zinc-600 text-xs py-14 relative text-right">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <div className="mb-12 p-6 sm:p-8 rounded-none bg-zinc-50 border border-zinc-200 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-lg">
            <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-700 font-bold block mb-1">
              نشرة MEDIAMIND التحليلية
            </span>
            <h4 className="text-lg sm:text-xl font-display font-bold text-zinc-950">
              ابقَ على اطلاع دائم
            </h4>
            <p className="text-xs text-zinc-600 mt-1">
              انضم إلى أكثر من 4,200 من رواد الأعمال وأصحاب المتاجر الذين يتلقون تقريرنا الشهري حول أحدث استراتيجيات تيك توك، رفع تحويلات شوبيفاي، وتصميم التغليف.
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
                  className="px-4 py-2.5 rounded-none bg-white border border-zinc-300 text-zinc-900 text-xs placeholder-zinc-400 focus:outline-none focus:border-zinc-950 flex-1 text-right"
                />
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-none bg-zinc-950 hover:bg-black text-white text-xs font-bold transition-all cursor-pointer whitespace-nowrap"
                >
                  اشتراك
                </button>
              </form>
            ) : (
              <div className="flex items-center gap-2 text-xs font-bold text-zinc-900 bg-zinc-100 px-4 py-2.5 rounded-none border border-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-zinc-900" />
                <span>أهلاً بك! تم تسجيل اشتراكك بنجاح.</span>
              </div>
            )}
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 pb-10 border-b border-zinc-200">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img src={logoMark} alt="MEDIAMIND" className="h-9 w-auto object-contain" />
              <div className="flex flex-col text-right">
                <span className="font-display font-black text-lg tracking-wider text-zinc-950 leading-tight">
                  MEDIAMIND
                </span>
                <span className="text-[10px] tracking-widest text-zinc-500 uppercase font-semibold">
                  بيروت • دبي
                </span>
              </div>
            </div>

            <p className="text-zinc-600 text-xs max-w-sm leading-relaxed">
              وكالة رائدة متخصصة في إدارة صفحات السوشيال ميديا للشركات، الهوية البصرية، تصميم التغليف والعلب، وبناء متاجر شوبيفاي التي تضاعف أرباحك الصافية.
            </p>

            {/* Dual Location Badges */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-none bg-zinc-100 border border-zinc-200 text-[11px] text-zinc-700 font-semibold">
                <MapPin className="w-3.5 h-3.5 text-zinc-900" />
                <span className="font-bold text-zinc-900">دبي، الإمارات</span>
                <span className="text-zinc-400">•</span>
                <span className="text-zinc-600">مركز الأعمال والتوسع التجاري</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-none bg-zinc-100 border border-zinc-200 text-[11px] text-zinc-700 font-semibold">
                <MapPin className="w-3.5 h-3.5 text-zinc-900" />
                <span className="font-bold text-zinc-900">بيروت، لبنان</span>
                <span className="text-zinc-400">•</span>
                <span className="text-zinc-600">استوديو الإنتاج وتصاميم الهوية</span>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-none bg-zinc-100 border border-zinc-200 flex items-center justify-center hover:bg-zinc-950 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-none bg-zinc-100 border border-zinc-200 flex items-center justify-center hover:bg-zinc-950 hover:text-white transition-colors"
                aria-label="TikTok"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298 0 .591.045.87.134V9.41a6.34 6.34 0 0 0-.87-.06A6.33 6.33 0 0 0 3 15.68a6.34 6.34 0 0 0 10.82 4.47 6.27 6.27 0 0 0 1.86-4.48V8.71a8.18 8.18 0 0 0 4.91 1.62v-3.64z"/>
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-none bg-zinc-100 border border-zinc-200 flex items-center justify-center hover:bg-zinc-950 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h5 className="font-bold text-zinc-950 mb-3 text-xs tracking-wider uppercase">
              الخدمات الرئيسية
            </h5>
            <ul className="space-y-2 text-zinc-600">
              <li><a href="#services" className="hover:text-black transition-colors">إدارة صفحات السوشيال ميديا</a></li>
              <li><a href="#services" className="hover:text-black transition-colors">البراندنج والهوية الفاخرة</a></li>
              <li><a href="#services" className="hover:text-black transition-colors">تصميم التغليف والعلب (Packaging)</a></li>
              <li><a href="#services" className="hover:text-black transition-colors">تطوير متاجر شوبيفاي 2.0</a></li>
              <li><a href="#services" className="hover:text-black transition-colors">صناعة محتوى الريلز والتيك توك</a></li>
            </ul>
          </div>

          {/* Col 3: Why Us & Reach */}
          <div>
            <h5 className="font-bold text-zinc-950 mb-3 text-xs tracking-wider uppercase">
              عن الوكالة
            </h5>
            <ul className="space-y-2 text-zinc-600">
              <li><a href="#why-us" className="hover:text-black transition-colors">معايير ميديا مايند</a></li>
              <li><a href="#reach" className="hover:text-black transition-colors">نطاق انتشارنا الدولي</a></li>
              <li><a href="#case-studies" className="hover:text-black transition-colors">سجل المشاريع والأعمال</a></li>
              <li><a href="#testimonials" className="hover:text-black transition-colors">آراء الشركاء والعملاء</a></li>
              <li><a href="#faq" className="hover:text-black transition-colors">الأسئلة الشائعة</a></li>
            </ul>
          </div>

          {/* Col 4: Contact CTA */}
          <div>
            <h5 className="font-bold text-zinc-950 mb-3 text-xs tracking-wider uppercase">
              تواصل معنا
            </h5>
            <div className="space-y-3">
              <p className="text-zinc-600 text-xs">
                جاهز لتطوير علامتك التجارية ومضاعفة مبيعاتك؟
              </p>
              <button
                onClick={onOpenBooking}
                className="w-full py-2.5 px-4 rounded-none bg-zinc-950 hover:bg-black text-white font-bold text-xs flex items-center justify-center gap-2 cursor-pointer transition-colors"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>احجز مكالمة استشارية</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-zinc-500 gap-3">
          <div>
            © {new Date().getFullYear()} MEDIAMIND Agency. جميع الحقوق محفوظة.
          </div>
          <div className="flex items-center gap-4">
            <span className="text-zinc-400">بيروت، لبنان</span>
            <span>•</span>
            <span className="text-zinc-400">دبي، الإمارات العربية المتحدة</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
