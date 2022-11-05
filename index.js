const bodyParser = require('body-parser')
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()

//API
const projects = require('./api/project')
const resumeProfile = require('./api/resume/user')
const resumeUserBasic = require('./api/resume/userInfo')
const resumeSkills = require('./api/resume/userSkills')
const resumeExperiences = require('./api/resume/userExperiences')
const resumeEducations = require('./api/resume/userEducations')

const app = express();

//middleware
app.use(bodyParser.json());
app.use(cors());
app.use('/api/resume/user/info',resumeUserBasic)
app.use('/api/resume/user/experiences', resumeExperiences)
app.use('/api/resume/user/educations',resumeEducations)
app.use('/api/resume/user/skills', resumeSkills)
app.use('/api/resume/user',resumeProfile)
app.use('/api/project',projects)
app.use('/', express.static(__dirname+'/frontend'));

app.get('*', (req, res) => { 
  res.sendFile(__dirname+ '/frontend/index.html')
});

const port = process.env.PORT || 5000

//connect to db 
mongoose.connect(process.env.MONGODB_URI)
.then(()=>{
  app.listen(port, () => console.log(`Server started on port ${port}`))
}).catch((error) =>{
  console.log(error)
})