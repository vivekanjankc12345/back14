const express=require("express");
const {questionmodel}=require("../Model/questionmodel")
const questionrouter=express.Router();
questionrouter.get("/question",async(req,res)=>{
  try{
    let que=req.body;
    console.log(que)
       const get=await questionmodel.find(que);
       console.log(get)
       res.send(get)
  }
  catch(err)
  {
    res.send(err)
  }
})
questionrouter.post("/question",async(req,res)=>{
  const payload=req.body;
  try
  {
     const post=new questionmodel(payload);
     await post.save();
     res.send("data added sucessfully")
  }
  catch (err)
  {
res.send(err)
  }
})
module.exports={
  questionrouter
}