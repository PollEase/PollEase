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
export class EventRepositoryService {
 
    //InMemoryModule
    // private _apiUrl = 'app/events';

    //localhost
    // private _apiUrl = 'http://localhost:8000';

    //Apiary
    private _apiUrl = 'http://private-a1931-dbgui1.apiary-mock.com';

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

    //add
    createEventPoll(poll) : Promise<any> {

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http
            .post(this._apiUrl + '/createPoll', poll, options)
            .toPromise()
            .then(x => x.json())
            .catch(this.handleError);
    }

    get(id : number) : Promise<any> {

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

		var pluck = x => (x && x.length) ? x[0] : undefined;
		return this.http
			.get(`${this._apiUrl + '/events'}/?id=${id}`)
			.toPromise()
			.then(x => pluck(x.json().data))
			.catch(x => alert(x.json().error));
	}

	update(event) : Promise<any> {

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
		
        return this.http
			.put(`${this._apiUrl + '/events' }/${event.id}`, event)
			.toPromise()
			.then(() => event)
			.catch(x => alert(x.json().error));
	}

    emailAllPolls(email) : Promise<any> {

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http
            .post(this._apiUrl + '/email', JSON.stringify(email), options)
            .toPromise()
            .then(x => x.json())
            .catch(this.handleError);
    }

	// delete(id : number) : Promise<any> {

    //     let headers = new Headers({ 'Content-Type': 'application/json' });
    //     let options = new RequestOptions({ headers: headers });
		
	// 	return this.http
	// 		.delete(`${this._apiUrl + '/events'}/${id}`)
	// 		.toPromise()
	// 		.catch(x => alert(x.json().error));
	// }
}