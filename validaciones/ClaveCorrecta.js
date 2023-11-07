import { pool } from "../componentes/db/postgresPool.js"
import { claveCorrectaQuery } from "../queries.js"

export const claveCorrecta = async ({ usuario, clave }) => {
    try {
        const data = await pool.query(claveCorrectaQuery, [usuario, clave])
        if(data.rowCount > 0) return true
        else return false
    } catch (error) {
        return console.error('error en el query de claveCorrecta.', error)
    }
}