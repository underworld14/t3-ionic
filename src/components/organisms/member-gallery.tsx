import { Link } from 'react-router-dom';

interface MemberGalleryProps {
  title: string;
  className?: string;
}

export function MemberGallery({ title, className }: MemberGalleryProps) {
  return (
    <div className={className}>
      <div className="flex items-center justify-between">
        <div className="font-semibold">{title}</div>
        <Link to="#" className="text-sm text-primary hover:underline">
          Lihat selengkapnya
        </Link>
      </div>

      <div className="scrollbar-none mt-5 overflow-y-auto whitespace-nowrap">
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i} className="mr-4 inline-block h-[225px] w-[150px] rounded-xl p-1 shadow-md">
            <img
              alt="dpp"
              className="h-[150px] w-full rounded-xl object-cover"
              src={`https://source.unsplash.com/random/1200x156?sig=${Math.random().toFixed(2)}`}
            />

            <div className="px-2">
              <div className="mt-2 text-xs font-semibold">Ketua</div>
              <div className="mt-1 text-xs">Abdul Jamil, S.Pd.I</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
