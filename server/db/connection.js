const mongoose=require("mongoose")
const Db=process.env.DB;
mongoose.connect(Db,{useNewUrlParser:true,useCreateIndex:true,
    useUnifiedTopology:true,useFindAndModify:false}).then(()=>console.log("Connection Successful")).
    catch((err)=>{console.log(`connectin fail due to ${err}`)})