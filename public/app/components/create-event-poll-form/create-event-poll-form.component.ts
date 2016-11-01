import { Component } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { LocationPickerComponent } from './../location-picker/location-picker.component';
import { TimePickerComponent } from './../time-picker/time-picker.component';
import { EmailPickerComponent } from './../email-picker/email-picker.component';

import { CreateEventPollFormService } from './create-event-poll-form.service';

@Component({
	selector: 'create-event-poll-form',
	templateUrl: './app/components/create-event-poll-form/create-event-poll-form.component.html',
	styleUrls: ['./app/components/create-event-poll-form/create-event-poll-form.component.css'],
	providers: [ CreateEventPollFormService ]
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

	constructor(private route : ActivatedRoute, private router: Router, private locationPicker : LocationPickerComponent,
				private timePicker : TimePickerComponent, private emailPicker : EmailPickerComponent) {}

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
	}

	submit() {

		this.locations = this.locationPicker.getLocations();
		this.times = this.timePicker.getTimes();
		this.emails = this.emailPicker.getEmails();

		//post request
		// let headers = new Headers({ 'Content-Type': 'application/json' });
    	// let options = new RequestOptions({ headers: headers });

    	// return this.http.post(this.heroesUrl, { name }, options)
        //             .map(this.extractData)
        //             .catch(this.handleError);
	}
}
