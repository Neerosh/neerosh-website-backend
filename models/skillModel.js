const mongoose = require('mongoose')

const Schema = mongoose.Schema

const skillSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  level: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  tags:{
    type: Array
  }
}, { timestamps: true })

module.exports = mongoose.model('Skill', skillSchema, "skills")
