const email=require("nodemailer")
const tarnport=email.createTransport({service:"gmail",auth:{
    user:"monirulsheikh85142@gmail.com",
    pass:"xkvjsgwyzqjrcjoh"

}})
const option={
    from:"monirulsheikh85142@gmail.com"
    ,to:"skm74189@gmail.com",
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
