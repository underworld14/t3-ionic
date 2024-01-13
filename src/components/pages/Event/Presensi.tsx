import {
  IonBackdrop,
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonItemDivider,
  IonLabel,
  IonList,
  IonModal,
  IonPage,
} from '@ionic/react';
import { useRef, useState } from 'react';
import cn from 'classnames';
import { Button } from '~/components/atoms';
import { Header } from '~/components/molecules';
import { personCircle } from 'ionicons/icons';

export default function Presensi() {
  const [open, setOpen] = useState(false);
  const modal = useRef<HTMLIonModalElement>(null);

  function dismiss() {
    modal.current?.dismiss();
  }

  return (
    <IonPage>
      {/* <IonBackdrop className={cn(open && `bg-tertiary opacity-75`)} onClick={() => setOpen(false)} visible={open}></IonBackdrop> */}
      <IonHeader>
        <Header title="Presensi" whiteHeader={true} titleCenter={true} />
      </IonHeader>

      <IonContent>
        <div className="mt-[75px]">
          <IonModal className="mx-3 my-auto h-44 rounded-lg" id="example-modal" ref={modal} trigger="open-custom-dialog">
            <div className="wrapper px-3 py-2">
              <h1 className="text-lg font-bold">Absen dulu ya</h1>

              <div className='flex flex-col gap-5'>

              <div>
                <p>Sebelum anda mengikuti acara, anda harus absen terlebih dahulu</p>
              </div>
              <div className='flex justify-end gap-2 w-full '>
              <Button className='bg-tertiary text-black px-6 py-2' onClick={dismiss}>Nanti</Button>
              <Button className='bg-primary text-white px-6 py-2' onClick={dismiss}>Oke</Button>
              </div>
              </div>
            </div>
          </IonModal>
          <div className="flex justify-center">
            <h2 className="mt-5 w-3/4 bg-tertiary text-center align-text-bottom text-2xl font-semibold">
              Rapat Akhir Bulan
            </h2>
          </div>

          <div className="mx-5 mt-5">
            <h3 className="font-medium">Keterangan Presensi</h3>

            <div className="mt-5 flex w-full">
              <table className="w-full border-collapse border border-slate-300">
                <thead className="bg-primary  text-center align-middle text-xs font-medium text-white">
                  <tr>
                    <th className="border border-slate-300 px-3  py-2">Sesi</th>
                    <th className="border border-slate-300 px-3 py-2">Keterangan</th>
                    <th className="border border-slate-300 px-3 py-2">Waktu</th>
                  </tr>
                </thead>
                <tbody className="bg-tertiary text-center align-middle text-[10px]">
                  <tr>
                    <td className="border border-slate-300 px-3 py-2">1</td>
                    <td className="border border-slate-300 px-3 py-2">Sudah Presensi</td>
                    <td className="border border-slate-300 px-3 py-2">12-06-2023 | 09.30 WIB</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-3 py-2">2</td>
                    <td className="border border-slate-300 px-3 py-2">Belum Presensi</td>
                    <td className="border border-slate-300 px-3 py-2">-</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-3 py-2">3</td>
                    <td className="border border-slate-300 px-3 py-2">Belum Presensi</td>
                    <td className="border border-slate-300 px-3 py-2">-</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-8 flex flex-col items-center justify-center space-y-5">
              <IonButton className="w-full" color="tertiary" expand="block">
                Presensi Sesi 1
              </IonButton>
              <IonButton
                className="w-full"
                color="primary"
                onClick={() => setOpen(true)}
                id="open-custom-dialog" expand="block"
              >
                Presensi Sesi 2
              </IonButton>

              <IonButton
                className="w-full"
                color="primary"
                onClick={() => setOpen(true)}
                expand="block"
              >
                Presensi Sesi 3
              </IonButton>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
}
