import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { City } from './interfaces/cities.inrface';
import { CreateCityDto } from './dto/cities.dto';
import { RapidAPIService } from '../rapidAPI/rapidAPI.service';

@Injectable()
export class CitiesService {
  constructor(
    @InjectModel('City') private readonly cityModel: Model<City>,
    private readonly rapidAPIService: RapidAPIService) { }

  async create(createCityDto: CreateCityDto): Promise<City> {
    const createdCountry = new this.cityModel(createCityDto);
    return createdCountry.save();
  }

  async saveCitiesFromAPI(code: string): Promise<City[]> {
    const rapidAPIcities = await this.rapidAPIService.getAllCitiesFromRapidAPI(code); 
    rapidAPIcities.cities.forEach(el => {
      console.log(el);
      const createdCity = new this.cityModel(el);
      createdCity.save()
    });
    return this.findAll();
  }

  async findAll(): Promise<City[]> {
    return this.cityModel.find().exec();
  }

  async delete(id: string) {
    return this.cityModel.findByIdAndRemove(id);
  }
}
