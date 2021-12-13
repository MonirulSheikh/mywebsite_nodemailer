require('dotenv').config()
const express=require("express")
const app=express()
const router=require("./router/router")
//app.use(express.urlencoded({extended:false}))
// require("./router/email")
const cookie_parser=require("cookie-parser")
app.use(cookie_parser())
app.use(express.json())
app.use(router)
require("./db/connection")
const port=process.env.PORT
app.listen(port,()=>console.log(`http://localhost:${port}`))