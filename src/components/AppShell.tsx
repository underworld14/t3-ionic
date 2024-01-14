import dayjs from 'dayjs';
import 'dayjs/locale/id';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { StatusBar, Style } from '@capacitor/status-bar';
import { KonstaProvider } from 'konsta/react';

import { IonReactRouter } from '@ionic/react-router';

import { useQueryClient } from '@tanstack/react-query';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';
import { createAsyncStoragePersister } from '@tanstack/query-async-storage-persister';
import { Preferences } from '@capacitor/preferences';

import { api } from '~/utils/api';
import { PrivateRoute, AuthRoute } from './molecules';

// pages
import UserCheck from './pages/Auth/UserCheck';
import Register from './pages/Auth/Register';
import Login from './pages/Auth/Login';
import Home from './pages/Home';
import AgpaiiHome from './pages/AgpaiiHome';
import CreatePost from './pages/CreatePost';
import MemberInformation from './pages/MemberInformation/MemberInformation';
import OrganizationStructure from './pages/OrganizationStructure';
import Notification from './pages/Notification';
import StoriesPage from './pages/Stories';
import Article from './pages/Article';
import AlQuran from './pages/AlQuran';
import Profile from './pages/Profile/Profile';
import ProfileMenu from './pages/Profile/ProfileMenu';
import ProfileGeneralInformation from './pages/Profile/ProfileGeneralInformation';
import ProfileBio from './pages/Profile/ProfileBio';
import ProfileMemberCardNumber from './pages/Profile/ProfileMemberCardNumber';
import ProfileTeacherStatus from './pages/Profile/ProfileTeacherStatus';
import ProfileUpdatePassword from './pages/Profile/ProfileUpdatePassword';
import Events from './pages/Event/Events';
import CreateEvent from './pages/Event/CreateEvent';
import EventDetail from './pages/Event/EventDetail';
import CreateEventForm from './pages/Event/CreateEventForm';
import Presensi from './pages/Event/Presensi';
import QRCodePresensi from './pages/Event/QRCodePresensi';
import ParticipantList from './pages/Event/ParticipantList';
import ParticipantPresenceDetail from './pages/Event/ParticipantPresenceDetail';
import OtherMenu from './pages/OtherMenu';
import AgpaiiModule from './pages/AgpaiiModule/AgpaiiModule';
import ModuleSearch from './pages/AgpaiiModule/ModuleSearch';
import MyModule from './pages/AgpaiiModule/MyModule';
import FavouriteModule from './pages/AgpaiiModule/FavouriteModule';
import MyDraft from './pages/AgpaiiModule/MyDraft';
import ModuleDetail from './pages/AgpaiiModule/ModuleDetail';
import ReadingModule from './pages/AgpaiiModule/ReadingModule';
import ModulJenjang from './pages/AgpaiiModule/ModulJenjang';
import CreateModuleForm from './pages/AgpaiiModule/CreateModuleForm';
import CreateModuleImage from './pages/AgpaiiModule/CreateModuleImage';
import CreateBagianRTE from './pages/AgpaiiModule/CreateBagianRTE';

setupIonicReact({});

dayjs.locale('id');

window.matchMedia('(prefers-color-scheme: dark)').addListener(async status => {
  try {
    await StatusBar.setStyle({
      style: status.matches ? Style.Dark : Style.Light,
    });
  } catch {}
});

const storagePersister = createAsyncStoragePersister({
  storage: {
    getItem: async key => {
      const { value } = await Preferences.get({ key });
      return JSON.parse(value ?? 'null');
    },
    setItem: async (key, value) => {
      await Preferences.set({ key, value: JSON.stringify(value) });
    },
    removeItem: async key => {
      await Preferences.remove({ key });
    },
  },
  key: 'agpaii-cache',
});

const AppShell = () => {
  const queryClient = useQueryClient();

  return (
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{ persister: storagePersister }}
    >
      <KonstaProvider theme="parent">
        <IonApp>
          <IonReactRouter>
            <IonRouterOutlet id="main">
              <PrivateRoute path="/" component={Home} exact />
              <PrivateRoute path="/agpaii-home" component={AgpaiiHome} exact />
              <PrivateRoute path="/agpaii-home/notification" component={Notification} exact />
              <PrivateRoute path="/agpaii-home/create-post" component={CreatePost} exact />
              <PrivateRoute path="/agpaii-home/stories/:id" component={StoriesPage} exact />
              <PrivateRoute path="/agpaii-home/events" component={Events} exact />
              <PrivateRoute path="/member-information" component={MemberInformation} exact />
              <PrivateRoute
                path="/organization-structure"
                component={OrganizationStructure}
                exact
              />
              <PrivateRoute path="/article/:slug" component={Article} exact />
              <PrivateRoute path="/alquran" component={AlQuran} exact />
              <PrivateRoute path="/profile" component={Profile} exact />
              <PrivateRoute path="/profile/menu" component={ProfileMenu} exact />
              <PrivateRoute path="/lainya" component={OtherMenu} />
              <PrivateRoute
                path="/profile/menu/general-information"
                component={ProfileGeneralInformation}
              />
              <PrivateRoute path="/profile/menu/bio" component={ProfileBio} />
              <PrivateRoute
                path="/profile/menu/member-card-number"
                component={ProfileMemberCardNumber}
              />
              <PrivateRoute path="/profile/menu/teacher-status" component={ProfileTeacherStatus} />
              <PrivateRoute
                path="/profile/menu/update-password"
                component={ProfileUpdatePassword}
              />

              <PrivateRoute path="/agpaii-module" component={AgpaiiModule} />
              <PrivateRoute path="/agpaii-module/:id" component={ModuleDetail} />
              <PrivateRoute path="/agpaii-module/:id/read-module" component={ReadingModule} />
              <PrivateRoute path="/agpaii-module/create-module" component={CreateModuleForm} />
              <PrivateRoute path="/agpaii-module/create-module-image" component={CreateModuleImage} />
              <PrivateRoute path="/agpaii-module/create-bagian" component={CreateBagianRTE} />
              <PrivateRoute path="/agpaii-module/modul-jenjang" component={ModulJenjang} />
              <PrivateRoute path="/agpaii-module/my-module" component={MyModule} />
              <PrivateRoute path="/agpaii-module/module-search" component={ModuleSearch} />
              <PrivateRoute path="/agpaii-module/favourite-module" component={FavouriteModule} />
              <PrivateRoute path="/agpaii-module/my-draft" component={MyDraft} />

              <PrivateRoute path="/events/create-event" component={CreateEvent} />
              <PrivateRoute path="/events/create-event-form" component={CreateEventForm} />
              <PrivateRoute path="/events/event-detail" component={EventDetail} />
              <PrivateRoute path="/events/event-detail/presensi" component={Presensi} />
              <PrivateRoute
                path="/events/event-detail/qr-code-presensi"
                component={QRCodePresensi}
              />
              <PrivateRoute
                path="/events/event-detail/participant-list"
                component={ParticipantList}
              />
              <PrivateRoute
                path="/participant-list/participant-presence-detail"
                component={ParticipantPresenceDetail}
              />

              <AuthRoute path="/auth/user-check" component={UserCheck} exact />
              <AuthRoute path="/auth/register" component={Register} exact />
              <AuthRoute path="/auth/login" component={Login} exact />
            </IonRouterOutlet>
          </IonReactRouter>
        </IonApp>
      </KonstaProvider>
    </PersistQueryClientProvider>
  );
};

export default api.withTRPC(AppShell);
