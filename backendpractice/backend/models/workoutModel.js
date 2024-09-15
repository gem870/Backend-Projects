

const mongoose = require('mongoose')
const schema = mongoose.Schema
const workoutSchema = new schema({
    title: {
        type: String,
        required: true
    },
    discription: {
        type: String,
        required: true
    },
    load: {
        type: Number,
        required: true
    }

}, {timestamps: true})


module.exports = mongoose.model('workout', workoutSchema)