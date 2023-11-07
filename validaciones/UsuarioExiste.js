import { pool } from '../componentes/db/postgresPool.js'
import { usuarioExisteQuery } from '../queries.js'

export const usuarioExiste = async (usuario) => {
    try {
        const data = await pool.query(usuarioExisteQuery, [usuario])
        if(data.rows[0] === undefined) return false
        else return true
    } catch (error) {
        return console.error("error en el query de UsuarioExiste", error)
    }
}