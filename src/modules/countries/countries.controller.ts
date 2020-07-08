import { Controller, Get, Post, Body, HttpCode, Delete, Param, UseGuards } from '@nestjs/common';
import { CountriesService } from './countries.service';
import { Country } from './interfaces/country.interface';
import { CreateCountryDto } from './dto/country.dto';
import { AuthGuard } from '../auth/auth.guard';


@Controller('countries')
export class CountriesController {
  constructor(private readonly countriesService: CountriesService) {}

  @Get()
  @UseGuards(AuthGuard)
  getAllCountries(): Promise<Country[]> {
    return this.countriesService.findAll();
  }

  @Post()
  @HttpCode(201)
  @UseGuards(AuthGuard)
  createCountry(@Body() createCountryDto: CreateCountryDto): Promise<Country> {
    try {
      console.log(createCountryDto);
      return this.countriesService.create(createCountryDto);
    } catch (err) {
      console.log(err);
    }
  }

  @Delete(':id')
  deleteCountry(@Param('id') id: string) {
    return this.countriesService.delete(id);
  }

}
