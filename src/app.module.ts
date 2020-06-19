import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CountriesModule } from './modules/countries/countries.module'
import { DatabaseModule } from './modules/database/database.module';
import { Back4AppModule } from './modules/back4app/back4app.module';
import { CitiesModule } from './modules/cities/cities.module';
import { UsersModule } from './modules/users/users.module';



@Module({
  imports: [DatabaseModule, CountriesModule, Back4AppModule, CitiesModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
