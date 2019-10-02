const express = require('express')
const router = express.Router()


router.get('/',(req,res,next)=>{
  res.json({
    url: req.url
  })
  next()
})


module.exports = router
