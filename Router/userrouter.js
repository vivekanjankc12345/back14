const express=require("express");
const userrouter=express.Router();
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const { loginsignupmodel}=require("../Model/loginsignupmodel")
userrouter.post("/register",async(req,res)=>{
  const {email,password}=req.body;
  try{
    bcrypt.hash(password,5, async(err,securepassword)=> {
      // Store hash in your password DB.
      if(err)
      {
        console.log(err)
      }
      else
      {
        let sigup=new loginsignupmodel({email,password:securepassword});
        await sigup.save();
        res.send({"msg":"register"})
      }
  });
  }
  catch (err)
  {
    console.log(err)
  }
})
userrouter.post("/login",async(req,res)=>{
  const {email,password}=req.body;
  try
  {
       const login=await loginsignupmodel.find({email})
       console.log("jii"+login)
       if(login.length>0)
       {
        bcrypt.compare(password,login[0].password, function(err, result) {
          // result == false
          if(result)
          {
             const token=jwt.sign({foo:"bar"},"masai");
             res.send({"msg":"Login Successful","token":token,"email":login[0].password})
          }
          else
          {
            res.send({"msg":"Invalid Credentials"})
          }
      });
       }
       else
       {
         res.send({"msg":"email not found"})
       }
  }
  catch(err)
  {
    console.log(err)
  }

})
module.exports={
  userrouter
}