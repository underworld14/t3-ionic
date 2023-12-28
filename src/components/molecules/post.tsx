import { useState } from 'react';
import { IonIcon, IonActionSheet } from '@ionic/react';
import {
  heartOutline,
  chatbubbleOutline,
  eyeOutline,
  bookmarkOutline,
  ellipsisVertical,
} from 'ionicons/icons';

export function Post() {
  const [showActionSheet, setShowActionSheet] = useState(false);

  return (
    <div className="flex w-full flex-col rounded-xl py-4 shadow-md">
      <div className="flex items-center justify-between px-3">
        <div className="flex items-center">
          <img
            className="size-10 rounded-full"
            src={`https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 10)}`}
            alt="avatar"
          />
          <div className="ml-2 flex flex-col">
            <h1 className="text-sm font-semibold">Abdul Jamil , S.Pd.</h1>
            <p className="text-xs">Guru PAI SMP Gunungpati Semarang</p>
          </div>
        </div>
        <button className="btn-icon btn-icon-dark" onClick={() => setShowActionSheet(true)}>
          <IonIcon className="size-5 text-[#c4c4c4]" icon={ellipsisVertical} />
        </button>
      </div>
      <img
        className="mt-3 w-full object-cover"
        src={`https://picsum.photos/seed/${Math.random() * 10}/500/300`}
        alt="post"
      />
      <div className="mt-4 flex items-center justify-between px-3">
        <div className="flex">
          <button className="btn-icon btn-icon-dark">
            <IonIcon className="h-6 w-6 text-primary" icon={heartOutline} />
          </button>
          <button className="btn-icon btn-icon-dark">
            <IonIcon className="h-6 w-6 text-primary" icon={chatbubbleOutline} />
          </button>
          <button className="btn-icon btn-icon-dark flex flex-col">
            <IonIcon className="h-6 w-6 text-primary" icon={eyeOutline} />
            <span className="text-[8px]">100</span>
          </button>
        </div>
        <button className="btn-icon btn-icon-dark">
          <IonIcon className="h-6 w-6 text-primary" icon={bookmarkOutline} />
        </button>
      </div>
      <div className="mt-4 px-3">
        <div className="text-xs">
          Disukai oleh Ardata Media <span className="font-semibold">100 Guru Lainya</span>
        </div>
        <p className="mt-2 text-[10px]">
          Acara pemanfaatan platform digital untuk guru PAI di SMP Gunungpati Semarang
        </p>
        <div className="mt-3 text-[8px] text-[#777777]">Diposting 5 jam yang lalu</div>
      </div>

      <IonActionSheet
        isOpen={showActionSheet}
        onDidDismiss={() => setShowActionSheet(false)}
        header="Aksi Lanjutan"
        buttons={[
          {
            text: 'Delete',
            role: 'destructive',
            data: {
              action: 'delete',
            },
          },
          {
            text: 'Share',
            data: {
              action: 'share',
            },
          },
          {
            text: 'Cancel',
            role: 'cancel',
            data: {
              action: 'cancel',
            },
          },
        ]}
      ></IonActionSheet>
    </div>
  );
}
