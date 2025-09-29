"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
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
          className="md:hidden text-gray-700 hover:text-gray-900 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
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
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="/"
            className="text-gray-700 hover:text-orange-500 font-medium transition-colors"
          >
            الرئيسية
          </Link>
          <Link
            href="/services"
            className="text-gray-700 hover:text-orange-500 font-medium transition-colors"
          >
            خدماتنا
          </Link>
          <Link
            href="/booking"
            className="text-gray-700 hover:text-orange-500 font-medium transition-colors"
          >
            احجز موعد
          </Link>
          <Link
            href="/about"
            className="text-gray-700 hover:text-orange-500 font-medium transition-colors"
          >
            من نحن
          </Link>
          <Link
            href="/blog"
            className="text-gray-700 hover:text-orange-500 font-medium transition-colors"
          >
            المدونة
          </Link>
          <Link
            href="/contact"
            className="text-gray-700 hover:text-orange-500 font-medium transition-colors"
          >
            تواصل معنا
          </Link>
          <button className="text-gray-700 hover:text-orange-500 font-medium transition-colors">
            العربية | EN
          </button>
        </nav>

        {/* Book Now Button */}
        <Link
          href="/booking"
          className="hidden md:block bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-medium transition-colors"
        >
          احجز موعد الآن
        </Link>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-md md:hidden z-50">
            <div className="flex flex-col p-4 space-y-4 text-right">
              <Link
                href="/"
                className="text-gray-700 hover:text-orange-500 font-medium transition-colors"
                onClick={toggleMenu}
              >
                الرئيسية
              </Link>
              <Link
                href="/services"
                className="text-gray-700 hover:text-orange-500 font-medium transition-colors"
                onClick={toggleMenu}
              >
                خدماتنا
              </Link>
              <Link
                href="/booking"
                className="text-gray-700 hover:text-orange-500 font-medium transition-colors"
                onClick={toggleMenu}
              >
                احجز موعد
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-orange-500 font-medium transition-colors"
                onClick={toggleMenu}
              >
                من نحن
              </Link>
              <Link
                href="/blog"
                className="text-gray-700 hover:text-orange-500 font-medium transition-colors"
                onClick={toggleMenu}
              >
                المدونة
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-orange-500 font-medium transition-colors"
                onClick={toggleMenu}
              >
                تواصل معنا
              </Link>
              <button className="text-gray-700 hover:text-orange-500 font-medium transition-colors text-right">
                العربية | EN
              </button>
              <Link
                href="/booking"
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-medium transition-colors text-center"
                onClick={toggleMenu}
              >
                احجز موعد الآن
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
