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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="relative rounded-2xl border border-white/10 bg-gradient-card ring-1 ring-inset ring-white/5 overflow-hidden hover-lift group"
            >
              {/* Card Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-white/20 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/80">
                      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-white/90">{service.title}</span>
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-secondary bg-secondary/10 border border-secondary/20 rounded-full px-2 py-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  معتمد
                </span>
              </div>

              {/* Card Content */}
              <div className="px-6 py-6 space-y-4">
                <div className="rounded-lg bg-gray-950/40 border border-white/10 p-4">
                  <div className="flex items-start gap-3">
                    <div className="h-8 w-8 rounded-full bg-secondary/20 border border-secondary/30 flex items-center justify-center flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-secondary">
                        <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-white/80 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-6 py-4 border-t border-white/10 flex items-center gap-2 text-xs text-white/60">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
                  <path d="M12 18V5"></path>
                  <path d="M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4"></path>
                </svg>
                <span>فحص دقيق ومعتمد</span>
              </div>
            </div>
          ))}
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
