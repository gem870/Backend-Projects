

const mongoose = require('mongoose')
const { type } = require('os')
const { title } = require('process')
const schema = mongoose.Schema
const workoutModel = new schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    load: {
        type: Number,
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model('workout', workoutModel)