import { Component } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { createRepoService } from '../repository/createPoll-repository.service';

import { LocationPickerComponent } from './../location-picker/location-picker.component';
import { TimePickerComponent } from './../time-picker/time-picker.component';
import { EmailPickerComponent } from './../email-picker/email-picker.component';

import { FormsModule } from '@angular/forms';

import { CreateEventPollFormService } from './create-event-poll-form.service';

@Component({
	selector: 'create-event-poll-form',
	templateUrl: './app/components/create-event-poll-form/create-event-poll-form.component.html',
	styleUrls: ['./app/components/create-event-poll-form/create-event-poll-form.component.css'],
	//providers: [ CreateEventPollFormService, createRepoService ]
})

export class CreateEventPollFormComponent {

	//Base values
	creator: any;
	event: any;
	title: string;
	name: string;
	locations: string[];
	times: Date[];
	email:string;
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
				private createService : createRepoService, private createEventPollFormService : CreateEventPollFormService) {}

	ngOnInit() {
		this.event = {

				};
		//base
		this.event.title = '';
		this.event.description = '';
		this.event.deadline = null;
		this.event.creator = { };
		this.event.creator.name = '';
		this.event.creator.email = '';
		this.event.locations = [];
		this.event.times = [];
		this.event.emails = [];

		//optional fields
		this.event.coverCharge = false;
		this.event.coverAmount = 0.00;


		this.event.pollUsersForTransport = false;
		this.event.needPickup = false;
		this.event.canDrive = false;
		this.event.pickupQuantity = 0;

		//ngIfs
		this.showFunding = false;

		this.showTransportation = false;
		//
		// //Submission
		// this.pollData = { };
		// this.pollData.creatorEmail = '';
		// this.pollData.creatorName = '';
		// this.pollData.eventTitle = '';
		// this.pollData.description = '';
		// this.pollData.pollDeadline = null;
		// this.pollData.locations = [];
		// this.pollData.times = [];
		// this.pollData.emails = [];
		// this.pollData.coverCharge = null;
	}

	submit() {

		this.event.locations = this.createService.getLoc();
		this.event.times = this.createService.getTime();
		this.event.emails = this.emailPicker.getEmails();
		this.createService.create(this.event);
		// console.log(this.locationPicker.getLocations());
		// console.log(this.event.locations+" here before submit");
		// console.log(this.createService.getEvent()+" here submit");

		//TODO Fix this.
// 		this.pollData.creatorEmail = this.creator.email;
// 		this.pollData.creatorName = this.creator.name;
// 		this.pollData.eventTitle = this.event.title;
// 		this.pollData.description = this.event.description;
// 		this.pollData.pollDeadline = this.event.deadline;
// 		this.pollData.locations = this.locationPicker.getLocations();
// 		// console.log(this.pollData.locations);
// 		this.pollData.times = [];
// 		//Till timepicker is ready
// 		// this.pollData.times = this.timePicker.getTimes();
// 		this.pollData.emails = this.emailPicker.getEmails();

	// 	//optional fields
	// 	if(this.coverCharge !== false) {
	// 		this.pollData.coverCharge = this.coverAmount;
	// 	}
	// 	else {
	// 		this.pollData.coverCharge = 0;
	// 	}
	//
	// 	this.submitStatus = this.createEventPollFormService.createEventPoll(this.pollData);
	}
}
