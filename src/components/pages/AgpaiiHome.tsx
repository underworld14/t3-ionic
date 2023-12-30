import { useState } from 'react';
import {
  IonPage,
  IonContent,
  IonHeader,
  IonIcon,
  IonFab,
  IonFabButton,
  IonRippleEffect,
} from '@ionic/react';
import { notifications, chatbubbles, camera, add } from 'ionicons/icons';
import { Link } from 'react-router-dom';
import { Header, TabItem, TabPanel, Tabs, Post } from '../molecules';

export default function RumahAgpaii() {
  const [tab, setTab] = useState(0);

  return (
    <IonPage>
      <IonHeader>
        <Header
          title="Rumah AGPAII"
          rightElement={
            <div className="flex gap-4">
              <Link to="/agpaii-home/notification" className="btn-icon btn-icon-light">
                <IonIcon className="h-6 w-6 text-white" icon={notifications} />
              </Link>
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

          {/* stories */}
          <div className="scrollbar-none overflow-y-auto whitespace-nowrap px-3 py-5 shadow-md">
            {Array.from({ length: 10 }).map((_, i) => (
              <Link
                to={`/agpaii-home/stories/${i}`}
                key={i}
                className="ion-activatable relative mr-4 inline-block h-[115px] w-[85px] rounded-xl bg-gray-400 shadow-sm hover:cursor-pointer"
                style={{
                  background: `url(https://picsum.photos/seed/${Math.random() * 10}/500/300)`,
                }}
              >
                <img
                  className="absolute -top-3 right-1 size-7 rounded-full"
                  src={`https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 10)}`}
                  alt="avatar"
                />
                <div
                  className={`ripple-parent ion-activable flex h-full w-full items-center justify-center rounded-xl`}
                >
                  <IonRippleEffect />
                  {/* <div className="text-[10px] font-semibold text-white">Buat Story</div> */}
                </div>
              </Link>
            ))}
          </div>

          <div className="flex items-center justify-between gap-4 px-3 py-5 shadow-md">
            <img
              className="h-10 w-10 rounded-full"
              src={`https://i.pravatar.cc/150?img=${4}`}
              alt="avatar"
            />
            <Link
              to="/agpaii-home/create-post"
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
              <Post key={i} />
            ))}
          </TabPanel>
        </div>

        <IonFab slot="fixed" vertical="bottom" horizontal="end">
          <Link to="/agpaii-home/create-post">
            <IonFabButton>
              <IonIcon icon={add} className="text-white"></IonIcon>
            </IonFabButton>
          </Link>
        </IonFab>
      </IonContent>
    </IonPage>
  );
}
