import React, { useState } from 'react';
import { caseStudies } from '../data/portfolioData';
import { 
  TrendingUp, 
  ShieldAlert, 
  Award, 
  Image as ImageIcon, 
  X, 
  Eye, 
  Sparkles,
  PhoneCall,
  ArrowLeft
} from 'lucide-react';

export default function CaseStudies({ onOpenBooking }) {
  const [selectedCase, setSelectedCase] = useState(caseStudies[0]);
  const [activeImage, setActiveImage] = useState(caseStudies[0].heroImage);
  const [filter, setFilter] = useState('All');
  const [modalOpen, setModalOpen] = useState(false);

  const filterCategories = [
    { label: 'جميع المشاريع', value: 'All' },
    { label: 'إدارة السوشيال ميديا', value: 'social-media' },
    { label: 'الهوية والبراندنج', value: 'branding' },
    { label: 'التغليف والبوكسات', value: 'packaging' },
    { label: 'متاجر شوبيفاي والمواقع', value: 'websites' },
    { label: 'الباقات الشاملة', value: 'packages' }
  ];

  const filteredStudies = caseStudies.filter(item => {
    if (filter === 'All') return true;
    return item.projectType === filter;
  });

  const handleSelectCase = (study) => {
    setSelectedCase(study);
    setActiveImage(study.heroImage);
  };

  return (
    <section id="case-studies" className="py-24 bg-white relative text-right">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-widest mb-3">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              أحدث المشاريع والأعمال المنفذة
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-zinc-950 tracking-tight">
              سجل أعمال <span className="text-gold-gradient">عملاء ميديا ماينيد</span>
            </h2>
            <p className="text-zinc-600 text-sm sm:text-base mt-2 max-w-xl">
              تصفح نتائج مشاريعنا الحقيقية بالأرقام عبر إدارة السوشيال ميديا، تصميم التغليف والعلب، البراندنج الفاخر، ومتاجر شوبيفاي فائقة المبيعات.
            </p>
          </div>

          {/* Filter Pills in Arabic */}
          <div className="flex flex-wrap gap-2 mt-6 md:mt-0">
            {filterCategories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setFilter(cat.value)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  filter === cat.value
                    ? 'bg-zinc-950 text-white font-bold'
                    : 'bg-zinc-100 text-zinc-600 hover:text-zinc-950 hover:bg-zinc-200/80 border border-zinc-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Case Study Hero Showcase in Light Mode & Arabic */}
        {selectedCase && (
          <div className="mb-16 rounded-none bg-zinc-50 border border-zinc-200 overflow-hidden relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10">
              {/* Left Column: Metrics & Story */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-xs uppercase tracking-wider text-amber-800 bg-amber-100/70 border border-amber-300 px-3 py-1 rounded-full font-bold">
                    {selectedCase.category}
                  </span>
                  <span className="text-xs text-zinc-500 font-medium">العميل: {selectedCase.client}</span>
                  <span className="text-xs text-zinc-300">•</span>
                  <span className="text-xs text-zinc-500 font-medium">المدة: {selectedCase.timeline}</span>
                </div>

                <h3 className="text-2xl sm:text-4xl font-display font-black text-zinc-950">
                  {selectedCase.title}
                </h3>

                <p className="text-zinc-600 text-sm sm:text-base leading-relaxed font-normal">
                  {selectedCase.summary}
                </p>

                {/* Challenge & Solution Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                  <div className="p-4 rounded-none bg-white border border-zinc-200">
                    <div className="text-xs font-bold text-red-600 flex items-center gap-1.5 uppercase tracking-wider mb-1">
                      <ShieldAlert className="w-3.5 h-3.5" />
                      التحدي الأولي للمشروع
                    </div>
                    <div className="text-xs text-zinc-600 leading-normal">{selectedCase.challenge}</div>
                  </div>

                  <div className="p-4 rounded-none bg-white border border-zinc-200">
                    <div className="text-xs font-bold text-amber-700 flex items-center gap-1.5 uppercase tracking-wider mb-1">
                      <Award className="w-3.5 h-3.5" />
                      مخرجات وحلول ميديا ماينيد
                    </div>
                    <div className="text-xs text-zinc-600 leading-normal">{selectedCase.solution}</div>
                  </div>
                </div>

                {/* Quantitative Metric Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 border-t border-zinc-200">
                  {selectedCase.results.map((res, rIdx) => (
                    <div key={rIdx} className="p-3 rounded-none bg-white border border-zinc-200">
                      <div className="text-[11px] text-zinc-500 font-medium">{res.label}</div>
                      <div className="text-base sm:text-lg font-bold font-display text-zinc-950 mt-0.5 text-gold-gradient">
                        {res.value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tags & Action Buttons */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-4">
                  <div className="flex flex-wrap gap-1.5">
                    {selectedCase.tags.map((t, idx) => (
                      <span key={idx} className="text-[11px] text-zinc-600 bg-white px-2.5 py-1 rounded-md border border-zinc-200 font-semibold">
                        #{t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setModalOpen(true)}
                      className="px-4 py-2.5 rounded-full text-xs font-bold text-zinc-800 hover:text-black bg-white hover:bg-zinc-100 border border-zinc-200 flex items-center gap-1.5 cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5 text-amber-600" />
                      <span>معاينة المعرض</span>
                    </button>

                    <button
                      onClick={onOpenBooking}
                      className="px-5 py-2.5 rounded-full text-xs font-bold bg-gold-gradient text-white flex items-center gap-2 hover:shadow-gold-glow transition-all cursor-pointer"
                    >
                      <PhoneCall className="w-3.5 h-3.5" />
                      <span>احجز مكالمة لمشروعك</span>
                      <ArrowLeft className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Column: Visual Mockup with Gallery Switcher */}
              <div className="lg:col-span-5 relative space-y-3">
                <div 
                  onClick={() => setModalOpen(true)}
                  className="relative rounded-none overflow-hidden border border-zinc-200 aspect-[4/3] group cursor-pointer"
                >
                  <img
                    src={activeImage}
                    alt={selectedCase.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-white/90 backdrop-blur-md text-[11px] font-mono text-zinc-800 border border-zinc-200 flex items-center gap-1 font-semibold">
                    <ImageIcon className="w-3 h-3 text-amber-600" />
                    <span>انقر لتكبير المعرض</span>
                  </div>
                  
                  {/* Floating Stat Badge */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-none bg-white/95 backdrop-blur-md border border-zinc-200 flex items-center justify-between text-right">
                    <div>
                      <div className="text-[11px] text-zinc-500 uppercase font-mono tracking-wider font-bold">أثر المشروع</div>
                      <div className="text-xl font-bold font-display text-zinc-950 text-gold-gradient">
                        {selectedCase.revenue}
                      </div>
                    </div>
                    <div className="text-left">
                      <div className="text-xs text-emerald-600 font-bold flex items-center gap-1 justify-end">
                        <TrendingUp className="w-3.5 h-3.5" />
                        {selectedCase.growth}
                      </div>
                      <div className="text-xs text-zinc-500 font-bold">{selectedCase.roas}</div>
                    </div>
                  </div>
                </div>

                {/* Thumbnail selector */}
                <div className="flex items-center gap-2.5">
                  <button
                    onClick={() => setActiveImage(selectedCase.heroImage)}
                    className={`relative rounded-lg overflow-hidden h-14 w-20 border transition-all cursor-pointer ${
                      activeImage === selectedCase.heroImage ? 'border-amber-600 ring-2 ring-amber-500/40' : 'border-zinc-200 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={selectedCase.heroImage} alt="Main view" className="w-full h-full object-cover" />
                  </button>
                  {selectedCase.gallery && selectedCase.gallery.map((imgUrl, gIdx) => (
                    <button
                      key={gIdx}
                      onClick={() => setActiveImage(imgUrl)}
                      className={`relative rounded-lg overflow-hidden h-14 w-20 border transition-all cursor-pointer ${
                        activeImage === imgUrl ? 'border-amber-600 ring-2 ring-amber-500/40' : 'border-zinc-200 opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={imgUrl} alt={`Gallery view ${gIdx + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                  <div className="text-[11px] text-zinc-500 font-mono mr-2 font-bold">
                    {1 + (selectedCase.gallery?.length || 0)} أصول وتصاميم
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Gallery Cards Grid in Arabic */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredStudies.map((study) => (
            <div
              key={study.id}
              onClick={() => handleSelectCase(study)}
              className={`cursor-pointer rounded-none bg-white p-5 border transition-all duration-300 relative group flex flex-col justify-between ${
                selectedCase?.id === study.id
                  ? 'border-gold-500 ring-2 ring-gold-400/20 scale-[1.02]'
                  : 'border-zinc-200 hover:border-gold-500/60'
              }`}
            >
              <div>
                <div className="relative rounded-none overflow-hidden aspect-[16/11] mb-4">
                  <img
                    src={study.heroImage}
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2 left-2 bg-white/95 backdrop-blur-md text-amber-800 font-mono text-[10px] px-2 py-0.5 rounded border border-zinc-200 font-bold">
                    {study.roas}
                  </div>
                  <div className="absolute bottom-2 right-2 bg-zinc-950/90 backdrop-blur-md text-white text-[10px] px-2 py-0.5 rounded border border-zinc-700">
                    {study.category}
                  </div>
                </div>

                <div className="text-[11px] text-zinc-500 tracking-wider mb-1 font-bold">
                  {study.tag}
                </div>
                <h4 className="text-lg font-bold font-display text-zinc-900 group-hover:text-amber-800 transition-colors">
                  {study.title}
                </h4>
                <p className="text-xs text-zinc-600 mt-1 line-clamp-2">
                  {study.summary}
                </p>
              </div>

              <div className="flex items-center justify-between mt-4 pt-3 border-t border-zinc-100">
                <div className="text-xs text-zinc-500 font-bold">النتيجة المحققة</div>
                <div className="text-sm font-bold text-amber-700 font-display">{study.revenue}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox / Project Gallery Modal in Arabic */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-900/70 backdrop-blur-md animate-fade-in text-right">
          <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-none bg-white border border-zinc-200 p-6 sm:p-8">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-5 left-5 p-2 rounded-full bg-zinc-100 text-zinc-600 hover:text-black hover:bg-zinc-200 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-mono uppercase text-amber-800 mb-2 font-bold">
              <Sparkles className="w-4 h-4 text-amber-600" />
              أصول وتصاميم المشروع: {selectedCase.client}
            </div>

            <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-zinc-950 mb-4">
              {selectedCase.title}
            </h3>

            {/* Gallery Image Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="rounded-none overflow-hidden border border-zinc-200 aspect-[4/3]">
                <img src={selectedCase.heroImage} alt="Hero View" className="w-full h-full object-cover" />
              </div>
              {selectedCase.gallery && selectedCase.gallery.map((img, i) => (
                <div key={i} className="rounded-none overflow-hidden border border-zinc-200 aspect-[4/3]">
                  <img src={img} alt={`Deliverable ${i + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>

            <div className="p-4 rounded-none bg-zinc-50 border border-zinc-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-zinc-700 font-bold">
                هل ترغب في أن تنفذ ميديا ماينيد مشروعاً مماثلاً لعلامتك التجارية؟
              </div>
              <button
                onClick={() => {
                  setModalOpen(false);
                  onOpenBooking();
                }}
                className="px-6 py-2.5 rounded-full text-xs font-bold bg-gold-gradient text-white cursor-pointer flex items-center gap-2"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>احجز مكالمة استشارية لمشروعك</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
