import { pool } from '../componentes/db/postgresPool.js'

export class ManejoPermisos{

    static async agregarPermiso(parametros){
        try{
            await pool.query(agregarPermisoQuery, [
                parametros.id_perfil,
                parametros.id_metodo
            ])
        }catch(error){
            return console.error('error en el query de agregar permiso', error)
        }
    }

    static async borrarPermiso(parametros){
        try{
            await pool.query(borrarPermisoQuery, [parametros.id_permiso])
        }catch(error){
            return console.error('error en el query de borrar permiso', error)
        }
    }
}