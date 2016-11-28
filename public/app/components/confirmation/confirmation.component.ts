import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { LocationPickerComponent } from './../location-picker/location-picker.component';
import { TimePickerComponent } from './../time-picker/time-picker.component';
import { EmailPickerComponent } from './../email-picker/email-picker.component';
import { CreateEventPollFormComponent } from './../create-event-poll-form/create-event-poll-form.component';
import { createRepoService } from '../repository/createPoll-repository.service';

import { CreateEventPollFormService } from './../create-event-poll-form/create-event-poll-form.service';
@Component({
	selector: 'confirmation',
	templateUrl: './app/components/confirmation/confirmation.html',
	styleUrls: ['./app/components/confirmation/confirmation.css'],
})

export class ConfirmationComponent {
	//Base values
	event : any;
	locations: string[];
	times: string[];
	emails: string[];
	
	
	
	
	constructor(private route : ActivatedRoute, 
				private router: Router, 
				private createService : createRepoService,
				private createEventPollFormService : CreateEventPollFormService) {
					
				this.event = this.createService.getEvent();
				//this.event.title = this.createService.getTitle();
				console.log(this.event.locations+"from confirm");
				console.log(this.event.times+"from confirm");

			}

	submit() {

		let submitStatus = this.createEventPollFormService.createEventPoll(this.event);
	}

	
	
}