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
	response: any;
	poll_id: string;

	constructor(private route : ActivatedRoute,
				private router : Router,
				private eventService : CreateEventPollService) {
	}

	submit() {

		let theEmail = {
			"email":this.email
		};
		this.email = null;
		console.log("In submit of homepage email is: " + this.email);
		this.response = this.eventService.emailAllPolls(theEmail);
	}

	vote(id : string) {
		this.router.navigateByUrl('vote/'+ id);
	}

	results(id : string) {
		this.router.navigateByUrl('viewResults/'+ id);
	}
}
