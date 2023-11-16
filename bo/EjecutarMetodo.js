import { ManejoAdmision } from "./ManejoAdmision.js";
import { ManejoMensajes } from "./ManejoMensajes.js";
import { ManejoNegocio } from "./ManejoNegocio.js";
import { ManejoPermisos } from "./ManejoPermisos.js";
import { ManejoSeguridad } from "./ManejoSeguridad.js";
import { ManejoUsuarios } from "./ManejoUsuarios.js";

import { ControladorSeguridad } from "../controladores/controladorSeguridad.js";
import { obtenerPerfil } from "../utils/ObtenerPerfil.js";
import { obtenerInfoMetodo } from "../utils/InfoMetodo.js";

export const ejecutarMetodo = async (req, res) => {
    const { parametros, metodo } = req.body

    const perfil = await obtenerPerfil(req.session.no_usuario)
    const infoMetodo = await obtenerInfoMetodo(metodo)

    const { de_objeto:objeto, de_modulo:modulo } = infoMetodo
    const llaveEjecucion = `${perfil}_${metodo}_${objeto}_${modulo}`
    const copiaMapa = await ControladorSeguridad.obtenerMapaPermisos()
    
    if(copiaMapa.has(llaveEjecucion)){
        switch(objeto){
            case 'ManejoAdmision':
                ManejoAdmision[metodo](parametros)
                .then(() => res.status(200).json({ mensaje: 'Metodo ejecutado' }))
                .catch(error => res.status(500).json({ mensaje: 'Error al ejecutar el metodo', error }))
                break
            case 'ManejoMensajes':
                ManejoMensajes[metodo](parametros)
                .then(() => res.status(200).json({ mensaje: 'Metodo ejecutado' }))
                .catch(error => res.status(500).json({ mensaje: 'Error al ejecutar el metodo', error }))
                break
            case 'ManejoNegocio':
                ManejoNegocio[metodo](parametros)
                .then(() => res.status(200).json({ mensaje: 'Metodo ejecutado' }))
                .catch(error => res.status(500).json({ mensaje: 'Error al ejecutar el metodo', error }))
                break
            case 'ManejoPermisos':
                ManejoPermisos[metodo](parametros)
                .then(() => res.status(200).json({ mensaje: 'Metodo ejecutado' }))
                .catch(error => res.status(500).json({ mensaje: 'Error al ejecutar el metodo', error }))
                break
            case 'ManejoSeguridad':
                ManejoSeguridad[metodo](parametros)
                .then(() => res.status(200).json({ mensaje: 'Metodo ejecutado' }))
                .catch(error => res.status(500).json({ mensaje: 'Error al ejecutar el metodo', error }))
                break
            case 'ManejoUsuarios':
                ManejoUsuarios[metodo](parametros)
                .then(() => res.status(200).json({ mensaje: 'Metodo ejecutado' }))
                .catch(error => res.status(500).json({ mensaje: 'Error al ejecutar el metodo', error }))
                break
            default:
                return res.status(500).json({ mensaje: `El objeto ${objeto} no existe` })
        }
    }else {
        return res.status(401).json({ mensaje: `El usuario ${req.session.no_usuario} no tiene acceso al metodo ${metodo}` })
    }
}