import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { ConstantService } from './constant.service';

@Injectable()
export class AuthService {

    authUrl: string;

    constructor(
        public http: Http,
        public constantService: ConstantService
    ) {
        this.authUrl = this.constantService.API_ENDPOINT + '/auth';
    }

    authenticate(): void {}

    private extractData(res: Response) {
        let body = res.json();
        return body.data || { };
    }
    
    private handleError(error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}