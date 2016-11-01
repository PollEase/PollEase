"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var LocationPickerComponent = (function () {
    function LocationPickerComponent() {
        this.locations = [];
        this._temp = "";
    }
    LocationPickerComponent.prototype.addLocation = function () {
        this.locations.push(this._temp);
        this._temp = "";
    };
    LocationPickerComponent.prototype.removeLocation = function (location) {
        var index = this.locations.findIndex(function (loc) { return (loc === location); });
        if (index != -1) {
            this.locations.splice(index, 1);
        }
    };
    LocationPickerComponent.prototype.getLocations = function () {
        return this.locations;
    };
    LocationPickerComponent = __decorate([
        core_1.Component({
            selector: 'location-picker',
            templateUrl: './app/components/location-picker/location-picker.html',
            styleUrls: ['./app/components/location-picker/location-picker.css']
        }), 
        __metadata('design:paramtypes', [])
    ], LocationPickerComponent);
    return LocationPickerComponent;
}());
exports.LocationPickerComponent = LocationPickerComponent;
//# sourceMappingURL=location-picker.component.js.map