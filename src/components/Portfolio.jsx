import React, { useState } from 'react';
import { ChevronRight, Eye, PhoneCall, X } from 'lucide-react';
import logoMark from '../assets/logo-black-mark.png';

export default function Portfolio({ onOpenBooking }) {
  const [activeModal, setActiveModal] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Luxury Packaging & Gift Boxes",
      titleAr: "تصميم التغليف والعلب الفاخرة",
      category: "Packaging Design",
      image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=800&auto=format&fit=crop",
      desc: "تصميم علب تسوق كرتونية صلبة بدمغ الذهب واللون البورغندي الملكي مع تجربة فتح فريدة."
    },
    {
      id: 2,
      title: "Viral Social Media Campaigns",
      titleAr: "حملات السوشيال ميديا وريلز",
      category: "Social Media",
      image: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=800&auto=format&fit=crop",
      desc: "إنتاج وتصوير ريلز وتيك توك جذابة، إدارة التفاعل اليومي وزيادة المتابعين والمبيعات."
    },
    {
      id: 3,
      title: "Minimalist Brand Identity",
      titleAr: "الهوية البصرية وبطاقات الأعمال",
      category: "Branding",
      image: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&w=800&auto=format&fit=crop",
      desc: "بناء الهوية البصرية الكاملة: الشعار، الخطوط، بطاقات الأعمال الفاخرة، ودليل العلامة."
    },
    {
      id: 4,
      title: "Modern Shopify & Web Experience",
      titleAr: "متاجر شوبيفاي وتطوير المواقع",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop",
      desc: "برمجة متجر شوبيفاي فائق السرعة بتصميم مخصص بالكامل وتجربة دفع سلسة بضغطة واحدة."
    },
    {
      id: 5,
      title: "Bespoke Luxury Shopping Bags",
      titleAr: "حقائب تسوق ملكية فاخرة",
      category: "Print & Merch",
      image: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop",
      desc: "حقائب ورقية مقواة بحبال مخملية مجدولة وشعار Media Mind بارز باللون البورغندي والأسود."
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-zinc-50/50 border-t border-zinc-200/80 text-right">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Tag matching mockup: —— OUR PORTFOLIO —— */}
        <div className="flex items-center gap-2 mb-3">
          <span className="w-8 h-[1.5px] bg-burgundy/60"></span>
          <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-burgundy font-bold">
            OUR PORTFOLIO • أعمالنا
          </span>
        </div>

        {/* Header row with Title and "View All Projects" button */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-zinc-950 tracking-tight leading-tight">
              Our Work <span className="text-burgundy">Speaks</span>
            </h2>
            <div className="text-sm sm:text-base font-bold text-zinc-800 mt-0.5">
              أعمالنا تتحدث عنا
            </div>
            <p className="text-xs sm:text-sm text-zinc-500 mt-1 max-w-xl">
              Explore some of our latest projects in design, social media, and web development.
              <span className="block text-zinc-600 font-medium">
                استعرض أبرز مشاريعنا في التصميم، السوشيال ميديا، التغليف، وتطوير الويب.
              </span>
            </p>
          </div>

          <button
            onClick={onOpenBooking}
            className="self-start md:self-auto px-5 py-2 rounded-full border border-burgundy text-burgundy hover:bg-burgundy hover:text-white text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shrink-0"
          >
            <span>استعرض جميع المشاريع (View All Projects)</span>
            <ChevronRight className="w-3.5 h-3.5 rtl:rotate-180" />
          </button>
        </div>

        {/* 5 Project Thumbnails Grid matching mockup */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setActiveModal(project)}
              className="group relative rounded-2xl overflow-hidden bg-white border border-zinc-200/90 hover:border-burgundy hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              <div className="aspect-[4/3] w-full overflow-hidden relative bg-zinc-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-9 h-9 rounded-full bg-white/90 text-burgundy flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform">
                    <Eye className="w-4 h-4" />
                  </div>
                </div>
                <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-black/70 backdrop-blur-sm text-[10px] text-white font-mono">
                  {project.category}
                </div>
              </div>

              <div className="p-3.5 text-right">
                <h4 className="font-display font-bold text-xs sm:text-sm text-zinc-950 group-hover:text-burgundy transition-colors line-clamp-1">
                  {project.title}
                </h4>
                <div className="text-[11px] font-bold text-zinc-700 mt-0.5 line-clamp-1">
                  {project.titleAr}
                </div>
                <p className="text-[10px] text-zinc-500 mt-1 line-clamp-2">
                  {project.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Project Lightbox Modal */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in text-right">
          <div className="relative w-full max-w-xl rounded-2xl bg-white border border-zinc-200 p-6 shadow-2xl">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-4 left-4 p-2 rounded-full bg-zinc-100 text-zinc-600 hover:text-black hover:bg-zinc-200 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <span className="text-xs font-mono uppercase text-burgundy font-bold block mb-1">
              {activeModal.category}
            </span>
            <h3 className="text-xl font-display font-bold text-zinc-950 mb-1">
              {activeModal.title}
            </h3>
            <div className="text-sm font-bold text-zinc-700 mb-4">
              {activeModal.titleAr}
            </div>

            <div className="rounded-xl overflow-hidden aspect-[16/10] mb-4 border border-zinc-200">
              <img src={activeModal.image} alt={activeModal.title} className="w-full h-full object-cover" />
            </div>

            <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mb-5">
              {activeModal.desc}
            </p>

            <div className="flex items-center justify-between gap-3 pt-3 border-t border-zinc-100">
              <div className="text-xs text-zinc-500 font-bold">
                ترغب بمشروع مماثل لعلامتك التجارية؟
              </div>
              <button
                onClick={() => {
                  setActiveModal(null);
                  onOpenBooking();
                }}
                className="px-5 py-2 rounded-full text-xs font-bold bg-burgundy hover:bg-burgundy-hover text-white flex items-center gap-1.5 shadow-sm transition-all"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>احجز مكالمة استشارية</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
