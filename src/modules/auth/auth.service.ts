import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { SignInDto, SignUpDto } from './dto/auth.dto';
import * as jwt from 'jsonwebtoken';


@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async signIn(signInDto: SignInDto) {
    const { email, password } = signInDto;
    const user = await this.usersService.getUserByEmail(email);
    if(!user) {
      throw new Error('User not found by provided email');
    }
    if(user.password === password) {
      const token = `Bearer ${jwt.sign(signInDto, 'secret')}`;
      return {"token": token};
    }
    else 
      throw new Error('Password incorect'); 
  }

  async signUp(signUpDto: SignUpDto) {
    const { email } = signUpDto;
    if (await this.usersService.getUserByEmail(email)) {
      throw new Error('This email already in use')
    }
    return this.usersService.create(signUpDto);
  }
}
