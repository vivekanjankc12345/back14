const mongoose=require("mongoose");
const questionschema=mongoose.Schema({
  quiz: {
    creator: String,
    title: String,
    description: String,
    questions: [
      {
        title: String,
        answerOptions: [
          String,
          String,
          String,
          String
        ],
        correctOptions:[Number],
      }
    ]
  },
  leaderboard: [
    {
      email:String ,
      score:Number,
    },
  ]
    })
const questionmodel=mongoose.model("quiz",questionschema)
module.exports={
  questionmodel
}