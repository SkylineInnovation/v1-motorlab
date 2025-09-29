"use client";

import { useState } from 'react';
import { useBooking } from '@/context/BookingContext';

// Time slots available for booking
const TIME_SLOTS = [
  '09:00', '10:00', '11:00', '12:00', 
  '13:00', '14:00', '15:00', '16:00', '17:00'
];

export default function BookingCalendar() {
  const { selectedDate, setSelectedDate, selectedTime, setSelectedTime, setCurrentStep } = useBooking();
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [error, setError] = useState('');

  // Generate calendar days for the current month view
  const generateCalendarDays = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    
    // First day of the month
    const firstDay = new Date(year, month, 1);
    // Last day of the month
    const lastDay = new Date(year, month + 1, 0);
    
    // Get the day of week for the first day (0 = Sunday, 6 = Saturday)
    const firstDayOfWeek = firstDay.getDay();
    
    // Calculate days from previous month to show
    const daysFromPrevMonth = firstDayOfWeek === 0 ? 6 : firstDayOfWeek - 1;
    
    // Calculate total days to show (including days from prev/next months)
    const totalDays = daysFromPrevMonth + lastDay.getDate() + (42 - (daysFromPrevMonth + lastDay.getDate()));
    
    const days = [];
    
    // Previous month days
    const prevMonthLastDay = new Date(year, month, 0).getDate();
    for (let i = prevMonthLastDay - daysFromPrevMonth + 1; i <= prevMonthLastDay; i++) {
      days.push({
        date: new Date(year, month - 1, i),
        isCurrentMonth: false,
        isSelectable: false,
      });
    }
    
    // Current month days
    for (let i = 1; i <= lastDay.getDate(); i++) {
      const date = new Date(year, month, i);
      const isToday = isSameDay(date, new Date());
      const isPast = date < new Date(new Date().setHours(0, 0, 0, 0));
      
      days.push({
        date,
        isCurrentMonth: true,
        isToday,
        isSelectable: !isPast,
      });
    }
    
    // Next month days
    const remainingDays = totalDays - days.length;
    for (let i = 1; i <= remainingDays; i++) {
      days.push({
        date: new Date(year, month + 1, i),
        isCurrentMonth: false,
        isSelectable: false,
      });
    }
    
    return days;
  };

  // Check if two dates are the same day
  const isSameDay = (date1: Date, date2: Date) => {
    return (
      date1.getDate() === date2.getDate() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getFullYear() === date2.getFullYear()
    );
  };

  // Go to previous month
  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  // Go to next month
  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  // Handle date selection
  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
  };

  // Handle time selection
  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
  };

  // Handle continue to next step
  const handleContinue = () => {
    if (!selectedDate) {
      setError('يرجى اختيار تاريخ');
      return;
    }
    
    if (!selectedTime) {
      setError('يرجى اختيار وقت');
      return;
    }
    
    setError('');
    setCurrentStep('description');
  };

  // Format month name in Arabic
  const formatMonthName = (date: Date) => {
    return date.toLocaleDateString('ar-SA', { month: 'long', year: 'numeric' });
  };

  // Get days of week in Arabic
  const daysOfWeek = ['الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت', 'الأحد'];

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-6 text-primary">
        اختر موعد الفحص
      </h2>

      {error && (
        <div className="bg-red-50 text-red-600 p-3 rounded-md mb-4 text-sm text-center">
          {error}
        </div>
      )}

      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={prevMonth}
            className="p-2 rounded-full hover:bg-gray-100"
            aria-label="الشهر السابق"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          <h3 className="text-lg font-medium text-black">{formatMonthName(currentMonth)}</h3>
          <button
            onClick={nextMonth}
            className="p-2 rounded-full hover:bg-gray-100"
            aria-label="الشهر التالي"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-7 gap-1">
          {/* Days of week headers */}
          {daysOfWeek.map((day) => (
            <div key={day} className="text-center text-sm text-black font-medium py-2">
              {day}
            </div>
          ))}

          {/* Calendar days */}
          {generateCalendarDays().map((day, index) => (
            <button
              key={index}
              onClick={() => day.isSelectable && handleDateSelect(day.date)}
              disabled={!day.isSelectable}
              className={`
                py-2 rounded-md text-center
                ${!day.isCurrentMonth ? 'text-gray-300' : 'text-black'}
                ${day.isToday ? 'border border-primary' : ''}
                ${
                  selectedDate && isSameDay(day.date, selectedDate)
                    ? 'bg-primary text-white'
                    : day.isSelectable
                    ? 'hover:bg-gray-100'
                    : 'cursor-not-allowed'
                }
              `}
            >
              {day.date.getDate()}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h3 className="font-medium mb-3 text-black">اختر الوقت المناسب:</h3>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2">
          {TIME_SLOTS.map((time) => (
            <button
              key={time}
              onClick={() => handleTimeSelect(time)}
              className={`
                py-2 px-3 border rounded-md text-center
                ${
                  selectedTime === time
                    ? 'bg-secondary text-white border-secondary'
                    : 'text-black hover:border-primary'
                }
              `}
            >
              {time}
            </button>
          ))}
        </div>
      </div>

      <div className="flex justify-between">
        <button
          onClick={() => setCurrentStep('onboarding')}
          className="text-primary hover:text-secondary transition-colors"
        >
          رجوع
        </button>
        <button
          onClick={handleContinue}
          className="bg-secondary hover:bg-opacity-90 text-white px-6 py-2 rounded-md transition-colors"
        >
          متابعة
        </button>
      </div>
    </div>
  );
}
