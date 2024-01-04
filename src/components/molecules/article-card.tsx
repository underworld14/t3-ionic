import { Link } from 'react-router-dom';
import cn from 'classnames';

interface ArticleCardProps {
  to: string;
  title: string;
  variant?: 'horizontal' | 'vertical';
  fullWidth?: boolean;
}

export default function ArticleCard({
  to,
  title,
  variant = 'horizontal',
  fullWidth,
}: ArticleCardProps) {
  return (
    <div className={cn('flex gap-4', variant === 'vertical' && 'flex-col')}>
      <img
        alt="artikel"
        className={cn('h-[150px] rounded-xl object-cover', fullWidth && 'w-full')}
        width={200}
        height={150}
        src={`https://source.unsplash.com/random/1200x156?sig=${Math.random().toFixed(2)}`}
      />
      <div className="flex flex-col">
        <h4 className="font-semibold">{title}</h4>
        <Link to={to} className="mt-2 text-xs text-primary hover:underline">
          Baca Selengkapnya
        </Link>
      </div>
    </div>
  );
}
