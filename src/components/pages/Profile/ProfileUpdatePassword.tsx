import { IonContent, IonHeader, IonPage, IonList, IonItem, IonInput } from '@ionic/react';
import { Button } from '~/components/atoms';

import { Header } from '~/components/molecules';

export default function ProfileUpdatePassword() {
  return (
    <IonPage>
      <IonHeader>
        <Header title="Ubah Password" />
      </IonHeader>
      <IonContent fullscreen>
        <div className="mt-[72px] px-4 py-4">
          <IonList>
            <IonItem className="py-1">
              <IonInput
                label="Password Lama"
                placeholder="Masukkan password lama"
                labelPlacement="stacked"
              ></IonInput>
            </IonItem>

            <IonItem className="py-1">
              <IonInput
                label="Password Baru"
                placeholder="Masukkan password baru"
                labelPlacement="stacked"
              ></IonInput>
            </IonItem>

            <IonItem className="py-1">
              <IonInput
                label="Konfirmasi Password Baru"
                placeholder="Masukkan konfirmasi password baru"
                labelPlacement="stacked"
              ></IonInput>
            </IonItem>
          </IonList>

          <Button className="mt-6 w-full" color="primary" size="md">
            Simpan
          </Button>
        </div>
      </IonContent>
    </IonPage>
  );
}
