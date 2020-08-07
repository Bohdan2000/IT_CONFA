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
      const request = context.switchToHttp().getRequest();
      if (!request.headers.authorization) {
        throw new UnauthorizedException();
      }

      const { id, role, email } = jwt.verify(request.headers.authorization, APP_CONFIG.SECRET_KEY);
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
