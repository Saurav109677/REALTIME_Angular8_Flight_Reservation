export class FlightQuotesClass {
    MinPrice:string
    OutboundLeg:{
        CarrierIds:any
        DepartureDate:any  
        OriginId
        DestinationId
    }
    QuoteDateTime:any
   
}

export class CarriersClass{
    CarrierId
    Name
}

export class PlacesClass{
    PlaceId
    IataCode
    Name
    CountryName
}

export class CurrenciesClass{
    Code
    Symbol
}
