const EducationModel = require('../models/educationModel')

const getEducations = async (req,res) => {
  const educations = await EducationModel.find({}).sort({startDate: 1})
  res.status(200).json(educations)
}

const createEducation = async (req,res) => {
  const {name, description, location, startDate, endDate } = req.body

  try{
    const education = await EducationModel.create({name, description, location, startDate, endDate})
    res.status(200).json(education)
  }catch(err){
    res.status(400).json({error: err.message})
  }
}

module.exports = {
  createEducation,
  getEducations
}