import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CountriesModule } from './modules/country/country.module';
import { DatabaseModule } from './modules/database/database.module';
import { Back4AppModule } from './modules/back4app/back4app.module';


@Module({
  imports: [DatabaseModule, CountriesModule, Back4AppModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
