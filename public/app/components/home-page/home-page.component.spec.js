"use strict";
var testing_1 = require('@angular/core/testing');
var home_page_component_1 = require('./home-page.component');
describe('a home-page component', function () {
    var component;
    // register all needed dependencies
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [
                home_page_component_1.HomePageComponent
            ]
        });
    });
    // instantiation through framework injection
    beforeEach(testing_1.inject([home_page_component_1.HomePageComponent], function (HomePageComponent) {
        component = HomePageComponent;
    }));
    it('should have an instance', function () {
        expect(component).toBeDefined();
    });
});
//# sourceMappingURL=home-page.component.spec.js.map