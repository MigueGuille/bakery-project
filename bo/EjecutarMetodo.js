import { Metodos } from "./Metodos.js";

import { ManejoAdmision } from './ManejoAdmision.js'
import { ManejoMensajes } from './ManejoMensajes.js'
import { ManejoNegocio } from './ManejoNegocio.js'
import { ManejoPermisos } from './ManejoPermisos.js'
import { ManejoSeguridad } from './ManejoSeguridad.js'
import { ManejoUsuarios } from './ManejoUsuarios.js'

import { ControladorSeguridad } from "../controladores/controladorSeguridad.js";
import { obtenerPerfil } from "../utils/ObtenerPerfil.js";
import { obtenerInfoMetodo } from "../utils/InfoMetodo.js";
//podríamos quitar todos los import y que en la función procesar
//importemos dinámicamente el manejador que se requiera segun el 
//metodo que haya sido pedido ejecutar

export const ejecutarMetodo = async (req, res) => {
    const { parametros, metodo } = req.body
    //armar llave de ejecución del metodo:
    //la llave tiene el perfil del usuario que ejecuta el metodo
    const perfil = await obtenerPerfil(req.session.no_user)
    console.log('mostrando el perfil en ejecutar metodo: ', perfil)
    //la llave tiene el metodo, objeto y el modulo
    //el metodo viene ya en el req
    //el objeto y el modulo se tienen que sacar desde un metodo aparte
    const infoMetodo = await obtenerInfoMetodo(metodo)
    console.log('mostrando el objeto en ejecutar metodo: ', infoMetodo.de_objeto)
    console.log('mostrando el modulo en ejecutar metodo: ', infoMetodo.de_modulo)

    return res.status(200)
    //console.log(`${perfil}_${metodo}_${objeto}_${modulo}`)
    // Metodos[metodo](parametros)
    // .then(() => {
    //     return res.status(200).json({ mensaje: 'Metodo ejecutado' })
    // })
    // .catch(error => {
    //     return res.status(500).json({ mensaje: 'Error al ejecutar el metodo', error })
    // })
}