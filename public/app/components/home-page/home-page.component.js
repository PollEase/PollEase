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
var HomePageComponent = (function () {
    function HomePageComponent(route, router, eventService) {
        this.route = route;
        this.router = router;
        this.eventService = eventService;
    }
    HomePageComponent.prototype.submit = function () {
        var theEmail = {
            "email": this.email
        };
        this.email = null;
        console.log("In submit of homepage email is: " + this.email);
        this.response = this.eventService.emailAllPolls(theEmail);
    };
    HomePageComponent.prototype.vote = function (id) {
        this.router.navigateByUrl('vote/' + id);
    };
    HomePageComponent.prototype.results = function (id) {
        this.router.navigateByUrl('viewResults/' + id);
    };
    HomePageComponent = __decorate([
        core_1.Component({
            selector: 'home-page',
            templateUrl: './app/components/home-page/home-page.component.html',
            styleUrls: ['./app/components/home-page/home-page.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, createPoll_repository_service_1.CreateEventPollService])
    ], HomePageComponent);
    return HomePageComponent;
}());
exports.HomePageComponent = HomePageComponent;
//# sourceMappingURL=home-page.component.js.map