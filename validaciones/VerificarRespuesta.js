import { pool } from "../componentes/db/postgresPool.js"
import { verificarRespuestaQuery } from "../queries.js"
import { generarClave } from "../componentes/db/generadorClaves.js";
import { enviarEmail } from "../componentes/db/enviarMailer.js";

export const verificarRespuesta = async (req, res) => {
    if(req.body.respuesta && req.body.email){
        const { respuesta, email } = req.body;
        try {
            const data = await pool.query(verificarRespuestaQuery, [email, respuesta])
            if(data.rowCount > 0){
                const nuevaClave = generarClave();
                enviarEmail({ para: email, clave: nuevaClave}) 
                // usar el método cambiarClave para actualizar la clave en bd
                return res.status(200)
                // usar el codigo 200 en el front para certificar que fue correcto el ingreso de la respuesta
            }else{
                return res.status(404).json({ Error: 'La respuesta es incorrecta'})
            }
        } catch (error) {
            return console.error('error en el query de verificarRespuesta', error)
        }
    } else{
        res.status(406).json({ Error: 'No se ha enviado la respuesta o el email'})
    }
}