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
import { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Button } from '~/components/atoms';

import { Header } from '~/components/molecules';
import {
  ProfilMemberCardSchema,
  profileMemberCardSchemaResolver,
} from '~/schemas/profile-member-card-schema';
import { api } from '~/utils/api';

export default function ProfileMemberCardNumber() {
  const [toast] = useIonToast();

  const { data: user, refetch: refetchProfile } = api.user.getCurrentProfile.useQuery();
  const provinces = api.location.indexProvince.useQuery();

  const {
    control,
    reset,
    handleSubmit,
    watch,
    formState: { isSubmitting },
  } = useForm<ProfilMemberCardSchema>({
    resolver: profileMemberCardSchemaResolver,
  });

  const provinceId = watch('province_id');
  const cityId = watch('city_id');

  const cities = api.location.indexCity.useQuery(
    { province_id: provinceId },
    { enabled: !!provinceId },
  );
  const disticts = api.location.indexDistrict.useQuery({ city_id: cityId }, { enabled: !!cityId });

  const updateProfileRegion = api.user.updateUserKTA.useMutation({
    onSuccess: () => {
      refetchProfile();
      toast({
        message: 'Berhasil memperbarui Nomor Kartu Tanda Anggota',
        duration: 3000,
      });
    },
    onError: error => {
      toast({
        message: `${error}`,
        duration: 3000,
      });
    },
  });

  useEffect(() => {
    if (user?.profile) {
      reset({
        province_id: user.profile.province_id || undefined,
        city_id: user.profile.city_id || undefined,
        district_id: user.profile.district_id || undefined,
      });
    }
  }, [user, reset]);

  const onSubmit = (data: ProfilMemberCardSchema) => {
    updateProfileRegion.mutate(data);
  };

  return (
    <IonPage>
      <IonHeader>
        <Header title="Nomor Kartu Tanda Anggota" />
      </IonHeader>
      <IonContent fullscreen>
        <div className="mt-[72px] px-4 py-4">
          <div className="mx-auto w-full max-w-screen-md">
            <div className="flex items-center rounded-md bg-primary px-6 py-4">
              <IonIcon className="size-8 text-white" icon={card} />
              <div className="ml-6 flex flex-col text-white">
                <div className="text-sm">Nomor Kartu Tanda Anggota</div>
                <div className="text-xl font-semibold">{user?.kta_id || '-'}</div>
              </div>
            </div>

            <IonList className="mt-6">
              <IonItem className="py-1">
                <Controller
                  control={control}
                  name="province_id"
                  render={({ field: { onChange, value } }) => (
                    <IonSelect
                      label="Provinsi"
                      placeholder="Pilih provinsi"
                      labelPlacement="stacked"
                      value={value}
                      onIonChange={onChange}
                    >
                      {provinces.data?.map(province => (
                        <IonSelectOption key={province.id} value={province.id}>
                          {province.name}
                        </IonSelectOption>
                      ))}
                    </IonSelect>
                  )}
                />
              </IonItem>

              <IonItem className="py-1">
                <Controller
                  control={control}
                  name="city_id"
                  render={({ field: { onChange, value } }) => (
                    <IonSelect
                      label="Kota"
                      placeholder="Pilih Kota"
                      labelPlacement="stacked"
                      value={value}
                      onIonChange={onChange}
                    >
                      {cities.data?.map(city => (
                        <IonSelectOption key={city.id} value={city.id}>
                          {city.name}
                        </IonSelectOption>
                      ))}
                    </IonSelect>
                  )}
                />
              </IonItem>

              <IonItem className="py-1">
                <Controller
                  control={control}
                  name="district_id"
                  render={({ field: { onChange, value } }) => (
                    <IonSelect
                      label="Kecamatan"
                      placeholder="Pilih Kecamatan"
                      labelPlacement="stacked"
                      value={value}
                      onIonChange={onChange}
                    >
                      {disticts.data?.map(district => (
                        <IonSelectOption key={district.id} value={district.id}>
                          {district.name}
                        </IonSelectOption>
                      ))}
                    </IonSelect>
                  )}
                />
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
        </div>
      </IonContent>
    </IonPage>
  );
}
