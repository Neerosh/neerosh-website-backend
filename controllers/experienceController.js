const ExperienceModel = require('../models/experienceModel')

const getExperiences = async (req,res) => {
  const experiences = await ExperienceModel.find({}).sort({startDate: 1})
  res.status(200).json(experiences)
}

const createExperience = async (req,res) => {
  const {name, description, location, startDate, endDate } = req.body

  try{
    const experience = await ExperienceModel.create({name, description, location, startDate, endDate})
    res.status(200).json(experience)
  }catch(err){
    res.status(400).json({error: err.message})
  }
}

module.exports = {
  createExperience,
  getExperiences
}