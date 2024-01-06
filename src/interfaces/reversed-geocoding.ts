export interface ReversedGeocoding {
  place_id: number;
  licence: string;
  osm_type: string;
  osm_id: number;
  lat: string;
  lon: string;
  class: string;
  type: string;
  place_rank: number;
  importance: number;
  addresstype: string;
  name: string;
  display_name: string;
  address: {
    amenity: string;
    road: string;
    suburb: string;
    city_district: string;
    city: string;
    state: string;
    ISO3166_2_lvl4: string;
    region: string;
    ISO3166_2_lvl3: string;
    postcode: string;
    country: string;
    country_code: string;
  };
  boundingbox: string[];
}
