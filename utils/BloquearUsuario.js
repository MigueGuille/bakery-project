import { pool } from "../componentes/db/postgresPool.js"
import { bloquearUsuarioQuery } from "../queries.js"

export const bloquearUsuario = async (usuario) => {
    try {
        await pool.query(bloquearUsuarioQuery, [usuario])
    } catch (error) {
        return console.error('error en el query de bloquearUsuario.', error)
    }
}