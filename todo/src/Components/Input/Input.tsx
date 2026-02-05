import React from 'react';
import clsx from 'clsx';
import styles from './input.module.css';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input = ({ label, className, ...props }: InputProps) => {
  return <input type='text' className={clsx(styles.input, 'text', className)} {...props} />;
};

export default Input;
