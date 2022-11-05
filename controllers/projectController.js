const ProjectModel = require('../models/projectModel')

const getProjects = async (req,res) => {

  const projects = await ProjectModel.find()
  res.status(200).json(projects)
}

const createProject = async (req,res) => {
  const {
    name, description, imagePath, urlPath
  } = req.body
    
  try{
    const project = await ProjectModel.create({
      name, description, imagePath, urlPath
    })
    res.status(200).json(project)
  }catch(err){
    res.status(400).json({error: err.message})
  }
}

module.exports = {
  getProjects,
  createProject
}