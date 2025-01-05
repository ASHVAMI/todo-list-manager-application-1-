import React, { ButtonHTMLAttributes } from 'react';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  variant?: 'primary' | 'secondary';
}

export function Button({ 
  children, 
  isLoading, 
  variant = 'primary', 
  className = '', 
  ...props 
}: ButtonProps) {
  const baseStyles = "py-3 px-4 rounded-lg shadow-lg text-sm font-medium transition-all";
  const variantStyles = {
    primary: "bg-violet-600 hover:bg-violet-700 text-white shadow-violet-600/30",
    secondary: "bg-gray-200 hover:bg-gray-300 text-gray-800"
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className} ${
        isLoading ? 'opacity-50 cursor-not-allowed' : ''
      }`}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? (
        <span className="flex items-center justify-center">
          <Loader2 className="animate-spin -ml-1 mr-3 h-5 w-5" />
          Loading...
        </span>
      ) : children}
    </button>
  );
}