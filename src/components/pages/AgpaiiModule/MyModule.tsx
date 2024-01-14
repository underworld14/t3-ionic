import { IonContent, IonHeader, IonIcon, IonPage, IonSearchbar } from '@ionic/react';
import {  addOutline } from 'ionicons/icons';
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
          <div>
            <IonSearchbar placeholder='Cari Modul'></IonSearchbar>
          </div>
          <div>
            <ModuleItem />
            <ModuleItem />
          </div>
          <div className='fixed right-5 bottom-5'>
            <Button className="rounded-full bg-primary p-4">
              <IonIcon className='w-8 h-8 text-white font-bold' icon={addOutline} />
            </Button>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
}
