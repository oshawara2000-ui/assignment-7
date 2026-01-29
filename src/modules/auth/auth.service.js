import { User } from "../../DB/models/user.model.js"






export async function signup(bodydata) {
    const { firstname,lastname, email, password } = bodydata
   const data=User.build({ firstname,lastname, email, password })
   const result=await data.save()
    return result
}


export async function createorupdate(paramdata,databody) {
    const{id}=paramdata
    const{ firstname,lastname, email, password }=databody
const result=await User.upsert({id,firstname,lastname, email, password},{validate:false})

return result


}

