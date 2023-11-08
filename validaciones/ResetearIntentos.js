import { pool } from "../componentes/db/postgresPool.js"
import { resetearIntentosQuery } from "../queries.js"

export const resetearIntentos = async (usuario) => {
    try {
        await pool.query(resetearIntentosQuery, [usuario])
    } catch (error) {
        return console.error('error en el query de resetearIntentos.', error)
    }
}