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
export class CreateEventPollService{
    private _event: any;

    //InMemoryModule
    // private _apiUrl = 'app/events';

    //localhost
    private _apiUrl = 'http://localhost:8000/createPoll';

    //Apiary
    // private _apiUrl = 'http://private-a1931-dbgui1.apiary-mock.com/createPoll';

    constructor(private http: Http) {
        this._event = {};
        this._event.creatorName = "";
		this._event.creatorEmail = "";
		this._event.eventTitle = "";
		this._event.description = "";
		this._event.pollDeadline = "";
		this._event.locations = [];
		this._event.times = [];
		this._event.emails = [];
		this._event.coverCharge = 0;
	}

    public store(event) {
        this._event.creatorName = event.creatorName;
        this._event.creatorEmail = event.creatorEmail;
        this._event.eventTitle = event.eventTitle;
        this._event.description = event.description;
        this._event.pollDeadline = event.pollDeadline;
        // this._event.locations = event.locations;
        // this._event.times = event.times;
        // this._event.emails = event.emails;
        this._event.coverCharge = event.coverCharge;
    }

    public getEvent() {
        return this._event;
    }

    private extractData(res: Response) {
        let body = res.json();
        return body.data;
    }

    private handleError(error: Response | any) {
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

    createEventPoll() : Promise<any> {

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http
            .post(this._apiUrl, this._event, options)
            .toPromise()
            .then(x => x.json())
            .catch(this.handleError);
    }


    public addLocation(location) {
        this._event.locations.push(location);
        return this._event.locations;
    }

    public removeLocation(location) {
        var index = this._event.locations.findIndex((loc) => (loc===location));
        if(index != -1) {
            this._event.locations.splice(index, 1);
        }
        return this._event.locations;
    }

    public getLocations() {
        return this._event.locations;
    }

    public addEmail(email) {
        this._event.emails.push(email);
        return this._event.emails;
    }

    public removeEmail(email) {
        var index = this._event.emails.findIndex((em) => (em===email));
        if(index != -1) {
            this._event.emails.splice(index, 1);
        }
        return this._event.emails;
    }

    public getEmails() {
        return this._event.emails;
    }

    public addTime(time) {
        this._event.times.push(time);
        return this._event.times;
    }

    public removeTime(time) {
        var index = this._event.times.findIndex((ti) => (ti===time));
        if(index != -1) {
            this._event.times.splice(index, 1);
        }
        return this._event.times;
    }

    public getTimes() {
        return this._event.times;
    }

}
