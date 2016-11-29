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
var PollResultsFormComponent = (function () {
    // selectedLocation: string;
    // selectedTime: Date;
    // selectedEmails: string[];
    function PollResultsFormComponent(route, router, service) {
        this.route = route;
        this.router = router;
        this.service = service;
    }
    PollResultsFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.selectedLocation = "default";
        // this.selectedTime = "default";
        // this.selectedEmails = this.emails.slice();
        this.route.params.forEach(function (x) { return _this.load(x['id']); });
    };
    PollResultsFormComponent.prototype.submit = function () {
        console.log("sending Invites");
        // console.log(this.selectedLocation);
        // console.log(this.selectedTime);
        // console.log(this.selectedEmails);
    };
    // selectLocation(location: string) {
    // 	this.selectedLocation = location;
    // }
    //
    // selectTime(time: string) {
    // 	this.selectedTime = time;
    // }
    //
    // selectEmail(email: string) {
    // 	if (this.selectedEmails.indexOf(email) > -1) {
    // 		this.selectedEmails.splice(this.selectedEmails.indexOf(email), 1);
    // 	} else {
    // 		this.selectedEmails.push(email);
    // 	}
    // }
    PollResultsFormComponent.prototype.load = function (id) {
        var _this = this;
        if (!id) {
            return;
        }
        var onload = function (data) {
            console.log(data);
            if (data) {
                _this.eventTitle = data.eventTitle;
                _this.locations = data.locations;
                // this.times = data.times.map(function(time) {
                // 	time = new Date(time);
                // 	return time;
                // });
                _this.times = data.times;
                _this.emails = data.emails;
                _this.description = data.description;
                _this.coverCharge = data.coverCharge;
            }
        };
        this.service.getResults(id).then(onload);
    };
    PollResultsFormComponent = __decorate([
        core_1.Component({
            selector: 'poll-results-form',
            templateUrl: './app/components/poll-results-form/poll-results-form.component.html',
            styleUrls: ['./app/components/poll-results-form/poll-results-form.component.css'],
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, createPoll_repository_service_1.CreateEventPollService])
    ], PollResultsFormComponent);
    return PollResultsFormComponent;
}());
exports.PollResultsFormComponent = PollResultsFormComponent;
//# sourceMappingURL=poll-results-form.component.js.map