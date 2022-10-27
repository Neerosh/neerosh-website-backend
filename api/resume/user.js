const { createUser, getUser } = require('../../controllers/userController')
const mongoose = require('mongoose')

module.exports = async (req, res) => {
  mongoose.connect(process.env.MONGODB_URI).then(() =>{
    switch(req.method){
      case 'GET':
        getUser(req,res)
        break;
      /*case 'POST':
        createUser(req,res)
        break; */
      default:
        res.status(404).send();
    }
  }).catch((err) => {
    res.status(404).send(err);
  })
}