import { IonContent, IonHeader, IonIcon, IonPage } from '@ionic/react';
import { checkmarkOutline } from 'ionicons/icons';
import ReactQuill from 'react-quill';
import { Button } from '~/components/atoms';
import { Header } from '~/components/molecules';

export default function CreateBagianRTE() {
  return (
    <IonPage>
      <IonHeader>
        <Header
        titleCenter={true}
          title="Bagian 1"
          rightElement={
            <Button>
              <IonIcon className="h-6 w-6" icon={checkmarkOutline} />
            </Button>
          }
        />
      </IonHeader>
      <IonContent>
        <div className='mt-[72px]'>
          <div className='mx-auto w-full max-w-screen-md'>

            <div className='p-3'>
            <ReactQuill className='h-[85vh]' theme="snow" />
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
}
