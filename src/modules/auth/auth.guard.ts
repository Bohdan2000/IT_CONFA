import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import APP_CONFIG from '../../config/app.config';
import * as jwt from 'jsonwebtoken';
import { Reflector } from '@nestjs/core';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate( context: ExecutionContext ): boolean | Promise<boolean> | Observable<boolean> {
    try {
      console.log('123123123');
      const request = context.switchToHttp().getRequest();
      console.log(request.headers);
      if (!request.headers.authorization) {
        console.log('3323');
        throw new UnauthorizedException();
      }
      console.log('1234445555');
      const { id, role, email } = jwt.verify(request.headers.authorization, APP_CONFIG.SECRET_KEY);

      console.log('3555555');
      if (!id) {
        return false; 
      }
      request.userData = { id, role, email };
      return true;
    } catch (err) {
      throw new UnauthorizedException();
    }
  }
}
