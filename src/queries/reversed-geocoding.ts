import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { ReversedGeocoding } from '~/interfaces/reversed-geocoding';

// https://nominatim.openstreetmap.org/reverse?lat=-7.795201343858834&lon=110.37586810590943&format=json

export const useReversedGeocoding = (lat: string, lon: string) => {
  const query = useQuery<ReversedGeocoding>({
    queryKey: ['reversed-geocoding', lat, lon],
    queryFn: async () => {
      const { data } = await axios.get(
        `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`,
      );
      return data;
    },
    cacheTime: Infinity,
    staleTime: Infinity,
    enabled: !!lat && !!lon,
  });

  return query;
};
