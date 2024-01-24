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
import KTA from './pages/KTA';

interface RouteConfig {
  path: string;
  component: any;
  exact?: boolean;
  activatedOnly?: boolean;
  routeType?: 'private' | 'auth';
}

const routes: RouteConfig[] = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/agpaii-home',
    component: AgpaiiHome,
    exact: true,
    activatedOnly: true,
  },
  {
    path: '/agpaii-home/notification',
    component: Notification,
    exact: true,
    activatedOnly: true,
  },
  {
    path: '/agpaii-home/create-post',
    component: CreatePost,
    exact: true,
    activatedOnly: true,
  },
  {
    path: '/agpaii-home/stories/:id',
    component: StoriesPage,
    exact: true,
    activatedOnly: true,
  },
  {
    path: '/member-information',
    component: MemberInformation,
    exact: true,
    activatedOnly: true,
  },
  {
    path: '/organization-structure',
    component: OrganizationStructure,
    exact: true,
    activatedOnly: true,
  },
  {
    path: '/kta-digital',
    component: KTA,
    exact: true,
  },
  {
    path: '/article/:slug',
    component: Article,
    exact: true,
  },
  {
    path: '/alquran',
    component: AlQuran,
    exact: true,
  },
  {
    path: '/profile',
    component: Profile,
    exact: true,
    activatedOnly: true,
  },
  {
    path: '/profile/menu',
    component: ProfileMenu,
    exact: true,
    activatedOnly: true,
  },
  {
    path: '/lainya',
    component: OtherMenu,
    activatedOnly: true,
  },
  {
    path: '/profile/menu/general-information',
    component: ProfileGeneralInformation,
    activatedOnly: true,
  },
  {
    path: '/profile/menu/bio',
    component: ProfileBio,
    activatedOnly: true,
  },
  {
    path: '/profile/menu/member-card-number',
    component: ProfileMemberCardNumber,
    activatedOnly: true,
  },
  {
    path: '/profile/menu/teacher-status',
    component: ProfileTeacherStatus,
    activatedOnly: true,
  },
  {
    path: '/profile/menu/update-password',
    component: ProfileUpdatePassword,
    activatedOnly: true,
  },

  {
    path: '/agpaii-module',
    component: AgpaiiModule,
    activatedOnly: true,
  },
  {
    path: '/agpaii-module/:id',
    component: ModuleDetail,
    activatedOnly: true,
  },
  {
    path: '/agpaii-module/:id/read-module',
    component: ReadingModule,
    activatedOnly: true,
  },
  {
    path: '/agpaii-module/create-module',
    component: CreateModuleForm,
    activatedOnly: true,
  },
  {
    path: '/agpaii-module/create-module-image',
    component: CreateModuleImage,
    activatedOnly: true,
  },
  {
    path: '/agpaii-module/create-bagian',
    component: CreateBagianRTE,
    activatedOnly: true,
  },
  {
    path: '/agpaii-module/modul-jenjang',
    component: ModulJenjang,
    activatedOnly: true,
  },
  {
    path: '/agpaii-module/my-module',
    component: MyModule,
    activatedOnly: true,
  },
  {
    path: '/agpaii-module/module-search',
    component: ModuleSearch,
    activatedOnly: true,
  },
  {
    path: '/agpaii-module/favourite-module',
    component: FavouriteModule,
    activatedOnly: true,
  },
  {
    path: '/agpaii-module/my-draft',
    component: MyDraft,
    activatedOnly: true,
  },

  {
    path: '/events',
    component: Events,
    exact: true,
    activatedOnly: true,
  },
  {
    path: '/events/create-event',
    component: CreateEvent,
    activatedOnly: true,
  },
  {
    path: '/events/create-event-form',
    component: CreateEventForm,
    activatedOnly: true,
  },
  {
    path: '/events/event-detail',
    component: EventDetail,
    activatedOnly: true,
  },
  {
    path: '/events/event-detail/presensi',
    component: Presensi,
    activatedOnly: true,
  },
  {
    path: '/events/event-detail/qr-code-presensi',
    component: QRCodePresensi,
    activatedOnly: true,
  },
  {
    path: '/events/event-detail/participant-list',
    component: ParticipantList,
    activatedOnly: true,
  },
  {
    path: '/participant-list/participant-presence-detail',
    component: ParticipantPresenceDetail,
    activatedOnly: true,
  },

  {
    path: '/auth/user-check',
    component: UserCheck,
    exact: true,
    routeType: 'auth',
  },
  {
    path: '/auth/register',
    component: Register,
    exact: true,
    routeType: 'auth',
  },
  {
    path: '/auth/login',
    component: Login,
    exact: true,
    routeType: 'auth',
  },
];

export default routes;
