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
    function CreateEventPollFormComponent(route, router, locationPicker, timePicker, emailPicker) {
        this.route = route;
        this.router = router;
        this.locationPicker = locationPicker;
        this.timePicker = timePicker;
        this.emailPicker = emailPicker;
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
    };
    CreateEventPollFormComponent.prototype.submit = function () {
        this.locations = this.locationPicker.getLocations();
        this.times = this.timePicker.getTimes();
        this.emails = this.emailPicker.getEmails();
        //post request
        // let headers = new Headers({ 'Content-Type': 'application/json' });
        // let options = new RequestOptions({ headers: headers });
        // return this.http.post(this.heroesUrl, { name }, options)
        //             .map(this.extractData)
        //             .catch(this.handleError);
    };
    CreateEventPollFormComponent = __decorate([
        core_1.Component({
            selector: 'create-event-poll-form',
            templateUrl: './app/components/create-event-poll-form/create-event-poll-form.component.html',
            styleUrls: ['./app/components/create-event-poll-form/create-event-poll-form.component.css'],
            providers: [create_event_poll_form_service_1.CreateEventPollFormService]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, location_picker_component_1.LocationPickerComponent, time_picker_component_1.TimePickerComponent, email_picker_component_1.EmailPickerComponent])
    ], CreateEventPollFormComponent);
    return CreateEventPollFormComponent;
}());
exports.CreateEventPollFormComponent = CreateEventPollFormComponent;
//# sourceMappingURL=create-event-poll-form.component.js.map