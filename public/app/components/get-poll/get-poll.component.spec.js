"use strict";
var testing_1 = require('@angular/core/testing');
var get_poll_component_1 = require('./get-poll.component');
describe('a get-poll component', function () {
    var component;
    // register all needed dependencies
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [
                get_poll_component_1.GetPollComponent
            ]
        });
    });
    // instantiation through framework injection
    beforeEach(testing_1.inject([get_poll_component_1.GetPollComponent], function (GetPollComponent) {
        component = GetPollComponent;
    }));
    it('should have an instance', function () {
        expect(component).toBeDefined();
    });
});
//# sourceMappingURL=get-poll.component.spec.js.map