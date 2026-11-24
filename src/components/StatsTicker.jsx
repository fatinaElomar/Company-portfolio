import React from 'react';

export default function StatsTicker() {
  const partners = [
    { name: "شريك Shopify Plus", desc: "بنية برمجية معتمدة" },
    { name: "شريك Meta للأعمال", desc: "إعلانات إنستغرام وفيسبوك" },
    { name: "وكالة معتمدة لدى TikTok", desc: "تيك توك شوب وصناع المحتوى" },
    { name: "خبير معتمد في Klaviyo", desc: "أتمتة البريد والرسائل النصية" },
    { name: "شريك Google Premier", desc: "إعلانات البحث وحملات الأداء" }
  ];

  return (
    <div className="border-y border-zinc-200 bg-white py-8 relative overflow-hidden text-right">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-xs font-mono uppercase tracking-widest text-zinc-500 mb-6 font-bold">
          منظومة الشركاء المعتمدين والربط التقني المباشر
        </div>

        {/* Partners Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {partners.map((partner, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-none bg-zinc-50 border border-zinc-200/80 hover:border-gold-500/60 text-center transition-all duration-300 group"
            >
              <div className="text-xs sm:text-sm font-bold text-zinc-900 group-hover:text-amber-800 transition-colors">
                {partner.name}
              </div>
              <div className="text-[10px] text-zinc-500 tracking-wider uppercase mt-0.5 font-medium">
                {partner.desc}
              </div>
            </div>
          ))}
        </div>

        {/* Big Impact Numbers */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10 pt-8 border-t border-zinc-100 text-center">
          <div>
            <div className="text-3xl sm:text-4xl font-display font-black text-zinc-900 text-gold-gradient">
              +500K+
            </div>
            <div className="text-xs text-zinc-600 uppercase tracking-wider mt-1 font-bold">
              طلب شراء ناجح لعملائنا
            </div>
          </div>

          <div>
            <div className="text-3xl sm:text-4xl font-display font-black text-zinc-900">
              +210M
            </div>
            <div className="text-xs text-zinc-600 uppercase tracking-wider mt-1 font-bold">
              مشاهدة مجانية لفيديوهات السوشيال
            </div>
          </div>

          <div>
            <div className="text-3xl sm:text-4xl font-display font-black text-amber-700">
              4.6x
            </div>
            <div className="text-xs text-zinc-600 uppercase tracking-wider mt-1 font-bold">
              متوسط العائد على الإنفاق الإعلاني
            </div>
          </div>

          <div>
            <div className="text-3xl sm:text-4xl font-display font-black text-zinc-900">
              98.4%
            </div>
            <div className="text-xs text-zinc-600 uppercase tracking-wider mt-1 font-bold">
              نسبة استمرار ورضا العملاء
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
