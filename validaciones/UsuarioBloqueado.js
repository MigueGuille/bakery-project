import { pool } from "../componentes/db/postgresPool.js";
import { usuarioBloqueadoQuery } from "../queries.js";

export const usuarioBloqueado = async (usuario) => {
    try {
        const data = await pool.query(usuarioBloqueadoQuery, [usuario])
        if(data.rows[0].st_usuario) return false
        else return true
    } catch (error) {
        return console.error('error en el query de usuarioBloqueado', error)
    }
}