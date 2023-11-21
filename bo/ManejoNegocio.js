import { pool } from '../componentes/db/postgresPool.js'
import { agregarAsignacionQuery, agregarPresentacionProductoQuery, agregarProductoQuery, agregarProductoVentaQuery, borrarAsignacionQuery, borrarPresentacionProductoQuery, borrarProductoQuery, borrarProductoVentaQuery, cambiarEstadoAsignacionQuery, cambiarFechaAsignacionQuery, cambiarMontoProductoVentaQuery, cambiarPersonaAsignacionQuery, cambiarPresentacionProductoQuery, cambiarPresentacionVentaQuery, cambiarProductoAsignacionQuery, cambiarProductoQuery, cambiarProductoVentaQuery } from '../queries.js'

export class ManejoNegocio{

    static async agregarAsignacion(parametros){
        //VALIDAR QUE TODOS LOS PARAMETROS ENVIADOS EXISTAN EN LAS OTRAS TABLAS
        if(parametros.id_persona, parametros.id_producto_venta, parametros.fe_asignacion, parametros.id_estado){
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
    } else {
        return console.error('error en el query de agregar asignacion, faltan parametros')
    }
    }

    static async borrarAsignacion(parametros){
        if(parametros.id_asignacion){
        try{
            await pool.query(borrarAsignacionQuery, [parametros.id_asignacion])
        }catch(error){
            return console.error('error en el query de borrar asignacion', error)
        }
        } else {
            return console.error('error en el query de borrar asignacion, faltan parametros')
        }
    }
    static async cambiarPersonaAsignacion(parametros){
        if(parametros.id_persona_nuevo, parametros.id_asignacion){
        try{
            await pool.query(cambiarPersonaAsignacionQuery, [
                parametros.id_persona_nuevo,
                parametros.id_asignacion
            ])
        }catch(error){
            return console.error('error en el query de cambiar persona de asignacion', error)
        }
        } else {
            return console.error('error en el query de cambiar persona de asignacion, faltan parametros')
        }
    }

    static async cambiarProductoAsignacion(parametros){
        if(parametros.id_producto_venta_nuevo, parametros.id_asignacion){
        try{
            await pool.query(cambiarProductoAsignacionQuery, [
                parametros.id_producto_venta_nuevo,
                parametros.id_asignacion
            ])
        }catch(error){
            return console.error('error en el query de cambiar producto de asignacion', error)
        }
        } else {
            return console.error('error en el query de cambiar producto de asignacion, faltan parametros')
        }
    }

    static async cambiarFechaAsignacion(parametros){
        if(parametros.fe_asignacion_nuevo, parametros.id_asignacion){

        try{
            await pool.query(cambiarFechaAsignacionQuery, [
                parametros.fe_asignacion_nuevo,
                parametros.id_asignacion
            ])
        }catch(error){
            return console.error('error en el query de cambiar fecha de asignacion', error)
        }
    } else {
        return console.error('error en el query de cambiar fecha de asignacion, faltan parametros')
    }
    }
    
    static async cambiarEstadoAsignacion(parametros){
        if(parametros.id_estado_nuevo, parametros.id_asignacion){
        try{
            await pool.query(cambiarEstadoAsignacionQuery, [
                parametros.id_estado_nuevo,
                parametros.id_asignacion
            ])
        }catch(error){
            return console.error('error en el query de cambiar estado de asignacion', error)
        }
        } else {
            return console.error('error en el query de cambiar estado de asignacion, faltan parametros')
        }
    }

    static async agregarPresentacionProducto(parametros){
        if(parametros.de_presentacion_producto){
        try{
            await pool.query(agregarPresentacionProductoQuery, [
                parametros.de_presentacion_producto
            ])
        }catch(error){
            return console.error('error en el query de agregar presentacion de producto', error)
        }
        } else {
            return console.error('error en el query de agregar presentacion de producto, faltan parametros')
        }
    }

    static async borrarPresentacionProducto(parametros){
        if(parametros.de_presentacion){
        try{
            await pool.query(borrarPresentacionProductoQuery, [
                parametros.id_presentacion
            ])
        }catch(error){
            return console.error('error en el query de borrar presentacion de producto', error)
        }
        } else {
            return console.error('error en el query de borrar presentacion de producto, faltan parametros')
        }
    }
    
    static async cambiarPresentacionProducto(parametros){
        if(parametros.de_presentacion_nuevo, parametros.de_presentacion){
        try{
                await pool.query(cambiarPresentacionProductoQuery, [
                parametros.de_presentacion_nuevo,
                parametros.de_presentacion
                ])
            } catch(error){
                return console.error('error en el query de cambiar presentacion de producto', error)
            }
            } else {
                return console.error('error en el query de cambiar presentacion de producto, faltan parametros')
        }   
    }
    
    static async agregarProductoVenta(parametros){
     if(parametros.id_presentacion, parametros.id_producto, parametros.mo_producto_venta){
        try{
            await pool.query(agregarProductoVentaQuery, [
                parametros.id_presentacion,
                parametros.id_producto,
                parametros.mo_producto_venta
            ])
        }catch(error){
            return console.error('error en el query de agregar producto de venta', error)
        }
        } else {
            return console.error('error en el query de agregar producto de venta, faltan parametros')
        }
    }
    
    static async borrarProductoVenta(parametros){
        if(parametros.id_producto_venta){
        try{
            await pool.query(borrarProductoVentaQuery, [
                parametros.id_producto_venta
            ])
        }catch(error){
            return console.error('error en el query de borrar producto de venta', error)
        }
        } else {
            return console.error('error en el query de borrar producto de venta, faltan parametros')
        }
    }
    
    static async cambiarProductoVenta(parametros){
        if(parametros.id_producto_nuevo, id_producto_venta){
            try{
            await pool.query(cambiarProductoVentaQuery, [
                parametros.id_producto_nuevo,
                parametros.id_producto_venta
            ])
            } catch(error){
                return console.error('error en el query de cambiar producto de venta', error)
            }
        } else {
            return console.error('error en el query de cambiar producto de venta, faltan parametros')
        }
    }
    
    static async cambiarPresentacionVenta(parametros){
        if(parametros.id_presentacion_nuevo, parametros.id_producto_venta){
            try{
            await pool.query(cambiarPresentacionVentaQuery, [
                parametros.id_presentacion_nuevo,
                parametros.id_producto_venta
            ])
            } catch(error){
                return console.error('error en el query de cambiar producto de venta', error)
            }
        } else {
            return console.error('error en el query de cambiar producto de venta, faltan parametros')
        }
    }
    
    static async cambiarMontoProductoVenta(parametros){
        if(parametros.mo_producto_venta_nuevo, parametros.id_producto_venta){
            try{
            await pool.query(cambiarMontoProductoVentaQuery, [
                parametros.mo_producto_venta_nuevo,
                parametros.id_producto_venta
            ])
            } catch(error){
                return console.error('error en el query de cambiar producto de venta', error)
            }
        } else {
            return console.error('error en el query de cambiar producto de venta, faltan parametros')
        }
    }
    
    static async agregarProducto(parametros){
        if(parametros.de_producto){
            try{
                await pool.query(agregarProductoQuery, [parametros.de_producto])
            } catch(error){
                return console.error('error en el query de agregar producto', error)
            }
        } else {
            return console.error('error en el query de agregar producto, faltan parametros')
        }
    }
    
    static async borrarProducto(parametros){
        if(parametros.de_producto){
            try{
                await pool.query(borrarProductoQuery, [parametros.de_producto])
            } catch(error){
                return console.error('error en el query de borrar producto', error)
            }
        } else {
            return console.error('error en el query de borrar producto, faltan parametros')
        }
    }

    static async cambiarProducto(parametros){
        if(parametros.de_producto_nuevo, parametros.de_producto){
            try{
                await pool.query(cambiarProductoQuery, [
                    parametros.de_producto_nuevo,
                    parametros.de_producto
                ])
            } catch(error){
                return console.error('error en el query de cambiar producto', error)
            }
        } else {
            return console.error('error en el query de cambiar producto, faltan parametros')
        }
    }
}