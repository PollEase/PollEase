"use strict";
var testing_1 = require('@angular/core/testing');
var email_picker_component_1 = require('./email-picker.component');
describe('a email-picker component', function () {
    var component;
    // register all needed dependencies
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [
                email_picker_component_1.EmailPickerComponent
            ]
        });
    });
    // instantiation through framework injection
    beforeEach(testing_1.inject([email_picker_component_1.EmailPickerComponent], function (EmailPickerComponent) {
        component = EmailPickerComponent;
    }));
    it('should have an instance', function () {
        expect(component).toBeDefined();
    });
});
//# sourceMappingURL=email-picker.component.spec.js.map