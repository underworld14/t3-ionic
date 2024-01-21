import dayjs from 'dayjs';
import nodeCron from 'node-cron';
import { db } from '../db';

async function checkMembershipDailyPaymentCron() {
  const paymentType = await db.payment_types.findFirstOrThrow({
    where: {
      code: 'AGPAI-MEMBERSHIP',
    },
  });

  // get all users that are active
  const users = await db.users.findMany({
    where: {
      activated_at: {
        not: null,
      },
    },
  });

  const currentDate = dayjs().toDate();

  // check if the user has membership invoice in this period
  await Promise.allSettled(
    users.map(async user => {
      // check latest membership period
      const latestMembershipPeriod = await db.membership_payments.findFirst({
        where: {
          user_id: user.id,
        },
        orderBy: {
          created_at: 'desc',
        },
      });

      if (!latestMembershipPeriod) {
        // create new membership period, (the duedate is 6 months from the activation date)
        await db.membership_payments.create({
          data: {
            user_id: user.id,
            start_period: user.activated_at || currentDate,
            end_period: dayjs(user.activated_at).add(6, 'month').toDate(),
            amount: paymentType.amount,
          },
        });

        return;
      }

      // check latest membership if it is still active
      const isMembershipActive = dayjs(currentDate).isBefore(latestMembershipPeriod.end_period);

      if (isMembershipActive) {
        return;
      }

      // create new membership period
      await db.membership_payments.create({
        data: {
          user_id: user.id,
          start_period: latestMembershipPeriod.end_period,
          end_period: dayjs(latestMembershipPeriod.end_period).add(6, 'month').toDate(),
          amount: paymentType.amount,
        },
      });
    }),
  );
}

//every day at 00:00
nodeCron.schedule('0 0 * * *', async () => {
  console.log('### CRON: check membership payment due date');

  await checkMembershipDailyPaymentCron();
});

// init on server start
(async () => {
  console.log('### SERVER START: check membership payment due date');
  await checkMembershipDailyPaymentCron();
})();
