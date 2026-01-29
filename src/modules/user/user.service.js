
import blog from "../../DB/models/blog.model.js"
import { User } from "../../DB/models/user.model.js"

import { Op } from "sequelize"













export async function getuserbyemail(querydata) {
    const { email } = querydata
    const result = await User.findOne({
        where: {
            email:email
        }
    })
    if(!result){
        throw new Error("no user found")
    }
    

    return result
}


export async function getuserbyid(paramdata) {
   const{id}=paramdata
    const result=await User.findByPk(id,{attributes:{exclude:["role"]}})
    return result
}