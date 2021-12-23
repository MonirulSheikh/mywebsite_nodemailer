const email=require("nodemailer")
const tarnport=email.createTransport({service:"gmail",auth:{
    user:"",
    pass:""

}})
const option={
    from:""
    ,to:"",
    subject:"Email send Using Node js",
   msg:"fgfgfdgdfgdgdfgdgfd"

}

tarnport.sendMail(option,(err,result)=>{
    if(err){
        console.log("send Fail "+err)

    }else{
        console.log( result)
    }
})
