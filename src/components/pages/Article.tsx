import { useParams } from 'react-router';
import { IonPage, IonHeader, IonContent } from '@ionic/react';

import { Header } from '../molecules';
import { api } from '~/utils/api';

export default function Article() {
  const params = useParams<{ slug: string }>();
  const article = api.article.show.useQuery({ slug: decodeURIComponent(params.slug) });

  return (
    <IonPage>
      <IonHeader>
        <Header title="Artikel AGPAII" />
      </IonHeader>
      <IonContent>
        <div className="mt-[72px] px-6 py-4">
          <h1 className="text-2xl font-semibold">{decodeURIComponent(params.slug)}</h1>
          <div
            className="mt-4 text-justify"
            dangerouslySetInnerHTML={{
              __html: article.data?.body || '',
            }}
          />
        </div>
      </IonContent>
    </IonPage>
  );
}
