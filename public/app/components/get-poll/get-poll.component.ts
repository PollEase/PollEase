import { Component } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
	selector: 'get-poll',
	templateUrl: './app/components/get-poll/get-poll.component.html'
})

export class GetPollComponent {

	constructor(private route : ActivatedRoute, private router: Router) { }
}