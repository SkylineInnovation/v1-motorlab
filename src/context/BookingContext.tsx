"use client";

import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

// Define booking type
export type Booking = {
  id: string;
  userId: string;
  date: string;
  time: string;
  description: string;
  createdAt: string;
};

// Define booking step type
export type BookingStep = 'login' | 'signup' | 'onboarding' | 'calendar' | 'description' | 'success';

// Define context type
type BookingContextType = {
  currentStep: BookingStep;
  setCurrentStep: (step: BookingStep) => void;
  selectedDate: Date | null;
  setSelectedDate: (date: Date | null) => void;
  selectedTime: string;
  setSelectedTime: (time: string) => void;
  carProblem: string;
  setCarProblem: (problem: string) => void;
  createBooking: () => Promise<Booking>;
  userBookings: Booking[];
  getBookingById: (id: string) => Booking | undefined;
  resetBookingForm: () => void;
  lastCreatedBookingId: string | null;
};

// Create context with default values
const BookingContext = createContext<BookingContextType>({
  currentStep: 'login',
  setCurrentStep: () => {},
  selectedDate: null,
  setSelectedDate: () => {},
  selectedTime: '',
  setSelectedTime: () => {},
  carProblem: '',
  setCarProblem: () => {},
  createBooking: async () => ({ 
    id: '', 
    userId: '', 
    date: '', 
    time: '', 
    description: '', 
    createdAt: '' 
  }),
  userBookings: [],
  getBookingById: () => undefined,
  resetBookingForm: () => {},
  lastCreatedBookingId: null,
});

// Hook to use booking context
export const useBooking = () => useContext(BookingContext);

// Provider component
export function BookingProvider({ children }: { children: ReactNode }) {
  const [currentStep, setCurrentStep] = useState<BookingStep>('login');
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [carProblem, setCarProblem] = useState<string>('');
  const [userBookings, setUserBookings] = useState<Booking[]>([]);
  const [lastCreatedBookingId, setLastCreatedBookingId] = useState<string | null>(null);

  // Load bookings from localStorage on mount
  useEffect(() => {
    const storedBookings = localStorage.getItem('motorlab_bookings');
    if (storedBookings) {
      try {
        setUserBookings(JSON.parse(storedBookings));
      } catch (error) {
        console.error('Failed to parse bookings from localStorage', error);
      }
    }
  }, []);

  // Create a new booking
  const createBooking = async (): Promise<Booking> => {
    // Get user from localStorage
    const storedUser = localStorage.getItem('motorlab_user');
    if (!storedUser) {
      throw new Error('User not found');
    }
    
    const user = JSON.parse(storedUser);
    
    // Create new booking
    const newBooking: Booking = {
      id: Date.now().toString(),
      userId: user.id,
      date: selectedDate ? selectedDate.toISOString().split('T')[0] : '',
      time: selectedTime,
      description: carProblem,
      createdAt: new Date().toISOString(),
    };
    
    // Add to bookings array
    const updatedBookings = [...userBookings, newBooking];
    setUserBookings(updatedBookings);
    
    // Save to localStorage
    localStorage.setItem('motorlab_bookings', JSON.stringify(updatedBookings));
    
    // Set last created booking ID
    setLastCreatedBookingId(newBooking.id);
    
    return newBooking;
  };

  // Get booking by ID
  const getBookingById = (id: string): Booking | undefined => {
    return userBookings.find(booking => booking.id === id);
  };

  // Reset booking form
  const resetBookingForm = () => {
    setSelectedDate(null);
    setSelectedTime('');
    setCarProblem('');
    setCurrentStep('login');
    setLastCreatedBookingId(null);
  };

  return (
    <BookingContext.Provider 
      value={{ 
        currentStep,
        setCurrentStep,
        selectedDate,
        setSelectedDate,
        selectedTime,
        setSelectedTime,
        carProblem,
        setCarProblem,
        createBooking,
        userBookings,
        getBookingById,
        resetBookingForm,
        lastCreatedBookingId,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
}

export default BookingContext;
