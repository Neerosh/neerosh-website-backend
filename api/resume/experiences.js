const { createExperience, getExperiences } = require('../../controllers/experienceController')
const mongoose = require('mongoose')

module.exports = async (req, res) => {
  mongoose.connect(process.env.MONGODB_URI).then(() =>{
    switch(req.method){
      case 'GET':
        getExperiences(req,res)
        break;
      //case 'POST':
      //  createExperience(req,res)
      //  break;
      default:
        res.status(404).send();
    }
  }).catch((err) => {
    res.status(404).send(err);
  })
}