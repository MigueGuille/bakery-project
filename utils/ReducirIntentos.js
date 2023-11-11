import { pool } from "../componentes/db/postgresPool.js"
import { bloquearUsuario } from "./BloquearUsuario.js"
import { reducirIntentosQuery, obtenerIntentosQuery } from "../queries.js"


export const reducirIntentos = async (usuario) => {
    try {
        await pool.query(reducirIntentosQuery, [usuario])
        const data = await pool.query(obtenerIntentosQuery, [usuario])
        const intentos = data.rows[0].in_usuario
        console.log(`Intentos restantes para ${usuario}: ${intentos}`)
        if(intentos === 0) await bloquearUsuario(usuario)
    } catch (error) {
        return console.error('error en el query de reducirIntentos.', error)
    }
}