import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CountriesController } from './country.controller';
import { CountriesService} from './country.service';
import { CountrySchema } from './country.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Country', schema: CountrySchema }])],
  controllers: [CountriesController],
  providers: [CountriesService],
})
export class CountriesModule {}