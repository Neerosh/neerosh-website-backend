const { createSkill,getSkills } = require('../../controllers/skillController')
const mongoose = require('mongoose')

module.exports = async (req, res) => {
  mongoose.connect(process.env.MONGODB_URI).then(() =>{
    switch(req.method){
      case 'GET':
        getSkills(req,res)
        break;
      //case 'POST':
        //createSkill(req,res)
      //  break;
      default:
        res.status(404).send();
    }
  }).catch((err) => {
    res.status(404).send(err);
  })
}