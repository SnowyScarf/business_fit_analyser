import React, { InputHTMLAttributes, forwardRef } from 'react';

export const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  ({ className = '', ...props }, ref) => {
    return (
      <input 
        ref={ref}
        className={`input-field ${className}`.trim()} 
        {...props} 
      />
    );
  }
);

Input.displayName = 'Input';
