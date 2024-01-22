import dayjs from 'dayjs';
import { IonPage, IonContent, IonGrid, IonCol, IonRow, IonHeader } from '@ionic/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { HomeMenu } from '../atoms/home-menu';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { HomeWidget } from '../organisms';
import { api } from '~/utils/api';
import ArticleCard from '../molecules/article-card';

export default function Home() {
  const { data: article } = api.article.index.useQuery({});

  return (
    <IonPage>
      <IonHeader>
        <HomeWidget />
      </IonHeader>
      <IonContent>
        <div className="mt-[210px] flex w-full justify-center">
          <div className="w-full max-w-screen-md">
            <IonGrid className="relative z-20 mt-4 w-full pb-4 shadow-md">
              <IonRow>
                <IonCol size="3">
                  <HomeMenu icon="rumah-agpaii" to="/agpaii-home" title="Rumah AGPAII" />
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
                  <HomeMenu icon="event" to="/events" title="Event / Acara" />
                </IonCol>
                <IonCol size="3">
                  <HomeMenu icon="digital-module" to="/agpaii-module" title="Modul Digital" />
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
                {article?.data?.[0] && (
                  <ArticleCard
                    title={article?.data?.[0]?.title}
                    to={`/article/${encodeURIComponent(article?.data?.[0].slug || '')}`}
                  />
                )}

                <div className="mt-4">
                  <IonGrid>
                    <IonRow>
                      {article?.data?.slice(1, 3)?.map((article, i) => (
                        <IonCol size="6" key={i}>
                          <ArticleCard
                            fullWidth
                            variant="vertical"
                            title={article.title}
                            to={`/article/${encodeURIComponent(article.slug || '')}`}
                          />
                        </IonCol>
                      ))}
                    </IonRow>
                  </IonGrid>
                </div>
              </div>

              <div className="mt-4">
                <Swiper spaceBetween={50} slidesPerView={1} modules={[Pagination]}>
                  {article?.data?.slice(3, 11)?.map((article, i) => (
                    <SwiperSlide key={i}>
                      <ArticleCard
                        fullWidth
                        variant="vertical"
                        title={article.title}
                        to={`/article/${encodeURIComponent(article.slug || '')}`}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
}
