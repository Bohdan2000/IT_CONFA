import { get } from 'config';

export default {
  PORT: get('port'),
  RAPID_API_COUNTRIES_URL: get('rapidAPI.countries'),
  RAPID_API_CITIES_URL: get('rapidAPI.cities'),
  SECRET_KEY: 'IT_CONFA'
};
