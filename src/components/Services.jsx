import React from 'react';
import { projectPillars } from '../data/portfolioData';
import { 
  Share2, 
  Palette, 
  Layout, 
  Boxes, 
  Check, 
  PhoneCall, 
  Clock, 
  Sparkles,
  ArrowLeft
} from 'lucide-react';

const iconMap = {
  Share2,
  Palette,
  Layout,
  Boxes
};

export default function Services({ onOpenBooking }) {
  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden text-right">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-amber-100/30 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gold-100/30 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-widest mb-3">
            مجالات عملنا وتخصصنا
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-zinc-950 tracking-tight mb-4">
            نتولى مشاريعك <span className="text-gold-gradient">من الفكرة إلى الإطلاق الكامل</span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 leading-relaxed font-normal">
            سواء كنت ترغب في تسليمنا إدارة صفحات السوشيال ميديا، تصميم هوية بصرية وتغليف فاخر، أو تطوير متجر شوبيفاي احترافي يحقق أعلى نسب الشراء.
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {projectPillars.map((pillar, index) => {
            const IconComponent = iconMap[pillar.icon] || Sparkles;
            return (
              <div
                key={index}
                className="group relative rounded-none bg-zinc-50/70 border border-zinc-200 hover:border-gold-500 p-8 sm:p-10 transition-all duration-300 hover:bg-white flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-none bg-white border border-zinc-200 flex items-center justify-center text-amber-700 group-hover:bg-gold-gradient group-hover:text-white group-hover:border-transparent transition-all duration-300">
                      <IconComponent className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-mono tracking-wider text-amber-800 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 font-bold">
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-display font-bold text-zinc-900 group-hover:text-amber-800 transition-colors mb-2">
                    {pillar.title}
                  </h3>

                  <div className="text-xs text-zinc-500 mb-4 flex items-center gap-1.5 font-medium">
                    <Clock className="w-3.5 h-3.5 text-amber-600" />
                    <span>الجدول الزمني لتنفيذ المشروع: {pillar.timeline}</span>
                  </div>

                  <p className="text-zinc-600 text-sm leading-relaxed mb-6 font-normal">
                    {pillar.description}
                  </p>
                </div>

                <div>
                  <div className="border-t border-zinc-200 pt-6 mb-6">
                    <div className="text-xs font-bold uppercase tracking-wider text-zinc-600 mb-3">
                      مخرجات هذا المشروع بالتفصيل:
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {pillar.deliverables.map((item, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-2 text-xs text-zinc-700 font-medium">
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={onOpenBooking}
                    className="w-full py-3.5 rounded-none text-xs font-bold tracking-wider text-white bg-zinc-900 hover:bg-gold-gradient transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <PhoneCall className="w-3.5 h-3.5" />
                    <span>احجز مكالمة لمناقشة هذا المشروع</span>
                    <ArrowLeft className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Project Inquiry Banner in Light Mode & Arabic */}
        <div className="p-8 sm:p-10 rounded-none bg-gradient-to-l from-amber-50 via-white to-amber-50/60 border border-amber-200/80 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-800">
              متطلبات خاصة بشركتك؟
            </span>
            <h4 className="text-xl sm:text-2xl font-display font-bold text-zinc-950 mt-1">
              لديك براند جديد أو محفظة علامات تجارية متعددة؟
            </h4>
            <p className="text-xs sm:text-sm text-zinc-600 mt-1">
              نصمم نطاق عمل مخصص يجمع بين إدارة السوشيال ميديا، تصميم التغليف، وتطوير المتجر الإلكتروني.
            </p>
          </div>

          <button
            onClick={onOpenBooking}
            className="px-7 py-3.5 rounded-full text-xs font-bold tracking-wider bg-zinc-900 text-white hover:bg-gold-gradient transition-all whitespace-nowrap cursor-pointer flex items-center gap-2"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>احجز مكالمة استشارية</span>
          </button>
        </div>
      </div>
    </section>
  );
}
