import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';

const avatarVariants = cva(
  'relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-gray-100',
  {
    variants: {
      size: {
        xs: 'h-6 w-6 text-xs',
        sm: 'h-8 w-8 text-sm',
        md: 'h-10 w-10 text-sm',
        lg: 'h-12 w-12 text-base',
        xl: 'h-14 w-14 text-lg',
        '2xl': 'h-16 w-16 text-xl',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

export interface AvatarProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof avatarVariants> {
  /** Image source URL */
  src?: string;
  /** Alt text for the image */
  alt?: string;
  /** Fallback initials when no image is provided */
  fallback?: string;
  /** Show online status indicator */
  status?: 'online' | 'offline' | 'away' | 'busy';
}

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ className, size, src, alt, fallback, status, ...props }, ref) => {
    const [imageError, setImageError] = React.useState(false);

    return (
      <div
        ref={ref}
        className={cn(avatarVariants({ size, className }))}
        {...props}
      >
        {src && !imageError ? (
          <img
            src={src}
            alt={alt}
            className="h-full w-full object-cover"
            onError={() => setImageError(true)}
          />
        ) : (
          <span className="font-medium text-gray-600">
            {fallback || alt?.charAt(0)?.toUpperCase() || '?'}
          </span>
        )}
        {status && (
          <span
            className={cn(
              'absolute bottom-0 right-0 block rounded-full ring-2 ring-white',
              size === 'xs' && 'h-1.5 w-1.5',
              size === 'sm' && 'h-2 w-2',
              size === 'md' && 'h-2.5 w-2.5',
              size === 'lg' && 'h-3 w-3',
              size === 'xl' && 'h-3.5 w-3.5',
              size === '2xl' && 'h-4 w-4',
              status === 'online' && 'bg-success-500',
              status === 'offline' && 'bg-gray-400',
              status === 'away' && 'bg-warning-500',
              status === 'busy' && 'bg-error-500'
            )}
          />
        )}
      </div>
    );
  }
);

Avatar.displayName = 'Avatar';

export { Avatar, avatarVariants };
