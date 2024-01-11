import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
} from '@ionic/react';
import { arrowForwardOutline } from 'ionicons/icons';
import { Header } from '~/components/molecules';

export default function CreateEvent() {
  return (
    <IonPage>
      <IonHeader>
        <Header title="Buat Acara" whiteHeader={true} />
      </IonHeader>
      <IonContent>
        <div className="mt-[76px] pb-6">
          <IonCard>
            <IonCardContent className="flex items-center">
              <div>
                <h2 className="text-lg font-normal">Online</h2>
                <p>Buat kegiatan anda secara online dengan menggunakan layanan meeting kami</p>
              </div>
              <IonIcon className="text-5xl text-primary" icon={arrowForwardOutline} />
            </IonCardContent>
          </IonCard>

          <IonCard>
            <IonCardContent className="flex items-center">
              <div>
                <h2 className="text-lg font-normal">Offline</h2>
                <p>Buat kegiatan secara langsung dengan bertemu di tempat yang sudah di tetapkan</p>
              </div>
              <IonIcon className="text-5xl text-primary" icon={arrowForwardOutline} />
            </IonCardContent>
          </IonCard>
        </div>
      </IonContent>
    </IonPage>
  );
}
