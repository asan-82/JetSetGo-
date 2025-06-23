const express=require("express");
const {PORT}=require("./config/serverConfig");
const CityRepository=require("../src/repository/city-repository");

const setupAndStartServer = async ()=>{
    const app=express();
    
    app.use(express.json());

    app.listen(PORT,()=>{
        
        console.log(`Server started successfully at ${PORT}`);
        const repo=new CityRepository();
        repo.createCity({name:"Ahmedabad"})
    });
}

setupAndStartServer();