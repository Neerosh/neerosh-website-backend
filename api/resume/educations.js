const { createEducation, getEducations } = require('../../controllers/educationController')
const mongoose = require('mongoose')

module.exports = async (req, res) => {
  mongoose.connect(process.env.MONGODB_URI).then(() =>{
    switch(req.method){
      case 'GET':
        getEducations(req,res)
        break;
      //case 'POST':
      //  createEducation(req,res)
      //  break;
      default:
        res.status(404).send();
    }
  }).catch((err) => {
    res.status(404).send(err);
  })
}