import { IonPage, IonContent, IonRippleEffect } from '@ionic/react';
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';
import { Button } from '~/components/atoms';

export default function UserCheck() {
  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="grid grid-cols-2">
          <div className="relative flex min-h-screen flex-col items-center justify-center bg-primary text-center">
            <div className="w-[80%]">
              <div className="flex justify-center">
                <img width={80} alt="agpaii-logo" src="/assets/logo/agpaii-white.svg" />
              </div>

              <h1 className="mt-12 text-4xl font-bold text-white">Periksa Pengguna</h1>
              <h3 className="mt-3 text-lg text-white">
                Periksa terlebih dahulu apakah Anda sudah terdaftar atau belum di AGPAII Digital
              </h3>

              <div className="mt-16">
                <div className="flex w-full rounded-lg bg-white">
                  <div className="rounded-lg bg-[#D9D9D9]">
                    <select className="rounded-lg bg-[#D9D9D9] px-5 py-3 outline-none">
                      <option value="email">Email</option>
                      <option value="name">Nama</option>
                      <option value="hp">No HP</option>
                    </select>
                  </div>
                  <input
                    required
                    name="identifier"
                    className="w-full rounded-lg px-5 py-3 outline-none"
                    placeholder="Masukkan alamat email"
                  />
                </div>
              </div>

              <Button type="button" size="xl" color="secondary" className="mt-6 w-full">
                Login
              </Button>

              <div className="mt-8">
                <p className="text-sm text-white">Ingin melewati proses ini ?</p>
                <span className="text-white">
                  <Link to="/auth/login" className="hover:underline">
                    Login
                  </Link>{' '}
                  |{' '}
                  <Link to="/auth/register" className="hover:underline">
                    Daftar
                  </Link>
                </span>
              </div>
            </div>
            <img
              alt="Mosque"
              src="/assets/illustration/mosque.svg"
              className="absolute bottom-0 left-0 w-full"
            />
          </div>
          <div className="flex min-h-screen flex-col bg-white px-12 py-8">
            <h2 className="text-3xl font-bold text-primary">Hasil Pencarian</h2>
            <p className="text-[#898A8D]">20 Pengguna ditemukan</p>

            <div className="mt-6 flex flex-col">
              {Array.from(Array(10).keys()).map((_, i) => (
                <div key={i} className="flex items-center border-b border-[#E0E0E0] py-3">
                  <img
                    className="h-12 w-12 rounded-full"
                    src={`https://i.pravatar.cc/150?img=${i}`}
                    alt="avatar"
                  />
                  <div className="ml-5 flex flex-col">
                    <h3 className="text-lg font-semibold">Abdul Jamil, S.Pd.I</h3>
                    <p className="text-sm text-[#898A8D]">abduljamil@gmail.com</p>
                  </div>
                </div>
              ))}
            </div>

            <ReactPaginate
              className="mt-8 flex w-full items-center justify-center gap-2"
              pageClassName="w-9 h-9 flex justify-center items-center hover:bg-[#F2F2F2] hover:cursor-pointer rounded-full"
              activeClassName="bg-primary text-white"
              breakLabel="..."
              nextLabel=">"
              onPageChange={() => console.log('page changed')}
              pageRangeDisplayed={5}
              pageCount={10}
              previousLabel="<"
              renderOnZeroPageCount={null}
            />
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
}
