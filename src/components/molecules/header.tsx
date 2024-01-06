import { IonIcon, IonBackButton } from '@ionic/react';
import { chevronBackOutline } from 'ionicons/icons';
import { Link, useHistory } from 'react-router-dom';

interface HeaderProps {
  rightElement?: React.ReactNode;
  title: string;
}

export function Header({ rightElement, title }: HeaderProps) {
  const history = useHistory();

  const goBack = () => {
    if (history.length > 1) {
      history.goBack();
    } else {
      history.push('/');
    }
  };

  return (
    <div className="fixed left-0 top-0 flex h-[72px] w-full items-center rounded-b-xl bg-primary px-6 shadow-md">
      <button onClick={goBack} className="btn-icon btn-icon-light">
        <IonIcon className="h-6 w-6 text-white" icon={chevronBackOutline} />
      </button>
      <h1 className="ml-4 font-semibold text-white">{title}</h1>
      {rightElement && <div className="ml-auto">{rightElement}</div>}
    </div>
  );
}
