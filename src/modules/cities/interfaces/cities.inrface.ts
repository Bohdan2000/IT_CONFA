import { LocationDto } from "../dto/cities.dto";

export interface City {
  _id: String;
  name: string;
  location: LocationDto;
  cityId: Number;
  country: String;
  countryCode: String;
  featureCode: String;
  population: Number ;
}