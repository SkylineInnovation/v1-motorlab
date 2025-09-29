"use client";

import { useEffect, useState } from 'react';
import BookingContainer from '@/components/booking/BookingContainer';
import Link from 'next/link';
import Image from 'next/image';
import { useAuth } from '@/context/AuthContext';

export default function BookingPage() {
  const [mounted, setMounted] = useState(false);
  const { user, logout, isAuthenticated } = useAuth();
  
  // Set page title and handle mounting
  useEffect(() => {
    document.title = 'حجز موعد فحص - MotorLab';
    setMounted(true);
  }, []);

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <Image
                  src="/images/logo.svg"
                  alt="MotorLab Logo"
                  width={160}
                  height={48}
                  priority
                />
              </Link>
              {/* User greeting - Only shown when authenticated */}
              {mounted && isAuthenticated && (
                <span className="text-primary font-medium mr-4 hidden sm:inline-block">
                  مرحباً {user?.name}
                </span>
              )}
            </div>
            <nav className="flex items-center space-x-6">
              <Link href="/" className="text-gray-600 hover:text-primary transition-colors ml-6">
                الرئيسية
              </Link>
              
              {/* Logout Button - Only shown when authenticated */}
              {mounted && isAuthenticated && (
                <button 
                  onClick={logout}
                  className="text-red-600 hover:text-red-800 font-medium transition-colors flex items-center"
                >
                  <span className="ml-1">تسجيل الخروج</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                </button>
              )}
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
