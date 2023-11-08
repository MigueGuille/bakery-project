import { usuarioExiste } from '../validaciones/UsuarioExiste.js'
import { usuarioBloqueado } from '../validaciones/UsuarioBloqueado.js';
import { claveCorrecta } from '../validaciones/ClaveCorrecta.js';
import { resetearIntentos } from '../validaciones/ResetearIntentos.js';
import { ControladorSesion } from '../controladores/controladorSesion.js';
import { reducirIntentos } from '../validaciones/ReducirIntentos.js';

export const validarInfoLogin = async (req, res, next) => {
    if(req.body.usuario && req.body.clave) {
        const { usuario, clave } = req.body;
        console.log('usuario y clave presentes en el request'); //quitar
        if(await usuarioExiste(usuario)){
            console.log('usuario existe'); //quitar
            if(! await usuarioBloqueado(usuario)){
                console.log('usuario no bloqueado'); //quitar
                try {
                    const infoUsuario = await claveCorrecta({ usuario, clave });
                    if(infoUsuario.rowCount > 0){
                        console.log('clave correcta'); //quitar
                        await resetearIntentos(usuario);
                        ControladorSesion.crearSesion({req, infoUsuario: infoUsuario.rows[0]})
                        next();
                    }else{
                        await reducirIntentos(usuario);
                        return res.status(401).send(`Clave incorrecta para el usaurio ${usuario}. 
                        <a href=\'/\'>Intente de nuevo.</a>`)
                    }
                } catch (error) {
                    return console.error('error validando la información del usuario', error)
                }
            }else{
                return res.status(403).send(`El usuario ${usuario} está bloqueado`)
            }
        }else{
            return res.status(404).send(`El usuario ${usuario} no existe. <a href=\'/\'>Intente de nuevo.</a>`)
        }
    } else {
        return res.status(400).send('Es necesario ingresar un usuario y una clave');
    }
}