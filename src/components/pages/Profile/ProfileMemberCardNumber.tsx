import {
  IonContent,
  IonHeader,
  IonPage,
  IonIcon,
  IonList,
  IonItem,
  IonSelect,
  IonSelectOption,
} from '@ionic/react';
import { card } from 'ionicons/icons';
import { Button } from '~/components/atoms';

import { Header } from '~/components/molecules';

export default function ProfileMemberCardNumber() {
  return (
    <IonPage>
      <IonHeader>
        <Header title="Nomor Kartu Tanda Anggota" />
      </IonHeader>
      <IonContent fullscreen>
        <div className="mt-[72px] px-4 py-4">
          <div className="flex items-center rounded-md bg-primary px-6 py-4">
            <IonIcon className="size-8 text-white" icon={card} />
            <div className="ml-6 flex flex-col text-white">
              <div className="text-sm">Nomor Kartu Tanda Anggota</div>
              <div className="text-xl font-semibold">3285110022</div>
            </div>
          </div>

          <IonList className="mt-6">
            <IonItem className="py-1">
              <IonSelect label="Provinsi" placeholder="Pilih provinsi" labelPlacement="stacked">
                <IonSelectOption value="1">Option 1</IonSelectOption>
                <IonSelectOption value="2">Option 2</IonSelectOption>
                <IonSelectOption value="3">Option 3</IonSelectOption>
              </IonSelect>
            </IonItem>

            <IonItem className="py-1">
              <IonSelect
                label="Kota/Kab"
                placeholder="Pilih Kota/Kabupaten"
                labelPlacement="stacked"
              >
                <IonSelectOption value="1">Option 1</IonSelectOption>
                <IonSelectOption value="2">Option 2</IonSelectOption>
                <IonSelectOption value="3">Option 3</IonSelectOption>
              </IonSelect>
            </IonItem>

            <IonItem className="py-1">
              <IonSelect label="Kecamatan" placeholder="Pilih Kecamatan" labelPlacement="stacked">
                <IonSelectOption value="1">Option 1</IonSelectOption>
                <IonSelectOption value="2">Option 2</IonSelectOption>
                <IonSelectOption value="3">Option 3</IonSelectOption>
              </IonSelect>
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
