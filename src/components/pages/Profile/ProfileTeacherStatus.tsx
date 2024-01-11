import {
  IonContent,
  IonHeader,
  IonPage,
  IonList,
  IonItem,
  IonSelect,
  IonSelectOption,
  IonInput,
  useIonToast,
} from '@ionic/react';
import { useForm } from 'react-hook-form';
import { Button } from '~/components/atoms';

import { Header } from '~/components/molecules';
import { ProfileTeacherStatusSchema } from '~/schemas/profile-teacher-status-schema';
import { api } from '~/utils/api';

export default function ProfileTeacherStatus() {
  const teacherStatus = api.user.getCurrentProfile.useQuery();
  const updateTeacherStatus = api.user.updateUserProfile.useMutation();
  const [toast] = useIonToast();

  const { register, reset, handleSubmit } = useForm<ProfileTeacherStatusSchema>({
    defaultValues: {
      teacher_status: teacherStatus.data?.profile?.teacher_status || undefined,
      salary: teacherStatus.data?.profile?.salary || undefined,
    },
  });

  const onSubmit = async (data: ProfileTeacherStatusSchema) => {
    try {
      console.log('before', data);

      await updateTeacherStatus.mutateAsync({
        teacher_status: data?.teacher_status,
        salary: data?.salary ? +data.salary : undefined,
      });
      toast({
        message: 'Berhasil memperbarui status',
        duration: 3000,
      });
      console.info('after', data);
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
        <Header title="Status Guru" />
      </IonHeader>
      <IonContent fullscreen>
        <div className="mt-[72px] px-4 py-4">
          <IonList>
            <IonItem className="py-1">
              <IonSelect
                {...register('teacher_status')}
                label="Status Guru"
                placeholder="Pilih status guru"
                labelPlacement="stacked"
              >
                <IonSelectOption value="ASN">ASN</IonSelectOption>
                <IonSelectOption value="PPK">PPK</IonSelectOption>
                <IonSelectOption value="NON_ASN">Non ASN</IonSelectOption>
              </IonSelect>
            </IonItem>

            <IonItem className="py-1">
              <IonInput
                {...register('salary')}
                label="Gaji Pokok"
                placeholder="Masukkan besaran gaji"
                labelPlacement="stacked"
              ></IonInput>
            </IonItem>

            <IonItem className="py-1">
              <IonSelect
                label="Status Kepegawaian"
                placeholder="Pilih status kepegawaian anda"
                labelPlacement="stacked"
              >
                <IonSelectOption value="PNS_PEMDA">PNS Pemda</IonSelectOption>
                <IonSelectOption value="⁠PNS_KEMENAG">⁠PNS Kemenag</IonSelectOption>
                <IonSelectOption value="PPPK_PEMDA">PPPK Pemda</IonSelectOption>
                <IonSelectOption value="⁠PPPK_KEMENAG">⁠PPPK Kemenag</IonSelectOption>
                <IonSelectOption value="GTY">Guru Tetap Yayasan</IonSelectOption>
                <IonSelectOption value="HY">⁠Honor Yayasan</IonSelectOption>
                <IonSelectOption value="HMS">Honor Murni Sekolah</IonSelectOption>
              </IonSelect>
            </IonItem>

            <IonItem className="py-1">
              <IonSelect label="Apakah Sudah Sertifikasi?" labelPlacement="stacked">
                <IonSelectOption value={1}>sudah</IonSelectOption>
                <IonSelectOption value={0}>belum</IonSelectOption>
              </IonSelect>
            </IonItem>

            <IonItem className="py-1">
              <IonSelect label="Apakah Sudah Inpassing?" labelPlacement="stacked">
                <IonSelectOption value={1}>sudah</IonSelectOption>
                <IonSelectOption value={0}>belum</IonSelectOption>
              </IonSelect>
            </IonItem>

            <IonItem className="py-1">
              <IonInput
                {...register('salary')}
                label="Rekening BSI (Bank Syariah Indonesia)"
                placeholder="Masukkan rekening BSI andnpm"
                labelPlacement="stacked"
              ></IonInput>
            </IonItem>
          </IonList>

          <Button
            onClick={handleSubmit(onSubmit)}
            className="mt-6 w-full"
            color="primary"
            size="md"
          >
            Simpan
          </Button>
        </div>
      </IonContent>
    </IonPage>
  );
}
