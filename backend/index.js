require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
mongoose.Promise = require("bluebird");
const mongodbUri =
  process.env.MONGODB_URI || "mongodb://localhost/music-loop-dev";
const auth=require('./routes/auth');
const port=Number(process.env.PORT)||3000;

app.use('/auth',auth);

mongoose.connect(mongodbUri,{useNewUrlParser:true},err=>{
    if(err){
        console.log('Error in connecting to database: ',err);
    }else{
        console.log('Successfully connected to database: ',mongodbUri);
    }
})

app.listen(port,err=>{
    if(err){
        console.log('Error in starting server: ',err);
    }else{
        console.log('Server started successfully on port: ',port);
    }
})
