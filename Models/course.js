const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
  title:String,
  courseCode: {
    type: String,
    unique:true,
    index:true
  },
  questions:[
    {
      topic:String,
      question:String,
      options:[String],
      answer:{type:Number, default:null},
      explanation:{
        type:String,
        default:null
      },
      confirmed:{
        type: Boolean,
        default:false
      }
    }
  ]
})

module.exports = mongoose.model('Course',CourseSchema)
