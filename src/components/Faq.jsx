import React, { useState } from 'react';
import { ChevronDown, HelpCircle, PhoneCall, MessageCircle } from 'lucide-react';

export default function Faq({ onOpenBooking }) {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "أين تقع مكاتب وكالة MEDIAMIND وهل يمكن اللقاء حضورياً؟",
      a: "تمتلك MEDIAMIND مقرين إقليميين رئيسيين: مركز الأعمال والتوسع التجاري في داون تاون دبي (الإمارات)، واستوديو الإنتاج الفني وتصاميم الهوية في بيروت سنترال (لبنان). نرحب دائماً بلقاء عملائنا حضورياً في مكاتبنا بدبي وبيروت، إضافة إلى إدارتنا لمشاريع العملاء دولياً بكل سلاسة."
    },
    {
      q: "ماذا تشمل خدمة إدارة صفحات السوشيال ميديا للشركات بالضبط؟",
      a: "نتولى إدارة حساباتك على إنستغرام وتيك توك وفيسبوك بنسبة 100%. يشمل ذلك إعداد روزنامة النشر الشهرية، كتابة السيناريو وتصوير ومونتاج 25 إلى 35 فيديو ريلز/تيك توك احترافي، تصميم الستوريات اليومية الجذابة، تحسين خوارزميات الحساب، وإدارة التعليقات والرد الفوري على رسائل العملاء (DMs) لتحويل المتابعين إلى مشترين."
    },
    {
      q: "هل تقومون بتصميم قوالب شوبيفاي مخصصة من الصفر أم تعديل قوالب جاهزة؟",
      a: "نحن نبرمج واجهات ومتاجر شوبيفاي 2.0 (Shopify 2.0 & Headless) مخصصة برمجياً بالكامل لتناسب هوية علامتك التجارية بدقة. نركز على سرعة تحميل خاطفة على الهاتف، وتفعيل ميزة الشراء السريع بضغطة واحدة، وحزم المنتجات الذكية التي ترفع متوسط سلة العميل بنسبة 50% إلى 150%."
    },
    {
      q: "هل تقدمون ملفات التغليف والعلب الجاهزة للمطابع والمصانع؟",
      a: "نعم بالتأكيد. نسلمك ملفات الدايكت التنفيذية الهندسية (Dielines) بصيغ (AI, PDF, EPS) مع كافة المواصفات الدقيقة لختم الذهب الحراري (Gold Foil)، البروز، الملمس المطفأ (Matte)، ولمسات الـ UV، بالإضافة إلى ريندرات 3D واقعية تحاكي المنتج الحقيقي لترسلها لأي مصنع تغليف في العالم."
    },
    {
      q: "كيف تتم المتابعة والتواصل اليومي خلال فترة تنفيذ المشروع؟",
      a: "نوفر لكل عميل قناة خاصة على تطبيق Slack للتواصل اليومي مع الفريق التنفيذي، إلى جانب دعم سريع عبر WhatsApp للاعتمادات الفورية. نعقد مكالمات تقييم أسبوعية ونزودك بلوحة تحكم وتقارير واضحة لأداء الحملات والمبيعات."
    },
    {
      q: "كم تستغرق مدة انطلاق وبدء العمل في المشروع؟",
      a: "بعد توقيع الاتفاقية واستكمال نموذج أهداف البراند، يبدأ العمل الفعلي خلال 48 إلى 72 ساعة. مشاريع الهوية والتغليف تستغرق عادة 3 إلى 4 أسابيع، ومتاجر شوبيفاي 3 إلى 5 أسابيع، بينما تبدأ حسابات السوشيال ميديا في نشر المحتوى الجديد خلال أول 10 أيام."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-zinc-50 border-t border-zinc-200 relative overflow-hidden text-right">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-300 text-zinc-900 text-xs font-bold uppercase tracking-widest mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-zinc-700" />
            إجابات واضحة ومباشرة
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-zinc-950 mb-3 font-display font-extrabold text-zinc-950 tracking-tight mb-4">
            الأسئلة <span className="text-zinc-950">الأكثر شيوعاً</span>
          </h2>
          <p className="text-base text-zinc-600 max-w-xl mx-auto font-normal">
            كل ما تحتاج لمعرفته حول شراكتك مع ميديا ماينيد في إدارة السوشيال ميديا، البراندنج الفاخر، التغليف، وتطوير متاجر شوبيفاي.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-none bg-white border border-zinc-200 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full p-5 sm:p-6 text-right flex items-center justify-between gap-4 cursor-pointer hover:bg-zinc-50/70 transition-colors"
                >
                  <span className="font-display font-bold text-base sm:text-lg text-zinc-900">
                    {faq.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'bg-zinc-200 border-zinc-400 text-zinc-900 rotate-180' : 'bg-zinc-100 border-zinc-200 text-zinc-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-zinc-600 leading-relaxed border-t border-zinc-100 font-normal">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Call to action card */}
        <div className="mt-12 p-6 rounded-none bg-white border border-zinc-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-right">
          <div>
            <div className="text-sm font-bold text-zinc-900">هل لديك سؤال محدد أو رغبة في استشارة سريعة؟</div>
            <div className="text-xs text-zinc-500 mt-0.5">فريقنا متاح للإجابة على استفساراتك وتحديد موعد مناسب.</div>
          </div>
          <button
            onClick={onOpenBooking}
            className="px-6 py-2.5 rounded-full text-xs font-bold text-white bg-zinc-950 transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>احجز مكالمة استشارية</span>
          </button>
        </div>
      </div>
    </section>
  );
}
