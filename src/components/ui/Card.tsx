import React, { HTMLAttributes } from 'react';

export function Card({ className = '', children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`glass ${className}`.trim()} {...props}>
      {children}
    </div>
  );
}
