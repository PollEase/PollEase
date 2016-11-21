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
var router_1 = require('@angular/router');
var createPoll_repository_service_1 = require('../repository/createPoll-repository.service');
var ConfirmationComponent = (function () {
    function ConfirmationComponent(route, router, createService) {
        this.route = route;
        this.router = router;
        this.createService = createService;
        this.event = this.createService.getEvent();
        //this.event.title = this.createService.getTitle();
        console.log(this.event.locations + "from confirm");
        console.log(this.event.times + "from confirm");
    }
    ConfirmationComponent = __decorate([
        core_1.Component({
            selector: 'confirmation',
            templateUrl: './app/components/confirmation/confirmation.html',
            styleUrls: ['./app/components/confirmation/confirmation.css'],
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, createPoll_repository_service_1.createRepoService])
    ], ConfirmationComponent);
    return ConfirmationComponent;
}());
exports.ConfirmationComponent = ConfirmationComponent;
//# sourceMappingURL=confirmation.component.js.map