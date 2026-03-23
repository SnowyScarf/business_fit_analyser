import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
}

export function Button({ variant = 'primary', className = '', children, ...props }: ButtonProps) {
  const baseStyle = 'btn';
  const variantClass = variant === 'primary' ? '' : `btn-${variant}`;
  return (
    <button className={`${baseStyle} ${variantClass} ${className}`.trim()} {...props}>
      {children}
    </button>
  );
}
