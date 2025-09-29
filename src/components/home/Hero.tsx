"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

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
    <div className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[650px] overflow-hidden">
      {/* Slides */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <div className="relative w-full h-full">
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
                onLoadingComplete={() => setIsLoading(false)}
              />
              <div 
                className={`absolute inset-0 bg-gradient-to-t from-black/80 via-primary/50 to-black/40 flex flex-col items-center justify-center text-white text-center px-4 ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-shadow-lg drop-shadow-lg">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl mb-8 max-w-3xl text-shadow-sm drop-shadow-md">{slide.description}</p>
                <Link
                  href="/booking"
                  className="bg-secondary hover:bg-opacity-90 text-white px-8 py-3 rounded-full font-medium text-lg transition-colors"
                >
                  احجز موعد الآن
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-primary bg-opacity-70 hover:bg-opacity-90 text-white p-2 rounded-full z-10"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-primary bg-opacity-70 hover:bg-opacity-90 text-white p-2 rounded-full z-10"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>

      {/* Dots navigation */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide
                ? "bg-secondary"
                : "bg-white bg-opacity-50 hover:bg-opacity-75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
