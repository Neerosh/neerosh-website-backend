const { createUserExperience, getUserExperiences } = require('../../controllers/userExperienceController')
const mongoose = require('mongoose')

module.exports = async (req, res) => {
  mongoose.connect(process.env.MONGODB_URI).then(() =>{
    switch(req.method){
      case 'GET':
        getUserExperiences(req,res)
        break;
      /*case 'POST':
        createUserExperience(req,res)
        break; */
      default:
        res.status(404).send();
    }
  }).catch((err) => {
    res.status(404).send(err);
  })
}