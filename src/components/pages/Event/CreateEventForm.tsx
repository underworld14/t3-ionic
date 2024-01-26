import {
  IonContent,
  IonDatetime,
  IonDatetimeButton,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonList,
  IonModal,
  IonPage,
  IonSelect,
  IonSelectOption,
  IonSpinner,
  IonTextarea,
  useIonToast,
} from '@ionic/react';
import { add, addCircleSharp, analytics, image, pencil } from 'ionicons/icons';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '~/components/atoms';
import { Header } from '~/components/molecules';
import { CreateEventSchema } from '~/schemas/event/create-event-schema';
import { api } from '~/utils/api';
import { converImageToBase64, payloadValidation } from '~/utils/helpers';

export default function CreateEventForm() {
  const [toast] = useIonToast();
  const [provinceId, setProvinceId] = useState(0);
  const [inputFields, setInputFields] = useState([{ session: 'Sesi', description: '' }]);

  const provinces = api.location.indexProvince.useQuery();
  const cities = api.location.indexCity.useQuery({ province_id: provinceId });
  const eventCategories = api.eventCategory.indexEventCategory.useQuery();

  const createEvent = api.event.createEvent.useMutation();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<CreateEventSchema>();

  async function onSubmit(data: CreateEventSchema) {
    try {
      const fileReader = new FileReader();
      console.log('masuk', data?.image[0]?.size);
      console.log('masuk', fileReader.readAsArrayBuffer(data?.image[0]));
      if (data?.image && data?.image.length > 0) {
        console.log('image', converImageToBase64(data?.image[0]));
      }
      // await createEvent.mutateAsync(payloadValidation({image: data?.image ? data?.image[0] : null, ...data}))
      // toast({
      //   message: 'Berhasil membuat acara',
      //   duration: 3000,
      // });
    } catch (error: any) {
      toast({
        message: error.message,
        duration: 3000,
      });
    }
  }

  const addSession = () => {
    let newfield = { session: 'Sesi', description: '' };

    setInputFields([...inputFields, newfield]);
  };

  return (
    <IonPage>
      <IonHeader>
        <Header title="Buat Acara" whiteHeader={true} />
      </IonHeader>
      <IonContent>
        <div className="mt-[75px] px-4">
          <div className="mx-auto w-full max-w-screen-md">
            <form className="mt-10 space-y-5">
              <div className="flex items-center gap-3">
                <div className="rounded-md p-2 shadow-md">
                  <img alt="image-icon" src="/image-icon.svg" width={50} height={50} />
                </div>
                <input
                  {...register('image')}
                  className="ml-2"
                  placeholder="Tambah Banner"
                  type="file"
                  id="fileUpload"
                  style={{ display: 'none' }}
                />
                <label style={{ cursor: 'pointer' }} htmlFor="fileUpload">
                  Select File....
                </label>
              </div>

              <div className="flex items-center gap-3">
                <div className="rounded-md p-2 shadow-md">
                  <img alt="pencil" src="/pencil.svg" width={50} height={50} />
                </div>
                <IonInput
                  {...register('title')}
                  className="ml-2 h-12.5 shadow-md"
                  placeholder="Masukkan Nama"
                ></IonInput>
              </div>

              <div className="flex w-full items-center gap-3">
                <div className="rounded-md p-2 shadow-md">
                  <img alt="pencil" src="/kategori.svg" width={50} height={50} />
                </div>
                <IonSelect
                  {...register('category_id')}
                  className="w-full shadow-md"
                  placeholder="Kategori Acara"
                >
                  {eventCategories.data?.map(eventCategory => (
                    <IonSelectOption key={eventCategory?.id} value={eventCategory.id}>
                      {eventCategory.category}
                    </IonSelectOption>
                  ))}
                </IonSelect>
              </div>

              <div className="flex items-center gap-3">
                <div className="rounded-md p-2 shadow-md">
                  <img alt="pencil" src="/description.svg" width={50} height={50} />
                </div>
                <IonTextarea
                  {...register('description')}
                  rows={3}
                  className="ml-2 h-12.5 shadow-md"
                  placeholder="Masukkan Deskripsi"
                ></IonTextarea>
              </div>

              <div className="flex items-center gap-3">
                <div className="rounded-md p-2 shadow-md">
                  <img alt="pencil" src="/map.svg" width={50} height={50} />
                </div>
                <IonInput
                  {...register('place')}
                  className="ml-2 h-12.5 shadow-md"
                  placeholder="Masukkan Tempat"
                ></IonInput>
              </div>

              <div className="flex items-center gap-3">
                <div className="rounded-md p-2 shadow-md">
                  <img alt="pencil" src="/map.svg" width={50} height={50} />
                </div>
                <div className="ml-2 flex gap-2">
                  <IonSelect
                    {...register('province_id')}
                    label="Provinsi"
                    className="h-12.5 w-1/2 shadow-md"
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
                  <IonSelect
                    {...register('city_id')}
                    className="h-12.5 w-1/2 shadow-md"
                    label="Kota/Kab"
                    placeholder="Pilih Kota/Kabupaten"
                    labelPlacement="stacked"
                  >
                    {cities.data?.map(city => (
                      <IonSelectOption key={city.id} value={city.id}>
                        {city.name}
                      </IonSelectOption>
                    ))}
                  </IonSelect>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="rounded-md p-2 shadow-md">
                  <img alt="pencil" src="/calendar.svg" width={50} height={50} />
                </div>
                <div className="ml-2 flex gap-2">
                  <div className=" h-12.5 w-1/2 shadow-md">
                    <IonDatetimeButton
                      {...register('start_time')}
                      datetime="starttime"
                    ></IonDatetimeButton>
                    <IonModal keepContentsMounted={true}>
                      <IonDatetime id="starttime"></IonDatetime>
                    </IonModal>
                  </div>
                  <div className=" h-12.5 w-1/2 shadow-md">
                    <IonDatetimeButton
                      {...register('end_time')}
                      datetime="endtime"
                    ></IonDatetimeButton>
                    <IonModal keepContentsMounted={true}>
                      <IonDatetime id="endtime"></IonDatetime>
                    </IonModal>
                  </div>
                  {/* <IonInput
                  {...register('end_time')}
                  className="h-12.5 w-1/2 shadow-md"
                  placeholder="Waktu Selesai"
                ></IonInput> */}
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="rounded-md p-2 shadow-md">
                  <img alt="pencil" src="/description.svg" width={50} height={50} />
                </div>
                <IonTextarea
                  {...register('facilities')}
                  rows={3}
                  className="ml-2 h-12.5 shadow-md"
                  placeholder="Fasilitas"
                ></IonTextarea>
              </div>

              <div className="flex items-start">
                <div className="rounded-md p-2 shadow-md">
                  <img alt="pencil" src="/sesi.svg" width={50} height={50} />
                </div>
                <div className="ml-2 flex flex-col space-y-1 ">
                  {inputFields.map((input, index) => (
                    <div key={index} className="flex ">
                      <input
                        // {...register('sessions')}
                        className="h-12.5 w-1/5 shadow-md"
                        defaultValue={` ${input?.session} ${index + 1} `}
                      ></input>
                      <input
                        // {...register('sessions')}
                        key={index}
                        className="h-12.5 w-4/6 shadow-md"
                        placeholder="Description"
                      ></input>
                    </div>
                  ))}
                  {/* <input className="h-12.5 w-5/6 shadow-md" placeholder="Sesi 1" value={" Sesi 1 "}></input> */}
                </div>
                <Button
                  onClick={e => (e.preventDefault(), addSession())}
                  className=" flex items-center justify-center bg-primary"
                >
                  <IonIcon className="h-6 w-6 text-white " icon={add} />
                </Button>
              </div>

              <div className="justiy-center flex w-full  items-center">
                <Button
                  onClick={handleSubmit(onSubmit)}
                  className="mx-auto w-full bg-primary px-5 py-2"
                >
                  {isSubmitting ? (
                    <IonSpinner className="h-4 w-4 text-white" name="circular"></IonSpinner>
                  ) : (
                    'Simpan'
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
}
