import { Component } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { CreateEventPollService } from '../repository/createPoll-repository.service';

@Component({
	selector: 'event-voting-form',
	templateUrl: './app/components/event-voting-form/event-voting-form.component.html',
	styleUrls: ['./app/components/event-voting-form/event-voting-form.component.css'],
	// providers: [ EventVotingFormService ]
})

export class EventVotingFormComponent {
	//Base values
	creatorName: string;
	eventTitle: any;
	locations: string[];
	// times: Date[];
	times: string[];
	emails: string[];
	description: string;
	coverCharge: number;
	pollDeadline: string;

	selectedLocations: string[];
	// selectedTimes: Date[];
	selectedTimes: string[];
	eventId: string;
	userId: string;
	response: any;

	constructor(private route : ActivatedRoute,
				private router: Router,
				private service : CreateEventPollService) {}

	ngOnInit() {
		this.route.params.forEach(x => this.load(x['id']));
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
		this.response = this.service.submitVote(vote);
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

	private load(id) {
		if (!id) {
			return;
		}
		var onload = (data) => {
			if (data) {
				console.log(data);
				this.creatorName = data.creatorName;
				this.eventTitle = data.eventTitle;
				this.pollDeadline = data.pollDeadline;
				this.locations = data.locations;
				this.times = data.times;
				this.description = data.description;
				this.coverCharge = data.coverCharge;
			}
		};
		this.service.getPoll(id).then(onload);
		this.eventId = id.substring(0, Math.floor(id.length / 2));
		console.log(this.eventId);
		this.userId = id.substring(Math.floor(id.length / 2));
		console.log(this.userId);
	}
}
