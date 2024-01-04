import dayjs from 'dayjs';
import 'dayjs/locale/id';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { StatusBar, Style } from '@capacitor/status-bar';

import { IonReactRouter } from '@ionic/react-router';
import { Route } from 'react-router-dom';

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

setupIonicReact({});

dayjs.locale('id');

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
          <PrivateRoute path="/" component={Home} exact />
          <PrivateRoute path="/agpaii-home" component={AgpaiiHome} exact />
          <PrivateRoute path="/agpaii-home/notification" component={Notification} exact />
          <PrivateRoute path="/agpaii-home/create-post" component={CreatePost} exact />
          <PrivateRoute path="/agpaii-home/stories/:id" component={StoriesPage} exact />
          <PrivateRoute path="/member-information" component={MemberInformation} exact />
          <PrivateRoute path="/organization-structure" component={OrganizationStructure} exact />
          <PrivateRoute path="/article/:slug" component={Article} exact />

          <AuthRoute path="/auth/user-check" component={UserCheck} exact />
          <AuthRoute path="/auth/register" component={Register} exact />
          <AuthRoute path="/auth/login" component={Login} exact />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default api.withTRPC(AppShell);
