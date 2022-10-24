const mongoose = require('mongoose')

const Schema = mongoose.Schema

const profileSchema = new Schema({
  fullname: {
    type: String,
    required: true
  },
  introduction: {
    type: String,
    required: true
  },
  occupation: {
    type: String,
    required: true
  },
  telefone: {
    type: String
  },
  email:{
    type: String
  },
  website:{
    type: String
  },
  interests:{
    type: Array
  },
  languages:{
    type: Array
  }
}, { timestamps: true })

module.exports = mongoose.model('Profile', profileSchema, "profiles")
