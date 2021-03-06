import { Controller, Get, Post, Body, HttpCode, Delete, Param } from '@nestjs/common';
import { CitiesService } from './cities.service';
import { City } from './interfaces/cities.interface';
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
      return this.citiesService.create(createCityDto);
    } catch (err) {
      console.log(err);
    }
  }

  @Post(':Code')
  saveCitiesFromAPI(@Param('Code') code: string): Promise<City[]> {
    try {
      return this.citiesService.saveCitiesFromAPI(code);
    } catch (err) {
      console.log(err);
    }
  }

  @Delete(':id')
  deleteCity(@Param('id') id: string) {
    return this.citiesService.delete(id);
  }
}
