import React from 'react';
import { Search, PenTool, Flame, Rocket, PhoneCall, ArrowLeft } from 'lucide-react';

export default function Process({ onOpenBooking }) {
  const steps = [
    {
      num: "01",
      icon: Search,
      phase: "المرحلة الأولى: الأيام 1 - 7",
      title: "التشخيص العميق وفحص القنوات",
      description: "نقوم بدراسة رحلة العميل بالتفصيل من أول مشاهدة على إنستغرام وتيك توك حتى إتمام الطلب على المتجر. نحدد نقاط تسرب المبيعات وثغرات المحتوى بدقة."
    },
    {
      num: "02",
      icon: PenTool,
      phase: "المرحلة الثانية: الأيام 8 - 20",
      title: "بناء المتجر وهندسة الهوية",
      description: "نبرمج متجر شوبيفاي أو نجدده بالكامل ليكون فائق السرعة على الهاتف، مع تصميم الهوية والعلب وخيارات الشراء الإضافي (Upsells) لرفع قيمة السلة."
    },
    {
      num: "03",
      icon: Flame,
      phase: "المرحلة الثالثة: الأيام 21 - 35",
      title: "إنتاج المحتوى الفيروزي والتغليف",
      description: "فريقنا المتخصص في بيروت ودبي يكتب وينتج فيديوهات الريلز والتيك توك الجذابة، مع تسليم الملفات النهائية لتصنيع العلب وتجربة فتح الصندوق الفاخرة."
    },
    {
      num: "04",
      icon: Rocket,
      phase: "المرحلة الرابعة: اليوم 36 فصاعداً",
      title: "التوسع ومضاعفة الأرباح المتكررة",
      description: "نطلق الحملات الإعلانية المربحة على ميتا وتيك توك، مع تفعيل رسائل الإيميل والـ SMS التلقائية لضمان تكرار الشراء من العملاء ورفع أرباحك الصافية."
    }
  ];

  return (
    <section className="py-24 bg-white border-t border-zinc-200 relative overflow-hidden text-right">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-300 text-zinc-900 text-xs font-bold uppercase tracking-widest mb-3">
            منهجية العمل المحكمة
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-zinc-950 mb-3 font-display font-extrabold text-zinc-950 tracking-tight mb-4">
            كيف تنفذ ميديا ماينيد <span className="text-zinc-950">مشروعك خطوة بخطوة</span>
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
            منظومة عمل مجربة من 4 مراحل مصممة لنقل المتاجر والشركات من النتائج العشوائية إلى نمو متصاعد واستقرار تشغيلي مستمر.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="relative rounded-none bg-zinc-50 border border-zinc-200 p-7 flex flex-col justify-between hover:border-zinc-900/80 hover:bg-white transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-display font-black text-3xl text-zinc-300 group-hover:text-zinc-800 transition-colors">
                      {step.num}
                    </span>
                    <div className="w-10 h-10 rounded-none bg-white border border-zinc-200 flex items-center justify-center text-zinc-800 group-hover:bg-zinc-950 group-hover:text-white group-hover:border-transparent transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="text-[11px] font-mono uppercase text-zinc-900 tracking-wider mb-2 font-bold">
                    {step.phase}
                  </div>
                  <h3 className="text-lg font-display font-bold text-zinc-950 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-zinc-200">
                  <span className="text-[11px] text-zinc-500 font-mono flex items-center gap-1 group-hover:text-zinc-900 transition-colors font-bold">
                    معايير تنفيذ دقيقة ومضمونة
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Banner CTA in Light Mode & Arabic */}
        <div className="mt-16 p-8 sm:p-10 rounded-none bg-gradient-to-l from-amber-50 via-white to-amber-50/70 border border-zinc-300 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-zinc-900 mb-1">
              جاهز لبدء الانطلاق؟
            </div>
            <h3 className="text-2xl font-display font-bold text-zinc-950">
              دعنا نناقش متجرك وحساباتك هذا الأسبوع.
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 mt-1">
              محادثة مباشرة مع كبار خبرائنا في بيروت ودبي بدون أي التزام أو ضغوط بيعية.
            </p>
          </div>

          <button
            onClick={onOpenBooking}
            className="px-8 py-3.5 rounded-full text-xs font-bold tracking-wider bg-zinc-900 hover:bg-zinc-950 text-white whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer"
          >
            <PhoneCall className="w-4 h-4" />
            <span>احجز مكالمة استشارية الآن</span>
            <ArrowLeft className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
