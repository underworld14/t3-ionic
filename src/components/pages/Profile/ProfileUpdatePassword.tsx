import {
  IonContent,
  IonHeader,
  IonPage,
  IonList,
  IonItem,
  IonInput,
  useIonToast,
  IonSpinner,
} from '@ionic/react';
import cn from 'classnames';
import { useForm } from 'react-hook-form';
import { Button } from '~/components/atoms';

import { Header } from '~/components/molecules';
import { UpdatePasswordSchema } from '~/schemas/update-password-schema';
import { api } from '~/utils/api';

export default function ProfileUpdatePassword() {
  const [toast] = useIonToast();

  const updatePassword = api.auth.updatePassword.useMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitted, isSubmitting },
  } = useForm<UpdatePasswordSchema>();

  const onSubmit = async (data: UpdatePasswordSchema) => {
    try {
      await updatePassword.mutateAsync(data);
      toast({
        message: 'Password was updated successfully',
        duration: 3000,
      });
    } catch (error: any) {
      toast({
        message: error.message,
        duration: 3000,
      });
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <Header title="Ubah Password" />
      </IonHeader>
      <IonContent fullscreen>
        <div className="mt-[72px] px-4 py-4">
          <IonList>
            <IonItem className="py-1">
              <IonInput
                {...register('current_password')}
                type="password"
                label="Password Lama"
                placeholder="Masukkan password lama"
                labelPlacement="stacked"
              ></IonInput>
            </IonItem>

            <IonItem className="py-1">
              <IonInput
                {...register('password')}
                type="password"
                label="Password Baru"
                placeholder="Masukkan password baru"
                labelPlacement="stacked"
              ></IonInput>
            </IonItem>

            <IonItem className="py-1">
              <IonInput
                {...register('password_confirmation')}
                type="password"
                label="Konfirmasi Password Baru"
                placeholder="Masukkan konfirmasi password baru"
                labelPlacement="stacked"
              ></IonInput>
            </IonItem>
          </IonList>

          <Button
            onClick={handleSubmit(onSubmit)}
            className={cn('mt-6 w-full')}
            color="primary"
            size="md"
            disabled={isSubmitting}
          >
            {isSubmitting ? <IonSpinner className='text-white h-4 w-4' name="circular"></IonSpinner>  : "Simpan"}
            
          </Button>
        </div>
      </IonContent>
    </IonPage>
  );
}
