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
        <Header
          shadow={false}
          title="Acara"
          whiteHeader={true}
          titleCenter={true}
          rightElement={
            <Link to={'/events/create-event'}>
              <IonIcon className="h-6 w-6 text-black" icon={addOutline} />
            </Link>
          }
        />
      </IonHeader>
      <IonContent>
        <div className="mt-[72px] pb-6">
          <div className="mx-auto w-full max-w-screen-md">
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

              <TabPanel index={1} activeTab={tab}>
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

              <TabPanel index={2} activeTab={tab}>
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
        </div>
      </IonContent>
    </IonPage>
  );
}
