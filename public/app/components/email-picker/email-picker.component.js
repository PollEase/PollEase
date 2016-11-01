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
var EmailPickerComponent = (function () {
    function EmailPickerComponent() {
        this.emails = [];
        this._temp = "";
    }
    EmailPickerComponent.prototype.addEmail = function () {
        this.emails.push(this._temp);
        this._temp = "";
    };
    EmailPickerComponent.prototype.removeEmail = function (email) {
        var index = this.emails.findIndex(function (ema) { return (ema === email); });
        if (index != -1) {
            this.emails.splice(index, 1);
        }
    };
    EmailPickerComponent.prototype.getEmails = function () {
        return this.emails;
    };
    EmailPickerComponent = __decorate([
        core_1.Component({
            selector: 'email-picker',
            templateUrl: './app/components/email-picker/email-picker.component.html',
            styleUrls: ['./app/components/email-picker/email-picker.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], EmailPickerComponent);
    return EmailPickerComponent;
}());
exports.EmailPickerComponent = EmailPickerComponent;
//# sourceMappingURL=email-picker.component.js.map