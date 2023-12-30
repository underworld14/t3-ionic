import { tv } from 'tailwind-variants';
import { IonRippleEffect } from '@ionic/react';

export const button = tv({
  base: 'ion-activatable relative overflow-hidden rounded-lg text-center font-semibold text-white shadow-sm',
  variants: {
    color: {
      primary: 'bg-primary',
      secondary: 'bg-secondary',
      grey: 'bg-[#979797]',
    },
    size: {
      sm: 'py-[6px] px-5 text-xs',
      md: 'py-2 px-4 text-base',
      xl: 'py-3 px-6 text-lg',
    },
    state: {
      disabled: 'opacity-80 cursor-not-allowed',
    },
    shape: {
      rounded: 'rounded-2xl',
    },
    defaultVariants: {
      color: 'primary',
      size: 'md',
    },
  },
});

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: 'primary' | 'secondary' | 'grey';
  size?: 'md' | 'xl' | 'sm';
  shape?: 'rounded';
  children: React.ReactNode;
  loading?: boolean;
}

export function Button({
  children,
  color,
  size,
  shape,
  className,
  loading,
  ...props
}: ButtonProps) {
  const state = props.disabled ? 'disabled' : undefined;

  return (
    <button {...props} className={button({ color, size, shape, className, state })}>
      <IonRippleEffect></IonRippleEffect>
      {children}
    </button>
  );
}
