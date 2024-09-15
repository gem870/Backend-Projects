require('dotenv').config()
const express = require('express');
const workoutRoutes = require('./routes/workouts')
const mongoose = require('mongoose')


// express app
const app = express()


//middleware
app.use(express.json())
app.use(express.json())

app.use((req, res, next) =>{
  console.log(req.path, req.method)
  next();
})

// routes
app.use('/api/workout', workoutRoutes)

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    //listen for requests
    app.listen(process.env.PORT, () =>{
    console.log('listening to port numder', process.env.PORT)
})
})
.catch((err_m) => {
    console.log(err_m)
})


