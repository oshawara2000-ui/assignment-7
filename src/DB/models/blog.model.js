
import { Model,DataTypes } from "sequelize";
import { sequelize } from "../connection.js";
import { User } from "./user.model.js";





class blog extends Model {}

blog.init(
  {
    
    title: {
      type: DataTypes.STRING(1000),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(1000),
      allowNull :false
    },
  },
  {
   sequelize,
   freezeTableName:false,
   paranoid:true
  },
);



export default blog