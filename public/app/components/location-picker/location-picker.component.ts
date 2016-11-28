import { Component, Input } from '@angular/core';
import { CreateEventPollService } from '../repository/createPoll-repository.service';


@Component({
    selector: 'location-picker',
    templateUrl: './app/components/location-picker/location-picker.html',
    styleUrls: [ './app/components/location-picker/location-picker.css' ]
})

export class LocationPickerComponent {
    locations: any[];
    _temp: string;

    constructor(private createService : CreateEventPollService) {
        this.locations = this.createService.getLocations();
        this._temp = "";
    }

    setLocations(locations) {
        this.locations = locations;
    }

    addLocation() {
        this.createService.addLocation(this._temp);
	    this._temp = "";
    }

    removeLocation(location) {
        var index = this.locations.findIndex((loc) => (loc===location));
        if(index != -1) {
            this.locations.splice(index, 1);
        }
      this.createService.removeLocation(location);
    }

    getLocations() {
        return this.locations;
    }
}
