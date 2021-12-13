const mongoose=require("mongoose")
var bcrypt = require('bcryptjs');
const jwebtoken=require("jsonwebtoken")
const webSchema=new mongoose.Schema({
    name:{
        type:String,
        require :true
    },
email:{
    type:String,
        require :true
    },
    phone:{
        type:Number,
            require :true
        }
    ,
    password:{
        type:String,
        require :true
    },tokens:[{
        token:{
            type:String
            
        }
    }]



})
webSchema.methods.createToken=async function(){
  try {
       const token=await jwebtoken.sign({_id:this._id},process.env.SECRET)
this.tokens=this.tokens.concat({token:token})
await this.save()
return token
  } catch (error) {
      console.log(`token generate err: ${error}`)
  }


   
}


webSchema.pre("save",async function(next){
    if(this.isModified("password")){
        this.password= await bcrypt.hash(this.password, 10)
    }
    next()
})

const User=mongoose.model("maiden",webSchema)

module.exports=User;