import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { StatusBar, Style } from '@capacitor/status-bar';

import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';

import UserCheck from './pages/Auth/UserCheck';
import Register from './pages/Auth/Register';
import Login from './pages/Auth/Login';
import Home from './pages/Home';
import RumahAgpaii from './pages/RumahAgpaii';
import CreatePost from './pages/Post/CreatePost';

import { api } from '~/utils/api';

setupIonicReact({});

window.matchMedia('(prefers-color-scheme: dark)').addListener(async status => {
  try {
    await StatusBar.setStyle({
      style: status.matches ? Style.Dark : Style.Light,
    });
  } catch {}
});

const AppShell = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet id="main">
          {/* <Route path="/tabs" render={() => <Tabs />} />
          <Route path="/" render={() => <Redirect to="/tabs/feed" />} exact /> */}
          <Route path="/" component={Home} exact />
          <Route path="/rumah-agpaii" component={RumahAgpaii} exact />
          <Route path="/post/create" component={CreatePost} exact />
          <Route path="/auth/user-check" component={UserCheck} exact />
          <Route path="/auth/register" component={Register} exact />
          <Route path="/auth/login" component={Login} exact />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default api.withTRPC(AppShell);
