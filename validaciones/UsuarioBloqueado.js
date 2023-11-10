import { pool } from "../componentes/db/postgresPool.js";
import { usuarioBloqueadoQuery } from "../queries.js";

export const usuarioBloqueado = async (usuario) => {
    try {
        const data = await pool.query(usuarioBloqueadoQuery, [usuario])
        if(data.rows[0].bl_usuario) return true
        else return false
    } catch (error) {
        return console.error('error en el query de usuarioBloqueado', error)
    }
}