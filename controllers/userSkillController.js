const UserSkillModel = require('../models/userSkillModel')
const { ObjectId } = require('mongodb'); 

const getUserSkills = async (req,res) => {
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

  const skills = await UserSkillModel.find( searchObject ).sort({name: 1})
  res.status(200).json(skills)
}

const createUserSkill = async (req,res) => {
  if (req.body.length == 0 ){
    createSingleUserSkill(req,res)
    return
  }
  createManyUserSkills(req,res)
}

const createSingleUserSkill = async (req,res) => {
  const {userId, name, language, type, level, description, tags} = req.body
    
  try{
    const skill = await UserSkillModel.create({userId, name, language, type, level, description, tags})
    res.status(200).json(skill)
  }catch(err){
    res.status(400).json({error: err.message})
  }
}

const createManyUserSkills = async (req,res) => {
  if (req.body.length == 0 ){
    res.status(400).json({"Error":"request do not contain an array."})
    return
  }
  try{
    const skill = await UserSkillModel.create(req.body)
    res.status(200).json(skill)
  }catch(err){
    res.status(400).json({error: err.message})
  }
}

module.exports = {
  createUserSkill,
  getUserSkills
}