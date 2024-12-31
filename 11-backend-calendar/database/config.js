const mongoose = require('mongoose');
require("dotenv").config();

const dbConection=async()=>{
    try{
        await mongoose.connect(process.env.DB_CNN);
        console.log("DB WORKED");
        
    }catch(error){
        console.log(error);
        throw new Error("error al actualizar la base de datos")
    }
}
module.exports={
    dbConection
}