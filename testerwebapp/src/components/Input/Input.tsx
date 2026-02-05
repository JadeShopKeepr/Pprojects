import React, { type JSX } from 'react';
import clsx from 'clsx';
import styles from './Input.module.css';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input = React.forwardRef(({ label, className, ...props }: InputProps) => {
  const id = React.useId();

  return (
    <div className={styles.container}>
      {label && (
        <label htmlFor={id} className='text'>
          {label}
        </label>
      )}
      <input className={clsx(styles.input, 'subtitle', className)} id={id} {...props} />
    </div>
  );
});
