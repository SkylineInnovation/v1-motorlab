import Image from "next/image";
import Link from "next/link";
import AnimatedButton from "../ui/AnimatedButton";

const services = [
  {
    id: 1,
    title: "الفحص الشامل لغايات الشراء",
    description: "فحص كامل للسيارة قبل الشراء يشمل أكثر من 290 نقطة فحص مع تقرير مفصل",
    icon: "/images/service-full-inspection.svg",
    link: "/services/full-inspection",
  },
  {
    id: 2,
    title: "فحص الشاسي والهيكل",
    description: "فحص دقيق للشاسي والهيكل للكشف عن أي أضرار أو إصلاحات سابقة",
    icon: "/images/service-chassis.svg",
    link: "/services/chassis-inspection",
  },
  {
    id: 3,
    title: "فحص المنظومة الكهربائية",
    description: "فحص شامل للنظام الكهربائي والإلكتروني في السيارة",
    icon: "/images/service-electrical.svg",
    link: "/services/electrical-inspection",
  },
  {
    id: 4,
    title: "الفحص الميكانيكي الشامل",
    description: "فحص المحرك وناقل الحركة وجميع الأنظمة الميكانيكية",
    icon: "/images/service-mechanical.svg",
    link: "/services/mechanical-inspection",
  },
  {
    id: 5,
    title: "فحص الفرامل ونظام التعليق",
    description: "فحص دقيق لنظام الفرامل والتعليق لضمان سلامة القيادة",
    icon: "/images/service-brakes.svg",
    link: "/services/brakes-suspension",
  },
];

export default function Services() {
  return (
    <section className="relative z-10 py-24" id="services">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-dark border border-white/20 text-white/90 mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
              <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
              <path d="M2 17l10 5 10-5"></path>
              <path d="M2 12l10 5 10-5"></path>
            </svg>
            <span className="text-xs font-medium">خدماتنا المتميزة</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white/90 tracking-tighter mb-4">
            فحص متطور بتقنية 
            <span className="text-secondary"> عالمية</span>
          </h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            نقدم مجموعة شاملة من خدمات فحص السيارات بأحدث التقنيات وأعلى المعايير العالمية لضمان سلامتك وراحة بالك
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const gradients = [
              { from: 'from-blue-600', to: 'to-purple-600', glow: 'from-blue-600/20 to-purple-600/20' },
              { from: 'from-secondary', to: 'to-orange-600', glow: 'from-secondary/20 to-orange-600/20' },
              { from: 'from-purple-600', to: 'to-pink-600', glow: 'from-purple-600/20 to-pink-600/20' },
              { from: 'from-emerald-600', to: 'to-teal-600', glow: 'from-emerald-600/20 to-teal-600/20' },
              { from: 'from-rose-600', to: 'to-orange-600', glow: 'from-rose-600/20 to-orange-600/20' },
            ];
            const gradient = gradients[index % gradients.length];
            
            return (
            <div
              key={service.id}
              className="group relative overflow-hidden glass-dark border border-white/10 p-8 rounded-2xl hover:border-secondary/50 transition-all duration-300 hover-lift"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${gradient.glow} rounded-full blur-3xl`}></div>
              <div className="relative z-10">
                {/* Icon */}
                <div className={`w-14 h-14 bg-gradient-to-r ${gradient.from} ${gradient.to} rounded-xl flex items-center justify-center mb-6 shadow-lg`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold mb-3 text-white" style={{ fontFamily: 'var(--font-cairo)' }}>{service.title}</h3>
                
                {/* Description */}
                <p className="text-white/70 leading-relaxed mb-4">
                  {service.description}
                </p>
                
                {/* Badge */}
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-secondary bg-secondary/10 border border-secondary/20 rounded-full px-3 py-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  معتمد
                </span>
              </div>
            </div>
          )})}
        </div>

        {/* Bottom Section */}
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Left Side - Stats */}
          <div className="relative rounded-3xl glass-dark border border-white/10 p-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-white/10">
              <h3 className="text-2xl text-white font-bold tracking-tighter">إحصائيات متميزة</h3>
              <span className="inline-flex items-center gap-2 text-xs text-white/80 glass-dark border border-white/20 rounded-full px-3 py-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
                  <path d="M3 3v18h18"></path>
                  <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"></path>
                </svg>
                نمو مستمر
              </span>
            </div>

            <div className="grid grid-cols-2 gap-6 border-t border-white/10 pt-6">
              <div>
                <h4 className="text-lg font-medium tracking-tight text-white">290+</h4>
                <p className="mt-2 text-sm text-white/70">نقطة فحص شاملة</p>
              </div>
              <div>
                <h4 className="text-lg font-medium tracking-tight text-white">5000+</h4>
                <p className="mt-2 text-sm text-white/70">عميل راضٍ</p>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-white/10">
              <AnimatedButton 
                href="/services" 
                variant="glass"
                className="w-full justify-center"
              >
                عرض جميع الخدمات
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </AnimatedButton>
            </div>
          </div>

          {/* Right Side - Features */}
          <div>
            <h3 className="text-4xl sm:text-5xl text-white font-bold tracking-tighter mb-8">
              مبني للثقة، آمن بالتصميم
            </h3>
            <div className="border-t border-white/10 pt-6">
              <div className="space-y-6">
                <div className="flex items-start gap-4 pb-4 border-b border-white/5">
                  <div className="w-8 h-8 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-blue-300">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-medium text-white">فريق متخصص</h5>
                    <p className="text-sm text-white/70 mt-1">خبراء معتمدون في فحص السيارات</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 pb-4 border-b border-white/5">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-emerald-300">
                      <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-medium text-white">أمان وخصوصية</h5>
                    <p className="text-sm text-white/70 mt-1">حماية كاملة لبياناتك ومعلوماتك</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-purple-300">
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-medium text-white">ضمان الجودة</h5>
                    <p className="text-sm text-white/70 mt-1">تقارير دقيقة ومعتمدة عالمياً</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
