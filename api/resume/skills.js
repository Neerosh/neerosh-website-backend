const { createSkill,getSkills } = require('../../controllers/skillController')
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI)
//mongoose.connection.useDb('neerosh-site')

module.exports = async (req, res) => {
  switch(req.method){
    case 'GET':
      getSkills(req,res)
      break;
    case 'POST':
      createSkill(req,res)
      break;
    default:
      res.status(404).send();
  }

}