import { Controller, Get, Post, Body, HttpCode, Delete, Param } from '@nestjs/common';
import { Back4AppService } from './back4app.service';


@Controller('back4app')
export class Back4AppController {
  constructor(private readonly back4AppService: Back4AppService) {}

  @Get()
  getAllCountries() {
    return this.back4AppService.getAllCitiesFromBack4App();
  }

}
