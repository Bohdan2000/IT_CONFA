import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  sex: String,
  email: String,
  password: String,
  role: String
},
{versionKey: false} );

