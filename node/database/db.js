import { Sequelize } from "sequelize";

/* Instanciamos SQL */

const db = new Sequelize ('myern', 'root', 'root',{
    host:'localhost',
    dialect:"mysql"
})


export default db;