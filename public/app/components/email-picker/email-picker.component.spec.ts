import { TestBed, inject } from '@angular/core/testing';

import { EmailPickerComponent } from './email-picker.component';

describe('a email-picker component', () => {
	let component: EmailPickerComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				EmailPickerComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([EmailPickerComponent], (EmailPickerComponent) => {
		component = EmailPickerComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});