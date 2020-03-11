import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Country } from './interfaces/country.interface';
import { CreateCountryDto } from './dto/country.dto';

@Injectable()
export class CountriesService {
  constructor(@InjectModel('Country') private readonly countryModel: Model<Country>) {}

  async create(createCountryDto: CreateCountryDto): Promise<Country> {
    const createdCountry = new this.countryModel(createCountryDto);
    return createdCountry.save();
  }

  async findAll(): Promise<Country[]> {
    return this.countryModel.find().exec();
  }
}
