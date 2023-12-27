import { useState } from 'react';
import { IonPage, IonContent, IonHeader, IonIcon } from '@ionic/react';
import { notifications, chatbubbles, camera } from 'ionicons/icons';
import { Link } from 'react-router-dom';
import { Header, TabItem, TabPanel, Tabs } from '../molecules';

export default function RumahAgpaii() {
  const [tab, setTab] = useState(0);

  return (
    <IonPage>
      <IonHeader>
        <Header
          title="Rumah AGPAII"
          rightElement={
            <div className="flex gap-4">
              <div className="btn-icon btn-icon-light">
                <IonIcon className="h-6 w-6 text-white" icon={notifications} />
              </div>
              <div className="btn-icon btn-icon-light">
                <IonIcon className="h-6 w-6 text-white" icon={chatbubbles} />
              </div>
            </div>
          }
        />
      </IonHeader>
      <IonContent>
        <div className="mt-[72px]">
          <Tabs activeTab={tab} onChange={setTab}>
            <TabItem>Semua</TabItem>
            <TabItem>Mengikuti</TabItem>
          </Tabs>
          <div className="flex items-center justify-between gap-4 px-3 py-5 shadow-md">
            <img
              className="h-10 w-10 rounded-full"
              src={`https://i.pravatar.cc/150?img=${4}`}
              alt="avatar"
            />
            <Link
              to="/post/create"
              className="w-[90%] rounded-2xl border border-dashed border-[#898A8D] px-4 py-[10px] text-xs text-[#979797] outline-none hover:cursor-pointer"
            >
              Diskusi hari ini
            </Link>
            <div className="btn-icon btn-icon-dark">
              <IonIcon className="h-6 w-6 text-primary" icon={camera} />
            </div>
          </div>

          <TabPanel activeTab={tab} index={0}>
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="flex w-full flex-col rounded-xl py-4 shadow-md">
                <div className="flex px-3">
                  <img
                    className="h-10 w-10 rounded-full"
                    src={`https://i.pravatar.cc/150?img=${i + 1}`}
                    alt="avatar"
                  />
                  <div className="ml-2 flex flex-col">
                    <h1 className="text-sm font-semibold">Abdul Jamil , S.Pd.</h1>
                    <p className="text-xs">Guru PAI SMP Gunungpati Semarang</p>
                  </div>
                </div>
                <div className="mt-3">
                  <img
                    className="w-full object-cover"
                    src={`https://picsum.photos/seed/${i + 1}/500/300`}
                    alt="post"
                  />
                </div>
              </div>
            ))}
          </TabPanel>
        </div>
      </IonContent>
    </IonPage>
  );
}
