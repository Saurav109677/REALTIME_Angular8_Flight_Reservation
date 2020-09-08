import { Component, OnInit } from '@angular/core';
import { FlightService } from '../services/flight.service';
import { FlightQuotesClass, CarriersClass, PlacesClass, CurrenciesClass} from '../models/flight-quotes-class';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-flights',
  templateUrl: './list-flights.component.html',
  styleUrls: ['./list-flights.component.css']
})
export class ListFlightsComponent implements OnInit {

  quotes:Array<FlightQuotesClass>;
  carriers:CarriersClass;
  places:PlacesClass;
  currency:CurrenciesClass;
  carrierLength:Number
  origin
  destination
  totalRecords:any
  page:number=1
  notFound:boolean=false;
  loading:boolean=true;
  error:boolean=false;
  constructor(private _flightService:FlightService,private router:Router) { }

  ngOnInit(): void {
      
    if(this._flightService.flightList){
      this.loading=false;
      //debugger;
        if(this._flightService.flightList.Quotes.length === 0){
            this.notFound=true

        }
        else{
              this.quotes=this._flightService.flightList.Quotes;
            this.carriers=this._flightService.flightList.Carriers
            this.places=this._flightService.flightList.Places;
            this.currency=this._flightService.flightList.Currencies;
            this.totalRecords=this.quotes.length
            
            this.origin=this.places[0]
            this.destination=this.places[1]
            this.carrierLength=this._flightService.flightList.Carriers.length
            //console.log(this.quotes[1].OutboundLeg.CarrierIds[0]);
            //console.log(this.quotes[1].OutboundLeg.DepartureDate.getDate());
            
          //  debugger;
            
        }
        console.log(this.notFound);
        
          console.log(this._flightService.flightList);
    }
    else{
      //no records.. please try again
      this.error=true
      this.loading=false;
      console.log('Error! Navigating to home page');
      //this.router.navigate(['/'])
      
    }
   
    
    
  }

  getAirline(q){
    let i=0
    while(i<this.carrierLength){
        if(q.OutboundLeg.CarrierIds[0]===this.carriers[i].CarrierId)
          return this.carriers[i].Name;
      i++;
    }
  }



}
