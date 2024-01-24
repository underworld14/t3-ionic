import dayjs from 'dayjs';
import 'dayjs/locale/id';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { StatusBar, Style } from '@capacitor/status-bar';
import { KonstaProvider } from 'konsta/react';

import { IonReactRouter } from '@ionic/react-router';

import { useQueryClient } from '@tanstack/react-query';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';
import { createAsyncStoragePersister } from '@tanstack/query-async-storage-persister';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Preferences } from '@capacitor/preferences';

import { api } from '~/utils/api';
import { PrivateRoute, AuthRoute } from './molecules';
import { MemberDuesCheck } from './organisms';

// pages
import routes from './routes';

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
              {routes.map(route => {
                const Route = route.routeType === 'auth' ? AuthRoute : PrivateRoute;
                return (
                  <Route
                    key={route.path}
                    path={route.path}
                    exact={route.exact}
                    activatedOnly={route.activatedOnly}
                    component={route.component}
                  />
                );
              })}
            </IonRouterOutlet>
          </IonReactRouter>
          <MemberDuesCheck />
        </IonApp>
        <ReactQueryDevtools initialIsOpen={false} />
      </KonstaProvider>
    </PersistQueryClientProvider>
  );
};

export default api.withTRPC(AppShell);
