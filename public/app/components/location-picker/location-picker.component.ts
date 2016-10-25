import { Component } from '@angular/core';

import { LocationPickerService } from './location-picker.service';

@Component({
  selector: 'location-picker',
  templateUrl: './app/components/location-picker/location-picker.html',
  styleUrls: [ './app/components/location-picker/location-picker.css' ],
  providers: [ LocationPickerService ]
})

export class LocationPickerComponent {

  locations: any[];
  _temp: string;

  constructor(locationPickerService : LocationPickerService) {

    //For the future
    // this.locations = locationPickerService.getLocations();

    this.locations = [];
    this._temp = "";
  }

  addLocation() {
    this.locations.push(this._temp);
		this._temp = "";
  }

  removeLocation(location) {
    var index = this.locations.findIndex((loc) => (loc===location));
    if(index != -1) {
      this.locations.splice(index, 1);
    }
  }
}
