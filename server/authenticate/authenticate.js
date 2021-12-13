const jsonwebtoken=require("jsonwebtoken")
const user=require("../collection/collection")


const authenticate=async(req,res,next)=>{
    try {
        const cookie=req.cookies.Tani
        const verify=jsonwebtoken.verify(cookie,process.env.SECRET)

        const details=await user.findOne({_id:verify._id})
        if(!details){
            res.status(400).json("User not found")
        }
        req.data=details
        req.token=details._id
        next()
    } catch (error) {
      res.status(400).json({err:"Un-authrized"})
    }

}
module.exports=authenticate;