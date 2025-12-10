import React, { type JSX } from 'react';
import clsx from 'clsx';
import styles from './Input.module.css';

type InputProps<Component extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any> = 'input'> = {
  label?: string;
  component?: Component;
} & React.ComponentProps<Component>;

export const Input = React.forwardRef(
  ({ label, className, component, ...props }: InputProps<'input'>, ref: React.ForwardedRef<HTMLInputElement>) => {
    const id = React.useId();
    const Component = component || 'input';
    return (
      <div className={styles.container}>
        {label && (
          <label htmlFor={id} className='text'>
            {label}
          </label>
        )}
        <Component className={clsx(styles.input, 'subtitle', className)} id={id} {...props} ref={ref} />
      </div>
    );
  },
) as <Component extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any> = 'input'>(
  props: InputProps<Component> & { ref?: React.ForwardedRef<HTMLInputElement> },
) => React.ReactElement;
