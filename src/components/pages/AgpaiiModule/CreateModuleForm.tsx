import {
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonList,
  IonPage,
  IonSelect,
  IonSelectOption,
} from '@ionic/react';
import { addOutline, checkmarkOutline, pencil, trash } from 'ionicons/icons';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '~/components/atoms';
import { Header } from '~/components/molecules';

export default function CreateModuleForm() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  return (
    <IonPage>
      <IonHeader>
        <Header
          title="Buat Modul"
          rightElement={
            <Button>
              <IonIcon className="h-6 w-6" icon={checkmarkOutline} />
            </Button>
          }
        />
      </IonHeader>
      <IonContent>
        <div className="mt-[72px]">
          <div className="mx-auto w-full max-w-screen-md">
            <IonList className="space-y-3 px-2 pt-5">
              {/* <form className="space-y-3 pt-5"> */}
              {/* <IonItem> */}
              <div className="flex items-center justify-center">
                <Link to="/agpaii-module/create-module-image">
                  <Button>
                    <IonIcon
                      className="h-6 w-6 border-2 border-black px-4 py-8 text-black"
                      icon={addOutline}
                    />
                    {/* <input type="file" ref={fileInputRef} style={{ display: 'none' }} /> */}
                  </Button>
                </Link>
              </div>
              {/* </IonItem> */}
              <IonItem>
                <IonInput labelPlacement="floating" label="Judul Modul" />
              </IonItem>

              <IonItem>
                <IonSelect label="Jenjang" labelPlacement="stacked" fill="solid">
                  <IonSelectOption value="apple">TK</IonSelectOption>
                  <IonSelectOption value="banana">SD</IonSelectOption>
                  <IonSelectOption value="orange">SMP</IonSelectOption>
                </IonSelect>
              </IonItem>

              <IonItem>
                <IonSelect label="Kelas" labelPlacement="stacked" fill="solid">
                  <IonSelectOption value="apple">TK</IonSelectOption>
                  <IonSelectOption value="banana">SD</IonSelectOption>
                  <IonSelectOption value="orange">SMP</IonSelectOption>
                </IonSelect>
              </IonItem>

              <div>
                <h3>Daftar isi</h3>
                <div className="flex items-center justify-center">
                  <Button className="flex flex-col items-center justify-center border-2 border-dashed p-3 text-black">
                    <IonIcon icon={addOutline} /> Tambah Bab Baru
                  </Button>
                </div>
              </div>

              <IonItem>
                <IonInput labelPlacement="floating" label="Bagian 1">
                  {/* <IonIcon slot="start" icon={lockClosed} aria-hidden="true"></IonIcon> */}
                  <IonButton color={'dark'} fill="clear" slot="end" aria-label="Show/hide">
                    <IonIcon slot="icon-only" name={trash} aria-hidden="true"></IonIcon>
                  </IonButton>
                </IonInput>
              </IonItem>
              {/* </form> */}
            </IonList>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
}
