const express=require("express")
const router=new express.Router()
const bcrypt = require('bcryptjs');
const user=require("../collection/collection")
const auth=require('../authenticate/authenticate')



router.get("/",(req,res)=>{
    res.send("testing")
})


router.post("/register",async(req,res)=>{
    try {
        const {fname,email,phone,pass,cpass}=req.body
   if(!fname || !email || !phone|| !pass|| !cpass){
      return res.status(400).json({ans:"Fill in The Blank "})
   }
const info=await user.findOne({email:email})
if(info){
    res.status(400).json({ans:"Email Alredy Exit"})
}

else if(pass===cpass){
    const data=new user({name:fname,email:email,phone:phone,password:pass})
const token=await data.createToken()
//console.log("register token : " +token)
    const result=await data.save()
   if(result){
       res.status(200).json({succes:"Registation Successful"})
   }
}else{
    res.status(400).json({ans:"Password Not Match"})
}
    //res.send("login here")
        //res.send(req.body)
//console.log(req.body)
    } catch (error) {
        console.log(`login err:${error}`)
        res.status(400).json({error})
    }
   
})

// Login start 
router.post("/login" ,async(req,res)=>{
try {
    const {mail,pass1}=req.body
    if(!mail || !pass1) {
        return res.status(400).json({login:"please Fill The All Field"})
    }
 const info1= await user.findOne({email:mail})
 const verify=await  bcrypt.compare(pass1, info1.password)
//console.log(verify)
const token=await info1.createToken()
//console.log("login token" +token)
if(info1){

    if(verify){
        res.cookie("Tani",token)
    res.status(200).json({success:"Login Successful"})
    }else{
        res.status(400).json({login:"Login Information Invalid"})
    }
}else{
    res.status(400).json({login:"Login Information Invalid"})
}

} catch (error) {
    res.send(error)

}
})

// Login End


// get data start
router.get("/getdata",auth ,(req,res)=>{
    res.send(req.data)
})


// get data End
// home page start

//home page

module.exports=router;