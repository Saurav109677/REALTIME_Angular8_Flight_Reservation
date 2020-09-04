import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchFlightComponent } from './home/search-flight/search-flight.component';
import { RecommendHotelComponent } from './home/recommend-hotel/recommend-hotel.component';
import { WeatherInfoComponent } from './home/weather-info/weather-info.component';
import { MostVisitedComponent } from './home/most-visited/most-visited.component';
import { FooterComponent } from './home/footer/footer.component';
import {HttpClientModule} from '@angular/common/http';
import { FlightService } from './services/flight.service';
import {FormsModule , ReactiveFormsModule} from '@angular/forms';
import { ListFlightsComponent } from './list-flights/list-flights.component'


@NgModule({
  declarations: [
    AppComponent,
    SearchFlightComponent,
    RecommendHotelComponent,
    WeatherInfoComponent,
    MostVisitedComponent,
    FooterComponent,
    ListFlightsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [FlightService],
  bootstrap: [AppComponent]
})
export class AppModule { }
