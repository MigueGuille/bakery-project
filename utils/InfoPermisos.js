import { pool } from '../componentes/db/postgresPool.js'
import { permisosQuery } from '../queries.js'

export const obtenerInfoPermisos = async () => {
    try {
        const data = await pool.query(permisosQuery)
        return data.rows
    } catch (error) {
        return console.error('error en el query de obtenerInfoPermisos', error)
    }
}