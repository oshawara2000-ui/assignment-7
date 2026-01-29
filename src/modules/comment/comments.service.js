

import { Model, Op } from "sequelize";
import Comment from "../../DB/models/comments.model.js";
import { User } from "../../DB/models/user.model.js";
import blog from "../../DB/models/blog.model.js";





export async function addcomments(databody) {


    const result = await Comment.bulkCreate(databody)


    return result

}

export async function updatecommentbyid(bodydata, paramdata) {
    const { id } = paramdata
    const { UserId, content } = bodydata

    const checkid = await Comment.findByPk(id)

    if (!checkid) {
        throw new Error("no comment with this id")
    }
    const result = await Comment.update({
        content: content
    },
        {
            where: {
                id: id,
                UserId: UserId,
            }
        }
    )

    if (!result) {
        throw new Error("you dont has access to delete this")
    }


    return result

}



export async function findorcreatecomment(bodydata) {
    const { UserId, blogId, content } = bodydata
    const result = await Comment.findOrCreate({
        where: {
            UserId: UserId,
            blogId: blogId,
            content: content
        },

    })


    return result
}

export async function findcommentwithspecificword(querydata) {
    const { like } = querydata

    const result = await Comment.findAndCountAll({
        where: {
            content: {
                [Op.substring]: like,
            }


        }
    })
    return result
}

export async function getlatest3commentsforpost(paramdata) {
    const { blogId } = paramdata;

    const result = await Comment.findAll({
        where: {
            blogId: blogId
        },
        order: [["createdAt", "DESC"]],
        limit: 3
    });

    return result;
}


export async function getcommentewithuserandblog(paramdata) {
    const { id } = paramdata
    const result = await Comment.findByPk(id,
        {
            include: 
                [{ model: User },
                    { model: blog }]
        
        
    }
  )
return result
}
