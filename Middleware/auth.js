var jwt = require('jsonwebtoken');
const auth=(req,res,next)=>{
  const token=req.headers.authorization;
  console.log(token);
  if(token)
  {
    var decoded = jwt.verify(token, 'masai');
    if(decoded)
    {
      next();
    }
    else
    {
      res.send("plase login first")
    }
  }
  else
  {
    res.send("please login first")
  }
}
module.exports={
  auth
}