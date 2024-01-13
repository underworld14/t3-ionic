import {
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonList,
  IonPage,
  IonSelect,
  IonSelectOption,
  IonTextarea,
} from '@ionic/react';
import { addCircleSharp, analytics, image, pencil } from 'ionicons/icons';
import { Button } from '~/components/atoms';
import { Header } from '~/components/molecules';

export default function CreateEventForm() {
  return (
    <IonPage>
      <IonHeader>
        <Header title="Buat Acara" whiteHeader={true} />
      </IonHeader>
      <IonContent>
        <div className="mt-[75px] px-4">
          <form className="mt-10 space-y-5">
            <div className="flex items-center gap-3">
              <div className="rounded-md p-2 shadow-md">
                <img alt="image-icon" src="/image-icon.svg" width={50} height={50} />
              </div>
              <input className="ml-2" placeholder="Tambah Banner" type="file" />
            </div>

            <div className="flex items-center gap-3">
              <div className="rounded-md p-2 shadow-md">
                <img alt="pencil" src="/pencil.svg" width={50} height={50} />
              </div>
              <IonInput className="ml-2 h-12.5 shadow-md" placeholder="Masukkan Nama"></IonInput>
            </div>

            <div className="flex w-full items-center gap-3">
              <div className="rounded-md p-2 shadow-md">
                <img alt="pencil" src="/kategori.svg" width={50} height={50} />
              </div>
              <IonSelect className="w-full shadow-md" placeholder="Kategori Acara">
                <IonSelectOption value="apple">Apple</IonSelectOption>
                <IonSelectOption value="banana">Banana</IonSelectOption>
                <IonSelectOption value="orange">Orange</IonSelectOption>
              </IonSelect>
            </div>

            <div className="flex items-center gap-3">
              <div className="rounded-md p-2 shadow-md">
                <img alt="pencil" src="/description.svg" width={50} height={50} />
              </div>
              <IonTextarea
                rows={3}
                className="ml-2 h-12.5 shadow-md"
                placeholder="Masukkan Deskripsi"
              ></IonTextarea>
            </div>

            <div className="flex items-center gap-3">
              <div className="rounded-md p-2 shadow-md">
                <img alt="pencil" src="/map.svg" width={50} height={50} />
              </div>
              <IonInput className="ml-2 h-12.5 shadow-md" placeholder="Masukkan Tempat"></IonInput>
            </div>

            <div className="flex items-center gap-3">
              <div className="rounded-md p-2 shadow-md">
                <img alt="pencil" src="/map.svg" width={50} height={50} />
              </div>
              <div className="ml-2 flex gap-2">
                <IonInput className="h-12.5 w-1/2 shadow-md" placeholder="Jawa Tengah"></IonInput>
                <IonInput className="h-12.5 w-1/2 shadow-md" placeholder="Kota Semarang"></IonInput>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="rounded-md p-2 shadow-md">
                <img alt="pencil" src="/calendar.svg" width={50} height={50} />
              </div>
              <div className="ml-2 flex gap-2">
                <IonInput className="h-12.5 w-1/2 shadow-md" placeholder="Waktu Mulai"></IonInput>
                <IonInput className="h-12.5 w-1/2 shadow-md" placeholder="Waktu Selesai"></IonInput>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="rounded-md p-2 shadow-md">
                <img alt="pencil" src="/description.svg" width={50} height={50} />
              </div>
              <IonTextarea
                rows={3}
                className="ml-2 h-12.5 shadow-md"
                placeholder="Fasilitas"
              ></IonTextarea>
            </div>

            <div className="flex items-start gap-2">
              <div className="rounded-md p-2 shadow-md">
                <img alt="pencil" src="/sesi.svg" width={50} height={50} />
              </div>
              <div className="ml-2 flex flex-col ">
                <IonInput className="h-12.5 w-3/4 shadow-md" placeholder="Sesi 1"></IonInput>
                <IonInput className="h-12.5 w-3/4 shadow-md" placeholder="Sesi 1"></IonInput>
              </div>
              <Button className="mr-5 mt-2">
                <IonIcon className="h-10 w-10 text-primary" icon={addCircleSharp} />
              </Button>
            </div>

            <div className="flex w-full justiy-center  items-center">
              <Button className="w-full bg-primary py-2 px-5 mx-auto">Simpan</Button>
            </div>
          </form>
        </div>
      </IonContent>
    </IonPage>
  );
}
