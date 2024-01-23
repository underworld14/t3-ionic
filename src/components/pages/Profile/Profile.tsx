import { useState } from 'react';
import { IonContent, IonHeader, IonIcon, IonPage } from '@ionic/react';
import { grid, receipt, folderOpen, ellipsisVertical } from 'ionicons/icons';

import { Header, TabItem, TabPanel, Tabs, TransactionItem } from '../../molecules';
import { Link } from 'react-router-dom';
import { api } from '~/utils/api';

export default function Profile() {
  const [activeTab, setActiveTab] = useState(0);
  const { data: user } = api.user.getCurrentProfile.useQuery();
  const { data: userTransaction } = api.transaction.indexUserTransaction.useQuery();

  return (
    <IonPage>
      <IonHeader>
        <Header
          title="Profil AGPAII"
          rightElement={
            <Link to="/profile/menu" className="btn-icon btn-icon-light">
              <IonIcon icon={ellipsisVertical} className="size-5 text-white" />
            </Link>
          }
        />
      </IonHeader>
      <IonContent fullscreen>
        <div className="mt-[72px] flex justify-center py-4">
          <div className="w-full max-w-screen-md">
            <div className="px-6">
              <img
                src={`https://source.unsplash.com/random/1200x156?sig=${Math.random().toFixed(2)}`}
                className="h-[150px] w-full rounded-xl object-cover"
                height={150}
                alt="profile-background"
              />

              <div className="-mt-10 flex items-center justify-between gap-5 px-4">
                <img
                  src={`https://source.unsplash.com/random/1200x156?sig=${Math.random().toFixed(
                    2,
                  )}`}
                  className="size-20 rounded-full border-4 border-white object-cover"
                  height={80}
                  alt="profile"
                />

                <div className="flex gap-2.5">
                  <div className="rounded-xl bg-white px-1 py-2 text-center shadow-lg">
                    <div className="font-bold text-primary">50</div>
                    <div className="text-[10px]">Postingan</div>
                  </div>
                  <div className="rounded-xl bg-white p-2 text-center shadow-lg">
                    <div className="font-bold text-primary">50</div>
                    <div className="text-[10px]">Pengikut</div>
                  </div>
                  <div className="rounded-xl bg-white p-2 text-center shadow-lg">
                    <div className="font-bold text-primary">50</div>
                    <div className="text-[10px]">Mengikuti</div>
                  </div>
                </div>
              </div>

              <div className="mt-4 text-xs leading-normal">
                <h1 className="text-lg font-semibold">{user?.name}</h1>
                <div className="text-black/50">{user?.position?.name || '-'}</div>
                <p className="">
                  No KTA <span className="text-primary">{user?.kta_id || '-'}</span>
                </p>
                {/* <p>SMP Gunungjati Semarang</p>
                <p>DPW Jawa Tengah</p>
                <p>DPW Jawa Tengah</p>
                <p>DPD Kota Semarang</p>
                <p>“Hidup indah bila mencari berkah”</p> */}
              </div>
            </div>

            <Tabs className="mt-4" onChange={setActiveTab}>
              <TabItem>
                <IonIcon icon={grid} className="size-4.5" />
              </TabItem>
              <TabItem>
                <IonIcon icon={receipt} className="size-4.5" />
              </TabItem>
              <TabItem>
                <IonIcon icon={folderOpen} className="size-4.5" />
              </TabItem>
            </Tabs>

            <TabPanel index={0} activeTab={activeTab}>
              <div className="mt-4 grid grid-cols-3 gap-4 px-4">
                {Array.from({ length: 9 }).map((_, index) => (
                  <img
                    key={index}
                    src={`https://source.unsplash.com/random/1200x156?sig=${Math.random().toFixed(
                      2,
                    )}`}
                    className="h-[135px] w-full rounded object-cover"
                    alt="profile"
                  />
                ))}
              </div>
            </TabPanel>

            <TabPanel index={1} activeTab={activeTab}>
              <div className="flex flex-col">
                {userTransaction?.map(transaction => (
                  <TransactionItem
                    key={transaction.id}
                    amount={transaction.amount}
                    title={transaction.title}
                    date={transaction.updated_at}
                    status={transaction.status}
                  />
                ))}
              </div>
            </TabPanel>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
}
