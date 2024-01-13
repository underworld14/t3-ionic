import { IonContent, IonIcon, IonItemDivider, IonModal, IonPage } from '@ionic/react';
import { calendar, calendarOutline } from 'ionicons/icons';
import { Link } from 'react-router-dom';
import { Button } from '~/components/atoms';
import { Header } from '~/components/molecules';

export default function EventDetail() {
  return (
    <IonPage>
      <IonContent>
        <div className="left-0 top-0 min-h-[calc(100vh-5%)] rounded-b-3xl bg-primary">
          <IonModal className="m-2 h-[calc(100vh-10%)] rounded-b-3xl" isOpen={true}>
            <IonContent>
              <Header title="Detail Acara" whiteHeader={true} titleCenter={true} shadow={false} />

              <div className="absolute mx-4 mt-[72px]">
                <div className="absolute left-0 top-0 flex items-center justify-center gap-2 rounded-xl rounded-tl-xl bg-white px-2 py-2.5 ">
                  <img
                    className="h-7.5 w-7.5 rounded-full"
                    src={`https://i.pravatar.cc/150?img=${2}`}
                    alt="avatar"
                  />
                  <p className="font-semibold">Sulimin,S.Pd.I</p>
                </div>
                <img
                  alt="artikel"
                  className={'h-[265px] w-full rounded-xl '}
                  width={200}
                  height={265}
                  src={`https://source.unsplash.com/random/1200x156?sig=${Math.random().toFixed(
                    2,
                  )}`}
                />

                <h2 className="mt-2 text-lg font-semibold">Rapat akhir bulan bersama guru agama</h2>

                <div className="mt-3 flex w-full gap-2">
                  <div>
                    <IonIcon className="h-6 w-6 text-primary" icon={calendarOutline} />
                  </div>
                  <div>
                    <table className="w-full">
                      <tr>
                        <td className="w-1/4 align-top text-tertiary" colSpan={2}>
                          Waktu :
                        </td>
                        <td>
                          <p>Selasa, 22 April 2022 - 12:00 WIB</p>

                          <p>Selasa, 24 April 2022 - 12:00 WIB</p>
                        </td>
                      </tr>

                      <tr>
                        <td className="w-1/4 text-tertiary" colSpan={2}>
                          Kategori :
                        </td>
                        <td>Pelatihan</td>
                      </tr>

                      <tr>
                        <td className="w-1/4 text-tertiary" colSpan={2}>
                          Sesi :
                        </td>
                        <td>3 Sesi</td>
                      </tr>

                      <tr>
                        <td className="w-1/4 text-tertiary" colSpan={2}>
                          Tempat :
                        </td>
                        <td>Gedung GSG Balaikota</td>
                      </tr>

                      <tr>
                        <td className="w-1/4 text-tertiary" colSpan={2}>
                          Kota :
                        </td>
                        <td>Semarang - Jawa Tengah</td>
                      </tr>

                      <tr>
                        <td className="w-1/4 text-tertiary" colSpan={2}>
                          Fasilitas :
                        </td>
                        <td>Sertifikat, Snack, Makan Siang</td>
                      </tr>

                      <tr>
                        <td className="w-1/4 text-tertiary" colSpan={2}>
                          Jenis :
                        </td>
                        <td>Offline</td>
                      </tr>
                    </table>
                  </div>
                </div>

                {/* Deskripsi */}
                <div className="mt-4 px-5">
                  {/* <IonItemDivider class="bg-white"> */}
                  <div>
                    <h5 className="w-1/4 border-b-4 border-b-primary pb-3">Deskripsi</h5>
                  </div>
                  {/* </IonItemDivider> */}

                  <p className="mt-2 text-tertiary">
                    Deskripsi acara Deskripsi acara Deskripsi acara Deskripsi acara Deskripsi acara
                    Deskripsi acara Deskripsi acara Deskripsi acara Deskripsi acara Deskripsi acara
                    Deskripsi acara Deskripsi acara Deskripsi acara Deskripsi acara Deskripsi acara
                  </p>
                </div>
              </div>
            </IonContent>
          </IonModal>
        </div>

        <Link
          className="my-5 flex w-full items-center justify-center"
          to="/events/event-detail/presensi"
        >
          <Button className="rounded-lg bg-primary px-10 py-3">Presensi</Button>
        </Link>
      </IonContent>
    </IonPage>
  );
}
