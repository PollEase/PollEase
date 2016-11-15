import { Component } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { LocationPickerComponent } from './../location-picker/location-picker.component';
import { TimePickerComponent } from './../time-picker/time-picker.component';
import { EmailPickerComponent } from './../email-picker/email-picker.component';

import { CreateEventPollFormService } from './create-event-poll-form.service';

@Component({
	selector: 'create-event-poll-form',
	templateUrl: './app/components/create-event-poll-form/create-event-poll-form.component.html',
	styleUrls: ['./app/components/create-event-poll-form/create-event-poll-form.component.css']
})

export class CreateEventPollFormComponent {
	
	//Base values
	creator: any;
	event: any;
	locations: string[];
	times: Date[];
	emails: string[];	
	
	//Optional fields
	//funding
	coverCharge: boolean;
	coverAmount: number;
	contribution: boolean;
	//transportation 
	pollUsersForTransport: boolean;
	needPickup: boolean;
	canDrive: boolean;
	pickupQuantity: number;

	//ngIfs
	showFunding: boolean;
	showTransportation: boolean;

	//Submission
	pollData: any;
	submitStatus: any;

	constructor(private route : ActivatedRoute, private router: Router, private locationPicker : LocationPickerComponent,
				private timePicker : TimePickerComponent, private emailPicker : EmailPickerComponent,
				private createEventPollFormService : CreateEventPollFormService) {}

	ngOnInit() {

		//base
		this.creator = { };
		this.creator.name = '';
		this.creator.email = '';
		this.event = { };
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
		this.pollData = { };
		this.pollData.creatorEmail = '';
		this.pollData.creatorName = '';
		this.pollData.eventTitle = '';
		this.pollData.description = '';
		this.pollData.pollDeadline = null;
		this.pollData.locations = [];
		this.pollData.times = [];
		this.pollData.emails = [];
		this.pollData.coverCharge = null;
	}

	submit() {

		this.pollData.creatorEmail = this.creator.email;
		this.pollData.creatorName = this.creator.name;
		this.pollData.eventTitle = this.event.title;
		this.pollData.description = this.event.description;
		this.pollData.pollDeadline = this.event.deadline;
		this.pollData.locations = this.locationPicker.getLocations();
		// console.log(this.pollData.locations);
		this.pollData.times = [];
		//Till timepicker is ready
		// this.pollData.times = this.timePicker.getTimes();
		this.pollData.emails = this.emailPicker.getEmails();

		//optional fields
		if(this.coverCharge !== false) {
			this.pollData.coverCharge = this.coverAmount;
		}
		else {
			this.pollData.coverCharge = 0;
		}

		this.submitStatus = this.createEventPollFormService.createEventPoll(this.pollData);
	}
}
