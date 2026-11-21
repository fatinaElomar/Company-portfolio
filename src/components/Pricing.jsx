import React from 'react';
import { pricingPlans } from '../data/portfolioData';
import { Check, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

export default function Pricing({ onOpenBooking }) {
  return (
    <section id="pricing" className="py-24 bg-zinc-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-300 text-xs font-semibold uppercase tracking-widest mb-3">
            Project Packages & Retainers
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight mb-4">
            Curated <span className="text-gold-gradient">Service Packages</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Choose a dedicated project scope or combine them into an all-in-one package. We provide predictable project timelines and senior-level creative execution.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {pricingPlans.map((plan, idx) => (
            <div
              key={idx}
              className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
                plan.featured
                  ? 'bg-zinc-900 border-2 border-gold-500 shadow-gold-glow-lg -translate-y-2'
                  : 'bg-zinc-950 border border-zinc-800 hover:border-gold-500/40'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gold-gradient text-black font-bold uppercase tracking-widest text-[11px] px-4 py-1 rounded-full shadow-gold-glow flex items-center gap-1 whitespace-nowrap">
                  <Sparkles className="w-3.5 h-3.5" />
                  {plan.badge}
                </div>
              )}

              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-gold-400 block mb-1">
                  {plan.projectScope}
                </span>

                <h3 className="text-2xl font-display font-bold text-white mb-2">
                  {plan.name}
                </h3>
                
                <p className="text-xs text-zinc-400 mb-6 min-h-[36px]">
                  {plan.subtitle}
                </p>

                <div className="flex items-baseline gap-1.5 mb-8 pb-6 border-b border-zinc-800">
                  <span className="text-4xl sm:text-5xl font-display font-black text-white text-gold-gradient">
                    {plan.price}
                  </span>
                  <span className="text-xs font-mono text-zinc-400 uppercase">
                    {plan.period}
                  </span>
                </div>

                <div className="space-y-3 mb-8">
                  <div className="text-xs font-mono uppercase tracking-wider text-zinc-300 font-semibold mb-2">
                    Scope of Deliverables:
                  </div>
                  {plan.deliverables.map((item, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                      <Check className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <button
                  onClick={onOpenBooking}
                  className={`w-full py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
                    plan.featured
                      ? 'bg-gold-gradient text-black shadow-gold-glow hover:shadow-gold-glow-lg'
                      : 'bg-zinc-900 hover:bg-gold-500 text-white hover:text-black border border-zinc-700'
                  }`}
                >
                  <span>Select {plan.name}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <div className="text-center text-[10px] text-zinc-500 font-mono mt-3">
                  Custom kickoff call within 48 hours
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
