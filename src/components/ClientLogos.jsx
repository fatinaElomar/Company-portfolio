import React from 'react';
import { Sparkles } from 'lucide-react';

export default function ClientLogos() {
  const clientLogos = [
    { name: "AURA LUXE", sub: "مجوهرات فاخرة", symbol: "✦" },
    { name: "VELOCE", sub: "ملابس رياضية", symbol: "▲" },
    { name: "SOLSTICE", sub: "عطور نيش باريسية", symbol: "✺" },
    { name: "BOTANICA GLOW", sub: "مستحضرات طبية", symbol: "❖" },
    { name: "NORDIC HAVEN", sub: "مفروشات اسكندنافية", symbol: "◈" },
    { name: "KYOTO MATCHA", sub: "ماتشا وشاي فاخر", symbol: "◉" },
    { name: "VESPER ATELIER", sub: "نظارات ميلانو", symbol: "◆" },
    { name: "KROWN", sub: "ستريتوير وإطلاقات", symbol: "♔" }
  ];

  return (
    <section className="py-16 bg-zinc-50/60 border-b border-zinc-200/80 relative overflow-hidden text-right">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-[11px] font-mono uppercase tracking-[0.2em] mb-2 font-bold">
            <Sparkles className="w-3 h-3 text-amber-600" />
            علامات تجارية نعتز بها
          </div>
          <h3 className="text-xl sm:text-2xl font-display font-bold text-zinc-900 tracking-wide">
            شركاء النجاح في <span className="text-gold-gradient">التجارة الإلكترونية والسوشيال ميديا</span>
          </h3>
          <p className="text-xs text-zinc-500 mt-1 max-w-lg mx-auto">
            من الشركات الناشئة الواعدة إلى كبرى العلامات التجارية الرائدة في بيروت، دبي، والشرق الأوسط.
          </p>
        </div>

        {/* Client Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 sm:gap-6 items-center">
          {clientLogos.map((client, idx) => (
            <div
              key={idx}
              className="h-24 rounded-none bg-white border border-zinc-200 hover:border-gold-500 p-3 flex flex-col items-center justify-center text-center transition-all duration-300 group cursor-default"
            >
              <span className="text-sm text-amber-600 group-hover:scale-110 transition-transform mb-1">
                {client.symbol}
              </span>
              <span className="font-display font-extrabold text-xs tracking-[0.18em] text-zinc-800 group-hover:text-zinc-950 transition-colors">
                {client.name}
              </span>
              <span className="text-[10px] tracking-wider text-zinc-500 mt-0.5 group-hover:text-amber-800 transition-colors font-medium">
                {client.sub}
              </span>
            </div>
          ))}
        </div>

        {/* Live Marquee ticker */}
        <div className="mt-10 pt-8 border-t border-zinc-200 flex flex-wrap items-center justify-center gap-8 text-xs text-zinc-600 font-semibold">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-600"></span>
            <span>بنية برمجية معتمدة لـ Shopify Plus و OS 2.0</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-600"></span>
            <span>شريك رسمي لإعلانات وصناع محتوى Meta و TikTok</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-600"></span>
            <span>معايير تصميم وتغليف عالمية</span>
          </div>
        </div>
      </div>
    </section>
  );
}
