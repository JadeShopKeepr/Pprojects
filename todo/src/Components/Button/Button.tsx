import React from 'react';
import clsx from 'clsx';
import styles from './button.module.css';

type ButtonVariant = 'submit' | 'delete' | 'edit';

interface ButtonProps {
  variant: ButtonVariant;

  children: React.ReactNode;
}

const Button = ({ children, variant, className, ...props }: ButtonProps) => {
  return (
    <button className={clsx(styles[variant], className)} {...props}>
      {children}
    </button>
  );
};

export default Button;
