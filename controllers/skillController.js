const SkillModel = require('../models/skillModel')

const getSkills = async (req,res) => {
  const skills = await SkillModel.find({}).sort({name: 1})
  res.status(200).json(skills)
}

const createSkill = async (req,res) => {
  const {name, type, level, description} = req.body
    
  try{
    const skill = await SkillModel.create({name, type, level, description})
    res.status(200).json(skill)
  }catch(err){
    res.status(400).json({error: err.message})
  }
}

module.exports = {
  createSkill,
  getSkills
}