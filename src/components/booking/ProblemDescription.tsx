"use client";

import { useState } from 'react';
import { useBooking } from '@/context/BookingContext';

// Common car problems for quick selection
const COMMON_PROBLEMS = [
  'صوت غريب من المحرك',
  'مشكلة في الفرامل',
  'اهتزاز عند القيادة',
  'مشكلة في ناقل الحركة',
  'ارتفاع في درجة الحرارة',
  'مشكلة في نظام التكييف',
  'ضعف في الأداء',
  'فحص دوري',
];

export default function ProblemDescription() {
  const { carProblem, setCarProblem, setCurrentStep, createBooking } = useBooking();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  // Handle quick selection of common problems
  const handleQuickSelect = (problem: string) => {
    setCarProblem(problem);
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!carProblem.trim()) {
      setError('يرجى وصف مشكلة السيارة');
      return;
    }
    
    setError('');
    setIsSubmitting(true);
    
    try {
      // Create the booking
      await createBooking();
      // Move to success step
      setCurrentStep('success');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'حدث خطأ أثناء إنشاء الحجز');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-6 text-primary">
        وصف مشكلة السيارة
      </h2>

      {error && (
        <div className="bg-red-50 text-red-600 p-3 rounded-md mb-4 text-sm text-center">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label htmlFor="problem" className="block text-black font-medium mb-2">
            صف مشكلة سيارتك بإيجاز:
          </label>
          <textarea
            id="problem"
            value={carProblem}
            onChange={(e) => setCarProblem(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-black placeholder-gray-500"
            rows={5}
            placeholder="اكتب وصفاً مختصراً للمشكلة التي تواجهها مع سيارتك..."
            disabled={isSubmitting}
          ></textarea>
        </div>

        <div className="mb-8">
          <p className="text-black font-medium mb-2">أو اختر من المشاكل الشائعة:</p>
          <div className="flex flex-wrap gap-2">
            {COMMON_PROBLEMS.map((problem) => (
              <button
                key={problem}
                type="button"
                onClick={() => handleQuickSelect(problem)}
                className={`
                  py-1 px-3 rounded-full text-sm border
                  ${
                    carProblem === problem
                      ? 'bg-primary text-white border-primary'
                      : 'border-gray-300 text-black hover:border-primary'
                  }
                `}
                disabled={isSubmitting}
              >
                {problem}
              </button>
            ))}
          </div>
        </div>

        <div className="flex justify-between">
          <button
            type="button"
            onClick={() => setCurrentStep('calendar')}
            className="text-primary hover:text-secondary transition-colors"
            disabled={isSubmitting}
          >
            رجوع
          </button>
          <button
            type="submit"
            className={`bg-secondary hover:bg-opacity-90 text-white px-6 py-2 rounded-md transition-colors ${
              isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
            }`}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span className="flex items-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                جاري التأكيد...
              </span>
            ) : (
              'تأكيد الحجز'
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
