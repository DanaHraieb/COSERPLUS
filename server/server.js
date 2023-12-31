const express = require("express");
require('dotenv').config();
const app =  express();
var bodyParser = require('body-parser')
const userRoutes = require('./routes/User')
const fileRoutes = require('./routes/Files');
const validateToken = require("./middlewares/validateTokenHandler");
var cors = require('cors')
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());  
app.use(cors())

require("./db/conn")
//middlewares
app.use("/user",userRoutes)
app.use("/file" , fileRoutes)
app.use("/uploads" , express.static('uploads'))





app.listen("5000" , ()=>{console.log("server is running")})
