const { ObjectId } = require('mongodb')
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSkillSchema = new Schema({
  userId:{
    type: ObjectId,
    required: true
  },
  language: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  level: {
    type: String
  },
  description: {
    type: String
  },
  tags:{
    type: Array
  }
}, { timestamps: true })

module.exports = mongoose.model('UserSkills', userSkillSchema, "usersSkills")
