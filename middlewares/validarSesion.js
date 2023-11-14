import { ControladorSesion } from "../controladores/controladorSesion.js"

export const validarSesion = (req, res, next) => {
    if(ControladorSesion.sesionExiste(req)) return next()
    else return res.json({ mensaje: 'No se ha iniciado sesión' })
}