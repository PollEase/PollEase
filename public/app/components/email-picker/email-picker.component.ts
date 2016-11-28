import { Component, Input } from '@angular/core';
import { CreateEventPollService } from '../repository/createPoll-repository.service';

@Component({
	selector: 'email-picker',
	templateUrl: './app/components/email-picker/email-picker.component.html',
    styleUrls: [ './app/components/email-picker/email-picker.component.css']
})

export class EmailPickerComponent {
	emails: string[];
	_temp: string;

	constructor(private createService : CreateEventPollService) {
		this.emails = this.createService.getEmails();
		this._temp = "";
	}

	setEmails(emails) {
		this.emails = emails;
	}

	addEmail() {
		this.createService.addEmail(this._temp);
		this._temp = "";
	}

	removeEmail(email) {
		var index = this.emails.findIndex((ema) => (ema === email));
		if(index != -1) {
			this.emails.splice(index, 1);
		}
		this.createService.removeEmail(email);
	}

	getEmails() {
		console.log(this.emails);
		return this.emails;
	}
}
