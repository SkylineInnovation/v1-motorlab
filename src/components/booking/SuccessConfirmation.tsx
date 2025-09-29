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
      <div className="max-w-2xl mx-auto bg-white border border-gray-200 rounded-2xl shadow-sm p-8 text-center">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-3/4 mx-auto mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto mb-8"></div>
          <div className="h-32 bg-gray-200 rounded mb-4"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto bg-white border border-gray-200 rounded-2xl shadow-sm p-8">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-50 border-4 border-green-100 mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-10 h-10 text-green-600">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'var(--font-cairo)' }}>
          تم تأكيد الحجز بنجاح!
        </h2>
        <p className="text-gray-600 text-lg">
          لقد تم حجز موعدك بنجاح. سنرسل لك تذكيراً قبل الموعد.
        </p>
      </div>

      <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-6 rounded-xl mb-8 border border-gray-200">
        <div className="text-center mb-6 pb-6 border-b border-gray-200">
          <p className="text-sm text-gray-600 font-medium mb-2">رمز الحجز</p>
          <p className="text-3xl font-mono font-bold tracking-wider text-primary">{bookingCode}</p>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-gray-600 font-medium">الاسم:</span>
            <span className="font-semibold text-gray-900">{user?.name}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600 font-medium">التاريخ:</span>
            <span className="font-semibold text-gray-900">{formatDate(booking.date)}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600 font-medium">الوقت:</span>
            <span className="font-semibold text-gray-900">{booking.time}</span>
          </div>
          <div className="flex justify-between items-start">
            <span className="text-gray-600 font-medium">وصف المشكلة:</span>
            <span className="font-semibold text-gray-900 text-left max-w-xs">{booking.description}</span>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 p-6 rounded-xl mb-8 border border-gray-200">
        <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
          تعليمات هامة:
        </h3>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            <span>يرجى الحضور قبل الموعد بـ 15 دقيقة</span>
          </li>
          <li className="flex items-start gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
            </svg>
            <span>احضر معك رخصة القيادة واستمارة السيارة</span>
          </li>
          <li className="flex items-start gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
            <span>تأكد من إحضار رمز الحجز للتحقق من موعدك</span>
          </li>
          <li className="flex items-start gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
            <span>يمكنك تعديل أو إلغاء الحجز قبل 24 ساعة من الموعد</span>
          </li>
        </ul>
      </div>

      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <button
          onClick={handleBookAnother}
          className="bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-lg transition-all font-medium shadow-sm hover:shadow-md"
        >
          حجز موعد آخر
        </button>
        <Link
          href="/"
          className="bg-secondary hover:bg-secondary/90 text-white px-8 py-3 rounded-lg transition-all text-center font-medium shadow-sm hover:shadow-md"
        >
          العودة للرئيسية
        </Link>
      </div>
    </div>
  );
}
