import { Metodos } from "./Metodos.js";
import { manejoAdmision } from "./manejoAdmision.js";
import { ControladorSeguridad } from "../controladores/controladorSeguridad.js";
import { obtenerPerfil } from "../utils/ObtenerPerfil.js";
import { obtenerInfoMetodo } from "../utils/InfoMetodo.js";

export const ejecutarMetodo = async (req, res) => {
    const { parametros, metodo } = req.body
    const perfil = await obtenerPerfil(req.session.no_usuario)
    const infoMetodo = await obtenerInfoMetodo(metodo)
    const llaveEjecucion = `${perfil}_${metodo}_${infoMetodo.de_objeto}_${infoMetodo.de_modulo}`
    console.log('llave de ejecucion: ', llaveEjecucion)
    const copiaMapa = await ControladorSeguridad.obtenerMapaPermisos()
    console.log('copia del mapa: ', copiaMapa)
    if(copiaMapa.has(llaveEjecucion)){
        manejoAdmision[metodo](parametros)
        .then(() => res.status(200).json({ mensaje: 'Metodo ejecutado' }))
        .catch(error => res.status(500).json({ mensaje: 'Error al ejecutar el metodo', error }))
        // import {} from `./${infoMetodo.de_objeto}.js`
        // require(`./${infoMetodo.de_objeto}.js`)[infoMetodo.de_objeto][metodo](parametros)
        // .then(() => res.status(200).json({ mensaje: 'Metodo ejecutado' }))
        // .catch(error => res.status(500).json({ mensaje: 'Error al ejecutar el metodo', error }))

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