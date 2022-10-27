const { ObjectId } = require('mongodb')
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userEducationSchema = new Schema({
  userId:{
    type: ObjectId,
    required: true
  },
  language: {
    type: String,
    required: true
  },
  courseName: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  institution: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  country: {
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

module.exports = mongoose.model('UserEducation', userEducationSchema, "usersEducations")
