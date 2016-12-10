import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { ConstantService } from './constant.service';
import { User } from '../models/user';

@Injectable()
export class UserService {

    userUrl: string;

    constructor(
        public http: Http,
        public constantService: ConstantService
    ) {
        this.userUrl = this.constantService.API_ENDPOINT + '/users';
    }

    get(): void {}

    add(user: User): Observable<User> {
        let body = JSON.stringify(user);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.userUrl, body, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    update(): void {}

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