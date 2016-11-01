import { Component, Input } from '@angular/core';

@Component({
	selector: 'time-picker',
	templateUrl: './app/components/time-picker/time-picker.component.html',
	styleUrls: [ './app/components/time-picker/time-picker.component.css' ]
})

export class TimePickerComponent {

	times: any[];

    getTimes() {
        return this.times;
    }
}