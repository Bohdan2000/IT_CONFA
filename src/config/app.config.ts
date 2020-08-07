import { get } from 'config';

export default {
  PORT: get('port'),
  BACK4APP_BASE_URL: get('back4app.base_url'),
  SECRET_KEY: 'IT_CONFA'
};
