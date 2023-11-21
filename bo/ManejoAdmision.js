import { pool } from '../componentes/db/postgresPool.js'
import { agregarUsuarioQuery, agregarPersonaQuery, agregarTipoPersonaQuery } from "../queries.js"

export class ManejoAdmision{
    static async agregarUsuario(parametros){
        if(parametros.no_usuario, parametros.de_perfil, parametros.em_usuario, parametros.pr_usuario, parametros.re_usuario, parametros.cl_usuario, parametros.no_persona, parametros.ap_persona){
            const { no_usuario, de_perfil, em_usuario, pr_usuario, re_usuario, cl_usuario, no_persona, ap_persona
            } = parametros
            const salt = 'bf'
            const valores = [no_usuario, de_perfil, em_usuario, pr_usuario, re_usuario, salt, cl_usuario, salt, no_persona, ap_persona]
            try {
                await pool.query(agregarUsuarioQuery, valores)
            } catch (error) {
                return console.error('error en el query de agregar usuario', error)
            }
        } else{
            return console.error('faltan parámetros para ejecutar el metodo')
        }
    } // para agregar un usuario es necesario que antes se haya agregado una persona

    static async agregarPersona(parametros){
        if(parametros.no_persona, parametros.ap_persona, parametros.te_persona, parametros.di_persona){
            const { no_persona, ap_persona, te_persona, di_persona } = parametros
            try {
                await pool.query(agregarPersonaQuery, [no_persona, ap_persona, te_persona, di_persona])
            } catch (error) {
                return console.error('error en el query de agregar persona', error)
            }
        } else {
            return console.error('faltan parámetros para ejecutar el metodo')
        }
        console.log('funcionando agregarPersona')
    }

    static async agregarTipoPersona(parametros){
        if(parametros.de_tipo_persona){
            const { de_tipo_persona } = parametros
            try {
                await pool.query(agregarTipoPersonaQuery, [de_tipo_persona])
            } catch (error) {
                return console.error('error en el query de agregar tipo de persona', error)
            }
        } else {
            return console.error('faltan parámetros para ejecutar el metodo')
        }
    }
}