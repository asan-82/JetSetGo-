const {FlightRepository,AirplaneRepository}=require("../repository/index");
const compareTime=require("../utils/helper");
class FlightService{

    constructor(){
        this.airplaneRepository=new AirplaneRepository();
        this.flightRepository=new FlightRepository();
    }
    async createFlight(data)
    {
        try{
            if(!compareTime(data.arrivalTime, data.departureTime)) {
                throw {error: 'Arrival time cannot be less than the departure time'};
            }
           const airplane=await this.airplaneRepository.getAirplane(data.airplaneId);
           if (!airplane) {
    throw { error: 'No airplane found with the given ID' };
}
           const flight=await this.flightRepository.createFlight({...data,totalSeats:airplane.capacity});
           return flight;
        }
        catch(error)
        {
            console.log("Something went wrong in the service layer");
             throw error;
        }
    }
    async getAllFlights(data)
    {
        try{
            
           const flight=await this.flightRepository.getAllFlights(data);
           return flight;
        }
        catch(error)
        {
            console.log("Something went wrong in the service layer");
             throw error;
        }
    }
}

    
module.exports=FlightService;