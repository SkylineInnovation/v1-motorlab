import Image from "next/image";
import Link from "next/link";

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
    <section className="py-16 bg-gray-50" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">خدماتنا</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            نقدم مجموعة شاملة من خدمات فحص السيارات بأحدث التقنيات وأعلى المعايير
            العالمية لضمان سلامتك وراحة بالك
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6 flex flex-col items-center text-center">
                <div className="w-20 h-20 mb-4">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={80}
                    height={80}
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link
                  href={service.link}
                  className="text-secondary hover:text-primary font-medium inline-flex items-center"
                >
                  <span>المزيد من التفاصيل</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-4 h-4 mr-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/services"
            className="bg-primary hover:bg-opacity-90 text-white px-6 py-3 rounded-full font-medium transition-colors inline-block"
          >
            عرض جميع الخدمات
          </Link>
        </div>
      </div>
    </section>
  );
}
