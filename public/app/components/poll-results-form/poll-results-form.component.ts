import { Component } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { VoterIconsComponent } from '../voter-icons/voter-icons.component';

@Component({
	selector: 'poll-results-form',
	templateUrl: './app/components/poll-results-form/poll-results-form.component.html',
	styleUrls: ['./app/components/poll-results-form/poll-results-form.component.css'],
})

export class PollResultsFormComponent {

	//Base values

	eventTitle: any;
	locations: any[];
	// times: Date[];
	times: any[];
	emails: string[];
	description: string;
	coverCharge: number;

	// deadline: Date;
	deadline: string;


	selectedLocation: string;
	// selectedTime: Date;  //TODO: switch
	selectedTime: string;
	selectedEmails: string[];


	constructor(private route : ActivatedRoute, private router: Router) {}

	ngOnInit() {
		this.eventTitle = "Battle";
		this.locations = [
	        {
	            "name": "Fondren",
	            "voters": [
	                {
	                    "firstName": "Luke",
	                    "lastName": "Oglesbee",
	                },
	                {
	                    "firstName": "Bob",
	                    "lastName": "Sponge",
	                }
	            ]
	        },
	        {
	            "name": "Caruth",
	            "voters": [
	                {
	                    "firstName": "Luke",
	                    "lastName": "Oglesbee",
	                },
	            ]
	        }
	    ];
		this.times = ["date1", "date2", "Date3"];
		this.emails = ["fjs@smu.edu", "asdf@smu.edu", "idk@smu.edu", "hello@smu.edu"];
		this.description = "A battle yayayay with swords and people and alcohol and food and things in game of thrones. Need more text text text tesxt";
		this.coverCharge = 25;
		this.deadline = "tomorrow";
		this.selectedLocation = "default";
		this.selectedTime = "default";
		this.selectedEmails = this.emails.slice();
	}

	submit() {
		console.log("sending Invites");
		console.log(this.selectedLocation);
		console.log(this.selectedTime);
		console.log(this.selectedEmails);
	}

	selectLocation(location: string) {
		this.selectedLocation = location;
	}

	selectTime(time: string) {
		this.selectedTime = time;
	}

	selectEmail(email: string) {
		if (this.selectedEmails.indexOf(email) > -1) {
			this.selectedEmails.splice(this.selectedEmails.indexOf(email), 1);
		} else {
			this.selectedEmails.push(email);
		}
	}
}
