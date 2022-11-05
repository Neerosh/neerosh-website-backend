const mongoose = require('mongoose')

const Schema = mongoose.Schema

const projectSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  imagePath:{
    type: String
  },
  urlPath:{
    type: String
  }
}, { timestamps: true })

module.exports = mongoose.model('Project', projectSchema, "projects")
