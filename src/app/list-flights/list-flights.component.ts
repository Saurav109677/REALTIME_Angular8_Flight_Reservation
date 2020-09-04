import { Component, OnInit } from '@angular/core';
import { FlightService } from '../services/flight.service';

@Component({
  selector: 'app-list-flights',
  templateUrl: './list-flights.component.html',
  styleUrls: ['./list-flights.component.css']
})
export class ListFlightsComponent implements OnInit {

  Quotes:any;
  constructor(private _flightService:FlightService) { }

  ngOnInit(): void {
    this.Quotes=this._flightService.flightList.Quotes;
    console.log(this.Quotes);
    
    if(this.Quotes){
      console.log("From list flights:"+this.Quotes);
    }
    else{
      //no records.. please try again
      console.log('error');
      
    }

   // console.log(this._flightService.flightList);
    
  }

}
