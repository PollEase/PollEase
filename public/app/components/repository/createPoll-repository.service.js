"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/observable/throw');
require('rxjs/add/operator/catch');
require('rxjs/add/operator/debounceTime');
require('rxjs/add/operator/distinctUntilChanged');
require('rxjs/add/operator/map');
require('rxjs/add/operator/switchMap');
require('rxjs/add/operator/toPromise');
var CreateEventPollService = (function () {
    //Apiary
    // private _apiUrl = 'http://private-a1931-dbgui1.apiary-mock.com/createPoll';
    function CreateEventPollService(http) {
        this.http = http;
        //InMemoryModule
        // private _apiUrl = 'app/events';
        //localhost
        this._apiUrl = 'http://localhost:8000/createPoll';
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
    CreateEventPollService.prototype.store = function (event) {
        this._event.creatorName = event.creatorName;
        this._event.creatorEmail = event.creatorEmail;
        this._event.eventTitle = event.eventTitle;
        this._event.description = event.description;
        this._event.pollDeadline = event.pollDeadline;
        // this._event.locations = event.locations;
        // this._event.times = event.times;
        // this._event.emails = event.emails;
        this._event.coverCharge = event.coverCharge;
    };
    CreateEventPollService.prototype.getEvent = function () {
        return this._event;
    };
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Http Stuff
    CreateEventPollService.prototype.extractData = function (res) {
        var body = res.json();
        return body.data;
    };
    CreateEventPollService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        var errMsg;
        if (error instanceof http_1.Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Promise.reject(errMsg);
    };
    CreateEventPollService.prototype.createEventPoll = function () {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http
            .post(this._apiUrl, this._event, options)
            .toPromise()
            .then(function (x) { return x.json(); })
            .catch(this.handleError);
    };
    CreateEventPollService.prototype.get = function (id) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var pluck = function (x) { return (x && x.length) ? x[0] : undefined; };
        return this.http
            .get((this._apiUrl + '/events') + "/?id=" + id)
            .toPromise()
            .then(function (x) { return pluck(x.json().data); })
            .catch(function (x) { return alert(x.json().error); });
    };
    CreateEventPollService.prototype.update = function (event) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http
            .put((this._apiUrl + '/events') + "/" + event.id, event)
            .toPromise()
            .then(function () { return event; })
            .catch(function (x) { return alert(x.json().error); });
    };
    CreateEventPollService.prototype.emailAllPolls = function (email) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http
            .post(this._apiUrl + '/email', JSON.stringify(email), options)
            .toPromise()
            .then(function (x) { return x.json(); })
            .catch(this.handleError);
    };
    // delete(id : number) : Promise<any> {
    //     let headers = new Headers({ 'Content-Type': 'application/json' });
    //     let options = new RequestOptions({ headers: headers });
    // 	return this.http
    // 		.delete(`${this._apiUrl + '/events'}/${id}`)
    // 		.toPromise()
    // 		.catch(x => alert(x.json().error));
    // }
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Picker Functions
    CreateEventPollService.prototype.addLocation = function (location) {
        this._event.locations.push(location);
        return this._event.locations;
    };
    CreateEventPollService.prototype.removeLocation = function (location) {
        var index = this._event.locations.findIndex(function (loc) { return (loc === location); });
        if (index != -1) {
            this._event.locations.splice(index, 1);
        }
        return this._event.locations;
    };
    CreateEventPollService.prototype.getLocations = function () {
        return this._event.locations;
    };
    CreateEventPollService.prototype.addEmail = function (email) {
        this._event.emails.push(email);
        return this._event.emails;
    };
    CreateEventPollService.prototype.removeEmail = function (email) {
        var index = this._event.emails.findIndex(function (em) { return (em === email); });
        if (index != -1) {
            this._event.emails.splice(index, 1);
        }
        return this._event.emails;
    };
    CreateEventPollService.prototype.getEmails = function () {
        return this._event.emails;
    };
    CreateEventPollService.prototype.addTime = function (time) {
        this._event.times.push(time);
        return this._event.times;
    };
    CreateEventPollService.prototype.removeTime = function (time) {
        var index = this._event.times.findIndex(function (ti) { return (ti === time); });
        if (index != -1) {
            this._event.times.splice(index, 1);
        }
        return this._event.times;
    };
    CreateEventPollService.prototype.getTimes = function () {
        return this._event.times;
    };
    CreateEventPollService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], CreateEventPollService);
    return CreateEventPollService;
}());
exports.CreateEventPollService = CreateEventPollService;
//# sourceMappingURL=createPoll-repository.service.js.map