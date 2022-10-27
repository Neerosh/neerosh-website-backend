const { ObjectId } = require('mongodb')
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userBasicInfoSchema = new Schema({
  userId:{
    type: ObjectId,
    required: true
  },
  language:{
    type: String,
    required: true
  },
  title:{
    type: String
  },
  introduction:{
    type: String
  },
  interests:{
    type: Array
  }
}, { timestamps: true })

module.exports = mongoose.model('UserBasic', userBasicInfoSchema, "usersBasics")
