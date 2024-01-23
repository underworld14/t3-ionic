import dayjs from 'dayjs';

export interface TransactionItemProps {
  title: string;
  date: string | Date;
  amount: number;
  status: string;
}

export function TransactionItem({ title, date, amount, status }: TransactionItemProps) {
  return (
    <div className="flex items-center justify-between border-b border-neutral-200 px-5 py-4">
      <div className="flex items-center">
        <img src="/assets/icons/iuran-icon.png" alt="iuran icon" className="size-8" />
        <div className="ml-6 flex flex-col">
          <div className="text-sm font-semibold">{title}</div>
          <p className="mt-1 text-[10px] text-[#666]">
            {dayjs(date).format('DD MMMM YYYY')} | {dayjs(date).format('HH.mm')}
          </p>
        </div>
      </div>
      <div className="text-right">
        <div className="text-sm font-semibold">Rp {amount.toLocaleString('id-ID')}</div>
        <div className="text-xs font-medium text-green-600">
          {status === 'success' ? 'Berhasil' : status === 'failed' ? 'Gagal' : 'Menunggu'}
        </div>
      </div>
    </div>
  );
}
