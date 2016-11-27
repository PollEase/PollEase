import { Component } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { CreateEventPollService } from '../repository/createPoll-repository.service';

import { LocationPickerComponent } from './../location-picker/location-picker.component';
import { TimePickerComponent } from './../time-picker/time-picker.component';
import { EmailPickerComponent } from './../email-picker/email-picker.component';

import { CreateEventPollFormService } from './create-event-poll-form.service';

@Component({
	selector: 'create-event-poll-form',
	templateUrl: './app/components/create-event-poll-form/create-event-poll-form.component.html',
	styleUrls: ['./app/components/create-event-poll-form/create-event-poll-form.component.css'],
	//providers: [ CreateEventPollFormService, CreateEventPollService ]
})

export class CreateEventPollFormComponent {
	//Base values
	creatorName: string;
	creatorEmail: string;
	title: string;
	description: string;
	deadline: string;
	coverCharge: number;
	cover: bool;

	constructor(private route : ActivatedRoute, private router: Router, private locationPicker : LocationPickerComponent,
				private timePicker : TimePickerComponent, private emailPicker : EmailPickerComponent,
				private createEventPollService : CreateEventPollService, private createEventPollFormService : CreateEventPollFormService) {}

	ngOnInit() {
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
	}

	submit() {
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
			"coverFee": this.coverFee,
			"coverCharge": this.coverCharge
		};

		console.log(event);
		this.createEventPollService.store(event);
	}
}
