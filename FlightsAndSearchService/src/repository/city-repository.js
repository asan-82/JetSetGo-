const {City}=require("../models/index");

class CityRepository{
    async createCity({name}){
     try{
        const existingCity = await City.findOne({ where: { name } });
        if (existingCity) {
            throw { message: "City already exists", statusCode: 400 };
        }
         const city=await City.create({name});
         return city;
     }
     catch(error)
     {
       console.log("Something went wrong in the repository layer");
       throw error;
     }
    }
    async deleteCity(cityId)
    {
        try{
         const result=await City.destroy({
            where:{
                id:cityId
            }
         });
         return result;
     }
     catch(error)
     {
      console.log("Something went wrong in the repository layer");
       throw error;
     }
    }
     async updateCity(cityId,data)
    {
        try{
         await City.update(data,{
            where:{
                id:cityId
            }
         });
        const updatedCity = await City.findByPk(cityId); 
            return updatedCity;
     }
     catch(error)
     {
       console.log("Something went wrong in the repository layer");
       throw error;
     }
    }
     async getCity(cityId)
    {
        try{
         const city=await City.findByPk(cityId);
         return city;
     }
     catch(error)
     {
       console.log("Something went wrong in the repository layer");
       throw error;
     }
    }
}

module.exports=CityRepository;