"use client";

import { useEffect, useState } from 'react';
import BookingContainer from '@/components/booking/BookingContainer';
import Link from 'next/link';
import Image from 'next/image';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';

export default function BookingPage() {
  const [mounted, setMounted] = useState(false);
  const { user, logout, isAuthenticated } = useAuth();
  const router = useRouter();
  
  // Set page title and handle mounting
  useEffect(() => {
    document.title = 'حجز موعد فحص - MotorLab';
    setMounted(true);
  }, []);

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Simple Header */}
      <header className="border-b border-gray-200 py-4 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo.svg"
                alt="MotorLab Logo"
                width={140}
                height={40}
                priority
              />
            </Link>
            <nav className="flex items-center gap-6">
              {/* User greeting - Only shown when authenticated */}
              {mounted && isAuthenticated && (
                <span className="text-gray-700 font-medium hidden sm:inline-block">
                  مرحباً {user?.name}
                </span>
              )}
              
              <Link href="/" className="text-gray-600 hover:text-primary transition-colors text-sm">
                الرئيسية
              </Link>
              
              {/* Logout Button - Only shown when authenticated */}
              {mounted && isAuthenticated && (
                <button 
                  onClick={handleLogout}
                  className="text-gray-600 hover:text-red-600 font-medium transition-colors flex items-center gap-1 text-sm"
                >
                  <span>تسجيل الخروج</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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

      {/* Simple Footer */}
      <footer className="border-t border-gray-200 py-6 mt-12 bg-white">
        <div className="container mx-auto px-4 text-center text-sm text-gray-500">
          جميع الحقوق محفوظة &copy; {new Date().getFullYear()} MotorLab
        </div>
      </footer>
    </main>
  );
}
