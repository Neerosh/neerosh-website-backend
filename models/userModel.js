const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
  fullname: {
    type: String,
    required: true
  },
  telefone: {
    type: Array
  },
  email:{
    type: Array
  },
  website:{
    type: Array
  }
}, { timestamps: true })

module.exports = mongoose.model('User', userSchema, "users")