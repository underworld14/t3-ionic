import { db } from '~/server/db';

export const updateTransaction = async (
  orderId: string,
  status: 'success' | 'failure' | 'pending',
  statusResponse: any,
) => {
  const transaction = await db.transactions.findUniqueOrThrow({
    where: {
      order_id: orderId,
    },
  });

  await db.transactions.update({
    where: {
      order_id: orderId,
    },
    data: {
      status,
      raw_response: JSON.stringify(statusResponse),
    },
  });

  if (status == 'success') {
    await db.users.update({
      where: {
        id: transaction.user_id,
      },
      data: {
        activated_at: new Date(),
      },
    });
  }
};
