const express = require('express')
const apiRoutes = require('./routes/api-routes')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const errorHandler = require('./middleware/error')
const dotenv = require('dotenv').config({path:'./config/config.env'})
const connectDB = require('./config/db')




connectDB()


const app = express()
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())


var port = process.env.PORT || 5000

app.get('/',(req,res)=>{
    res.send('Hello World with Express')
})

app.use('/api/users',apiRoutes)

app.use(errorHandler)

app.listen(port,()=>{
    console.log("Running on port" + port )
})

