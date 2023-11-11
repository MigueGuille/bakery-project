import { usuarioExiste } from '../validaciones/UsuarioExiste.js'
import { usuarioBloqueado } from '../validaciones/UsuarioBloqueado.js';
import { claveCorrecta } from '../validaciones/ClaveCorrecta.js';
import { resetearIntentos } from '../utils/ResetearIntentos.js';
import { ControladorSesion } from '../controladores/controladorSesion.js';
import { reducirIntentos } from '../utils/ReducirIntentos.js';

export const validarInfoLogin = async (req, res, next) => {
    if(req.body.usuario && req.body.clave) {
        const { usuario, clave } = req.body;
        if(await usuarioExiste(usuario)){
            if(! await usuarioBloqueado(usuario)){
                try {
                    const infoUsuario = await claveCorrecta({ usuario, clave });
                    if(infoUsuario.rowCount > 0){
                        await resetearIntentos(usuario);
                        ControladorSesion.crearSesion({req, infoUsuario: infoUsuario.rows[0]})
                        next();
                    }else{
                        await reducirIntentos(usuario);
                        return res.status(401).json({ Error: `Clave incorrecta para el usaurio ${usuario}.`})
                    }
                } catch (error) {
                    return console.error('error validando la información del usuario', error)
                }
            }else{
                return res.status(403).json({ Error: `El usuario ${usuario} está bloqueado`})
            }
        }else{
            return res.status(404).json({ Error: 'El usuario no existe'})
        }
    } else {
        return res.status(400).json({ Error: 'Es necesario ingresar un usuario y una clave'})
    }
}