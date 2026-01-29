

import { sequelize } from "../connection.js";
import { DataTypes } from "sequelize";

export const User = sequelize.define(
    'User',
    {
        firstname: {
            type: DataTypes.STRING(1000),
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        lastname: {
            type: DataTypes.STRING(1000),
            allowNull: false

        },
        fullname: {
            type: DataTypes.VIRTUAL,

            get() {
                return this.getDataValue("firstname") + " " + this.getDataValue("lastname")
            },
            set(value) {
                const [firstname, lastname] = value.split(" ")
                this.setDataValue("firstname", firstname)
                this.setDataValue("lastname", lastname)
            }


        },


        email: {
            type: DataTypes.STRING(1000),
            allowNull: false,
            unique: true,
            field: "u-email",
            validate: {
                isEmail: true
            }

        },
        password: {
            type: DataTypes.STRING(100),
            allowNull: false,
            validate: {
                checkpasswordlength() {
                    if (this.password.length < 6) {

                        throw new Error("weak password")
                    }

                }
            }
        },
        role: {
            type: DataTypes.ENUM("user", "admin"),
            defaultValue: "user"
        },



    },
    {
        freezeTableName: false,
        timestamps: true,
        createdAt: "creattime",
        paranoid: true,
        updatedAt: true,
        // validate: {
        //     ifgender() {
        //         if (this.gender == "male" && this.password == "omar")

        //             throw new Error("no access")

        //     }
        // }
    },
);
User.beforeCreate("checknamelength",async (user, options) => {
 if(user.firstname.length<=2){
    throw new Error("first name must be greater than 2 characters")
 }
  
})