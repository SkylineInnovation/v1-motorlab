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
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-5 py-2 text-sm',
    lg: 'px-6 py-3 text-base'
  };

  const variantClasses = {
    primary: `
      bg-gradient-to-r from-orange-500 to-orange-600 
      text-white shadow-lg hover:shadow-xl
      hover:from-orange-400 hover:to-orange-500
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
