const UserModel = require('../models/userModel')
const { ObjectId } = require('mongodb'); 

const getUser= async (req,res) => {
  if (req.query.id == undefined){
    res.status(400).json({"Error":"param Id not found."})
    return
  }
  const user = await UserModel.findOne({ _id: ObjectId(req.query.id) })
  res.status(200).json(user)
}

const createUser = async (req,res) => {
  const {
    fullname, phone, email, website
  } = req.body
    
  try{
    const user = await UserModel.create({
      fullname,phone, email, website
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