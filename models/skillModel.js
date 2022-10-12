const mongoose = require('mongoose')

const Schema = mongoose.Schema

const skillSchema = new Schema({
  name: {
    type: String,
    require: true
  },
  type: {
    type: String,
    require: true
  },
  level: {
    type: String,
    require: true
  },
  description: {
    type: String
  }
}, { timestamps: true })

module.exports = mongoose.model('Skill', skillSchema, "skills")
