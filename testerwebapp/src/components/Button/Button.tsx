import React from 'react';
import clsx from 'clsx';
import styles from './Button.module.css';

type ButtonVariant = 'contained' | 'outlined';

interface ButtonProps {
  variant: ButtonVariant;
  children: React.ReactNode;
}

export const Button = ({ children, variant, className, ...props }: ButtonProps) => (
  <button className={clsx(styles[variant], className)} {...props}>
    {children}
  </button>
);
