import { pool } from "../componentes/db/postgresPool.js"
import { agregarUsuarioQuery, agregarPersonaQuery } from "../queries.js"

export class Metodos{
    static async agregarUsuario(parametros){
        try {
            const { no_usuario, de_perfil, em_usuario, pr_usuario, re_usuario, cl_usuario, no_persona, ap_persona
            } = parametros
            const salt = 'bf'
            const valores = [no_usuario, de_perfil, em_usuario, pr_usuario, re_usuario, salt, cl_usuario, salt, no_persona, ap_persona]
            await pool.query(agregarUsuarioQuery, valores)
        } catch (error) {
            return console.error('error en el query de agregar usuario', error)
        }
    } // para agregar un usuario es necesario que antes se haya agregado una persona

    static async agregarPersona(parametros){
        try {
            await pool.query(agregarPersonaQuery, [
                parametros.no_persona,
                parametros.ap_persona,
                parametros.te_persona,
                parametros.di_persona
            ])
        } catch (error) {
            return console.error('error en el query de agregar persona', error)
        }
    }
}