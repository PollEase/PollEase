import { Component, Input } from '@angular/core';

@Component({
  selector: 'voter-icons',
  styleUrls: ['./app/components/voter-icons/voter-icons.component.css'],
  template:
  `<div class="icons">
        <p class="icon" *ngFor="let voter of voters">
            {{voter.firstName.charAt(0)}}{{voter.lastName.charAt(0)}}
        </p>
    </div>
  `
})

export class VoterIconsComponent {
    @Input() voters: any[];

    constructor(){
    }

}
