import { useState } from 'react';
import { IonPage, IonContent, IonHeader, IonFooter, IonIcon, IonRippleEffect } from '@ionic/react';
import { BottomSheet } from 'react-spring-bottom-sheet';
import { image, videocam } from 'ionicons/icons';

import { Button } from '~/components/atoms';
import { Header } from '~/components/molecules';

export default function CreatePost() {
  const [open, setOpen] = useState(false);

  return (
    <IonPage>
      <IonHeader>
        <Header title="Postingan" />
      </IonHeader>
      <IonContent>
        <div className="mt-[100px]">
          <div className="px-6">
            <div className="flex items-center justify-between">
              <div className="font-semibold">Buat Postingan</div>
              <Button color="grey" size="sm" shape="rounded">
                Posting
              </Button>
            </div>

            <div className="mt-6">
              <textarea
                rows={10}
                placeholder="Ketik sesuatu..."
                className="w-full rounded bg-[#E5E5E5] p-2 outline-none"
              ></textarea>
            </div>
          </div>
        </div>
      </IonContent>
      <IonFooter>
        <div className="shadow-top-md fixed bottom-0 left-0 flex h-[80px] w-full items-center justify-between px-6">
          <div className="text-xs font-medium">Tambahkan di postinganmu : </div>
          <div className="flex gap-4">
            <div className="btn-icon btn-icon-dark" onClick={() => setOpen(true)}>
              <IonIcon className="h-6 w-6 text-primary" icon={image} />
            </div>
            <div className="btn-icon btn-icon-dark" onClick={() => setOpen(true)}>
              <IonIcon className="h-6 w-6 text-primary" icon={videocam} />
            </div>
          </div>
        </div>
        <BottomSheet open={open} snapPoints={({ maxHeight }) => [maxHeight / 4, maxHeight * 0.3]}>
          <div className="mt-2 flex w-full flex-col">
            <div className="flex items-center justify-between px-6">
              <div className="text-sm font-medium">Tambahkan di postinganmu : </div>
              <Button color="grey" size="sm" shape="rounded" onClick={() => setOpen(false)}>
                Batal
              </Button>
            </div>

            <div className="mt-4 flex flex-col">
              <SheetButton icon={image} label="Foto" />
              <SheetButton icon={videocam} label="Video" />
            </div>
          </div>
        </BottomSheet>
      </IonFooter>
    </IonPage>
  );
}

interface SheetButtonProps {
  icon: string;
  label: string;
}

function SheetButton({ icon, label }: SheetButtonProps) {
  return (
    <button className="ripple-parent ion-activatable flex items-center px-6 py-3 hover:cursor-pointer hover:bg-primary/25">
      <IonRippleEffect></IonRippleEffect>
      <IonIcon className="h-7 w-7 text-primary" icon={icon} />
      <div className="ml-4 text-xs font-medium">{label}</div>
    </button>
  );
}
