"use client";

import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useBooking } from '@/context/BookingContext';

type FormMode = 'login' | 'signup';

export default function AuthForm() {
  const [mode, setMode] = useState<FormMode>('login');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const { login, signup } = useAuth();
  const { setCurrentStep } = useBooking();

  const toggleMode = () => {
    setMode(mode === 'login' ? 'signup' : 'login');
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    try {
      let success = false;

      if (mode === 'login') {
        success = await login(email, password);
      } else {
        if (!name.trim()) {
          throw new Error('الاسم مطلوب');
        }
        success = await signup(name, email, password);
      }

      if (success) {
        // Move to onboarding step
        setCurrentStep('onboarding');
      } else {
        throw new Error('فشل تسجيل الدخول');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'حدث خطأ ما');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-6 text-primary">
        {mode === 'login' ? 'تسجيل الدخول' : 'إنشاء حساب جديد'}
      </h2>
      
      {error && (
        <div className="bg-red-50 text-red-600 p-3 rounded-md mb-4 text-sm">
          {error}
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        {mode === 'signup' && (
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 mb-2">
              الاسم
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              required
              disabled={isSubmitting}
            />
          </div>
        )}
        
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 mb-2">
            البريد الإلكتروني
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            required
            disabled={isSubmitting}
          />
        </div>
        
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 mb-2">
            كلمة المرور
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            required
            disabled={isSubmitting}
            minLength={6}
          />
        </div>
        
        <button
          type="submit"
          className={`w-full bg-secondary text-white py-2 px-4 rounded-md hover:bg-opacity-90 transition-colors ${
            isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
          }`}
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              جاري التحميل...
            </span>
          ) : mode === 'login' ? (
            'تسجيل الدخول'
          ) : (
            'إنشاء حساب'
          )}
        </button>
      </form>
      
      <div className="mt-4 text-center">
        <button
          type="button"
          onClick={toggleMode}
          className="text-primary hover:text-secondary transition-colors"
          disabled={isSubmitting}
        >
          {mode === 'login'
            ? 'ليس لديك حساب؟ إنشاء حساب جديد'
            : 'لديك حساب بالفعل؟ تسجيل الدخول'}
        </button>
      </div>
    </div>
  );
}
