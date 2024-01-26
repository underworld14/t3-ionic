import { IonPage, IonContent, useIonToast } from '@ionic/react';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { Button } from '~/components/atoms';
import { api } from '~/utils/api';
import { RegisterSchema, registerSchemaResolver } from '~/schemas/register-schema';

export default function Register() {
  const history = useHistory();
  const { data } = api.position.index.useQuery();
  const mutation = api.auth.register.useMutation();
  const [toast] = useIonToast();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegisterSchema>({
    resolver: registerSchemaResolver,
  });

  const onSubmit = async (payload: RegisterSchema) => {
    try {
      const res = await mutation.mutateAsync(payload);
      reset();
      toast({
        message: res.message,
        duration: 3000,
      });
      history.push('/auth/login');
    } catch (error: any) {
      toast({
        message: error.message,
        duration: 3000,
      });
    }
  };

  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="relative flex min-h-screen items-center bg-primary lg:justify-center">
          <div className="relative z-10 w-full rounded-xl bg-white p-6 lg:w-[50%]">
            <div className="flex justify-center">
              <img width={80} alt="agpaii-logo" src="/assets/logo/agpaii.svg" />
            </div>

            <h1 className="mt-6 text-center text-4xl font-bold text-primary">Daftar</h1>

            <form className="mt-8 flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <input
                  {...register('name')}
                  className="rounded-lg bg-[#ECEAEB] px-5 py-3 outline-none"
                  placeholder="Nama Lengkap"
                />
                {errors.name && <span className="error">{errors.name.message}</span>}
              </div>

              <div className="form-group">
                <input
                  {...register('email')}
                  type="email"
                  className="rounded-lg bg-[#ECEAEB] px-5 py-3 outline-none"
                  placeholder="Email"
                />
                {errors.email && <span className="error">{errors.email.message}</span>}
              </div>

              <div className="form-group">
                <input
                  {...register('password')}
                  type="password"
                  className="rounded-lg bg-[#ECEAEB] px-5 py-3 outline-none"
                  placeholder="Password"
                />
                {errors.password && <span className="error">{errors.password.message}</span>}
              </div>

              <div className="form-group">
                <input
                  {...register('password_confirmation')}
                  type="password"
                  className="rounded-lg bg-[#ECEAEB] px-5 py-3 outline-none"
                  placeholder="Ulangi password"
                />
                {errors.password_confirmation && (
                  <span className="error">{errors.password_confirmation.message}</span>
                )}
              </div>

              <div className="form-group">
                <select
                  {...register('position_id')}
                  defaultValue=""
                  className="rounded-lg bg-[#ECEAEB] px-5 py-3 outline-none"
                >
                  <option value="" disabled hidden>
                    Daftar Sebagai
                  </option>
                  {data?.map(position => (
                    <option key={position.id} value={position.id}>
                      {position.name}
                    </option>
                  ))}
                </select>
                {errors.position_id && <span className="error">{errors.position_id.message}</span>}
              </div>

              <Button type="submit" size="xl" color="primary">
                Daftar
              </Button>

              <span className="text-center text-[#898A8D]">
                Sudah punya akun ?{' '}
                <Link to="/auth/login" className="text-primary hover:underline">
                  Masuk Disini
                </Link>
              </span>
            </form>
          </div>

          <img
            alt="Mosque"
            src="/assets/illustration/mosque-big.svg"
            className="absolute bottom-0 left-0 w-full"
          />
        </div>
      </IonContent>
    </IonPage>
  );
}
