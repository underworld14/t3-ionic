import { IonContent, IonHeader, IonIcon, IonItem, IonList, IonPage } from '@ionic/react';
import { Header } from '../molecules';
import { chevronForwardOutline, documentTextOutline, heartCircleOutline } from 'ionicons/icons';

export default function OtherMenu() {
  return (
    <IonPage>
      <IonHeader>
        <Header title="Menu Lainnya" titleCenter={true} whiteHeader={true} shadow={false} />
      </IonHeader>
      <IonContent>
        <div className="mt-[72px]">
          <IonList className='px-4'>
            <IonItem >
              <div className="w-full py-3 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="rounded-full bg-tertiary p-2">
                    <IonIcon className='h-8 w-8 text-primary' icon={documentTextOutline} />
                  </div>
                  <p className='text-lg font-semibold'>Modul Saya</p>
                </div>
                <IonIcon className='h-8 w-8' icon={chevronForwardOutline} />
              </div>
            </IonItem>

            <IonItem >
              <div className="w-full py-3 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="rounded-full bg-tertiary p-2">
                    <IonIcon className='h-8 w-8 text-primary' icon={heartCircleOutline} />
                  </div>
                  <p className='text-lg font-semibold'>Modul favorite</p>
                </div>
                <IonIcon className='h-8 w-8' icon={chevronForwardOutline} />
              </div>
            </IonItem>
          </IonList>
        </div>
      </IonContent>
    </IonPage>
  );
}
