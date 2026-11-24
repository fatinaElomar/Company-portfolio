import React from 'react';
import { 
  Megaphone, 
  PenTool, 
  Box, 
  Code, 
  Gem,
  ArrowLeft,
  ChevronRight
} from 'lucide-react';

export default function Services({ onOpenBooking }) {
  const services = [
    {
      icon: Megaphone,
      title: "Social Media Management",
      titleAr: "إدارة السوشيال ميديا",
      desc: "Grow your audience with smart strategies.",
      descAr: "نمو جمهورك وتفاعل يومي واستراتيجيات محتوى متقدمة."
    },
    {
      icon: PenTool,
      title: "Graphic Design",
      titleAr: "التصميم الجرافيكي",
      desc: "Stunning designs that make an impact.",
      descAr: "تصاميم إبداعية واستثنائية تترك أثراً بصرياً عميقاً."
    },
    {
      icon: Box,
      title: "Packaging Design",
      titleAr: "تصميم التغليف والعلب",
      desc: "Creative packaging that stands out.",
      descAr: "علب وتغليف مبتكر يفرض هيبة علامتك في الأسواق."
    },
    {
      icon: Code,
      title: "Website Development",
      titleAr: "تطوير المواقع وشوبيفاي",
      desc: "Modern websites, from Shopify to more.",
      descAr: "متاجر إلكترونية ومواقع فائقة السرعة ترفع معدل الشراء."
    },
    {
      icon: Gem,
      title: "Branding & Identity",
      titleAr: "الهوية البصرية والبراندنج",
      desc: "Build a memorable brand identity.",
      descAr: "بناء هوية بصرية ملكية ودليل علامة تجارية متكامل."
    }
  ];

  return (
    <section id="services" className="py-20 bg-zinc-50/70 border-t border-zinc-200/80 text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Tag matching mockup: —— OUR SERVICES —— */}
        <div className="flex items-center justify-center gap-2 mb-3">
          <span className="w-8 h-[1.5px] bg-burgundy/60"></span>
          <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-burgundy font-bold">
            OUR SERVICES • خدماتنا
          </span>
          <span className="w-8 h-[1.5px] bg-burgundy/60"></span>
        </div>

        {/* Section Heading matching mockup: A Full-Service Creative Agency */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-zinc-950 tracking-tight mb-2">
          A Full-Service <span className="text-burgundy">Creative</span> Agency
        </h2>
        <div className="text-sm sm:text-base font-bold text-zinc-800 mb-1">
          وكالة إبداعية متكاملة الخدمات
        </div>
        <p className="text-xs sm:text-sm text-zinc-500 max-w-xl mx-auto leading-relaxed mb-12">
          Strategic solutions to build, promote, and grow your brand.
          <span className="block text-zinc-600 font-medium mt-0.5">
            حلول استراتيجية مبتكرة لبناء علامتك التجارية، ترويجها، ومضاعفة أرباحك.
          </span>
        </p>

        {/* 5 Service Cards Row matching mockup */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {services.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                onClick={onOpenBooking}
                className="p-6 rounded-2xl bg-white border border-zinc-200/90 hover:border-burgundy hover:shadow-md transition-all duration-300 flex flex-col items-center justify-between group cursor-pointer text-center"
              >
                <div>
                  {/* Burgundy Icon */}
                  <div className="w-12 h-12 rounded-xl bg-burgundy-light flex items-center justify-center text-burgundy mb-5 group-hover:bg-burgundy group-hover:text-white transition-colors duration-300">
                    <Icon className="w-6 h-6 stroke-[1.75]" />
                  </div>

                  <h3 className="font-display font-bold text-sm sm:text-base text-zinc-900 group-hover:text-burgundy transition-colors mb-1">
                    {item.title}
                  </h3>
                  <div className="text-xs font-bold text-zinc-700 mb-2">
                    {item.titleAr}
                  </div>

                  <p className="text-[11px] text-zinc-500 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                  <p className="text-[11px] text-zinc-600 mt-1 leading-relaxed">
                    {item.descAr}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-zinc-100 w-full flex items-center justify-center text-xs font-bold text-burgundy opacity-80 group-hover:opacity-100 transition-opacity">
                  <span className="text-[11px]">احجز استشارة</span>
                  <ChevronRight className="w-3.5 h-3.5 rtl:rotate-180" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
