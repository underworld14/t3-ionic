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
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '~/components/atoms';

import { Header } from '~/components/molecules';
import { ProfileTeacherStatusSchema, STATUS_KEPEGAWAIAN, TEACHER_STATUS } from '~/schemas/profile-teacher-status-schema';
import { api } from '~/utils/api';

export default function ProfileTeacherStatus() {
  const { data } = api.user.getCurrentProfile.useQuery();
  const updateTeacherStatus = api.user.updateUserStatus.useMutation();
  const [toast] = useIonToast();

  const { register, reset, handleSubmit } = useForm<ProfileTeacherStatusSchema>({
    defaultValues: {
      // teacher_status: data?.profile?.teacher_status || undefined,
      // status_kepegawaian: data?.profile?.status_kepegawaian || undefined,
      // certified: data?.profile?.certified || undefined,
      // inpassing: data?.profile?.inpassing || undefined,
      // salary: data?.profile?.salary || undefined,
    },
  });

  const onSubmit = async (data: ProfileTeacherStatusSchema) => {
    try {
      
      const salary = data.salary ? +data.salary : 0
      const payload = {salary, ...data}
      await updateTeacherStatus.mutateAsync(payload);
      toast({
        message: 'Berhasil memperbarui status',
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
                <IonSelectOption value={TEACHER_STATUS.ASN}>ASN</IonSelectOption>
                <IonSelectOption value={TEACHER_STATUS.PPK}>PPK</IonSelectOption>
                <IonSelectOption value={TEACHER_STATUS.NON_ASN}>Non ASN</IonSelectOption>
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
                {...register("status_kepegawaian")}
                label="Status Kepegawaian"
                placeholder="Pilih status kepegawaian anda"
                labelPlacement="stacked"
              >
                <IonSelectOption value={STATUS_KEPEGAWAIAN.PNS_PEMDA}>PNS Pemda</IonSelectOption>
                <IonSelectOption value={STATUS_KEPEGAWAIAN.PNS_KEMENAG}>⁠PNS Kemenag</IonSelectOption>
                <IonSelectOption value={STATUS_KEPEGAWAIAN.PPPK_PEMDA}>PPPK Pemda</IonSelectOption>
                <IonSelectOption value={STATUS_KEPEGAWAIAN.PPPK_KEMENAG}>⁠PPPK Kemenag</IonSelectOption>
                <IonSelectOption value={STATUS_KEPEGAWAIAN.GTY}>Guru Tetap Yayasan</IonSelectOption>
                <IonSelectOption value={STATUS_KEPEGAWAIAN.HONOR_YAYASAN}>⁠Honor Yayasan</IonSelectOption>
                <IonSelectOption value={STATUS_KEPEGAWAIAN.HONOR_MURNI_SEKOLAH}>Honor Murni Sekolah</IonSelectOption>
                <IonSelectOption value={STATUS_KEPEGAWAIAN.HONOR_DAERAH}>Honor Daerah</IonSelectOption>
              </IonSelect>
            </IonItem>

            <IonItem className="py-1">
              <IonSelect {...register("certified")} label="Apakah Sudah Sertifikasi?" labelPlacement="stacked">
                <IonSelectOption value={true}>sudah</IonSelectOption>
                <IonSelectOption value={false}>belum</IonSelectOption>
              </IonSelect>
            </IonItem>

            <IonItem className="py-1">
              <IonSelect {...register("inpassing")} label="Apakah Sudah Inpassing?" labelPlacement="stacked">
                <IonSelectOption value={true}>sudah</IonSelectOption>
                <IonSelectOption value={false}>belum</IonSelectOption>
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
