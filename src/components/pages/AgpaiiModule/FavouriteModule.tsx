import { IonContent, IonHeader, IonPage, IonSearchbar } from '@ionic/react';
import { Header } from '~/components/molecules';
import ModuleItem from '~/components/molecules/module-item';

export default function FavouriteModule() {
  return (
    <IonPage>
      <IonHeader>
        <Header title="Modul Favorit" titleCenter={true} whiteHeader={true} />
      </IonHeader>
      <IonContent>
        <div className="mt-[75px]">
          <div>
            <IonSearchbar placeholder="Cari Modul"></IonSearchbar>
          </div>
          <div>
            <ModuleItem />
            <ModuleItem />
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
}
