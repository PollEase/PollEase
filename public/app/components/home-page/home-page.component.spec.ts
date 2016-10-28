import { TestBed, inject } from '@angular/core/testing';

import { HomePageComponent } from './home-page.component';

describe('a home-page component', () => {
	let component: HomePageComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				HomePageComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([HomePageComponent], (HomePageComponent) => {
		component = HomePageComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});