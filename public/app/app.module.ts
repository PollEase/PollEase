import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Ng2DatetimePickerModule } from 'ng2-datetime-picker';
import { HttpModule } from '@angular/http';
// import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent }   from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { CreateEventPollFormComponent } from './components/create-event-poll-form/create-event-poll-form.component';
import { LocationPickerComponent } from './components/location-picker/location-picker.component';
import { EmailPickerComponent } from './components/email-picker/email-picker.component';
import { TimePickerComponent } from './components/time-picker/time-picker.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { createRepoService } from './components/repository/createPoll-repository.service';
import { EventVotingFormComponent } from './components/event-voting-form/event-voting-form.component';
import { PollResultsFormComponent } from './components/poll-results-form/poll-results-form.component';
import { VoterIconsComponent } from './components/voter-icons/voter-icons.component';

import { CreateEventPollFormService } from './components/create-event-poll-form/create-event-poll-form.service';
// import { InMemoryDataService } from './in-memory-data.service';


@NgModule({
  imports: [ BrowserModule,
             FormsModule,
             HttpModule,
             Ng2DatetimePickerModule,
             RouterModule.forRoot([
                { path: '', component: HomePageComponent },
                { path: 'confirm', component: ConfirmationComponent},
                { path: 'vote', component: EventVotingFormComponent },
                { path: 'results', component: PollResultsFormComponent },
                { path: 'createpoll', component: CreateEventPollFormComponent }
             ])
            //  InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  declarations: [ AppComponent, HomePageComponent, CreateEventPollFormComponent,
                  LocationPickerComponent, EmailPickerComponent, TimePickerComponent, ConfirmationComponent,
                  EventVotingFormComponent, PollResultsFormComponent, VoterIconsComponent ],
  providers: [ LocationPickerComponent, TimePickerComponent, EmailPickerComponent, CreateEventPollFormService, createRepoService ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
