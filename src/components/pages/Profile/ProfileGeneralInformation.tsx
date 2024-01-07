import {
  IonPage,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonList,
  IonDatetimeButton,
  IonModal,
  IonDatetime,
  IonLabel,
  IonSelect,
  IonSelectOption,
} from '@ionic/react';

import { Header } from '../../molecules';
import { Button } from '~/components/atoms';

export default function ProfileGeneralInformation() {
  return (
    <IonPage>
      <IonHeader>
        <Header title="Profil Menu" />
      </IonHeader>

      <IonContent fullscreen>
        <div className="mt-[72px] px-4">
          <IonList>
            <IonItem className="py-1">
              <IonInput
                label="Nama"
                placeholder="Isi nama lengkapmu"
                labelPlacement="stacked"
              ></IonInput>
            </IonItem>

            <IonItem className="py-1">
              <IonInput
                label="NIK"
                placeholder="Masukkan nomor NIK"
                labelPlacement="stacked"
              ></IonInput>
            </IonItem>

            <IonItem className="py-1">
              <IonInput
                label="NIP"
                placeholder="Masukkan nomor NIP"
                labelPlacement="stacked"
              ></IonInput>
            </IonItem>

            <IonItem className="py-1">
              <IonLabel>Tanggal Lahir</IonLabel>
              <IonDatetimeButton datetime="datetime" />
            </IonItem>

            <IonItem className="py-1">
              <IonSelect
                label="Jenis Kelamin"
                labelPlacement="stacked"
                placeholder="Masukkan jenis kelamin"
              >
                <IonSelectOption value="laki-laki">Laki-laki</IonSelectOption>
                <IonSelectOption value="perempuan">Perempuan</IonSelectOption>
              </IonSelect>
            </IonItem>

            <IonItem className="py-1">
              <IonInput
                label="No Hp"
                placeholder="Masukkan nomor hp"
                labelPlacement="stacked"
              ></IonInput>
            </IonItem>

            <IonItem className="py-1">
              <IonSelect
                label="Jenjang Ajar"
                labelPlacement="stacked"
                placeholder="Masukkan jenjang ajar"
              >
                <IonSelectOption value="sd">SD</IonSelectOption>
                <IonSelectOption value="smp">SMP</IonSelectOption>
                <IonSelectOption value="sma">SMA</IonSelectOption>
                <IonSelectOption value="smk">SMK</IonSelectOption>
                <IonSelectOption value="pt">PT</IonSelectOption>
              </IonSelect>
            </IonItem>

            <IonItem className="py-1">
              <IonInput
                label="Unit Kerja"
                placeholder="Masukkan unit kerja"
                labelPlacement="stacked"
              ></IonInput>
            </IonItem>

            <IonItem className="py-1">
              <IonInput
                label="Nama Kepala Sekolah"
                placeholder="Masukkan nama kepala sekolah"
                labelPlacement="stacked"
              ></IonInput>
            </IonItem>

            <IonItem className="py-1">
              <IonInput
                label="NIP Kepala Sekolah"
                placeholder="Masukkan NIP kepala sekolah"
                labelPlacement="stacked"
              ></IonInput>
            </IonItem>

            <IonItem className="py-1">
              <IonInput
                label="Tempat Tugas"
                placeholder="Masukkan tempat tugas"
                labelPlacement="stacked"
              ></IonInput>
            </IonItem>
          </IonList>

          <div className="pb-6">
            <Button className="mt-6 w-full" color="primary" size="md">
              Simpan
            </Button>
          </div>
        </div>

        <IonModal keepContentsMounted={true}>
          <IonDatetime id="datetime"></IonDatetime>
        </IonModal>
      </IonContent>
    </IonPage>
  );
}
