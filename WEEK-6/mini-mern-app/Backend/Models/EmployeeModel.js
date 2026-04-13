import {Schema,model} from 'mongoose'

const EmpSchema=new Schema({
    name:{
        type:String,
        required:[true,"Username is required"],
        minLength:[4,"Minimum length of Username is 4 charas"],
        maxLength:[10,"Username size exceed 10 chars"],
    },
    email:{
        type:String,
        required:[true,"Email is mandatory"],
        unique:[true,"Email already existed"]
    },
    mobile:{
        type:Number,
        required:[true,"mobileno is required"],
    },
    designation:{
        type:String,
        required:[true,"designation is required"]
    },
    companyName:{
        type:String,
        required:[true,"company name is required"]
    }

},{
    versionKey:false,
    timestamps:true,
});
// Generate Model
export const EmpModel=model("employee",EmpSchema)