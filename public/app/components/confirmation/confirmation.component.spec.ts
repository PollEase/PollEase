import { TestBed, inject } from '@angular/core/testing';

import { ConfirmationComponent } from './confirmation.component';

describe('a confirmation component', () => {
	let component: ConfirmationComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				ConfirmationComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([ConfirmationComponent], (ConfirmationComponent) => {
		component = ConfirmationComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});