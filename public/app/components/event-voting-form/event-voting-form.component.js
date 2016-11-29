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
// import { EventVotingFormService } from './event-voting-form.service';
var createPoll_repository_service_1 = require('../repository/createPoll-repository.service');
var EventVotingFormComponent = (function () {
    function EventVotingFormComponent(route, router, createEventPollService) {
        this.route = route;
        this.router = router;
        this.createEventPollService = createEventPollService;
    }
    EventVotingFormComponent.prototype.ngOnInit = function () {
        this.creatorFirstName = "Rob";
        this.creatorLastName = "Stark";
        this.eventTitle = "Battle";
        this.locations = ["SMU", "Somewehre else", "Chickfila"];
        this.times = ["date1", "date2", "Date3"];
        this.emails = ["fjs@smu.edu, asdf@smu.edu"];
        this.description = "A battle yayayay with swords and people and alcohol and food and things in game of thrones. Need more text text text tesxt";
        this.coverCharge = 25;
        this.askDonations = true;
        this.askNeedPickup = true;
        this.askCanDrive = true;
        this.deadline = "tomorrow";
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
        this.response = this.createEventPollService.submitVote(vote);
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