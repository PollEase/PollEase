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
var PollResultsFormComponent = (function () {
    function PollResultsFormComponent(route, router) {
        this.route = route;
        this.router = router;
    }
    PollResultsFormComponent.prototype.ngOnInit = function () {
        this.eventTitle = "Battle";
        this.locations = [
            {
                "name": "Fondren",
                "voters": [
                    {
                        "firstName": "Luke",
                        "lastName": "Oglesbee",
                    },
                    {
                        "firstName": "Bob",
                        "lastName": "Sponge",
                    }
                ]
            },
            {
                "name": "Caruth",
                "voters": [
                    {
                        "firstName": "Luke",
                        "lastName": "Oglesbee",
                    },
                ]
            }
        ];
        this.times = ["date1", "date2", "Date3"];
        this.emails = ["fjs@smu.edu", "asdf@smu.edu", "idk@smu.edu", "hello@smu.edu"];
        this.description = "A battle yayayay with swords and people and alcohol and food and things in game of thrones. Need more text text text tesxt";
        this.coverCharge = 25;
        this.deadline = "tomorrow";
        this.selectedLocation = "default";
        this.selectedTime = "default";
        this.selectedEmails = this.emails.slice();
    };
    PollResultsFormComponent.prototype.submit = function () {
        console.log("sending Invites");
        console.log(this.selectedLocation);
        console.log(this.selectedTime);
        console.log(this.selectedEmails);
    };
    PollResultsFormComponent.prototype.selectLocation = function (location) {
        this.selectedLocation = location;
    };
    PollResultsFormComponent.prototype.selectTime = function (time) {
        this.selectedTime = time;
    };
    PollResultsFormComponent.prototype.selectEmail = function (email) {
        if (this.selectedEmails.indexOf(email) > -1) {
            this.selectedEmails.splice(this.selectedEmails.indexOf(email), 1);
        }
        else {
            this.selectedEmails.push(email);
        }
    };
    PollResultsFormComponent = __decorate([
        core_1.Component({
            selector: 'poll-results-form',
            templateUrl: './app/components/poll-results-form/poll-results-form.component.html',
            styleUrls: ['./app/components/poll-results-form/poll-results-form.component.css'],
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router])
    ], PollResultsFormComponent);
    return PollResultsFormComponent;
}());
exports.PollResultsFormComponent = PollResultsFormComponent;
//# sourceMappingURL=poll-results-form.component.js.map