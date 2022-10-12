const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config()

const resume = require('./api/resume/skills.js')
const app = express();

//middleware
app.use(bodyParser.json());
app.use(cors());
app.use('/api/resume', resume)
app.use(express.static(__dirname + '/frontend/'));

app.get(/.*/, (req, res) => res.sendFile(__dirname+ '/frontend/index.html'));

const port = process.env.PORT || 5000

//connect to db 
mongoose.connect(process.env.MONGODB_URI)
.then(()=>{
  app.listen(port, () => console.log(`Server started on port ${port}`))
}).catch((error) =>{
  console.log(error)
})