import { Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { CreateEventPollService } from '../repository/createPoll-repository.service';

@Component({
	selector: 'home-page',
	templateUrl: './app/components/home-page/home-page.component.html',
	styleUrls: ['./app/components/home-page/home-page.component.css']
})

export class HomePageComponent {

	email: string;

	constructor(private route : ActivatedRoute,
				private router : Router,
				private eventService : CreateEventPollService) {

	}

	submit() {

		console.log("In submit of homepage email is: " + this.email);
		let status = this.eventService.emailAllPolls(this.email);
	}
}
