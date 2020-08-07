import { Injectable, HttpException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { SignInDto, SignUpDto } from './dto/auth.dto';
import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';


@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) { }

  async signIn(signInDto: SignInDto) {
    const { email, password } = signInDto;
    const user = await this.usersService.getUserByEmail(email);
    if (!user) {
      throw new HttpException('User not found by provided email', 404);
    }
    if (await bcrypt.compare(password, user.password)) {
      const token = `${jwt.sign({
        id: user.id,
        role: user.role,
        email: user.email
      }, 'secret', { expiresIn: '24h' })}`;
      return { "token": token };
    }
    else
      throw new HttpException('Password incorect', 400);
  }

  async signUp(signUpDto: SignUpDto) {
    // const { email } = signUpDto;
    // if (await this.usersService.getUserByEmail(email)) {
    //   throw new HttpException('This email already in use', 400)
    // }
    return this.usersService.create(signUpDto);
  }
}
