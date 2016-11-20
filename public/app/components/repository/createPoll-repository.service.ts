import { Injectable } from '@angular/core';

@Injectable()
export class createRepoService{

    private _event : any;
    private _loc: any[];
    private _time: any[];

    constructor(){
        console.log("go there");
		this._event = {};
        this._loc = [];
        this._time = [];
        
	}
    public addLoc(loc){
        this._loc.push(loc);
        loc = "";
        console.log("addLoc "+this._loc);
    }
    public remLoc(loc){
        var index = this._loc.findIndex((location) => (location===loc));
    if(index != -1) {
      this._loc.splice(index, 1);
    }
    }

    public addTime(time){
		this._time.push(time);
        time = "";
        console.log("addTime "+this._time);
    }
    
    public remTime(index){
        this._time.splice(index, 1);
    }

    public create(event) {
		
		this._event = event;
        this._loc = [];
        this._time = [];
        
        console.log(this._event.creator.name+" FROM CREATE");
        console.log(this._event.creator.email+" FROM CREATE");
        console.log(this._event.locations+" FROM CREATE");

	}
    public getEvent() {
		console.log(this._event);
		return this._event;
	}
    public getLoc(){
        console.log("getLoc "+this._loc);

        return this._loc;
    }
    public getTime(){
        return this._time;
    }
   
   
}