import { pool } from '../componentes/db/postgresPool.js'
import { agregarAsignacionQuery, borrarAsignacionQuery, cambiarEstadoAsignacionQuery, cambiarFechaAsignacionQuery, cambiarPersonaAsignacionQuery, cambiarProductoAsignacionQuery } from '../queries.js'

export class ManejoNegocio{

    static async agregarAsignacion(parametros){
        //VALIDAR QUE TODOS LOS PARAMETROS ENVIADOS EXISTAN EN LAS OTRAS TABLAS
        try{
            await pool.query(agregarAsignacionQuery, [
                parametros.id_persona,
                parametros.id_producto_venta,
                parametros.fe_asignacion,
                parametros.id_estado
            ])
        }catch(error){
            return console.error('error en el query de agregar asignacion', error)
        }
    }

    static async borrarAsignacion(parametros){
        try{
            await pool.query(borrarAsignacionQuery, [parametros.id_asignacion])
        }catch(error){
            return console.error('error en el query de borrar asignacion', error)
        }
    }
    static async cambiarPersonaAsignacion(parametros){
        try{
            await pool.query(cambiarPersonaAsignacionQuery, [
                parametros.id_persona,
                parametros.id_asignacion
            ])
        }catch(error){
            return console.error('error en el query de cambiar persona de asignacion', error)
        }
    }

    static async cambiarProductoAsignacion(parametros){
        try{
            await pool.query(cambiarProductoAsignacionQuery, [
                parametros.id_producto_venta,
                parametros.id_asignacion
            ])
        }catch(error){
            return console.error('error en el query de cambiar producto de asignacion', error)
        }
    }

    static async cambiarFechaAsignacion(parametros){
        try{
            await pool.query(cambiarFechaAsignacionQuery, [
                parametros.fe_asignacion,
                parametros.id_asignacion
            ])
        }catch(error){
            return console.error('error en el query de cambiar fecha de asignacion', error)
        }
    }
    
    static async cambiarEstadoAsignacion(parametros){
        try{
            await pool.query(cambiarEstadoAsignacionQuery, [
                parametros.id_estado,
                parametros.id_asignacion
            ])
        }catch(error){
            return console.error('error en el query de cambiar estado de asignacion', error)
        }
    }
}