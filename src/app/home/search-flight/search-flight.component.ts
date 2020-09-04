import { Component, OnInit  } from '@angular/core';
import { FlightService } from 'src/app/services/flight.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-flight',
  templateUrl: './search-flight.component.html',
  styleUrls: ['./search-flight.component.css']
})
export class SearchFlightComponent implements OnInit {
  foundLocArray=new Array();
  searchForm:FormGroup;
  queryForm:FormGroup;
  userFrom:string='';
  userTo:string=''
  oneWay:boolean=false;
  errorMsg:string=''
  constructor(private _flightService:FlightService , private fb:FormBuilder , private router:Router) { }

  ngOnInit(): void {
   

    this.queryForm=this.fb.group({
      from:['',Validators.required],
      to:['',Validators.required],
      departure:['',Validators.required],
      return:['']
    })
    
  }

  get fromVal(){
    return this.queryForm.get('from')
  }

  get toVal(){
    return this.queryForm.get('to')
  }

  get departVal(){
    return this.queryForm.get('departure')
  }

  get returnVal(){
    return this.queryForm.get('return')
  }
  searchFlights(){
    console.log(this.queryForm.value);
    this._flightService.searchFlightsService(this.queryForm.value).subscribe(
      data=>console.log(data)
    )
    this.router.navigate(['/listFlights'])
  }

  suggestLocation(queryLoc){
    console.log('called');
    console.log(this.fromVal);
    
    this._flightService.suggestPlace(queryLoc).subscribe(
      data => {
       
        this.foundLocArray=data.Places
        console.log(this.foundLocArray)
        //console.log(this.foundLocArray[0].PlaceName);
       
        
      },
      error => console.log(error)
    )
  } 

  toggle(x){
    if(x===1){
      this.oneWay=true
      this.queryForm.removeControl('return')
    }
    else{  
      this.oneWay=false
      this.queryForm.addControl('return',this.fb.control('', [Validators.required]))
    }

      console.log(this.queryForm);
      
  }
}
