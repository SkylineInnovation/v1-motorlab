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
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
          مرحباً {user?.name}!
        </h2>
        <p className="text-gray-600">
          نحن سعداء بانضمامك إلى MotorLab. دعنا نساعدك في حجز موعد لفحص سيارتك.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {features.map((feature) => (
          <div 
            key={feature.id}
            className="flex items-start p-4 border border-gray-200 rounded-lg hover:border-primary transition-colors"
          >
            <div className="flex-shrink-0 mr-4">
              <div className="bg-primary p-3 rounded-full flex items-center justify-center">
                {React.createElement(feature.icon, {
                  className: "w-6 h-6 text-white",
                  'aria-hidden': true
                })}
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg text-primary mb-1">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-blue-50 p-4 rounded-lg mb-6">
        <h3 className="font-bold text-primary mb-2">كيف تعمل خدمة الحجز؟</h3>
        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          <li>اختر التاريخ والوقت المناسب لك</li>
          <li>أخبرنا عن مشكلة سيارتك</li>
          <li>تأكيد الحجز واستلام رمز الحجز</li>
          <li>احضر في الموعد المحدد مع رمز الحجز</li>
        </ol>
      </div>

      <div className="text-center">
        <button
          onClick={handleContinue}
          className="bg-secondary hover:bg-opacity-90 text-white px-8 py-3 rounded-full font-medium text-lg transition-colors"
        >
          حجز موعد الآن
        </button>
      </div>
    </div>
  );
}
