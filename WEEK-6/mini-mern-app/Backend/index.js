import exp from 'express'
import { employeeApp } from './APIs/EmployeeAPI.js'
import {connect} from 'mongoose'
import cors from 'cors'
import dotenv from "dotenv";
dotenv.config();

const app=exp()

// add cors middleware
app.use(cors({
    origin:['https://mern-mini-app-frontend.vercel.app','http://localhost:5173'],
    withCredentials: true
}))
app.use(exp.json())

async function  connectDB(){
    try{
        await connect(process.env.DB_URL)
        console.log("DB connected sucessfully")
        
        // start server
        app.listen(process.env.PORT,()=>console.log(`server on port ${process.env.PORT}...`))
    }catch (err){
        console.log("Error in connection:",err)
    }
}
connectDB()

app.use("/employee-api",employeeApp)
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