import { Controller, Get, Post, Body, HttpCode, Delete, Param } from '@nestjs/common';
import { CitiesService } from './cities.service';
import { City } from './interfaces/cities.inrface';
import { CreateCityDto } from './dto/cities.dto';


@Controller('cities')
export class CitiesController {
  constructor(private readonly citiesService: CitiesService) {}

  @Get()
  getAllCities(): Promise<City[]> {
    return this.citiesService.findAll();
  }

  @Post()
  @HttpCode(201)
  createCity(@Body() createCityDto: CreateCityDto): Promise<City> {
    try {
      console.log(createCityDto);
      return this.citiesService.create(createCityDto);
    } catch (err) {
      console.log(err);
    }
  }

  @Delete(':id')
  deleteCity(@Param('id') id: string) {
    return this.citiesService.delete(id);
  }
}
