import { Injectable, HttpService } from '@nestjs/common';
import APP_CONFIG from '../../config/app.config';
import { BACK4APP_AUTH_HEADERS } from '../core/constants/back4app-constants';

@Injectable()
export class Back4AppService {
  constructor(private readonly http: HttpService) {}

  public async getAllCitiesFromBack4App() {
    const { data }  = await this.http
      .get(
        `${APP_CONFIG.BACK4APP_BASE_URL}`,
        {
          headers: BACK4APP_AUTH_HEADERS,
        },
      )
      .toPromise();
    return data;
  }

}
