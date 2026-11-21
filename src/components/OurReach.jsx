import React from 'react';
import { Globe, MapPin, Clock, PhoneCall } from 'lucide-react';

export default function OurReach({ onOpenBooking }) {
  const markets = [
    {
      country: "الإمارات العربية المتحدة",
      cities: "دبي وأبوظبي",
      badge: "المركز التجاري",
      focus: "التجارة الإلكترونية الفاخرة، شوبيفاي بلس وإعلانات السوشيال",
      flag: "🇦🇪"
    },
    {
      country: "لبنان",
      cities: "بيروت سنترال",
      badge: "استوديو الإنتاج",
      focus: "صناعة الفيديوهات، هندسة التغليف والعلب، وبناء الهويات",
      flag: "🇱🇧"
    },
    {
      country: "المملكة العربية السعودية",
      cities: "الرياض وجدة",
      badge: "نمو فائق",
      focus: "العطور، الأزياء والعبايات، وإطلاقات الـ DTC السريعة",
      flag: "🇸🇦"
    },
    {
      country: "المملكة المتحدة",
      cities: "لندن",
      badge: "توسع دولي",
      focus: "متاجر شوبيفاي للأزياء ومستحضرات التجميل العضوية",
      flag: "🇬🇧"
    },
    {
      country: "الولايات المتحدة الأمريكية",
      cities: "نيويورك ولوس أنجلوس",
      badge: "تجارة رقمية عالمية",
      focus: "تكامل تيك توك شوب وحملات صناع المحتوى الفيروسية",
      flag: "🇺🇸"
    }
  ];

  return (
    <section id="reach" className="py-24 bg-white relative overflow-hidden text-right">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-widest mb-3">
            <Globe className="w-3.5 h-3.5 text-amber-600" />
            نطاق انتشارنا وحضورنا
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-zinc-950 tracking-tight mb-4">
            خدماتنا تمتد عبر <span className="text-gold-gradient">لبنان، الإمارات، والأسواق الدولية</span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 leading-relaxed font-normal">
            مع استوديوهاتنا في بيروت ودبي، ندير مشاريع تجارة وسوشيال ميديا لعلامات كبرى في الخليج وأوروبا وأمريكا بكل سلاسة واحترافية.
          </p>
        </div>

        {/* Markets Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
          {markets.map((m, idx) => (
            <div
              key={idx}
              className="p-5 rounded-none bg-zinc-50 border border-zinc-200 hover:border-gold-500 hover:bg-white transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl">{m.flag}</span>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-amber-800 px-2 py-0.5 rounded bg-amber-100/60 font-bold">
                    {m.badge}
                  </span>
                </div>
                <h4 className="font-display font-bold text-base text-zinc-900 mb-0.5">
                  {m.country}
                </h4>
                <div className="text-xs text-amber-700 font-bold mb-3 flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  {m.cities}
                </div>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  {m.focus}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-zinc-200/60 flex items-center gap-1 text-[11px] text-zinc-500 font-medium">
                <Clock className="w-3 h-3 text-emerald-600" />
                <span>تغطية تشغيلية مستمرة</span>
              </div>
            </div>
          ))}
        </div>

        {/* Reach Banner in Arabic */}
        <div className="p-8 sm:p-10 rounded-none bg-zinc-950 text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-gold-400 font-bold mb-1">
              تعاون فوري بدون حواجز جغرافية
            </div>
            <h3 className="text-2xl font-display font-bold text-white">
              قنوات تواصل يومية عبر Slack و WhatsApp
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1 max-w-xl">
              ننسق معك يومياً مع مراعاة فروق التوقيت بين بيروت ودبي والرياض ولندن. تحصل على تحديثات أسبوعية وتقارير نمو دورية واضحة.
            </p>
          </div>

          <button
            onClick={onOpenBooking}
            className="px-8 py-3.5 rounded-full text-xs font-bold tracking-wider bg-gold-gradient text-white whitespace-nowrap-gold-glow hover:shadow-gold-glow-lg transition-all cursor-pointer flex items-center gap-2"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>احجز مكالمة لمشروعك الدولي</span>
          </button>
        </div>
      </div>
    </section>
  );
}
