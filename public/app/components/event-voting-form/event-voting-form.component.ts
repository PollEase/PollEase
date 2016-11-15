import { Component } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

// import { EventVotingFormService } from './event-voting-form.service';

@Component({
	selector: 'event-voting-form',
	templateUrl: './app/components/event-voting-form/event-voting-form.component.html',
	styleUrls: ['./app/components/event-voting-form/event-voting-form.component.css'],
	// providers: [ EventVotingFormService ]
})

export class EventVotingFormComponent {

	//Base values
	creatorFirstName: string;
	creatorLastName: string;
	eventTitle: any;
	locations: string[];
	// times: Date[];
	times: string[];
	emails: string[];
	description: string;
	coverCharge: number;
	askDonations: boolean;
	askNeedPickup: boolean;
	askCanDrive: boolean;
	// deadline: Date;
	deadline: string;

	notes: string;


	constructor(private route : ActivatedRoute, private router: Router) {}

	ngOnInit() {
		this.creatorFirstName = "Rob";
		this.creatorLastName = "Stark";
		this.eventTitle = "Battle";
		this.locations = ["SMU", "Somewehre else", "Chickfila"];
		this.times = ["date1", "date2", "Date3"];
		this.emails = ["fjs@smu.edu, asdf@smu.edu"];
		this.description = "A battle yayayay with swords and people and alcohol and food and things in game of thrones. Need more text text text tesxt";
		this.coverCharge = 25.5;
		this.askDonations = true;
		this.askNeedPickup = true;
		this.askCanDrive = true;
		this.deadline = "tomorrow";
	}

	submit() {
		console.log("submitting");
	}
}
