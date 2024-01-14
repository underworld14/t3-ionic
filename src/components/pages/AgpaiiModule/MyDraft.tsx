import { IonContent, IonHeader, IonIcon, IonPage, IonSearchbar } from '@ionic/react';
import { pencil } from 'ionicons/icons';
import { Header } from '~/components/molecules';

export default function MyDraft() {
  return (
    <IonPage>
      <IonHeader>
        <Header title="Draft Saya" whiteHeader={true} titleCenter={true} />
      </IonHeader>
      <IonContent>
        <div className="mt-[75px]">
          <IonSearchbar placeholder="Cari Modul"></IonSearchbar>
        </div>

        <div className="flex items-center gap-4 px-4">
          <img
            className="rounded-md shadow-md"
            width={100}
            height={150}
            alt="cover"
            src={`https://picsum.photos/seed/${Math.random() * 10}/100/150`}
          />
          <div>
            <div className="flex gap-3">
              <h2 className="text-[15px] font-semibold">Bacaan Shalat</h2>
              <IonIcon className='text-lg' icon={pencil} />
            </div>
            <p className='text-tertiary'>
              Dalam agama islam, kedudukan ibadah shalat ibarat tiang utama yang menjadi penopang
              suatu bangunan. jika tiang....
            </p>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
}
