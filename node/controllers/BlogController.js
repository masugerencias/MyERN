/* Importar el MODELO de sequilize 
Creo que al usar Sequilize ya se importa siempre el modelo nada más.*/
import BlogModel from "../models/BlogModel.js";


/* METODOS PARA EL CRUD */

/* Mostrar TODOS los registros */

export const getAll = async (req, res) => {
    try {
        const blogs = await BlogModel.findAll()
        res.json(blogs)
                /* Esto es una pasada, se asigna a una cosntante para poder verlo luego */

    } catch (error) {
        res.json( { message: error.message } )

    }
}
/* No se porque asincronía aqui si viene todo de la misma tabla... */
/* Pues esto es más o menos igual para todos: asyn, req, res, try catch... */

/* Mostrar un registro */
export const getOne = async (req, res) => {
    try {
        const blog = await BlogModel.findAll({
        where: { id :req.body.params.id }
    })
        res.json(blog)
                /* Esto es una pasada, se asigna a una cosntante para poder verlo luego */

    } catch (error) {
        res.json( { message: error.message } )

    }
}



/* Crear un registro */

/* Actualizar un registro */

/* Eliminar un registro */