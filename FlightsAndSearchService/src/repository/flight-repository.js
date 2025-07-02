const {Flight}=require("../models/index");
const { Op } = require('sequelize');

class FlightRepository{
    #createFilter(data)
    {
     let filter={};
     if(data.arrivalAirportId)
     {
        filter.arrivalAirportId=data.arrivalAirportId;
     }
if(data.departureAirportId)
     {
        filter.departureAirportId=data.departureAirportId;
     }
     if (data.minPrice || data.maxPrice) {
    filter.price = {};
    if (data.minPrice) {
        filter.price[Op.gte] = data.minPrice;
    }
    if (data.maxPrice) {
        filter.price[Op.lte] = data.maxPrice;
    }
}

     return filter;
    }
    async createFlight(data)
    {
        try{
            const flight=await Flight.create(data);
            return flight;
        }
        catch(error){
             console.log("Something went wrong in the repository layer");
             throw error;

        }
    }
    async getFlight(flightId)
    {
        try{
            const flight=await Flight.findByPk(flightId);
            return flight;
        }
        catch(error){
             console.log("Something went wrong in the repository layer");
             throw error;

        }
    }
    async getAllFlights(filter)
    {
        try{
            const filterObject=this.#createFilter(filter);
            const flight=await Flight.findAll({
                where:filterObject
            });
            return flight;
        }
        catch(error){
             console.log("Something went wrong in the repository layer");
             throw error;

        }
    }
}

module.exports=FlightRepository;