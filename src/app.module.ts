import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CountriesModule } from './modules/country/country.module';
import { DatabaseModule } from './modules/database/database.module';


@Module({
  imports: [DatabaseModule, CountriesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
