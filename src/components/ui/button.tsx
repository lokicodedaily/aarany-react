import * as React from 'react';
import { Slot, Slottable } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { ArrowRight } from 'lucide-react';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center gap-2.5 font-mono uppercase rounded-full transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
  {
    variants: {
      variant: {
        primary: 'bg-ink text-bg border border-ink hover:bg-moss hover:border-moss',
        ghost: 'bg-transparent text-ink border border-line hover:border-ink',
        pink: 'bg-pink-deep text-bg border border-pink-deep hover:opacity-90',
        nav: 'bg-transparent text-ink border border-ink hover:bg-ink hover:text-bg',
      },
      size: {
        default: 'text-[11px] tracking-[0.16em] px-[22px] py-3.5',
        sm: 'text-[10.5px] tracking-[0.16em] px-4 py-2.5',
      },
    },
    defaultVariants: { variant: 'primary', size: 'default' },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  arrow?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, arrow = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp ref={ref} className={cn(buttonVariants({ variant, size, className }))} {...props}>
        <Slottable>
          {children}
        </Slottable>
          {arrow && <ArrowRight className="size-3.5" strokeWidth={1.5} aria-hidden />}
        
      </Comp>
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
