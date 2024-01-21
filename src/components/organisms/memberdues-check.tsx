import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { IonModal, useIonToast } from '@ionic/react';
import { useQueryClient } from '@tanstack/react-query';
import { api } from '~/utils/api';
import { Button } from '../atoms';

export function MemberDuesCheck() {
  const queryClient = useQueryClient();
  const [open, setOpen] = useState(false);
  const [memberDues, setMemberDues] = useState(false);
  const [toast] = useIonToast();

  const { data } = api.auth.check.useQuery(undefined, {
    staleTime: 1000 * 60 * 10, // 10 minutes stale
  });

  const { data: memberDuesData } = api.transaction.checkMembershipDueDate.useQuery();

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

  const membershipPayment = api.transaction.membershipPayment.useMutation({
    onSuccess: res => {
      if (res.snap_token) {
        (window as any).snap?.pay?.(res.snap_token, {
          onSuccess: () => {
            queryClient.invalidateQueries({
              queryKey: [['transaction', 'checkMembershipDueDate'], { type: 'query' }],
            });
          },
        });
      }
      setOpen(false);
    },
    onError: err => {
      toast({
        message: err?.message || 'Terjadi kesalahan saat membuat pembayaran',
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

  useEffect(() => {
    if (memberDuesData?.membershipPayment && memberDuesData?.status === 'pending') {
      const { end_period } = memberDuesData.membershipPayment;
      const now = dayjs();

      if (now.isAfter(end_period)) {
        setMemberDues(true);
      }
    }
  }, [memberDuesData]);

  const handleMemberActivation = () => {
    memberActivation.mutate();
  };

  return (
    <>
      <IonModal className="member-activation-modal" isOpen={open}>
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
      <IonModal className="member-activation-modal" isOpen={memberDues}>
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
            <h1 className="font-bold">
              Anda belum melakukan iuran anggota pada periode{' '}
              {dayjs(memberDuesData?.membershipPayment?.start_period).format('MMMM')} -{' '}
              {dayjs(memberDuesData?.membershipPayment?.end_period).format('MMMM')}
            </h1>
            <p className="mt-2 text-xs">
              Lakukan Iuran anggota senilai Rp.65.000 untuk memperpanjang masa aktif KTA Digital
            </p>
          </div>

          <div className="mt-7 flex flex-col gap-1">
            <Button
              type="button"
              color="primary"
              size="sm"
              loading={membershipPayment.isLoading}
              onClick={() => membershipPayment.mutate()}
            >
              Iuran Sekarang
            </Button>
          </div>
        </div>
      </IonModal>
    </>
  );
}
