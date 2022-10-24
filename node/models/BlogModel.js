/* Aqui vamos ha hacer un modelo, una tabla de SQL. */
/* Vmos a cear un esquemaen mayuscula y en plural. */


/* Lo primero:
improtar la conexion con la BD */

import db from "../database/db";

import {DataTypes} from 'sequelize'; /* Esto no se porque pero si. */

/* Empezamos con el esquema: */
const BlogModel = db.define('blogs',{
    title: { type: DataTypes.STRING }, 
    content: { type: DataTypes.STRING }
});

/* Los demás campos de la tabla los genera automaticamente MySqul */

export default BlogModel;