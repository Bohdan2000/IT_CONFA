import { IsNotEmpty, IsEmail } from 'class-validator';

export class SignUpDto {
  @IsNotEmpty()
  firstName: string;
  @IsNotEmpty()
  lastName: string;
  @IsEmail()
  email: string;
  @IsNotEmpty()
  password: string;
  @IsNotEmpty()
  sex: string;
  @IsNotEmpty()
  role: string;
}


export class SignInDto {
  @IsEmail()
  email: string;
  @IsNotEmpty()
  password: string;
}