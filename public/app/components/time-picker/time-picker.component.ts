import { Component, Input } from '@angular/core';

@Component({
	selector: 'time-picker',
	templateUrl: './app/components/time-picker/time-picker.component.html',
	styleUrls: [ './app/components/time-picker/time-picker.component.css' ]
})

export class TimePickerComponent {

	times: any[];
	_temp: any;

	constructor(){

		this.times = [];
		this._temp = "";

	}
	addTime(){
		this.times.push(this._temp);

		this._temp = "";
	}

	removeTime(time){
		var index = this.times.findIndex((tim) => (tim===time));
		if(index != -1) {
			this.times.splice(index, 1);
		}
	}

    getTimes() {
        return this.times;
    }
}