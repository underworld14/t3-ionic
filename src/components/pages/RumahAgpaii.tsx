import { IonPage, IonContent, IonHeader, IonIcon } from '@ionic/react';
import { notifications, chatbubbles, camera } from 'ionicons/icons';
import { Link } from 'react-router-dom';
import { Header } from '../molecules';

export default function RumahAgpaii() {
  return (
    <IonPage>
      <IonHeader>
        <Header
          title="Rumah AGPAII"
          rightElement={
            <div className="flex gap-4">
              <div className="btn-icon btn-icon-light">
                <IonIcon className="h-6 w-6 text-white" icon={notifications} />
              </div>
              <div className="btn-icon btn-icon-light">
                <IonIcon className="h-6 w-6 text-white" icon={chatbubbles} />
              </div>
            </div>
          }
        />
      </IonHeader>
      <IonContent>
        <div className="mt-[90px]">
          {/* tabs */}
          <ul
            className="flex list-none flex-row flex-wrap border-b-0 pl-0"
            role="tablist"
            data-te-nav-ref
          >
            <li role="presentation" className="flex-auto text-center">
              <a
                href="#tabs-home01"
                className="dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400 my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3 pt-2 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent"
                data-te-toggle="pill"
                data-te-target="#tabs-home01"
                data-te-nav-active
                role="tab"
                aria-controls="tabs-home01"
                aria-selected="true"
              >
                Semua
              </a>
            </li>
            <li role="presentation" className="flex-auto text-center">
              <a
                href="#tabs-contact01"
                className="disabled pointer-events-none my-2 block border-x-0 border-b-2 border-t-0 border-transparent bg-transparent px-7 pb-3 pt-2 text-xs font-medium uppercase leading-tight text-neutral-400 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent dark:text-neutral-600"
                data-te-toggle="pill"
                data-te-target="#tabs-contact01"
                role="tab"
                aria-controls="tabs-contact01"
                aria-selected="false"
              >
                Mengikuti
              </a>
            </li>
          </ul>

          <div className="flex items-center justify-between gap-4 px-3 py-5 shadow-md">
            <img
              className="h-10 w-10 rounded-full"
              src={`https://i.pravatar.cc/150?img=${4}`}
              alt="avatar"
            />
            <Link
              to="/post/create"
              className="w-[90%] rounded-2xl border border-dashed border-[#898A8D] px-4 py-[10px] text-xs text-[#979797] outline-none hover:cursor-pointer"
            >
              Diskusi hari ini
            </Link>
            <div className="btn-icon btn-icon-dark">
              <IonIcon className="h-6 w-6 text-primary" icon={camera} />
            </div>
          </div>

          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex w-full flex-col rounded-xl py-4 shadow-md">
              <div className="flex px-3">
                <img
                  className="h-10 w-10 rounded-full"
                  src={`https://i.pravatar.cc/150?img=${i + 1}`}
                  alt="avatar"
                />
                <div className="ml-2 flex flex-col">
                  <h1 className="text-sm font-semibold">Abdul Jamil , S.Pd.</h1>
                  <p className="text-xs">Guru PAI SMP Gunungpati Semarang</p>
                </div>
              </div>
              <div className="mt-3">
                <img
                  className="w-full object-cover"
                  src={`https://picsum.photos/seed/${i + 1}/500/300`}
                  alt="post"
                />
              </div>
            </div>
          ))}
        </div>
      </IonContent>
    </IonPage>
  );
}
