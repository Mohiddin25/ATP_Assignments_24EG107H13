// Create user schema
import { Schema,model } from "mongoose";

const userSchema=new Schema({
    username:{
        type:String,
        required:[true,"Username is required"],
        minLength:[4,"Minimum length of Username is 4 charas"],
        maxLength:[10,"Username size exceed 10 chars"],
    },
    password:{
        type:String,
        required:[true,"password required"],
    },
    email:{
        type:String,
        required:[true,"Email is mandatory"],
        unique:[true,"Email already existed"]
    },
    age:{
        type:Number,
    },

},{
    versionKey:false,
    timestamps:true,
});
// Generate Model
export const UserModel=model("user",userSchema)