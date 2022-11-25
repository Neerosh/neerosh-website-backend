const userInfoModel = require('../models/userInfoModel')
const { ObjectId } = require('mongodb'); 
const { excludeFields } = require('./commonVariables')

const getUserInfo = async (req,res) => {
  if (req.query.userId == undefined){
    res.status(400).json({"Error":"param userId not found."})
    return
  }

  var searchObject = {
    userId: ObjectId(req.query.userId)
  }

  if (req.query.language !== undefined){
    searchObject.language = req.query.language
    const user = await userInfoModel.findOne( searchObject, excludeFields)
    res.status(200).json(user)
    return
  }

  const user = await userInfoModel.find( searchObject )
  res.status(200).json(user)
}

const createUserInfo = async (req,res) => {
  if (req.body.length == 0 ){
    createSingleUserInfo(req,res)
    return
  }
  createManyUserInfos(req,res)
}

const createSingleUserInfo = async (req,res) => {
  const {
    userId, language, title, introduction,interests
  } = req.body
    
  try{
    const user = await userInfoModel.create({
      userId, language, title, introduction,interests
    })
    res.status(200).json(user)
  }catch(err){
    res.status(400).json({error: err.message})
  }
}

const createManyUserInfos = async (req,res) => {
  if (req.body.length == 0 ){
    res.status(400).json({"Error":"request do not contain an array."})
    return
  }
  try{
    const user = await userInfoModel.create(req.body)
    res.status(200).json(user)
  }catch(err){
    res.status(400).json({error: err.message})
  }
}

module.exports = {
  getUserInfo,
  createUserInfo
}