const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
  fullname: {
    type: String,
    required: true
  },
  phones: {
    type: Array
  },
  emails:{
    type: Array
  },
  websites:{
    type: Array
  }
}, { timestamps: true })

module.exports = mongoose.model('User', userSchema, "users")
