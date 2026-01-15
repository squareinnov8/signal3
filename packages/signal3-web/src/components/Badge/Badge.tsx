import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';

const badgeVariants = cva(
  'inline-flex items-center gap-1 font-medium transition-colors',
  {
    variants: {
      variant: {
        gray: 'bg-gray-100 text-gray-700 border border-gray-200',
        primary: 'bg-primary-50 text-primary-700 border border-primary-200',
        error: 'bg-error-50 text-error-700 border border-error-200',
        warning: 'bg-warning-50 text-warning-700 border border-warning-200',
        success: 'bg-success-50 text-success-700 border border-success-200',
      },
      size: {
        sm: 'px-2 py-0.5 text-xs rounded-md',
        md: 'px-2.5 py-0.5 text-sm rounded-md',
        lg: 'px-3 py-1 text-sm rounded-lg',
      },
    },
    defaultVariants: {
      variant: 'gray',
      size: 'md',
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  /** Icon to display before the badge text */
  icon?: React.ReactNode;
  /** Show a dot indicator */
  dot?: boolean;
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant, size, icon, dot, children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(badgeVariants({ variant, size, className }))}
        {...props}
      >
        {dot && (
          <span
            className={cn(
              'h-1.5 w-1.5 rounded-full',
              variant === 'gray' && 'bg-gray-500',
              variant === 'primary' && 'bg-primary-500',
              variant === 'error' && 'bg-error-500',
              variant === 'warning' && 'bg-warning-500',
              variant === 'success' && 'bg-success-500'
            )}
          />
        )}
        {icon}
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';

export { Badge, badgeVariants };
