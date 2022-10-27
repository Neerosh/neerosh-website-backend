const { createUserBasic, getUserBasic} = require('../../controllers/userBasicController')
const mongoose = require('mongoose')

module.exports = async (req, res) => {
  mongoose.connect(process.env.MONGODB_URI).then(() =>{
    switch(req.method){
      case 'GET':
        getUserBasic(req,res)
        break;
      /*case 'POST':
        createUserBasic(req,res)
        break; */
      default:
        res.status(404).send();
    }
  }).catch((err) => {
    res.status(404).send(err);
  })
}