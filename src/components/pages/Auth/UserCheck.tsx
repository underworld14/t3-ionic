import { useState } from 'react';
import { IonPage, IonContent } from '@ionic/react';
import { Link } from 'react-router-dom';
import { Button } from '~/components/atoms';
import { api } from '~/utils/api';
import { UserSearchList, Pagination } from '~/components/molecules';

export default function UserCheck() {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(0);
  const [type, setType] = useState<'email' | 'name'>('name');
  const { data, mutate, isLoading } = api.user.search.useMutation();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setPage(0);
    e.preventDefault();
    mutate({ [type]: search, page: page + 1 });
  };

  const handlePageChange = (selectedPage: number) => {
    setPage(selectedPage);
    mutate({ [type]: search, page: selectedPage + 1 });
  };

  const renderSearchResult = () => {
    if (!data?.data.length) {
      return (
        <div className="flex h-full flex-col items-center justify-center">
          <img
            alt="avatar"
            src="https://ionicframework.com/docs/img/demos/avatar.svg"
            width={200}
            height={200}
            className="size-[200px] rounded-full"
          />
          {isLoading ? (
            <div className="mt-6 text-3xl font-bold text-[#898A8D]">Memuat...</div>
          ) : (
            <>
              <h3 className="mt-6 text-3xl font-bold text-[#898A8D]">Belum ada data</h3>
              <p className="mt-1 text-[#898A8D]">Cari pengguna terlebih dahulu</p>
            </>
          )}
        </div>
      );
    } else if (Array.isArray(data.data) && data.data.length) {
      return (
        <>
          <h2 className="text-3xl font-bold text-primary">Hasil Pencarian</h2>
          <p className="text-[#898A8D]">{data.metadata.totalItems} Pengguna ditemukan</p>

          <div className="mt-6 flex h-full flex-col">
            {data.data.map((user, i) => (
              <UserSearchList key={i} name={user.name} email={user.email} avatar={user.avatar} />
            ))}
          </div>

          <Pagination
            page={page}
            pageCount={data.metadata.totalPages}
            onPageChange={handlePageChange}
          />
        </>
      );
    }
  };

  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="grid grid-cols-2">
          <form
            className="relative flex min-h-screen flex-col items-center justify-center bg-primary text-center"
            onSubmit={handleSubmit}
          >
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
                    <select
                      className="rounded-lg bg-[#D9D9D9] px-5 py-3 outline-none"
                      onChange={e => setType(e.target.value as any)}
                    >
                      <option value="name">Nama</option>
                      <option value="email">Email</option>
                    </select>
                  </div>
                  <input
                    required
                    name="identifier"
                    className="w-full rounded-lg px-5 py-3 outline-none"
                    placeholder="Masukkan alamat email"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                  />
                </div>
              </div>

              <Button
                loading={isLoading}
                type="submit"
                size="xl"
                color="secondary"
                className="mt-6 w-full"
              >
                Cari Pengguna
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
          </form>
          <div className="flex min-h-screen flex-col bg-white px-12 py-8">
            {renderSearchResult()}
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
}
