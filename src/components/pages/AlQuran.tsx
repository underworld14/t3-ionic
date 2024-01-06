import { IonPage, IonHeader, IonContent } from '@ionic/react';
import { Header } from '../molecules';

const ALQURAN_IFRAME_SOURCE = 'https://quranweb.id/';

export default function AlQuran() {
  return (
    <IonPage>
      <IonHeader>
        <Header title="Al Quran" />
      </IonHeader>

      <IonContent fullscreen className="overflow-hidden">
        <div className="mt-[72px] px-4 py-4">
          <iframe
            className="w-full"
            src={ALQURAN_IFRAME_SOURCE}
            title="Al Quran"
            allowFullScreen
            height={window.innerHeight - 88}
          />
        </div>
      </IonContent>
    </IonPage>
  );
}
