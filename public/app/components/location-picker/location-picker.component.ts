import { Component, Input } from '@angular/core';

@Component({
  selector: 'location-picker',
  templateUrl: './app/components/location-picker/location-picker.html',
  styleUrls: [ './app/components/location-picker/location-picker.css' ]
})

export class LocationPickerComponent {

  locations: any[];
  _temp: string;

  constructor() {

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

  getLocations() {
    // console.log("In Location Picker");
    // console.log(this.locations[0]);
    return this.locations;
  }
}
