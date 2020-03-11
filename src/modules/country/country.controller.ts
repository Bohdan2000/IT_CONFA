import { Controller, Get, Post, Body } from '@nestjs/common';
import { CountriesService } from './country.service';
import { Country } from './interfaces/country.interface';
import { CreateCountryDto } from './dto/country.dto';


@Controller('countries')
export class CountriesController {
  constructor(private readonly countriesService: CountriesService) {}

  @Get()
  getAllCountries(): Promise<Country[]> {
    return this.countriesService.findAll();
  }

  @Post()
  createCountry(@Body() createCountryDto: CreateCountryDto): Promise<Country> {
    return this.countriesService.create(createCountryDto);
  }
}
