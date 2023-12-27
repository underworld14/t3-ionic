import { BottomSheet } from 'react-spring-bottom-sheet';
import { Link } from 'react-router-dom';

import { Header } from '~/components/molecules';
import { Chip } from '~/components/atoms';

interface UserFilterBottomSheetProps {
  open: boolean;
  onDismiss: () => void;
}

export function UserFilterBottomSheet({ open, onDismiss }: UserFilterBottomSheetProps) {
  return (
    <BottomSheet
      open={open}
      onDismiss={onDismiss}
      snapPoints={({ minHeight, maxHeight }) => [minHeight, maxHeight * 0.6]}
    >
      <div className="px-6 py-4">
        <div className="font-bold">Filter Pencarian</div>

        <div className="mt-4">
          <div className="text-sm font-medium">Status Guru</div>
          <div className="mt-2 flex gap-2">
            <Chip color="primary">Semua</Chip>
            <Chip>Aktif</Chip>
            <Chip>Pensiun</Chip>
          </div>
        </div>

        <div className="mt-4">
          <div className="text-sm font-medium">Status Keanggotan</div>
          <div className="mt-2 flex gap-2">
            <Chip color="primary">Semua</Chip>
            <Chip>Aktif</Chip>
            <Chip>Pensiun</Chip>
          </div>
        </div>

        <div className="mt-4">
          <div className="text-sm font-medium">Kongres</div>
          <div className="mt-2 flex gap-2">
            <Chip color="primary">1</Chip>
            <Chip>2</Chip>
            <Chip>3</Chip>
            <Chip>4</Chip>
          </div>
        </div>

        <div className="mt-4">
          <div className="flex items-center justify-between">
            <div className="text-sm font-medium">Provinsi</div>
            <Link to="#" className="text-sm text-primary hover:underline">
              Lihat Semua
            </Link>
          </div>
          <div className="mt-2 flex flex-wrap gap-2">
            <Chip color="primary">Yogyakarta</Chip>
            <Chip>Jawa Tengah</Chip>
            <Chip>Jawa Timur</Chip>
            <Chip>Bali</Chip>
            <Chip>Sumatera Barat</Chip>
          </div>
        </div>

        <div className="mt-4">
          <div className="flex items-center justify-between">
            <div className="text-sm font-medium">Kabupaten/Kota</div>
            <Link to="#" className="text-sm text-primary hover:underline">
              Lihat Semua
            </Link>
          </div>
          <div className="mt-2 flex flex-wrap gap-2">
            <Chip color="primary">Bantul</Chip>
            <Chip>Sleman</Chip>
            <Chip>Kulon Progo</Chip>
            <Chip>Gunung Kidul</Chip>
            <Chip>Yogyakarta</Chip>
          </div>
        </div>
      </div>
    </BottomSheet>
  );
}
