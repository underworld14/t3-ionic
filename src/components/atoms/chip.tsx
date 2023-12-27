import { tv } from 'tailwind-variants';

export const chip = tv({
  base: 'rounded-full border border-primary px-4 py-1 text-xs',
  variants: {
    color: {
      primary: 'bg-primary text-white',
      secondary: 'bg-secondary text-white',
      grey: 'bg-[#979797] text-white',
      white: 'bg-white text-black',
    },
  },
});

interface ChipProps extends React.HTMLAttributes<HTMLDivElement> {
  color?: 'primary' | 'secondary' | 'grey' | 'white';
  children: React.ReactNode;
}

export function Chip({ children, color, className, ...props }: ChipProps) {
  return (
    <div {...props} className={chip({ color, className })}>
      {children}
    </div>
  );
}
