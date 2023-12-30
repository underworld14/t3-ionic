import { IonPage, IonContent, IonHeader } from '@ionic/react';
import { Header } from '~/components/molecules';

export default function Notification() {
  return (
    <IonPage>
      <IonHeader>
        <Header title="Notifikasi" />
      </IonHeader>
      <IonContent>
        <div className="mt-[72px] py-3">
          <div className="flex flex-col gap-1">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="flex items-center p-4 shadow-md hover:bg-neutral-100">
                <img
                  className="size-12 rounded-full"
                  src={`https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 10)}`}
                  alt="avatar"
                />
                <div className="ml-6 flex flex-col">
                  <div className="text-sm font-semibold">Muhammad Afnan, S.Pd.</div>
                  <div className="text-xs text-gray-800">Mengomentari postingan anda</div>
                  <div className="mt-2 text-[10px] text-gray-600">9 November 2023</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
}
