import * as mongoose from 'mongoose';

export const CitySchema = new mongoose.Schema({
  latitude: Number,
  longitude: Number,
  geonameid: Number,
  name: String,
  timezone: String,
  population: Number
}, { versionKey: false });