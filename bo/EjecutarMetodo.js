import { Metodos } from "./Metodos.js";
import { ControladorSeguridad } from "../controladores/controladorSeguridad.js";
import { obtenerPerfil } from "../utils/ObtenerPerfil.js";
import { obtenerInfoMetodo } from "../utils/InfoMetodo.js";
import * as objetosNegocio from '../bo'

export const ejecutarMetodo = async (req, res) => {
    const { parametros, metodo } = req.body
    const perfil = await obtenerPerfil(req.session.no_usuario)
    const infoMetodo = await obtenerInfoMetodo(metodo)
    const llaveEjecucion = `${perfil}_${metodo}_${infoMetodo.de_objeto}_${infoMetodo.de_modulo}`
    console.log('llave de ejecucion: ', llaveEjecucion)
    //const copiaMapa = new ControladorSeguridad().verMapaPermisos()
    const copiaMapa = await ControladorSeguridad.obtenerMapaPermisos()
    console.log('copia del mapa: ', copiaMapa)
    console.log(objetosNegocio)//aqui
    if(copiaMapa.has(llaveEjecucion)){
        // require(`./${infoMetodo.de_objeto}.js`)[infoMetodo.de_objeto][metodo](parametros)
        // .then(() => res.status(200).json({ mensaje: 'Metodo ejecutado' }))
        // .catch(error => res.status(500).json({ mensaje: 'Error al ejecutar el metodo', error }))
        const clase = objetosNegocio[infoMetodo.de_objeto]
        if(clase){
            const instancia = new clase()
            instancia[metodo](parametros)
            .then(() => res.status(200).json({ mensaje: 'Metodo ejecutado' }))
            .catch(error => res.status(500).json({ mensaje: 'Error al ejecutar el metodo', error }))
        }else{
            res.status(404).json({ mensaje: `No se encontró la clase ${infoMetodo.de_objeto}` })
        }
    }else {
        return res.status(401).json({ mensaje: `El usuario ${req.session.no_usuario} no tiene acceso al metodo ${metodo}` })
    }
    // Metodos[metodo](parametros)
    // .then(() => {
    //     return res.status(200).json({ mensaje: 'Metodo ejecutado' })
    // })
    // .catch(error => {
    //     return res.status(500).json({ mensaje: 'Error al ejecutar el metodo', error })
    // })
}