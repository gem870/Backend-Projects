require('dotenv').config()
const express = require('express')
const workout = require('./routes/workouts')
const mongoose = require('mongoose')




const app = express()

// MIDDLEWARE
 app.use(express.json())
 app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
 })

 app.use('/api/workout', workout)

 mongoose.connect(process.env.MONGO_URI)
 .then(()=>{
    app.listen(process.env.PORT, ()=>{
        console.log("Listening at port number ", process.env.PORT)
    })
 })
 .catch((err) =>{
    console.log(err)
 })



