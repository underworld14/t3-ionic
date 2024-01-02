import { IonPage, IonContent, useIonToast } from '@ionic/react';
import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';

import { Button } from '~/components/atoms';
import { LoginSchema, loginSchemaResolver } from '~/schemas/login-schema';
import { useAuthStore } from '~/store/auth-store';
import { api, setToken } from '~/utils/api';

export default function Login() {
  const history = useHistory();
  const [toast] = useIonToast();
  const { setAuth } = useAuthStore();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: loginSchemaResolver,
  });

  const loginMutation = api.auth.login.useMutation({
    onSuccess: opts => {
      setToken(opts.token);
      setAuth({
        token: opts.token,
        user: opts.data,
      });
    },
  });

  const onSubmit = async (payload: LoginSchema) => {
    try {
      await loginMutation.mutateAsync(payload);
      toast({
        message: 'Login berhasil',
        duration: 3000,
      });
      history.replace('/');
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
        <div className="relative flex min-h-screen items-center bg-primary md:justify-center">
          <div className="relative z-10 w-full rounded-xl bg-white p-6 md:w-[50%]">
            <div className="flex justify-center">
              <img width={80} alt="agpaii-logo" src="/assets/logo/agpaii.svg" />
            </div>

            <h1 className="mt-6 text-center text-4xl font-bold text-primary">Login</h1>

            <form className="mt-8 flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
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
              <Button type="submit" size="xl" color="primary">
                Login
              </Button>
              <div className="text-center text-[#898A8D]">
                Belum punya akun ?{' '}
                <Link to="/auth/register" className="text-primary hover:underline">
                  Daftar disini
                </Link>
              </div>
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
