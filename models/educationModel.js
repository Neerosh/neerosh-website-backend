const mongoose = require('mongoose')

const Schema = mongoose.Schema

const educationSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date
  }
}, { timestamps: true })

module.exports = mongoose.model('Education', educationSchema, "educations")
