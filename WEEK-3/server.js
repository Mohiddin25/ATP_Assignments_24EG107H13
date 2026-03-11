import exp from 'express'
import { connect } from 'mongoose'
import { userApp } from './APIs/UserAPI.js'
import {productApp} from './APIs/ProductAPI.js'
import cookieParser from 'cookie-parser'

// create express application
const app=exp()
// add body parser
app.use(exp.json())
// add cookie parser middleware
app.use(cookieParser())
app.use("/user-api",userApp)
// connect DB
async function  connectDB(){
    try{
        await connect("mongodb://localhost:27017/mydb")
        console.log("DB connected sucessfully")
        
        // start server
        app.listen(2000,()=>console.log("server on port 2000..."))
    }catch (err){
        console.log("Error in connection:",err)
    }
}
connectDB()
app.use("/product-api",productApp)

// error handling middleware
app.use((err,req,res,next)=>{
    // ValidationError
    if(err.name==="ValidationError"){
        return res.status(400).json({message:"error occurred",error:err.message})
    }
    // CastError
    if(err.name==="CastError"){
        return res.status(400).json({message:"error occurred",error:err.message})
    }
    // send server side error
    res.status(500).json({message:"error occured",error:err.message})
})