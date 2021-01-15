import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import config from '../../config/app.config';
import * as jwt from 'jsonwebtoken';
import { Reflector } from '@nestjs/core';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) { }

  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    try {
      const request = context.switchToHttp().getRequest();
      if (!request.headers.authorization) {
        throw new UnauthorizedException();
      }
      const { id, role, email } = jwt.verify(request.headers.authorization, config.SECRET_KEY);
      if (!id) {
        return false;
      }
      request.userData = { id, role, email };
      return true;
    } catch (err) {
      console.log(err.message);
      throw new UnauthorizedException();
    }
  }
}
