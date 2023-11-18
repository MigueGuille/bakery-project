import { pool } from '../componentes/db/postgresPool.js'
import { agregarAsignacionQuery, borrarAsignacionQuery, borrarPersonaQuery, cambiarApellidoPersonaQuery, cambiarDireccionPersonaQuery, cambiarEstadoAsignacionQuery, cambiarFechaAsignacionQuery, cambiarNombrePersonaQuery, cambiarNombreUsuarioQuery, cambiarPersonaAsignacionQuery, cambiarProductoAsignacionQuery, cambiarTelefonoPersonaQuery } from '../queries.js'

export class ManejoUsuarios{

    static async borrarUsuario(parametros){
        try{
            await pool.query(borrarUsuarioQuery, [parametros.no_usuario])
        }catch(error){
            return console.error('error en el query de borrar usuario', error)
        }
    }
    
    static async cambiarNombreUsuario(parametros){
        try{

            await pool.query(cambiarNombreUsuarioQuery, [
                parametros.no_usuario,
                parametros.no_usuario
            ])
        }catch(error){
            return console.error('error en el query de cambiar nombre de usuario', error)
        }
    }

    static async borrarPersona(parametros){
        try{
            await pool.query(borrarPersonaQuery, [parametros.id_persona])
        }catch(error){
            return console.error('error en el query de borrar persona', error)
        }
    }

    static async cambiarNombrePersona(parametros){
        try{
            await pool.query(cambiarNombrePersonaQuery, [
                parametros.no_persona,
                parametros.id_persona
            ])
        }catch(error){
            return console.error('error en el query de cambiar nombre de persona', error)
        }
    }
    
    static async cambiarApellidoPersona(parametros){
        try{
            await pool.query(cambiarApellidoPersonaQuery, [
                parametros.ap_persona,
                parametros.id_persona
            ])
        }catch(error){
            return console.error('error en el query de cambiar apellido de persona', error)
        }
    }

    static async cambiarTelefonoPersona(parametros){
        try{
            await pool.query(cambiarTelefonoPersonaQuery, [
                parametros.te_persona,
                parametros.id_persona
            ])
        }catch(error){
        return console.error('error en el query de cambiar telefono de persona', error)
        }
    }
    
    static async cambiarDireccionPersona(parametros){
        try{
            await pool.query(cambiarDireccionPersonaQuery, [
                parametros.di_persona,
                parametros.id_persona
            ])
        }catch(error){
            return console.error('error en el query de cambiar direccion de persona', error)
        }
    }


}