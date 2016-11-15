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
import { Ng2DatetimePickerModule } from 'ng2-datetime-picker';

import { CreateEventPollFormService } from './components/create-event-poll-form/create-event-poll-form.service'; 
// import { InMemoryDataService } from './in-memory-data.service';

@NgModule({
  imports: [ BrowserModule,
             FormsModule,
             HttpModule,
             Ng2DatetimePickerModule,
             RouterModule.forRoot([
                { path: '', component: HomePageComponent },
                { path: 'createpoll', component: CreateEventPollFormComponent }
             ])
            //  InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  declarations: [ AppComponent, HomePageComponent, CreateEventPollFormComponent,
                  LocationPickerComponent, EmailPickerComponent, TimePickerComponent ],
  providers: [ LocationPickerComponent, TimePickerComponent, EmailPickerComponent, CreateEventPollFormService ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
