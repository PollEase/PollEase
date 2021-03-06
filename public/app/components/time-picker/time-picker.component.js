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
var createPoll_repository_service_1 = require('../repository/createPoll-repository.service');
var TimePickerComponent = (function () {
    function TimePickerComponent(createService) {
        this.createService = createService;
        this.times = this.createService.getTimes();
        this._temp = "";
    }
    TimePickerComponent.prototype.setTimes = function (times) {
        this.times = times;
    };
    TimePickerComponent.prototype.addTime = function () {
        var time = new Date(this._temp);
        this._temp = "";
        this.createService.addTime(time);
    };
    TimePickerComponent.prototype.removeTime = function (time) {
        var index = this.times.findIndex(function (tim) { return (tim === time); });
        if (index != -1) {
            this.times.splice(index, 1);
        }
        this.createService.removeTime(time);
    };
    TimePickerComponent.prototype.getTimes = function () {
        return this.times;
    };
    TimePickerComponent = __decorate([
        core_1.Component({
            selector: 'time-picker',
            templateUrl: './app/components/time-picker/time-picker.component.html',
            styleUrls: ['./app/components/time-picker/time-picker.component.css']
        }), 
        __metadata('design:paramtypes', [createPoll_repository_service_1.CreateEventPollService])
    ], TimePickerComponent);
    return TimePickerComponent;
}());
exports.TimePickerComponent = TimePickerComponent;
//# sourceMappingURL=time-picker.component.js.map