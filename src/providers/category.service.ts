import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { ConstantService } from './constant.service';
import { Category } from '../models/category';

@Injectable()
export class CategoryService {

    categoryUrl: string;

    constructor(
        public http: Http,
        public constantService: ConstantService
    ) {
        this.categoryUrl = this.constantService.API_ENDPOINT + '/categories';
    }

    getList(): void {}

    add(category: Category): Observable<Category> {
        let body = JSON.stringify(category);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.categoryUrl, body, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    update(): void {}

    delete(): void {}

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