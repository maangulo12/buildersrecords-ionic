import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { User } from '../models/user';

@Injectable()
export class UserService {
    apiUrl = 'https://buildersrecords-api-staging.herokuapp.com';

    constructor(public http: Http) { }
}