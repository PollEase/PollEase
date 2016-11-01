import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs/Observable';
import { Configuration } from '../../app.constants';
 
@Injectable()
export class CreateEventPollFormService {
 
    private actionUrl: string;
    private headers: Headers;
 
    constructor(private _http: Http, private _configuration: Configuration) {
 
        this.actionUrl = _configuration.ServerWithApiUrl + 'createpoll/';
 
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }

    public Add = (itemName: string): Observable<MyTypedItem> => {
        let toAdd = JSON.stringify({ ItemName: itemName });
 
        return this._http.post(this.actionUrl, toAdd, { headers: this.headers })
            .map((response: Response) => <MyTypedItem>response.json())
            .catch(this.handleError);
    }

     private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}