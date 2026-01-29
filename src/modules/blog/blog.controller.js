import express from "express"
import { addblog ,getblogbyid,deleteblogbyitsuser,getallpostsandcountcomments, getallpostsindetailed} from "./blog.service.js"




const blogrouter=express.Router()

blogrouter.post("/",async(req,res)=>{

    const result=await addblog(req.body)

return res.status(201).json({msg:"added",result})
})



blogrouter.get("/blog/:blogid",async(req,res)=>{

    const result=await getblogbyid(req.params)

return res.status(201).json({msg:"done",result})
})


blogrouter.delete("/:id",async(req,res)=>{
const result=await deleteblogbyitsuser(req.params,req.body)


    return res.status(201).json({msg:"deleted",result})
})


blogrouter.get("/details",async(req,res)=>{
const result=await  getallpostsindetailed(req.body)

  return res.status(201).json({msg:"done",result})
})


blogrouter.get("/allblogsandcountcomments",async(req,res)=>{
const result=await getallpostsandcountcomments(req.body)

return res.status(201).json({msg:"done",result})
})





export default blogrouter