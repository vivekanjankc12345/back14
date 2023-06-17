const express=require("express");
const app=express();
const {auth}=require("./Middleware/auth")
const {connection}=require("./Config/db")
const {userrouter}=require("./Router/userrouter")
const {questionrouter}=require("./Router/questionrouter")
var cors = require('cors')
app.use(cors({
  origin:"*"
}));
app.use(express.json())
app.use("/user",userrouter)
app.use(auth)
app.use("/quiz",questionrouter)
app.listen(8080,async()=>{
  try{
    await connection
    console.log("connected to db");
  }
  catch (err)
  {
    console.log(err)
  }
  console.log("port 8080 is working");
})