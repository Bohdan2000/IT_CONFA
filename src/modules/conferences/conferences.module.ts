import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConferencesController } from './conferences.controller';
import { ConferencesService} from './conferences.service';
import { ConferenceSchema } from './conferences.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Conference', schema: ConferenceSchema }])],
  controllers: [ConferencesController],
  providers: [ConferencesService],
  exports: [ConferencesService]
})
export class ConferencesModule {} 