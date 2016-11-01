import { Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
	selector: 'home-page',
	templateUrl: './app/components/home-page/home-page.component.html',
	styleUrls: ['./app/components/home-page/home-page.component.css']
	// encapsulation: ViewEncapsulation.None // Was causing an issue bringing the main page styles and img to the form page
})

export class HomePageComponent {

	constructor(private route: ActivatedRoute, private router: Router) {

	}
}