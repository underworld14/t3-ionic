import dayjs from 'dayjs';
import { IonPage, IonContent, IonGrid, IonCol, IonRow, IonHeader, IonToolbar } from '@ionic/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { HomeMenu } from '../atoms/home-menu';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { HomeWidget } from '../organisms';

export default function Home() {
  return (
    <IonPage>
      <IonHeader>
        <HomeWidget />
      </IonHeader>
      <IonContent>
        <div className="mt-[230px]">
          <IonGrid className="mt-4 w-full pb-4 shadow-md">
            <IonRow>
              <IonCol size="3">
                <HomeMenu icon="rumah-agpaii" to="/rumah-agpaii" title="Rumah AGPAII" />
              </IonCol>
              <IonCol size="3">
                <HomeMenu icon="kta-digital" to="/kta-digital" title="KTA Digital" />
              </IonCol>
              <IonCol size="3">
                <HomeMenu icon="info-anggota" to="/member-information" title="Info Anggota" />
              </IonCol>
              <IonCol size="3">
                <HomeMenu
                  icon="struktur-organisasi"
                  to="/organization-structure"
                  title="Struktur Organisasi"
                />
              </IonCol>
            </IonRow>
            <IonRow className="mt-4">
              <IonCol size="3">
                <HomeMenu icon="alquran" to="/alquran" title="Al-Qur'an" />
              </IonCol>
              <IonCol size="3">
                <HomeMenu icon="latihan-soal" to="/latihan-soal" title="Latihan Soal" />
              </IonCol>
              <IonCol size="3">
                <HomeMenu icon="arah-kiblat" to="/arah-kiblat" title="Arah Kiblat" />
              </IonCol>
              <IonCol size="3">
                <HomeMenu icon="lainya" to="/lainya" title="Lainya" />
              </IonCol>
            </IonRow>
          </IonGrid>

          <div className="px-6 py-6 shadow-md">
            <Swiper pagination spaceBetween={50} slidesPerView={1} modules={[Pagination]}>
              <SwiperSlide>
                <div className="w-full shadow-sm">
                  <img
                    className="h-[156px] w-full rounded-xl object-cover"
                    height={156}
                    src={`https://source.unsplash.com/random/1200x156?sig=${dayjs().unix()}`}
                    alt="slide"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-full shadow-sm">
                  <img
                    className="h-[156px] w-full rounded-xl object-cover"
                    height={156}
                    src={`https://source.unsplash.com/random/1200x156?sig=${Math.random().toFixed(
                      2,
                    )}`}
                    alt="slide"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>

          <div className="px-6 py-6 shadow-md">
            <h5 className="font-medium">Artikel Terbaru</h5>

            <div className="mt-4 pb-4">
              <div className="flex">
                <img
                  alt="artikel"
                  className="h-[156px] w-[60%] rounded-xl object-cover"
                  height={156}
                  src={`https://source.unsplash.com/random/1200x156?sig=${Math.random().toFixed(
                    2,
                  )}`}
                />
                <div className="ml-4 flex flex-col">
                  <h4 className="font-semibold">DPP AGPAII MENGADAKAN MAULID NABI MUHAMMAD SAW</h4>
                  <Link to="/artikel/1" className="mt-2 text-xs text-primary hover:underline">
                    Baca Selengkapnya
                  </Link>
                </div>
              </div>

              <div className="mt-4">
                <IonGrid>
                  <IonRow>
                    {Array.from({ length: 2 }).map((_, i) => (
                      <IonCol size="6" key={i}>
                        <div className="flex w-full flex-col">
                          <img
                            alt="artikel"
                            className="h-[100px] w-full rounded-xl object-cover"
                            height={100}
                            src={`https://source.unsplash.com/random/1200x156?sig=${Math.random().toFixed(
                              2,
                            )}`}
                          />
                          <h4 className="mt-4 font-semibold">
                            DPP AGPAII MENGADAKAN MAULID NABI MUHAMMAD SAW
                          </h4>
                          <Link
                            to="/artikel/1"
                            className="mt-2 text-xs text-primary hover:underline"
                          >
                            Baca Selengkapnya
                          </Link>
                        </div>
                      </IonCol>
                    ))}
                  </IonRow>
                </IonGrid>
              </div>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
}
