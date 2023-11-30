const express = require("express");
const app= express();
const connectToDb = require("./db/connection");
const employeeRoute = require("./routes/employee");
app.use(express.json());

connectToDb();
app.use('/employee',employeeRoute);
app.listen('3000',()=>{
    console.log("server started");
})