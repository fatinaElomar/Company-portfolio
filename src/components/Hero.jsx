import React from 'react';
import { ArrowLeft, TrendingUp, CheckCircle2, Share2, Palette, Layout, Boxes, MapPin, PhoneCall, Sparkles } from 'lucide-react';
import logoMark from '../assets/logo-black-mark.png';

export default function Hero({ onOpenBooking }) {
  const projectHighlights = [
    { label: "إدارة السوشيال ميديا", icon: Share2, desc: "إنتاج محتوى فيروزي وتفاعل يومي متواصل" },
    { label: "البراندنج الفاخر", icon: Palette, desc: "هويات بصرية تصنع هيبة وتفرد البراند" },
    { label: "متاجر شوبيفاي والمواقع", icon: Layout, desc: "سرعة تصفح فائقة ومعدلات تحويل قياسية" },
    { label: "تصميم التغليف والعلب", icon: Boxes, desc: "صناديق ملكية وتجربة فتح علب ساحرة" },
  ];

  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-24 overflow-hidden bg-white text-right">
      {/* ===== MONOCHROME ARCHITECTURAL BACKGROUND ===== */}
      
      {/* 1. Soft Ambient Gray Atmospheric Glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-b from-zinc-200/50 via-zinc-100/30 to-transparent blur-[140px] rounded-full pointer-events-none -z-0"></div>
      <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-zinc-100/60 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute top-40 left-0 w-[400px] h-[400px] bg-zinc-200/40 blur-[120px] rounded-full pointer-events-none"></div>

      {/* 2. Geometric Minimalist Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.35]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="mono-grid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#71717A" strokeWidth="0.5" strokeOpacity="0.2" />
              <circle cx="48" cy="0" r="1.2" fill="#18181B" fillOpacity="0.3" />
              <circle cx="0" cy="48" r="1.2" fill="#18181B" fillOpacity="0.3" />
            </pattern>
            <radialGradient id="mono-mask" cx="50%" cy="30%" r="65%">
              <stop offset="0%" stopColor="#000" stopOpacity="1" />
              <stop offset="70%" stopColor="#000" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#000" stopOpacity="0" />
            </radialGradient>
            <mask id="grid-fade">
              <rect width="100%" height="100%" fill="url(#mono-mask)" />
            </mask>
          </defs>
          <rect width="100%" height="100%" fill="url(#mono-grid)" mask="url(#grid-fade)" />
        </svg>
      </div>

      {/* 3. Fine Top Horizon Line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-zinc-300 to-transparent"></div>

      {/* ===== HERO CONTENT ===== */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          
          {/* Dual Location Badge with MEDIAMIND logo mark */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-none bg-zinc-50 border border-zinc-200 text-zinc-900 text-xs font-medium mb-6">
            <img src={logoMark} alt="Logo" className="w-4 h-4 object-contain" />
            <span className="font-extrabold tracking-widest text-zinc-950 font-display">MEDIAMIND</span>
            <span className="text-zinc-300">•</span>
            <span className="text-zinc-700 font-bold flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-zinc-900" />
              <span>بيروت 🇱🇧 • دبي 🇦🇪</span>
            </span>
            <span className="text-zinc-300 hidden sm:inline">•</span>
            <span className="text-zinc-500 hidden sm:inline text-[11px]">وكالة السوشيال ميديا والتجارة الرقمية</span>
          </div>

          {/* Main Headline — Compact, balanced, elegant size */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-display font-black tracking-tight text-zinc-950 leading-snug sm:leading-tight md:leading-[1.25] mb-5">
            ندير صفحاتك، نبني متجرك، ونبتكر{' '}
            <span className="underline decoration-zinc-400 underline-offset-8">
              علامات تجارية أيقونية
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-zinc-600 max-w-xl mx-auto leading-relaxed mb-8 font-normal">
            من مقراتنا في <span className="font-bold text-zinc-900">دبي وبيروت</span>، تتولى وكالة ميديا مايند قيادة حضورك الرقمي: من تشغيل حسابات السوشيال ميديا وتصميم التغليف، إلى تطوير متاجر شوبيفاي فائقة المبيعات.
          </p>

          {/* Core 4 Project Pillars Quick Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 max-w-2xl mx-auto mb-8 text-right">
            {projectHighlights.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-3.5 rounded-none bg-white border border-zinc-200 hover:border-black transition-all group"
                >
                  <div className="flex items-center gap-2 text-zinc-900 mb-1">
                    <div className="w-6 h-6 rounded-none bg-zinc-100 flex items-center justify-center group-hover:bg-zinc-950 group-hover:text-white transition-all">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs font-bold text-zinc-900">{pillar.label}</span>
                  </div>
                  <p className="text-[11px] text-zinc-500 leading-tight">{pillar.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Single primary CTA: Book a call (احجز مكالمة استشارية) */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12">
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto px-8 py-3.5 rounded-none font-bold text-xs tracking-wider bg-zinc-950 hover:bg-black text-white transition-all duration-200 flex items-center justify-center gap-2.5 group cursor-pointer"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>احجز مكالمة استشارية مع خبرائنا</span>
              <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
            </button>

            <a
              href="#case-studies"
              className="w-full sm:w-auto px-7 py-3.5 rounded-none font-semibold text-xs bg-white hover:bg-zinc-100 text-zinc-800 border border-zinc-300 transition-all duration-200 flex items-center justify-center gap-2"
            >
              <span>استعرض سابقة أعمالنا</span>
            </a>
          </div>

          {/* Micro-proof points */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs text-zinc-600 border-t border-zinc-200 pt-6 max-w-2xl mx-auto">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-zinc-900 shrink-0" />
              <span>استوديوهات وفريق عمل في بيروت ودبي</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-zinc-900 shrink-0" />
              <span>شركاء معتمدون لـ Shopify Plus</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-zinc-900 shrink-0" />
              <span>خبرة واسعة في الأسواق الإقليمية والدولية</span>
            </div>
          </div>
        </div>

        {/* Hero Interactive Project Dashboard Card — Clean Gray/White/Black */}
        <div className="mt-12 max-w-4xl mx-auto relative group">
          <div className="relative rounded-none bg-white border border-zinc-300 overflow-hidden p-5 sm:p-7">
            {/* Top Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 mb-5 border-b border-zinc-100 gap-3">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-none bg-zinc-950 animate-pulse"></div>
                <div className="text-right">
                  <div className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider">
                    منظومة MEDIAMIND • مقرات بيروت ودبي
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-zinc-900 flex items-center gap-2 mt-0.5">
                    إدارة السوشيال ميديا • البراندنج الفاخر • واجهات شوبيفاي
                    <span className="text-[10px] px-2 py-0.5 rounded-none bg-zinc-100 text-zinc-800 border border-zinc-200 font-bold">
                      أداء مستقر 100%
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs">
                <span className="text-zinc-500">طريقة التنفيذ:</span>
                <span className="px-2.5 py-1 rounded-none bg-zinc-100 text-zinc-900 border border-zinc-200 font-bold text-[11px]">
                  إدارة شاملة جاهزة (Turnkey)
                </span>
              </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-5">
              <div className="p-3.5 rounded-none bg-zinc-50 border border-zinc-200 hover:border-black transition-colors">
                <div className="text-[11px] text-zinc-500 mb-1 font-medium">مشاهدات الفيديو المجانية</div>
                <div className="text-xl sm:text-2xl font-bold font-display text-zinc-950">24.6M</div>
                <div className="text-[10px] text-zinc-600 font-bold mt-1 flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" /> مشاهدات وتفاعل الحسابات
                </div>
              </div>

              <div className="p-3.5 rounded-none bg-zinc-50 border border-zinc-200 hover:border-black transition-colors">
                <div className="text-[11px] text-zinc-500 mb-1 font-medium">معدل نمو مبيعات المتاجر</div>
                <div className="text-xl sm:text-2xl font-bold font-display text-zinc-950">+380%</div>
                <div className="text-[10px] text-zinc-600 font-bold mt-1 flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" /> نمو سنوي لعلامات عملائنا
                </div>
              </div>

              <div className="p-3.5 rounded-none bg-zinc-50 border border-zinc-200 hover:border-black transition-colors">
                <div className="text-[11px] text-zinc-500 mb-1 font-medium">ارتفاع القيمة السوقية للبراند</div>
                <div className="text-xl sm:text-2xl font-bold font-display text-zinc-950">+140%</div>
                <div className="text-[10px] text-zinc-500 mt-1 font-medium">
                  بفضل التغليف والهوية الفاخرة
                </div>
              </div>

              <div className="p-3.5 rounded-none bg-zinc-50 border border-zinc-200 hover:border-black transition-colors">
                <div className="text-[11px] text-zinc-500 mb-1 font-medium">معدل تحويل الزوار إلى مشترين</div>
                <div className="text-xl sm:text-2xl font-bold font-display text-zinc-950">4.8%</div>
                <div className="text-[10px] text-zinc-600 mt-1 font-bold">
                  سرعة دفع وشراء بضغطة زر
                </div>
              </div>
            </div>

            {/* 4 Pillars in Action */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2.5 text-xs">
              <div className="p-3 rounded-none bg-white border border-zinc-200 border-r-2 border-r-zinc-900 text-right">
                <div className="font-bold text-zinc-900 flex items-center gap-1.5 mb-1">
                  <Share2 className="w-3.5 h-3.5 text-zinc-700" />
                  صفحات السوشيال ميديا
                </div>
                <p className="text-zinc-500 text-[11px]">ريلز يومية، كتابة محتوى بيعي، وتفاعل فوري مع المتابعين.</p>
              </div>

              <div className="p-3 rounded-none bg-white border border-zinc-200 border-r-2 border-r-zinc-700 text-right">
                <div className="font-bold text-zinc-900 flex items-center gap-1.5 mb-1">
                  <Palette className="w-3.5 h-3.5 text-zinc-700" />
                  البراندنج الفاخر
                </div>
                <p className="text-zinc-500 text-[11px]">حزم شعارات حصرية، خطوط متناسقة، ودليل العلامة الملكي.</p>
              </div>

              <div className="p-3 rounded-none bg-white border border-zinc-200 border-r-2 border-r-zinc-900 text-right">
                <div className="font-bold text-zinc-900 flex items-center gap-1.5 mb-1">
                  <Boxes className="w-3.5 h-3.5 text-zinc-700" />
                  التغليف والبوكسات
                </div>
                <p className="text-zinc-500 text-[11px]">صناديق مقواة وتجارب فتح علب محفزة للنشر.</p>
              </div>

              <div className="p-3 rounded-none bg-white border border-zinc-200 border-r-2 border-r-zinc-700 text-right">
                <div className="font-bold text-zinc-900 flex items-center gap-1.5 mb-1">
                  <Layout className="w-3.5 h-3.5 text-zinc-700" />
                  متاجر شوبيفاي
                </div>
                <p className="text-zinc-500 text-[11px]">سرعة فائقة بالثواني، شراء سريع، وربط بوابات الدفع.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
