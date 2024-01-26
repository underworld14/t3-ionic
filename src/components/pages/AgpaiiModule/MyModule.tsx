import { IonContent, IonHeader, IonIcon, IonPage, IonSearchbar } from '@ionic/react';
import { addOutline } from 'ionicons/icons';
import { Button } from '~/components/atoms';
import { Header } from '~/components/molecules';
import ModuleItem from '~/components/molecules/module-item';

export default function MyModule() {
  return (
    <IonPage>
      <IonHeader>
        <Header title="Modul Saya" whiteHeader={true} titleCenter={true} />
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
            <div className="fixed bottom-5 right-5">
              <Button className="rounded-full bg-primary p-4">
                <IonIcon className="h-8 w-8 font-bold text-white" icon={addOutline} />
              </Button>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
}
