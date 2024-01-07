import { IonContent, IonHeader, IonPage, IonList, IonItem, IonTextarea } from '@ionic/react';
import { Button } from '~/components/atoms';
import { Header } from '~/components/molecules';

export default function ProfileBio() {
  return (
    <IonPage>
      <IonHeader>
        <Header title="Biografi" />
      </IonHeader>
      <IonContent fullscreen>
        <div className="mt-[72px] px-4">
          <IonList>
            <IonItem>
              <IonTextarea
                autoFocus
                labelPlacement="stacked"
                label="Biografi"
                placeholder="Masukkan deskripsi singkat tentang dirimu"
                rows={8}
              ></IonTextarea>
            </IonItem>
          </IonList>

          <div className="pb-6">
            <Button className="mt-6 w-full" color="primary" size="md">
              Simpan
            </Button>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
}
