import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListFlightsComponent } from './list-flights/list-flights.component';
import { SearchFlightComponent } from './home/search-flight/search-flight.component';


const routes: Routes = [
  {path:'',component:SearchFlightComponent},
  {path:'listFlights',component:ListFlightsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
