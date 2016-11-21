"use strict";
var testing_1 = require('@angular/core/testing');
var confirmation_component_1 = require('./confirmation.component');
describe('a confirmation component', function () {
    var component;
    // register all needed dependencies
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [
                confirmation_component_1.ConfirmationComponent
            ]
        });
    });
    // instantiation through framework injection
    beforeEach(testing_1.inject([confirmation_component_1.ConfirmationComponent], function (ConfirmationComponent) {
        component = ConfirmationComponent;
    }));
    it('should have an instance', function () {
        expect(component).toBeDefined();
    });
});
//# sourceMappingURL=confirmation.component.spec.js.map