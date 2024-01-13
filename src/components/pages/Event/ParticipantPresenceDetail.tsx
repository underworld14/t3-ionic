import { IonCard, IonContent, IonHeader, IonIcon, IonPage } from '@ionic/react';
import { personOutline, timerOutline } from 'ionicons/icons';
import { Button } from '~/components/atoms';
import { Header } from '~/components/molecules';

export default function ParticipantPresenceDetail() {
  return (
    <IonPage>
      <IonHeader>
        <Header title="Detail Absen" whiteHeader={true} />
      </IonHeader>
      <IonContent>
        <div className="mt-[72px] py-5">
          <IonCard className="px-4 py-7">
            <div className="flex items-center space-x-3">
              <IonIcon className='h-8 w-8' icon={personOutline} />
              <div>
                <p className='text-sm'>Nama Peserta</p>
                <p className='text-sm font-bold'>Suparjo, S.Pd.I</p>
              </div>
            </div>

            <div className="flex space-x-3 mt-5">
              <IonIcon className='h-8 w-8' icon={timerOutline} />
              <div>
                <p className='text-sm'>Waktu Absen</p>
                <p className='text-sm font-bold text-tertiary'>Selasa, 22 April 2022 - 12:00 WIB</p>
              </div>
            </div>
          </IonCard>

          <div className="flex w-full justify-center px-4">
            <Button className="w-full rounded-md bg-[#970000] px-6 py-3">Hapus dari List</Button>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
}
