import exp from 'express'
import {productModel} from '../models/ProductModel.js'
import {verifyToken} from '../middlewares/verifyToken.js'

export const productApp=exp.Router()

// create product ->POST
productApp.post("/products",async(req,res)=>{
    const newProduct=req.body
    const newProductDocument=new productModel(newProduct)
    const result=await newProductDocument.save()
    res.status(201).json({message:"Product created"})
})

// read all products ->GET
productApp.get("/products",verifyToken,async(req,res)=>{
    let result=await productModel.find()
    res.status(201).json({message:"Products",payload:result})
})

//  Read a product by productId
productApp.get("/products/:id",verifyToken,async(req,res)=>{
    const uid=req.params.id
    const product=await productModel.findOne({productId:uid})
    if(!product){
        return res.status(404).json({message:"Product not found"})
    }
    res.status(201).json({message:"Product",payload:product})
})

// Delete a product by productId
productApp.delete("/products/:id",verifyToken,async(req,res)=>{
    const pid=req.params.id
    await productModel.deleteOne({productId:pid})
    res.status(201).json({message:"Product deleted"})
})