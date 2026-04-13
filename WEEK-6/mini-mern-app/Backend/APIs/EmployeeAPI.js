import exp from 'express'
import { EmpModel } from '../Models/EmployeeModel.js'

export const employeeApp=exp.Router()

// Create an employee
employeeApp.post("/employee",async(req,res)=>{
    const newEmployee=req.body
    const EmployeeDocument= new EmpModel(newEmployee)
    const result=await EmployeeDocument.save()
    res.status(201).json({message:"Employee created",payload:EmployeeDocument})
})

employeeApp.get("/employee",async(req,res)=>{
    const employeeDetails=await EmpModel.find()
    if(employeeDetails){
        return res.status(200).json({message:"Employees",payload:employeeDetails})
    }
    res.status(404).json({message:"No Employee details",payload:[]})
})

employeeApp.delete("/employee/:id",async(req,res)=>{
    const uid=req.params.id
    const deletedEmp=await EmpModel.findByIdAndDelete(uid)
    if(!deletedEmp){
        return res.status(404).json({message:"Employee not found"})
    }
    res.status(200).json({message:"Employee deleted"})
})

employeeApp.put("/employee/:id",async(req,res)=>{
    const modifiedEmpDetails=req.body
    const uid=req.params.id
    const modifiedEmp=await EmpModel.findByIdAndUpdate(uid,{...modifiedEmpDetails},{returnDocument:"after"},{runValidators:true})
    if(!modifiedEmp){
        return res.status(404).json({message:"Employee not found"})
    }
    res.status(200).json({message:"Employee modified",payload:modifiedEmp})
})
