import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class CreateEventPollFormService {
 
    //InMemoryModule
    // private _apiUrl = 'app/events';

    //localhost
    // private _apiUrl = 'http://localhost:3000/createPoll';

    //Apiary
    private _apiUrl = 'https://private-a1931-dbgui1.apiary-mock.com/createPoll';

    constructor(private http: Http) { }

    createEventPoll(poll) {

        this.http
            .post(this._apiUrl, poll)
            .toPromise();
    }
}