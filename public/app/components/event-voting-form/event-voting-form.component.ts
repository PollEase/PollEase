import { Component } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

// import { EventVotingFormService } from './event-voting-form.service';
import { CreateEventPollService } from '../repository/createPoll-repository.service';

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

	selectedLocations: string[];
	// selectedTimes: Date[];  //TODO: switch
	selectedTimes: string[];

	eventId: "dba575232a6970737d48b7e51505d652ce775c268f489a869158799f20b4b79a";
	userId: "1d2e441c8a62fe340d696144b829c1944b92205599d6679f46984c100c1c62bb";
	response: any;


	constructor(private route : ActivatedRoute, 
				private router: Router,
				private createEventPollService : CreateEventPollService) { }

	ngOnInit() {
		this.creatorFirstName = "Rob";
		this.creatorLastName = "Stark";
		this.eventTitle = "Battle";
		this.locations = ["SMU", "Somewehre else", "Chickfila"];
		this.times = ["date1", "date2", "Date3"];
		this.emails = ["fjs@smu.edu, asdf@smu.edu"];
		this.description = "A battle yayayay with swords and people and alcohol and food and things in game of thrones. Need more text text text tesxt";
		this.coverCharge = 25;
		this.askDonations = true;
		this.askNeedPickup = true;
		this.askCanDrive = true;
		this.deadline = "tomorrow";
		this.selectedLocations = [];
		this.selectedTimes = [];
	}

	submit() {
		console.log("submitting");
		console.log(this.selectedLocations);
		console.log(this.selectedTimes);

		var vote = {

			"uid": this.userId,
			"eventId" : this.eventId, 
			"times" : this.selectedTimes, 
			"locations" : this.selectedLocations
		}
		this.response = this.createEventPollService.submitVote(vote);
	}

	selectLocation(location: string) {
		if (this.selectedLocations.indexOf(location) > -1) {
			this.selectedLocations.splice(this.selectedLocations.indexOf(location), 1);
		} else {
			this.selectedLocations.push(location);
		}
	}

	selectTime(time: string) {
		if (this.selectedTimes.indexOf(time) > -1) {
			this.selectedTimes.splice(this.selectedTimes.indexOf(time), 1);
		} else {
			this.selectedTimes.push(time);
		}
	}
}
