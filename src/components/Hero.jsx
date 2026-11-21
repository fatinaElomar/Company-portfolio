import React from 'react';
import { ArrowLeft, TrendingUp, CheckCircle2, Share2, Palette, Layout, Boxes, MapPin, PhoneCall, Sparkles } from 'lucide-react';

export default function Hero({ onOpenBooking }) {
  const projectHighlights = [
    { label: "إدارة السوشيال ميديا", icon: Share2, desc: "إنتاج محتوى فيروزي وتفاعل يومي" },
    { label: "البراندنج الفاخر", icon: Palette, desc: "هويات بصرية تصنع هيبة البراند" },
    { label: "متاجر شوبيفاي والمواقع", icon: Layout, desc: "سرعة تصفح فائقة ومبيعات مضاعفة" },
    { label: "تصميم التغليف والعلب", icon: Boxes, desc: "تجربة فتح صناديق تنتشر فيروسياً" },
  ];

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-white via-zinc-50 to-white text-right">
      {/* Background Soft Gold Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-tr from-amber-200/40 via-gold-100/30 to-transparent blur-[140px] rounded-full pointer-events-none -z-0"></div>
      <div className="absolute top-10 right-10 w-96 h-96 bg-amber-100/40 blur-[100px] rounded-full pointer-events-none"></div>

      {/* Grid pattern overlay in light mode */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e4e4e760_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e760_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge with UAE & Lebanon */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-amber-300/80 text-zinc-800 text-xs sm:text-sm font-medium mb-8 backdrop-blur-md">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-ping"></span>
            <span className="font-bold tracking-wide text-zinc-950">MEDIA MINED</span>
            <span className="text-zinc-300">•</span>
            <span className="text-amber-800 font-bold flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-amber-600" />
              لبنان والإمارات
            </span>
            <span className="text-zinc-300 hidden sm:inline">•</span>
            <span className="text-zinc-600 hidden sm:inline">وكالة السوشيال ميديا والتجارة الإلكترونية المتكاملة</span>
          </div>

          {/* Main Headline in Arabic */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-black tracking-tight text-zinc-950 leading-[1.25] mb-6">
            ندير صفحاتك، نبني متجرك، ونبتكر{' '}
            <span className="text-gold-gradient underline decoration-gold-400/40 underline-offset-8">
              علامات تجارية أيقونية
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-zinc-600 max-w-2xl mx-auto leading-relaxed mb-8 font-normal">
            من مقراتنا في <span className="font-bold text-zinc-900">دبي وبيروت</span>، تتولى وكالة ميديا ماينيد إدارة مشاريعك بالكامل: من تشغيل حسابات السوشيال ميديا وتصميم التغليف الفاخر، إلى تطوير متاجر شوبيفاي فائقة المبيعات.
          </p>

          {/* Core 4 Project Pillars Pills */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto mb-10 text-right">
            {projectHighlights.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-3.5 rounded-none bg-white border border-zinc-200/90 hover:border-gold-500/60 transition-all"
                >
                  <div className="flex items-center gap-2 text-amber-700 mb-1">
                    <Icon className="w-4 h-4" />
                    <span className="text-xs font-bold text-zinc-900">{pillar.label}</span>
                  </div>
                  <p className="text-[11px] text-zinc-500 leading-tight">{pillar.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Single primary CTA: Book a call (احجز مكالمة) */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto px-9 py-4 rounded-full font-bold text-sm tracking-wider bg-gold-gradient text-white-gold-glow hover:shadow-gold-glow-lg transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 flex items-center justify-center gap-2.5 group cursor-pointer"
            >
              <PhoneCall className="w-4 h-4" />
              <span>احجز مكالمة استشارية مع خبرائنا</span>
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            </button>

            <a
              href="#case-studies"
              className="w-full sm:w-auto px-8 py-4 rounded-full font-semibold text-sm bg-white hover:bg-zinc-50 text-zinc-800 border border-zinc-200 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span>استعرض مشاريعنا السابقة</span>
            </a>
          </div>

          {/* Micro-proof points */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-zinc-500 border-t border-zinc-200 pt-8 max-w-3xl mx-auto">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>فريق عمل واستوديوهات في بيروت ودبي</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>شركاء معتمدون لـ Shopify Plus</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>خبرة واسعة في الأسواق الخليجية والعالمية</span>
            </div>
          </div>
        </div>

        {/* Hero Interactive Project Dashboard Card in Light Mode & Arabic */}
        <div className="mt-16 max-w-5xl mx-auto relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-amber-300/40 via-gold-200/30 to-amber-400/40 rounded-none blur-md opacity-60 group-hover:opacity-100 transition duration-500"></div>

          <div className="relative rounded-none bg-white border border-zinc-200 overflow-hidden p-6 sm:p-8">
            {/* Top Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-zinc-100 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></div>
                <div className="text-right">
                  <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider flex items-center gap-2 font-medium">
                    منظومة ميديا ماينيد لإدارة المشاريع • مقرات بيروت ودبي
                  </div>
                  <div className="text-sm font-bold text-zinc-900 flex items-center gap-2 mt-0.5">
                    إدارة السوشيال ميديا • البراندنج الفاخر • واجهات شوبيفاي
                    <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 font-bold">
                      أداء مستقر 100%
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs">
                <span className="text-zinc-500">طريقة التنفيذ:</span>
                <span className="px-2.5 py-1 rounded-md bg-zinc-100 text-zinc-900 border border-zinc-200 font-bold">
                  إدارة شاملة جاهزة (Turnkey)
                </span>
              </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-6">
              <div className="p-4 rounded-none bg-zinc-50 border border-zinc-200/70 hover:border-gold-500/40 transition-colors">
                <div className="text-xs text-zinc-500 mb-1 font-medium">مشاهدات الفيديو المجانية</div>
                <div className="text-xl sm:text-2xl font-bold font-display text-zinc-950 text-gold-gradient">24.6M</div>
                <div className="text-[11px] text-emerald-600 font-bold mt-1 flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" /> مشاهدات الحسابات المدارة
                </div>
              </div>

              <div className="p-4 rounded-none bg-zinc-50 border border-zinc-200/70 hover:border-gold-500/40 transition-colors">
                <div className="text-xs text-zinc-500 mb-1 font-medium">مبيعات شوبيفاي المحققة</div>
                <div className="text-xl sm:text-2xl font-bold font-display text-zinc-950">$2.85M</div>
                <div className="text-[11px] text-emerald-600 font-bold mt-1 flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" /> متاجر إلكترونية مخصصة
                </div>
              </div>

              <div className="p-4 rounded-none bg-zinc-50 border border-zinc-200/70 hover:border-gold-500/40 transition-colors">
                <div className="text-xs text-zinc-500 mb-1 font-medium">ارتفاع القيمة السوقية للبراند</div>
                <div className="text-xl sm:text-2xl font-bold font-display text-amber-700">+140%</div>
                <div className="text-[11px] text-zinc-500 mt-1 font-medium">
                  بفضل التغليف والهوية الفاخرة
                </div>
              </div>

              <div className="p-4 rounded-none bg-zinc-50 border border-zinc-200/70 hover:border-gold-500/40 transition-colors">
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
