import React, { useState } from 'react';
import { X, CheckCircle, Sparkles, MapPin, ShieldCheck, PhoneCall } from 'lucide-react';

export default function ContactModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    location: 'الإمارات العربية المتحدة (UAE)',
    projectType: 'إدارة صفحات السوشيال ميديا للشركات',
    projectScope: 'تطوير ونمو علامة تجارية قائمة',
    notes: ''
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-900/60 backdrop-blur-md animate-fade-in text-right">
      <div className="relative w-full max-w-xl rounded-none bg-white border border-zinc-200 p-6 sm:p-8 text-zinc-900">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 left-5 p-2 rounded-full bg-zinc-100 text-zinc-500 hover:text-black hover:bg-zinc-200 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 mb-2 text-zinc-900 text-xs font-mono uppercase tracking-widest font-bold">
              <Sparkles className="w-4 h-4 text-zinc-700" />
              مقراتنا الإقليمية في لبنان والإمارات
            </div>

            <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-zinc-950 mb-2">
              احجز <span className="text-zinc-950">مكالمتك الاستشارية</span>
            </h3>
            
            <p className="text-zinc-600 text-xs sm:text-sm mb-6 leading-relaxed">
              نخدم الشركات والمتاجر في الإمارات، لبنان، الخليج، وحول العالم. شاركنا متطلبات براندك لترتيب جلسة عمل ومناقشة تفاصيل المشروع.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-zinc-700 mb-1.5">
                    الاسم الكامل
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="مثال: عمر الأحمد"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-none bg-zinc-50 border border-zinc-200 focus:border-black focus:outline-none text-zinc-900 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-zinc-700 mb-1.5">
                    البريد الإلكتروني للعمل
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="omar@brand.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-none bg-zinc-50 border border-zinc-200 focus:border-black focus:outline-none text-zinc-900 text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-zinc-700 mb-1.5">
                    اسم الشركة / المتجر الحالي
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="مثال: أورا لوكس أو رابط المتجر"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-none bg-zinc-50 border border-zinc-200 focus:border-black focus:outline-none text-zinc-900 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-zinc-700 mb-1.5">
                    مقر إقامتك / تواجد الشركة
                  </label>
                  <select
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-none bg-zinc-50 border border-zinc-200 focus:border-black focus:outline-none text-zinc-900 text-sm cursor-pointer font-medium"
                  >
                    <option value="الإمارات العربية المتحدة (UAE)">الإمارات العربية المتحدة (UAE)</option>
                    <option value="لبنان (Lebanon)">لبنان (Lebanon)</option>
                    <option value="المملكة العربية السعودية (KSA) والخليج">المملكة العربية السعودية (KSA) والخليج</option>
                    <option value="أمريكا وأوروبا">أمريكا وأوروبا</option>
                    <option value="دولة أخرى">دولة أخرى</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-zinc-700 mb-1.5">
                    المشروع المطلوب
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-none bg-zinc-50 border border-zinc-200 focus:border-black focus:outline-none text-zinc-900 text-sm cursor-pointer font-medium"
                  >
                    <option value="إدارة صفحات السوشيال ميديا للشركات">إدارة صفحات السوشيال ميديا للشركات</option>
                    <option value="الهوية البصرية والبراندنج الفاخر">الهوية البصرية والبراندنج الفاخر</option>
                    <option value="تصميم التغليف والعلب وتجربة الـ Unboxing">تصميم التغليف والعلب وتجربة الـ Unboxing</option>
                    <option value="تطوير متجر شوبيفاي أو موقع إلكتروني">تطوير متجر شوبيفاي أو موقع إلكتروني</option>
                    <option value="الباقة الشاملة (سوشيال + هوية + متجر)">الباقة الشاملة (سوشيال + هوية + متجر)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-zinc-700 mb-1.5">
                    نطاق وحجم المشروع المطلوب
                  </label>
                  <select
                    value={formData.projectScope}
                    onChange={(e) => setFormData({ ...formData, projectScope: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-none bg-zinc-50 border border-zinc-200 focus:border-black focus:outline-none text-zinc-900 text-sm cursor-pointer font-medium"
                  >
                    <option value="مشروع تأسيسي / انطلاقة جديدة">مشروع تأسيسي / انطلاقة جديدة</option>
                    <option value="تطوير ونمو علامة تجارية قائمة">تطوير ونمو علامة تجارية قائمة</option>
                    <option value="توسع شامل وتغطية إقليمية كاملة">توسع شامل وتغطية إقليمية كاملة</option>
                    <option value="شراكة استراتيجية / إدارة شهرية شاملة">شراكة استراتيجية / إدارة شهرية شاملة</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-700 mb-1.5">
                  نبذة سريعة عن أهدافك (اختياري)
                </label>
                <textarea
                  rows="2"
                  placeholder="أخبرنا باختصار عن موعد الإطلاق المستهدف وما الذي تود من فريقنا إنجازه..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-4 py-2 rounded-none bg-zinc-50 border border-zinc-200 focus:border-black focus:outline-none text-zinc-900 text-sm resize-none"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 rounded-none font-bold text-sm bg-zinc-950 text-white flex items-center justify-center gap-2-gold-glow hover:shadow-gold-glow-lg transition-all cursor-pointer"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>تأكيد طلب حجز المكالمة الاستشارية</span>
                </button>
              </div>

              <div className="flex items-center justify-between text-[11px] text-zinc-500 pt-1 font-bold">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>اتفاقية سرية معلومات مضمونة (NDA)</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-zinc-700" />
                  <span>مكاتبنا: دبي وبيروت</span>
                </div>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-300 flex items-center justify-center text-emerald-600 mx-auto">
              <CheckCircle className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-display font-extrabold text-zinc-950">
              تم استلام طلب المكالمة بنجاح!
            </h3>

            <p className="text-zinc-600 text-sm max-w-md mx-auto leading-relaxed">
              شكراً لك، <span className="text-zinc-950 font-bold">{formData.name}</span>. فريقنا التنفيذي في <span className="text-zinc-950 font-bold">{formData.location}</span> يقوم الآن بمراجعة طلب <span className="text-zinc-950 font-bold">{formData.company}</span>.
            </p>

            <div className="p-4 rounded-none bg-zinc-50 border border-zinc-200 text-xs text-zinc-600 max-w-sm mx-auto font-medium">
              تم إرسال تأكيد الموعد إلى <span className="text-zinc-900 font-bold">{formData.email}</span>. سيتواصل معك أحد خبرائنا من استوديو بيروت أو دبي خلال 24 ساعة.
            </div>

            <button
              onClick={handleReset}
              className="px-6 py-2.5 rounded-full text-xs font-bold bg-zinc-900 text-white hover:bg-zinc-950 mt-4 cursor-pointer"
            >
              العودة إلى الموقع
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
