const express = require('express')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express()
const courses = require('./Routes/courses')
const newQuestion = require('./Routes/question')

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/Prepared')

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use((req, res, next)=>{
  res.header("Access-Control-Allow-Origin","*")
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested_With, Content-Type, Accept, Authorization"
  )
  if(req.method === 'OPTIONS'){
    res.header('Access-Control-Allow-Methods','GET');
    return res.status(200).json({});
  }
  next()
})



app.use('/course',courses)
app.use('/questions',newQuestion)

app.use((req,res,next)=>{
  const error = new Error("Not found")
  error.status = 404
  next(error)
})

app.use((error, req, res, next)=>{
  res.status(error.status || 500)
  res.json({
    "error":{
      message: error.message
    }
  })
  next()
})


const port = process.env.port || 3000
app.listen(port, () => console.log(`Prepared API Listening on port ${port}!`))
