import { get } from 'config';

export default {
  TYPE: get('database.type'),
  HOST: get('database.host'),
  DATABASE: get('database.database'),
};
