import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { StatusBar, Style } from '@capacitor/status-bar';

import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';

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
          <Route path="/agpaii-home" component={AgpaiiHome} exact />
          <Route path="/agpaii-home/notification" component={Notification} exact />
          <Route path="/agpaii-home/create-post" component={CreatePost} exact />
          <Route path="/agpaii-home/stories/:id" component={StoriesPage} exact />
          <Route path="/member-information" component={MemberInformation} exact />
          <Route path="/organization-structure" component={OrganizationStructure} exact />
          <Route path="/auth/user-check" component={UserCheck} exact />
          <Route path="/auth/register" component={Register} exact />
          <Route path="/auth/login" component={Login} exact />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default api.withTRPC(AppShell);
