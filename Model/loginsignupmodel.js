const mongoose=require("mongoose");
const logsignschema=mongoose.Schema({
email:String,
password:String
})
const loginsignupmodel=mongoose.model("loginquestion",logsignschema)
module.exports={
  loginsignupmodel
}