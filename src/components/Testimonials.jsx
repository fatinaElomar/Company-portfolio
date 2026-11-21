import React from 'react';
import { clientReviews } from '../data/portfolioData';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-zinc-50 border-t border-zinc-200 relative text-right">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-widest mb-3">
            ماذا يقول عملاؤنا
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-zinc-950 tracking-tight mb-4">
            شهادات نعتز بها من <span className="text-gold-gradient">مؤسسي الشركات والمتاجر</span>
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
            اكتشف آراء رواد الأعمال ومديري الماركات الذين وسعوا نطاق أعمالهم مع ميديا ماينيد في لبنان والإمارات ودول الخليج.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {clientReviews.map((review, idx) => (
            <div
              key={idx}
              className="rounded-none bg-white p-6 sm:p-8 border border-zinc-200 hover:border-gold-500 transition-all duration-300 flex flex-col justify-between group relative text-right"
            >
              <div className="absolute top-6 left-6 text-amber-200/60 group-hover:text-amber-300 transition-colors">
                <Quote className="w-8 h-8" />
              </div>

              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                  ))}
                  <span className="text-[11px] font-mono text-zinc-500 mr-2 font-bold">5.0 عميل موثق</span>
                </div>

                <p className="text-zinc-700 text-sm leading-relaxed mb-6 italic">
                  "{review.quote}"
                </p>
              </div>

              <div className="pt-6 border-t border-zinc-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={review.avatar}
                    alt={review.author}
                    className="w-11 h-11 rounded-full object-cover border border-amber-300"
                  />
                  <div>
                    <div className="text-sm font-bold text-zinc-900 flex items-center gap-1.5">
                      {review.author}
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    </div>
                    <div className="text-xs text-zinc-500">{review.role}</div>
                    <div className="text-[11px] text-amber-800 font-bold">{review.company}</div>
                  </div>
                </div>

                <div className="text-left">
                  <span className="text-[10px] uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200 font-bold">
                    {review.metric}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
