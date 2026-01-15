import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';

const inputVariants = cva(
  'flex w-full rounded-lg border bg-white text-gray-900 shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500',
  {
    variants: {
      variant: {
        default: 'border-gray-300 focus-visible:border-primary-500 focus-visible:ring-primary-100',
        error: 'border-error-300 focus-visible:border-error-500 focus-visible:ring-error-100',
      },
      inputSize: {
        sm: 'h-9 px-3 text-sm',
        md: 'h-10 px-3.5 text-sm',
        lg: 'h-11 px-4 text-base',
      },
    },
    defaultVariants: {
      variant: 'default',
      inputSize: 'md',
    },
  }
);

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof inputVariants> {
  /** Label text above the input */
  label?: string;
  /** Helper text below the input */
  hint?: string;
  /** Error message (also sets variant to error) */
  error?: string;
  /** Icon or element to display on the left */
  leftElement?: React.ReactNode;
  /** Icon or element to display on the right */
  rightElement?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      variant,
      inputSize,
      label,
      hint,
      error,
      leftElement,
      rightElement,
      id,
      ...props
    },
    ref
  ) => {
    const inputId = id || React.useId();
    const actualVariant = error ? 'error' : variant;

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="mb-1.5 block text-sm font-medium text-gray-700"
          >
            {label}
          </label>
        )}
        <div className="relative">
          {leftElement && (
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
              {leftElement}
            </div>
          )}
          <input
            id={inputId}
            className={cn(
              inputVariants({ variant: actualVariant, inputSize, className }),
              leftElement && 'pl-10',
              rightElement && 'pr-10'
            )}
            ref={ref}
            {...props}
          />
          {rightElement && (
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500">
              {rightElement}
            </div>
          )}
        </div>
        {(hint || error) && (
          <p
            className={cn(
              'mt-1.5 text-sm',
              error ? 'text-error-600' : 'text-gray-500'
            )}
          >
            {error || hint}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export { Input, inputVariants };
