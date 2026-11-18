import React, { useState } from 'react';
import { 
  Sparkles, 
  Search, 
  CheckCircle2, 
  AlertTriangle, 
  ArrowRight, 
  RefreshCw, 
  Gauge, 
  Smartphone, 
  ShoppingCart, 
  TrendingUp,
  ShieldCheck
} from 'lucide-react';

export default function StoreAuditor({ onOpenBooking }) {
  const [storeUrl, setStoreUrl] = useState('');
  const [niche, setNiche] = useState('Fashion & Apparel');
  const [socialPlatform, setSocialPlatform] = useState('TikTok & Instagram');
  const [isAuditing, setIsAuditing] = useState(false);
  const [auditComplete, setAuditComplete] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    "Analyzing Shopify 2.0 theme structure & DOM speed...",
    "Inspecting mobile 1-click checkout & cart abandonment leaks...",
    "Scanning TikTok & Instagram Reels creative hook fatigue...",
    "Auditing Klaviyo lifecycle retention & post-purchase AOV upsells..."
  ];

  const handleStartAudit = (e) => {
    e.preventDefault();
    if (!storeUrl) return;

    setIsAuditing(true);
    setAuditComplete(false);
    setCurrentStep(0);

    const stepInterval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev < steps.length - 1) {
          return prev + 1;
        } else {
          clearInterval(stepInterval);
          setIsAuditing(false);
          setAuditComplete(true);
          return prev;
        }
      });
    }, 800);
  };

  return (
    <section id="audit" className="py-24 bg-gradient-to-b from-zinc-950 via-[#0C0C0C] to-black relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-300 text-xs font-semibold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Interactive Diagnostic Tool
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight mb-4">
            Instant <span className="text-gold-gradient">Shopify & Social Media</span> Health Check
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            See where your Shopify store is leaving money on the table. Discover critical mobile conversion bottlenecks, creative fatigue, and checkout drop-off rates.
          </p>
        </div>

        {/* Audit Input Form Box */}
        <div className="rounded-3xl bg-zinc-950 border border-gold-500/30 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-72 h-72 bg-gold-500/5 blur-[100px] pointer-events-none"></div>

          <form onSubmit={handleStartAudit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Store URL */}
              <div className="md:col-span-1">
                <label className="block text-xs font-mono uppercase tracking-wider text-zinc-300 mb-2">
                  Shopify Store URL
                </label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    placeholder="e.g. yourbrand.com"
                    value={storeUrl}
                    onChange={(e) => setStoreUrl(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-700 focus:border-gold-400 focus:outline-none text-white text-sm placeholder-zinc-500 transition-colors"
                  />
                  <Search className="w-4 h-4 text-zinc-500 absolute right-3.5 top-3.5" />
                </div>
              </div>

              {/* Niche */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-zinc-300 mb-2">
                  E-Commerce Vertical
                </label>
                <select
                  value={niche}
                  onChange={(e) => setNiche(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-700 focus:border-gold-400 focus:outline-none text-white text-sm transition-colors cursor-pointer"
                >
                  <option value="Fashion & Apparel">Fashion & Apparel</option>
                  <option value="Beauty & Cosmetics">Beauty & Cosmetics</option>
                  <option value="Jewelry & Luxury Goods">Jewelry & Luxury Goods</option>
                  <option value="Health, Fitness & Supplements">Health & Supplements</option>
                  <option value="Home & Lifestyle">Home & Lifestyle</option>
                  <option value="Footwear & Streetwear">Footwear & Streetwear</option>
                </select>
              </div>

              {/* Main Social Channel */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-zinc-300 mb-2">
                  Primary Social Channel
                </label>
                <select
                  value={socialPlatform}
                  onChange={(e) => setSocialPlatform(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-700 focus:border-gold-400 focus:outline-none text-white text-sm transition-colors cursor-pointer"
                >
                  <option value="TikTok & Instagram">TikTok & Instagram</option>
                  <option value="Meta Ads (FB/IG)">Meta Ads (FB/IG)</option>
                  <option value="TikTok Shop & Organic">TikTok Shop & Organic</option>
                  <option value="Influencer UGC Only">Influencer UGC Only</option>
                  <option value="Omnichannel (All)">Omnichannel (All)</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
              <div className="flex items-center gap-2 text-xs text-zinc-400">
                <ShieldCheck className="w-4 h-4 text-gold-400" />
                <span>Zero login credentials required • Instant algorithmic scan</span>
              </div>

              <button
                type="submit"
                disabled={isAuditing}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full font-bold uppercase tracking-wider text-xs bg-gold-gradient text-black shadow-gold-glow hover:shadow-gold-glow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
              >
                {isAuditing ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Auditing Store...</span>
                  </>
                ) : (
                  <>
                    <span>Run Diagnostic Audit</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Real-time scanning animation */}
          {isAuditing && (
            <div className="mt-8 p-6 rounded-2xl bg-black border border-gold-500/40 text-center animate-fade-in">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 rounded-full border-2 border-gold-400 border-t-transparent animate-spin"></div>
              </div>
              <div className="text-sm font-mono text-gold-300 mb-2">
                Running Media Mined Analysis Suite...
              </div>
              <p className="text-xs text-zinc-400">{steps[currentStep]}</p>
            </div>
          )}

          {/* Audit Results Presentation */}
          {auditComplete && (
            <div className="mt-8 pt-8 border-t border-zinc-800 space-y-6 animate-fade-in">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 rounded-2xl bg-zinc-900/80 border border-gold-500/40">
                <div>
                  <div className="text-xs font-mono text-zinc-400 uppercase tracking-widest">
                    Diagnostic Score for: <span className="text-white font-semibold">{storeUrl}</span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-display font-extrabold text-white mt-1">
                    Store Health Score: <span className="text-gold-400">62 / 100</span>
                    <span className="text-xs font-mono font-normal text-amber-400 ml-3 px-2 py-0.5 rounded bg-amber-400/10 border border-amber-400/30">
                      High Growth Opportunity
                    </span>
                  </div>
                </div>

                <button
                  onClick={onOpenBooking}
                  className="px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-gold-gradient text-black shadow-gold-glow hover:shadow-gold-glow-lg transition-all"
                >
                  Fix Vulnerabilities With Us
                </button>
              </div>

              {/* Breakdown Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-black/60 border border-zinc-800">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono uppercase text-zinc-400">Mobile Speed & UX</span>
                    <span className="text-xs text-amber-400 font-bold">58%</span>
                  </div>
                  <div className="text-sm font-semibold text-white mb-1">Theme Latency Detected</div>
                  <p className="text-xs text-zinc-400">
                    High render-blocking scripts detected on mobile. Slow initial paint costs an estimated 14% of social ad clicks.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-black/60 border border-zinc-800">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono uppercase text-zinc-400">Social Traffic CRO</span>
                    <span className="text-xs text-red-400 font-bold">48%</span>
                  </div>
                  <div className="text-sm font-semibold text-white mb-1">Cart Drop-off Leak</div>
                  <p className="text-xs text-zinc-400">
                    Missing sticky 1-click checkout and dynamic tiered bundle offers to elevate Average Order Value (AOV).
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-black/60 border border-zinc-800">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono uppercase text-zinc-400">Retention & Viral Hook</span>
                    <span className="text-xs text-amber-400 font-bold">64%</span>
                  </div>
                  <div className="text-sm font-semibold text-white mb-1">Creative Saturation</div>
                  <p className="text-xs text-zinc-400">
                    Lack of creator-seeded UGC pipeline leading to ad fatigue and rising Cost Per Acquisition (CPA).
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-gradient-to-r from-gold-500/10 via-zinc-900 to-black border border-gold-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs sm:text-sm text-zinc-300">
                  <strong className="text-gold-300">Estimated Untapped Upside:</strong> Addressing these 3 key areas could unlock an estimated <span className="text-white font-bold">+140% to +260%</span> in monthly gross Shopify revenue.
                </div>
                <button
                  onClick={onOpenBooking}
                  className="px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white text-black hover:bg-gold-400 transition-colors whitespace-nowrap"
                >
                  Book Free 1-on-1 Review
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
