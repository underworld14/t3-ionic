import {
  IonContent,
  IonHeader,
  IonPage,
  IonIcon,
  IonList,
  IonItem,
  IonSelect,
  IonSelectOption,
  useIonToast,
  IonSpinner,
} from '@ionic/react';
import { card } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '~/components/atoms';

import { Header } from '~/components/molecules';
import {
  ProfilMemberCardSchema,
  profileMemberCardSchemaResolver,
} from '~/schemas/profile-member-card-schema';
import { api } from '~/utils/api';

export default function ProfileMemberCardNumber() {
  const [provinceId, setProvinceId] = useState(0);
  const [cityId, setCityId] = useState(0);
  const [toast] = useIonToast();

  const { data } = api.user.getCurrentProfile.useQuery();
  const cities = api.location.indexCity.useQuery({ province_id: provinceId && provinceId });
  const disticts = api.location.indexDistrict.useQuery({ city_id: cityId && cityId });
  const provinces = api.location.indexProvince.useQuery();

  const profileRegion = api.user.getCurrentProfile.useQuery();
  const updateProfileRegion = api.user.updateUserRegion.useMutation();

  const {
    register,
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<ProfilMemberCardSchema>({
    resolver: profileMemberCardSchemaResolver,
    defaultValues: {
      province_id: profileRegion.data?.profile?.province_id || undefined,
      city_id: profileRegion.data?.profile?.city_id || undefined,
      district_id: profileRegion.data?.profile?.district_id || undefined,
    },
  });

  useEffect(() => {
    if (profileRegion?.data?.profile) {
      setProvinceId(
        profileRegion.data?.profile?.province_id ? profileRegion.data?.profile?.province_id : 0,
      );
      setCityId(profileRegion.data?.profile?.city_id ? profileRegion.data?.profile?.city_id : 0);
    }
  }, []);

  const onSubmit = async (data: ProfilMemberCardSchema) => {
    try {
      console.log('before', data);
      await updateProfileRegion.mutateAsync(data);
      toast({
        message: 'Berhasil memperbarui Region Number',
        duration: 3000,
      });
      console.log('after', data);
    } catch (error) {
      toast({
        message: `${error}`,
        duration: 3000,
      });
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <Header title="Nomor Kartu Tanda Anggota" />
      </IonHeader>
      <IonContent fullscreen>
        <div className="mt-[72px] px-4 py-4">
          <div className="flex items-center rounded-md bg-primary px-6 py-4">
            <IonIcon className="size-8 text-white" icon={card} />
            <div className="ml-6 flex flex-col text-white">
              <div className="text-sm">Nomor Kartu Tanda Anggota</div>
              <div className="text-xl font-semibold">{data?.kta_id}</div>
            </div>
          </div>

          <IonList className="mt-6">
            <IonItem className="py-1">
              <IonSelect
                {...register('province_id')}
                label="Provinsi"
                placeholder="Pilih provinsi"
                labelPlacement="stacked"
                onIonChange={e => setProvinceId(e.detail.value)}
              >
                {provinces.data?.map(province => (
                  <IonSelectOption key={province.id} value={province.id}>
                    {province.name}
                  </IonSelectOption>
                ))}
              </IonSelect>
            </IonItem>

            <IonItem className="py-1">
              <IonSelect
                {...register('city_id')}
                label="Kota/Kab"
                placeholder="Pilih Kota/Kabupaten"
                labelPlacement="stacked"
                onIonChange={e => setCityId(e.detail.value)}
              >
                {cities.data?.map(city => (
                  <IonSelectOption key={city.id} value={city.id}>
                    {city.name}
                  </IonSelectOption>
                ))}
              </IonSelect>
            </IonItem>

            <IonItem className="py-1">
              <IonSelect
                {...register('district_id')}
                label="Kecamatan"
                placeholder="Pilih Kecamatan"
                labelPlacement="stacked"
              >
                {disticts.data?.map(ditrict => (
                  <IonSelectOption key={ditrict.id} value={ditrict.id}>
                    {ditrict.name}
                  </IonSelectOption>
                ))}
              </IonSelect>
            </IonItem>
          </IonList>

          <Button
            onClick={handleSubmit(onSubmit)}
            className="mt-6 w-full"
            color="primary"
            size="md"
          >
            {isSubmitting ? (
              <IonSpinner className="h-4 w-4 text-white" name="circular"></IonSpinner>
            ) : (
              'Simpan'
            )}
          </Button>
        </div>
      </IonContent>
    </IonPage>
  );
}
