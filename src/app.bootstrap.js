import express from "express"
import { syncdb, testdbconnection } from "./DB/connection.js"
import authrouter from "./modules/auth/auth.controller.js"
import userrouter from "./modules/user/user.controller.js"
import blogrouter from "./modules/blog/blog.controller.js"
import commentrouter from "./modules/comment/comments.controller.js"

async function bootstrap() {




    const app = express()
    const port = 3010
    await testdbconnection()
    await syncdb()
    app.use(express.json())



    app.use("/comment", commentrouter)
    app.use("/blog", blogrouter)
    app.use("/user", userrouter)
    app.use("/auth", authrouter)
    app.use((error, req, res, next) => {
        const statusCode = error.cause?.statusCode || error.statusCode || 500

        const response = {
            message: error.message, error, errstack: error.stack
        }



        return res.status(statusCode).json(response)
    })


    app.listen(port, () => console.log(`Example app listening on port ${port}!`))
}

export default bootstrap