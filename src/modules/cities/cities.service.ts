import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { City } from './interfaces/cities.inrface';
import { CreateCityDto } from './dto/cities.dto';

@Injectable()
export class CitiesService {
  constructor(@InjectModel('City') private readonly cityModel: Model<City>) {}

  async create(createCityDto: CreateCityDto): Promise<City> {
    const createdCountry = new this.cityModel(createCityDto);
    return createdCountry.save();
  }

  async findAll(): Promise<City[]> {
    return this.cityModel.find().exec();
  }

  async delete(id: string) {
    return this.cityModel.findByIdAndRemove(id);
  }
}
