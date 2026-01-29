import { sequelize } from "../connection.js";
import { DataTypes,Model } from "sequelize";
import { User } from "./user.model.js";
import blog from "./blog.model.js";



class Comment extends Model {}

Comment.init(
  {
    
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
   
  },
  {
   
    sequelize,


  
  },
  
  
  
);
User.hasMany(Comment),
Comment.belongsTo(User),


blog.hasMany(Comment),
Comment.belongsTo(blog)

blog.belongsTo(User,
    {
        onDelete:"cascade",
        onUpdate:"cascade",
        
    }
)
User.hasMany(blog)



export default Comment