import dayjs from 'dayjs';
import { location } from 'ionicons/icons';

import { useAuthStore } from '~/store/auth-store';
import { usePrayerTimes } from '~/queries/prayer-times';
import { IonIcon } from '@ionic/react';
import { Link } from 'react-router-dom';

export function HomeWidget() {
  const { user } = useAuthStore();
  const { nextPrayerTime, city, state } = usePrayerTimes();

  return (
    <div className="fixed left-0 top-0 z-20 w-full">
      <div className="bg-primary-gradient h-[180px] w-full px-6 py-8">
        <img
          src="/assets/vector/line.svg"
          alt="line-vector"
          className="absolute left-0 top-0 w-full"
        />
        <div className="flex items-center justify-between">
          <div className="flex">
            <img alt="agpaii" className="-mt-7" src="/assets/logo/agpaii-logo-only.svg" />
            <div className="ml-4 flex flex-col gap-1">
              <h1 className="font-semibold text-white">Rumah AGPAII</h1>
              <p className="text-xs font-medium text-white">Assalamualaikum {user?.name}</p>
              <p className="text-xs font-medium text-white">
                {dayjs().format('dddd, DD MMMM YYYY')}
              </p>
            </div>
          </div>
          <Link className="relative z-30" to="/profile">
            <img
              className="h-12 w-12 rounded-full"
              src={`https://i.pravatar.cc/150?img=${2}`}
              alt="avatar"
            />
          </Link>
        </div>
      </div>
      <div className="px-6">
        <div
          className="flex w-full items-center rounded-xl bg-white px-4 py-5 shadow-lg"
          style={{ marginTop: -60 }}
        >
          <IonIcon className="size-5 text-primary" icon={location} />
          <div className="ml-3 flex flex-col">
            <p className="text-xs font-semibold">
              {city}, {state}
            </p>
            <p className="mt-1 text-xs">{nextPrayerTime}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
