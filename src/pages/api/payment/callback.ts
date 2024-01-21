import type { NextApiRequest, NextApiResponse } from 'next';
import { env } from '~/env';
import { updateTransaction } from '~/server/utils/payment';

const midtransClient = require('midtrans-client');

const apiClient = new midtransClient.Snap({
  // Set to true if you want Production Environment (accept real transaction).
  isProduction: false,
  serverKey: env.MIDTRANS_SERVER_KEY,
  clientKey: env.NEXT_PUBLIC_MIDTRANS_CLIENT_KEY,
});

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    let notificationJson = req.body;

    apiClient.transaction.notification(notificationJson).then(async (statusResponse: any) => {
      let orderId = statusResponse.order_id;
      let transactionStatus = statusResponse.transaction_status;
      let fraudStatus = statusResponse.fraud_status;

      console.log(
        `Transaction notification received. Order ID: ${orderId}. Transaction status: ${transactionStatus}. Fraud status: ${fraudStatus}`,
      );

      if (transactionStatus == 'capture') {
        if (fraudStatus == 'accept') {
          await updateTransaction(orderId, 'success', statusResponse);

          return res
            .status(200)
            .json({ message: 'Transaction succeeded and fraud status is accept' });
        }
      } else if (transactionStatus == 'settlement') {
        await updateTransaction(orderId, 'success', statusResponse);

        return res.status(200).json({ message: 'Transaction succeeded' });
      } else if (
        transactionStatus == 'cancel' ||
        transactionStatus == 'deny' ||
        transactionStatus == 'expire'
      ) {
        await updateTransaction(orderId, 'failure', statusResponse);
        return res.status(200).json({ message: 'Transaction failed' });
      } else if (transactionStatus == 'pending') {
        await updateTransaction(orderId, 'pending', statusResponse);
        return res.status(200).json({ message: 'Transaction pending' });
      }
    });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
