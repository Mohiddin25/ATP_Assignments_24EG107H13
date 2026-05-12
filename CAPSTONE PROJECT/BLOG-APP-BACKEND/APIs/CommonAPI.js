import exp from 'express'
import {UserModel} from '../models/UserModel.js'
import { hash,compare } from "bcrypt";
import jwt from 'jsonwebtoken'
import { verifyToken } from '../middlewares/verifyToken.js'
import cloudinary from '../config/cloudinary.js'
import { upload } from '../config/multer.js'
import { uploadToCloudinary } from '../config/cloudinaryUpload.js'
const {sign}=jwt
export const commonApp=exp.Router()

// Route for register
commonApp.post('/user', upload.single("profileImageUrl"), async (req, res, next) => {
  let cloudinaryResult;

  try {
    const { email, password, role } = req.body;

    // validation
    if (!email || !password || !role) {
      return res.status(400).json({ message: "All fields required" });
    }

    const allowedRoles = ["USER", "AUTHOR"];
    if (!allowedRoles.includes(role)) {
      return res.status(400).json({ message: "Invalid role" });
    }

    // check duplicate
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // upload image
    if (req.file) {
      cloudinaryResult = await uploadToCloudinary(req.file.buffer);
    }

    // hash password
    const hashedPassword = await hash(password, 12);

    // create user object
    const userObj = {
      email,
      password: hashedPassword,
      role,
      profileImageUrl: cloudinaryResult?.secure_url
    };

    const newUserDoc = new UserModel(userObj);
    await newUserDoc.save();

    res.status(201).json({ message: "User created" });

  } catch (err) {
    console.log(err);

    if (cloudinaryResult?.public_id) {
      await cloudinary.uploader.destroy(cloudinaryResult.public_id);
    }

    next(err);
  }
});

// Route for Login (USER,ADMIN,AUTHOR)
commonApp.post('/login',async(req,res)=>{
    // get email,password from req.body
    const {email,password}=req.body
    // verify email and password
    const user=await UserModel.findOne({email:email})
    if(!user){
        return res.status(400).json({message:"Invalid email"})
    }
    const vaildPassword=await compare(password,user.password)
    if(!vaildPassword){
        return res.status(400).json({message:"Invaild password"})
    }

    // after verification generate a token 
    const signedToken=sign({id:user._id,email:email,role:user.role},process.env.SECRET_KEY,{expiresIn:'1h'})
    // store the token in httpOnly cookie
    res.cookie("token",signedToken,{
        httpOnly:true,
        sameSite:"lax",
        secure:false
    })
    // delete password from user object
    const userObj=user.toObject()
    delete userObj.password
    res.status(200).json({message:"Login sucess",payload:userObj})

})
// Route for Logout
commonApp.get("/logout",(req,res)=>{
    res.clearCookie("token",{
        httpOnly:true,
        sameSite:"lax",
        secure:false
    })
    res.status(200).json({message:"Logout success"})
})

// change password
commonApp.put("/password",verifyToken("USER","AUTHOR","ADMIN"),async(req,res)=>{
    // check current password and new password are same
    const {currentPassword,newPassword}=req.body
    if(currentPassword===newPassword){
        return res.status(400).json({message:"Password should not be same"})
    }
    // get current password of user/admin/author
    const userId=req.user?.id
    const UserDocument=await UserModel.findById(userId)
    const isMatch=await compare(currentPassword,UserDocument.password)
    if(!isMatch){
        return res.status(400).json({message:"Yours current password is wrong"})
    }
    const newPasswordHash=await hash(newPassword,12)
    UserDocument.password=newPasswordHash
    await UserDocument.save()
    res.status(200).json({message:"password changed successfully"})
})