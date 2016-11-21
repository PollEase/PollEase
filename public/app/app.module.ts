import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
// import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent }   from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { CreateEventPollFormComponent } from './components/create-event-poll-form/create-event-poll-form.component';
import { LocationPickerComponent } from './components/location-picker/location-picker.component';
import { EmailPickerComponent } from './components/email-picker/email-picker.component';
import { TimePickerComponent } from './components/time-picker/time-picker.component';
import { EventVotingFormComponent } from './components/event-voting-form/event-voting-form.component';
import { PollResultsFormComponent } from './components/poll-results-form/poll-results-form.component';
import { VoterIconsComponent } from './components/voter-icons/voter-icons.component';
import { Ng2DatetimePickerModule } from 'ng2-datetime-picker';

import { CreateEventPollFormService } from './components/create-event-poll-form/create-event-poll-form.service';

//New service for all event related actions
import { EventRepositoryService } from './repositories/event.service';
// import { InMemoryDataService } from './in-memory-data.service';


@NgModule({
  imports: [ BrowserModule,
             FormsModule,
             HttpModule,
             Ng2DatetimePickerModule,
             RouterModule.forRoot([
                { path: '', component: HomePageComponent },
                { path: 'vote', component: EventVotingFormComponent },
                { path: 'results', component: PollResultsFormComponent },
                { path: 'createpoll', component: CreateEventPollFormComponent }
             ])
            //  InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  declarations: [ AppComponent, HomePageComponent, CreateEventPollFormComponent,
                  LocationPickerComponent, EmailPickerComponent, TimePickerComponent,
                  EventVotingFormComponent, PollResultsFormComponent, VoterIconsComponent ],
  providers: [ LocationPickerComponent, TimePickerComponent, EmailPickerComponent, CreateEventPollFormService,
               EventRepositoryService
             ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
