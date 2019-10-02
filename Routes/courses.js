const express = require('express')
const router = express.Router()
const Course = require('../Models/course')



router.get('/',(req,res,next)=>{
  const result = Course.find()
  .select(`questions.question questions.options questions.answer questions.explaination questions._id`)
  .exec()
  .then(result=>{
    res.status(200).json({count: result.length ,result})
  })
  .catch(err=>console.log(err))

})


router.get('/:courseCode',(req,res,next)=>{
  const result = Course.find({
    "courseCode": req.params.courseCode
  })
  .select(`courseCode title questions.question questions.options questions.answer questions.explaination questions._id`)
  .exec()
  .then(result=>{
    res.status(200).json(result)
  })
  .catch(err=>console.log(err))
})





router.get('/:courseCode/:limit',(req,res,next)=>{
  const result = Course.find({
    "courseCode": req.params.courseCode
  })
  .select(`_id courseCode questions.question questions.options questions.answer questions.explaination questions._id`)
  .limit(parseInt(req.params.limit))
  .exec()
  .then(result=>{
    res.status(200).json({count: result.length ,result})
  })
  .catch(err=>console.log(err))
})





router.get('/:courseCode/:limit/:topic',(req,res,next)=>{
  res.json({
    course:`${req.params.limit} ${req.params.courseCode} questions returned for  the topic ${req.params.topic}`
  })
  next()
})


router.patch('/:courseCode',(req,res,next)=>{
  const id = req.params.courseCode
  const updateOps = {}
  // for(const ops of req.body){
  //   updateOps[ops.propName] = ops.value;
  // }
  Course.update({courseCode: id},{$push:{
    questions:{
      topic: req.body.topic,
      question: req.body.question,
      options:req.body.options,
      answer:req.body.answer,
      explanation:req.body.explanation
    }
  }}).then((result)=>{
    res.json(result)
  })
})

module.exports = router
