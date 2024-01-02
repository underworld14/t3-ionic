import { Redirect, Route } from 'react-router-dom';
import { useAuthStore } from '~/store/auth-store';
import { api } from '~/utils/api';

export const PrivateRoute = ({ component: Component, ...rest }: any) => {
  const { user, token, logout } = useAuthStore();

  api.auth.check.useQuery(undefined, {
    staleTime: 1000 * 60 * 10, // 10 minutes stale
    onError: () => {
      logout();
      window.location.href = '/auth/login';
    },
  });

  return (
    <Route
      {...rest}
      render={props => {
        if (user && token) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/auth/login" />;
        }
      }}
    />
  );
};

export const AuthRoute = ({ component: Component, ...rest }: any) => {
  const { user, token } = useAuthStore();
  return (
    <Route
      {...rest}
      render={props => {
        if (user && token) {
          return <Redirect to="/" />;
        } else {
          return <Component {...props} />;
        }
      }}
    />
  );
};
