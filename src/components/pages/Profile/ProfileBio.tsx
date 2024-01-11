import { IonContent, IonHeader, IonPage, IonList, IonItem, IonTextarea, useIonToast } from '@ionic/react';
import { useForm } from 'react-hook-form';
import { Button } from '~/components/atoms';
import { Header } from '~/components/molecules';
import { BiografiSchema } from '~/schemas/biografi-schema';
import { api } from '~/utils/api';

export default function ProfileBio() {

  const { data } = api.user.getCurrentProfile.useQuery()
  const updateProfile = api.user.updateUserProfile.useMutation()
  const [toast] = useIonToast();

  const { register, reset, handleSubmit } = useForm<BiografiSchema>({
    defaultValues: {
      bio: data?.profile?.bio || undefined
    }
  })

  const onSubmit = async (data: BiografiSchema) => {
    try {
      await updateProfile.mutateAsync(data)
      toast({
        message: 'Berhasil memperbarui Profile Bio',
        duration: 3000,
      });

    } catch (error: any) {
      toast({
        message: error.message,
        duration: 3000,
      });
    }
  }

  return (
    <IonPage>
      <IonHeader>
        <Header title="Biografi" />
      </IonHeader>
      <IonContent fullscreen>
        <div className="mt-[72px] px-4">
          <IonList>
            <IonItem>
              <IonTextarea
                {...register("bio")}
                autoFocus
                labelPlacement="stacked"
                label="Biografi"
                placeholder="Masukkan deskripsi singkat tentang dirimu"
                rows={8}
              ></IonTextarea>
            </IonItem>
          </IonList>

          <div className="pb-6">
            <Button onClick={handleSubmit(onSubmit)} className="mt-6 w-full" color="primary" size="md">
              Simpan
            </Button>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
}
