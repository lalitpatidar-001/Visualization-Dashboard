const express = require("express");
const app = express()
const mongoose = require("mongoose");
const cors = require("cors")
require("dotenv").config();

// router imports 
const dashboardRouter = require("./routers/dashboard");


// middle wares
app.use(cors())
app.use(express.json());

// routes
app.use("/api/v1/dashboard",dashboardRouter)


mongoose.connect(process.env.DB_URL)
    .then(()=>console.log("DB Connected..."))
    .catch((error)=> console.log(error));


app.listen(process.env.PORT || 5000, ()=>{
    console.log("server is running on port 5000...")
})
