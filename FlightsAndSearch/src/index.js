const express=require("express");
require('dotenv').config();

const setupAndStartServer = async ()=>{
    const app=express();
    const PORT=3000;
    app.listen(PORT,()=>{
        console.log(`Server started successfully at ${PORT}`);
        console.log(process.env)
    });
}

setupAndStartServer();