import dayjs from 'dayjs';
import { createTRPCRouter, authorizedProcedure } from '~/server/api/trpc';
import { env } from '~/env';
import { TRPCError } from '@trpc/server';
import { updateTransaction } from '~/server/utils/payment';

const midtransClient = require('midtrans-client');

const snap = new midtransClient.Snap({
  // Set to true if you want Production Environment (accept real transaction).
  isProduction: false,
  serverKey: env.MIDTRANS_SERVER_KEY,
  clientKey: env.NEXT_PUBLIC_MIDTRANS_CLIENT_KEY,
});

export const transactionRouter = createTRPCRouter({
  checkMemberActivationPaymentStatus: authorizedProcedure.mutation(async ({ ctx }) => {
    const transaction = await ctx.db.transactions.findFirst({
      where: {
        user_id: ctx.user.id,
      },
      orderBy: {
        created_at: 'desc',
      },
    });

    if (!transaction) {
      throw new TRPCError({
        code: 'BAD_REQUEST',
        message: 'Kamu belum membuka transaksi apapun',
      });
    }

    if (transaction.status == 'success') {
      return {
        status: 'success',
        message: 'Pembayaran berhasil',
      };
    }

    const orderId = transaction.order_id;
    const statusResponse = await snap.transaction.status(orderId);
    const transactionStatus = statusResponse.transaction_status;
    const fraudStatus = statusResponse.fraud_status;

    if (transactionStatus == 'capture') {
      if (fraudStatus == 'accept') {
        await updateTransaction(orderId, 'success', statusResponse);

        return {
          status: 'success',
          message: 'Pembayaran berhasil',
        };
      }
    } else if (transactionStatus == 'settlement') {
      await updateTransaction(orderId, 'success', statusResponse);

      return {
        status: 'success',
        message: 'Pembayaran berhasil',
      };
    } else if (
      transactionStatus == 'cancel' ||
      transactionStatus == 'deny' ||
      transactionStatus == 'expire'
    ) {
      await updateTransaction(orderId, 'failure', statusResponse);

      return {
        status: 'failure',
        message: 'Pembayaran gagal',
      };
    } else if (transactionStatus == 'pending') {
      await updateTransaction(orderId, 'pending', statusResponse);

      return {
        status: 'pending',
        message: 'Sedang menunggu pembayaran, selesaikan pembayaran segara',
      };
    }
    return {
      status: transactionStatus,
    };
  }),
  memberActivation: authorizedProcedure.mutation(async ({ ctx }) => {
    const code = `AGPAI-REGISTRATION`;
    const user = await ctx.db.users.findUniqueOrThrow({
      where: {
        id: ctx.user.id,
      },
    });

    if (user.activated_at) {
      throw new TRPCError({
        code: 'BAD_REQUEST',
        message: 'User already activated',
      });
    }

    // get payment type
    const payment = await ctx.db.payment_types.findFirstOrThrow({
      where: {
        code,
      },
    });

    const order_id = `${code}-${user.id}-${dayjs().unix()}`;

    // if user is not activated, should pay the activation fee
    const parameter = {
      transaction_details: {
        order_id: order_id,
        gross_amount: payment.amount,
      },
      customer_details: {
        first_name: user.name,
        email: user.email,
      },
    };

    const snapTransaction = await snap.createTransaction(parameter);

    // insert to transaction table
    const transaction = await ctx.db.transactions.create({
      data: {
        title: 'Pendaftaran Anggota AGPAII',
        payment_type_id: payment.id,
        amount: payment.amount,
        user_id: user.id,
        snap_token: snapTransaction.token,
        snap_redirect_url: snapTransaction.redirect_url,
        order_id,
      },
    });

    return transaction;
  }),
});
