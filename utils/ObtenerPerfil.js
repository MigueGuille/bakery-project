import { pool } from "../componentes/db/postgresPool.js";
import { obtenerPerfilQuery } from "../queries.js";

export const obtenerPerfil = async (no_usuario) => {
    try {
        const data = await pool.query(obtenerPerfilQuery, [no_usuario])
        return data.rows[0].de_perfil
    } catch (error) {
        return console.error('error en el query de obtenerPerfil', error)
    }
}