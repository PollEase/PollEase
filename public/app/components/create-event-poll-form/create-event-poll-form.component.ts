import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { LocationPickerComponent } from './../location-picker/location-picker.component';
import { EmailPickerComponent } from './../email-picker/email-picker.component';

@Component({
	selector: 'create-event-poll-form',
	templateUrl: './app/components/create-event-poll-form/create-event-poll-form.component.html',
	styleUrls: ['./app/components/create-event-poll-form/create-event-poll-form.component.css'],
})

export class CreateEventPollFormComponent {

	constructor(private route : ActivatedRoute, private router: Router) {

	}
}