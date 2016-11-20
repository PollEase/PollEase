import { Component, Input } from '@angular/core';
import { createRepoService } from '../repository/createPoll-repository.service';


@Component({
  selector: 'location-picker',
  templateUrl: './app/components/location-picker/location-picker.html',
  styleUrls: [ './app/components/location-picker/location-picker.css' ]
})

export class LocationPickerComponent {

  locations: any[];
  _temp: string;

  constructor(private createService : createRepoService) {
    console.log("when");
    this.locations = [];
    console.log("go into the location constructor, refresh"+this.locations);
    this._temp = "";
  }

  addLocation() {
    this.locations.push(this._temp);
    this.createService.addLoc(this._temp);
    //console.log("here add the location "+this.locations);
    //console.log("and here get the location "+this.getLocations());
		this._temp = "";
  }

  removeLocation(location) {
    var index = this.locations.findIndex((loc) => (loc===location));
    if(index != -1) {
      this.locations.splice(index, 1);
    }
    this.createService.remLoc(location);
  }

  getLocations() {
    //console.log("this is the location "+this.locations);
    return this.locations;
  }
}
