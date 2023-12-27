import { IonPage, IonContent, IonHeader, IonIcon, IonFooter } from '@ionic/react';
import { filterCircle, search } from 'ionicons/icons';
import { useState } from 'react';
import { Header } from '~/components/molecules';
import { UserFilterBottomSheet } from '~/components/organisms';

export default function MemberInformation() {
  const [filter, setFilter] = useState(false);

  return (
    <IonPage>
      <IonHeader>
        <Header title="Informasi Anggota" />
      </IonHeader>
      <IonContent>
        <div className="mt-[72px]">
          <div className="px-6 py-4">
            <img
              src="/assets/img/indonesia-map.png"
              alt="Indonesia Map"
              className="w-full"
              height="155"
            />
          </div>
          <hr />
          <div className="px-6">
            <div className="flex items-center justify-between py-4">
              <div className="text-sm font-medium">Cari Anggota</div>

              <button
                className="flex items-center text-sm font-medium"
                onClick={() => setFilter(true)}
              >
                <IonIcon icon={filterCircle} className="mr-1 h-4 w-4" />
                Filter
              </button>
            </div>

            <div className="flex items-center rounded border px-3">
              <IonIcon icon={search} className="h-5 w-5 text-gray-400" />
              <input className="px-2 py-3 text-sm outline-none" placeholder="Cari Anggota" />
            </div>
            <div className="mt-2 text-xs text-gray-400">Hasil pencarian : 128 pengguna</div>
          </div>

          <div className="mt-4 flex flex-col">
            {Array.from({ length: 10 }).map((_, i) => (
              <div
                key={i}
                className={`flex flex-col border-b ${i === 0 ? 'border-t' : ''} px-6 py-3`}
              >
                <div className="flex items-center">
                  <img
                    src={`https://source.unsplash.com/random/1200x156?sig=${Math.random().toFixed(
                      2,
                    )}`}
                    alt="Profile"
                    className="h-11 w-11 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <h4 className="text-sm font-medium">Abdul Jamil S.Pd.I</h4>
                    <div className="text-xs text-gray-400">Guru</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </IonContent>
      <IonFooter>
        <UserFilterBottomSheet open={filter} onDismiss={() => setFilter(false)} />
      </IonFooter>
    </IonPage>
  );
}
