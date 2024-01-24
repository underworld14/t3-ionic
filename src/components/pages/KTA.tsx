import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { Capacitor } from '@capacitor/core';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { IonContent, IonHeader, IonPage, IonIcon, IonAlert } from '@ionic/react';
import { download, reloadCircle, wallet } from 'ionicons/icons';
import { useToJpeg } from '@hugocxl/react-to-image';
import { Header } from '~/components/molecules';
import { Button } from '~/components/atoms';
import { api } from '~/utils/api';

export default function KTA() {
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);
  const { data: user, refetch, isLoading } = api.user.getCurrentProfile.useQuery();
  const [state, convertToJpg, ref] = useToJpeg<HTMLDivElement>({
    onSuccess: data => {
      if (Capacitor.getPlatform() !== 'web') {
        Filesystem.writeFile({
          path: `${user?.name}-${user?.kta_id}.jpg`,
          data,
          directory: Directory.Documents,
        });
      } else {
        const link = document.createElement('a');
        link.href = data;
        link.download = `${user?.name}-${user?.kta_id}.jpg`; // or whatever file extension you want
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    },
  });

  useEffect(() => {
    if (user?.activated_at && !user?.kta_id) {
      setIsOpen(true);
    }
  }, [user]);

  return (
    <IonPage>
      <IonHeader>
        <Header title="Kartu Tanda Anggota" />
      </IonHeader>
      <IonContent>
        <div className="mt-[72px] flex flex-col items-center px-4 py-3">
          <div ref={ref} className="mx-auto h-[695px] w-full max-w-md bg-slate-300 py-10">
            <div className="text-center">
              <div className="text-sm font-semibold">KARTU TANDA ANGGOTA</div>
              <div className="mt-1 text-xs">ASOSIASI GURU PENDIDIKAN</div>
              <div className="text-xs">AGAMA ISLAM INDONESIA</div>
            </div>

            <div className="mt-10 text-center">
              <div className="text-sm">{user?.name}</div>
              <div className="text-xs">{user?.email}</div>
              <div className="text-xs">{user?.kta_id}</div>
            </div>
          </div>
          <div className="mx-auto mt-4 flex w-full max-w-md gap-3">
            <Button size="xs" onClick={convertToJpg} loading={state.isLoading}>
              <IonIcon icon={download} className="size-6" />
            </Button>
            <Button size="xs" onClick={() => refetch()} loading={isLoading}>
              <IonIcon icon={reloadCircle} className="size-6" />
            </Button>
            <Button fullWidth>
              <IonIcon icon={wallet} className="mr-2 size-5" />
              Iuran
            </Button>
          </div>
        </div>
      </IonContent>
      <IonAlert
        isOpen={isOpen}
        header="Nomor KTA belum dibuat"
        message="Silahkan membuat nomor KTA pada halaman profil terlebih dahulu."
        buttons={['Ok']}
        onDidDismiss={() => {
          history.push('/profile/menu/member-card-number');
        }}
      ></IonAlert>
    </IonPage>
  );
}
