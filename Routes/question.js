const express = require('express');
const mongoose = require('mongoose');
const router = express.Router()
const Course = require('../Models/course')



router.post('/',(req,res,next)=>{

  const course = new Course({
    title: req.body.title,
    courseCode: req.body.code,
    // questions:{
    //   topic: "Bones",
    //   question: "What is the function of bones?",
    //   options:['Adds extra life to me','changes our economy','i don\'t know','aids movement'],
    //   answer:3,
    //   explaination:"No explaination"
    // }
  });

  course
  .save()
  .then(result=>{
    res.status(201).json({
      message: "Handling POST Request to /questions",
      createdCourse: course
    })
  })

})


module.exports = router
