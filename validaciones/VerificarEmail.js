import { pool } from "../componentes/db/postgresPool.js"
import { verificarEmailQuery, obtenerPreguntaQuery } from "../queries.js"

export const verificarEmail = async (req, res) => {
    if(req.body.email){
        const { email } = req.body;
        try{
            const dataEmail = await pool.query(verificarEmailQuery, [email])
            if(dataEmail.rowCount > 0){
                try {
                    const dataPregunta = await pool.query(obtenerPreguntaQuery, [email])
                    return res.json({ email: dataEmail.rows[0].em_usuario, pregunta: dataPregunta.rows[0].pr_usuario })
                } catch (error) {
                    return console.error('error en el query de obtenerPregunta', error)
                }
            }else{
                return res.status(404).json({ Error: 'El email no existe'})
            }
        }catch{
            return console.error('error en el query de verificarEmail', error)
        }
    }else{
        return res.status(406).json({ Error: 'No se ha enviado el email'})
    }
}