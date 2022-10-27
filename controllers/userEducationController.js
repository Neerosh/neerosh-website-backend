const UserEducationModel = require('../models/userEducationModel')
const { ObjectId } = require('mongodb'); 

const getUserEducations = async (req,res) => {
  if (req.query.userId == undefined){
    res.status(400).json({"Error":"param userId not found."})
    return
  }

  var searchObject = {
    userId: ObjectId(req.query.userId)
  }

  if (req.query.language !== undefined){
    searchObject.language = req.query.language
  }

  const educations = await UserEducationModel.find(searchObject).sort({startDate: 1})
  res.status(200).json(educations)
}

const createUserEducation = async (req,res) => {
  if (req.body.length == 0 ){
    createSingleUserEducation(req,res)
    return
  }
  createManyUserEducations(req,res)
}

const createSingleUserEducation = async (req,res) => {
  const {
    userId, courseName, language, description, institution, city, state, country, startDate, endDate 
  } = req.body

  try{
    const education = await UserEducationModel.create({
      userId, courseName, language, description, institution, city, state, country, startDate, endDate 
    })
    res.status(200).json(education)
  }catch(err){
    res.status(400).json({error: err.message})
  }
}

const createManyUserEducations = async (req,res) => {
  if (req.body.length == 0 ){
    res.status(400).json({"Error":"request do not contain an array."})
    return
  }
  try{
    const education = await UserEducationModel.create(req.body)
    res.status(200).json(education)
  }catch(err){
    res.status(400).json({error: err.message})
  }
}

module.exports = {
  createUserEducation,
  getUserEducations
}