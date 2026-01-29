
import { Sequelize } from "sequelize";






export const sequelize = new Sequelize('omardb', 'root', 'root', {
    host: 'localhost',
    port: 3306,
    dialect: "mysql"
})


 export async  function testdbconnection() {
    try {
  await sequelize.authenticate();
  console.log('db connected');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}
 } 
export async function syncdb() {
    await sequelize.sync({alter:false, force:false})
}