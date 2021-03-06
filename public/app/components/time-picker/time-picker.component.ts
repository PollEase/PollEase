import { Component, Input } from '@angular/core';
import { CreateEventPollService } from '../repository/createPoll-repository.service';

@Component({
	selector: 'time-picker',
	templateUrl: './app/components/time-picker/time-picker.component.html',
	styleUrls: [ './app/components/time-picker/time-picker.component.css' ]
})

export class TimePickerComponent {
	times: any[];
	_temp: any;

	constructor(private createService : CreateEventPollService){
		this.times = this.createService.getTimes();
		this._temp = "";
	}

	setTimes(times) {
		this.times = times;
	}

	addTime(){
		var time = new Date(this._temp);
		this._temp = "";
		this.createService.addTime(time);
	}

	removeTime(time){
		var index = this.times.findIndex((tim) => (tim===time));
		if(index != -1) {
			this.times.splice(index, 1);
		}
		this.createService.removeTime(time);
	}

    getTimes() {
        return this.times;
    }
}
