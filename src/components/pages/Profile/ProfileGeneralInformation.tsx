import {
  IonPage,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonList,
  IonDatetimeButton,
  IonModal,
  IonDatetime,
  IonLabel,
  IonSelect,
  IonSelectOption,
  useIonToast,
  IonSpinner,
} from '@ionic/react';

import { Header } from '../../molecules';
import { Button } from '~/components/atoms';
import { api } from '~/utils/api';
import { useForm } from 'react-hook-form';
import {
  GENDER,
  ProfileGeneralInformationSchema,
  TEACHING_LEVEL,
  profileGeneralInformationResolver,
} from '~/schemas/profile-general-information-schema';
import { payloadValidation } from '~/utils/helpers';

export default function ProfileGeneralInformation() {
  const { data } = api.user.getCurrentProfile.useQuery();
  const updateProfile = api.user.updateProfileGeneralInformation.useMutation();
  const [toast] = useIonToast();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ProfileGeneralInformationSchema>({
    resolver: profileGeneralInformationResolver,
    defaultValues: {
      name: data?.name || undefined,
      nik: data?.profile?.nik || undefined,
      nip: data?.profile?.nip || undefined,
      birthdate: (data?.profile?.birthdate)?.toString() || undefined,
      gender: data?.profile?.gender as GENDER || undefined,
      contact: data?.profile?.contact || undefined,
      teaching_level: data?.profile?.teaching_level as TEACHING_LEVEL || undefined,
      unit_kerja: data?.profile?.unit_kerja || undefined,
      headmaster_name: data?.profile?.headmaster_name || undefined,
      headmaster_nip: data?.profile?.headmaster_nip || undefined,
      school_place: data?.profile?.school_place || undefined,
    }
  });

  const onSubmit = async (data: ProfileGeneralInformationSchema) => {
    console.info('before', data);
    try {
      const payload = payloadValidation(data)
      console.log('filtered',payload)
      await updateProfile.mutateAsync(data)
      toast({
        message: 'Berhasil memperbarui profil',
        duration: 3000,
      });
      console.info('after', data)
    
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
        <Header title="Profil Menu" />
      </IonHeader>

      <IonContent fullscreen>
        <div className="mt-[72px] px-4">
          <IonList>
            <IonItem className="py-1">
              <IonInput
                {...register('name')}
                label="Nama"
                placeholder="Isi nama lengkapmu"
                labelPlacement="stacked"
              ></IonInput>
            </IonItem>

            <IonItem className="py-1">
              <IonInput
                {...register("nik")}
                label="NIK"
                placeholder="Masukkan nomor NIK"
                labelPlacement="stacked"
              ></IonInput>
            </IonItem>

            <IonItem className="py-1">
              <IonInput
                {...register("nip")}
                label="NIP"
                placeholder="Masukkan nomor NIP"
                labelPlacement="stacked"
              ></IonInput>
            </IonItem>

            <IonItem className="py-1">
              <IonLabel>Tanggal Lahir</IonLabel>
              <input {...register("birthdate")}  type="date" placeholder="Masukkan tanggal lahir" />
              {/* <IonDatetimeButton  datetime="datetime" /> */}
            </IonItem>

            <IonItem className="py-1">
              <IonSelect
                {...register("gender")}
                label="Jenis Kelamin"
                labelPlacement="stacked"
                placeholder="Masukkan jenis kelamin"
              >
                <IonSelectOption value={GENDER.L}>Laki-laki</IonSelectOption>
                <IonSelectOption value={GENDER.P}>Perempuan</IonSelectOption>
              </IonSelect>
            </IonItem>

            <IonItem className="py-1">
              <IonInput
                {...register("contact")}
                label="No Hp"
                placeholder="Masukkan nomor hp"
                labelPlacement="stacked"
              ></IonInput>
            </IonItem>

            <IonItem className="py-1">
              <IonSelect
                {...register("teaching_level")}
                label="Jenjang Ajar"
                labelPlacement="stacked"
                placeholder="Masukkan jenjang ajar"
              >
                <IonSelectOption value={TEACHING_LEVEL.SD}>SD</IonSelectOption>
                <IonSelectOption value={TEACHING_LEVEL.SMP}>SMP</IonSelectOption>
                <IonSelectOption value={TEACHING_LEVEL.SMA}>SMA</IonSelectOption>
                <IonSelectOption value={TEACHING_LEVEL.D1}>D1</IonSelectOption>
                <IonSelectOption value={TEACHING_LEVEL.D2}>D2</IonSelectOption>
                <IonSelectOption value={TEACHING_LEVEL.D3}>D3</IonSelectOption>
                <IonSelectOption value={TEACHING_LEVEL.D4}>D4</IonSelectOption>
                <IonSelectOption value={TEACHING_LEVEL.S1}>S1</IonSelectOption>
                <IonSelectOption value={TEACHING_LEVEL.S2}>S2</IonSelectOption>
                <IonSelectOption value={TEACHING_LEVEL.S3}>S3</IonSelectOption>
              </IonSelect>
            </IonItem>

            <IonItem className="py-1">
              <IonInput
                {...register("unit_kerja")}
                label="Unit Kerja"
                placeholder="Masukkan unit kerja"
                labelPlacement="stacked"
              ></IonInput>
            </IonItem>

            <IonItem className="py-1">
              <IonInput
                {...register("headmaster_name")}
                label="Nama Kepala Sekolah"
                placeholder="Masukkan nama kepala sekolah"
                labelPlacement="stacked"
              ></IonInput>
            </IonItem>

            <IonItem className="py-1">
              <IonInput
                {...register("headmaster_nip")}
                label="NIP Kepala Sekolah"
                placeholder="Masukkan NIP kepala sekolah"
                labelPlacement="stacked"
              ></IonInput>
            </IonItem>

            <IonItem className="py-1">
              <IonInput
                {...register("school_place")}
                label="Tempat Tugas"
                placeholder="Masukkan tempat tugas"
                labelPlacement="stacked"
              ></IonInput>
            </IonItem>
          </IonList>

          <div className="pb-6">
            <Button
              onClick={handleSubmit(onSubmit)}
              className="mt-6 w-full"
              color="primary"
              size="md"
            >
              {isSubmitting ? <IonSpinner className='text-white h-4 w-4' name="circular"></IonSpinner>  : "Simpan"}
            </Button>
          </div>
        </div>

        <IonModal keepContentsMounted={true}>
          <IonDatetime id="datetime"></IonDatetime>
        </IonModal>
      </IonContent>
    </IonPage>
  );
}
