"use client";

import React from 'react';
import { useBooking } from '@/context/BookingContext';
import { useAuth } from '@/context/AuthContext';
// Import React Icons
import { FaCar, FaCogs, FaCarCrash } from 'react-icons/fa';
import { MdCarRepair, MdOutlineDirectionsCar } from 'react-icons/md';
import { IoSpeedometerOutline } from 'react-icons/io5';

const features = [
  {
    id: 1,
    title: 'فحص شامل للسيارة',
    description: 'أكثر من 290 نقطة فحص مع تقرير معتمد',
    icon: FaCar,
  },
  {
    id: 2,
    title: 'فحص المحرك',
    description: 'تشخيص دقيق لأداء المحرك وكفاءته',
    icon: FaCogs,
  },
  {
    id: 3,
    title: 'فحص الفرامل',
    description: 'اختبار كفاءة الفرامل وأنظمة السلامة',
    icon: IoSpeedometerOutline,
  },
  {
    id: 4,
    title: 'فحص الشاسيه',
    description: 'تحليل حالة الشاسيه والهيكل',
    icon: MdCarRepair,
  },
];

export default function Onboarding() {
  const { setCurrentStep } = useBooking();
  const { user } = useAuth();

  const handleContinue = () => {
    setCurrentStep('calendar');
  };

  return (
    <div className="max-w-3xl mx-auto bg-white border border-gray-200 rounded-2xl shadow-sm p-8">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'var(--font-cairo)' }}>
          مرحباً {user?.name}!
        </h2>
        <p className="text-gray-600 text-lg">
          نحن سعداء بانضمامك إلى MotorLab. دعنا نساعدك في حجز موعد لفحص سيارتك.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
        {features.map((feature) => (
          <div 
            key={feature.id}
            className="flex items-start p-5 border border-gray-200 rounded-xl hover:border-primary hover:shadow-sm transition-all"
          >
            <div className="flex-shrink-0 ml-4">
              <div className="bg-primary/10 p-3 rounded-lg flex items-center justify-center">
                {React.createElement(feature.icon, {
                  className: "w-6 h-6 text-primary",
                  'aria-hidden': true
                })}
              </div>
            </div>
            <div>
              <h3 className="font-bold text-base text-gray-900 mb-1">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gray-50 p-6 rounded-xl mb-8 border border-gray-200">
        <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
          كيف تعمل خدمة الحجز؟
        </h3>
        <ol className="space-y-3 text-gray-700">
          <li className="flex items-start gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-sm font-medium">1</span>
            <span>اختر التاريخ والوقت المناسب لك</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-sm font-medium">2</span>
            <span>أخبرنا عن مشكلة سيارتك</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-sm font-medium">3</span>
            <span>تأكيد الحجز واستلام رمز الحجز</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-sm font-medium">4</span>
            <span>احضر في الموعد المحدد مع رمز الحجز</span>
          </li>
        </ol>
      </div>

      <div className="text-center">
        <button
          onClick={handleContinue}
          className="bg-primary hover:bg-primary/90 text-white px-10 py-3 rounded-lg font-medium text-base transition-all shadow-sm hover:shadow-md"
        >
          ابدأ الحجز الآن
        </button>
      </div>
    </div>
  );
}
