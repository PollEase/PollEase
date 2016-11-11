import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CreateEventPollFormService {
 
    //InMemoryModule
    // private _apiUrl = 'app/events';

    //localhost
    // private _apiUrl = 'http://localhost:3000/createPoll';

    //Apiary
    private _apiUrl = 'http://private-a1931-dbgui1.apiary-mock.com/createPoll';

    constructor(private http: Http) { }

    private extractData(res: Response) {
        let body = res.json();
        return body.data;
    }

    private handleError (error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Promise.reject(errMsg);
    }

    createEventPoll(poll) : Promise<any> {

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http
            .post(this._apiUrl, poll, options)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    }
}