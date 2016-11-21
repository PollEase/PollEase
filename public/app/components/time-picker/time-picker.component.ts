import { Component, Input } from '@angular/core';
import { createRepoService } from '../repository/createPoll-repository.service';

@Component({
	selector: 'time-picker',
	templateUrl: './app/components/time-picker/time-picker.component.html',
	styleUrls: [ './app/components/time-picker/time-picker.component.css' ]
})

export class TimePickerComponent {

	times: any[];
	_temp: any;

	constructor(private createService : createRepoService){

		this.times = [];
		this._temp = "";

	}
	addTime(){
		var time = new Date(this._temp);
		this.times.push(time);

		this._temp = "";
		this.createService.addTime(time);
	}

	removeTime(time){
		var index = this.times.findIndex((tim) => (tim===time));
		if(index != -1) {
			this.times.splice(index, 1);
			this.createService.remLoc(index);
		}
	}

    getTimes() {
        return this.times;
    }
}