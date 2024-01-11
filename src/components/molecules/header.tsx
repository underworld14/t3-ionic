import { IonIcon, IonBackButton } from '@ionic/react';
import { chevronBackOutline } from 'ionicons/icons';
import { Link, useHistory } from 'react-router-dom';
import cn from 'classnames';
interface HeaderProps {
  rightElement?: React.ReactNode;
  title: string;
  whiteHeader?: boolean;
  titleCenter?: boolean;
  shadow?: boolean;
}

export function Header({
  rightElement,
  title,
  whiteHeader = false,
  titleCenter = false,
  shadow = true
}: HeaderProps) {
  const history = useHistory();

  const goBack = () => {
    if (history.length > 1) {
      history.goBack();
    } else {
      history.push('/');
    }
  };

  return (
    <div
      className={cn(
        'fixed left-0 top-0 flex h-[72px] w-full items-center  px-6',
        whiteHeader ? 'rounded-none bg-white' : 'rounded-b-xl bg-primary', shadow && "shadow-md"
      )}
    >
      <button onClick={goBack} className="btn-icon btn-icon-light">
        <IonIcon
          className={cn('h-6 w-6', whiteHeader ? 'text-black' : 'text-white')}
          icon={chevronBackOutline}
        />
      </button>
      <h1
        className={cn(
          'ml-4 font-semibold ',
          whiteHeader ? 'text-black' : 'text-white',
          titleCenter && 'w-full text-center',
        )}
      >
        {title}
      </h1>
      {rightElement && <div className={'ml-auto'}>{rightElement}</div>}
    </div>
  );
}
