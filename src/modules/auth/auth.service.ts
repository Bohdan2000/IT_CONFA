import { Injectable, HttpException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { SignInDto, SignUpDto } from './dto/auth.dto';
import * as jwt from 'jsonwebtoken';
import * as base64 from 'base-64';


@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) { }

  async signIn(signInDto: SignInDto) {
    const { email, password } = signInDto;
    const user = await this.usersService.getUserByEmail(email);
    if (!user) {
      throw new HttpException('User not found by provided email', 404);
    }
    console.log('qwdqw', base64.decode(user.password) === password, base64.decode(user.password));
    if (base64.decode(user.password) === password) {
      const token = `${jwt.sign({
        id: user.id,
        role: user.role,
        email: user.email
      }, 'secret')}`;
      return { "token": token };
    }
    else
      throw new HttpException('Password incorect', 400);
  }

  async signUp(signUpDto: SignUpDto) {
    const { email, password } = signUpDto;
    signUpDto.password = base64.encode(password);
    if (await this.usersService.getUserByEmail(email)) {
      throw new HttpException('This email already in use', 400)
    }
    return this.usersService.create(signUpDto);
  }
}
