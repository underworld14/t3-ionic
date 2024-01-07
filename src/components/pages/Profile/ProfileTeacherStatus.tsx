import {
  IonContent,
  IonHeader,
  IonPage,
  IonList,
  IonItem,
  IonSelect,
  IonSelectOption,
  IonInput,
} from '@ionic/react';
import { Button } from '~/components/atoms';

import { Header } from '~/components/molecules';

export default function ProfileTeacherStatus() {
  return (
    <IonPage>
      <IonHeader>
        <Header title="Status Guru" />
      </IonHeader>
      <IonContent fullscreen>
        <div className="mt-[72px] px-4 py-4">
          <IonList>
            <IonItem className="py-1">
              <IonSelect
                label="Status Guru"
                placeholder="Pilih status guru"
                labelPlacement="stacked"
              >
                <IonSelectOption value="1">ASN</IonSelectOption>
                <IonSelectOption value="2">PPK</IonSelectOption>
                <IonSelectOption value="3">Non ASN</IonSelectOption>
              </IonSelect>
            </IonItem>

            <IonItem className="py-1">
              <IonInput
                label="Gaji Pokok"
                placeholder="Masukkan besaran gaji"
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
