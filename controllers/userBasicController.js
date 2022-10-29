const UserBasicModel = require('../models/userBasicModel')
const { ObjectId } = require('mongodb'); 

const getUserBasic = async (req,res) => {
  if (req.query.userId == undefined){
    res.status(400).json({"Error":"param userId not found."})
    return
  }

  var searchObject = {
    userId: ObjectId(req.query.userId)
  }

  if (req.query.language !== undefined){
    searchObject.language = req.query.language
    const user = await UserBasicModel.findOne( searchObject )
    res.status(200).json(user)
    return
  }

  const user = await UserBasicModel.find( searchObject )
  res.status(200).json(user)
}

const createUserBasic = async (req,res) => {
  if (req.body.length == 0 ){
    createSingleUserBasic(req,res)
    return
  }
  createManyUserBasics(req,res)
}

const createSingleUserBasic = async (req,res) => {
  const {
    userId, language, title, introduction,interests
  } = req.body
    
  try{
    const user = await UserBasicModel.create({
      userId, language, title, introduction,interests
    })
    res.status(200).json(user)
  }catch(err){
    res.status(400).json({error: err.message})
  }
}

const createManyUserBasics = async (req,res) => {
  if (req.body.length == 0 ){
    res.status(400).json({"Error":"request do not contain an array."})
    return
  }
  try{
    const user = await UserBasicModel.create(req.body)
    res.status(200).json(user)
  }catch(err){
    res.status(400).json({error: err.message})
  }
}

module.exports = {
  getUserBasic,
  createUserBasic
}