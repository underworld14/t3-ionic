import { useEffect, useState } from 'react';
import { Redirect, Route, useHistory } from 'react-router-dom';
import { IonAlert } from '@ionic/react';

import { useAuthStore } from '~/store/auth-store';
import { api } from '~/utils/api';

export const PrivateRoute = ({ component: Component, activatedOnly, ...rest }: any) => {
  const history = useHistory();
  const { user, token, logout } = useAuthStore();
  const [modalRestricted, setModalRestricted] = useState(false);

  const { data } = api.auth.check.useQuery(undefined, {
    staleTime: 1000 * 60 * 10, // 10 minutes stale
    onError: () => {
      logout();
      window.location.href = '/auth/login';
    },
  });

  useEffect(() => {
    if (activatedOnly && data?.data && !data?.data?.activated_at) {
      setModalRestricted(true);
    }
  }, [data, activatedOnly]);

  return (
    <Route
      {...rest}
      render={props => {
        if (user && token) {
          return (
            <>
              <Component {...props} />
              {activatedOnly && (
                <IonAlert
                  isOpen={modalRestricted}
                  header="Akun belum diaktifkan"
                  message="Anda belum mengaktifkan akun anda. Silahkan melakukan pembayaran pendaftran terlebih dahulu. untuk informasi lebih lanjut silahkan hubungi admin."
                  buttons={['OK']}
                  onDidDismiss={() => {
                    setModalRestricted(false);
                    history.replace('/');
                  }}
                />
              )}
            </>
          );
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
