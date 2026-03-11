import jwt from 'jsonwebtoken'
const {verify} =jwt

export function verifyToken(req,res,next){
    // token verification logic
    const token=req.cookies?.token
    // if req from unauthoried user
    if(!token){
        return res.status(401).json({message:"please Login"})
    }
    try{
        const decodedToken =verify(token,"abcdef")
        console.log(decodedToken)
        next()
    }catch(err){
        res.status(401).json({message:"session expired"})
    }
}