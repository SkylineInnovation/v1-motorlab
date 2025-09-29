"use client";

import { ReactNode } from 'react';

interface AnimatedButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'secondary' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function AnimatedButton({ 
  children, 
  onClick, 
  href, 
  variant = 'primary',
  size = 'md',
  className = '' 
}: AnimatedButtonProps) {
  const baseClasses = `
    relative inline-flex items-center justify-center gap-2 
    overflow-hidden transition-all duration-300 ease-out
    rounded-full font-medium cursor-pointer
    active:scale-95 hover-lift
  `;

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const variantClasses = {
    primary: `
      bg-gradient-to-r from-blue-600 to-purple-600 
      text-white shadow-lg hover:shadow-xl
      before:absolute before:inset-0 before:bg-gradient-to-r 
      before:from-blue-500 before:to-purple-500 before:opacity-0 
      before:transition-opacity before:duration-300 hover:before:opacity-100
    `,
    secondary: `
      bg-secondary text-white shadow-lg hover:shadow-xl
      hover:bg-opacity-90
    `,
    glass: `
      glass-dark text-white border border-white/20
      hover:bg-white/10 hover:border-white/30
    `
  };

  const buttonClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  const ButtonContent = () => (
    <>
      {/* Floating points animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute bottom-0 w-0.5 h-0.5 bg-white rounded-full opacity-0 animate-pulse"
            style={{
              left: `${15 + i * 15}%`,
              animationDelay: `${i * 0.2}s`,
              animationDuration: '2s'
            }}
          />
        ))}
      </div>
      
      {/* Button content */}
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </>
  );

  if (href) {
    return (
      <a href={href} className={buttonClasses}>
        <ButtonContent />
      </a>
    );
  }

  return (
    <button onClick={onClick} className={buttonClasses}>
      <ButtonContent />
    </button>
  );
}
