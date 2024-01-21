import { useEffect, useState } from 'react';
import { IonModal, useIonToast } from '@ionic/react';
import { useQueryClient } from '@tanstack/react-query';
import { api } from '~/utils/api';
import { Button } from '../atoms';

export function MemberDuesCheck() {
  const queryClient = useQueryClient();
  const [open, setOpen] = useState(false);
  const [toast] = useIonToast();
  const { data } = api.auth.check.useQuery(undefined, {
    staleTime: 1000 * 60 * 10, // 10 minutes stale
  });

  const memberActivation = api.transaction.memberActivation.useMutation({
    onSuccess: res => {
      if (res.snap_token) {
        (window as any).snap?.pay?.(res.snap_token, {
          onSuccess: () => {
            queryClient.invalidateQueries({
              queryKey: [['auth', 'check'], { type: 'query' }],
            });
          },
        });
      }
      setOpen(false);
    },
    onError: err => {
      toast({
        message: 'Terjadi kesalahan saat membuat pembayaran',
        duration: 3000,
      });
      console.log(err);
      setOpen(false);
    },
  });

  const checkMemberActivation = api.transaction.checkMemberActivationPaymentStatus.useMutation({
    onSuccess: res => {
      toast({
        message: res.message || res.status,
        duration: 3000,
      });

      queryClient.invalidateQueries({
        queryKey: [['auth', 'check'], { type: 'query' }],
      });

      setOpen(false);
    },
    onError: err => {
      toast({
        message: err.message || 'Terjadi kesalahan saat memeriksa pembayaran',
        duration: 3000,
      });
      console.log(err);

      setOpen(false);
    },
  });

  useEffect(() => {
    if (data?.data && !data?.data?.activated_at) {
      // user is not activated, show the popup
      setOpen(true);
    }
  }, [data]);

  const handleMemberActivation = () => {
    memberActivation.mutate();
  };

  return (
    <IonModal id="memberdues-modal" isOpen={open}>
      <div className="p-5">
        <div className="flex justify-center">
          <img
            src="/assets/img/registration-payment.png"
            alt="registration payment"
            width={80}
            height={80}
          />
        </div>
        <div className="mt-2 text-center">
          <h1 className="font-bold">KTA Anda Hampir Siap</h1>
          <p className="mt-2 text-xs">
            Lakukan Iuran Pendaftaran Rp.35.000 untuk penerbitan akun KTA Digital
          </p>
        </div>

        <div className="mt-7 flex flex-col gap-1">
          <Button
            type="button"
            color="primary"
            size="sm"
            onClick={handleMemberActivation}
            loading={memberActivation.isLoading}
          >
            Iuran Sekarang
          </Button>
          <Button
            type="button"
            color="grey"
            size="sm"
            onClick={() => checkMemberActivation.mutate()}
            loading={checkMemberActivation.isLoading}
          >
            Cek Status Iuran
          </Button>
        </div>
      </div>
    </IonModal>
  );
}
