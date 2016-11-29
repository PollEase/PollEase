import { Component } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { VoterIconsComponent } from '../voter-icons/voter-icons.component';
import { CreateEventPollService } from '../repository/createPoll-repository.service';

@Component({
	selector: 'poll-results-form',
	templateUrl: './app/components/poll-results-form/poll-results-form.component.html',
	styleUrls: ['./app/components/poll-results-form/poll-results-form.component.css'],
})

export class PollResultsFormComponent {

	//Base values
	eventTitle: any;
	locations: any[];
	times: Date[];
	emails: string[];
	description: string;
	coverCharge: number;
	// selectedLocation: string;
	// selectedTime: Date;
	// selectedEmails: string[];

	constructor(private route : ActivatedRoute, private router: Router, private service : CreateEventPollService) {}

	ngOnInit() {
		// this.selectedLocation = "default";
		// this.selectedTime = "default";
		// this.selectedEmails = this.emails.slice();
        this.route.params.forEach(x => this.load(x['id']));
	}

	submit() {
		console.log("sending Invites");
		console.log(this.selectedLocation);
		console.log(this.selectedTime);
		console.log(this.selectedEmails);
	}
	
	// selectLocation(location: string) {
	// 	this.selectedLocation = location;
	// }
	//
	// selectTime(time: string) {
	// 	this.selectedTime = time;
	// }
	//
	// selectEmail(email: string) {
	// 	if (this.selectedEmails.indexOf(email) > -1) {
	// 		this.selectedEmails.splice(this.selectedEmails.indexOf(email), 1);
	// 	} else {
	// 		this.selectedEmails.push(email);
	// 	}
	// }

	private load(id) {
		if (!id) {
			return;
		}

		var onload = (data) => {
			if (data) {
				this.eventTitle = data.eventTitle;
				this.locations = data.locations;
				this.times = data.times;
				this.emails = data.emails;
				this.description = data.description;
				this.coverCharge = data.coverCharge;
			}
		};
		this.service.getResults(id).then(onload);
	}
}
