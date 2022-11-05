const { createProject, getProjects } = require('../controllers/projectController')
const mongoose = require('mongoose')

module.exports = async (req, res) => {
  mongoose.connect(process.env.MONGODB_URI).then(() =>{
    switch(req.method){
      case 'GET':
        getProjects(req,res)
        break;
      /*case 'POST':
        createProject(req,res)
        break; */
      default:
        res.status(404).send();
    }
  }).catch((err) => {
    res.status(404).send(err);
  })
}