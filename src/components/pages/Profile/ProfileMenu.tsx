import {
  IonPage,
  IonContent,
  IonHeader,
  IonIcon,
  IonRippleEffect,
  IonCheckbox,
} from '@ionic/react';
import { personOutline, menu, key, card, school } from 'ionicons/icons';
import { Header } from '../../molecules';
import { Link } from 'react-router-dom';

const menus = [
  {
    title: 'Informasi Umum',
    icon: personOutline,
    to: '/profile/menu/general-information',
  },
  {
    title: 'Biografi',
    icon: menu,
    to: '/profile/menu/bio',
  },
  {
    title: 'Nomor Kartu Tanda Anggota',
    icon: card,
    to: '/profile/menu/member-card-number',
  },
  {
    title: 'Status Guru',
    icon: school,
    to: '/profile/menu/teacher-status',
  },
  {
    title: 'Ubah Password',
    icon: key,
    to: '/profile/menu/update-password',
  },
];

export default function ProfileMenu() {
  return (
    <IonPage>
      <IonHeader>
        <Header title="Profil Menu" />
      </IonHeader>

      <IonContent fullscreen>
        <div className="mt-[72px] flex flex-col">
          {menus.map((menu, i) => (
            <Link
              to={menu.to}
              key={i}
              className="ion-activatable ripple-parent flex items-center justify-between border-b border-neutral-300 px-6 py-5 hover:bg-neutral-100"
            >
              <IonRippleEffect />
              <div className="flex items-center">
                <div className="flex size-9 items-center justify-center rounded-lg bg-primary">
                  <IonIcon className="size-4 text-white" icon={menu.icon} />
                </div>
                <div className="ml-6 text-sm font-medium">{menu.title}</div>
              </div>

              {/* <IonCheckbox className="size-4" /> */}
            </Link>
          ))}
        </div>
      </IonContent>
    </IonPage>
  );
}
