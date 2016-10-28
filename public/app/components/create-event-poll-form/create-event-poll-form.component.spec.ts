import { TestBed, inject } from '@angular/core/testing';

import { CreateEventPollFormComponent } from './create-event-poll-form.component';

describe('a create-event-poll-form component', () => {
	let component: CreateEventPollFormComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				CreateEventPollFormComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([CreateEventPollFormComponent], (CreateEventPollFormComponent) => {
		component = CreateEventPollFormComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});