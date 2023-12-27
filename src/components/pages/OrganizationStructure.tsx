import { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonSelect, IonSelectOption } from '@ionic/react';
import { Header, TabItem, TabPanel, Tabs } from '../molecules';
import { MemberGallery } from '../organisms';

export default function OrganizationStructure() {
  const [tab, setTab] = useState(0);

  return (
    <IonPage>
      <IonHeader>
        <Header title="Struktur Organisasi" />
      </IonHeader>
      <IonContent>
        <div className="mt-[72px]">
          <Tabs onChange={setTab}>
            <TabItem>Struktur Organisasi</TabItem>
            <TabItem>Sejarah</TabItem>
          </Tabs>
          <div className="px-6 py-6">
            <TabPanel index={0} activeTab={tab}>
              <IonSelect label="Provinsi" placeholder="Pilih Provinsi">
                <IonSelectOption value="apple">Jawa Tengah</IonSelectOption>
                <IonSelectOption value="banana">Jawa Timur</IonSelectOption>
                <IonSelectOption value="orange">Jawa Barat</IonSelectOption>
              </IonSelect>

              <MemberGallery title="DPP" className="mt-5" />
              <MemberGallery title="DPW Jawa Tengah" className="mt-5" />
              <MemberGallery title="DPC Kota Semarang" className="mt-5" />
            </TabPanel>
            <TabPanel index={1} activeTab={tab}>
              <h2 className="text-center font-semibold">Sejarah AGPAII</h2>
              <div className="mt-5 text-center">
                <h3 className="text-sm font-semibold">Visi</h3>
                <p className="mt-2 text-justify text-xs text-[#222]">
                  “Mewujudkan Organisasi Profesi Guru Pendidikan Agama Islam (GPAI) yang profesional
                  dalam rangka meningkatkan kualitas kepribadian Islam yang kaffah bagi peserta
                  didik (siswa/murid) di sekolah pada jenjang pendidikan dasar dan menengah (SD,
                  SMP, SMA/SMK) menuju kemuliaan Islam dan kaum muslimin.”
                </p>
              </div>
            </TabPanel>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
}
