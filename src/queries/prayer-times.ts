import dayjs from 'dayjs';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Preferences } from '@capacitor/preferences';
import { Geolocation } from '@capacitor/geolocation';
import { useQuery } from '@tanstack/react-query';
import { PrayerTime } from '~/interfaces/prayer-times';
import { useReversedGeocoding } from './reversed-geocoding';

const PRAYER_TIMES_API_URL = 'https://api.aladhan.com/v1/calendar';

export const usePrayerTimes = () => {
  const [currentMonth] = useState(dayjs().month() + 1);
  const [year] = useState(dayjs().year());
  const [latlong, setLatlong] = useState<[string, string] | null>(null);

  useEffect(() => {
    (async () => {
      let latlong = JSON.parse((await Preferences.get({ key: 'latlong' })).value || 'null');

      if (!latlong) {
        try {
          const position = await Geolocation.getCurrentPosition();
          latlong = [position.coords.latitude, position.coords.longitude];
          Preferences.set({
            key: 'latlong',
            value: JSON.stringify(latlong),
          });
        } catch (error) {
          setLatlong(null);
        }
      }
      setLatlong(latlong);
    })();
  }, []);

  const resetPrayerTimes = () => {
    setLatlong(null);
  };

  const query = useQuery<PrayerTime[]>({
    queryKey: ['prayer-times', currentMonth, year, latlong],
    queryFn: async () => {
      const { data } = await axios.get(
        `${PRAYER_TIMES_API_URL}/${year}/${currentMonth}?latitude=${latlong?.[0]}&longitude=${latlong?.[1]}&method=2`,
      );
      return data.data;
    },
    cacheTime: 1000 * 60 * 60 * 24 * dayjs().daysInMonth(),
    staleTime: 1000 * 60 * 60 * 24 * dayjs().daysInMonth(),
    enabled: !!latlong,
  });

  const { data: reversedGeocoding, isSuccess } = useReversedGeocoding(
    latlong?.[0] || '',
    latlong?.[1] || '',
  );

  const currentPrayerTime = query.data?.[dayjs().date() - 1];

  return {
    todayPrayerTime: currentPrayerTime,
    nextPrayerTime: currentPrayerTime && getNextPrayerTime(currentPrayerTime),
    status: query.isSuccess && isSuccess,
    city: reversedGeocoding?.address?.city,
    state: reversedGeocoding?.address?.state,
    resetPrayerTimes,
  };
};

const getNextPrayerTime = (prayerTimes: PrayerTime) => {
  const currentTime = dayjs().format('HH:mm');
  const times = Object.entries(prayerTimes.timings);
  const nearestPrayerTime = times.findIndex(([_, time]) => time?.split(' ')[0] > currentTime);

  if (nearestPrayerTime === -1) {
    return null;
  }

  return times[nearestPrayerTime]?.join(' ');
};
