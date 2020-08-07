import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CountriesController } from './countries.controller';
import { CountriesService} from './countries.service';
import { CountrySchema } from './countries.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Country', schema: CountrySchema }])],
  controllers: [CountriesController],
  providers: [CountriesService],
})
export class CountriesModule {}