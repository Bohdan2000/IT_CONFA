import { IsNotEmpty } from 'class-validator';

export class LocationDto {
  __type: String;
  latitude: Number;
  longitude: Number;
}


export class CreateCityDto {
  @IsNotEmpty()
  location: LocationDto;
  @IsNotEmpty()
  cityId: Number;
  @IsNotEmpty()
  name: String;
  @IsNotEmpty()
  country: String;
  @IsNotEmpty()
  countryCode: String;
  @IsNotEmpty()
  featureCode: String;
  @IsNotEmpty()
  population: Number ;
}
