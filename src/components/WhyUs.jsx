import React from 'react';
import { ShieldCheck, Zap, Layers, Users, CheckCircle, PhoneCall } from 'lucide-react';

export default function WhyUs({ onOpenBooking }) {
  const differentiators = [
    {
      icon: Zap,
      title: "عزيمة ومرونة مثبتة في الميدان",
      subtitle: "أخلاقيات عمل نابعة من بيروت ودبي",
      description: "جذورنا في لبنان والإمارات علمتنا الابتكار، والقدرة الفائقة على حل أصعب التحديات التسويقية والتقنية تحت أي ضغط وبأعلى معايير الجودة العالمية."
    },
    {
      icon: Layers,
      title: "منظومة تجارة متكاملة حقيقية",
      subtitle: "سوشيال + براندنج + تغليف + متجر",
      description: "لا حاجة لتشتيت نفسك بين 4 وكالات مختلفة. نحن نصمم العلب، ننتج فيديوهات الريلز والتيك توك، ونبرمج متجر الشوبيفاي تحت سقف واحد وبرؤية موحدة."
    },
    {
      icon: ShieldCheck,
      title: "سرعة واستقرار تشغيلي 100%",
      subtitle: "متاجر لا تتوقف أثناء ذروة الطلب",
      description: "بنيتنا البرمجية لمتاجر شوبيفاي مهيأة لتحمل أكثر من 25 ألف زائر في نفس اللحظة أثناء إطلاقات المنتجات، مع تحميل خاطف وأمان تام عند الدفع."
    },
    {
      icon: Users,
      title: "تواصل مباشر مع كبار الخبراء",
      subtitle: "لا يوجد وسطاء مبتدئون",
      description: "عند التعاقد مع ميديا ماينيد، تتواصل مباشرة مع مديري الإبداع والنمو ومهندسي شوبيفاي المتخصصين، الذين يملكون فهماً حقيقياً لأرقامك وأرباحك."
    }
  ];

  return (
    <section id="why-us" className="py-24 bg-zinc-50 border-y border-zinc-200 relative overflow-hidden text-right">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-widest mb-3">
            معايير وكالة ميديا ماينيد
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl leading-snug font-display font-extrabold text-zinc-950 tracking-tight mb-4">
            لماذا نحن؟ لمن يقدّرون{' '}
            <span className="text-gold-gradient">الجودة والنتائج الحقيقية</span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 leading-relaxed font-normal">
            وليس مجرد أرقام وهمية أو وعود دعائية. إليك الأسباب التي تجعل أصحاب العلامات التجارية الرائدة في الإمارات ولبنان يختارون ميديا ماينيد.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {differentiators.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-7 rounded-none bg-white border border-zinc-200 hover:border-gold-500/70 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-none bg-amber-50 border border-amber-200/80 flex items-center justify-center text-amber-700 mb-6 group-hover:bg-gold-gradient group-hover:text-white group-hover:border-transparent transition-all">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-amber-800 font-bold mb-1">
                    {item.subtitle}
                  </div>
                  <h3 className="text-xl font-display font-bold text-zinc-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-zinc-100 flex items-center gap-1.5 text-xs font-bold text-zinc-900 group-hover:text-amber-800 transition-colors">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  <span>معيار احترافي مضمون</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
