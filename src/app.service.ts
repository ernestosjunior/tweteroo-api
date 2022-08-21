import { Injectable } from '@nestjs/common';
import apiInfo from '../api-info';

@Injectable()
export class AppService {
  getHello(): any {
    return apiInfo;
  }
}
