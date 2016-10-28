import { Component } from '@angular/core';

import { EmailPickerService } from './email-picker.service';

@Component({
	selector: 'email-picker',
	templateUrl: './app/components/email-picker/email-picker.component.html',
  styleUrls: [ './app/components/email-picker/email-picker.component.css'],
	providers: [EmailPickerService]
})

export class EmailPickerComponent {

	emails: any[];
  _temp: string;

  constructor(emailPickerService : EmailPickerService) {

    //For the future
    // this.locations = emailPickerService.getEmails();

    this.emails = [];
    this._temp = "";
  }

  addEmail() {
    this.emails.push(this._temp);
		this._temp = "";
  }

  removeEmail(email) {
    var index = this.emails.findIndex((ema) => (ema === email));
    if(index != -1) {
      this.emails.splice(index, 1);
    }
  }
}
