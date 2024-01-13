import { IonButton, IonContent, IonHeader, IonIcon, IonPage } from '@ionic/react';
import { chevronDownOutline, chevronForwardOutline, downloadOutline } from 'ionicons/icons';
import { Button } from '~/components/atoms';
import { Header } from '~/components/molecules';

export default function QRCodePresensi() {
  return (
    <IonPage>
      <IonHeader>
        <Header title="QR Code Presensi" shadow={false} titleCenter={true} whiteHeader={true} />
      </IonHeader>
      <IonContent>
        <div className="mt-[72px]">
          <div className="pt-5">
            <h2 className="text-center text-2xl font-bold">Rapat Akhir Bulan</h2>
          </div>

          <div className='flex flex-col items-center space-y-3 px-3'>
            <Button color='primary'  className='text-white w-full py-3 font-medium'>Presensi Sesi 1 <IonIcon slot="end" icon={chevronDownOutline}></IonIcon></Button>
            <img src='/qr-code.svg' alt="qr-code" />
            <IonButton fill="outline" className='rounded-sm w-1/2' ><IonIcon icon={downloadOutline} className='mr-2' /> Download</IonButton>
            <Button color='primary'  className='text-white w-full py-3 font-medium'>Presensi Sesi 2 <IonIcon slot="end" icon={chevronForwardOutline}></IonIcon></Button>
            <Button color='primary'  className='text-white w-full py-3 font-medium'>Presensi Sesi 3 <IonIcon slot="end" icon={chevronForwardOutline}></IonIcon></Button>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
}
