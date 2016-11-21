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
var VoterIconsComponent = (function () {
    function VoterIconsComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], VoterIconsComponent.prototype, "voters", void 0);
    VoterIconsComponent = __decorate([
        core_1.Component({
            selector: 'voter-icons',
            styleUrls: ['./app/components/voter-icons/voter-icons.component.css'],
            template: "<div class=\"icons\">\n        <p class=\"icon\" *ngFor=\"let voter of voters\">\n            {{voter.firstName.charAt(0)}}{{voter.lastName.charAt(0)}}\n        </p>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], VoterIconsComponent);
    return VoterIconsComponent;
}());
exports.VoterIconsComponent = VoterIconsComponent;
//# sourceMappingURL=voter-icons.component.js.map