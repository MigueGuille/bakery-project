import { pool } from '../componentes/db/postgresPool.js'
import { bloquearUsuarioQuery, cambiarClaveUsuarioQuery, cambiarEmailUsuarioQuery, desbloquearUsuario } from '../queries.js'

export class ManejoSeguridad{

    static async cambiarEmailUsuario(parametros){
        try{
            await pool.query(cambiarEmailUsuarioQuery, [
            parametros.em_usuario,
            parametros.no_usuario
        ])
        }catch(error){
            return console.log('error en el query de cambiar email de usuario', error)
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
        try{
            const salt = 'bf'
            await pool.query(cambiarClaveUsuarioQuery, [
            parametros.cl_usuario,
            salt,
            parametros.no_usuario
            ])
        }catch(error){
            return console.error('error en el query de cambiar clave de usuario', error)
        }
    }
    static async bloquearUsuario(parametros){
        try{
            await pool.query(bloquearUsuarioQuery, [parametros.no_usuario])
        }catch(error){
            return console.error('error en el query de bloquear usuario', error)
        }
    }

    static async desbloquearUsuario(parametros){
        try{
            await pool.query(desbloquearUsuario, [parametros.no_usuario])
        }catch(error){
            return console.error('error en el query de desbloquear usuario', error)
        }
    }

}