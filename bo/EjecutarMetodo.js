import { Metodos } from "./Metodos.js";
import { ControladorSeguridad } from "../controladores/controladorSeguridad.js";
import { obtenerPerfil } from "../utils/ObtenerPerfil.js";
import { obtenerInfoMetodo } from "../utils/InfoMetodo.js";

export const ejecutarMetodo = async (req, res) => {
    const { parametros, metodo } = req.body
    const perfil = await obtenerPerfil(req.session.no_usuario)
    const infoMetodo = await obtenerInfoMetodo(metodo)
    const llaveEjecucion = `${perfil}_${metodo}_${infoMetodo.de_objeto}_${infoMetodo.de_modulo}`
    console.log(llaveEjecucion)
    const nuevoMapar = new ControladorSeguridad().verMapaPermisos()
    console.log(nuevoMapar)
    //const cs = new ControladorSeguridad()
    // if(cs.mapaPermisos.has(llaveEjecucion)){
    //     //require(`../BO/${infoMetodo.de_modulo}.js`)[infoMetodo.de_objeto][metodo](parametros)
    //     require(`./${infoMetodo.de_objeto}.js`)[infoMetodo.de_objeto][metodo](parametros)
    //     .then(() => res.status(200).json({ mensaje: 'Metodo ejecutado' }))
    //     .catch(error => res.status(500).json({ mensaje: 'Error al ejecutar el metodo', error }))
    // } else {
    //     return res.status(401).json({ mensaje: `El usuario ${req.session.no_usuario} no tiene acceso al metodo ${metodo}` })
    // }

    //console.log(`${perfil}_${metodo}_${objeto}_${modulo}`)
    // Metodos[metodo](parametros)
    // .then(() => {
    //     return res.status(200).json({ mensaje: 'Metodo ejecutado' })
    // })
    // .catch(error => {
    //     return res.status(500).json({ mensaje: 'Error al ejecutar el metodo', error })
    // })
}