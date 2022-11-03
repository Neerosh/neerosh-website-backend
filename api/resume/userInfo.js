const { createUserInfo, getUserInfo} = require('../../controllers/UserInfoController')
const mongoose = require('mongoose')

module.exports = async (req, res) => {
  mongoose.connect(process.env.MONGODB_URI).then(() =>{
    switch(req.method){
      case 'GET':
        getUserInfo(req,res)
        break;
      /*case 'POST':
        createUserInfo(req,res)
        break; */
      default:
        res.status(404).send();
    }
  }).catch((err) => {
    res.status(404).send(err);
  })
}