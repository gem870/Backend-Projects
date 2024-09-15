const mongoose = require('mongoose')
const schema = mongoose.Schema


const schemaModel = new schema({
  title: {
    type: String,
    required: true
  },
  discription: {
    type: String,
    required: true
  },
  itemValue: {
    type: Number,
    required: true
  }
}, {timestamps: true})

module.exports = mongoose.model('schemaModel', schemaModel)