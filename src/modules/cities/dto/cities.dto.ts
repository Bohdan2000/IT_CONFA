import { IsNotEmpty } from 'class-validator';

export class CreateCityDto {
  @IsNotEmpty()
  latitude: Number;
  @IsNotEmpty()
  longitude: Number;
  @IsNotEmpty()
  geonameid: Number;
  @IsNotEmpty()
  name: String;
  @IsNotEmpty()
  timezone: String;
  @IsNotEmpty()
  population: Number;
}
