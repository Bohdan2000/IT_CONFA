import { Controller, Get, Post, Body, HttpCode, Delete, Param } from '@nestjs/common';
import { AuthService } from './auth.service';
// import { User } from './interfaces/users.interface';
// import { CreateUserDto } from './dto/users.dto';


@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  SignIn(): String {
    return '0';
  }

  @Post()
  SignUp() {
    // return this.authService.findAll();
  }

}
