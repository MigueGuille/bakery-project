import { pool } from '../componentes/db/postgresPool.js'
import { agregarPermisoQuery, borrarPermisoQuery } from '../queries.js'

export class ManejoPermisos{

    static async agregarPermiso(parametros){
        if(parametros.id_perfil, parametros.id_metodo){
            const { id_perfil, id_metodo } = parametros
            try{
                await pool.query(agregarPermisoQuery, [id_perfil, id_metodo])
            }catch(error){
                return console.error('error en el query de agregar permiso', error)
            }
        } else {
            return console.error('faltan parámetros para ejecutar el metodo')
        
        }

    }

    static async borrarPermiso(parametros){
        if(parametros.id_permiso){
            const { id_permiso } = parametros
            try{
                await pool.query(borrarPermisoQuery, [id_permiso])
            }catch(error){
                return console.error('error en el query de borrar permiso', error)
            }
        } else {
            return console.error('faltan parámetros para ejecutar el metodo')
        
        }
    }
}