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
          <div className="mx-auto w-full max-w-screen-md">
            <div>
              <IonSearchbar placeholder="Cari Modul"></IonSearchbar>
            </div>
            <div>
              <ModuleItem />
              <ModuleItem />
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
}
