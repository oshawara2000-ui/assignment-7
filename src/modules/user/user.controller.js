import express from "express"
import { getuserbyemail,getuserbyid} from "./user.service.js"

const userrouter=express.Router()


userrouter.get("/",async(req,res)=>{
 const result= await getusers(req.query)
return res.status(200).json({msg:"done",result})
})

userrouter.patch("/:userid",async(req,res)=>{
const result=await updateuserbyid(req.params,req.body)

    
    return res.status(200).json({msg:"updated",result})
})
userrouter.delete("/:userid",async(req,res)=>{
const result=await dlete(req.params)

    
    return res.status(200).json({msg:"deleted",result})
})


userrouter.get("/:id",async(req,res)=>{
 const result= await getuserbyid(req.params)
return res.status(200).json({msg:"done",result})
})



userrouter.get("/user/getuserbyemail",async(req,res)=>{
    const result=await getuserbyemail(req.query)
   return res.status(200).json({msg:"ok",result}) 
})


export default userrouter