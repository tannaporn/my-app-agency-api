const mongoose = require('mongoose');

const url="mongodb+srv://admin:password@agency.fhf8qss.mongodb.net/agency-demo";

const connectDB = async () =>{
    try{
        await mongoose.connect(url);
        console.log("Connected DB");
    }catch(err){
        console.log(err);
    }
}
module.exports =connectDB;