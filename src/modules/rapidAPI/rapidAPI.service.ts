import { Injectable, HttpService } from '@nestjs/common';
import APP_CONFIG from '../../config/app.config';
import { RapidAPI_AUTH_HEADERS } from '../core/constants/rapidAPI-constants';

@Injectable()
export class RapidAPIService {
  constructor(private readonly http: HttpService) { }

  public async getAllCitiesFromRapidAPI(code: string) { //add code to URL default UA(Ukraine)
    const { data } = await this.http
      .get(
        `${APP_CONFIG.RAPID_API_CITIES_URL}`,
        {
          headers: RapidAPI_AUTH_HEADERS,
        },
      )
      .toPromise();
    return data;
  }

  public async getAllCountriesFromRapidAPI() {
    const { data } = await this.http
      .get(
        `${APP_CONFIG.RAPID_API_COUNTRIES_URL}`,
        {
          headers: RapidAPI_AUTH_HEADERS,
        },
      )
      .toPromise();
    return data;
  }

}
