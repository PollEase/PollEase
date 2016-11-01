import { Component } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { LocationPickerComponent } from './../location-picker/location-picker.component';
import { TimePickerComponent } from './../time-picker/time-picker.component';
import { EmailPickerComponent } from './../email-picker/email-picker.component';

@Component({
	selector: 'create-event-poll-form',
	templateUrl: './app/components/create-event-poll-form/create-event-poll-form.component.html',
	styleUrls: ['./app/components/create-event-poll-form/create-event-poll-form.component.css'],
})

export class CreateEventPollFormComponent {
	
	creator: any;
	event: any;
	
	locations: any[];
	times: any[];
	emails: any[];	
	
	needPickup: boolean;
	canPickup: boolean;
	pickupQuantity: number;
	hasCoverCharge: boolean;
	coverQuantity: number;
	fundContribution: number;

	constructor(private route : ActivatedRoute, private router: Router, private locationPicker : LocationPickerComponent,
				private timePicker : TimePickerComponent, private emailPicker : EmailPickerComponent) {}

	ngOnInit() {

		this.creator = { };
		this.creator.name = '';
		this.creator.email = '';

		this.event = { };
		this.event.title = '';
		this.event.description = '';
		this.event.deadline = '';
	}

	submit() {

		this.locations = this.locationPicker.getLocations();
		this.times = this.timePicker.getTimes();
		this.emails = this.emailPicker.getEmails();
	}
}
