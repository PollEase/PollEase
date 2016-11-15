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
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var events = [
            {
                "creatorEmail": "sample@gmail.com",
                "creatorName": "Luke Oglesbee",
                "eventTitle": "Class",
                "description": "Get excited for next class!",
                "pollDeadline": "2016-05-23T18:25:43.511Z",
                "locations": ["Fondren", "Caruth"],
                "times": ["2016-05-23T18:25:43.511Z", "2016-05-23T18:25:43.511Z"],
                "emails": ["anyEmail@gmail.com", "anotherEmail@gmail.com"],
                "coverCharge": 10.23
            }
        ];
        return {
            events: events
        };
    };
    InMemoryDataService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], InMemoryDataService);
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map