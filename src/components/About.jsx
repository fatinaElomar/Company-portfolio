import React from 'react';
import { Lightbulb, TrendingUp, Handshake, ChevronRight } from 'lucide-react';
import logoMark from '../assets/logo-black-mark.png';

export default function About({ onOpenBooking }) {
  return (
    <section id="about" className="py-20 bg-white border-t border-zinc-200/80 text-right">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column (Photo matching mockup: Branded notebook, camera, keyboard) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-zinc-900 shadow-xl border border-zinc-200 group">
              <img
                src="https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=1000&auto=format&fit=crop"
                alt="Media Mind Notebook and Workspace"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Overlay with Burgundy Tint & Media Mind Embossed Badge */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-burgundy flex items-center justify-center p-2 shadow-lg">
                    <img src={logoMark} alt="Media Mind" className="w-full h-full object-contain invert" />
                  </div>
                  <div>
                    <div className="text-white font-display font-bold text-sm tracking-wide">
                      Media Mind Creative Studio
                    </div>
                    <div className="text-zinc-300 text-xs">
                      بيروت 🇱🇧 • دبي 🇦🇪
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (Content matching mockup) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Tag matching mockup: —— ABOUT MEDIA MIND —— */}
            <div className="flex items-center gap-2">
              <span className="w-8 h-[1.5px] bg-burgundy/60"></span>
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-burgundy font-bold">
                ABOUT MEDIA MIND • عن الوكالة
              </span>
            </div>

            {/* Title matching mockup: Where Creativity Meets Strategy */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-zinc-950 tracking-tight leading-tight">
              Where <span className="text-burgundy">Creativity</span> Meets Strategy
            </h2>
            <div className="text-sm sm:text-base font-bold text-zinc-800">
              حيث يلتقي الإبداع بالاستراتيجية
            </div>

            <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed max-w-xl">
              في ميديا مايند، نؤمن بقوة الأفكار الإبداعية والاستراتيجيات الذكية. نساعد العلامات التجارية على التميز، والتواصل مع جمهورها، وتحقيق نمو حقيقي ومستدام من خلال حلول تسويقية وتصميمية متكاملة.
              <span className="block text-zinc-400 mt-1.5 text-xs font-sans">
                At Media Mind, we believe in the power of creative ideas and smart strategies. We help brands stand out, connect with their audience, and achieve real growth.
              </span>
            </p>

            {/* Learn More Button matching mockup */}
            <div>
              <button
                onClick={onOpenBooking}
                className="px-6 py-2.5 rounded-full font-bold text-xs tracking-wide bg-burgundy hover:bg-burgundy-hover text-white flex items-center gap-1.5 shadow-sm transition-all cursor-pointer group"
              >
                <span>احجز مكالمة (Learn More)</span>
                <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 rtl:rotate-180 rtl:group-hover:-translate-x-0.5" />
              </button>
            </div>

            {/* 3 Callout Cards matching mockup (Right Column / Grid) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-zinc-100">
              
              {/* Item 1: Creative Excellence */}
              <div className="p-3.5 rounded-xl bg-zinc-50 border border-zinc-200/80 hover:border-burgundy/60 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-burgundy-light flex items-center justify-center text-burgundy mb-2">
                  <Lightbulb className="w-4 h-4" />
                </div>
                <div className="font-bold text-xs text-zinc-950">Creative Excellence</div>
                <div className="text-[11px] font-bold text-zinc-800">التميز الإبداعي</div>
                <p className="text-[10px] text-zinc-500 mt-0.5">Ideas that inspire • أفكار تُلهم</p>
              </div>

              {/* Item 2: Results-Driven */}
              <div className="p-3.5 rounded-xl bg-zinc-50 border border-zinc-200/80 hover:border-burgundy/60 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-burgundy-light flex items-center justify-center text-burgundy mb-2">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <div className="font-bold text-xs text-zinc-950">Results-Driven</div>
                <div className="text-[11px] font-bold text-zinc-800">التركيز على النتائج</div>
                <p className="text-[10px] text-zinc-500 mt-0.5">Strategies that work • استراتيجيات تحقق أهدافك</p>
              </div>

              {/* Item 3: Dedicated Support */}
              <div className="p-3.5 rounded-xl bg-zinc-50 border border-zinc-200/80 hover:border-burgundy/60 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-burgundy-light flex items-center justify-center text-burgundy mb-2">
                  <Handshake className="w-4 h-4" />
                </div>
                <div className="font-bold text-xs text-zinc-950">Dedicated Support</div>
                <div className="text-[11px] font-bold text-zinc-800">شراكة ودعم مخصص</div>
                <p className="text-[10px] text-zinc-500 mt-0.5">Always here for you • فريقك دائماً معك</p>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
