import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CountriesModule } from './modules/countries/countries.module'
import { DatabaseModule } from './modules/database/database.module';
import { RapidAPIModule } from './modules/rapidAPI/rapidAPI.module';
import { CitiesModule } from './modules/cities/cities.module';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { utilities as nestWinstonModuleUtilities, WinstonModule } from 'nest-winston';
import * as winston from 'winston';


@Module({
  imports: [DatabaseModule, 
    WinstonModule.forRoot({
    transports: [
      new winston.transports.Console({
        level: '30',
        handleExceptions: true,
        format: winston.format.combine(winston.format.splat(), winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss.SSSS' }), winston.format.colorize()),
    }),
      // other transports...
    ],
    // other options
  }) , CountriesModule, RapidAPIModule, CitiesModule, UsersModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
