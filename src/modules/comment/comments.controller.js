import express from "express"
import { addcomments, updatecommentbyid, findorcreatecomment, findcommentwithspecificword,getlatest3commentsforpost ,getcommentewithuserandblog} from "./comments.service.js"


const commentrouter = express.Router()



commentrouter.post("/", async (req, res) => {
    const result = await addcomments(req.body)

    return res.status(201).json({ msg: "comments created", result })
})


commentrouter.patch("/:id", async (req, res) => {
    const result = await updatecommentbyid(req.body, req.params)

    return res.status(201).json({ msg: "comments updated", result })
})


commentrouter.post("/findorcreate", async (req, res) => {
    const result = await findorcreatecomment(req.body)

    return res.status(201).json({ msg: "comment updated or created", result })
})

commentrouter.get("/", async (req, res) => {
    
    
    const result = await findcommentwithspecificword(req.query);
   
    return res.status(200).json({ msg: "done", result });
});

commentrouter.get("/latest/:blogId", async (req, res) => {
  
  
    const result = await getlatest3commentsforpost(req.params);
    return res.status(200).json({ msg: "done", result });
});

commentrouter.get("/details/:id", async (req, res) => {
  
  
    const result = await getcommentewithuserandblog(req.params);
    return res.status(200).json({ msg: "done", result });
});




export default commentrouter