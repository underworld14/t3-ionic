import {
  IonBadge,
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonItemGroup,
  IonLabel,
  IonList,
  IonPage,
  IonSearchbar,
} from '@ionic/react';
import { addOutline, downloadOutline } from 'ionicons/icons';
import { Header } from '~/components/molecules';

export default function ParticipantList() {
  return (
    <IonPage>
      <IonHeader>
        <Header title="Peserta" whiteHeader={true} />
      </IonHeader>
      <IonContent>
        <div className="mt-[72px]">
          <div>
            <div className="px-3 py-4">
              <IonSearchbar placeholder="Cari Peserta"></IonSearchbar>
              <div className="flex space-x-3">
                <IonBadge
                  className="rounded-full border-2 border-primary bg-white px-3 py-2 text-primary"
                  color="primary"
                >
                  Semua
                </IonBadge>
                <IonBadge
                  className=" rounded-full border-2 border-primary px-3 py-2 text-white"
                  color="primary"
                >
                  Sesi 1
                </IonBadge>
                <IonBadge
                  className="rounded-full border-2 border-primary bg-white px-3 py-2 text-primary"
                  color="primary"
                >
                  Sesi 2
                </IonBadge>
                <IonBadge
                  className="rounded-full border-2 border-primary bg-white px-3 py-2 text-primary"
                  color="primary"
                >
                  Sesi 3
                </IonBadge>
              </div>
            </div>
          </div>
          <div className="mt-5 flex items-center space-x-5 bg-primary px-3 py-8  text-lg font-bold">
            <IonIcon className="rounded-md border-2 border-black" icon={addOutline} />
            <h4>Tambah Peserta Manual</h4>
          </div>

          <IonList>
            <IonItemGroup>
              <IonItem className="flex w-full items-center space-x-4 py-5">
                <img
                  className="h-10 w-10 rounded-full "
                  src={`https://i.pravatar.cc/150?img=${2}`}
                  alt="avatar"
                />
                <div>
                  <p className="text-xl font-medium">Suparjo,S.Pd.I</p>
                  <IonLabel className="text-sm text-tertiary">Guru PAI SDN 2 PADAKEMBANG</IonLabel>
                </div>
              </IonItem>

              <IonItem className="flex w-full items-center space-x-4 py-5">
                <img
                  className="h-10 w-10 rounded-full "
                  src={`https://i.pravatar.cc/150?img=${2}`}
                  alt="avatar"
                />
                <div>
                  <p className="text-xl font-medium">Suparjo,S.Pd.I</p>
                  <IonLabel className="text-sm text-tertiary">Guru PAI SDN 2 PADAKEMBANG</IonLabel>
                </div>
              </IonItem>

              <IonItem className="flex w-full items-center space-x-4 py-5">
                <img
                  className="h-10 w-10 rounded-full "
                  src={`https://i.pravatar.cc/150?img=${2}`}
                  alt="avatar"
                />
                <div>
                  <p className="text-xl font-medium">Suparjo,S.Pd.I</p>
                  <IonLabel className="text-sm text-tertiary">Guru PAI SDN 2 PADAKEMBANG</IonLabel>
                </div>
              </IonItem>

              <IonItem className="flex w-full items-center space-x-4 py-5">
                <img
                  className="h-10 w-10 rounded-full "
                  src={`https://i.pravatar.cc/150?img=${2}`}
                  alt="avatar"
                />
                <div>
                  <p className="text-xl font-medium">Suparjo,S.Pd.I</p>
                  <IonLabel className="text-sm text-tertiary">Guru PAI SDN 2 PADAKEMBANG</IonLabel>
                </div>
              </IonItem>

              <IonItem className="flex w-full items-center space-x-4 py-5">
                <img
                  className="h-10 w-10 rounded-full "
                  src={`https://i.pravatar.cc/150?img=${2}`}
                  alt="avatar"
                />
                <div>
                  <p className="text-xl font-medium">Suparjo,S.Pd.I</p>
                  <IonLabel className="text-sm text-tertiary">Guru PAI SDN 2 PADAKEMBANG</IonLabel>
                </div>
              </IonItem>

              <IonItem className="flex w-full items-center space-x-4 py-5">
                <img
                  className="h-10 w-10 rounded-full "
                  src={`https://i.pravatar.cc/150?img=${2}`}
                  alt="avatar"
                />
                <div>
                  <p className="text-xl font-medium">Suparjo,S.Pd.I</p>
                  <IonLabel className="text-sm text-tertiary">Guru PAI SDN 2 PADAKEMBANG</IonLabel>
                </div>
              </IonItem>
            </IonItemGroup>
          </IonList>

          <div className='flex w-full justify-end px-3'>
            <IonButton fill="outline" className="w-1/2 rounded-sm">
              <IonIcon icon={downloadOutline} className="mr-2" /> Download
            </IonButton>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
}
