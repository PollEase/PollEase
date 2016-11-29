import { TestBed, inject } from '@angular/core/testing';

import { GetPollComponent } from './get-poll.component';

describe('a get-poll component', () => {
	let component: GetPollComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				GetPollComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([GetPollComponent], (GetPollComponent) => {
		component = GetPollComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});