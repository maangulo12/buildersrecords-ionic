import { Injectable } from '@angular/core';

@Injectable()
export class ConstantService {
    
    API_ENDPOINT: string;

    constructor() {
      this.API_ENDPOINT = 'https://buildersrecords-api-staging.herokuapp.com/api';
    }
}