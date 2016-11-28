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
var createRepoService = (function () {
    function createRepoService() {
        // console.log("go there");
        this._event = {};
        this._loc = [];
        this._time = [];
    }
    createRepoService.prototype.addLoc = function (loc) {
        this._loc.push(loc);
        loc = "";
        // console.log("addLoc "+this._loc);
    };
    createRepoService.prototype.remLoc = function (loc) {
        var index = this._loc.findIndex(function (location) { return (location === loc); });
        if (index != -1) {
            this._loc.splice(index, 1);
        }
    };
    createRepoService.prototype.addTime = function (time) {
        this._time.push(time);
        time = "";
        // console.log("addTime "+this._time);
    };
    createRepoService.prototype.remTime = function (index) {
        this._time.splice(index, 1);
    };
    createRepoService.prototype.create = function (event) {
        this._event = event;
        this._loc = [];
        this._time = [];
        // console.log(this._event.creator.name+" FROM CREATE");
        // console.log(this._event.creator.email+" FROM CREATE");
        // console.log(this._event.locations+" FROM CREATE");
    };
    createRepoService.prototype.getEvent = function () {
        // console.log(this._event);
        return this._event;
    };
    createRepoService.prototype.getLoc = function () {
        // console.log("getLoc "+this._loc);
        return this._loc;
    };
    createRepoService.prototype.getTime = function () {
        return this._time;
    };
    createRepoService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], createRepoService);
    return createRepoService;
}());
exports.createRepoService = createRepoService;
//# sourceMappingURL=createPoll-repository.service.js.map