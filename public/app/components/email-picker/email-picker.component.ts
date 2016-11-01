import { Component, Input } from '@angular/core';

@Component({
	selector: 'email-picker',
	templateUrl: './app/components/email-picker/email-picker.component.html',
  styleUrls: [ './app/components/email-picker/email-picker.component.css']
})

export class EmailPickerComponent {

	emails: string[];
  _temp: string;

  constructor() {

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

  getEmails() {
    return this.emails;
  }
}
