import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { LocationPickerComponent } from './../location-picker/location-picker.component';
import { TimePickerComponent } from './../time-picker/time-picker.component';
import { EmailPickerComponent } from './../email-picker/email-picker.component';
import { CreateEventPollFormComponent } from './../create-event-poll-form/create-event-poll-form.component';
import { CreateEventPollService } from '../repository/createPoll-repository.service';

import { CreateEventPollFormService } from './../create-event-poll-form/create-event-poll-form.service';
@Component({
	selector: 'confirmation',
	templateUrl: './app/components/confirmation/confirmation.html',
	styleUrls: ['./app/components/confirmation/confirmation.css'],
})

export class ConfirmationComponent {
	event: any;
	submitStatus: any;

	constructor(private route : ActivatedRoute, private router: Router, private createEventPollService : CreateEventPollService) {
		this.event = this.createEventPollService.getEvent();
	}

	submit() {
		this.submitStatus = this.createEventPollService.createEventPoll();
		console.log("submitting");
	}
}
