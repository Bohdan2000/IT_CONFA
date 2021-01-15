import { MongooseModule } from '@nestjs/mongoose';
import DATABASE_CONFIG from '../../config/database.config';

const {
  TYPE,
  HOST,
  DATABASE,
} = DATABASE_CONFIG;

export const DatabaseModule = MongooseModule.forRoot(`${TYPE}://${HOST}/${DATABASE}`);
