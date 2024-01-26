import { IonContent, IonHeader, IonIcon, IonPage } from '@ionic/react';
import { checkmarkOutline } from 'ionicons/icons';
import { useState } from 'react';
import { Button } from '~/components/atoms';
import { Header, TabItem, TabPanel, Tabs } from '~/components/molecules';

export default function CreateModuleImage() {
  const [tab, setTab] = useState(0);
  return (
    <IonPage>
      <IonHeader>
        <Header
          title="Buat Modul"
          rightElement={
            <Button>
              <IonIcon className="h-6 w-6" icon={checkmarkOutline} />
            </Button>
          }
        />
      </IonHeader>
      <IonContent>
        <div className="mt-[72px]">
          <div className="mx-auto w-full max-w-screen-md">
            <Tabs activeTab={tab} onChange={setTab}>
              <TabItem>Media Saya</TabItem>
              <TabItem>Template</TabItem>
            </Tabs>

            <TabPanel activeTab={tab} index={0}>
              <form className="p-3">
                <input type="file" />
              </form>
            </TabPanel>

            <TabPanel activeTab={tab} index={1}>
              <div className="p-3">
                <h1>Sampul Modul</h1>

                <div className="grid grid-cols-3 gap-2 px-2 py-5">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <img
                      key={i}
                      className="rounded-md"
                      src={`https://picsum.photos/seed/${Math.random() * 10}/120/165`}
                      width={120}
                      height={165}
                      alt="module"
                    />
                  ))}
                </div>
              </div>
            </TabPanel>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
}
