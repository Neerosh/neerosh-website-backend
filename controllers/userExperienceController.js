const UserExperienceModel = require('../models/userExperienceModel')
const { ObjectId } = require('mongodb'); 

const getUserExperiences = async (req,res) => {
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

  const experiences = await UserExperienceModel.find( searchObject ).sort({startDate: 1})
  res.status(200).json(experiences)
}

const createUserExperience = async (req,res) => {
  if (req.body.length == 0 ){
    createSingleUserExperience(req,res)
    return
  }
  createManyUserExperiences(req,res)
}

const createSingleUserExperience = async (req,res) => {
  const {
    userId, language, occupation, description, company, city, state, country, startDate, endDate 
  } = req.body

  try{
    const experience = await UserExperienceModel.create({
      userId, language, occupation, description, company, city, state, country, startDate, endDate
    })
    res.status(200).json(experience)
  }catch(err){
    res.status(400).json({error: err.message})
  }
}

const createManyUserExperiences = async (req,res) => {
  if (req.body.length == 0 ){
    res.status(400).json({"Error":"request do not contain an array."})
    return
  }
  try{
    const experience = await UserExperienceModel.create(req.body)
    res.status(200).json(experience)
  }catch(err){
    res.status(400).json({error: err.message})
  }
}

module.exports = {
  createUserExperience,
  getUserExperiences
}