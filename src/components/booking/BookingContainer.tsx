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
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Progress indicator */}
        {currentStep !== 'login' && currentStep !== 'signup' && currentStep !== 'success' && (
          <div className="mb-10">
            <div className="flex justify-between items-center max-w-2xl mx-auto">
              <div className={`flex flex-col items-center ${currentStep === 'onboarding' ? 'text-primary' : isLaterStep(currentStep) || currentStep === 'calendar' || currentStep === 'description' ? 'text-primary' : 'text-gray-400'}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-medium border-2 transition-all ${currentStep === 'onboarding' ? 'bg-primary text-white border-primary' : isLaterStep(currentStep) || currentStep === 'calendar' || currentStep === 'description' ? 'bg-primary text-white border-primary' : 'bg-white text-gray-400 border-gray-300'}`}>
                  {isLaterStep(currentStep) || currentStep === 'calendar' || currentStep === 'description' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  ) : '1'}
                </div>
                <span className="text-xs mt-2 font-medium">المعلومات</span>
              </div>
              <div className={`flex-1 h-0.5 mx-4 ${currentStep === 'onboarding' ? 'bg-gray-300' : 'bg-primary'}`}></div>
              <div className={`flex flex-col items-center ${currentStep === 'calendar' ? 'text-primary' : isLaterStep(currentStep) ? 'text-primary' : 'text-gray-400'}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-medium border-2 transition-all ${currentStep === 'calendar' ? 'bg-primary text-white border-primary' : isLaterStep(currentStep) ? 'bg-primary text-white border-primary' : 'bg-white text-gray-400 border-gray-300'}`}>
                  {isLaterStep(currentStep) ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  ) : '2'}
                </div>
                <span className="text-xs mt-2 font-medium">الموعد</span>
              </div>
              <div className={`flex-1 h-0.5 mx-4 ${isLaterStep(currentStep) ? 'bg-primary' : 'bg-gray-300'}`}></div>
              <div className={`flex flex-col items-center ${currentStep === 'description' ? 'text-primary' : 'text-gray-400'}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-medium border-2 transition-all ${isCompletedStep(currentStep) ? 'bg-primary text-white border-primary' : 'bg-white text-gray-400 border-gray-300'}`}>
                  3
                </div>
                <span className="text-xs mt-2 font-medium">التفاصيل</span>
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
