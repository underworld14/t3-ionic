import {
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonRippleEffect,
  IonSearchbar,
} from '@ionic/react';
import { menuOutline } from 'ionicons/icons';
import { Link } from 'react-router-dom';
import { Button } from '~/components/atoms';
import { Header } from '~/components/molecules';

export default function AgpaiiModule() {
  return (
    <IonPage>
      <IonHeader>
        <Header
          title="Module Agpaii"
          rightElement={<IonIcon className="h-8 w-8 text-black" icon={menuOutline} />}
          whiteHeader={true}
        />
      </IonHeader>
      <IonContent>
        <div className="mt-[72px]">
          <div className="px-4">
            <IonSearchbar />
          </div>
          <div className="flex w-full items-center justify-center">
            <img src="/pai-module.svg" alt="pai-module" />
          </div>

          <div className="mt-5">
            <div className="flex items-center justify-between px-4">
              <h2 className="text-lg font-semibold text-primary">Module Terbaru</h2>
              <Button color="primary" className="rounded-full px-3 py-1">
                Lihat Semua
              </Button>
            </div>

            {/* Module */}
            <div className="scrollbar-none overflow-y-auto whitespace-nowrap px-3 py-5 ">
              {Array.from({ length: 10 }).map((_, i) => (
                <Link to={``} key={i} className="relative mr-4 inline-block shadow-sm ">
                  <img
                    className="h-[200px] w-[145px] rounded-md"
                    src={`https://picsum.photos/seed/${Math.random() * 10}/500/300`}
                    alt="module"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center ">
                    <div className=" text-center  text-white ">
                      <h2 className=" text-sm font-semibold">Aku Cinta Islam</h2>
                    </div>
                    <div className="mt-28 text-center  text-white">
                      <p className=" text-[10px] font-semibold">Dian Kusuma Wati</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="px-3 text-lg font-semibold text-primary">
              <h2>Jenjang</h2>
              <div className="mt-3 grid grid-cols-3 rounded-md border-2 border-primary p-2">
                <div className="flex flex-col items-center justify-center">
                  <img src="./tk.png" width={75} height={75} alt="tk" />
                  <p className="text-black">TK</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <img src="./sd.png" width={75} height={75} alt="sd" />
                  <p className="text-black">SD</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <img src="./smp.png" width={75} height={75} alt="smp" />
                  <p className="text-black">SMP</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <img src="./sma.png" width={75} height={75} alt="sma" />
                  <p className="text-black">SMA</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <img src="./sma.png" width={75} height={75} alt="smk" />
                  <p className="text-black">SMK</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <img src="./slb.png" width={75} height={75} alt="slb" />
                  <p className="text-black">SLB</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
}
