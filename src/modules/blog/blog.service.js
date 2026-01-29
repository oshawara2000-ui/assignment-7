
import blog from "../../DB/models/blog.model.js";
import { User } from "../../DB/models/user.model.js";
import { Error } from "sequelize";
import Comment from "../../DB/models/comments.model.js";


export async function addblog(bodydata) {
    const { title, description } = bodydata



    const result = await blog.create({ title, description })


    return result

}

export async function getblogbyid(dataparam) {
    const { blogid } = dataparam

    const findresult = await blog.findByPk(blogid, {
        include: {
            model: User
        }
    })

    if (!findresult) {
        throw new Error("blog not found", { cause: { statusCode: 404 } })
    }

    return findresult





}


export async function deleteblogbyitsuser(paramdata, bodydata) {
    const { id } = paramdata
    const { UserId } = bodydata
    const checkblog = await blog.findByPk(id)
    if (!checkblog) {
        throw new Error("no blog with this id")
    }
    const result = await blog.destroy({

        where: {
            UserId: UserId
        }
    })
    if (!result) {
        throw new Error("you cannot delete this")
    }


    return result
}


export async function getallpostsindetailed(bodydata) {
    const result=await blog.findAll({attributes:["id","title"],
        include:[{
            model:User,
        attributes:["id","fullname"]},
           {  model:Comment,
            attributes:["id","content"]
        }],
    })
    return result
}

export async function getallpostsandcountcomments(bodydata) {
    const result=await blog.findAndCountAll({
        include:   {  model:Comment,
            attributes:["id","content"]
        }
    })
    
    return result
}