import { usuarioExiste } from '../validaciones/UsuarioExiste.js'
import { usuarioBloqueado } from '../validaciones/UsuarioBloqueado.js';
import { claveCorrecta } from '../validaciones/ClaveCorrecta.js';

export const validarInfoLogin = async (req, res, next) => {
    if(req.body.usuario && req.body.clave) {
        const { usuario, clave } = req.body;
        console.log('usuario y clave presentes en el request'); //quitar
        if(await usuarioExiste(usuario)){
            console.log('usuario existe'); //quitar
            if(! await usuarioBloqueado(usuario)){
                console.log('usuario no bloqueado'); //quitar
                if(await claveCorrecta({ usuario, clave })){
                    console.log('clave correcta'); //quitar
                    next();
                }else{
                    return res.status(401).send(`Clave incorrecta para el usaurio ${usuario}. 
                    <a href=\'/\'>Intente de nuevo.</a>`)
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