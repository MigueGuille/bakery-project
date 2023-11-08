import { pool } from "../componentes/db/postgresPool.js"
import { claveCorrectaQuery } from "../queries.js"

export const claveCorrecta = async ({ usuario, clave }) => {
    try {
        const data = await pool.query(claveCorrectaQuery, [usuario, clave])
        return data
    } catch (error) {
        return console.error('error en el query de claveCorrecta.', error)
    }
}