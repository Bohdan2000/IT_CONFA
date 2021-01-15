import { Controller, Get, Param } from '@nestjs/common';
import { RapidAPIService } from './rapidAPI.service';


@Controller('RapidAPI')
export class RapidAPIController {
  constructor(private readonly rapidAPIService: RapidAPIService) {}

  @Get('/cities/:Code')
  getAllCities(@Param('Code') code: string) {
    return this.rapidAPIService.getAllCitiesFromRapidAPI(code);
  }

  @Get('/countries')
  getAllCountries() {
    return this.rapidAPIService.getAllCountriesFromRapidAPI();
  }

}
