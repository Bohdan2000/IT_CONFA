import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CitiesController } from './cities.controller';
import { CitiesService } from './cities.service';
import { CitySchema } from './cities.schema';
import { RapidAPIModule } from '../rapidAPI/rapidAPI.module';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'City', schema: CitySchema }]), RapidAPIModule],
  controllers: [CitiesController],
  providers: [CitiesService],
})
export class CitiesModule {}