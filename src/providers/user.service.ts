import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { ConstantService } from './constant.service';
import { User } from '../models/user';

@Injectable()
export class UserService {

    constructor(
        public http: Http,
        public constantService: ConstantService
    ) { 

    }

    
}