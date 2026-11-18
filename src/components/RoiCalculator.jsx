import React, { useState } from 'react';
import { Calculator, DollarSign, TrendingUp, Sparkles, ArrowRight } from 'lucide-react';

export default function RoiCalculator({ onOpenBooking }) {
  const [adSpend, setAdSpend] = useState(15000);
  const [conversionRate, setConversionRate] = useState(1.8);
  const [aov, setAov] = useState(75);

  // Calculations:
  // Current clicks = adSpend / CPC (~$1.20)
  const currentClicks = Math.round(adSpend / 1.15);
  const currentOrders = Math.round(currentClicks * (conversionRate / 100));
  const currentRevenue = Math.round(currentOrders * aov);
  const currentRoas = (currentRevenue / adSpend).toFixed(2);

  // Media Mined Boosted metrics:
  // CRO raises conversion rate by +60% to 120%
  const optimizedConversionRate = Number((conversionRate * 1.85).toFixed(2));
  // AOV raised by 35% with smart bundle upsells
  const optimizedAov = Math.round(aov * 1.35);
  // Algorithmic creative optimization lowers CPC by 22% -> more traffic
  const optimizedClicks = Math.round(adSpend / 0.90);
  const optimizedOrders = Math.round(optimizedClicks * (optimizedConversionRate / 100));
  const projectedMonthlyRevenue = Math.round(optimizedOrders * optimizedAov);
  const projectedRoas = (projectedMonthlyRevenue / adSpend).toFixed(2);
  const additionalMonthlyRevenue = projectedMonthlyRevenue - currentRevenue;
  const annualUplift = additionalMonthlyRevenue * 12;

  return (
    <section id="calculator" className="py-24 bg-black relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-300 text-xs font-semibold uppercase tracking-widest mb-3">
            <Calculator className="w-3.5 h-3.5" />
            Revenue Forecast Engine
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight mb-4">
            Calculate Your <span className="text-gold-gradient">Shopify Scale Potential</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Adjust the sliders below to your current store baseline and see the projected financial impact of pairing Media Mined's viral social content engine with a high-converting Shopify store.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-3xl bg-zinc-950 border border-gold-500/30 p-6 sm:p-10 shadow-2xl relative">
          {/* Sliders Column */}
          <div className="lg:col-span-7 space-y-8">
            {/* Slider 1: Ad Spend */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-mono uppercase tracking-wider text-zinc-300">
                  Monthly Social Ad Spend (Meta & TikTok)
                </label>
                <span className="text-base font-bold font-mono text-gold-400">
                  ${adSpend.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="3000"
                max="100000"
                step="1000"
                value={adSpend}
                onChange={(e) => setAdSpend(Number(e.target.value))}
                className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-gold-400"
              />
              <div className="flex justify-between text-[11px] text-zinc-500 font-mono mt-1">
                <span>$3k/mo</span>
                <span>$50k/mo</span>
                <span>$100k+/mo</span>
              </div>
            </div>

            {/* Slider 2: Current Conversion Rate */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-mono uppercase tracking-wider text-zinc-300">
                  Current Shopify Conversion Rate
                </label>
                <span className="text-base font-bold font-mono text-gold-400">
                  {conversionRate.toFixed(1)}%
                </span>
              </div>
              <input
                type="range"
                min="0.5"
                max="4.0"
                step="0.1"
                value={conversionRate}
                onChange={(e) => setConversionRate(Number(e.target.value))}
                className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-gold-400"
              />
              <div className="flex justify-between text-[11px] text-zinc-500 font-mono mt-1">
                <span>0.5% (Below avg)</span>
                <span>1.8% (Benchmark)</span>
                <span>4.0% (Elite)</span>
              </div>
            </div>

            {/* Slider 3: Average Order Value */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-mono uppercase tracking-wider text-zinc-300">
                  Average Order Value (AOV)
                </label>
                <span className="text-base font-bold font-mono text-gold-400">
                  ${aov}
                </span>
              </div>
              <input
                type="range"
                min="30"
                max="300"
                step="5"
                value={aov}
                onChange={(e) => setAov(Number(e.target.value))}
                className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-gold-400"
              />
              <div className="flex justify-between text-[11px] text-zinc-500 font-mono mt-1">
                <span>$30</span>
                <span>$150</span>
                <span>$300+</span>
              </div>
            </div>

            {/* Assumptions Note */}
            <div className="p-4 rounded-xl bg-black/60 border border-zinc-800 text-xs text-zinc-400 leading-relaxed">
              <span className="text-white font-semibold">Media Mined Impact Baseline:</span> Based on historical client averages (+85% CRO uplift via Shopify 2.0 re-architecture, +35% AOV via post-purchase upsells, and lower blended CAC from viral short-form creative testing).
            </div>
          </div>

          {/* Results Projection Card */}
          <div className="lg:col-span-5 bg-gradient-to-b from-zinc-900 to-black p-6 sm:p-8 rounded-2xl border border-gold-500/40 shadow-gold-glow/20 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
              <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">
                Projected Scale
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                High Confidence
              </span>
            </div>

            <div>
              <div className="text-xs text-zinc-400 uppercase font-mono tracking-wider">
                Projected Monthly Shopify GMV
              </div>
              <div className="text-3xl sm:text-4xl font-display font-black text-white text-gold-gradient mt-1">
                ${projectedMonthlyRevenue.toLocaleString()}
                <span className="text-xs font-normal text-zinc-400 ml-1">/mo</span>
              </div>
              <div className="text-xs text-emerald-400 font-mono mt-1 flex items-center gap-1">
                <TrendingUp className="w-3.5 h-3.5" />
                +${additionalMonthlyRevenue.toLocaleString()} Net New Monthly GMV
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 py-4 border-y border-zinc-800">
              <div>
                <div className="text-[11px] text-zinc-400 font-mono uppercase">Estimated ROAS</div>
                <div className="text-xl font-bold font-display text-white mt-0.5">
                  {projectedRoas}x <span className="text-xs text-zinc-500">(vs {currentRoas}x)</span>
                </div>
              </div>

              <div>
                <div className="text-[11px] text-zinc-400 font-mono uppercase">Optimized Conv. Rate</div>
                <div className="text-xl font-bold font-display text-gold-400 mt-0.5">
                  {optimizedConversionRate}%
                </div>
              </div>
            </div>

            <div>
              <div className="text-xs text-zinc-400 font-mono uppercase">12-Month Projected Growth Impact</div>
              <div className="text-2xl font-bold font-display text-white mt-1">
                +${annualUplift.toLocaleString()}
              </div>
              <p className="text-[11px] text-zinc-400 mt-1">
                Incremental gross revenue added to your balance sheet over 1 year.
              </p>
            </div>

            <button
              onClick={onOpenBooking}
              className="w-full py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-gold-gradient text-black flex items-center justify-center gap-2 shadow-gold-glow hover:shadow-gold-glow-lg transition-all"
            >
              <span>Unlock This Growth Roadmap</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
