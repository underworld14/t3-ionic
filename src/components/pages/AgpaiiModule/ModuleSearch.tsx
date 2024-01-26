import { IonContent, IonHeader, IonIcon, IonPage, IonSearchbar } from '@ionic/react';
import { book, chevronBackOutline, grid, listOutline } from 'ionicons/icons';
import { Button } from '~/components/atoms';
import ModuleItem from '~/components/molecules/module-item';

export default function ModuleSearch() {
  return (
    <IonPage>
      <IonHeader>
        <div className="fixed left-0 top-0 flex h-[72px] w-full items-center  bg-white px-6 shadow-md">
          <IonIcon className={'h-6 w-6 text-black'} icon={chevronBackOutline} />
          <IonSearchbar></IonSearchbar>
        </div>
      </IonHeader>

      <IonContent>
        <div className="mt-[72px]">
          <div className="mx-auto w-full max-w-screen-md">
            <ModuleItem />
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
}
