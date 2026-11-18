import React from 'react';
import { Search, PenTool, Flame, Rocket, ArrowRight } from 'lucide-react';

export default function Process({ onOpenBooking }) {
  const steps = [
    {
      num: "01",
      icon: Search,
      phase: "Phase 1: Days 1 - 7",
      title: "Deep Funnel & Shopify Audit",
      description: "We analyze your entire customer journey from the first TikTok/Instagram impression down to the final checkout confirmation. We diagnose speed bottlenecks, conversion leaks, and creative saturation."
    },
    {
      num: "02",
      icon: PenTool,
      phase: "Phase 2: Days 8 - 20",
      title: "Shopify 2.0 Store Re-Engineering",
      description: "We redesign or supercharge your Shopify theme for lightning mobile speed, high-converting product pages, dynamic bundle builders, sticky add-to-carts, and 1-click upsells."
    },
    {
      num: "03",
      icon: Flame,
      phase: "Phase 3: Days 21 - 35",
      title: "Viral Creative Machine & Creator Seeding",
      description: "Our in-house production team scripts, films, and edits high-hook short-form videos while seeding your products to 100+ vetted UGC creators for social proof saturation."
    },
    {
      num: "04",
      icon: Rocket,
      phase: "Phase 4: Day 36 & Beyond",
      title: "Paid Scale & Retention Domination",
      description: "We deploy profitable ad budgets across Meta, TikTok, and Pinterest while powering automated Klaviyo SMS/Email flows to maximize repeat purchases and customer lifetime value (LTV)."
    }
  ];

  return (
    <section className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-300 text-xs font-semibold uppercase tracking-widest mb-3">
            The Blueprint
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight mb-4">
            How Media Mined <span className="text-gold-gradient">Scales Your Store</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            A battle-tested 4-stage system designed to take e-commerce stores from unpredictable ad spikes to consistent, compounding 7 and 8-figure revenue.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="relative rounded-2xl bg-zinc-900/40 border border-zinc-800 p-6 flex flex-col justify-between hover:border-gold-500/50 hover:bg-zinc-900/80 transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-display font-black text-3xl text-zinc-700 group-hover:text-gold-400 transition-colors">
                      {step.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-black border border-gold-500/30 flex items-center justify-center text-gold-400 group-hover:bg-gold-500 group-hover:text-black transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="text-[11px] font-mono uppercase text-gold-400 tracking-wider mb-2 font-medium">
                    {step.phase}
                  </div>
                  <h3 className="text-lg font-display font-bold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-zinc-800/60">
                  <span className="text-[11px] text-zinc-500 font-mono flex items-center gap-1 group-hover:text-gold-400 transition-colors">
                    Guaranteed Execution Standard
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Banner CTA */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-zinc-900 via-zinc-950 to-black border border-gold-500/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-gold-400 mb-1">
              Ready to execute?
            </div>
            <h3 className="text-2xl font-display font-bold text-white">
              Let's audit your Shopify store & social funnels this week.
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1">
              No sales pressure. Just pure operational clarity and actionable growth strategies.
            </p>
          </div>

          <button
            onClick={onOpenBooking}
            className="px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider bg-gold-gradient text-black whitespace-nowrap shadow-gold-glow hover:shadow-gold-glow-lg transition-all flex items-center gap-2"
          >
            <span>Book Strategy Session</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
