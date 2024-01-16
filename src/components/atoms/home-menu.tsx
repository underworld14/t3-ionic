import { Link } from 'react-router-dom';
import { IonRippleEffect } from '@ionic/react';
import classNames from 'classnames';

const icons = {
  'rumah-agpaii': '/assets/icons/rumah-agpaii.svg',
  'kta-digital': '/assets/icons/kta-digital.svg',
  'info-anggota': '/assets/icons/info-anggota.svg',
  'struktur-organisasi': '/assets/icons/struktur-organisasi.svg',
  alquran: '/assets/icons/alquran.svg',
  event: '/assets/icons/event.svg',
  'digital-module': '/assets/icons/digital-module.svg',
};

interface HomeMenuProps {
  icon: keyof typeof icons;
  title: string;
  className?: string;
  to: string;
}

export const HomeMenu = ({ icon, title, className, to }: HomeMenuProps) => {
  return (
    <Link
      to={to}
      className={classNames('flex flex-col items-center hover:cursor-pointer', className)}
    >
      <div className="ion-activatable ripple-parent flex h-[60px] w-[60px] items-center justify-center rounded-lg shadow-md">
        <IonRippleEffect />
        <img src={icons[icon]} alt={icon} />
      </div>
      <p className="mt-2 text-center text-[10px]">{title}</p>
    </Link>
  );
};
