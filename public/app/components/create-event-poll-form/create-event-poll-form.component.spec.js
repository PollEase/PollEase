"use strict";
var testing_1 = require('@angular/core/testing');
var create_event_poll_form_component_1 = require('./create-event-poll-form.component');
describe('a create-event-poll-form component', function () {
    var component;
    // register all needed dependencies
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [
                create_event_poll_form_component_1.CreateEventPollFormComponent
            ]
        });
    });
    // instantiation through framework injection
    beforeEach(testing_1.inject([create_event_poll_form_component_1.CreateEventPollFormComponent], function (CreateEventPollFormComponent) {
        component = CreateEventPollFormComponent;
    }));
    it('should have an instance', function () {
        expect(component).toBeDefined();
    });
});
//# sourceMappingURL=create-event-poll-form.component.spec.js.map