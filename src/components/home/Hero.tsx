"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import AnimatedButton from "../ui/AnimatedButton";

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=1920&h=1080&auto=format&fit=crop",
    blurDataUrl: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAA8DASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQIGAwAAAAAAAAAAAAABAgMABAUGESExQVFhcf/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFREBAQAAAAAAAAAAAAAAAAAAABH/2gAMAwEAAhEDEQA/AKrUcbj7jU7iSW4uJZZXLM7OxJJPZrTjLGWRHMUjI3RU0qLQf//Z",
    title: "فحص شامل بأحدث الأجهزة",
    description: "أكثر من 290 نقطة فحص مع تقرير معتمد",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1493238792000-8113da705763?q=80&w=1920&h=1080&auto=format&fit=crop",
    blurDataUrl: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAA8DASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAeEAACAQMFAAAAAAAAAAAAAAAAAQIDERITITFBUf/EABUBAQEAAAAAAAAAAAAAAAAAAAEA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AoGOLLDZZLTp2tJvd8gAD/9k=",
    title: "معدات متطورة وفريق متخصص",
    description: "نضمن لك دقة النتائج وشفافية التقارير",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1560253023-3ec5d502959f?q=80&w=1920&h=1080&auto=format&fit=crop",
    blurDataUrl: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAA8DASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAABAwMEAwAAAAAAAAAAAAABAAIDBAURBhIhMUFRcf/EABUBAQEAAAAAAAAAAAAAAAAAAAEA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AoOm9JzXm4RtfTvjp2OBkkIwQO+fhXG30FLbKVtPRwtijHgDv6SSg0n//2Q==",
    title: "تقارير معتمدة وموثوقة",
    description: "اتخذ قرارك بثقة مع تقارير MotorLab",
  },
];

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  
  // This effect runs once after component mounts to prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000); // Slightly longer interval for better user experience
    return () => clearInterval(interval);
  }, []);

  // Manual navigation
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Only render the full component after client-side mount to avoid hydration issues
  if (!mounted) {
    return (
      <div className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[650px] overflow-hidden bg-gray-200">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full border-4 border-primary border-t-transparent animate-spin"></div>
        </div>
      </div>
    );
  }

  return (
    <section className="relative overflow-hidden pt-24 min-h-screen">
      {/* Background Slider with Images */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              sizes="100vw"
              quality={90}
              placeholder="blur"
              blurDataURL={slide.blurDataUrl}
              style={{ objectFit: "cover", objectPosition: "center" }}
              priority={index === 0}
              className="scale-105"
            />
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-950/60 via-gray-950/50 to-gray-950/70" />
          </div>
        ))}
      </div>
      
      {/* Main content */}
      <div className="relative z-10 max-w-7xl lg:px-8 mx-auto px-6">
        <div className="sm:pt-16 text-center max-w-4xl mr-auto ml-auto pt-12 pb-48">
          {/* Badge */}
          <span className="inline-flex items-center gap-2 text-xs font-medium text-white/90 glass-dark border-white/20 border rounded-full mr-auto mb-6 ml-auto pt-2 pr-4 pb-2 pl-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
              <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
              <path d="M20 2v4"></path>
              <path d="M22 4h-4"></path>
              <circle cx="4" cy="20" r="2"></circle>
            </svg>
            جديد: خدمة الفحص المتطور
          </span>

          {/* Main heading */}
          <h1 className="sm:text-5xl md:text-6xl lg:text-7xl text-3xl font-bold text-white/90 tracking-tighter mb-6 text-shadow-lg">
            {slides[currentSlide].title.split(' ').map((word, index) => (
              <span key={index} className={index === slides[currentSlide].title.split(' ').length - 1 ? "text-secondary" : ""}>
                {word}{' '}
              </span>
            ))}
          </h1>

          {/* Description */}
          <p className="sm:text-xl text-lg font-normal text-white/80 mt-6 mb-8 max-w-3xl mx-auto text-shadow-sm">
            {slides[currentSlide].description} - نضمن لك دقة النتائج وشفافية التقارير مع أحدث التقنيات العالمية
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-4 sm:flex-row mt-8 items-center justify-center">
            <AnimatedButton 
              href="/booking" 
              variant="primary" 
              size="md"
              className="animate-[slideInBlur_0.8s_ease-out_1.2s_forwards] h-10"
            >
              احجز موعد الآن
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </AnimatedButton>
            
            <Link 
              href="#services" 
              className="group relative overflow-hidden leading-none transition-all duration-300 text-white glass-dark border-white/20 border rounded-full pt-2.5 pr-5 pb-2.5 pl-5 shadow-sm backdrop-blur hover:bg-white/10 h-10 flex items-center"
            >
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out bg-white/5"></span>
              <span className="relative z-10 inline-flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path>
                </svg>
                شاهد خدماتنا
              </span>
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 flex flex-col items-center gap-6 sm:flex-row sm:justify-center">
            <div className="flex -space-x-2">
              <div className="h-10 w-10 rounded-full ring-2 ring-white/20 bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-sm font-bold">م</div>
              <div className="h-10 w-10 rounded-full ring-2 ring-white/20 bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center text-white text-sm font-bold">ل</div>
              <div className="h-10 w-10 rounded-full ring-2 ring-white/20 bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white text-sm font-bold">+</div>
            </div>
            <div className="flex gap-2 text-sm font-medium text-white/80 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                <path d="m9 12 2 2 4-4"></path>
              </svg>
              موثوق من قبل أكثر من 5000+ عميل
            </div>
          </div>
        </div>
      </div>

      {/* Slide Navigation Controls */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center items-center gap-4 z-10">
        <button
          className="glass-dark p-2 rounded-full hover:bg-white/10 transition-colors border border-white/20"
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>

        {/* Dots navigation */}
        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-secondary w-8"
                  : "bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button
          className="glass-dark p-2 rounded-full hover:bg-white/10 transition-colors border border-white/20"
          onClick={nextSlide}
          aria-label="Next slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}
