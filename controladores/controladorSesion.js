export class ControladorSesion{
    static sesionExiste(req){
        return (req.session && req.session.no_usuario && req.session.em_usuario) ? true : false
    }

    static async cerrarSesion(req, res){
        req.session.destroy((err) => {
            if(err) return console.error('error al cerrar la sesión', err)
            return res.redirect('/')
        })
    }

    static crearSesion({req, infoUsuario}){
        if(this.sesionExiste(req)) return false

        for(const key in infoUsuario){
            req.session[key] = infoUsuario[key]
        }
        console.log('--------------------------------------------------------')
        console.log(`Sesión iniciada para: ${req.session.no_usuario}`)
        console.log('--------------------------------------------------------')
        return true;
    }
}