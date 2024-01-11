import { IonContent, IonHeader, IonIcon, IonInput, IonPage } from '@ionic/react';
import {
  addOutline,
  chevronBackOutline,
  filterSharp,
  funnelOutline,
  location,
  peopleOutline,
} from 'ionicons/icons';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '~/components/atoms';
import { Header, TabItem, TabPanel, Tabs } from '~/components/molecules';
import EventCard from '~/components/molecules/event-card';

export default function Events() {
  const [tab, setTab] = useState(0);

  return (
    <IonPage>
      <IonHeader>
        <div className="fixed left-0 top-0 flex h-[72px] w-full items-center  bg-white px-6">
          <button className="btn-icon btn-icon-light">
            <IonIcon className="h-6 w-6 text-black" icon={chevronBackOutline} />
          </button>
          <h1 className="ml-4 w-full text-center font-semibold text-black">Acara</h1>
          <div className="ml-auto">
            <IonIcon className="h-6 w-6 text-black" icon={addOutline} />
          </div>
        </div>
      </IonHeader>
      <IonContent>
        <div className="mt-[72px] pb-6">
          <Tabs onChange={setTab}>
            <TabItem>Semua Acara</TabItem>
            <TabItem>Acara Diikuti</TabItem>
            <TabItem>Acara Saya</TabItem>
          </Tabs>
          <div className="px-6 py-6">
            <TabPanel index={0} activeTab={tab}>
              <div className="flex w-full items-center gap-5">
                <IonInput
                  className="rounded-full bg-gray-100 px-2 text-black"
                  placeholder="    Cari Nama Acara"
                />
                <Button>
                  <IonIcon className="h-6 w-6 text-black" icon={funnelOutline} />
                </Button>
              </div>

              <EventCard />
              <EventCard />
              <EventCard />
            </TabPanel>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
}
