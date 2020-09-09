import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CountriesModule } from './modules/countries/countries.module'
import { DatabaseModule } from './modules/database/database.module';
import { RapidAPIModule } from './modules/core/thirdPartyAPIs/rapidAPI/rapidAPI.module';
import { CitiesModule } from './modules/cities/cities.module';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { ConferencesModule } from './modules/conferences/conferences.module';




@Module({
  imports: [DatabaseModule, CountriesModule, RapidAPIModule, CitiesModule, UsersModule, AuthModule, ConferencesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
