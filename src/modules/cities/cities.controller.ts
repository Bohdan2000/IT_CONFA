import { Controller, Get, Post, Body, HttpCode, Delete, Param } from '@nestjs/common';
import { CitiesService } from './cities.service';
import { City } from './interfaces/cities.inrface';
import { CreateCityDto } from './dto/cities.dto';


@Controller('cities')
export class CitiesController {
  constructor(private readonly countriesService: CitiesService) {}

  @Get()
  getAllCountries(): Promise<City[]> {
    return this.countriesService.findAll();
  }

  // @Post()
  // @HttpCode(201)
  // createCountry(@Body() createCountryDto: CreateCountryDto): Promise<Country> {
  //   try {
  //     console.log(createCountryDto);
  //     return this.countriesService.create(createCountryDto);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  // @Delete(':id')
  // deleteCountry(@Param('id') id: string) {
  //   return this.countriesService.delete(id);
  // }

}
