"use client";

import { useEffect } from 'react';
import { useBooking, BookingStep } from '@/context/BookingContext';
import { useAuth } from '@/context/AuthContext';
import AuthForm from './AuthForm';
import Onboarding from './Onboarding';
import BookingCalendar from './BookingCalendar';
import ProblemDescription from './ProblemDescription';
import SuccessConfirmation from './SuccessConfirmation';

// Helper functions to check step progression
const isLaterStep = (step: BookingStep): boolean => {
  return step === 'description' || step === 'success';
};

const isCompletedStep = (step: BookingStep): boolean => {
  return step === 'description' || step === 'success';
};

export default function BookingContainer() {
  const { currentStep, setCurrentStep } = useBooking();
  const { isAuthenticated, isLoading } = useAuth();

  // Set initial step based on authentication status
  useEffect(() => {
    if (!isLoading) {
      if (isAuthenticated) {
        setCurrentStep('onboarding');
      } else {
        setCurrentStep('login');
      }
    }
  }, [isAuthenticated, isLoading, setCurrentStep]);

  // Show loading state while checking authentication
  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="w-12 h-12 rounded-full border-4 border-primary border-t-transparent animate-spin"></div>
      </div>
    );
  }

  // Render the appropriate component based on the current step
  const renderStep = () => {
    switch (currentStep) {
      case 'login':
      case 'signup':
        return <AuthForm />;
      case 'onboarding':
        return <Onboarding />;
      case 'calendar':
        return <BookingCalendar />;
      case 'description':
        return <ProblemDescription />;
      case 'success':
        return <SuccessConfirmation />;
      default:
        return <AuthForm />;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Progress indicator */}
        {currentStep !== 'login' && currentStep !== 'signup' && currentStep !== 'success' && (
          <div className="mb-8">
            <div className="flex justify-between items-center">
              <div className={`flex flex-col items-center ${currentStep === 'onboarding' ? 'text-primary' : 'text-gray-400'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep === 'onboarding' ? 'bg-primary text-white' : 'bg-gray-200'}`}>
                  1
                </div>
                <span className="text-sm mt-1">المعلومات</span>
              </div>
              <div className={`flex-1 h-1 mx-2 ${currentStep === 'onboarding' ? 'bg-gray-200' : 'bg-primary'}`}></div>
              <div className={`flex flex-col items-center ${currentStep === 'calendar' ? 'text-primary' : 'text-gray-400'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep === 'calendar' ? 'bg-primary text-white' : isLaterStep(currentStep) ? 'bg-primary text-white' : 'bg-gray-200'}`}>
                  2
                </div>
                <span className="text-sm mt-1">الموعد</span>
              </div>
              <div className={`flex-1 h-1 mx-2 ${isLaterStep(currentStep) ? 'bg-primary' : 'bg-gray-200'}`}></div>
              <div className={`flex flex-col items-center ${currentStep === 'description' ? 'text-primary' : 'text-gray-400'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${isCompletedStep(currentStep) ? 'bg-primary text-white' : 'bg-gray-200'}`}>
                  3
                </div>
                <span className="text-sm mt-1">التفاصيل</span>
              </div>
            </div>
          </div>
        )}

        {/* Current step component */}
        {renderStep()}
      </div>
    </div>
  );
}
