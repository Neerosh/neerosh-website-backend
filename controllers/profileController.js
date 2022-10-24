const ProfileModel = require('../models/ProfileModel.js')
const { ObjectId } = require('mongodb'); 

const getProfile = async (req,res) => {
  if (req.query.ID == undefined){
    res.status(400).json({"Error":"param ID not found."})
    return
  }
  const profile = await ProfileModel.findOne({ _id: ObjectId(req.query["ID"]) })
  res.status(200).json(profile)
}

const createProfile = async (req,res) => {
  const {
    fullname, introduction, occupation,
    telefone, email, website, interests, languages
  } = req.body
    
  try{
    const profile = await ProfileModel.create({
      fullname, introduction, occupation,
      telefone, email, website, interests, languages
    })
    res.status(200).json(profile)
  }catch(err){
    res.status(400).json({error: err.message})
  }
}

module.exports = {
  getProfile,
  createProfile
}