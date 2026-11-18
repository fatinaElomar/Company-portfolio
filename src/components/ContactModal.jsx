import React, { useState } from 'react';
import { X, CheckCircle, Calendar, Sparkles, Send, ShieldCheck, ShoppingBag } from 'lucide-react';

export default function ContactModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    storeUrl: '',
    revenue: '$20k - $50k / mo',
    goals: 'Shopify CRO & Redesign'
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-xl rounded-3xl bg-zinc-950 border border-gold-500/40 p-6 sm:p-8 shadow-[0_0_50px_rgba(212,175,55,0.25)] text-white">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 mb-2 text-gold-400 text-xs font-mono uppercase tracking-widest">
              <Sparkles className="w-4 h-4" />
              Direct Founder & Growth Partner Access
            </div>

            <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white mb-2">
              Book Your 1-on-1 <span className="text-gold-gradient">Shopify Growth Audit</span>
            </h3>
            
            <p className="text-zinc-400 text-xs sm:text-sm mb-6 leading-relaxed">
              We review your store live, pinpoint your exact conversion leaks, and deliver a custom 90-day viral social acquisition plan. No pitch decks, just actionable value.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-zinc-300 mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Marcus Vance"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 focus:border-gold-400 focus:outline-none text-white text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-zinc-300 mb-1.5">
                    Work Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="marcus@brand.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 focus:border-gold-400 focus:outline-none text-white text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-zinc-300 mb-1.5">
                  Shopify Store URL / Instagram Handle
                </label>
                <input
                  type="text"
                  required
                  placeholder="https://yourstore.com"
                  value={formData.storeUrl}
                  onChange={(e) => setFormData({ ...formData, storeUrl: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 focus:border-gold-400 focus:outline-none text-white text-sm"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-zinc-300 mb-1.5">
                    Current Monthly Revenue
                  </label>
                  <select
                    value={formData.revenue}
                    onChange={(e) => setFormData({ ...formData, revenue: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 focus:border-gold-400 focus:outline-none text-white text-sm cursor-pointer"
                  >
                    <option value="Under $15k / mo">Under $15k / mo</option>
                    <option value="$20k - $50k / mo">$20k - $50k / mo</option>
                    <option value="$50k - $150k / mo">$50k - $150k / mo</option>
                    <option value="$150k - $500k+ / mo">$150k - $500k+ / mo (Scale)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-zinc-300 mb-1.5">
                    Primary Priority
                  </label>
                  <select
                    value={formData.goals}
                    onChange={(e) => setFormData({ ...formData, goals: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 focus:border-gold-400 focus:outline-none text-white text-sm cursor-pointer"
                  >
                    <option value="Shopify CRO & Redesign">Shopify CRO & Redesign</option>
                    <option value="Viral TikTok & Reels Videos">Viral TikTok & Reels Videos</option>
                    <option value="Paid Ads Scaling (Meta/TikTok)">Paid Ads Scaling (Meta/TikTok)</option>
                    <option value="UGC & Creator Seeding">UGC & Creator Seeding</option>
                    <option value="Full Omnichannel Growth">Full Omnichannel Growth</option>
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl font-bold uppercase tracking-widest text-xs bg-gold-gradient text-black flex items-center justify-center gap-2 shadow-gold-glow hover:shadow-gold-glow-lg transition-all cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Confirm Strategy Session Reservation</span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-zinc-500 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-gold-400" />
                <span>Strict Non-Disclosure Agreement Guaranteed</span>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-gold-500/20 border border-gold-400 flex items-center justify-center text-gold-400 mx-auto">
              <CheckCircle className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-display font-extrabold text-white">
              Strategy Session Confirmed!
            </h3>

            <p className="text-zinc-300 text-sm max-w-md mx-auto leading-relaxed">
              Thank you, <span className="text-gold-300 font-bold">{formData.name}</span>. Our senior growth architect is preparing the custom diagnostic teardown for <span className="text-white font-mono">{formData.storeUrl}</span>.
            </p>

            <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-zinc-400 max-w-sm mx-auto">
              We've dispatched calendar invitations and preparation details directly to <span className="text-white">{formData.email}</span>.
            </div>

            <button
              onClick={handleReset}
              className="px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-gold-gradient text-black mt-4 cursor-pointer"
            >
              Return to Site
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
