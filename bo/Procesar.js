import { Metodos } from "./Metodos.js";
import { ControladorSeguridad } from "../controladores/controladorSeguridad.js";

export const procesar = async (req, res) => {
    const { parametros, metodo } = req.body
    Metodos[metodo](parametros)
    .then(() => {
        return res.status(200).json({ mensaje: 'Metodo ejecutado' })
    })
    .catch(error => {
        return res.status(500).json({ mensaje: 'Error al ejecutar el metodo', error })
    })
}