import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable()
export class InMemoryDataService implements InMemoryDbService{

    createDb() {

        let events = [
            {
                "creatorEmail": "sample@gmail.com",
                "creatorName": "Luke Oglesbee",
                "eventTitle": "Class",
                "description": "Get excited for next class!",
                "pollDeadline": "2016-05-23T18:25:43.511Z",
                "locations": ["Fondren","Caruth"],
                "times": ["2016-05-23T18:25:43.511Z", "2016-05-23T18:25:43.511Z"],
                "emails": ["anyEmail@gmail.com","anotherEmail@gmail.com"],
                "coverCharge": 10.23
            }
        ];
        return {
            events
        }
    }
}