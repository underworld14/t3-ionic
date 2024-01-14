import { IonContent, IonHeader, IonPage } from '@ionic/react';
import { Link } from 'react-router-dom';
import { Header } from '~/components/molecules';

export default function ModulJenjang() {
  return (
    <IonPage>
      <IonHeader>
        <Header title="Modul Jenjang" whiteHeader={true} titleCenter={true} />
      </IonHeader>

      <IonContent>
        <div className="mt-[72px]">
          <div className="rounded-b-xl bg-primary px-3 py-5 shadow-md">
            <h4 className="text-base  font-semibold text-white">TK</h4>
          </div>

          <div className="grid grid-cols-3 gap-2 py-5 px-2">
            {Array.from({ length: 12 }).map((_, i) => (
              <Link key={i} to="/">
                <img
                className='rounded-md'
                  src={`https://picsum.photos/seed/${Math.random() * 10}/120/165`}
                  width={120}
                  height={165}
                  alt="module"
                />
              </Link>
            ))}
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
}
