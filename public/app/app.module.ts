import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent }   from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { CreateEventPollFormComponent } from './components/create-event-poll-form/create-event-poll-form.component';
import { LocationPickerComponent } from './components/location-picker/location-picker.component';
import { EmailPickerComponent } from './components/email-picker/email-picker.component';
import { TimePickerComponent } from './components/time-picker/time-picker.component';
import { EventVotingFormComponent } from './components/event-voting-form/event-voting-form.component';


@NgModule({
  imports: [ BrowserModule,
             FormsModule,
             RouterModule.forRoot([

                { path: '', component: HomePageComponent },
                { path: 'vote', component: EventVotingFormComponent },
                { path: 'createpoll', component: CreateEventPollFormComponent }
             ])
  ],
  declarations: [ AppComponent, HomePageComponent, CreateEventPollFormComponent,
                  LocationPickerComponent, EmailPickerComponent, TimePickerComponent, EventVotingFormComponent ],
  providers: [ LocationPickerComponent, TimePickerComponent, EmailPickerComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
