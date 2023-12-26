import { IonPage, IonContent } from '@ionic/react';
import { Link } from 'react-router-dom';
import { Button } from '~/components/atoms';

export default function Login() {
  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="relative flex min-h-screen items-center bg-primary md:justify-center">
          <div className="relative z-10 w-full rounded-xl bg-white p-6 md:w-[50%]">
            <div className="flex justify-center">
              <img width={80} alt="agpaii-logo" src="/assets/logo/agpaii.svg" />
            </div>

            <h1 className="mt-6 text-center text-4xl font-bold text-primary">Login</h1>

            <form className="mt-8 flex flex-col gap-5">
              <input
                type="email"
                className="rounded-lg bg-[#ECEAEB] px-5 py-3 outline-none"
                placeholder="Email"
              />
              <input
                type="password"
                className="rounded-lg bg-[#ECEAEB] px-5 py-3 outline-none"
                placeholder="Password"
              />

              <Button type="button" size="xl" color="primary">
                Login
              </Button>

              <span className="text-center text-[#898A8D]">
                Belum punya akun ?{' '}
                <Link to="/auth/register" className="text-primary hover:underline">
                  Daftar disini
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
