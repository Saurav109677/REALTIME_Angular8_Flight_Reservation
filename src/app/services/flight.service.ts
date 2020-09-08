import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, ObservableLike } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlightService {
   baseUrl="https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices"
   flights:any;

  constructor(private http:HttpClient) { }
    options={
     "headers":{
      'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com',
      'x-rapidapi-key': '945e1e44b1mshf254b0d93cb660ep10281ejsn9d8f011fed16'
     }
   } 

  suggestPlace(userInput:string):Observable<any>{
     return this.http.get(this.baseUrl+'/autosuggest/v1.0/UK/GBP/en-GB/?query='+userInput,this.options)
  }

  searchFlightsService(queryForm):Observable<any>{
    return this.http.get(this.baseUrl+"/browseroutes/v1.0/US/INR/en-US/"+queryForm.from+"/"+queryForm.to+"/"+queryForm.departure+"?inboundpartialdate="+queryForm.return,this.options)
  }

  get flightList(){
    console.log('get called');
    return this.flights
  }
}
