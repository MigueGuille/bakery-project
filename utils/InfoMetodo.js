import { pool } from "../componentes/db/postgresPool.js";
import { obtenerInfoMetodoQuery } from "../queries.js";

export const obtenerInfoMetodo = async (metodo) => {
    try{
        const data = await pool.query(obtenerInfoMetodoQuery, [metodo])
        return data.rows[0]
    }catch(error){
        return console.error('error en el query de obtenerInfoMetodo', error)
    }
}