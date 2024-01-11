import { IonIcon } from '@ionic/react';
import { location, peopleOutline } from 'ionicons/icons';
import { Link } from 'react-router-dom';

export default function EventCard() {
  return (
    <div className="relative mt-5">
      <div className="absolute left-0 top-0 flex items-center justify-center gap-2 rounded-br-xl rounded-tl-xl bg-white px-2 py-2.5 ">
        <img
          className="h-7.5 w-7.5 rounded-full"
          src={`https://i.pravatar.cc/150?img=${2}`}
          alt="avatar"
        />
        <p className="font-semibold">Sulimin,S.Pd.I</p>
      </div>
      <img
        alt="artikel"
        className={'h-[175px] w-full rounded-t-xl object-cover'}
        width={200}
        height={175}
        src={`https://source.unsplash.com/random/1200x156?sig=${Math.random().toFixed(2)}`}
      />
      <div className="flex flex-col gap-1.5 px-2">
        <h4 className="w-full text-xl font-semibold">Rapat bulanan bersama guru agama</h4>
        <p className="text-sm text-tertiary">22 Desember 2022 pukul 13:11</p>
        <div className="flex gap-2">
          <IonIcon className="h-6 w-6 text-primary" icon={location} />
          <p>Semarang / Jawa Tengah</p>
        </div>
        <div className="flex gap-2">
          <IonIcon className="h-6 w-6 text-primary" icon={peopleOutline} />
          <p>Pelatihan</p>
        </div>
      </div>
      <Link
        to={'/'}
        className="text-md mt-2 flex w-full items-center justify-center rounded-b-xl bg-primary py-3 text-white hover:underline"
      >
        Preview
      </Link>
    </div>
  );
}
