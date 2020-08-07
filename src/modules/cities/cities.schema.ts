import * as mongoose from 'mongoose';

export const CitySchema = new mongoose.Schema({
  location:  {
    __type: String,
    latitude: Number,
    longitude: Number,
  } ,
  cityId: Number,
  name: String,
  country: String,
  countryCode: String,
  featureCode: String,
  population: Number },
{versionKey: false} );