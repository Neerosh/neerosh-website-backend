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
  },
  birthday:{
    type: Date,
    required: true
  },
  address:{
    type: String,
    required: true
  },
  addressCity:{
    type: String,
    required: true
  },
  addressCountry:{
    type: String,
    required: true
  },
  addressState:{
    type: String,
    required: true
  },
  addressNeighborhood:{
    type: String,
    required: true
  },
  addressNumber:{
    type: Number,
    required: true
  }
}, { timestamps: true })

module.exports = mongoose.model('User', userSchema, "users")
