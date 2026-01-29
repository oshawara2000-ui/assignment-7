import express from "express"
import {  createorupdate, signup } from "./auth.service.js"



const authrouter= express.Router()

authrouter.post("/signup",async (req,res)=>{
const result=await signup(req.body)
return res.status(201).json({msg:"created",result})

})



authrouter.put("/:id",async(req,res)=>{
    const result=await createorupdate(req.params,req.body)
    return res.status(201).json({msg:"created or updated successfully",result})
})







export default authrouter