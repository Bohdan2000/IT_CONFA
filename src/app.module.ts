import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CountriesModule } from './modules/country/country.module';
import { DatabaseModule } from './modules/database/database.module';
import { Back4AppModule } from './modules/back4app/back4app.module';
import { CitiesModule } from './modules/cities/cities.module';


@Module({
  imports: [DatabaseModule, CountriesModule, Back4AppModule, CitiesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
