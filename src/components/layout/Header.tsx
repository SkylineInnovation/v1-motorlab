"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { user, logout, isAuthenticated } = useAuth();
  
  // Only show auth UI after mounting to prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-6xl px-6">
      <div className="glass-dark rounded-full shadow-2xl backdrop-blur-xl border border-white/10">
        <div className="flex pt-3 pr-6 pb-3 pl-6 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.svg"
            alt="MotorLab Logo"
            width={160}
            height={48}
            priority
          />
        </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white/80 hover:text-white focus:outline-none p-2 rounded-lg border border-white/20"
            onClick={toggleMenu}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className="text-white/90 hover:text-white text-sm font-medium transition-colors"
            >
              الرئيسية
            </Link>
            <Link
              href="/services"
              className="text-white/90 hover:text-white text-sm font-medium transition-colors"
            >
              خدماتنا
            </Link>
            <Link
              href="/booking"
              className="text-white/90 hover:text-white text-sm font-medium transition-colors"
            >
              احجز موعد
            </Link>
            <Link
              href="/about"
              className="text-white/90 hover:text-white text-sm font-medium transition-colors"
            >
              من نحن
            </Link>
            <Link
              href="/blog"
              className="text-white/90 hover:text-white text-sm font-medium transition-colors"
            >
              المدونة
            </Link>
            <Link
              href="/contact"
              className="text-white/90 hover:text-white text-sm font-medium transition-colors"
            >
              تواصل معنا
            </Link>
            <button className="text-white/80 hover:text-white text-sm font-medium transition-colors">
              العربية | EN
            </button>
          
            {/* Logout Button - Only shown when authenticated */}
            {mounted && isAuthenticated && (
              <button 
                onClick={logout}
                className="text-red-400 hover:text-red-300 text-sm font-medium transition-colors flex items-center"
              >
                <span className="ml-1">تسجيل الخروج</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
              </button>
            )}
          </nav>

          {/* User greeting or Book Now Button */}
          <div className="hidden md:flex items-center gap-3">
            {mounted && isAuthenticated ? (
              <>
                <span className="text-white/80 text-sm font-medium">
                  مرحباً {user?.name}
                </span>
                <Link
                  href="/booking"
                  className="bg-secondary hover:bg-opacity-90 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors"
                >
                  احجز موعد الآن
                </Link>
              </>
            ) : (
              <Link
                href="/booking"
                className="bg-secondary hover:bg-opacity-90 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors"
              >
                احجز موعد الآن
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 glass-dark rounded-2xl mt-2 shadow-2xl md:hidden z-50 mx-6">
          <div className="flex flex-col p-4 space-y-4 text-right">
            {/* Mobile User Greeting */}
            {mounted && isAuthenticated && (
              <div className="text-white/80 font-medium border-b border-white/20 pb-2 mb-2">
                مرحباً {user?.name}
              </div>
            )}
            <Link
              href="/"
              className="text-white/90 hover:text-white font-medium transition-colors"
              onClick={toggleMenu}
            >
              الرئيسية
            </Link>
            <Link
              href="/services"
              className="text-white/90 hover:text-white font-medium transition-colors"
              onClick={toggleMenu}
            >
              خدماتنا
            </Link>
            <Link
              href="/booking"
              className="text-white/90 hover:text-white font-medium transition-colors"
              onClick={toggleMenu}
            >
              احجز موعد
            </Link>
            <Link
              href="/about"
              className="text-white/90 hover:text-white font-medium transition-colors"
              onClick={toggleMenu}
            >
              من نحن
            </Link>
            <Link
              href="/blog"
              className="text-white/90 hover:text-white font-medium transition-colors"
              onClick={toggleMenu}
            >
              المدونة
            </Link>
            <Link
              href="/contact"
              className="text-white/90 hover:text-white font-medium transition-colors"
              onClick={toggleMenu}
            >
              تواصل معنا
            </Link>
            <button className="text-white/80 hover:text-white font-medium transition-colors text-right">
              العربية | EN
            </button>
            
            {/* Logout Button for Mobile - Only shown when authenticated */}
            {mounted && isAuthenticated && (
              <button 
                onClick={() => {
                  logout();
                  toggleMenu();
                }}
                className="text-red-400 hover:text-red-300 font-medium transition-colors flex items-center justify-end"
              >
                <span className="ml-1">تسجيل الخروج</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
              </button>
            )}
            <Link
              href="/booking"
              className="bg-secondary hover:bg-opacity-90 text-white px-6 py-2 rounded-full font-medium transition-colors text-center"
              onClick={toggleMenu}
            >
              احجز موعد الآن
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
