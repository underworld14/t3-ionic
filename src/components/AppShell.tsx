import dayjs from 'dayjs';
import 'dayjs/locale/id';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { StatusBar, Style } from '@capacitor/status-bar';
import { KonstaProvider } from 'konsta/react';

import { IonReactRouter } from '@ionic/react-router';
import { Route } from 'react-router-dom';

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
              <PrivateRoute path="/member-information" component={MemberInformation} exact />
              <PrivateRoute
                path="/organization-structure"
                component={OrganizationStructure}
                exact
              />
              <PrivateRoute path="/article/:slug" component={Article} exact />
              <PrivateRoute path="/alquran" component={AlQuran} exact />

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
