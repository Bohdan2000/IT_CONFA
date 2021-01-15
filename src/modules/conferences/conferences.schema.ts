import * as mongoose from 'mongoose';

export const ConferenceSchema = new mongoose.Schema({
  name: String,
  description: String,
  location: {
    country: String,
    city: String,
    longitude: Number,
    latitude: Number
  },
  price: Number,
  speakers: [],
  owner_id: String
},
{versionKey: false} );
  
