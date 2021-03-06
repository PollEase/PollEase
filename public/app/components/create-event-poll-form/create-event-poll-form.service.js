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
var CreateEventPollFormService = (function () {
    function CreateEventPollFormService(http) {
        this.http = http;
        //InMemoryModule
        // private _apiUrl = 'app/events';
        //localhost
        // private _apiUrl = 'http://localhost:8000';
        //Apiary
        this._apiUrl = 'http://private-a1931-dbgui1.apiary-mock.com';
    }
    CreateEventPollFormService.prototype.extractData = function (res) {
        var body = res.json();
        return body.data;
    };
    CreateEventPollFormService.prototype.handleError = function (error) {
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
    CreateEventPollFormService.prototype.createEventPoll = function (poll) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http
            .post(this._apiUrl + '/createPoll', poll, options)
            .toPromise()
            .then(function (x) { return x.json(); })
            .catch(this.handleError);
    };
    CreateEventPollFormService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], CreateEventPollFormService);
    return CreateEventPollFormService;
}());
exports.CreateEventPollFormService = CreateEventPollFormService;
//# sourceMappingURL=create-event-poll-form.service.js.map