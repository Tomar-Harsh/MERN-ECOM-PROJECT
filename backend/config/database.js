const mongoose = require("mongoose");



const connectDatabase = () => {
console.log(process.env.DB_URI, "db uri ");    
    mongoose.connect(process.env.DB_URI,{useNewUrlParser:true,useUnifiedTopology:true}).then((data)=>{
        console.log('MongoDB connected successfully: ${data.connection.host}');
    }).catch((err)=>{
        console.log(err,"error in connecting to database");
    });
}

module.exports = connectDatabase;