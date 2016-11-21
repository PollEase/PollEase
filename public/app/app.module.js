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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var ng2_datetime_picker_1 = require('ng2-datetime-picker');
var http_1 = require('@angular/http');
// import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
var app_component_1 = require('./app.component');
var home_page_component_1 = require('./components/home-page/home-page.component');
var create_event_poll_form_component_1 = require('./components/create-event-poll-form/create-event-poll-form.component');
var location_picker_component_1 = require('./components/location-picker/location-picker.component');
var email_picker_component_1 = require('./components/email-picker/email-picker.component');
var time_picker_component_1 = require('./components/time-picker/time-picker.component');
var confirmation_component_1 = require('./components/confirmation/confirmation.component');
var createPoll_repository_service_1 = require('./components/repository/createPoll-repository.service');
var event_voting_form_component_1 = require('./components/event-voting-form/event-voting-form.component');
var poll_results_form_component_1 = require('./components/poll-results-form/poll-results-form.component');
var voter_icons_component_1 = require('./components/voter-icons/voter-icons.component');
var create_event_poll_form_service_1 = require('./components/create-event-poll-form/create-event-poll-form.service');
//New service for all event related actions
var event_service_1 = require('./repositories/event.service');
// import { InMemoryDataService } from './in-memory-data.service';
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                ng2_datetime_picker_1.Ng2DatetimePickerModule,
                router_1.RouterModule.forRoot([
                    { path: '', component: home_page_component_1.HomePageComponent },
                    { path: 'confirm', component: confirmation_component_1.ConfirmationComponent },
                    { path: 'vote', component: event_voting_form_component_1.EventVotingFormComponent },
                    { path: 'results', component: poll_results_form_component_1.PollResultsFormComponent },
                    { path: 'createpoll', component: create_event_poll_form_component_1.CreateEventPollFormComponent }
                ])
            ],
            declarations: [app_component_1.AppComponent, home_page_component_1.HomePageComponent, create_event_poll_form_component_1.CreateEventPollFormComponent,
                location_picker_component_1.LocationPickerComponent, email_picker_component_1.EmailPickerComponent, time_picker_component_1.TimePickerComponent, confirmation_component_1.ConfirmationComponent,
                event_voting_form_component_1.EventVotingFormComponent, poll_results_form_component_1.PollResultsFormComponent, voter_icons_component_1.VoterIconsComponent],
            providers: [location_picker_component_1.LocationPickerComponent, time_picker_component_1.TimePickerComponent, email_picker_component_1.EmailPickerComponent, create_event_poll_form_service_1.CreateEventPollFormService,
                event_service_1.EventRepositoryService, createPoll_repository_service_1.createRepoService
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map