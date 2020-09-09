import { IsNotEmpty } from 'class-validator';

export class CreateConferenceDto {
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  description: string;
  @IsNotEmpty()
  location: {
    country: string,
    city: string,
    longitude: number
    latitude: number
  };
  @IsNotEmpty()
  price: number;
  speakers: [];
  @IsNotEmpty()
  owner_id: string;
}


export class UpdateConferenceDto {
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  description: string;
  @IsNotEmpty()
  location: {
    country: string,
    city: string,
    longitude: number
    latitude: number
  };
  @IsNotEmpty()
  price: number;
  speakers: [];
  @IsNotEmpty()
  owner_id: string;
}