import exp from 'express'
import { employeeApp } from './APIs/EmployeeAPI.js'
import {connect} from 'mongoose'
import cors from 'cors'

const app=exp()

// add cors middleware
app.use(cors({
    origin:['http://localhost:5173']
}))
app.use(exp.json())

async function  connectDB(){
    try{
        await connect("mongodb://localhost:27017/mydb2")
        console.log("DB connected sucessfully")
        
        // start server
        app.listen(3000,()=>console.log("server on port 3000..."))
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