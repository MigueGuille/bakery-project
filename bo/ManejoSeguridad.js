import { pool } from '../componentes/db/postgresPool.js'
import { bloquearUsuarioQuery, cambiarClaveUsuarioQuery, cambiarEmailUsuarioQuery, desbloquearUsuario } from '../queries.js'

export class ManejoSeguridad{

    static async cambiarEmailUsuario(parametros){
        if(parametros.em_usuario, parametros.no_usuario){
            const { em_usuario, no_usuario } = parametros
            try{
                await pool.query(cambiarEmailUsuarioQuery, [em_usuario, no_usuario])
            }catch(error){
                return console.error('error en el query de cambiar email de usuario', error)
            }
        } else {
            return console.error('faltan parámetros para ejecutar el metodo')
        }
    }

    // CAMBIAR ESTADO Y BLOQUEAR USUARIO SON PRACTICAMENTE LO MISMO, PERO AJA NO SE A QUE OTRA COSA TE REFERIAS CON ESTE METODO xd

    // static async cambiarEstadoUsuario(parametros){
    //     try{
    //         await pool.query(bloquearUsuarioQuery, [parametros.no_usuario])
    //     }catch(error){
    //         return console.error('error en el query de cambiar estado de usuario', error)
    //     }
    // }

    static async cambiarClaveUsuario(parametros){
        if(parametros.cl_usuario, parametros.no_usuario){
            const { cl_usuario, no_usuario } = parametros
            const salt = 'bf'
            try{
                await pool.query(cambiarClaveUsuarioQuery, [cl_usuario, salt, no_usuario])
            }catch(error){
                return console.error('error en el query de cambiar clave de usuario', error)
            }
        } else {
            return console.error('faltan parámetros para ejecutar el metodo')
        }
    }
    static async bloquearUsuario(parametros){
        if(parametros.no_usuario){
            try{
                await pool.query(bloquearUsuarioQuery, [parametros.no_usuario])
            }catch(error){
                return console.error('error en el query de bloquear usuario', error)
            }
        } else {
            return console.error('faltan parámetros para ejecutar el metodo')
        }
    }

    static async desbloquearUsuario(parametros){
        if(parametros.no_usuario){
            try{
                await pool.query(desbloquearUsuario, [parametros.no_usuario])
            }catch(error){
                return console.error('error en el query de desbloquear usuario', error)
            }
        } else {
            return console.error('faltan parámetros para ejecutar el metodo')
        }
    }

}