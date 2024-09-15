require('dotenv').config()
const express = require('express')
const mainRoute = require('./routes/mainRoute')
const mongoose = require('mongoose')



const app = express()

// MIDDLE WARE
app.use(express.json())
app.use((req, res, next) =>{
    console.log(req.path, req.method)
    next()
})

app.use('/press', mainRoute)
mongoose.connect(process.env.DB_URI)
.then(()=>{
    app.listen(process.env.PORT, ()=>{
        console.log("listening at port ", process.env.PORT)
    })
})
.catch((err)=>{
    console.error(err);
})

