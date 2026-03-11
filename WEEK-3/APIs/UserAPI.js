// create min -express app
import exp from 'express'
import {UserModel} from '../models/UserModel.js'
import {verifyToken} from '../middlewares/verifyToken.js'
import {hash,compare} from 'bcryptjs'
import jwt from 'jsonwebtoken'
const {sign}=jwt
export const userApp=exp.Router()

// Create new User
userApp.post("/users",async(req,res)=>{
    // get new user obj from req
    const newUser=req.body;
    // hash the password
    const hashedPassword=await hash(newUser.password,10)
    // replace plain password with hashed password
    newUser.password=hashedPassword
    //create new document 
    const newUserDocument=new UserModel(newUser)
    // save
    const result=await newUserDocument.save()
    console.log("result:",result)
    // send response
    res.status(201).json({message:"User created"})
})

// read all users
userApp.get("/users",verifyToken,async(req,res)=>{
    // read all users from db
    let usersList=await UserModel.find()
    // send response
    res.status(201).json({message:'users',payload:usersList})
})

// read user by ObjectId
userApp.get("/users/:id",async(req,res)=>{
    // Read object id from req param
    const uid=req.params.id
    // find user by id
    const userObj=await UserModel.findById(uid)
    if(!userObj){
        return res.status(404).json({message:"User not found"})
    }
    // send res
    res.status(201).json({message:"user",payload:userObj})
})

// update user by id
userApp.put("/users/:id",verifyToken,async(req,res)=>{
    // get the modified user
    const ModifiedUser=req.body
    // get user id
    const uid=req.params.id
    // find and update by id
   const updatedUser= await UserModel.findByIdAndUpdate(uid,{...ModifiedUser},{new:true},{runValidators:true})
    res.status(201).json({message:"User updated ",payload:updatedUser})
})

// delete an user by id
userApp.delete("/users/:id",async(req,res)=>{
    // get the id 
    const uid=req.params.id
    // delete by id
    const deletedUser=await UserModel.findByIdAndDelete(uid)
    if(!deletedUser){
        return res.status(404).json({message:"User not found"})
    }
    res.status(201).json({message:"User deleted"})
})

// user Login
userApp.post('/auth',async(req,res)=>{
    // get user credentials
    // find the user in DB
    const {email,password}=req.body
    // verify user email
    let user=await UserModel.findOne({email:email})
    if(user===null){
        return res.status(400).json({message:"Invaild email"})
    }
    let vaildPass=await compare(password,user.password)
    if(vaildPass===false){
        return res.status(400).json({message:"Invaild password"})
    }

    // if passwords are matched
    // create token (jsonwebtoken -jwt --jaat)
    const signedToken=sign({email:user.email},"abcdef",{expiresIn:"1h"})
    // store token as httpOnly cookie
    res.cookie("token",signedToken,{
        httpOnly:true,
        sameSite:"lax",
        secure:false
    })
    res.status(200).json({message:"Login sucess",payload:user})

})
