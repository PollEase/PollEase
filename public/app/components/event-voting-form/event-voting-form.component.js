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
var router_1 = require('@angular/router');
var createPoll_repository_service_1 = require('../repository/createPoll-repository.service');
var EventVotingFormComponent = (function () {
    function EventVotingFormComponent(route, router, service) {
        this.route = route;
        this.router = router;
        this.service = service;
    }
    EventVotingFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (x) { return _this.load(x['id']); });
        this.selectedLocations = [];
        this.selectedTimes = [];
    };
    EventVotingFormComponent.prototype.submit = function () {
        console.log("submitting");
        console.log(this.selectedLocations);
        console.log(this.selectedTimes);
        var vote = {
            "uid": this.userId,
            "eventId": this.eventId,
            "times": this.selectedTimes,
            "locations": this.selectedLocations
        };
        this.response = this.service.submitVote(vote);
    };
    EventVotingFormComponent.prototype.selectLocation = function (location) {
        if (this.selectedLocations.indexOf(location) > -1) {
            this.selectedLocations.splice(this.selectedLocations.indexOf(location), 1);
        }
        else {
            this.selectedLocations.push(location);
        }
    };
    EventVotingFormComponent.prototype.selectTime = function (time) {
        if (this.selectedTimes.indexOf(time) > -1) {
            this.selectedTimes.splice(this.selectedTimes.indexOf(time), 1);
        }
        else {
            this.selectedTimes.push(time);
        }
    };
    EventVotingFormComponent.prototype.load = function (id) {
        var _this = this;
        if (!id) {
            return;
        }
        var onload = function (data) {
            if (data) {
                console.log(data);
                _this.creatorName = data.creatorName;
                _this.eventTitle = data.eventTitle;
                _this.pollDeadline = data.pollDeadline;
                _this.locations = data.locations;
                _this.times = data.times;
                _this.description = data.description;
                _this.coverCharge = data.coverCharge;
            }
        };
        this.service.getPoll(id).then(onload);
        this.eventId = id.substring(0, Math.floor(id.length / 2));
        console.log(this.eventId);
        this.userId = id.substring(Math.floor(id.length / 2));
        console.log(this.userId);
    };
    EventVotingFormComponent = __decorate([
        core_1.Component({
            selector: 'event-voting-form',
            templateUrl: './app/components/event-voting-form/event-voting-form.component.html',
            styleUrls: ['./app/components/event-voting-form/event-voting-form.component.css'],
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, createPoll_repository_service_1.CreateEventPollService])
    ], EventVotingFormComponent);
    return EventVotingFormComponent;
}());
exports.EventVotingFormComponent = EventVotingFormComponent;
//# sourceMappingURL=event-voting-form.component.js.map