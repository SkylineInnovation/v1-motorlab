"use client";

import { useEffect } from 'react';
import BookingContainer from '@/components/booking/BookingContainer';
import Link from 'next/link';

export default function BookingPage() {
  // Set page title
  useEffect(() => {
    document.title = 'حجز موعد فحص - MotorLab';
  }, []);

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-primary">
              MotorLab
            </Link>
            <nav>
              <Link href="/" className="text-gray-600 hover:text-primary transition-colors">
                الرئيسية
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Booking container */}
      <BookingContainer />

      {/* Footer */}
      <footer className="bg-white border-t py-6 mt-12">
        <div className="container mx-auto px-4 text-center text-sm text-gray-500">
          جميع الحقوق محفوظة &copy; {new Date().getFullYear()} MotorLab
        </div>
      </footer>
    </main>
  );
}
