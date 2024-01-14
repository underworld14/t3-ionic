import {
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonList,
  IonPage,
  IonPopover,
} from '@ionic/react';
import { caretUpOutline } from 'ionicons/icons';
import { Button } from '~/components/atoms';
import { Header } from '~/components/molecules';

export default function ReadingModule() {
  return (
    <IonPage>
      <IonHeader>
        <Header
          title=""
          whiteHeader={true}
          rightElement={
            <>
              <Button id="popover-button" className="flex items-center gap-2 bg-white text-black">
                Sub Bab <IonIcon icon={caretUpOutline} />
              </Button>
              <IonPopover trigger="popover-button" dismissOnSelect={true}>
                <IonContent>
                  <IonList>
                    <IonItem button={true} detail={false}>
                      Mengenal Islam
                    </IonItem>
                    <IonItem button={true} detail={false}>
                      Arti cinta islam
                    </IonItem>
                  </IonList>
                </IonContent>
              </IonPopover>
            </>
          }
        />
      </IonHeader>
      <IonContent>
        <div className="mt-[72px]">
          <div className="space-y-3 px-4 pt-5">
            <h2 className="text-base font-medium">Mengenal Islam</h2>
            <p className="text-justify text-[13px]">
              Islam adalah agama yang diturunkan Allah kepada Nabi Muhammad SAW. lewat perantara
              Malaikat Jibril dengan tujuan mengarahkan dan membimbing manusia supaya menjadi
              makhluk Allah SWT. yang bahagia dunia dan akhirat.
            </p>
            <p className="text-justify text-[13px]">
              Ajaran Islam mencakup semua aspek kehidupan manusia, baik ibadah maupun mu‟amalah
              dalam arti luas. Islam tidak membedakan urusan dunia dan akhirat karena dunia dalam
              pandangan Islam adalah tempat menanam (mazra‟ah) yang hasilnya akan diunduh di akhirat
              kelak.
            </p>
            <p className="text-justify text-[13px]">
              Kata Islam berasal dari bahasa Arab, yang berarti selamat dan sejahtera. Islam juga
              berarti tunduk dan patuh. Kedua arti Islam ini bisa digabungkan: untuk dapat selamat
              dan sejahtera seseorang harus tunduk dan patuh terhadap semua aturan Allah SWT.
            </p>
            <p className="text-justify text-[13px]">
              Kehadiran Islam sebagai agama wahyu yang terakhir dimaksudkan untuk meluruskan
              menyimpangan dari agama-agama sebelumnya. Islam juga sekaligus membenarkan
              prinsip-prinsip agama lain, seperti mengesakan Allah di bidang akidah dan salat serta
              puasa dan lainnya di bidang ibadah, hanya berbeda cara pelaksanaannya. Inilah
              keistimewaan Islam yang diturunkan kepada Nabi Muhammad SAW yang sangat terbuka untuk
              seluruh umat manusia tanpa membedakan warna kulit, bangsa dan profesi.{' '}
            </p>
            <p className="text-justify text-[13px]">
              Islam memberikan banyak amalan keagamaan. Para penganut umumnya digalakkan untuk
              memegang Lima Rukun Islam, yaitu lima pilar yang menyatukan Muslim sebagai sebuah
              komunitas. Tambahan dari Lima Rukun, hukum Islam (syariah) telah membangun tradisi
              perintah yang telah menyentuh pada hampir semua aspek kehidupan dan kemasyarakatan.
              Tradisi ini meliputi segalanya dari hal praktikal seperti kehalalan, perbankan, jihad
              dan zakat
            </p>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
}
