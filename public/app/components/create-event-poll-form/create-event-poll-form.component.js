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
var location_picker_component_1 = require('./../location-picker/location-picker.component');
var time_picker_component_1 = require('./../time-picker/time-picker.component');
var email_picker_component_1 = require('./../email-picker/email-picker.component');
var CreateEventPollFormComponent = (function () {
    function CreateEventPollFormComponent(route, router, locationPicker, timePicker, emailPicker, createEventPollService) {
        this.route = route;
        this.router = router;
        this.locationPicker = locationPicker;
        this.timePicker = timePicker;
        this.emailPicker = emailPicker;
        this.createEventPollService = createEventPollService;
    }
    CreateEventPollFormComponent.prototype.ngOnInit = function () {
        var event = this.createEventPollService.getEvent();
        console.log(event);
        this.creatorName = event.creatorName;
        this.creatorEmail = event.creatorEmail;
        this.eventTitle = event.eventTitle;
        this.description = event.description;
        this.pollDeadline = event.pollDeadline;
        this.coverCharge = event.coverCharge;
        // this.timePicker.setTimes(event.times);
        // this.emailPicker.setEmails(event.emails);
        // this.locationPicker.setLocations(event.locations);
    };
    CreateEventPollFormComponent.prototype.submit = function () {
        // var locations = this.locationPicker.getLocations();
        // var times = this.timePicker.getTimes();
        // var emails = this.emailPicker.getEmails();
        // console.log(this.emailPicker.emails);
        var event = {
            "creatorName": this.creatorName,
            "creatorEmail": this.creatorEmail,
            "eventTitle": this.eventTitle,
            "description": this.description,
            "pollDeadline": this.pollDeadline,
            // "locations": locations,
            // "times": times,
            // "emails": emails,
            "coverCharge": this.coverCharge
        };
        this.createEventPollService.store(event);
    };
    CreateEventPollFormComponent = __decorate([
        core_1.Component({
            selector: 'create-event-poll-form',
            templateUrl: './app/components/create-event-poll-form/create-event-poll-form.component.html',
            styleUrls: ['./app/components/create-event-poll-form/create-event-poll-form.component.css'],
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, location_picker_component_1.LocationPickerComponent, time_picker_component_1.TimePickerComponent, email_picker_component_1.EmailPickerComponent, createPoll_repository_service_1.CreateEventPollService])
    ], CreateEventPollFormComponent);
    return CreateEventPollFormComponent;
}());
exports.CreateEventPollFormComponent = CreateEventPollFormComponent;
//# sourceMappingURL=create-event-poll-form.component.js.map