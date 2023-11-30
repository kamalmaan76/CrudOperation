const mongoose = require("mongoose");

const uri = "mongodb+srv://kamalmaan702:Kamal9090@cluster0.4fsecqs.mongodb.net/?retryWrites=true&w=majority"
const connectToDb = () =>{
    mongoose.connect(uri,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    }).then(()=>{
        console.log("database connected");
    }).catch((err)=>{
        console.log("database is not connected");
    })
    
}

module.exports=connectToDb;