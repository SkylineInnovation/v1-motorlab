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
    // Check if the problem is already selected
    if (carProblem.includes(problem)) {
      // If already in the text, don't add it again
      return;
    }
    
    // Add the problem to existing text with a separator if needed
    const separator = carProblem.trim() ? '، ' : '';
    const newValue = carProblem.trim() + (separator ? separator : '') + problem;
    setCarProblem(newValue);
  };
  
  // Clear the problem description
  const handleClearDescription = () => {
    setCarProblem('');
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
    <div className="max-w-2xl mx-auto bg-white border border-gray-200 rounded-2xl shadow-sm p-8">
      <h2 className="text-2xl font-bold text-center mb-8 text-gray-900" style={{ fontFamily: 'var(--font-cairo)' }}>
        وصف مشكلة السيارة
      </h2>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 p-3 rounded-lg mb-6 text-sm text-center">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label htmlFor="problem" className="block text-gray-900 font-semibold mb-3">
            صف مشكلة سيارتك بإيجاز:
          </label>
          <textarea
            id="problem"
            value={carProblem}
            onChange={(e) => setCarProblem(e.target.value)}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-gray-900 placeholder-gray-400 transition-all"
            rows={5}
            placeholder="اكتب وصفاً مختصراً للمشكلة التي تواجهها مع سيارتك..."
            disabled={isSubmitting}
          ></textarea>
        </div>

        <div className="mb-8">
          <p className="text-gray-900 font-semibold mb-3">أو اختر من المشاكل الشائعة:</p>
          <div className="flex flex-wrap gap-2 mb-3">
            {COMMON_PROBLEMS.map((problem) => (
              <button
                key={problem}
                type="button"
                onClick={() => handleQuickSelect(problem)}
                className={`
                  py-2 px-4 rounded-lg text-sm border-2 font-medium transition-all
                  ${
                    carProblem.includes(problem)
                      ? 'bg-primary text-white border-primary shadow-sm'
                      : 'border-gray-300 text-gray-700 hover:border-primary hover:bg-gray-50'
                  }
                `}
                disabled={isSubmitting}
              >
                {problem}
              </button>
            ))}
          </div>
          {carProblem && (
            <div className="flex justify-end">
              <button
                type="button"
                onClick={handleClearDescription}
                className="text-sm text-red-600 hover:text-red-700 transition-colors font-medium"
                disabled={isSubmitting}
              >
                مسح الكل
              </button>
            </div>
          )}
        </div>

        <div className="flex justify-between items-center pt-6 border-t border-gray-200">
          <button
            type="button"
            onClick={() => setCurrentStep('calendar')}
            className="text-gray-600 hover:text-primary transition-colors font-medium flex items-center gap-1"
            disabled={isSubmitting}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            رجوع
          </button>
          <button
            type="submit"
            className={`bg-secondary hover:bg-secondary/90 text-white px-8 py-2.5 rounded-lg transition-all font-medium shadow-sm hover:shadow-md flex items-center gap-2 ${
              isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
            }`}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                جاري التأكيد...
              </>
            ) : (
              'تأكيد الحجز'
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
