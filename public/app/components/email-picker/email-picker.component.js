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
var EmailPickerComponent = (function () {
    function EmailPickerComponent(createService) {
        this.createService = createService;
        this.emails = this.createService.getEmails();
        this._temp = "";
    }
    EmailPickerComponent.prototype.setEmails = function (emails) {
        this.emails = emails;
    };
    EmailPickerComponent.prototype.addEmail = function () {
        this.createService.addEmail(this._temp);
        this._temp = "";
    };
    EmailPickerComponent.prototype.removeEmail = function (email) {
        var index = this.emails.findIndex(function (ema) { return (ema === email); });
        if (index != -1) {
            this.emails.splice(index, 1);
        }
        this.createService.removeEmail(email);
    };
    EmailPickerComponent.prototype.getEmails = function () {
        console.log(this.emails);
        return this.emails;
    };
    EmailPickerComponent = __decorate([
        core_1.Component({
            selector: 'email-picker',
            templateUrl: './app/components/email-picker/email-picker.component.html',
            styleUrls: ['./app/components/email-picker/email-picker.component.css']
        }), 
        __metadata('design:paramtypes', [createPoll_repository_service_1.CreateEventPollService])
    ], EmailPickerComponent);
    return EmailPickerComponent;
}());
exports.EmailPickerComponent = EmailPickerComponent;
//# sourceMappingURL=email-picker.component.js.map