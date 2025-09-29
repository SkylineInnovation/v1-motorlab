"use client";

import { useEffect, useState } from 'react';
import { useBooking } from '@/context/BookingContext';
import { useAuth } from '@/context/AuthContext';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function SuccessConfirmation() {
  const { lastCreatedBookingId, getBookingById, resetBookingForm } = useBooking();
  const { user } = useAuth();
  const router = useRouter();
  const [booking, setBooking] = useState<any>(null);
  const [bookingCode, setBookingCode] = useState('');

  // Generate a random booking code
  useEffect(() => {
    const generateBookingCode = () => {
      const letters = 'ABCDEFGHJKLMNPQRSTUVWXYZ';
      const numbers = '123456789';
      let code = '';
      
      // Generate 3 random letters
      for (let i = 0; i < 3; i++) {
        code += letters.charAt(Math.floor(Math.random() * letters.length));
      }
      
      // Add a hyphen
      code += '-';
      
      // Generate 4 random numbers
      for (let i = 0; i < 4; i++) {
        code += numbers.charAt(Math.floor(Math.random() * numbers.length));
      }
      
      return code;
    };

    setBookingCode(generateBookingCode());
  }, []);

  // Get booking details
  useEffect(() => {
    if (lastCreatedBookingId) {
      const bookingDetails = getBookingById(lastCreatedBookingId);
      if (bookingDetails) {
        setBooking(bookingDetails);
      }
    }
  }, [lastCreatedBookingId, getBookingById]);

  // Format date to Arabic format
  const formatDate = (dateString: string) => {
    if (!dateString) return '';
    
    const date = new Date(dateString);
    return date.toLocaleDateString('ar-SA', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  // Handle booking another appointment
  const handleBookAnother = () => {
    resetBookingForm();
    router.push('/');
  };

  if (!booking) {
    return (
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg text-center">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-3/4 mx-auto mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto mb-8"></div>
          <div className="h-32 bg-gray-200 rounded mb-4"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg">
      <div className="text-center mb-6">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 text-green-600">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-primary mb-2">
          تم تأكيد الحجز بنجاح!
        </h2>
        <p className="text-gray-600">
          لقد تم حجز موعدك بنجاح. سنرسل لك تذكيراً قبل الموعد.
        </p>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg mb-6">
        <div className="text-center mb-4">
          <p className="text-sm text-gray-500 mb-1">رمز الحجز</p>
          <p className="text-2xl font-mono font-bold tracking-wider text-primary">{bookingCode}</p>
        </div>

        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-gray-500">الاسم:</span>
            <span className="font-medium">{user?.name}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">التاريخ:</span>
            <span className="font-medium">{formatDate(booking.date)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">الوقت:</span>
            <span className="font-medium">{booking.time}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">وصف المشكلة:</span>
            <span className="font-medium">{booking.description}</span>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 p-4 rounded-lg mb-6">
        <h3 className="font-bold text-primary mb-2">تعليمات هامة:</h3>
        <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
          <li>يرجى الحضور قبل الموعد بـ 15 دقيقة</li>
          <li>احضر معك رخصة القيادة واستمارة السيارة</li>
          <li>تأكد من إحضار رمز الحجز للتحقق من موعدك</li>
          <li>يمكنك تعديل أو إلغاء الحجز قبل 24 ساعة من الموعد</li>
        </ul>
      </div>

      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <button
          onClick={handleBookAnother}
          className="bg-white border border-primary text-primary hover:bg-primary hover:text-white px-6 py-2 rounded-md transition-colors"
        >
          حجز موعد آخر
        </button>
        <Link
          href="/"
          className="bg-secondary hover:bg-opacity-90 text-white px-6 py-2 rounded-md transition-colors text-center"
        >
          العودة للرئيسية
        </Link>
      </div>
    </div>
  );
}
