"use client";

import { useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "أحمد م.",
    text: "تجربة رائعة مع مركز MotorLab. فحص شامل ودقيق ساعدني في اتخاذ قرار شراء سيارتي بثقة. التقرير كان مفصل وواضح، والفريق محترف جداً.",
    rating: 5,
  },
  {
    id: 2,
    name: "سارة ع.",
    text: "أنقذني فحص MotorLab من شراء سيارة بها مشاكل خفية كبيرة. الفحص الشامل كشف عن مشاكل لم تكن ظاهرة. شكراً لمصداقيتكم وحرفيتكم.",
    rating: 5,
  },
  {
    id: 3,
    name: "محمد ر.",
    text: "خدمة ممتازة وفريق متعاون. أسعار معقولة مقابل فحص شامل ودقيق. سأتعامل معهم دائماً عند شراء أي سيارة مستعملة.",
    rating: 4,
  },
  {
    id: 4,
    name: "ليلى ك.",
    text: "كامرأة، كنت قلقة من عدم معرفتي الكافية بالسيارات. فريق MotorLab كان متفهماً جداً وشرحوا لي كل التفاصيل بطريقة بسيطة. شكراً لكم!",
    rating: 5,
  },
  {
    id: 5,
    name: "عمر س.",
    text: "التقرير المفصل والصور التوضيحية كانت مفيدة جداً. ساعدتني على التفاوض على سعر أفضل للسيارة بناءً على الملاحظات الفنية.",
    rating: 5,
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const showNextTestimonials = () => {
    setActiveIndex((prevIndex) =>
      prevIndex + 3 >= testimonials.length ? 0 : prevIndex + 3
    );
  };

  const showPrevTestimonials = () => {
    setActiveIndex((prevIndex) =>
      prevIndex - 3 < 0 ? Math.max(0, testimonials.length - 3) : prevIndex - 3
    );
  };

  // Get current testimonials to display (3 at a time)
  const currentTestimonials = testimonials.slice(
    activeIndex,
    Math.min(activeIndex + 3, testimonials.length)
  );

  return (
    <section className="py-20 bg-gradient-to-b from-gray-950 to-gray-900" id="testimonials">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-secondary text-sm font-semibold tracking-wider uppercase mb-4">التقييمات</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white" style={{ fontFamily: 'var(--font-cairo)' }}>آراء العملاء</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            نفتخر بثقة عملائنا ونسعى دائماً لتقديم أفضل خدمة ممكنة
          </p>
        </div>

        <div className="relative">
          {/* Navigation arrows for larger screens */}
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 glass-dark border border-white/10 p-3 rounded-full shadow-lg z-10 hidden md:block hover:border-secondary/50 transition-all hover-lift"
            onClick={showPrevTestimonials}
            aria-label="Previous testimonials"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {currentTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="group relative overflow-hidden glass-dark border border-white/10 p-8 rounded-2xl hover:border-secondary/50 transition-all duration-300 hover-lift"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-secondary/10 to-purple-600/10 rounded-full blur-3xl"></div>
                <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <h3 className="font-bold text-white text-lg">{testimonial.name}</h3>
                    <div className="flex text-secondary mt-1">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill={i < testimonial.rating ? "currentColor" : "none"}
                          stroke={i < testimonial.rating ? "none" : "currentColor"}
                          strokeWidth={2}
                          className="w-5 h-5"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-white/70 leading-relaxed">{testimonial.text}</p>
                </div>
              </div>
            ))}
          </div>

          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 glass-dark border border-white/10 p-3 rounded-full shadow-lg z-10 hidden md:block hover:border-secondary/50 transition-all hover-lift"
            onClick={showNextTestimonials}
            aria-label="Next testimonials"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>

        {/* Mobile navigation */}
        <div className="flex justify-center mt-8 md:hidden gap-4">
          <button
            className="glass-dark border border-white/10 p-3 rounded-full shadow-lg hover:border-secondary/50 transition-all"
            onClick={showPrevTestimonials}
            aria-label="Previous testimonials"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <button
            className="glass-dark border border-white/10 p-3 rounded-full shadow-lg hover:border-secondary/50 transition-all"
            onClick={showNextTestimonials}
            aria-label="Next testimonials"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>

        {/* Dots navigation */}
        <div className="flex justify-center mt-8">
          {Array.from({
            length: Math.ceil(testimonials.length / 3),
          }).map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index * 3)}
              className={`w-3 h-3 mx-1.5 rounded-full transition-all duration-300 ${
                Math.floor(activeIndex / 3) === index
                  ? "bg-secondary w-8"
                  : "bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Go to testimonial group ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
