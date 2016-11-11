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
var location_picker_component_1 = require('./../location-picker/location-picker.component');
var time_picker_component_1 = require('./../time-picker/time-picker.component');
var email_picker_component_1 = require('./../email-picker/email-picker.component');
var create_event_poll_form_service_1 = require('./create-event-poll-form.service');
var CreateEventPollFormComponent = (function () {
    function CreateEventPollFormComponent(route, router, locationPicker, timePicker, emailPicker, createEventPollFormService) {
        this.route = route;
        this.router = router;
        this.locationPicker = locationPicker;
        this.timePicker = timePicker;
        this.emailPicker = emailPicker;
        this.createEventPollFormService = createEventPollFormService;
    }
    CreateEventPollFormComponent.prototype.ngOnInit = function () {
        //base
        this.creator = {};
        this.creator.name = '';
        this.creator.email = '';
        this.event = {};
        this.event.title = '';
        this.event.description = '';
        this.event.deadline = null;
        this.locations = [];
        this.times = [];
        this.emails = [];
        //optional fields
        this.coverCharge = false;
        this.coverAmount = 0.00;
        this.contribution = false;
        this.pollUsersForTransport = false;
        this.needPickup = false;
        this.canDrive = false;
        this.pickupQuantity = 0;
        //ngIfs
        this.showFunding = false;
        this.showTransportation = false;
        //Submission
        this.pollData = {};
        this.pollData.creatorEmail = '';
        this.pollData.creatorName = '';
        this.pollData.eventTitle = '';
        this.pollData.description = '';
        this.pollData.pollDeadline = null;
        this.pollData.locations = [];
        this.pollData.times = [];
        this.pollData.emails = [];
        this.pollData.coverCharge = null;
    };
    CreateEventPollFormComponent.prototype.submit = function () {
        this.pollData.creatorEmail = this.creator.email;
        this.pollData.creatorName = this.creator.name;
        this.pollData.eventTitle = this.event.title;
        this.pollData.description = this.event.description;
        this.pollData.pollDeadline = this.event.deadline;
        this.pollData.locations = this.locationPicker.getLocations();
        this.pollData.times = this.timePicker.getTimes();
        this.pollData.emails = this.emailPicker.getEmails();
        //optional fields
        if (this.coverCharge !== false) {
            this.pollData.coverCharge = this.coverAmount;
        }
        else {
            this.pollData.coverCharge = 0;
        }
        this.submitStatus = this.createEventPollFormService.createEventPoll(this.pollData);
    };
    CreateEventPollFormComponent = __decorate([
        core_1.Component({
            selector: 'create-event-poll-form',
            templateUrl: './app/components/create-event-poll-form/create-event-poll-form.component.html',
            styleUrls: ['./app/components/create-event-poll-form/create-event-poll-form.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, location_picker_component_1.LocationPickerComponent, time_picker_component_1.TimePickerComponent, email_picker_component_1.EmailPickerComponent, create_event_poll_form_service_1.CreateEventPollFormService])
    ], CreateEventPollFormComponent);
    return CreateEventPollFormComponent;
}());
exports.CreateEventPollFormComponent = CreateEventPollFormComponent;
//# sourceMappingURL=create-event-poll-form.component.js.map