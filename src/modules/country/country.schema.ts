import * as mongoose from 'mongoose';

export const CountrySchema = new mongoose.Schema({
  name: String,
},
{versionKey: false} );