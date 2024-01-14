import {
  IonAvatar,
  IonContent,
  IonHeader,
  IonIcon,
  IonImg,
  IonItem,
  IonLabel,
  IonList,
  IonModal,
  IonPage,
} from '@ionic/react';
import { grid, heartOutline } from 'ionicons/icons';
import { useRef } from 'react';
import { Button } from '~/components/atoms';
import { Header } from '~/components/molecules';

export default function ModuleDetail() {
  const modal = useRef<HTMLIonModalElement>(null);
  return (
    <IonPage>
      <IonHeader>
        <Header title="Detail Modul" titleCenter={true} whiteHeader={true} />
      </IonHeader>
      <IonContent>
        <div className="mt-[72px]">
          <div className="flex items-center justify-center pt-5">
            <img
              className="rounded-md shadow-md"
              width={202}
              height={299}
              alt="cover"
              src={`https://picsum.photos/seed/${Math.random() * 10}/202/299`}
            />
          </div>

          <IonModal
            ref={modal}
            trigger="open-modal"
            isOpen={true}
            initialBreakpoint={0.55}
            // breakpoints={[0.75, 0.75, 0.75]}
            backdropDismiss={false}
            // backdropBreakpoint={0.75}
            className='rounded-t-xl'
          >
            <IonContent className="ion-padding">
              <div className="flex items-center justify-between px-4 pt-5">
                <h4 className="text-[15px] text-tertiary">Dian Kusuma Wati</h4>
                <IonIcon className="h-6 w-6" icon={heartOutline} />
              </div>
              <div className='px-4 space-y-5'>
                <h2 className='text-2xl font-medium'>Aku Cinta Islam</h2>
                <div>
                  <p className="flex items-center gap-4 text-sm">
                    <IonIcon className="text-primary" icon={grid} /> 7 SMP
                  </p>
                </div>
                <p className='text-sm text-justify'>
                  Islam adalah agama yang diturunkan Allah kepada Nabi Muhammad SAW. lewat perantara
                  Malaikat Jibril dengan tujuan mengarahkan dan membimbing manusia supaya menjadi
                  makhluk Allah SWT. yang bahagia dunia dan akhirat.
                </p>
                <p className='text-sm text-justify'>
                  Ajaran Islam mencakup semua aspek kehidupan manusia, baik ibadah maupun mu‟amalah
                  dalam arti luas. Islam tidak membedakan urusan dunia dan akhirat karena dunia
                  dalam pandangan Islam adalah tempat menanam (mazra‟ah) yang hasilnya akan diunduh
                  di akhirat kelak.
                </p>
                <div className='flex items-center justify-center'>
                    <Button className='bg-primary text-white py-3 px-7 drop-shadow-[0_0_50px_#00978873] w-5/6 rounded-full'>BACA</Button>
                </div>
              </div>
            </IonContent>
          </IonModal>
        </div>
      </IonContent>
    </IonPage>
  );
}
