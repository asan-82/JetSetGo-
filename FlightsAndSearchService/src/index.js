const express=require("express");
const {PORT,SYNC_DB}=require("./config/serverConfig");
const CityRepository = require("./repository/city-repository");
const ApiRoutes = require("./routes/index");
const db=require("../src/models/index");
const setupAndStartServer = async ()=>{
    const app=express();
    
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.use("/api",ApiRoutes);

    app.listen(PORT,()=>{
        
        console.log(`Server started successfully at ${PORT}`);
    if(process.env.SYNC_DB)
    {
        db.sequelize.sync({alter:true});
    }
        
    });
}

setupAndStartServer();