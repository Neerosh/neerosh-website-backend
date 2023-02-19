const UserModel = require('../models/userModel')
const { ObjectId } = require('mongodb'); 
const { excludeFields } = require('./commonVariables')

const getUser= async (req,res) => {
  if (req.query.userId == undefined){
    res.status(400).json({"Error":"param Id not found."})
    return
  }
  const user = await UserModel.findOne({ _id: ObjectId(req.query.userId) }, excludeFields)
  res.status(200).json(user)
}

const createUser = async (req,res) => {
  const {
    fullname, phones, emails, websites, birthdary, address, addressCity, addressCountry, addressNeighborhood, addressState, addressNumber
  } = req.body
    
  try{
    const user = await UserModel.create({
      fullname, phones, emails, websites, birthdary, address, addressCity, addressCountry, addressNeighborhood, addressState, addressNumber
    })
    res.status(200).json(user)
  }catch(err){
    res.status(400).json({error: err.message})
  }
}

module.exports = {
  getUser,
  createUser
}