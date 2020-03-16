import * as mongoose from 'mongoose';
import { LocationDto } from './dto/cities.dto';

export const CitySchema = new mongoose.Schema({
  location:  LocationDto ,
  cityId: Number,
  name: String,
  country: String,
  countryCode: String,
  featureCode: String,
  population: Number },
{versionKey: false} );