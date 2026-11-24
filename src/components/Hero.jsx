import React from 'react';
import { ArrowLeft, TrendingUp, CheckCircle2, Share2, Palette, Layout, Boxes, MapPin, PhoneCall, Sparkles, Star, ShieldCheck } from 'lucide-react';

export default function Hero({ onOpenBooking }) {
  const projectHighlights = [
    { label: "إدارة السوشيال ميديا", icon: Share2, desc: "إنتاج محتوى فيروزي وتفاعل يومي متواصل" },
    { label: "البراندنج الفاخر", icon: Palette, desc: "هويات بصرية تصنع هيبة وتفرد البراند" },
    { label: "متاجر شوبيفاي والمواقع", icon: Layout, desc: "سرعة تصفح فائقة ومعدلات تحويل قياسية" },
    { label: "تصميم التغليف والعلب", icon: Boxes, desc: "صناديق ملكية وتجربة فتح علب ساحرة" },
  ];

  return (
    <section className="relative pt-32 pb-24 md:pt-44 md:pb-32 overflow-hidden bg-[#FFFFFF] text-right">
      {/* ===== LUXURY BACKGROUND ARCHITECTURE ===== */}
      
      {/* 1. Deep Luxury Ambient Radial Glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-gradient-to-b from-amber-200/35 via-gold-100/25 to-transparent blur-[160px] rounded-full pointer-events-none -z-0"></div>
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-amber-100/50 via-gold-100/20 to-transparent blur-[140px] rounded-full pointer-events-none"></div>
      <div className="absolute top-40 left-0 w-[450px] h-[450px] bg-gradient-to-br from-amber-200/30 via-zinc-100/40 to-transparent blur-[130px] rounded-full pointer-events-none"></div>

      {/* 2. Bespoke Luxury Architectural Grid & Diamonds Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.45]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="luxury-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#D4AF37" strokeWidth="0.5" strokeOpacity="0.2" />
              <circle cx="60" cy="0" r="1.5" fill="#B8860B" fillOpacity="0.35" />
              <circle cx="0" cy="60" r="1.5" fill="#B8860B" fillOpacity="0.35" />
              <path d="M 30 25 L 35 30 L 30 35 L 25 30 Z" fill="none" stroke="#D4AF37" strokeWidth="0.5" strokeOpacity="0.18" />
            </pattern>
            <radialGradient id="fade-mask" cx="50%" cy="30%" r="65%">
              <stop offset="0%" stopColor="#000" stopOpacity="1" />
              <stop offset="70%" stopColor="#000" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#000" stopOpacity="0" />
            </radialGradient>
            <mask id="grid-mask">
              <rect width="100%" height="100%" fill="url(#fade-mask)" />
            </mask>
          </defs>
          <rect width="100%" height="100%" fill="url(#luxury-grid)" mask="url(#grid-mask)" />
        </svg>
      </div>

      {/* 3. Subtle Luxury Gold Diagonal Light Ray */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-b from-amber-300/15 via-transparent to-transparent -rotate-45 transform pointer-events-none blur-3xl"></div>

      {/* 4. Fine Horizon Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-amber-300/60 to-transparent"></div>

      {/* ===== HERO CONTENT CONTAINER ===== */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          
          {/* Dual Headquarters Luxury Badge (Lebanon & UAE) */}
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-none bg-white/95 border border-amber-300/90 text-zinc-800 text-xs sm:text-sm font-medium mb-8 backdrop-blur-md transition-all hover:border-gold-500">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="font-extrabold tracking-widest text-zinc-950 font-display">MEDIA MINED</span>
            <span className="text-zinc-300">•</span>
            <span className="text-amber-900 font-bold flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-amber-600" />
              <span>بيروت 🇱🇧 • دبي 🇦🇪</span>
            </span>
            <span className="text-zinc-300 hidden sm:inline">•</span>
            <span className="text-zinc-600 hidden sm:inline font-medium">وكالة السوشيال ميديا والتجارة الفاخرة</span>
          </div>

          {/* Main Headline in Majestic Arabic Typography */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-black tracking-tight text-zinc-950 leading-[1.25] mb-6">
            ندير صفحاتك، نبني متجرك، ونبتكر{' '}
            <span className="text-gold-gradient relative inline-block">
              علامات تجارية أيقونية
              <span className="absolute bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-amber-400 to-transparent"></span>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-zinc-600 max-w-2xl mx-auto leading-relaxed mb-10 font-normal">
            من مقراتنا في <span className="font-bold text-zinc-900">دبي وبيروت</span>، تتولى وكالة ميديا ماينيد قيادة حضورك الرقمي بالكامل: من تشغيل حسابات السوشيال ميديا وتصميم التغليف الفاخر، إلى تطوير متاجر شوبيفاي فائقة السرعة والمبيعات.
          </p>

          {/* Core 4 Project Pillars Quick Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto mb-10 text-right">
            {projectHighlights.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-4 rounded-none bg-white/90 border border-zinc-200 hover:border-gold-500/80 hover:bg-white transition-all group"
                >
                  <div className="flex items-center gap-2 text-amber-700 mb-1.5">
                    <div className="w-6 h-6 rounded-none bg-amber-50 border border-amber-200/60 flex items-center justify-center group-hover:bg-gold-gradient group-hover:text-white transition-all">
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
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto px-10 py-4 rounded-full font-bold text-sm tracking-wider bg-gold-gradient text-white transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 flex items-center justify-center gap-2.5 group cursor-pointer"
            >
              <PhoneCall className="w-4 h-4" />
              <span>احجز مكالمة استشارية مع خبرائنا</span>
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            </button>

            <a
              href="#case-studies"
              className="w-full sm:w-auto px-8 py-4 rounded-full font-semibold text-sm bg-white hover:bg-zinc-50 text-zinc-800 border border-zinc-200 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span>استعرض سابقة أعمالنا</span>
            </a>
          </div>

          {/* Micro-proof points */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-zinc-600 border-t border-zinc-200/90 pt-8 max-w-3xl mx-auto">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>استوديوهات وفريق عمل في بيروت ودبي</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>شركاء معتمدون لـ Shopify Plus</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>خبرة واسعة في أسواق الخليج وأوروبا</span>
            </div>
          </div>
        </div>

        {/* Hero Interactive Project Dashboard Card */}
        <div className="mt-16 max-w-5xl mx-auto relative group">
          {/* Subtle Golden Border Glow Accent */}
          <div className="absolute -inset-[1px] bg-gradient-to-r from-amber-300/40 via-gold-400/40 to-amber-300/40 rounded-none pointer-events-none opacity-80 group-hover:opacity-100 transition duration-500"></div>

          <div className="relative rounded-none bg-white border border-zinc-200 overflow-hidden p-6 sm:p-8">
            {/* Top Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-zinc-100 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-none bg-emerald-500 animate-pulse"></div>
                <div className="text-right">
                  <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider flex items-center gap-2 font-medium">
                    منظومة ميديا ماينيد لإدارة المشاريع • مقرات بيروت ودبي
                  </div>
                  <div className="text-sm font-bold text-zinc-900 flex items-center gap-2 mt-0.5">
                    إدارة السوشيال ميديا • البراندنج الفاخر • واجهات شوبيفاي
                    <span className="text-[10px] px-2 py-0.5 rounded-none bg-emerald-50 text-emerald-700 border border-emerald-200 font-bold">
                      أداء مستقر 100%
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs">
                <span className="text-zinc-500">طريقة التنفيذ:</span>
                <span className="px-3 py-1 rounded-none bg-zinc-100 text-zinc-900 border border-zinc-200 font-bold">
                  إدارة شاملة جاهزة (Turnkey)
                </span>
              </div>
            </div>

            {/* Metrics Grid — Pure Performance & Growth (No Prices) */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-6">
              <div className="p-4 rounded-none bg-zinc-50 border border-zinc-200/80 hover:border-gold-500/50 transition-colors">
                <div className="text-xs text-zinc-500 mb-1 font-medium">مشاهدات الفيديو المجانية</div>
                <div className="text-xl sm:text-2xl font-bold font-display text-zinc-950 text-gold-gradient">24.6M</div>
                <div className="text-[11px] text-emerald-600 font-bold mt-1 flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" /> مشاهدات وتفاعل الحسابات
                </div>
              </div>

              <div className="p-4 rounded-none bg-zinc-50 border border-zinc-200/80 hover:border-gold-500/50 transition-colors">
                <div className="text-xs text-zinc-500 mb-1 font-medium">معدل نمو مبيعات المتاجر</div>
                <div className="text-xl sm:text-2xl font-bold font-display text-zinc-950 text-gold-gradient">+380%</div>
                <div className="text-[11px] text-emerald-600 font-bold mt-1 flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" /> نمو سنوي لعلامات عملائنا
                </div>
              </div>

              <div className="p-4 rounded-none bg-zinc-50 border border-zinc-200/80 hover:border-gold-500/50 transition-colors">
                <div className="text-xs text-zinc-500 mb-1 font-medium">ارتفاع القيمة السوقية للبراند</div>
                <div className="text-xl sm:text-2xl font-bold font-display text-amber-700">+140%</div>
                <div className="text-[11px] text-zinc-500 mt-1 font-medium">
                  بفضل التغليف والهوية الفاخرة
                </div>
              </div>

              <div className="p-4 rounded-none bg-zinc-50 border border-zinc-200/80 hover:border-gold-500/50 transition-colors">
                <div className="text-xs text-zinc-500 mb-1 font-medium">معدل تحويل الزوار إلى مشترين</div>
                <div className="text-xl sm:text-2xl font-bold font-display text-zinc-950">4.8%</div>
                <div className="text-[11px] text-amber-700 mt-1 font-bold">
                  سرعة دفع وشراء بضغطة زر
                </div>
              </div>
            </div>

            {/* 4 Pillars in Action */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs">
              <div className="p-3.5 rounded-none bg-white border border-zinc-200 border-r-4 border-r-amber-500 text-right">
                <div className="font-bold text-zinc-900 flex items-center gap-1.5 mb-1">
                  <Share2 className="w-3.5 h-3.5 text-amber-600" />
                  صفحات السوشيال ميديا
                </div>
                <p className="text-zinc-500 text-[11px]">ريلز يومية، كتابة محتوى بيعي، وتفاعل فوري مع المتابعين.</p>
              </div>

              <div className="p-3.5 rounded-none bg-white border border-zinc-200 border-r-4 border-r-amber-600 text-right">
                <div className="font-bold text-zinc-900 flex items-center gap-1.5 mb-1">
                  <Palette className="w-3.5 h-3.5 text-amber-600" />
                  البراندنج الفاخر
                </div>
                <p className="text-zinc-500 text-[11px]">حزم شعارات حصرية، خطوط متناسقة، ودليل العلامة الملكي.</p>
              </div>

              <div className="p-3.5 rounded-none bg-white border border-zinc-200 border-r-4 border-r-amber-500 text-right">
                <div className="font-bold text-zinc-900 flex items-center gap-1.5 mb-1">
                  <Boxes className="w-3.5 h-3.5 text-amber-600" />
                  التغليف والبوكسات
                </div>
                <p className="text-zinc-500 text-[11px]">صناديق مقواة، فويل ذهبي، وتجارب فتح علب محفزة للنشر.</p>
              </div>

              <div className="p-3.5 rounded-none bg-white border border-zinc-200 border-r-4 border-r-amber-700 text-right">
                <div className="font-bold text-zinc-900 flex items-center gap-1.5 mb-1">
                  <Layout className="w-3.5 h-3.5 text-amber-600" />
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
