import { IonContent, IonHeader, IonPage } from '@ionic/react';
import { Header } from '~/components/molecules';

export default function KTA() {
  return (
    <IonPage>
      <IonHeader>
        <Header title="KTA" />
      </IonHeader>
      <IonContent>
        <div className="mt-[72px] py-3"></div>
      </IonContent>
    </IonPage>
  );
}
