import { Controller, Post, Body, HttpCode, Param } from '@nestjs/common';
import { AuthService } from './auth.service';
// import { User } from './interfaces/users.interface';
import { SignInDto, SignUpDto } from './dto/auth.dto';


@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/signIn')
  signIn(@Body() signInDto: SignInDto) {
    return this.authService.signIn(signInDto);
  }

  @Post('/signUp')
  signUp(@Body() signUpDto: SignUpDto) {
    return this.authService.signUp(signUpDto);
  }

}
