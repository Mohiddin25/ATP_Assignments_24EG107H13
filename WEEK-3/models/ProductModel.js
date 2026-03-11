import { Schema,model} from "mongoose";

const productSchema=new Schema({
    productId:{
        type:Number,
        required:[true,"ProductId is requird"],
        unique:[true,"Id already exist"],
    },
    productName:{
        type:String,
        required:[true,"ProductName is required"],
    },
    price:{
        type:Number,
        required:[true,"Price is required"],
        min:[10000,"Minimum price should be 10000"],
        max:[50000,"Maximum price should be 50000"],
    },
    brand:{
        type:String,
        required:[true,"Brand is required"],
    }
},{
    versionKey:false,
    timestamps:true,
})

export const productModel=model("product",productSchema)