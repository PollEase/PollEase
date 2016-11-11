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
require('rxjs/add/operator/toPromise');
require('rxjs/add/operator/catch');
require('rxjs/add/operator/map');
require('rxjs/add/observable/throw');
var CreateEventPollFormService = (function () {
    function CreateEventPollFormService(http) {
        this.http = http;
        //InMemoryModule
        // private _apiUrl = 'app/events';
        //localhost
        // private _apiUrl = 'http://localhost:3000/createPoll';
        //Apiary
        this._apiUrl = 'https://private-a1931-dbgui1.apiary-mock.com/createPoll';
    }
    CreateEventPollFormService.prototype.createEventPoll = function (poll) {
        this.http
            .post(this._apiUrl, poll)
            .toPromise();
    };
    CreateEventPollFormService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], CreateEventPollFormService);
    return CreateEventPollFormService;
}());
exports.CreateEventPollFormService = CreateEventPollFormService;
//# sourceMappingURL=create-event-poll-form.service.js.map